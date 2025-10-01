/// <reference types="vitest" />

import analog from '@analogjs/platform';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineConfig, splitVendorChunkPlugin } from 'vite';

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
          routes: [
            '/',
            '/tips',
            '/tips/vulgarisateurs',
            '/tips/sites-pratiques',
            '/tips/vs-code',
            '/posts',
            '/posts/metier-web',
            '/posts/demystification',
            '/portfolio',
            '/portfolio/test-multiplication',
            '/portfolio/metronome',
            '/portfolio/boulier',
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
    optimizeDeps: {
      include: ['@angular/common'],
    },
    server: {
      fs: {
        allow: ['.'],
      },
    },
  };
});
