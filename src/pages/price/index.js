import React, { useEffect, useState } from "react"
import { InputNumber, Switch } from 'antd'
import calu from './price'
import st from './index.less'


const DEFAULT_VALUE = {
  price: 13,
  deliveryPrice: 18,
  maxOver: 10,
  maxCount: 2,
  discount: 5,
  checked: false,
}

export default () => {

  const [sta, setSta] = useState({ ...DEFAULT_VALUE })

  useEffect(() => {
    shouldUpdate();
  }, [])

  /**
     * arr price.js返回的数组
     * size 保留排序的个数
     * target 需要排序的项目所对应的角标数字；或者，角标数字的数组，表示多项求和后排序
     */
  function getMaxArr(arr, size = 10, target) {
    var maxArr = []
    while (maxArr.length <= size) {
      var max = 0
      var maxItem = null
      arr.map(item => {
        let tmp = null
        if (typeof target === "object") {
          tmp = item[target[0]] + item[target[1]]
        } else {
          tmp = item[target]
        }
        if (tmp > max && !maxArr.includes(item)) {
          max = tmp
          maxItem = item
        }
      })
      maxArr.push(maxItem)
    }
    return maxArr
  }

  function shouldUpdate() {

    if (
      sta.price
      && sta.deliveryPrice
      && sta.maxOver
      && sta.maxCount
    ) {
      sta.arr = calu(sta.price, sta.deliveryPrice, sta.maxOver, sta.maxCount, sta.checked ? sta.discount : null);
      sta.maxArr = getMaxArr(sta.arr, 10, [4, 5])
      sta.singleMaxArr = getMaxArr(sta.arr, 10, 4)
      sta.multiMaxArr = getMaxArr(sta.arr, 10, 5)
      setSta({ ...sta })
    }
  }

  function onPriceChange(val) {
    sta.price = val
    setSta(sta)
    shouldUpdate()
  }

  function onDileveryChange(val) {
    sta.deliveryPrice = val
    setSta(sta)
    shouldUpdate()
  }

  function onMaxOverChange(val) {
    sta.maxOver = val
    setSta(sta)
    shouldUpdate()
  }

  function onMaxCountChange(val) {
    sta.maxCount = val
    setSta(sta)
    shouldUpdate()
  }

  function onDiscountChange(val) {
    sta.discount = val
    setSta(sta)
    shouldUpdate()
  }

  function onCheckChange(checked) {
    sta.checked = checked
    setSta({ ...sta })
    shouldUpdate()
  }

  function renderFor(arr, title) {
    if (!arr) return
    return (
      <div className={st['section']}>
        <h1 className={st['title']}>{title}</h1>
        {arr.map(item => {
          if (item[4] < 0 || item[5] < 0) return;
          return (

            <div className={st['row']}>
              <span>单件定价{item[0]}元</span>
              <span>捆绑销售{item[1]}件</span>
              <span>每件优惠{item[2]}元</span>
              <span>此时定价{item[3]}元</span>
              <span>单件利润{item[4]}元</span>
              <span>捆绑利润{item[5]}元</span>
            </div>
          )
        })}
      </div>
    )
  }
  console.log('--', sta.checked)
  return (
    <div className={st['price']}>
      <div className={st['header']}>
        <div className={st['row']}>
          <span>请输入成本价</span>
          <InputNumber placeholder='成本价' defaultValue={DEFAULT_VALUE.price} onChange={onPriceChange} />
          <span>元/件</span>
        </div>
        <div className={st['row']}>
          <span>请输入快递价</span>
          <InputNumber placeholder='快递价' defaultValue={DEFAULT_VALUE.deliveryPrice} onChange={onDileveryChange} />
          <span>元/单</span>
        </div>
        <div className={st['row']}>
          <span>定价浮动区间</span>
          <InputNumber placeholder='浮动区间' defaultValue={DEFAULT_VALUE.maxOver} onChange={onMaxOverChange} />
        </div>
        <div className={st['row']}>
          <span>捆绑最大件数</span>
          <InputNumber placeholder='捆绑件数' defaultValue={DEFAULT_VALUE.maxCount} onChange={onMaxCountChange} />
          <span>件</span>
        </div>
        <div className={st['row']}>
          <Switch checkedChildren="指定优惠价格" unCheckedChildren="自动从1元递增优惠价格" checked={sta.checked} onChange={onCheckChange} />
          {sta.checked && (
            <>
              <InputNumber placeholder='优惠价格 元/件' defaultValue={DEFAULT_VALUE.discount} onChange={onDiscountChange} />
              <span>元/件</span>
            </>
          )}
        </div>
      </div>
      <div className={st['body']}>
        <div>
          {renderFor(sta.maxArr, '综合利润最高')}
          {renderFor(sta.singleMaxArr, '单件利润最高')}
          {renderFor(sta.multiMaxArr, '捆绑利润最高')}
          {renderFor(sta.arr, '定价分析')}
        </div>
      </div>
    </div>
  )
}