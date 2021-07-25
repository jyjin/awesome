import { DropTarget } from 'react-dnd';
import classNames from 'classnames';
import st from './index.less';
import { toJS } from 'mobx';
import PropTypes from 'prop-types';

const nullFunc = () => {};
const ToElement = (props) => {
  const {
    canDrop,
    isOver,
    allowedDropEffect,
    connectDropTarget,
    element,
  } = props;
  console.log('isOVer == ', isOver);
  const cls = classNames({
    [st['drag-to']]: isOver,
  });
  return connectDropTarget(<div className={cls}>{element}</div>);
};

const DragTo = (props) => {
  const type = 'box';
  const spec = {
    drop: props.drop,
    hover: props.hover,
    canDrop: props.canDrop,
  };
  const collectFn = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  });
  return DropTarget(
    type,
    spec,
    collectFn,
  )(<ToElement element={props.element} />);
};

DragTo.prototype = {
  drop: PropTypes.func.isRequired,
  hover: PropTypes.func,
  canDrag: PropTypes.func,
};

export default DragTo;
