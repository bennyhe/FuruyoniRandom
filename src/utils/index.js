import {
  getKrrDouzi,
  sortInObjectOptions,
  getCounts,
  findCardWithFaqCardName,
  get
} from './export'
export function initBaseData(sakuraData, naChData, naData) {
  // 数据指定
  const defaultData = JSON.parse(JSON.stringify(sakuraData))
  getKrrDouzi(defaultData)

  naChData = JSON.parse(JSON.stringify(naChData))
  getKrrDouzi(naChData)

  naData = JSON.parse(JSON.stringify(naData))
  getKrrDouzi(naData)

  //伞的头像和q版随机开闭
  let _yukihIsOpen = parseInt(Math.random() * 2, 10) === 0
  naData[5].list[0].pic = _yukihIsOpen ? 'twiicon_sa_05a.jpg' : 'twiicon_sa_05b.jpg'
  naChData[5].list[0].pic = _yukihIsOpen ? 'twiicon_sa_05a.jpg' : 'twiicon_sa_05b.jpg'
  defaultData[5].list[0].pic = _yukihIsOpen ? 'twiicon_sa_05a.jpg' : 'twiicon_sa_05b.jpg'

  _yukihIsOpen = parseInt(Math.random() * 2, 10) === 0
  naData[5].list[1].pic = _yukihIsOpen ? 'twiicon_sa_29.jpg' : 'twiicon_sa_30.jpg'
  naChData[5].list[1].pic = _yukihIsOpen ? 'twiicon_sa_29.jpg' : 'twiicon_sa_30.jpg'
  defaultData[5].list[1].pic = _yukihIsOpen ? 'twiicon_sa_29.jpg' : 'twiicon_sa_30.jpg'

  _yukihIsOpen = parseInt(Math.random() * 2, 10) === 0
  naData[21].list[0].pic = _yukihIsOpen ? 'twiicon_sa_39.jpg' : 'twiicon_sa_40.jpg'


  //中文数据预处理
  // for (let i = 0; i < naChData.length; i++) {
  //   naChData[i].showAllCardsIndex = 0
  //   naChData[i].showAllCards = false
  //   for (let kk = 0; kk < naChData[i].list.length; kk++) {
  //     naChData[i].list[kk].showAllCards = false
  //   }
  // }

  //faq注入
  if (window.QADATA) {
    naData.forEach(gitem => {
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
    naChData,
    naData
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

export function mergeMissingGirls(defaultData, naData) {
  // 已有女神 namejp 集合
  const existingNamesJp = new Set(defaultData.map(g => g.namejp))

  // 以 naData 顺序为基准，逐个位置填充
  const result = []
  naData.forEach((naGirl, naIndex) => {
    if (existingNamesJp.has(naGirl.namejp)) {
      // defaultData 有这个女神，用 defaultData 的数据
      const existingGirl = defaultData.find(g => g.namejp === naGirl.namejp)
      result.push(existingGirl)
    } else {
      // defaultData 缺失，用 naData 的数据补充
      result.push({
        ...naGirl,
        isClassicBattle: true
      })
      // console.log(`补充女神: ${naGirl.namejp}, 位置: ${naIndex}`)
    }
  })

  // 重置下序号
  for (let i = 0; i < result.length; i++) {
    for (let k = 0; k < result[i].list.length; k++) {
      result[i].list[k].index = i
      result[i].list[k].subIndex = k
    }
  }

  return result
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