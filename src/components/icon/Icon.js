/**
 * 此图标库对应地址：
 * https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.11&manage_type=myprojects&projectId=2677882&keyword=&project_type=&page=
 * 
 * 图标使用格式 abc-abc，无需驼峰
 */
import { createFromIconfontCN } from '@ant-design/icons';
import PropTypes from 'prop-types';
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
