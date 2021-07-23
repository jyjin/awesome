import { useEffect, useState } from 'react';
import { Layout, Button, Card, Space, Tag } from 'antd';
import { history } from 'umi';
import { Icon } from '@/components';
import { DropTarget } from 'react-dnd';
import DragBox from './Section';
import { inject, observer } from 'mobx-react';
import st from './index.less';

const Center = inject('lcStore')(
  observer((props) => {
    return (
      <Layout className={st['lc-content-center']}>
        <Card
          size="small"
          title="视图操作按钮"
          style={{ margin: '20px 20px 0', borderColor: '#d8d8d8' }}
        >
          <Tag
            style={{
              height: 30,
              lineHeight: '30px',
              display: 'inline-block',
              width: '100%',
              border: '1px dashed #2979ff',
              background: '#f2f7ff',
              color: '#8c8c8c',
              textAlign: 'center',
            }}
          >
            你可以拖动左侧组件完成设置
          </Tag>
        </Card>
        {props.lcStore.sections.map((section) => {
          return (
            <DragBox
              allowedDropEffect="move"
              name={section.name}
              data={section}
            />
          );
        })}
      </Layout>
    );
  }),
);

export default Center;
