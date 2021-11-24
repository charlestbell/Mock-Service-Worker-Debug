module.exports = {
  preset: "jest-expo",
  moduleDirectories: ["node_modules", "test-utils"],

  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@react-native|react-native|@fortawesome|expo-app-loading|expo-splash-screen|expo-modules-core|expo-font|expo-asset|expo-constants|expo-sqlite|@react-navigation|expo-location|@expo|expo-status-bar)/).*/",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
};
