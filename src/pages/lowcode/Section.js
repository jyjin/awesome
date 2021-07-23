import { useEffect, useState } from 'react';
import { Divider, Button, Card, Space, Tag } from 'antd';
import { history } from 'umi';
import { Icon } from '@/components';
import { DropTarget } from 'react-dnd';
import st from './index.less';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import classNames from 'classnames';

const Section = inject('lcStore')(
  observer((props) => {
    console.log('section props == ', props);
    console.log('section section == ', toJS(props.section));
    console.log('section lc current == ', toJS(props.lcStore.current));

    function handleAdd(e) {
      e.stopPropagation();
      props.lcStore.addSection();
    }

    function handleSelectSection() {
      props.lcStore.selectSection(props.section.id);
    }

    const isSelected = props.section.id === props.lcStore.current['section'];

    const rootCls = classNames({
      [st['section']]: true,
      [st['selected']]: isSelected,
    });

    const _st = {
      position: 'absolute',
      height: '20px',
      left: '50%',
      bottom: 0,
      marginLeft: -10,
      marginBottom: -10,
      cursor: 'pointer',
      zIndex: 9,
    };
    const _st_tag = {
      height: 30,
      lineHeight: '30px',
      display: 'inline-block',
      width: '100%',
      border: '1px dashed #2979ff',
      background: '#f2f7ff',
      color: '#8c8c8c',
      textAlign: 'center',
    };
    return (
      <Card
        className={rootCls}
        size="small"
        title="视图操作按钮"
        title={props.name}
        onClick={handleSelectSection}
      >
        {props.section.fields.length ? null : <Tag style={_st_tag}></Tag>}
        <Space style={{ display: 'flex', flexWrap: 'wrap' }}>
          {' '}
          {props.section.fields.map((field) => (
            <Tag style={_st_tag}>{field.name}</Tag>
          ))}
        </Space>
        {isSelected ? (
          <div style={_st} className={st['add-btn']} onClick={handleAdd}>
            {' '}
            <Icon type="plus-circle-fill" size={20} color="#2196f3">
              ADD
            </Icon>
          </div>
        ) : null}
      </Card>
    );
  }),
);

const DragBox = (props) => {
  const { canDrop, isOver, allowedDropEffect, connectDropTarget } = props;
  console.log('isOVer == ', isOver);
  const cls = classNames({
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
