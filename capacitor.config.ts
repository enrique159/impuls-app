import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'xyz.enriquemarin.impulsapp',
  appName: 'Impuls App',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
