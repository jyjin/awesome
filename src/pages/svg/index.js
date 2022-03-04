import { Button, Space } from 'antd';
import { inject, observer } from 'mobx-react';
import { injectIntl } from 'react-intl';
import st from './index.less';
import { useEffect, useRef, useState } from 'react';
// import imgSrc from './wechat.png';
import { Loading } from '@/components';
import ocr from './ocr'
import { v4 as uuidv4 } from 'uuid';


const CanvasRectangle = observer((props) => {
  const [style, setStyle] = useState({})
  const [imgSrc, setImgSrc] = useState(undefined)
  const [loading, setLoading] = useState(false)
  const [isAll, setIsAll] = useState(false)
  const [bound, setBound] = useState(null)
  const [data, setData] = useState([])
  const [json, setJson] = useState({})
  const imgRef = useRef()
  const inputRef = useRef()
  const canvasRef = useRef()
  const svgRef = useRef()

  function onload() {
    let bound = imgRef.current.getBoundingClientRect()
    let rect = imgRef.current.getClientRects()
    console.log('bound == ', bound)
    console.log('rect == ', rect)

    setBound(bound)
    setStyle({
      zIndex: 99,
      width: bound.width,
      height: bound.height,
      // background: '#2196f3',
      // opacity: 0.1,
    })

    // startDarwCanvas()
    startDrawSvg(bound)
  }

  function onSelectAll() {
    data.map(item => {
      item.checked = !isAll
    })
    setIsAll(!isAll)
    setData(data)
  }

  function startDrawSvg(bound) {
    let rate = json.rotated_image_width / bound.width;
    console.log('rate == ', rate)
    var data = []
    json.lines.map(item => {
      data.push({
        text: item.text,
        polygons: item.position,
        // polygons: [
        //   item.char_polygons[0][0],
        //   item.char_polygons[0][1],
        //   item.char_polygons[0][6],
        //   item.char_polygons[0][7],
        //   item.char_polygons[item.char_polygons.length - 1][4],
        //   item.char_polygons[item.char_polygons.length - 1][5],
        //   item.char_polygons[item.char_polygons.length - 1][2],
        //   item.char_polygons[item.char_polygons.length - 1][3],

        // ]
      })
    })
    console.log('data before == ', data)
    let _data = []
    data.map(item => {
      let _polygons = []
      item.polygons.map(v => {
        _polygons.push(v / rate)

      })
      let _item = { ...item }
      _item.id = uuidv4()
      _item.checked = false
      _item.text = item.text
      _item.polygons = item.polygons
      _item.polygonsScale = [..._polygons]
      _item.polygonsText = `${_polygons[0]} ${_polygons[1]}, ${_polygons[2]} ${_polygons[3]}, ${_polygons[4]} ${_polygons[5]}, ${_polygons[6]} ${_polygons[7]}`
      _data.push(_item)
    })
    console.log('data after == ', _data)
    setData(_data)
  }

  async function onChange(e) {
    e.target.files[0]
    setLoading(true)
    const res = await ocr({ fileData: e.target.files[0] })
    setLoading(false)
    console.log('ocr res == ', res)
    setJson(res?.result)
    const arr = [...e.target.files]
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      const blob = new Blob([item], { type: item.type });
      const url = URL.createObjectURL(blob);
      setImgSrc(url)
    }
  }

  function onReupload() {
    debugger
    inputRef.current.onClick();
  }

  function onSelect(item) {
    let _data = [...data]
    let target = _data.find(v => v.id === item.id)
    target.checked = !target.checked
    setData([..._data])
  }


  function startDarwCanvas() {
    let ctx = canvasRef.current.getContext('2d')
    ctx.fillStyle = '#fff'
    ctx.fillRect(25, 10, 150, 80)
  }

  console.log('data render == ', data, data?.filter(v => v.checked))

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      {loading ? <Loading tip='上传识别中...' /> : null}
      <div className={st['ocr']} >

        <div className={st['result-box']}>
          <div>
            <Button type='primary' onClick={onSelectAll}>全选</Button>
            {imgSrc ?
              <input type='file' multiple='multiple' accept='image/jpeg,image/jpg,image/png,image/gif' ref={inputRef} onChange={onChange} />
              : null
            }
          </div>
          <div className={st['result-list']}>
            {data?.filter(v => v.checked).map(item => {
              return <div key={item.id}>{item.text}</div>
            })}
          </div>

        </div>
        <div className={st['ocr-box']}>
          {imgSrc ? <img src={imgSrc} ref={imgRef} onLoad={onload} /> :
            <input type='file' multiple='multiple' accept='image/jpeg,image/jpg,image/png,image/gif' ref={inputRef} onChange={onChange} />
          }
          {/* <canvas id="myCanvas" ref={canvasRef} style={style} /> */}
          <svg ref={svgRef} style={style}>
            {data?.map(item => {
              return <polygon
                key={item.id}
                data-text={item.text}
                points={item.polygonsText}
                className={item.checked ? `${st['py']} ${st['py-checked']}` : st['py']}
                onClick={() => onSelect(item)}
              ></polygon>
            })}
          </svg>
        </div>
      </div>
    </Space>
  );
});

/**
 * 注意hook这里注解的写法
 * 1.inject的内容必须是Provider的props属性
 * 2.observer必须在inject内层，有顺序要求
 */
export default inject('global', 'intls', 'lcStore')(injectIntl(CanvasRectangle));
