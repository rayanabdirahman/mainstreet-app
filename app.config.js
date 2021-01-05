export default {
  name: 'mainstreet',
  slug: 'mainstreet',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: [
    '**/*'
  ],
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF'
    }
  },
  web: {
    favicon: './assets/favicon.png'
  },
  extra: {
    API_URL: process.env.__DEV__ ? 'http://627fedf30c8d.ngrok.io/api' : 'http://627fedf30c8d.ngrok.io/api',
    LOCALSTORAGE_AUTHORIZATION_TOKEN: 'Authorization-Token'
  },
}