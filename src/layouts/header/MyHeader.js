import { useState } from 'react';
import { Select, Layout } from 'antd';
import { Link } from 'umi';
import PropTypes from 'prop-types';
import './index.less';
const { Header } = Layout;
const { Option } = Select;
const MyHeader = (props) => {
  const [localeLang, setLocaleLang] = useState('zh');

  const onChange = (value) => {
    setLocaleLang(value);
    props.changeLocale(value);
  };

  return (
    <Header className="header">
      <Link className="logo" to="/">
        JYJIN
      </Link>
      <Select
        className="local"
        width={250}
        showSearch
        value={localeLang}
        onChange={onChange}
      >
        <Option key="zh" value="zh">
          中文
        </Option>
        <Option key="en" value="en">
          English
        </Option>
      </Select>
    </Header>
  );
};

MyHeader.propTypes = {
  changeLocale: PropTypes.func,
};

export default MyHeader;
