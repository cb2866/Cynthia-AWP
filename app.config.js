import "dotenv/config";

export default {
  expo: {
    name: "Cynthia-AWP",
    slug: "Cynthia-AWP",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#000000",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      firebaseApiKey: "AIzaSyAjd7jfzb-FIC352Ak1xY3vo6HzmMjQVb0",
      firebaseAuthDomain: "cynthia-awp.firebaseapp.com",
      firebaseProjectId: "cynthia-awp",
      firebaseStorageBucket: "cynthia-awp.appspot.com",
      firebaseMessagingSenderId: "535041923584",
      firebaseAppId: "1:535041923584:web:dca5c8090cc06933e956e5",
      firebaseMeasurementId: "G-RSW1CZLPPY",
    },
  },
};
