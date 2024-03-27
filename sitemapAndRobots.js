const path = require("path");
const sm = require("sitemap");

const sitemap = sm.createSitemap({
  cacheTime: 600000, // 600 sec - cache purge period
  hostname: "https://www.welend.hk", // production path
});

const sitemapAndRobots = ({ server }) => {
  sitemap.add({
    changefreq: "weekly",
    priority: 1,
    url: "/",
  });

  sitemap.add({
    changefreq: "weekly",
    priority: 1,
    url: "/products/personal-loan",
  });

  sitemap.add({
    changefreq: "weekly",
    priority: 1,
    url: "/products/balance-transfer",
  });

  sitemap.add({
    changefreq: "weekly",
    priority: 0.8,
    url: "/products/no-doc-loan",
  });

  sitemap.add({
    changefreq: "weekly",
    priority: 0.6,
    url: "/card-debt-tips",
  });

  sitemap.add({
    changefreq: "weekly",
    priority: 0.6,
    url: "/faqs",
  });

  sitemap.add({
    changefreq: "weekly",
    priority: 0.6,
    url: "/about-us",
  });

  sitemap.add({
    changefreq: "weekly",
    priority: 0.4,
    url: "/contact-us",
  });

  sitemap.add({
    changefreq: "weekly",
    priority: 0.4,
    url: "/payment-methods",
  });

  sitemap.add({
    changefreq: "monthly",
    priority: 0.4,
    url: "/quotes",
  });

  sitemap.add({
    changefreq: "monthly",
    priority: 0.2,
    url: "/important-notice",
  });

  sitemap.add({
    changefreq: "monthly",
    priority: 0.2,
    url: "/money-lenders-ordinance",
  });

  sitemap.add({
    changefreq: "monthly",
    priority: 0.2,
    url: "/privacy-policy",
  });

  sitemap.add({
    changefreq: "monthly",
    priority: 0.2,
    url: "/customer-declaration",
  });
  // Note {} in next line is a placeholder filling the spot where the req parameter
  // would normally be listed (but isn't listed here since we aren't using it)
  server.get("/sitemap.xml", ({}, res) => {
    sitemap.toXML((err, xml) => {
      if (err) {
        res.status(500).end();
        return;
      }
      res.header("Content-Type", "application/xml");
      res.send(xml);
    });
  });
  // Note {} in next line is a placeholder filling the spot where the req parameter
  // would normally be listed (but isn't listed here since we aren't using it)
  server.get("/robots.txt", ({}, res) => {
    res.sendFile(path.join(__dirname, "./static", "robots.txt"));
  });
};

module.exports = sitemapAndRobots;
