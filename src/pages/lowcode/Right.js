import { useEffect, useState } from 'react';
import { Layout, Button, Divider, Space } from 'antd';
import { history } from 'umi';
import { Icon } from '@/components';
import st from './index.less';

const { Header, Content } = Layout;

const Right = () => {
  function goBack() {
    const path = sessionStorage.getItem('prevPath') || '/';
    history.push(path);
  }
  return <Layout className={st['lc-content-right']}>right</Layout>;
};

export default Right;
