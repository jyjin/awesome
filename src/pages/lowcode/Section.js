import { useEffect, useState } from 'react';
import { Divider, Button, Card, Space, Tag } from 'antd';
import { history } from 'umi';
import { Icon } from '@/components';
import { DropTarget } from 'react-dnd';
import Field from '@/pages/lowcode/Field';
import st from './index.less';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import classNames from 'classnames';
import { ReactSortable } from 'react-sortablejs';

const Section = inject('lcStore')(
  observer((props) => {
    // console.log('section props == ', props);
    // console.log('section section == ', toJS(props.section));
    // console.log('section lc current == ', toJS(props.lcStore.current));

    function handleAdd(e) {
      e.stopPropagation();
      props.lcStore.addSection();
    }

    function handleSelectSection() {
      props.lcStore.selectSection(props.section.id);
    }

    const moveField = (fields) => {
      props.lcStore.sortField(props.section.id, fields);
    };

    const isSelected =
      props.section.id === props.lcStore.current['section'] &&
      props.lcStore.current['field'] === null;

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
        {/* 没有内容时，展示一个默认字段块 */}
        {props.section.fields.length ? null : <Tag style={_st_tag}></Tag>}
        {/* 排序字段 */}
        <ReactSortable
          group={'field-group'}
          animation={200}
          list={props.section.fields}
          setList={moveField}
          ghostClass={st['sortable-ghost']} // Class name for the drop placeholder
          chosenClass={st['sortable-chosen']} // Class name for the chosen item
          dragClass={st['sortable-drag']} // Class name for the dragging item
        >
          {props.section.fields.map((field) => (
            <Field
              key={'field-' + field.id.toString()}
              {...props}
              field={field}
            />
          ))}
        </ReactSortable>
        {/* 选中展示+号，新增区域 */}
        {isSelected ? (
          <div style={_st} className={st['add-btn']} onClick={handleAdd}>
            <Icon type="plus-circle-fill" size={20} color="#2196f3" />
          </div>
        ) : null}
      </Card>
    );
  }),
);

const DragBox = (props) => {
  const { isOver, connectDropTarget } = props;
  const cls = classNames(st['section-box'], { [st['drag-to']]: isOver });
  return connectDropTarget(
    <div className={cls}>
      <Section {...props}></Section>
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
