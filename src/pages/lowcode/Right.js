import { Layout } from 'antd';
import { inject, observer } from 'mobx-react';
import FieldSetting from './FieldSetting';
import SectionSetting from './SectionSetting';
import st from './index.less';

const Right = observer((props) => {
  const isField = !!props.lcStore.current['field'];
  return (
    <Layout className={st['lc-content-right']}>
      {isField ? <FieldSetting {...props} /> : <SectionSetting {...props} />}
    </Layout>
  );
});

export default inject('lcStore')(Right);
