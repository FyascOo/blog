/// <reference types="vitest" />

import analog from '@analogjs/platform';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineConfig, splitVendorChunkPlugin } from 'vite';

import * as fs from 'fs';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const dirPath = path.resolve(__dirname, './src/content');
const posts = fs.readdirSync(dirPath);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    publicDir: 'src/public',

    build: {
      target: ['es2020'],
    },
    plugins: [
      analog({
        static: true,
        prerender: {
          routes: async () => [
            '/',
            '/about',
            '/post',
            ...posts.map((post) => `/blog/posts/${post.replace('.md', '')}`),
          ],
          sitemap: {
            host: 'https://alan.choufa.fr/',
          },
        },
      }),
      nxViteTsPaths(),
      splitVendorChunkPlugin(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      cache: {
        dir: `../node_modules/.vitest`,
      },
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
