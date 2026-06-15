import {
  getUrlQuery
} from './export.js'

const spStopsCards = ['re-08-hagane-o-n-1', 're-06-yukihi-o-s-3']
export function isShowStopIcon(item) {
  if (spStopsCards.includes(item.id) || (item.textjp && item.textjp.substr(0, 2) === '終端')) {
    return true
  }
  return false
}

/**
 * 获取牌类型
 * @param  {[type]} item [description]
 */
export function getCardClass(cardItem) {
  let _classname = ''
  if (cardItem.types && cardItem.types.length > 0) {
    _classname += cardItem.types.join(' ')
  }
  if (cardItem.isForbid !== undefined && cardItem.isForbid) {
    _classname += ' forbid'
  }
  if (cardItem.selected !== undefined && cardItem.selected) {
    _classname += ' cur'
  }
  if (cardItem.isCancel) {
    _classname += ' cancel-card'
  }
  // if (this.debug) {
  //   _classname += ' haspic'
  // }
  return _classname
}

export function getIsShowCardPicIn(cardData, lang, curlang) {
  if (
    lang[curlang].id === 'cn' &&
    (!(cardData.id.indexOf('tf') > -1)) && //排除transfrom卡图
    (!(cardData.id.indexOf('-f-') > -1)) && //三女神版图
    (!(cardData.id === '16-yatsuha-aa1-t-1'))
  ) {
    return true
  }
  return false
}

export function getImgUrl(cardItem, cardDetailData) {
  const imgBeforeUrl = '../img/card/na_'
  if (cardItem !== undefined) {
    let _id = cardItem.id
    if (_id === '02/04-saine/tokoyo-a1-n-1/4') {
      return `${imgBeforeUrl}02_saine_a1_n_1.png`
    }
    _id = _id.replace(/\-/g, '_')
    return `${imgBeforeUrl}${_id}.png`
  }
  if (cardDetailData && cardDetailData.namejp) {
    let _id = cardDetailData.id
    if (_id === '02/04-saine/tokoyo-a1-n-1/4') {
      return `${imgBeforeUrl}02_saine_a1_n_1.png`
    }
    _id = _id.replace(/\-/g, '_')
    return `${imgBeforeUrl}${_id}.png`
  }
}

export function getImgUrlWill(cardDetailData) {
  if (cardDetailData && cardDetailData.namejp) {
    let _id = cardDetailData.id
    _id = _id.replace(/\-/g, '_')
    return `../img/card/na_${_id}_w.png`
  }
}

export function getDeckDetailForLink(link, naData, defaultData, deckfilterMap) {
  const _girls = getUrlQuery('girls', link).split(',')
  const _girlscard1 = getUrlQuery('girlscard1', link)
    ? getUrlQuery('girlscard1', link).split('+')
    : '0,1,2,3,4,5,6+0,1,2,3'.split('+')
  const _girlscard2 = getUrlQuery('girlscard2', link)
    ? getUrlQuery('girlscard2', link).split('+')
    : '0,1,2,3,4,5,6+0,1,2,3'.split('+')
  if (_girlscard1[0] !== '') {
    _girlscard1[0] = _girlscard1[0].split(',')
  }
  if (_girlscard1[1] !== '') {
    _girlscard1[1] = _girlscard1[1].split(',')
  }
  if (_girlscard2[0] !== '') {
    _girlscard2[0] = _girlscard2[0].split(',')
  }
  if (_girlscard2[1] !== '') {
    _girlscard2[1] = _girlscard2[1].split(',')
  }
  const groupCardData = [],
    girl1 = [],
    girl2 = [],
    deck = {
      normal: [],
      special: [],
      extra: [],
      changeExtra: []
    }
  let orginData = naData // 新幕卡组
  if (link.indexOf('re') > -1 && link.indexOf('pre') < 0) {
    orginData = defaultData
  }
  for (let i = 0; i < _girls.length; i++) {
    const _girlsSub = _girls[i].split('+')
    groupCardData.push(orginData[_girlsSub[0]].list[_girlsSub[1]])
  }
  if (_girlscard1[0] !== '') {
    for (let i = 0; i < _girlscard1[0].length; i++) {
      deck.normal.push(groupCardData[0].normal[_girlscard1[0][i]])
      girl1.push(groupCardData[0].normal[_girlscard1[0][i]])
    }
  }
  if (_girlscard1[1] !== '') {
    for (let i = 0; i < _girlscard1[1].length; i++) {
      deck.special.push(groupCardData[0].special[_girlscard1[1][i]])
      girl1.push(groupCardData[0].special[_girlscard1[1][i]])
    }
  }
  if (_girlscard2[0] !== '') {
    for (let i = 0; i < _girlscard2[0].length; i++) {
      deck.normal.push(groupCardData[1].normal[_girlscard2[0][i]])
      girl2.push(groupCardData[1].normal[_girlscard2[0][i]])
    }
  }
  if (_girlscard2[1] !== '') {
    for (let i = 0; i < _girlscard2[1].length; i++) {
      deck.special.push(groupCardData[1].special[_girlscard2[1][i]])
      girl2.push(groupCardData[1].special[_girlscard2[1][i]])
    }
  }
  deck.extra = [
    ...(groupCardData[0].extra || []),
    ...(groupCardData[1].extra || [])
  ]
  deck.changeExtra = [
    ...(groupCardData[0].changeExtra || []),
    ...(groupCardData[1].changeExtra || [])
  ]
  deck.poison = [
    ...(groupCardData[0].poison || []),
    ...(groupCardData[1].poison || [])
  ]
  deck.transform = [
    ...(groupCardData[0].transform || []),
    ...(groupCardData[1].transform || [])
  ]
  deck.girlBoard = [
    ...(groupCardData[0].girlBoard || []),
    ...(groupCardData[1].girlBoard || [])
  ]
  for (const fitem in deckfilterMap) {
    // console.log(fitem, deckfilterMap[fitem])
    if (
      +groupCardData[0].index === +fitem ||
      +groupCardData[1].index === +fitem
    ) {
      if (deck.extra && deck.extra.length > 0) {
        deckfilterMap[fitem].forEach(oItem => {
          if (
            deck[oItem.find] &&
            deck[oItem.find].length > 0 &&
            deck[oItem.find].filter(item => item.id === oItem.findFrom)
              .length === 0
          ) {
            deck.extra = deck.extra.filter(
              item => item.id && item.id.indexOf(oItem.findFrom) === -1
            )
          }
        })
      }
      if (deck.changeExtra && deck.changeExtra.length > 0) {
        deckfilterMap[fitem].forEach(oItem => {
          if (
            deck[oItem.find] &&
            deck[oItem.find].length > 0 &&
            deck[oItem.find].filter(item => item.id === oItem.findFrom)
              .length === 0
          ) {
            if (+fitem === 15) {
              deck.changeExtra = deck.changeExtra.filter(
                item =>
                  item.extraFrom &&
                  item.extraFrom.indexOf(oItem.findFrom) === -1
              )
            } else {
              deck.changeExtra = deck.changeExtra.filter(
                item => item.id && item.id.indexOf(oItem.findFrom) === -1
              )
            }
          }
        })
      }
    }
  }
  // console.log(groupCardData, deck)
  return {
    deck,
    groupCardData: [
      {
        ...groupCardData[0],
        useCards: girl1
      },
      {
        ...groupCardData[1],
        useCards: girl2
      }
    ],
    ver: getUrlQuery('ver', link)
  }
}