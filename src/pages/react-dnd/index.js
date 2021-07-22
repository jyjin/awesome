import React from 'react';
import { Select, Button, Tooltip, Row, Col, Avatar } from 'antd';
import { inject } from 'mobx-react';
import { injectIntl } from 'react-intl';
import st from './index.less';

const Dnd = (props) => {
  return <>dnd</>;
};

// 注意hook这里注解的写法
export default inject('global', 'intls')(injectIntl(Dnd));
