
export default function calu(takePrice = 40, deliveryPrice = 18, maxOver = 60, maxCount = 5, discount = null) {
  var p = takePrice * 1 // 单价
  var k = deliveryPrice * 1 // 快递费
  var o = maxOver * 1 // 最大定价浮动区间
  var s = maxCount * 1  // 最大捆绑件数
  var i = p + k + 1 // 最低单件价格
  // n 单件价格
  // m 捆绑销售策略件数
  // d 捆绑销售优惠差价


  var arr = []

  for (var n = i; n < i + o; n++) {
    for (var m = 1; m <= s; m++) {
      for (var c = 1; c < i; c++) {
        if (discount !== null) {
          c = discount
        }
        var p1 = m * (n - c)
        var profitSingle = n - k - p
        var profitMult = p1 - m * p - k

        console.log(`
        单件定价${n}元\t捆绑销售${m}件\t每件优惠${c}元\t定价${p1}元\t单件利润${profitSingle}元\t 捆绑利润${profitMult}元
        `)

        var sta = [n, m, c, p1, profitSingle, profitMult]
        arr.push(sta)
        if (discount !== null) {
          break;
        }
      }
    }
  }

  return arr;
}