import styles from './index.less';
import React from 'react';
import { Select, Button, Tooltip, Row, Col, Avatar } from 'antd';
import axios from 'axios';
const host = 'http://127.0.0.1';
const port = '8080';
const url = host + ':' + port;

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      data: '',
    };
    this.getData = this.getData.bind(this);
    this.getDataDelay = this.getDataDelay.bind(this);
  }

  componentWillMount() {
    // for (var i = 0; i < 100000; i++) {
    //   this.setState({ i })
    // }
    this.getData();
  }

  complicatedRenderPage() {
    for (var i = 0; i < 5000; i++) {
      this.setState({ i });
    }
  }

  getData() {
    axios.get(`${url}/test`).then((res) => {
      // this.complicatedRenderPage();
      this.setState({
        data: res.data,
      });
    });
  }

  getDataDelay() {
    axios.get(`${url}/tes`).then((res) => {});
  }

  onClick() {
    // for (var i = 0; i < 10; i++) {
    this.getData();
    // this.getData()
    // this.getData()
    // this.getData()
    // this.getData()
    // this.getData()
    // this.getData()
    // this.getData()
    // this.getData()
    // this.getData()
    // }
  }

  render() {
    return (
      <>
        <br />
        <Button type="primary" onClick={this.onClick.bind(this)}>
          测试content download
        </Button>
        <br />
        <br />
        <Button
          type="primary"
          onClick={() => {
            this.getDataDelay();
          }}
        >
          让服务变卡
        </Button>
        <br />
        {this.state.i ? `先来他${this.state.i}次渲染` : null}
        <br />
        <code>
          {this.state.data ? JSON.stringify(this.state.data, null, 2) : null}
        </code>
      </>
    );
  }
}
