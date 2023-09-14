import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'angular-mobile',
  webDir: 'dist/Angular-Mobile',
  server: {
    androidScheme: 'https',
    url:  'https://14742.2645.161366.6:4200',
    cleartext: true,
  },
};

export default config;
