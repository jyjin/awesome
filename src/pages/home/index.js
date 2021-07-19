import styles from './index.less';
import React from 'react';
import { Select, Button, Tooltip, Row, Col, Avatar } from 'antd';
import { inject, observer, Observer } from 'mobx-react'
import homeStore from '@/stores/homeStore';
import { injectIntl } from 'react-intl';


// 注意class写法 这里的注入可以使用注解
@inject('global')
@inject('intls')
@injectIntl
// @observer
export default class Index extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    console.log('this.props == ', this.props)
    const { FormattedMessage, FormattedNumber } = this.props.intls
    console.log('显示我就说明整理页面都刷新了')
    
    return (
      <div>
        <Observer>
          {
            () => <div>请关闭@observe测试我的效果，注意必须是函数组件，前面有箭头函数 <b style={{color: 'red'}}>{homeStore.count}</b></div>
          }
        </Observer>
        <Button onClick={() => {
          homeStore.setCount();
        }}>测试store是否刷新</Button>
        <div>{this.props.global.name}</div>
        <FormattedMessage
          id="author"
        /><br />
        formatNumber:<br />
        <FormattedNumber
          value={19}
          style="currency"
          currency="RMB"
        />
      </div>
    );
  }
}
