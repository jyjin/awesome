import { DragSource } from 'react-dnd';
import { Tag } from 'antd';
import classNames from 'classnames';
import st from './index.less';
import { toJS } from 'mobx';

const Box = ({ name, key, isDragging, connectDragSource }) => {
  const opacity = isDragging ? 0.4 : 1;
  let tagCls = classNames(st['tag']);

  return connectDragSource(
    <div className={tagCls} style={{ opacity }}>
      <Tag
        style={{
          width: '100%',
          height: '100%',
          lineHeight: '30px',
          fontSize: 14,
        }}
      >
        {name}
      </Tag>
    </div>,
  );
};

const type = 'box';
const setting = {
  beginDrag: (props) => ({ name: props.name, ...props }),
  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    console.log('drag target == ', props.source);

    if (!dropResult) {
      return;
    }
    console.log('drag to == ', toJS(dropResult.section));

    let id = 1;
    if (dropResult.section.fields.length) {
      id =
        dropResult.section.fields[dropResult.section.fields.length - 1].id + 1;
    }

    const field = {
      id,
      ...props.source,
    };
    props.lcStore.addField(dropResult.section.id, field);
  },
};
const fn = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

export default DragSource(type, setting, fn)(Box);
