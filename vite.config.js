import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			manifest: {
				name: 'Concrete Sports App', // Required
				short_name: 'Concrete Sports App', // Required
				start_url: '/', // Required
				display: 'standalone', // Recommended
				background_color: '#ffffff', // Recommended
				theme_color: '#420a72', // Recommended
				lang: 'en', // Recommended
				scope: '/', // Recommended
				icons: [
					{
						src: '/icons/manifest-icon-512.maskable.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
					{
						src: '/icons/manifest-icon-192.maskable.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
		}),
	],
});
