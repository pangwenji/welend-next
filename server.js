require("dotenv").config();

const bugsnag = require("@bugsnag/js");
const bugsnagExpress = require("@bugsnag/plugin-express");

const express = require("express");
const helmet = require("helmet");
const path = require("path");
const next = require("next");
const basicAuth = require("express-basic-auth");

const dev = process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "staging";
const app = next({ dev });

const i18nextMiddleware = require("i18next-express-middleware");
const Backend = require("i18next-node-fs-backend");
const routes = require("./routes");
const i18n = require("./i18n");
const sitemapAndRobots = require("./sitemapAndRobots");

const { version } = require("./package.json");

const handler = routes.getRequestHandler(app);

const authMiddleware = (req, res, next) => {
  if (process.env.NODE_ENV === "staging") {
    basicAuth({
      users: { 
        [`${process.env.WELEND_USERNAME}`]: process.env.WELEND_PASSWORD,
        [`${process.env.EXTERNAL_USERNAME}`]: process.env.EXTERNAL_PASSWORD,
      },
      challenge: true
    })(req, res, next);
  } else {
    next();
  }
}

i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    ...i18n.options,
    backend: {
      loadPath: path.join(__dirname, "/locales/{{lng}}/{{ns}}.json"),
      addPath: path.join(__dirname, "/locales/{{lng}}/{{ns}}.missing.json"),
    },
  });

app.prepare().then(() => {
  const server = express();

  sitemapAndRobots({server});

  server.use(helmet());

  if (process.env.BUGSNAG_KEY) {
    const bugsnagClient = bugsnag({
      apiKey: process.env.BUGSNAG_KEY,
      releaseStage: process.env.NODE_ENV,
      notifyReleaseStages: ["production", "staging"],
      appVersion: version,
    });
    
    bugsnagClient.use(bugsnagExpress);
    const bugsnagMiddleware = bugsnagClient.getPlugin("express");
  
    server.use(bugsnagMiddleware.requestHandler);
    server.use(bugsnagMiddleware.errorHandler);
  }

  server.use(i18nextMiddleware.handle(i18n));

  // serve locales for client
  server.use("/locales", express.static(path.join(__dirname, "/locales")));

  // missing keys
  server.post("/locales/add/:lng/:ns", i18nextMiddleware.missingKeyHandler(i18n));

  server.get("/assets/*", express.static(path.join(__dirname, '/static')));

  server.get("/internal/ping", (_, res) => {
    res.send("pong");
  });

  // ghost page
  server.get(/(tc|en)\/(.*)\.html/, (_, res) => {
    return res.redirect(301, "/");
  });

  server.get("*", authMiddleware, (req, res) => handler(req, res));

  server.listen(process.env.PORT, (err) => {
    if (err) { throw err; }
    console.log(`> Ready on http://localhost:${process.env.PORT}`);
  });
});
