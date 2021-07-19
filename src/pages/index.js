import styles from './index.less';
import React from 'react';
import { Select, Button, Tooltip, Row, Col, Avatar } from 'antd';
const { Option, } = Select;
import { debounce } from 'lodash';
import { history } from 'umi'


export default class Index extends React.Component {

  constructor(props) {
    super(props)
  }

  renderBtns({ path, name }) {
    if (path !== null) {
      return (
        <Button type="primary" onClick={() => {
          history.push(path);
        }}>{name}</Button>
      );
    }
    return null
  }

  render() {

    const data = [{
      id: 1,
      path: '/me',
      name: 'react-intl 推荐用法-JS用法'
    }, {
      id: 2,
      path: '/home',
      name: 'react-intl 用法-标签用法'
    }, {
      id: 3,
      path: '/content-download',
      name: '测试content download',
    }, {
      id: 4,
      path: '/ggeditor',
      name: '测试ggeditor',
    }]

    return (
      <div className={styles['index']}>
        {this.props.name}
        {data.map(this.renderBtns)}
      </div>
    );
  }
}

