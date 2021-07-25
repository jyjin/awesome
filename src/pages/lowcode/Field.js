import { useEffect, useState } from 'react';
import { Layout, Tabs, Tag, Divider, Space } from 'antd';
import { history, useRequest } from 'umi';
import { Icon, Loading, DragFrom } from '@/components';
import { getJyCompos } from '@/pages/lowcode/service';
import st from './index.less';
import Center from './Center';
import classNames from 'classnames';
import { DropTarget, DragSource } from 'react-dnd';
import { inject, observer } from 'mobx-react';

// const Field = (props) => {
//   const _st_tag = { height: 30, lineHeight: '30px', display: 'inline-block', width: '100%', border: '1px solid #d8d8d8', background: '#f0f0f0', color: '#8c8c8c', textAlign: 'center', };
//   const { field } = props;
//   return (
//     <Tag style={_st_tag}>{field.name}</Tag>
//   )
// }

// const DragBox = (props) => {
//   const { canDrop, isOver, allowedDropEffect, connectDropTarget } = props;
//   console.log('isOVer == ', isOver);
//   const cls = classNames({
//     [st['drag-to']]: isOver,
//   });

//   return connectDropTarget(
//     <div className={cls}>
//       <Field {...props} />
//     </div>,
//   );
// };

// const FieldBox = (props) => {
//   const { name, key, isDragging, connectDragSource } = props
//   const opacity = isDragging ? 0.4 : 1;
//   let tagCls = classNames(st['tag']);

//   const type = 'field';
//   const setting = {
//     drop: (props) => ({
//       ...props,
//       allowedDropEffect: props.allowedDropEffect
//     }),
//   };
//   const fn = (connect, monitor) => {
//     debugger

//     return ({
//       connectDropTarget: connect.dropTarget(),
//       isOver: monitor.isOver(),
//       canDrop: true,// monitor.canDrop(),
//     })
//   };

//   const FieldItem = DropTarget(type, setting, fn)(DragBox);

//   return connectDragSource(
//     <div key={key} className={tagCls} style={{ opacity }}>
//       <FieldItem {...props} allowedDropEffect="move" />
//     </div>
//   );
// };

// const type = 'field';
// const setting = {
//   beginDrag: (props) => {
//     debugger
//     return { ...props }
//   },
//   endDrag(props, monitor) {
//     debugger
//   },
// };
// const fn = (connect, monitor) => ({
//   connectDragSource: connect.dragSource(),
//   isDragging: monitor.isDragging(),
// });
// export default DragSource(type, setting, fn)(FieldBox)

import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';

export default (props) => {
  const { field, index, moveCard } = props;
  const { id, name } = field;
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: 'tag',
    collect(monitor) {
      debugger;
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      debugger;
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: 'tag',
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  const _st_tag = {
    height: 30,
    lineHeight: '30px',
    display: 'inline-block',
    width: '100%',
    border: '1px solid #d8d8d8',
    background: '#f0f0f0',
    color: '#8c8c8c',
    textAlign: 'center',
    opacity,
  };

  drag(drop(ref));
  return (
    <Tag style={_st_tag} data-handler-id={handlerId}>
      {props.field.name}
    </Tag>
  );
};
