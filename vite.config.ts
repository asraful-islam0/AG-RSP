import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

import fs from 'fs';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'apk-downloader',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url && (req.url.startsWith('/AG_DIGITAL.apk') || req.url.startsWith('/AG_DIGITAL_Official.apk'))) {
              const apkPath = path.resolve(__dirname, 'public/AG_DIGITAL.apk');
              if (fs.existsSync(apkPath)) {
                res.setHeader('Content-Type', 'application/vnd.android.package-archive');
                res.setHeader('Content-Disposition', 'attachment; filename="AG_DIGITAL.apk"');
                res.setHeader('Content-Length', fs.statSync(apkPath).size);
                return fs.createReadStream(apkPath).pipe(res);
              }
            }
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
