import { Layout, Tabs, Tag, Divider, Space } from 'antd';
import st from './index.less';

export default (props) => {
  const _st_tag = {
    height: 30,
    lineHeight: '30px',
    display: 'inline-block',
    width: '100%',
    background: '#f0f0f0',
    color: '#8c8c8c',
    textAlign: 'center',
    cursor: 'move',
    marginBottom: '14px',
  };

  return (
    <Tag className={st['compo']} style={{ ..._st_tag }}>
      {props.field.name}
    </Tag>
  );
};
