import { Provider } from 'mobx-react';
import * as intls from 'react-intl';
import * as locale from '@/locale';
import { useEffect, useState } from 'react';
import { Layout, Button, Divider, Space } from 'antd';
import { history } from 'umi';
import { Icon } from '@/components';
import Header from '@/pages/lowcode/Header';
import Left from '@/pages/lowcode/Left';
import Center from '@/pages/lowcode/Center';
import Right from '@/pages/lowcode/Right';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import lcStore from '@/stores/lowcodeStore';
import st from './index.less';
const { Content } = Layout;
const { IntlProvider } = intls;
const globalProps = {
  locale: 'zh',
  author: 'jyjin',
};

const LowCode = (props) => {
  const [localeLang, setLocaleLang] = useState('zh');

  const changeLocale = (value) => {
    globalProps.locale = value;
    setLocaleLang(value);
  };

  return (
    <Provider
      className="provider"
      global={globalProps}
      intls={intls}
      lcStore={lcStore}
    >
      <IntlProvider
        messages={locale[localeLang]}
        locale={localeLang}
        defaultLocale={localeLang}
      >
        <Layout className={st['lc']}>
          <Header />
          <Content className={st['lc-content']}>
            <DndProvider backend={HTML5Backend} {...props}>
              <Left {...props} />
              <Center {...props} />
              <Right {...props} />
            </DndProvider>
          </Content>
        </Layout>
      </IntlProvider>
    </Provider>
  );
};

export default LowCode;
