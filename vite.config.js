import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import ViteFonts from 'vite-plugin-fonts';
import reactSvgPlugin from 'vite-plugin-react-svg';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    ViteFonts({
      google: {
        families: [
          {
            name: 'Roboto',
            styles: 'wght@400;600;900',
          },
        ],
      },
    }),
    reactSvgPlugin(),
  ],
});
