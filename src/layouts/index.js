import { Provider } from 'mobx-react';
import { Layout } from 'antd';
import * as intls from 'react-intl';
import * as locale from '@/locale';
import { SideMenu } from '@/layouts/menu';
import { Header } from '@/layouts/header';
import { useState } from 'react';
import st from './index.less';
import classNames from 'classnames';

const { Content, Footer } = Layout;
const { IntlProvider } = intls;
const globalProps = {
  locale: 'zh',
  author: 'jyjin',
};

const Index = (props) => {
  const [localeLang, setLocaleLang] = useState('zh');
  const changeLocale = (value) => {
    globalProps.locale = value;
    setLocaleLang(value);
  };

  const cls = classNames(st['content']);

  return (
    <Provider className="provider" global={globalProps} intls={intls}>
      <IntlProvider
        messages={locale[localeLang]}
        locale={localeLang}
        defaultLocale={localeLang}
      >
        {/* 页头 */}
        <Header changeLocale={changeLocale} />
        <Layout>
          {/* 菜单 */}
          <SideMenu />
          {/* 页面 */}
          <Content>
            <Content className={cls}> {props.children} </Content>
            <Footer style={{ textAlign: 'center' }}>
              {' '}
              Copyright ©2021 古金. All rights reserved. Created by Awesome
              JyJin
            </Footer>
          </Content>
        </Layout>
      </IntlProvider>
    </Provider>
  );
};

export default Index;

// export default class Index extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       collapsed: false,
//       lan: 'zh'
//     }
//   }

//   onChange(value) {
//     this.setState({
//       lan: value
//     })
//     globalProps._lan = value
//     _lan = value
//   }

//   render() {
//     const { collapsed } = this.state;
//     return (
//       <Provider
//         className='provider'
//         global={globalProps}
//         intls={intls}
//       // intl={intl}
//       >
//         {/* 页头 */}
//         <Header className="header" >
//           <div className="logo"> JYJIN</div>

//           <Select
//             className="local"
//             width={250}
//             showSearch
//             value={this.state.lan}
//             onChange={this.onChange.bind(this)}
//           >
//             <Option value="zh">中文</Option>
//             <Option value="en">English</Option>
//           </Select>
//         </Header>

//         <Layout>
//           {/* 菜单 */}
//           <SideMenu />
//           {/* 页面 */}
//           <Content style={{ margin: '24px 16px 0' }}>
//             <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
//               <intls.IntlProvider messages={locale[this.state.lan]} locale={this.state.lan} defaultLocale={this.state.lan}>
//                 {this.props.children}
//                 <Footer style={{ textAlign: 'center' }}>Developing ©2021 Created by Ant Jyjin</Footer>
//               </intls.IntlProvider>
//             </div>
//           </Content>
//         </Layout>
//       </Provider>
//     );
//   }
// }

// intl API:
// https://formatjs.io/docs/intl

// interface IntlConfig {
//   locale: string
//   timeZone?: string
//   formats: CustomFormats
//   messages: Record<string, string> | Record<string, MessageFormatElement[]>
//   defaultLocale: string
//   defaultRichTextElements?: Record<string, FormatXMLElementFn<React.ReactNode>>
//   defaultFormats: CustomFormats
//   onError(err: string): void
// }

// interface IntlFormatters {
//   formatDate(value: number | Date | string, opts?: FormatDateOptions): string
//   formatTime(value: number | Date | string, opts?: FormatDateOptions): string
//   formatDateToParts(
//     value: number | Date | string,
//     opts?: FormatDateOptions
//   ): Intl.DateTimeFormatPart[]
//   formatTimeToParts(
//     value: number | Date | string,
//     opts?: FormatDateOptions
//   ): Intl.DateTimeFormatPart[]
//   formatRelativeTime(
//     value: number,
//     unit?: FormattableUnit,
//     opts?: FormatRelativeTimeOptions
//   ): string
//   formatNumber(value: number, opts?: FormatNumberOptions): string
//   formatNumberToParts(
//     value: number,
//     opts?: FormatNumberOptions
//   ): Intl.NumberFormatPart[]
//   formatPlural(
//     value: number | string,
//     opts?: FormatPluralOptions
//   ): ReturnType<Intl.PluralRules['select']>
//   formatMessage(
//     descriptor: MessageDescriptor,
//     values?: Record<string, PrimitiveType | FormatXMLElementFn<string, string>>
//   ): string
//   formatMessage(
//     descriptor: MessageDescriptor,
//     values?: Record<string, PrimitiveType | T | FormatXMLElementFn<T, R>>
//   ): R
//   formatList(values: Array<string>, opts?: FormatListOptions): string
//   formatList(
//     values: Array<string | T>,
//     opts?: FormatListOptions
//   ): T | string | Array<string | T>
//   formatDisplayName(
//     value: string,
//     opts?: FormatDisplayNameOptions
//   ): string | undefined
// }

// type IntlShape = IntlConfig & IntlFormatters
