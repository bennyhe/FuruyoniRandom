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