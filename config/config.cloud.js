import { defineConfig } from 'umi';

export default defineConfig({
  publicPath: '/awesome/',
  hash: true,
  define: {
    'process.env.RUN_TYPE': 'dev',
  },
});
