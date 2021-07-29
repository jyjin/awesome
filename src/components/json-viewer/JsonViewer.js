import PropTypes from 'prop-types';
import classNames from 'classnames';
import st from './index.less';

const JsonViewer = ({ json }) => {
  if (!json) {
    console.warn("[ JSON Viewer ] == 'json' shouldn't be null");
    return null;
  }

  const rootCls = classNames(st['json-viewer'], 'jyjin');
  return <pre className={rootCls}>{JSON.stringify(json, null, 2)}</pre>;
};

JsonViewer.propTypes = {
  json: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default JsonViewer;
