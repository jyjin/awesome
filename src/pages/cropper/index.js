import { Button, Space } from 'antd';
import { inject, observer } from 'mobx-react';
import { injectIntl } from 'react-intl';
import { useEffect, useRef, useState } from 'react';
import ReactCropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import st from './index.less';
import wpng from '/public/wechat.png'


const Cropper = observer((props) => {
  const cropperRef = useRef(null);
  const [src, setSrc] = useState('')
  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    console.log(cropper.getCroppedCanvas().toDataURL());
    setSrc(cropper.getCroppedCanvas().toDataURL())
  };
  return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <ReactCropper
      src={wpng}
      style={{ height: 400, width: "50%" }}
      // Cropper.js options
      initialAspectRatio={16 / 9}
      guides={false}
      crop={onCrop}
      ref={cropperRef}
    />
    <div style={{ height: 400, width: '50%', textAlign: 'center' }}>
      {src ? <img style={{maxHeight: '100%'}} src={src} /> : null}
    </div>
  </div>
});

/**
 * 注意hook这里注解的写法
 * 1.inject的内容必须是Provider的props属性
 * 2.observer必须在inject内层，有顺序要求
 */
export default inject('global', 'intls', 'lcStore')(injectIntl(Cropper));
