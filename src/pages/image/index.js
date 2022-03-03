import { Button, Space } from 'antd';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import { injectIntl } from 'react-intl';
import heic2any from 'heic2any'
import st from './index.less';
import { useEffect, useState } from 'react';

const Dnd = observer((props) => {
  const [image, setImage] = useState(null)

  function onChange(e) {
    let file = e.target.files
    console.log('file == ', file)

    const arr = [...e.target.files]
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      const itemObj = { name: item.name, type: item.type, size: item.size, originalFileObj: item };
      const blob = new Blob([item], { type: item.type });
      const url = URL.createObjectURL(blob);
      console.log('choose file img == ', url, itemObj)

      heic2any({
        blob,  // 将heic转换成一个buffer数组的图片
        toType: 'image/jpeg', //要转化成具体的图片格式，可以是png/gif
        quality: 0.1   // 图片的质量，参数在0-1之间

      }).then(result => {
        let file = new FileReader();
        file.onload = function (img) {
          let imageResult = img.target.result;
          console.log('reader result == ', imageResult)
          // const url = URL.createObjectURL(imageResult);
          // console.log('object url == ', url)
          setImage(imageResult)

        };
        // file.readAsArrayBuffer(result);
        // file.readAsBinaryString(result);
        file.readAsDataURL(result);
        // file.readAsText(result)
      })
    }
  }

  useEffect(async ()=>{
    if(image){
      const res = await fetch(image)
      const blob = await res.blob();
      console.log('blob == ', blob)
      const url = URL.createObjectURL(blob)
      console.log('blob url == ', url)
    }
  }, [image])

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <input type='file' onChange={onChange} accept='image/heic' multiple='multiple' />
      {image ? <img className={st['img']} src={image} /> : null}
    </Space>
  );
});

/**
 * 注意hook这里注解的写法
 * 1.inject的内容必须是Provider的props属性
 * 2.observer必须在inject内层，有顺序要求
 */
export default inject('global', 'intls', 'lcStore')(injectIntl(Dnd));
