import React from 'react';
import { Button, Space } from 'antd';
import { inject, Observer } from 'mobx-react';
import { toJS } from 'mobx';
import { injectIntl } from 'react-intl';
import { JsonViewer } from '@/components';
import st from './index.less';

const Dnd = (props) => {
  console.log('测试注入的store == ', toJS(props.lcStore));
  console.log('测试注入的其他数据global,intls == ', toJS(props));

  function handleAdd() {
    const id = props.lcStore.sections[props.lcStore.sections.length - 1].id + 1;
    props.lcStore.addSection({ id, name: `区域${id}`, cols: 1, fields: [] });
  }

  return (
    <div>
      <h1>Observer标签局部监听控制</h1>
      <Space>
        <span>Store的section条数为：</span>
        {props.lcStore.sections.length}
      </Space>
      <Space style={{ width: '100%' }}>
        <span>点我增加section，section数据页面会更新，但是条数不更新</span>
        <Button type="primary" onClick={handleAdd}>
          添加区域
        </Button>
      </Space>
      <Observer>{() => <JsonViewer json={props.lcStore.sections} />}</Observer>
    </div>
  );
};

/**
 * 注意hook这里注解的写法
 * 1.inject的内容必须是Provider的props属性
 * 2.observer必须在inject内层，有顺序要求
 * 3.Observer标签可以代替observer函数
 */
export default inject('global', 'intls', 'lcStore')(injectIntl(Dnd));
