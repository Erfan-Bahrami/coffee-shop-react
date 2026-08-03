import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from '@rollup/plugin-babel'; // نیاز به نصب این پکیج دارد
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()  , babel({
      babelHelpers: 'bundled',
      plugins: ['babel-plugin-react-compiler'],
      extensions: ['.jsx', '.tsx'], // اطمینان از پردازش فایل‌های React
    }),],
})
