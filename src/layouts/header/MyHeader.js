import  { useState } from 'react';
import { Select, Layout } from 'antd';
import PropTypes from 'prop-types';
import './index.less'
const { Header } = Layout;

const MyHeader = (props) => {

  const [localeLang, setLocaleLang] = useState('zh');

  const onChange = (value) => {
    setLocaleLang(value);
    props.changeLocale(value);
  }

  return (
    <Header className="header" >
      <div className="logo"> JYJIN</div>
      <Select
        className="local"
        width={250}
        showSearch
        value={localeLang}
        onChange={onChange}
      >
        <Option value="zh">中文</Option>
        <Option value="en">English</Option>
      </Select>
    </Header>
  )
}

MyHeader.propTypes = {
  changeLocale: PropTypes.func,
}

export default MyHeader;

