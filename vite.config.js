import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
    })
  ],
  css: {
    postcss: {
      plugins: [
        require('autoprefixer')({
          overrideBrowserslist: [
            '> 1%',
            'last 2 version',
            // 'ie >= 11',
            'not dead',
            'Android >= 5',
            'iOS >= 9'
          ],
          grid: true
        })
      ]
    }
  },
  server: {
    port: 3004,
    cros: true,
    open: true,
    fs: {
      allow: [
        '../'
      ]
    }
  },
  base: 'random/',
  resolve: {
    alias: [{
      find: '@',
      replacement: './src'
    }]
  },
  // 生产环境移除console
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'node_lib'
          } else if (id.includes('roll-other-data.js')) {
            return 'roll-other-data'
          } else if (id.includes('sakura-old')) {
            return 'sakura-carddata-old'
          } else if (id.includes('js/sub/sakura/carddata/')) {
            return 'sakura-carddata-na'
          }
        }
      }
    }
  }
})
