import styles from './index.less';
import React from 'react';
import { Select, Button, Tooltip, Row, Col, Avatar } from 'antd';
import { inject } from 'mobx-react'
import { injectIntl } from 'react-intl'
import { defineMessages, defineMessage } from '@formatjs/intl'

const API = (props) => {
  return (
    <div className={styles['api']}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  )
}


const Test = (props) => {

  console.log('props == ', props)
  console.log('props.intl == ', props.intl)

  const messages = defineMessages({
    'who.save.world': {
      id: 'test.define',
      defaultMessage: props.locale === 'zh' ? '{who}~ 快来拯救世界！{encourage}' : '{who}~ come to save the world ! {encourage}'
    }
  })

  return (
    <>
     
      <h1>&nbsp;&nbsp;me - {props.global.author}</h1>
      <div className={styles['me']}>
        <br />
        <API title='formatMessage'>
          normal:<br />
          {props.intl.formatMessage({
            id: 'why'
          })}
          <br />
          {props.intl.formatMessage({
            id: 'author',
            // defaultMessage: 'test default message',
            description: 'test desc'
          })}
          <br />
          variables:<br />
          {props.intl.formatMessage({
            id: 'who.save.world'
          }, {
            who: props.intl.locale === 'zh' ? '建业' : 'jianye',
            encourage: <b>太棒了</b>
          })}
          <br />
          {props.intl.formatMessage(messages['who.save.world'], {
            who: props.intl.locale === 'zh' ? '建业' : 'jianye',
            encourage: <b>太棒了</b>
          })}

          <br />
          not exist:<br />
          {props.intl.formatMessage({
            id: 'welcome.message',
            defaultMessage: 'test default message',
            description: 'test desc'
          })}
        </API>

        <API title='formatDate'>
          {props.intl.formatDate(Date.now(), {
            year: 'numeric',
            month: 'numeric',
          })}
        </API>

        <API title='formatTime'>
          {props.intl.formatTime(Date.now(), {
            hour: 'numeric',
            minute: 'numeric',
          })}
        </API>

        <API title='formatRelativeTime'>
          {props.intl.formatRelativeTime(30)}
          <br />
          {props.intl.formatRelativeTime(-24, 'minute', { style: 'narrow' })}
          <br />
        </API>
        <API title='formatNumber'>
          {/* <pre>
          formatNumber options
          - localeMatcher <br/>
          - style <br/>
          - currency<br/>
          - currencyDisplay<br/>
          - unit<br/>
          - unitDisplay<br/>
          - useGrouping<br/>
          - minimumIntegerDigits<br/>
          - minimumFractionDigits<br/>
          - maximumFractionDigits<br/>
          - minimumSignificantDigits<br/>
          - maximumSignificantDigits<br/>
          // ES2020 NumberFormat
          - compactDisplay<br/>
          - currencyDisplay<br/>
          - currencySign<br/>
          - notation<br/>
          - signDisplay<br/>
          - unit<br/>
          - unitDisplay<br/>
        </pre> */}
          {props.intl.formatNumber(199.99, { style: 'currency', currency: 'USD' })}
          <br />
          {props.intl.formatNumber(199.99, { style: 'currency', currency: 'CNY' })}
          <br />
          {props.intl.formatNumber(199.99, { style: 'currency', currency: 'RMB' })}
          <br />
          {props.intl.formatNumber(1024, { style: 'unit', unit: 'kilobyte', unitDisplay: 'narrow' })}
          <br />

        </API>
        <API title='formatList'>
          {props.intl.formatList(['Me', 'myself', 'I'], { type: 'conjunction' })}
        </API>

        <API title='formatDisplayName'>
          {props.intl.formatDisplayName('zh-Hans-SG', { type: 'language' })}
          <br />
          {props.intl.formatDisplayName('Deva', { type: 'script' })}
          <br />
          {props.intl.formatDisplayName('CNY', { type: 'currency' })}
          <br />
          {props.intl.formatDisplayName('UN', { type: 'region' })}
        </API>
      </div>
    </>
  );
}

// 注意hook这里注解的写法
export default inject('global', 'intls')(injectIntl(Test));