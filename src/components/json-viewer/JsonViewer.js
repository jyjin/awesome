import PropTypes from 'prop-types';
import classNames from 'classnames';
import st from './index.less';

const JsonViewer = ({ json, text }) => {
  
  const rootCls = classNames(st['json-viewer']);
  
  if (text) {
    return <pre className={rootCls}>{text}</pre>;
  }

  if (!json) {
    console.warn("[ JSON Viewer ] == 'json' shouldn't be null, expected Object or Array");
    return null;
  }

  return <pre className={rootCls}>{JSON.stringify(json, null, 2)}</pre>;
};

JsonViewer.propTypes = {
  json: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  text: PropTypes.string,
};

export default JsonViewer;
