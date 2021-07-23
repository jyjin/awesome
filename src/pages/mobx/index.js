import { Button, Space } from 'antd';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import { injectIntl } from 'react-intl';
import { JsonViewer } from '@/components';
import st from './index.less';

const Dnd = observer((props) => {
  console.log('测试注入的store == ', toJS(props.lcStore));
  console.log('测试注入的其他数据global,intls == ', toJS(props));

  function handleAdd() {
    const id = props.lcStore.sections[props.lcStore.sections.length - 1].id + 1;
    props.lcStore.addSection({ id, name: `区域${id}`, cols: 1, fields: [] });
  }

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <h1>React Hook注解方式</h1>
      <Space>
        点击后会随着mobx数据改变，页面更新
        <Button type="primary" onClick={handleAdd}>
          添加区域
        </Button>
      </Space>
      <JsonViewer json={props.lcStore.sections} />
    </Space>
  );
});

/**
 * 注意hook这里注解的写法
 * 1.inject的内容必须是Provider的props属性
 * 2.observer必须在inject内层，有顺序要求
 */
export default inject('global', 'intls', 'lcStore')(injectIntl(Dnd));
