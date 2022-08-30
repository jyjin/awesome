import st from './index.less';
import React, { useState } from 'react';
import { Input, Switch } from 'antd';
import { SketchPicker } from 'react-color'

export default function XLB() {

  const [open, setOpen] = useState(true)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
  const [bg, setBg] = useState('#07ac46')
  const [line, setLine] = useState('#000')
  const [inside, setInside] = useState('#fff')
  const [text, setText] = useState('#fff')
  const [txt, setTxt] = useState('哈哈哈')
  const [num, setNum] = useState(1)

  function onChangeBg(e) {
    setBg(e.currentTarget.value)
    clearOpen()
  }

  function onChangeLine(e) {
    setLine(e.currentTarget.value)
    clearOpen()
  }

  function onChangeInside(e) {
    setInside(e.currentTarget.value)
    clearOpen()
  }

  function onChangeText(e) {
    setText(e.currentTarget.value)
    clearOpen()
  }

  function onChangeTxt(e) {
    setTxt(e.currentTarget.value)
    clearOpen()
  }

  function onChangeNum(e) {
    setNum(e.currentTarget.value)
    clearOpen()
  }

  function clearOpen() {
    setOpen1(false)
    setOpen2(false)
    setOpen3(false)
    setOpen4(false)
  }

  function setOpens(index) {
    if (index === 1) {
      setOpen1(!open1)
      setOpen2(false)
      setOpen3(false)
      setOpen4(false)
    }
    if (index === 2) {
      setOpen1(false)
      setOpen2(!open2)
      setOpen3(false)
      setOpen4(false)
    }
    if (index === 3) {
      setOpen1(false)
      setOpen2(false)
      setOpen3(!open3)
      setOpen4(false)
    }
    if (index === 4) {
      setOpen1(false)
      setOpen2(false)
      setOpen3(false)
      setOpen4(!open4)
    }
  }

  function handleChangeComplete1(color) {
    setBg(color.hex)
  }
  function handleChangeComplete2(color) {
    setLine(color.hex)
  }
  function handleChangeComplete3(color) {
    setInside(color.hex)
  }
  function handleChangeComplete4(color) {
    setText(color.hex)
  }

  function renderParamLine() {
    return (
      <>
        {open && (
          <>
            <div className={st['x']}></div>
            <div className={st['x1']}></div>
            <div className={st['y']}></div>
            <div className={st['y1']}></div>
          </>
        )}
      </>
    )
  }

  function renderShape(stop = 0) {
    if (stop > num) return
    return (
      <div className={st['xlb-shape']}>
        <div className={st['xlb-rect']} style={{ backgroundColor: line }}>
          <div className={st['xlb-rect-inner']} style={{ backgroundColor: inside }}></div>
        </div>
        <div className={st['xlb-tx']} style={{ borderRightColor: line }}>
          <div className={st['xlb-tx-inner']} style={{ borderRightColor: inside }}></div>
        </div>
        <div className={st['xlb-children']}>
          {renderShape(stop + 1)}
        </div>
        <div className={st['xlb-radius']} style={{ borderRightColor: line }}>
        </div>
      </div>
    )
  }

  return (
    <div className={st['xlb']}>

      <div className={st['xlb-box']} style={{ backgroundColor: bg }}>
        {renderParamLine()}
        {renderShape()}
        <div className={st['xlb-text']} style={{ color: text }}>{txt}</div>
      </div>

      <div className={st['ctl']}>
        <Switch checkedChildren='隐藏辅助线' unCheckedChildren='显示辅助线' checked={open} onChange={setOpen}></Switch>
        <div className={st['ctl-row']}>
          <Input placeholder='背景色' onChange={onChangeBg} value={bg} /><div title='拾色器' onClick={() => setOpens(1)}>背景色</div>
          {open1 && <SketchPicker color={bg} onChangeComplete={handleChangeComplete1} />}
        </div>
        <div className={st['ctl-row']}>
          <Input placeholder='线条色' onChange={onChangeLine} value={line} /><div title='拾色器' onClick={() => setOpens(2)}>线条色</div>
          {open2 && <SketchPicker color={line} onChangeComplete={handleChangeComplete2} />}
        </div>
        <div className={st['ctl-row']}>
          <Input placeholder='填充色' onChange={onChangeInside} value={inside} /><div title='拾色器' onClick={() => setOpens(3)}>填充色</div>
          {open3 && <SketchPicker color={inside} onChangeComplete={handleChangeComplete3} />}
        </div>
        <div className={st['ctl-row']}>
          <Input placeholder='广告文本色' onChange={onChangeText} value={text} /><div title='拾色器' onClick={() => setOpens(4)}>广告文本色</div>
          {open3 && <SketchPicker color={text} onChangeComplete={handleChangeComplete4} />}
        </div>
        <div className={st['ctl-row']}>
          <Input placeholder='广告内容' onChange={onChangeTxt} value={txt} /><div>广告内容</div>
        </div>
        <div className={st['ctl-row']}>
          <Input type={'number'} placeholder='衍生' onChange={onChangeNum} value={num} /><div>衍生数</div>
        </div>
      </div>
    </div>
  )
}
