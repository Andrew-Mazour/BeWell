export default {
  name: "BeWell2",
  extra: {
    cohereApiKey: process.env.COHERE_API_KEY,
    eas: {
      projectId: "eb31a7d7-a49c-45bb-9f02-2d6c0f76cffe"
    }
  },
  updates: {
    url: "https://u.expo.dev/eb31a7d7-a49c-45bb-9f02-2d6c0f76cffe"
  },
  android: {
    runtimeVersion: "1.0.0"
  },
  ios: {
    runtimeVersion: {
      policy: "appVersion"
    },
    bundleIdentifier: "com.horacewang.bewell2"  // <-- add your unique iOS bundle identifier here
  }
};
