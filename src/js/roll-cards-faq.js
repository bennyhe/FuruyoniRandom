import { QADATA } from './sub/import_roll_faq'
window.QADATA = QADATA

// initFAQ();

const formatSubStr = val => {
  // console.log(val)
  const arr = []

  // 仅qa的格式化
  const _matchResultQ = val.match(/(?=Q：).*/g)
  const _matchResultA = val.match(/(?=A：).*/g)

  // 有qa，但是前面有一行文字特殊提取
  let _isMatch2 = val.match(/^[\s\S]*?(もご覧ください)?(Q：)/g)
  console.log(val.slice(0, 2) !== 'Q：', _isMatch2)
  if (_matchResultQ && _matchResultA && _matchResultQ.length > 0 && _matchResultA.length > 0 && _isMatch2 && _isMatch2.length > 0 && val.slice(0, 2) !== 'Q：') {
    console.log('match2', _isMatch2[0])
    _isMatch2[0] = _isMatch2[0].replace('\n\nQ：', '').replace('Q：', '')
    if (_isMatch2[0].indexOf('\n\n')>-1){
      _isMatch2 = _isMatch2[0].split('\n\n')
    }
    _isMatch2.forEach(item => {
      if (item !== '') {
        arr.push({
          ajp: item
        })
      }
    })
  }

  if (_matchResultQ && _matchResultA && _matchResultQ.length > 0 && _matchResultA.length > 0) {
    _matchResultQ.forEach((item, key) => {
      arr.push({
        qjp: item.replace('Q：', ''),
        ajp: _matchResultA[key].replace('A：', '')
      })
    })
  } else {
    arr.push({
      ajp: val
    })
  }
  arr.forEach(item=>{
    if (item.ajp === 'このカードへのFAQはありません。'){
      item.a = '没有FAQ。'
    }
    if(item.qjp && item.qjp.indexOf('A')>-1){
      console.log('问题里中出一个叛徒')
    }
  })
  return arr
}
const getDataFromValue = value => {
  if(!value){
    return ''
  }
  const val = value
  const arr = []
  let cards = val.match(/(?=「).*(」\n)/g)
  cards = cards.map(item => {
    return {
      name: item.replace('\n', '')
    }
  })
  cards.forEach((item, key) => {
    const noLast = ((key + 1) < (cards.length))
    // 截取描述，两张卡名之间的
    // /(?=「斬」)[\s\S]*(「一閃」\n)/g
    const re = new RegExp(`${key > 0 ? '\n' : ''}(?=${item.name})[\\s\\S]*(${noLast ? `${cards[key + 1].name}\n` : ''})`, 'g')
    let info = val.match(re)
    if (info && info[0]) {
      if (key > 0) {
        info[0] = info[0].replace('\n', '')
      }
      info = info[0]
      // console.log(info)
      // if (info.indexOf('\n\n')>-1){
      //   const testArr = info.split('\n\n')
      //   console.log(testArr)
      // }
      let res = info.replace(`${item.name}\n\n`, '')
      if(noLast){
        res = res.replace(`\n\n${cards[key + 1].name}\n`, '')
      }
      console.log(res)
      // console.log(res, formatSubStr(res))
      item.list = formatSubStr(res)
    }
  })
  console.log(arr, cards)
}

// getDataFromValue(`
// 「梳流し」

// このカードへのFAQはありません。

// 「雅打ち」

// このカードへのFAQはありません。

// 「跳ね兎」

// このカードへのFAQはありません。

// 「詩舞」

// Q：オーラに一切の桜花結晶がない時に、オーラから間合に動かす方の効果を選択できますか？

// A：はい、可能です。その場合、処理としては何も起こらないことになります。もちろん、もう一方の選択肢についても同様のことが言えます。

// 「要返し」

// Q：捨て札から1枚と伏せ札から1枚選んで戻すことはできますか？

// A：はい、できます。

// Q：「要返し」で山札の底に置くカードの順番は相手に分かるように戻す必要はありますか？

// A：いいえ、どの順番で戻したかを相手に明示する必要はありません。

// Q：相手の伏せ札や捨て札を山札に戻せますか？

// A：いいえ、できません。

// 「風舞台」

// Q：「風舞台」を展開中に相手の《攻撃》をオーラで受け風舞台の破棄時に間合へ移動させるオーラがない場合はどのような扱いになりますか？

// A：その場合、何も起こりません。桜花結晶の移動は可能な限り行います。オーラがない場合は移動させる桜花結晶が存在しないため、間合への移動は行われません。オーラが1つしかない場合は、オーラから間合に1つだけ移動させることになります。

// Q：2つの【破棄時】を解決する順番は選べますか？

// A：いいえ、1枚のカードのテキストは必ず上から順に解決されます。

// 「晴舞台」

// 終端へのFAQもご覧ください。

// Q：畏縮状態で「晴舞台」を使用しました。集中力は2になりますか？それとも畏縮が解除されるだけですか？

// A：畏縮状態のまま集中力が2になります。

// 「久遠ノ花」

// このカードへのFAQはありません。

// 「千歳ノ鳥」

// このカードへのFAQはありません。

// 「無窮ノ風」

// Q：相手が《攻撃》でないカード2枚を持っている場合、【攻撃後】で捨てるカードを選ぶのはどちらですか？

// A：相手が選んで捨て札にします。

// 「常世ノ月」

// Q：畏縮状態で「常世ノ月」を使用しました。集中力は2になりますか？それとも畏縮が解除されるだけですか？

// A：畏縮状態のまま集中力が2になります。

// 「奏流し」

// Q：対応によって他のメガミの切札が使用済でなくなった場合、【攻撃後】効果で山札の上に戻りますか？

// A：【攻撃後】効果の解決時に条件を満たしていないため、山札の上には戻りません。

// 「陽の音」

// Q：攻撃に対する対応でなくとも効果を得られますか？

// A：はい、得られます。

// Q：オーラがない状態で「見切り」を対応で使用しました。「陽の音」の効果は適用されますか？

// A：適用されません。「見切り」は《対応》カードではないため「陽の音」の効果を受けることはできません。

// Q：相手の「陽の音」を対象に「刈取り」や「皆式理解」の鬼謀効果で選ぶことはできますか？ またそうした場合桜花結晶をダストに送れますか？

// A：対象に選ぶことは可能ですが、「陽の音」の【展開中】効果により、桜花結晶は移動しません。

// 「二重奏：吹弾陽明」

// このカードへのFAQはありません。

// 「畏掠め」

// Q：『ダメージはあなたが選ぶ』とはどういうことですか？

// A：この《攻撃》によるダメージの解決において、オーラへのダメージを受けるかライフへのダメージを受けるかの選択を、ダメージを受けるプレイヤーの代わりにあなたが行います。

// Q：相手のオーラが1で、相手の集中力が0です。私はオーラへダメージを与えることを選べますか？

// A：いいえ、選べません。

// 「悠久ノ雪」

// このカードへのFAQはありません。

// 「徒寄ノ八重桜」

// Q：「詭弁」により相手の「要返し」を使用しました。「徒寄ノ八重桜」によりオーラの上限は８と扱われますか？

// A：いいえ、扱われません。『あなたのカード』にのみ適用されます。

// Q：相手が「詭弁」により私の「誘導」を使用しました。「徒寄ノ八重桜」によりオーラの上限は８として扱われますか？

// A：はい、扱われます。

// Q：私のオーラの桜花結晶と凍結トークンの合計値が5以上のときに相手が「レタルレラ」を使用しました。どうなりますか？

// A：対応としての使用なら打ち消しが行われ、そうでないなら何も起きません。テキストは上から解決され、最初の「相手のオーラに空きが無いならば」の時点でのオーラの上限は5なため、その下の矢印効果は解決されません。
// `)

window.onload = () => {
  document.getElementById('exportfaq').onkeyup = e => {
    // console.log(document.getElementById('exportfaq').value)
    const value = document.getElementById('exportfaq').value
    getDataFromValue(value)
  }
  document.getElementById('exportfaqSub').onkeyup = e => {
    // console.log(document.getElementById('exportfaqSub').value)
    const value = document.getElementById('exportfaqSub').value
    console.log(formatSubStr(value))
  }
}