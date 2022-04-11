import styles from './index.less';
import React, { useEffect, useRef, useState } from 'react';
import { Input, Button, Tooltip, Row, Col, Avatar } from 'antd';
import QRCode from 'qrcode.react';
import icon from '../../../public/wechat.png'


export default function () {

  const [value, setValue] = useState('https://www.baidu.com')
  const [url, setUrl] = useState('')

  return (
    <div>
      <Input defaultValue={value} value={value} onChange={setValue} />
      <Button onClick={() => setUrl(value)}>生成二维码</Button>
      {url}
      <div class={styles['qr-box']}>
        {url && <QRCode
          className='qr-code'
          renderAs="svg" // canvas svg
          value={url}
          size={256} // default 128
          bgColor='white'
          fgColor='#2196f3'
          level='Q' // L M Q H
          includeMargin={false} // default false
          imageSettings={{
            src: 'https://king.dev.yqcloud.com/assets/color-logo.617c6bf3.png',
            // x: 10,
            // y: 10,
            // width: '10%',
            // height: '10%',
            // excavate: true,
          }} />}
      </div>
    </div>
  )
}