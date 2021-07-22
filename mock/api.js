import menuData from './menu/menu';
import jyCompData from './jy-components/jy-components';

export default {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },

  // 组件集
  'GET /api/jy-components': jyCompData,

  // GET 可忽略
  'GET /api/menus': menuData,

  // 支持自定义函数，API 参考 express@4
  '/api/delay': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    const time = 3000;
    res.write(JSON.stringify({ name: 'jyjin', content: '看你多久能看到我' }));
    setTimeout(function () {
      res.end(); // content download end
    }, time);
  },
  '/api/loop': (req, res) => {
    for (var i = 0; i < 1000; i++) {
      console.log(i);
    }
    res.write(JSON.stringify({ age: 18 }));
    res.end(); // content download end
  },
};
