import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
    ],
    watch: {
        usePolling: true,
        origin: 'http://laravel.test'
    },
    server: {
        hmr: {
            host: 'laravel.test'
        }
    }
});
