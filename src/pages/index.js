import styles from './index.less';
import React from 'react';
import { Select, Button, Input, Row, Col, Space } from 'antd';
const { Option } = Select;
import { debounce } from 'lodash';
import { history } from 'umi';
import menuData from '../../mock/menu/menu';
const { Search } = Input;
import _ from 'lodash';
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originData: menuData,
      menuData: menuData,
    };
  }

  onChange(e) {
    console.log(e.target.value);
    const value = e.target.value;
    const { menuData, originData } = this.state;
    if (!value) {
      this.setState({
        menuData: _.cloneDeep(originData),
      });
      return;
    }

    const _menuData = _.cloneDeep(originData);
    _menuData.map((menu) => {
      menu.children = [
        ...menu.children.filter(
          (v) => v.name.toLowerCase().indexOf(value.toLowerCase()) > -1,
        ),
      ];
    });
    this.setState({
      menuData: _.cloneDeep(_menuData),
    });
  }

  onSearch(value) {
    console.log(value);
  }

  renderBtns({ path, name }) {
    if (path !== null) {
      return (
        <Button
          key={path}
          type="primary"
          onClick={() => {
            history.push(path);
          }}
        >
          {name}
        </Button>
      );
    }
    return null;
  }

  render() {
    return (
      <div className={styles['index']}>
        <div style={{ marginBottom: 24, display: 'flex' }}>
          <h1 style={{ display: 'block', minWidth: 200 }}>快捷入口</h1>
          <Search
            style={{ flexGrow: 1 }}
            placeholder="输入关键字"
            onChange={this.onChange.bind(this)}
            onSearch={this.onSearch.bind(this)}
            enterButton
          />
        </div>
        <Space size={24}>
          {this.state.menuData.map((menu) => {
            return menu.children && menu.children.map(this.renderBtns);
          })}
        </Space>
      </div>
    );
  }
}
