import { defineConfig } from 'umi';
import { default as routes } from '../src/pages/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  fastRefresh: {},
  dynamicImport: {
    loading: '@/components/loading/Loading',
  },
  history: {
    type: 'hash',
  },
  define: {
    'process.env.RUN_TYPE': 'dev',
    'process.env.J_TYPE': 'dev',
    JYJIN: 'jyjin',
  },
  routes,
  fastRefresh: {},
});
