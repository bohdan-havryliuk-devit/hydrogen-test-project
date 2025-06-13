import {defineConfig} from 'vite';
import {hydrogen} from '@shopify/hydrogen/vite';
import {oxygen} from '@shopify/mini-oxygen/vite';
import {reactRouter} from '@react-router/dev/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    hydrogen(),
    oxygen(),
    reactRouter(),
    tsconfigPaths(),
  ],
  css: {
    postcss: './postcss.config.cjs',
  },
  server: {
    allowedHosts: ["3cbf-46-219-195-158.ngrok-free.app"]
  }
});
