import { ConfigContext, ExpoConfig } from 'expo/config';

const APP_VARIANT: 'production' | 'dev' | 'stage' | 'local' =
  (process.env as any).APP_VARIANT || 'production';

export default ({ config }: ConfigContext): ExpoConfig => {
  const appName = {
    local: 'コネハト (local)',
    dev: 'コネハト (dev)',
    stage: 'コネハト (stage)',
    production: 'コネハト',
  };

  const bundleIdentifier = {
    local: 'com.outsung.conehato.local',
    dev: 'com.outsung.conehato.dev',
    stage: 'com.outsung.conehato.stage',
    production: 'com.outsung.conehato',
  };

  const scheme = {
    local: 'conehato-local',
    dev: 'conehato-dev',
    stage: 'conehato-stage',
    production: 'conehato',
  };

  const expoProjectId = 'ba177807-1b2a-47c0-9133-2e9757abdaa3';

  const version = '0.0.1';
  const buildNumber = 1;

  return {
    ...config,
    name: appName[APP_VARIANT],
    scheme: scheme[APP_VARIANT],
    slug: 'conehato',
    version,
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#FFFFFF',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      bundleIdentifier: bundleIdentifier[APP_VARIANT],
      buildNumber: String(buildNumber),
      supportsTablet: true,
      config: { usesNonExemptEncryption: false },
    },
    android: {
      googleServicesFile: './google-services.json',
      package: bundleIdentifier[APP_VARIANT],
      versionCode: buildNumber,
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#D6E6F5',
      },
    },
    extra: { eas: { projectId: expoProjectId } },
    updates: {
      url: `https://conehato-app-update-server.vercel.app/api/update/expo/manifests/release/${APP_VARIANT}/latest`,
    },
  };
};
