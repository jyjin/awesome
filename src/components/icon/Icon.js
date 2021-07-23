import { createFromIconfontCN } from '@ant-design/icons';
import PropTypes from 'prop-types';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2677882_utwoxi0h459.js',
});

const Icon = (props) => {
  let _st = {};
  props.size && (_st.fontSize = props.size);
  props.color && (_st.color = props.color);

  return <IconFont type={`icon-${props.type}`} style={_st} />;
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  // size: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
};

export default Icon;
