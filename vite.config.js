import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: [
                "resources/css/app.css",
                "resources/css/scss/custom.scss",
                "resources/js/app.js",
            ],
            refresh: true,
        }),
    ],
    resolve: {
        extensions: [
            ".mjs",
            ".js",
            ".ts",
            ".jsx",
            ".tsx",
            ".json",
            ".vue",
            ".scss",
        ],
        alias: {
            "@": "/resources/js",
        },
    },
});
