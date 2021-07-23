import { useEffect, useState } from 'react';
import { Layout, Button, Divider, Space, Drawer } from 'antd';
import { history } from 'umi';
import { Icon, JsonViewer } from '@/components';
import st from './index.less';
import { inject, observer } from 'mobx-react';

const { Header: AntHeader, Content } = Layout;

const ExportPreviewer = inject('lcStore')(
  observer((props) => {
    return (
      <Drawer
        title="数据JSON"
        width={720}
        visible={props.visible}
        bodyStyle={{ paddingBottom: 80 }}
        onClose={() => {
          props.close();
        }}
      >
        <JsonViewer json={props.lcStore.sections} />
      </Drawer>
    );
  }),
);

const Header = () => {
  function goBack() {
    const path = sessionStorage.getItem('prevPath') || '/';
    history.push(path);
  }

  const [visible, setVisible] = useState(false);

  function handleExport() {}

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
          <Button
            type="primary"
            icon={<Icon type="upload" size={16} />}
            onClick={() => setVisible(true)}
          >
            导出
          </Button>
          <Button type="primary" icon={<Icon type="file-text" size={16} />}>
            保存
          </Button>
        </Space>
      </AntHeader>
      <ExportPreviewer visible={visible} close={() => setVisible(false)} />
    </Layout>
  );
};

export default Header;
