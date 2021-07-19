import styles from './index.less';
import React from 'react';
import { Select, Button, Tooltip, Row, Col, Avatar } from 'antd';
import { inject } from 'mobx-react'
import { injectIntl } from 'react-intl'
import {defineMessages, defineMessage} from '@formatjs/intl'

const API = (props) => {
  return (
    <div className={styles['api']}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  )
}

@inject('global')
@injectIntl
export default class Index extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    console.log('this.props == ', this.props)
    console.log('this.props.intl == ', this.props.intl)

    const messages = defineMessages({
      'who.save.world': {
        id: 'test.define',
        defaultMessage: this.props.locale === 'zh' ? '{who}~ 快来拯救世界！{encourage}':'{who}~ come to save the world ! {encourage}'
      }
    })

    return (
      <>
        <h1>&nbsp;&nbsp;me</h1>
        <div className={styles['me']}>
          <br />
          <API title='formatMessage'>
            normal:<br />
            {this.props.intl.formatMessage({
              id: 'why'
            })}
            <br />
            {this.props.intl.formatMessage({
              id: 'author',
              // defaultMessage: 'test default message',
              description: 'test desc'
            })}
            <br />
            variables:<br />
            {this.props.intl.formatMessage({
              id: 'who.save.world'
            }, {
              who: this.props.intl.locale === 'zh' ? '建业' : 'jianye',
              encourage: <b>太棒了</b>
            })}
            <br/>
            {this.props.intl.formatMessage(messages['who.save.world'],{
              who: this.props.intl.locale === 'zh' ? '建业' : 'jianye',
              encourage: <b>太棒了</b>
            })}

            <br />
            not exist:<br />
            {this.props.intl.formatMessage({
              id: 'welcome.message',
              defaultMessage: 'test default message',
              description: 'test desc'
            })}
          </API>

          <API title='formatDate'>
            {this.props.intl.formatDate(Date.now(), {
              year: 'numeric',
              month: 'numeric',
            })}
          </API>

          <API title='formatTime'>
            {this.props.intl.formatTime(Date.now(), {
              hour: 'numeric',
              minute: 'numeric',
            })}
          </API>

          <API title='formatRelativeTime'>
            {this.props.intl.formatRelativeTime(30)}
            <br />
            {this.props.intl.formatRelativeTime(-24, 'minute', { style: 'narrow' })}
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
            {this.props.intl.formatNumber(199.99, { style: 'currency', currency: 'USD' })}
            <br />
            {this.props.intl.formatNumber(199.99, { style: 'currency', currency: 'CNY' })}
            <br />
            {this.props.intl.formatNumber(199.99, { style: 'currency', currency: 'RMB' })}
            <br />
            {this.props.intl.formatNumber(1024, { style: 'unit', unit: 'kilobyte', unitDisplay: 'narrow' })}
            <br />
           
          </API>
          <API title='formatList'>
            {this.props.intl.formatList(['Me', 'myself', 'I'], { type: 'conjunction' })}
          </API>

          <API title='formatDisplayName'>
            {this.props.intl.formatDisplayName('zh-Hans-SG', { type: 'language' })}
            <br />
            {this.props.intl.formatDisplayName('Deva', { type: 'script' })}
            <br />
            {this.props.intl.formatDisplayName('CNY', { type: 'currency' })}
            <br />
            {this.props.intl.formatDisplayName('UN', { type: 'region' })}
          </API>
        </div>
      </>
    );
  }
}
