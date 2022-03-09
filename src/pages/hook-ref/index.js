import { Button, Space } from 'antd';
import { inject, observer } from 'mobx-react';
import { injectIntl } from 'react-intl';
import st from './index.less';
import { useEffect, useRef, useState } from 'react';
// import imgSrc from './wechat.png';
import { Loading } from '@/components';


const Text = (props) => {
  return <input ref={props.target} />
}

const Card = (props) => {
  return <div><Text {...props} /></div>
}

const HookRef = observer((props) => {
  const inputEl = useRef();


  function onClick() {
    console.log(inputEl, inputEl.current)
    inputEl.current.focus();
  }

  return <div>hook ref
    <Button onClick={onClick}>测试聚焦</Button>
    <Card target={inputEl} />
  </div>
});

/**
 * 注意hook这里注解的写法
 * 1.inject的内容必须是Provider的props属性
 * 2.observer必须在inject内层，有顺序要求
 */
export default inject('global', 'intls', 'lcStore')(injectIntl(HookRef));
