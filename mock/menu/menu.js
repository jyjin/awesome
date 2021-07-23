export default [
  {
    id: 1,
    path: '/',
    name: '技术测试',
    icon: 'trophy',
    children: [
      {
        id: 11,
        path: '/me',
        name: 'react-intl JS用法',
        icon: 'font-colors',
      },
      {
        id: 12,
        path: '/home',
        name: 'react-intl 标签用法',
        icon: 'font-colors',
      },
      {
        id: 13,
        path: '/content-download',
        name: '测试content download',
        icon: 'download',
      },
      {
        id: 14,
        path: '/ggeditor',
        name: '测试ggeditor',
        icon: 'cluster',
      },
      {
        id: 15,
        path: '/inject',
        name: 'hook inject',
        icon: 'trophy',
      },
    ],
  },
  {
    id: 2,
    path: '/lowcode',
    name: 'Low Code',
    icon: 'code',
    children: [
      {
        id: 21,
        path: '/lowcode',
        name: 'Low Code',
        icon: 'code',
      },
    ],
  },
  {
    id: 3,
    path: '/mobx',
    name: 'mobx-react',
    icon: 'appstore',
    children: [
      {
        id: 31,
        path: '/mobx',
        name: 'Mobx示例Hook',
        icon: 'drag',
      },
      {
        id: 32,
        path: '/mobx-class',
        name: 'Mobx示例注解',
        icon: 'drag',
      },
      {
        id: 33,
        path: '/mobx-obv',
        name: 'Mobx示例Observer',
        icon: 'drag',
      },
    ],
  },
];
