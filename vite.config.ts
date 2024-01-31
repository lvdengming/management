import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const resolve = (path: string) => fileURLToPath(new URL('./' + path, import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            assets: resolve('src/assets'),
            router: resolve('src/router'),
            shared: resolve('src/shared'),
            stores: resolve('src/stores'),
            types: resolve('src/types'),
            views: resolve('src/views'),
            icons: resolve('src/shared/icons'),
            common: resolve('src/shared/common')
        }
    }
});
