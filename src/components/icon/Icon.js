import { createFromIconfontCN } from '@ant-design/icons';
import PropTypes from 'prop-types';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2677882_5rpv8e0z9w5.js',
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
