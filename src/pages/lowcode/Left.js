import { useEffect, useState } from 'react';
import { Layout, Tabs, Tag, Divider, Space } from 'antd';
import { history, useRequest } from 'umi';
import { Icon, Loading } from '@/components';
import { getJyCompos } from '@/pages/lowcode/service';
import st from './index.less';
import Center from './Center';
import classNames from 'classnames';
import Box from './Box';
import { inject, observer } from 'mobx-react';

const { TabPane } = Tabs;

const TabContent = inject('lcStore')(
  observer((props) => {
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          padding: '0 20px',
        }}
      >
        {props.data.map((comp) => {
          return (
            <Box key={comp.code} name={comp.name} source={comp} {...props} />
          );
        })}
      </div>
    );
  }),
);

const Left = () => {
  const jyCompoRes = useRequest(getJyCompos);

  useEffect(() => {}, [jyCompoRes.data]);

  function callback(key) {
    console.log(key);
  }

  if (!jyCompoRes.data) {
    return <Loading />;
  }

  return (
    <Layout className={st['lc-content-left']}>
      <Tabs
        tabBarStyle={{ padding: '0 24px' }}
        defaultActiveKey="components"
        onChange={callback}
      >
        <TabPane tab="组件" key="components">
          <TabContent data={jyCompoRes.data} />
        </TabPane>
        <TabPane tab="自定义" key="customer">
          <TabContent data={jyCompoRes.data} />
        </TabPane>
      </Tabs>
    </Layout>
  );
};

export default Left;
