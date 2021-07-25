import { DragSource } from 'react-dnd';
import classNames from 'classnames';
import { toJS } from 'mobx';
import PropTypes from 'prop-types';
import st from './index.less';

const nullFunc = () => {};
const FromElement = (props) => {
  const { name, key, isDragging, connectDragSource, element } = props;
  debugger;
  const opacity = isDragging ? 0.4 : 1;
  let tagCls = classNames(st['tag']);

  // return <div>'jyjin'</div>

  return connectDragSource(
    <div key={key} className={tagCls} style={{ opacity }}>
      {/* <element {...props} /> */}
      {/* {element} */}
      {props.children}
      {/* jyjinjyjin */}
    </div>,
  );
};

const DragFrom = (props) => {
  const type = 'box';
  const spec = {
    beginDrag: props.begin,
    endDrag: props.end || nullFunc,
    canDrag: props.canDrag || nullFunc,
    isDragging: props.isDragging || nullFunc,
  };

  const collectFn = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  });

  return DragSource(type, spec, collectFn)(FromElement);
};

DragFrom.prototype = {
  begin: PropTypes.func.isRequired,
  end: PropTypes.func,
  canDrag: PropTypes.func,
  isDragging: PropTypes.func,
  element: PropTypes.element,
};

export default DragFrom;
