const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  i18n,
  env: {
    TEST_URL: 'http://localhost:3000',
    PRODUCTION_URL: 'https://genbaneko.vercel.app'
  },
}
