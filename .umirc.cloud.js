import { defineConfig } from 'umi';

export default defineConfig({
  base: 'awesome',
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  dynamicImport: {},
  fastRefresh: {},
  routes: [{
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', component: '@/pages/index' },
      { path: '/home', component: '@/pages/home/index' },
      { path: '/me', component: '@/pages/me/index' },
      { path: '/inject', component: '@/pages/inject/index' },
      { path: '/content-download', component: '@/pages/content-download/index' },
      { path: '/ggeditor', component: '@/pages/ggeditor/index' },
    ]
  }],
  alias: {
    // '@components': '@/components/*',
  },
  fastRefresh: {},
});
