export default [
  { path: '/lowcode', component: '@/pages/lowcode/index' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', component: '@/pages/index' },
      { path: '/home', component: '@/pages/home/index' },
      { path: '/me', component: '@/pages/me/index' },
      { path: '/inject', component: '@/pages/inject/index' },
      { path: '/react-dnd', component: '@/pages/react-dnd/index' },
      {
        path: '/content-download',
        component: '@/pages/content-download/index',
      },
      { path: '/ggeditor', component: '@/pages/ggeditor/index' },
    ],
  },
];
