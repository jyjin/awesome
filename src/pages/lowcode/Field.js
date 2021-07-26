import { Layout, Tabs, Tag, Divider, Space } from 'antd';
import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';
import { toJS } from 'mobx';
import st from './index.less';

export default (props) => {
  const { field, index, moveCard } = props;
  const { id, name } = field;
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: 'tag',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
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
  const _st_tag = {
    height: 30,
    lineHeight: '30px',
    display: 'inline-block',
    width: '100%',
    background: '#f0f0f0',
    color: '#8c8c8c',
    textAlign: 'center',
    cursor: 'move',
    marginBottom: '14px',
  };

  drag(drop(ref));
  return (
    <Tag
      className={st['compo']}
      ref={ref}
      style={{ ..._st_tag }}
      data-handler-id={handlerId}
    >
      {props.field.name}
    </Tag>
  );
};
