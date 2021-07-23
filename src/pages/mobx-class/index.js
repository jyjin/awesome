import React from 'react';
import { Button, Space } from 'antd';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import { injectIntl } from 'react-intl';
import { JsonViewer } from '@/components';
import st from './index.less';

@inject('global')
@inject('intls')
@inject('lcStore')
@injectIntl
@observer
class DndTest extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAdd() {
    const id =
      this.props.lcStore.sections[this.props.lcStore.sections.length - 1].id +
      1;
    this.props.lcStore.addSection({
      id,
      name: `区域${id}`,
      cols: 1,
      fields: [],
    });
  }

  render() {
    console.log('测试store刷新 == ', this.props);
    return (
      <Space direction="vertical" style={{ width: '100%' }}>
        <h1>React Class注解方式</h1>
        <Space>
          点击后会随着mobx数据改变，页面更新
          <Button type="primary" onClick={this.handleAdd.bind(this)}>
            添加区域
          </Button>
        </Space>
        <JsonViewer json={this.props.lcStore.sections} />
      </Space>
    );
  }
}

/**
 * 注意hook这里注解的写法
 * 1.inject的内容必须是Provider的props属性
 * 2.observer必须在inject内层，有顺序要求
 */
export default DndTest;
