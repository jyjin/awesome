
import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';
import menuData from './data';
import { Icon } from '@/components'
import './index.less';
const { Sider } = Layout;
const { SubMenu } = Menu;

const SideMenu = () => {

  const [collapsed, setCollapsed] = useState(true);

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
        {menuData.map(menu => {
          return (
            <SubMenu key={menu.id} title={menu.name} icon={<Icon type={`${menu.icon}`}/>}>
              {menu.children.map(sub => {
                return (
                  <Menu.Item key={`${menu.id}_${sub.id}`} icon={<Icon type={`${menu.icon}`}/>} >
                    <Link to={sub.path}> {sub.name}</Link>
                  </Menu.Item>
                )
              })}
            </SubMenu>
          )
        })}
      </Menu>
    </Sider>
  )
}

export default SideMenu;