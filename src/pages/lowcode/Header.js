import { useEffect, useState } from 'react';
import { Layout, Button, Divider, Space } from 'antd';
import { history } from 'umi';
import { Icon } from '@/components';
import st from './index.less';

const { Header: AntHeader, Content } = Layout;

const Header = () => {
  function goBack() {
    const path = sessionStorage.getItem('prevPath') || '/';
    history.push(path);
  }
  return (
    <Layout>
      <AntHeader className={st['lc-header']}>
        <Space className={st['lc-header-left']}>
          <Button
            type="link"
            icon={<Icon type="fullscreen-exit" color="black" />}
            onClick={goBack}
          ></Button>
          <Divider
            type="vertical"
            style={{ borderColor: '#ddd', height: 30 }}
          />
          <h1>设计器</h1>
        </Space>
        <Space className={st['lc-header-center']}>
          <div></div>
        </Space>
        <Space className={st['lc-header-right']}>
          <Button type="ghost" icon={<Icon type="upload" size={16} />}>
            预览
          </Button>
          <Button type="primary" icon={<Icon type="file-text" size={16} />}>
            保存
          </Button>
        </Space>
      </AntHeader>
      <Content></Content>
    </Layout>
  );
};

export default Header;
