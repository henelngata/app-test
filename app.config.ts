import { ConfigContext, ExpoConfig } from "expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.bux_4_drive.apptest.dev";
  }

  if (IS_PREVIEW) {
    return "com.bux_4_drive.apptest.preview";
  }

  return "com.bux_4_drive.apptest";
};

const getAppName = () => {
  if (IS_DEV) {
    return "app-test (Dev)";
  }

  if (IS_PREVIEW) {
    return "app-test (Preview)";
  }

  return "app-test";
};


export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
    "name": getAppName(),
    "slug": "app-test",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "apptest",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true,
      bundleIdentifier: getUniqueIdentifier(),
     
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "edgeToEdgeEnabled": true,
      "package": getUniqueIdentifier(),
     
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "router": {},
      "eas": {
        "projectId": "89e46cad-c8ac-4446-8acb-c74c3d2a282d"
      }
  },
    updates: {
    url: "https://u.expo.dev/89e46cad-c8ac-4446-8acb-c74c3d2a282d"
  },
  runtimeVersion: {
    policy: "appVersion"
  },
    owner: "bux_4_drive"
  })

