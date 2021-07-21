import React from 'react';
import { Button } from 'antd';
import { JsonViewer, Loading } from '@/components';
import axios from 'axios';
import classNames from 'classnames';
import st from './index.less';

// 这里是server.js定义的接口，现在用mock代替了
// const host = 'http://127.0.0.1';
// const port = '8080';
// const url =  host + ':' + port;

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      data: '',
    };
    this.getDataDelay = this.getDataDelay.bind(this);
    this.getDataLoop = this.getDataLoop.bind(this);
  }

  componentWillMount() {
    this.complicatedRenderPage();
  }

  complicatedRenderPage() {
    for (var i = 0; i < 100; i++) {
      this.setState({ i });
    }
  }

  getDataDelay() {
    axios.get(`/api/delay`).then((res) => {
      // this.complicatedRenderPage();
      this.setState({
        data: res.data,
      });
    });
  }

  getDataLoop() {
    axios.get(`/api/loop`).then((res) => {});
  }

  onClick() {
    for (var i = 0; i < 10; i++) {
      this.getDataDelay();
    }
  }

  render() {
    const cls = classNames(st['content-download']);
    return (
      <div>
        <h1>
          点击【测试content
          download】发出请求，再点击【让服务变卡】观察请求content download
        </h1>
        <div className={cls}>
          <Button type="primary" onClick={this.onClick.bind(this)}>
            测试content download
          </Button>
          <Button
            type="primary"
            onClick={() => {
              this.getDataLoop();
            }}
          >
            让服务变卡
          </Button>
          <Button
            type="primary"
            onClick={() => {
              axios.get('/api/menus').then((res) => {
                this.setState({
                  menuData: res,
                });
              });
            }}
          >
            测试mock
          </Button>
        </div>
        <br />
        {this.state.menuData
          ? '这里是axios请求的本地mock模拟数据，屌不屌？'
          : ''}
        {this.state.i ? `先来他${this.state.i}次渲染` : null}
        <br />
        <br />
        <JsonViewer json={this.state.menuData} />
        <JsonViewer json={this.state.data} />
        <Loading tip="拼命加载中..." />
      </div>
    );
  }
}
