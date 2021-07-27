import { useEffect, useState } from 'react';
import { Layout, Menu, Spin } from 'antd';
import { Link, useRequest } from 'umi';
import { Icon } from '@/components';
import menuData from '../../../mock/menu/menu';
import './index.less';
import axios from 'axios';
const { Sider } = Layout;
const { SubMenu } = Menu;

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [menuData, setMenuData] = useState([]);
  // console.log('env1 === ', process.env.RUN_TYPE);
  // console.log('env1 === ',JYJIN);
  // console.log('env1 === ',process.env.J_TYPE);
  const getMenuService = () => {
    return axios.get('/api/menus');
  };
  let menuApi = useRequest(() => getMenuService(), {
    manual: true,
    refreshDeps: [],
  });

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      menuApi.data = menuData;
    } else {
      menuApi.run();
    }
    return () => {
      console.log('[ Side Menu ] unmount !');
    };
  }, []);

  useEffect(() => {
    setMenuData(menuApi.data);
  }, [menuApi.data]);

  if (!menuData || !menuData.length) {
    return <Spin />;
  }

  function handleClick(subMenu) {
    if (subMenu.path.indexOf('lowcode') > -1) {
      sessionStorage.setItem('prevPath', location.hash.replace('#', ''));
    }
  }

  return (
    <Sider
      style={{ minHeight: 'calc(100vh - 60px)' }}
      // collapsedWidth={0}
      collapsedWidth={40}
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
    >
      <Menu mode="inline" defaultSelectedKeys={['4']}>
        {menuData.map((menu) => {
          return (
            <SubMenu
              key={menu.id}
              title={menu.name}
              icon={<Icon type={`${menu.icon}`} />}
            >
              {menu?.children?.map((sub) => {
                return (
                  <Menu.Item
                    key={`${menu.id}_${sub.id}`}
                    icon={<Icon type={`${sub.icon}`} />}
                  >
                    <Link to={sub.path} onClick={() => handleClick(sub)}>
                      {' '}
                      {sub.name}
                    </Link>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default SideMenu;
