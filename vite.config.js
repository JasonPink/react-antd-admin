import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    base: './',
    plugins: [
        react()
        // AutoImport({
        //     imports: ['react', 'react-router-dom'],
        //     dts: 'src/auto-import.d.ts' // 路径下自动生成文件夹存放全局指令
        // })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                // additionalData: `@primary-color: red;`
                additionalData: `@import '@/styles/var.less';`
            }
        }
    }
});
