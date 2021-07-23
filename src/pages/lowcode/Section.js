import { useEffect, useState } from 'react';
import { Layout, Button, Card, Space, Tag } from 'antd';
import { history } from 'umi';
import { Icon } from '@/components';
import { DropTarget } from 'react-dnd';
import st from './index.less';

const Section = (props) => {
  console.log('section props == ', props);
  return (
    <Card
      className="section"
      size="small"
      title="视图操作按钮"
      title={props.name}
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
  );
};

const DragBox = (props) => {
  const { canDrop, isOver, allowedDropEffect, connectDropTarget } = props;
  return connectDropTarget(
    <div>
      <Section {...props} />
    </div>,
  );
};

const type = 'box';
const setting = {
  drop: ({ allowedDropEffect, data }) => ({
    name: `${allowedDropEffect} Dustbin`,
    data,
    allowedDropEffect,
  }),
};
const fn = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
});

export default DropTarget(type, setting, fn)(DragBox);
