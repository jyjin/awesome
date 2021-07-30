import { Spin, Layout } from 'antd';
import PropTypes from 'prop-types';
const { Footer } = Layout;
const Loading = (props) => {
  let tip = props.tip || 'Loading';
  return (
    <Footer style={{ textAlign: 'center', background: 'none' }}>
      <Spin tip={tip} />
    </Footer>
  );
};

Loading.propTypes = {
  tip: PropTypes.string,
};

export default Loading;
