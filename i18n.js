const i18next = require('i18next');
const XHR = require('i18next-xhr-backend');
const LanguageDetector = require('i18next-browser-languagedetector');

const i18n = i18next.default ? i18next.default : i18next;

const options = {
  fallbackLng: "tc",
  detection: {
    order: ['path', 'querystring'],
    lookupQuerystring: 'lng',
    lookupPath: 'lng',
    lookupFromPathIndex: 0,
  },
  preload: ["en", "tc"], // preload all langages
  ns: ["common", "legal", "faq", "campaign", "giftRedemption"], // need to preload all the namespaces
  debug: false, // process.env.NODE_ENV !== 'production',
  saveMissing: true,
};

// for browser use xhr backend to load translations and browser lng detector
if (process.browser) {
  i18n
    .use(XHR)
    // .use(Cache)
    .use(LanguageDetector)
}

// initialize if not already initialized
if (!i18n.isInitialized) i18n.init(options)

// a simple helper to getInitialProps passed on loaded i18n data
i18n.getInitialProps = (req, namespaces) => {
  if (!namespaces) namespaces = i18n.options.defaultNS
  if (typeof namespaces === 'string') namespaces = [namespaces]

  req.i18n.toJSON = () => {} // do not serialize i18next instance to prevent circular references on the client

  const initialI18nStore = {}
  req.i18n.languages.forEach((l) => {
    initialI18nStore[l] = {}
    namespaces.forEach((ns) => {
      initialI18nStore[l][ns] = (req.i18n.services.resourceStore.data[l] || {})[ns] || {}
    })
  })

  return {
    i18n: req.i18n, // use the instance on req - fixed language on request (avoid issues in race conditions with lngs of different users)
    initialI18nStore,
    initialLanguage: req.i18n.language
  }
}

module.exports = i18n, {
  options,
}
