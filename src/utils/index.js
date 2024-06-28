import {
  // getCardSum,
  // formatDefaultCardData,
  getKrrDouzi,
  // simpPYStr,
  // ftPYStr,
  // qqPYStr,
  // getUrlQuery,
  // paintRange,
  // findAllRangeFromCards,
  sortInObjectOptions,
  getCounts,
  findCardWithFaqCardName,
  get
} from './export'
export function initBaseData(sakuraData, chData) {
  // 数据指定
  const defaultData = JSON.parse(JSON.stringify(sakuraData))
  getKrrDouzi(defaultData)

  chData = JSON.parse(JSON.stringify(chData))
  getKrrDouzi(chData)

  //伞的头像和q版随机开闭
  let _yukihIsOpen = parseInt(Math.random() * 2, 10) === 0
  defaultData[5].list[0].pic = _yukihIsOpen ? 'twiicon_sa_05a.jpg' : 'twiicon_sa_05b.jpg'
  chData[5].list[0].pic = _yukihIsOpen ? 'twiicon_sa_05a.jpg' : 'twiicon_sa_05b.jpg'
  _yukihIsOpen = parseInt(Math.random() * 2, 10) === 0
  defaultData[5].list[1].pic = _yukihIsOpen ? 'twiicon_sa_29.jpg' : 'twiicon_sa_30.jpg'
  chData[5].list[1].pic = _yukihIsOpen ? 'twiicon_sa_29.jpg' : 'twiicon_sa_30.jpg'
  _yukihIsOpen = parseInt(Math.random() * 2, 10) === 0
  defaultData[21].list[0].pic = _yukihIsOpen ? 'twiicon_sa_39.jpg' : 'twiicon_sa_40.jpg'


  //中文数据预处理
  // for (let i = 0; i < chData.length; i++) {
  //   chData[i].showAllCardsIndex = 0
  //   chData[i].showAllCards = false
  //   for (let kk = 0; kk < chData[i].list.length; kk++) {
  //     chData[i].list[kk].showAllCards = false
  //   }
  // }

  //faq注入
  if (window.QADATA) {
    defaultData.forEach(gitem => {
      window.QADATA.forEach(qitem => {
        if (gitem.name === qitem.name) {
          gitem.list[0].QADATA = qitem.list
          gitem.list.forEach(girlItem => {
            findCardWithFaqCardName('normal', girlItem, gitem)
            findCardWithFaqCardName('special', girlItem, gitem)
            findCardWithFaqCardName('extra', girlItem, gitem)
            findCardWithFaqCardName('changeExtra', girlItem, gitem)
            findCardWithFaqCardName('poison', girlItem, gitem)
            findCardWithFaqCardName('transform', girlItem, gitem)
            findCardWithFaqCardName('girlBoard', girlItem, gitem)
            findCardWithFaqCardName('changenormal', girlItem, gitem)
            findCardWithFaqCardName('changespecial', girlItem, gitem)
          })
        }
      })
    })
  }

  return {
    defaultData,
    chData
  }
}

export function initChangeCardsData(sakuraChangeCardsData) {
  let allChangeCards = []
  const allccData = []
  if (sakuraChangeCardsData) {
    sakuraChangeCardsData.forEach(ccitem => {
      ccitem.list.forEach(item => {
        if (item.from && item.to) {
          item.clist = [
            item.from,
            item.to
          ]
        }
        if (get('to.isCancel', item) !== true) {
          allChangeCards.push(item.id)
        }

        if (item.clist) {
          if (allccData.filter(sitem => sitem.id === item.id).length === 0) {
            const cid = item.id.split('-')
            allccData.push({
              clist: item.clist,
              id: item.id,
              index: parseInt(cid[0], 10),
              subIndex: cid[2] === 'o' ? 0 : parseInt(cid[2].replace('a', ''), 10) - 1,
              cardMainIndex: cid[3] === 'n' ? 0 : 1,
              cardSubIndex: parseInt(cid[4], 10)
            })
          } else {
            allccData.filter(sitem => sitem.id === item.id)[0].clist = [item.from].concat(allccData.filter(sitem => sitem.id === item.id)[0].clist)
          }
        }

      })
    })

    allChangeCards = getCounts(allChangeCards)

    sakuraChangeCardsData.push({
      id: 'all',
      name: 'ALL赛季更新',
      namejp: 'ALLカード更新',
      list: sortInObjectOptions(allccData, ['index', 'subIndex', 'cardMainIndex', 'cardSubIndex'], 'up')
    })
  }

  return {
    allChangeCards,
    allccData,
    sakuraChangeCardsData
  }
}

/**
 * 原初复制原来的通常和切
 * @param {*} sakuraCMData 原初数据
 * @param {*} defaultData 新幕数据
 * @returns sakuraCMData
 */
export function initSakuraCMDATA(sakuraCMData, defaultData) {
  if (sakuraCMData && defaultData) {
    sakuraCMData.forEach(cmitem => {
      cmitem.pic = defaultData[cmitem.index].list[0].pic
      cmitem.list.forEach(item => {
        item.normal = [
          ...defaultData[cmitem.index].list[cmitem.subIndex].normal,
          ...item.normal
        ]
        if (item.normalOrg && item.normalOrg.length > 0) {
          // console.log(item.normalOrg)
          const normalOrgList = []
          item.normalOrg.forEach(cindex => {
            const cindexall = cindex.split('|')
            normalOrgList.push(defaultData[cmitem.index].list[parseInt(cindexall[0], 10)].normal[parseInt(cindexall[1], 10)])
          })
          item.normal = [
            ...item.normal,
            ...normalOrgList
          ]
        }
        item.special = [
          ...defaultData[cmitem.index].list[cmitem.subIndex].special,
          ...item.special
        ]
        if (item.poison && defaultData[cmitem.index].list[cmitem.subIndex].poison) {
          item.poison = [
            ...defaultData[cmitem.index].list[cmitem.subIndex].poison.slice(0, 3),
            ...item.poison
          ]
        }
      })
    })
  }
  return sakuraCMData
}

export function addSSTagInCards(sakuraData, changeCardsData, isSub) {
  const noMatchSSCards = []
  if (get('changeCards', changeCardsData, 1)) {
    changeCardsData.changeCards.forEach(scitem => {
      const cardItem = get(`list[${scitem[1]}][${scitem[2]}][${scitem[3]}]`, sakuraData[scitem[0]])
      if (cardItem) {
        if (isSub) {
          cardItem.cardwho = `${cardItem.cardwho ? `${cardItem.cardwho}/` : ''}${changeCardsData.vername}`
          cardItem.cardwhojp = `${cardItem.cardwhojp ? `${cardItem.cardwhojp}/` : ''}${changeCardsData.vername}`
          cardItem.cardwhokr = `${cardItem.cardwhokr ? `${cardItem.cardwhokr}/` : ''}${changeCardsData.vername}`
        } else {
          cardItem.cardwho = changeCardsData.vername
          cardItem.cardwhojp = changeCardsData.vername
          cardItem.cardwhokr = changeCardsData.vername
        }
      } else {
        noMatchSSCards.push(scitem)
      }
    })
  }
  return noMatchSSCards
}

export function getIsShowCardPicIn(cardData, lang, curlang) {
  if (
    lang[curlang].id === 'cn' &&
    (!(cardData.id.indexOf('tf') > -1)) && //排除transfrom卡图
    (!(cardData.id === '16-yatsuha-aa1-t-1'))
  ) {
    return true
  }
  return false
}