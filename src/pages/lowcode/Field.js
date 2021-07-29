import { Layout, Tabs, Tag, Divider, Space } from 'antd';
import { inject, observer } from 'mobx-react';
import classNames from 'classnames';
import { toJS } from 'mobx';
import st from './index.less';

const Field = (props) => {
  const _st_tag = {
    height: 30,
    lineHeight: '30px',
    display: 'inline-block',
    width: '100%',
    fontSize: 14,
    textAlign: 'center',
    cursor: 'move',
    marginBottom: '14px',
  };

  function onFieldClick(e) {
    e.stopPropagation();
    props.lcStore.selectField(props.section.id, props.field.id);
  }

  const cls = classNames(st['compo'], {
    [st['selected']]:
      props.section.id === props.lcStore.current['section'] &&
      props.field.id === props.lcStore.current['field'],
  });

  console.log('current == ', toJS(props.lcStore.current));

  return (
    <Tag
      className={cls}
      style={{ ..._st_tag }}
      onClick={onFieldClick}
      closable={true}
    >
      {props.field.name}
    </Tag>
  );
};

export default inject('lcStore')(observer(Field));
