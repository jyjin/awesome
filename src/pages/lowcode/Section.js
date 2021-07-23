import { useEffect, useState } from 'react';
import { Layout, Button, Card, Space, Tag } from 'antd';
import { history } from 'umi';
import { Icon } from '@/components';
import { DropTarget } from 'react-dnd';
import st from './index.less';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import classNames from 'classnames';

const Section = observer((props) => {
  console.log('section props == ', props);
  console.log('section props == ', toJS(props.section));
  return (
    <Card
      className="section"
      size="small"
      title="视图操作按钮"
      title={props.name}
    >
      <Space>
        {props.section.fields.map((field) => {
          return <Tag>{field.name}</Tag>;
        })}
      </Space>
    </Card>
  );
});

const DragBox = (props) => {
  const { canDrop, isOver, allowedDropEffect, connectDropTarget } = props;
  console.log('isOVer == ', isOver);
  const cls = classNames({
    [st['drag-border']]: !isOver,
    [st['drag-to']]: isOver,
  });
  return connectDropTarget(
    <div className={cls}>
      <Section {...props} />
    </div>,
  );
};

const type = 'box';
const setting = {
  drop: ({ allowedDropEffect, section }) => ({
    name: `${allowedDropEffect} Dustbin`,
    section: toJS(section),
    allowedDropEffect,
  }),
};
const fn = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
});

export default DropTarget(type, setting, fn)(DragBox);
