import { createFromIconfontCN } from '@ant-design/icons';
import PropTypes from 'prop-types';
// https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=2677882
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2677882_tzcg0p99ksf.js',
});

const Icon = (props) => {
  let _st = {};
  props.size && (_st.fontSize = props.size);
  props.color && (_st.color = props.color);

  return <IconFont type={`icon-${props.type}`} style={_st} />;
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
};

export default Icon;
