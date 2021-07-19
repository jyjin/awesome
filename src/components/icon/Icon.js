import { createFromIconfontCN } from '@ant-design/icons';
import PropTypes from 'prop-types';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2677882_utwoxi0h459.js',
});

const Icon = props => {
  return <IconFont type={`icon-${props.type}`} />
};

Icon.propTypes = {
  type: PropTypes.string,
}

export default Icon;