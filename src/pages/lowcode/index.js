import { useEffect, useState } from 'react';
import { Layout, Button, Divider, Space } from 'antd';
import { history } from 'umi';
import { Icon } from '@/components';
import Header from '@/pages/lowcode/Header';
import Left from '@/pages/lowcode/Left';
import Center from '@/pages/lowcode/Center';
import Right from '@/pages/lowcode/Right';
import st from './index.less';
const { Content } = Layout;

const LowCode = () => {
  return (
    <Layout className={st['lc']}>
      <Header />
      <Content className={st['lc-content']}>
        <Left />
        <Center />
        <Right />
      </Content>
    </Layout>
  );
};

export default LowCode;
