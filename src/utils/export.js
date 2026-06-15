/**
 * 初始化数据
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
function findCard(data, cardid, kw) {
  // console.log(data);
  kw = kw === undefined ? 'name' : kw
  let _result = ''
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == cardid) {
      _result = data[i][kw]
      break
    }
  }
  return _result
}
export function fnFindExtraFrom(_proData, extraData) {
  for (let o = 0; o < extraData.length; o++) {
    if (extraData[o].extraFrom) {
      let _name = '', _namejp = '', _namekr = ''
      if (_proData.normal && _proData.normal.length > 0) {
        _name = findCard(_proData.normal, extraData[o].extraFrom, 'name')
        _namejp = findCard(_proData.normal, extraData[o].extraFrom, 'namejp')
        _namekr = findCard(_proData.normal, extraData[o].extraFrom, 'namekr')
        // _nameen = findCard(_proData.normal, extraData[o].extraFrom, 'nameen');
      }
      if (_name == '' && _proData.special && _proData.special.length > 0) {
        _name = findCard(_proData.special, extraData[o].extraFrom, 'name')
        _namejp = findCard(_proData.special, extraData[o].extraFrom, 'namejp')
        _namekr = findCard(_proData.special, extraData[o].extraFrom, 'namekr')
        // // _nameen = findCard(_proData.special, extraData[o].extraFrom, 'nameen');
      }
      if (_name == '' && _proData.changespecial && _proData.changespecial.length > 0) {
        _name = findCard(_proData.changespecial, extraData[o].extraFrom, 'name')
        _namejp = findCard(_proData.changespecial, extraData[o].extraFrom, 'namejp')
        _namekr = findCard(_proData.changespecial, extraData[o].extraFrom, 'namekr')
        // // _nameen = findCard(_proData.changespecial, extraData[o].extraFrom, 'nameen');
      }
      if (_name == '' && extraData && extraData.length > 0) {
        _name = findCard(extraData, extraData[o].extraFrom, 'name')
        _namejp = findCard(extraData, extraData[o].extraFrom, 'namejp')
        _namekr = findCard(extraData, extraData[o].extraFrom, 'namekr')
        // // _nameen = findCard(extraData, extraData[o].extraFrom, 'nameen');
      }
      // console.log(extraData[o].name, extraData[o].extraFrom, _name);

      if (_name != '') {
        extraData[o].cardchange = _name
        extraData[o].cardchangejp = _namejp
        extraData[o].cardchangekr = _namekr
        // extraData[o].cardchangeen = _nameen;
      }
    }
  }
  return extraData
}
function findChangeCartAndSetCount(data, listName, changeCards) {
  if (changeCards.length > 0 && data && listName && data[listName]) {
    data[listName].forEach(item => {
      const res = changeCards.filter(item2 => item2.name === item.id)
      if (res.length > 0) {
        item.changeCardCount = res[0].count
        // console.log(item.id, item.changeCardCount, res[0])
      }
    })
  }
}

export function formatDefaultCardData(data, changeCards) {
  changeCards = changeCards || []
  for (let i = 0; i < data.length; i++) {
    for (let k = 0; k < data[i].list.length; k++) {
      // data[i].list[k].desc = data[i].desc;
      // data[i].list[k].descjp = data[i].descjp;
      // data[i].list[k].desckr = data[i].desckr;
      // data[i].list[k].descen = data[i].descen;
      data[i].list[k] = Object.assign({
        isInArea: true,
        realname: data[i].name,
        realnamejp: data[i].namejp,
        realnamekr: data[i].namekr,
        // realnameen: data[i].nameen,
        index: i,
        subIndex: k,
        desc: data[i].desc,
        descjp: data[i].descjp
      }, data[i].list[k])
      const _proData = data[i].list[k]
      // console.log(_proData, _proData.extra, _proData.changeExtra);

      // 赛季修订卡查找目标
      if (changeCards.length > 0) {
        findChangeCartAndSetCount(data[i].list[k], 'normal', changeCards)
        findChangeCartAndSetCount(data[i].list[k], 'special', changeCards)
        findChangeCartAndSetCount(data[i].list[k], 'extra', changeCards)
        findChangeCartAndSetCount(data[i].list[k], 'changenormal', changeCards)
        findChangeCartAndSetCount(data[i].list[k], 'changespecial', changeCards)
        findChangeCartAndSetCount(data[i].list[k], 'changeExtra', changeCards)
        findChangeCartAndSetCount(data[i].list[k], 'transform', changeCards)
        // findChangeCartAndSetCount(data[i].list[k], 'girlBoard', changeCards)
      }

      if (_proData.extra && _proData.extra.length > 0) {
        _proData.extra = fnFindExtraFrom(_proData, _proData.extra)
      }

      if (k > 0 && _proData.changenormal && _proData.changespecial) { //如果是a女神替换牌表
        _proData.normal = JSON.parse(JSON.stringify(data[i].list[0].normal))
        _proData.special = JSON.parse(JSON.stringify(data[i].list[0].special))

        _proData.changenormal.forEach(item => {
          _proData.normal[item.changeIndex - 1] = JSON.parse(JSON.stringify(item))

          _proData.normal[item.changeIndex - 1].cardwho = _proData.name
          _proData.normal[item.changeIndex - 1].cardwhojp = _proData.namejp
          _proData.normal[item.changeIndex - 1].cardwhokr = _proData.namekr
          // _proData.normal[item.changeIndex - 1].cardwhoen = _proData.nameen;
        })

        _proData.changespecial.forEach(item => {
          _proData.special[item.changeIndex - 1] = JSON.parse(JSON.stringify(item))

          _proData.special[item.changeIndex - 1].cardwho = _proData.name
          _proData.special[item.changeIndex - 1].cardwhojp = _proData.namejp
          _proData.special[item.changeIndex - 1].cardwhokr = _proData.namekr
          // _proData.special[item.changeIndex - 1].cardwhoen = _proData.nameen;
        })

        //特殊毒牌
        if (data[i].list[0].poison) {
          _proData.poison = JSON.parse(JSON.stringify(data[i].list[0].poison))
        }
        //骑a的transform
        if (_proData.changeTransform) {
          _proData.transform = JSON.parse(JSON.stringify(data[i].list[0].transform))
          for (let o = 0; o < _proData.changeTransform.length; o++) {
            _proData.transform[_proData.changeTransform[o].changeIndex - 1] = JSON.parse(JSON.stringify(_proData.changeTransform[o]))
            _proData.transform[_proData.changeTransform[o].changeIndex - 1].cardwho = _proData.name
            _proData.transform[_proData.changeTransform[o].changeIndex - 1].cardwhojp = _proData.namejp
            _proData.transform[_proData.changeTransform[o].changeIndex - 1].cardwhokr = _proData.namekr
            // _proData.transform[_proData.changeTransform[o].changeIndex - 1].cardwhoen = _proData.nameen;
          }
        }
        if (_proData.changeExtra) {
          // if(data[i].list[0].extra === undefined){
          //   data[i].list[0].extra = [];
          // }
          for (let o = 0; o < _proData.changeExtra.length; o++) {
            _proData.changeExtra[o] = JSON.parse(JSON.stringify(_proData.changeExtra[o]))
            _proData.changeExtra[o].cardwho = _proData.name
            _proData.changeExtra[o].cardwhojp = _proData.namejp
            _proData.changeExtra[o].cardwhokr = _proData.namekr
            // _proData.changeExtra[o].cardwhoen = _proData.nameen;

            if (findCard(_proData.changespecial, _proData.changeExtra[o].extraFrom, 'name') != '') {
              _proData.changeExtra[o].cardchange = findCard(_proData.changespecial, _proData.changeExtra[o].extraFrom, 'name')
              _proData.changeExtra[o].cardchangejp = findCard(_proData.changespecial, _proData.changeExtra[o].extraFrom, 'namejp')
              _proData.changeExtra[o].cardchangekr = findCard(_proData.changespecial, _proData.changeExtra[o].extraFrom, 'namekr')
              // _proData.changeExtra[o].cardchangeen = findCard(_proData.changespecial, _proData.changeExtra[o].extraFrom, 'nameen');

            }
            // console.log(_proData.changeExtra[o])
            // console.log(_proData.changeExtra[o].extraFrom)
          }
        }

        if (_proData.changeExtra && _proData.changeExtra.length > 0) {
          _proData.changeExtra = fnFindExtraFrom(_proData, _proData.changeExtra)
        }
        // console.log(_proData.normal);
        // console.log(_proData.special);
      }
    }
  }
  return data
}
/**
 * 计算豆子的2个函数
 */
function getItemColors(item) {
  const matchReg2 = /(?=<).*?(?=>)/gi
  const _matchResult2 = item.textjp.match(matchReg2)
  // console.log(_matchResult2)
  const newa = []
  if (_matchResult2 != null) {
    _matchResult2.forEach(item2 => {
      item2 = item2.replace('<', '')
      item2 = item2.replace(/付/g, '绿')
      item2 = item2.replace(/行/g, '蓝')
      item2 = item2.replace(/対/g, '紫')
      item2 = item2.replace(/攻/g, '红')
      item2 = item2.replace(/全/g, '黄')
      newa.push(item2.split(''))
    })
    // console.log(item.colors[0]);
  }
  return newa
}
export function getKrrDouzi(data) {
  const krr = data[9].list || []
  if (krr.length > 0) {
    krr.forEach(item => {
      if (item.normal && item.normal.length > 0) {
        item.normal.forEach(sitem => {
          sitem.colors = getItemColors(sitem)
        })
      }
      if (item.special && item.special.length > 0) {
        item.special.forEach(sitem => {
          sitem.colors = getItemColors(sitem)
        })
      }
      if (item.changenormal && item.changenormal.length > 0) {
        item.changenormal.forEach(sitem => {
          sitem.colors = getItemColors(sitem)
        })
      }
      if (item.changespecial && item.changespecial.length > 0) {
        item.changespecial.forEach(sitem => {
          sitem.colors = getItemColors(sitem)
        })
      }
    })
  }
  return data
}

export function ajax(options) {
  options = options || {}  //调用函数时如果options没有指定，就给它赋值{},一个空的Object
  options.type = (options.type || 'GET').toUpperCase()/// 请求格式GET、POST，默认为GET
  options.dataType = options.dataType || 'json'    //响应数据格式，默认json

  const params = formatParams(options.data)//options.data请求的数据

  let xhr

  //考虑兼容性
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest()
  } else if (window.ActiveObject) {//兼容IE6以下版本
    xhr = new ActiveXobject('Microsoft.XMLHTTP')
  }

  //启动并发送一个请求
  if (options.type == 'GET') {
    xhr.open('GET', options.url + '?' + params, true)
    xhr.send(null)
  } else if (options.type == 'POST') {
    xhr.open('post', options.url, true)

    //设置表单提交时的内容类型
    //Content-type数据请求的格式
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhr.send(params)
  }

  //    设置有效时间
  setTimeout(function () {
    if (xhr.readySate != 4) {
      xhr.abort()
    }
  }, options.timeout)

  //    接收
  //     options.success成功之后的回调函数  options.error失败后的回调函数
  //xhr.responseText,xhr.responseXML  获得字符串形式的响应数据或者XML形式的响应数据
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      const status = xhr.status
      if (status >= 200 && status < 300 || status == 304) {
        options.success && options.success(xhr.responseText, xhr.responseXML)
      } else {
        options.error && options.error(status)
      }
    }
  }
}

//格式化请求参数
export function formatParams(data) {
  const arr = []
  for (const name in data) {
    arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
  }
  arr.push(('v=' + Math.random()).replace('.', ''))
  return arr.join('&')

}

/**
 * 计算卡牌数量
 * @param {Object} cardData 
 * @returns 
 */
export function getCardSum(cardData) {
  const _cardSum = {
    normal: 0,
    special: 0,
    other: 0
  }
  for (let i = 0; i < cardData.length; i++) {
    cardData[i].showAllCardsIndex = 0
    cardData[i].showAllCards = false
    for (let kk = 0; kk < cardData[i].list.length; kk++) {
      cardData[i].list[kk].showAllCards = false
    }
    // console.log(cardData[i].name);
    // 主女神
    if (cardData[i].list[0].normal && cardData[i].list[0].normal.length > 0) {
      _cardSum.normal += cardData[i].list[0].normal.length
    }
    if (cardData[i].list[0].special && cardData[i].list[0].special.length > 0) {
      _cardSum.special += cardData[i].list[0].special.length
    }
    if (cardData[i].list[0].extra && cardData[i].list[0].extra.length > 0) {
      // console.log(cardData[i].list[0].name,cardData[i].list[0].extra.length)
      for (let y = 0; y < cardData[i].list[0].extra.length; y++) {
        // console.log(cardData[i].list[0].name,cardData[i].list[0].extra[y].baseType,cardData[i].list[0].extra[y].name);
        if (cardData[i].list[0].extra[y].baseType == 'special') {
          _cardSum.special++
        }
        else if (cardData[i].list[0].extra[y].baseType == 'normal') {
          _cardSum.normal++
        }
        else if (cardData[i].list[0].extra[y].baseType == 'soldier') {
          _cardSum.other++
        }
      }
    }
    if (cardData[i].list[0].transform && cardData[i].list[0].transform.length > 0) {
      _cardSum.other += cardData[i].list[0].transform.length
    }
    if (cardData[i].list[0].poison && cardData[i].list[0].poison.length > 0) {
      _cardSum.other += cardData[i].list[0].poison.length
    }
    //a女神
    for (let k = 1; k < cardData[i].list.length; k++) {
      if (cardData[i].list[k].changenormal && cardData[i].list[k].changenormal.length > 0) {
        _cardSum.normal += cardData[i].list[k].changenormal.length
      }
      if (cardData[i].list[k].changespecial && cardData[i].list[k].changespecial.length > 0) {
        _cardSum.special += cardData[i].list[k].changespecial.length
      }
      if (cardData[i].list[k].changeExtra && cardData[i].list[k].changeExtra.length > 0) {
        // console.log('changeExtra',cardData[i].list[k].name,cardData[i].list[k].changeExtra.length);
        for (let y = 0; y < cardData[i].list[k].changeExtra.length; y++) {
          // console.log(cardData[i].list[k].name,cardData[i].list[k].changeExtra[y].baseType,cardData[i].list[k].changeExtra[y].name);
          if (cardData[i].list[k].changeExtra[y].baseType == 'special') {
            _cardSum.special++
          }
          else if (cardData[i].list[k].changeExtra[y].baseType == 'normal') {
            _cardSum.normal++
          }
        }
      }
      if (cardData[i].list[k].changeTransform && cardData[i].list[k].changeTransform.length > 0) {
        _cardSum.other += cardData[i].list[k].changeTransform.length
      }
    }
  }
  return _cardSum
}

export function get(path, parent, num) {
  if (typeof parent !== 'object') {
    parent = this
  }
  const pathArr = path.replace(/\[/g, '.')
    .replace(/\]/g, '')
    .split('.')
  const res = pathArr.reduce((o, k) => (o || {})[k], parent)
  if ((Array.isArray(res) && num)) {
    return res.length >= num ? res.slice(0, num) : undefined
  }
  return res
}

function sortByKey(array, key, updown) {
  updown = updown || 'up'
  return array.sort((a, b) => {
    // if (key == 'time') { 
    //   console.log(+new Date(a[key]))
    // }
    const x = (key == 'time' || key == 'created_at') ? parseInt(+new Date(a[key]).getTime(), 10) : a[key]
    const y = (key == 'time' || key == 'created_at') ? parseInt(+new Date(b[key]).getTime(), 10) : b[key]
    let res = ((x > y) ? 1 : 0)
    if (updown == 'up') {
      return (x < y) ? -1 : res
    }
    res = ((x > y) ? -1 : 0)
    return (x < y) ? 1 : res
  })
}
export function getCounts(val) {
  let _arr = (typeof str === 'string' && _arr.indexOf(',') > -1) ? val.split(',') : val
  const _res = []
  _arr = _arr.filter(val2 => {
    return !(val2 === '')
  })
  _arr.sort()
  for (let i = 0; i < _arr.length;) {
    let count = 0
    for (let j = i; j < _arr.length; j++) {
      if (_arr[i] == _arr[j]) {
        count++
      }
    }
    _res.push([_arr[i], count])
    i += count
  }
  //_res 二维数维中保存了 值和值的重复数  
  let _newArr = [], sumCount = 0
  for (let i = 0; i < _res.length; i++) {
    // console.log(_res[i][0] + "重复次数:" + _res[i][1]);  
    _newArr.push({
      name: _res[i][0],
      count: _res[i][1],
      value: _res[i][1]
    })
    sumCount += _res[i][1]
  }
  _newArr = sortByKey(_newArr, 'count', 'down')
  // console.log(_newArr);
  return {
    resultList: _newArr,
    sumCount: sumCount
  }
}
function getAllRange(cardItem, val, pointVal) {
  val = val || 'range'
  let range = pointVal || cardItem[val] || []
  const orginRange = range
  // console.log(cardItem.name, range)
  if (range !== 'X' && range.length > 0) {
    if (range.indexOf('-') > -1) {
      range = range.split('-')
      if (range[1] === 'X') {
        range[1] = 9
      }
      range = range.map(Number)
      range = Array.from(new Array(range[1] + 1).keys()).slice(range[0])
    }
    else if (range.indexOf(',') > -1) {
      range = range.split(',')
    }
    else if (!isNaN(+range)) {
      range = [range]
    }
    range = range.map(Number)
  }

  // 输出被桨a影响的所有带攻击的卡
  // if (range.length > 2) {
  //   // console.log('---', cardItem.name, cardItem.namejp, range)
  //   if (!window.atkHatsumiA) {
  //     window.atkHatsumiA = {}
  //   }
  //   if (!window.atkHatsumiA[cardItem.namejp + '-' + val + '-' + orginRange]) {
  //     window.atkHatsumiA[cardItem.namejp + '-' + val + '-' + orginRange] = `${cardItem.name}, ${range.join(',')}`
  //   }
  // } else {
  //   if (!window.atkHatsumiB) {
  //     window.atkHatsumiB = {}
  //   }
  //   if (!window.atkHatsumiB[cardItem.namejp + '-' + val + '-' + orginRange]) {
  //     window.atkHatsumiB[cardItem.namejp + '-' + val + '-' + orginRange] = `${cardItem.name}, ${range.join(',')}`
  //   }
  // }
  // console.log('---',cardItem.name, range)
  return range
}
function getRangeFrom(item, val) {
  val = val || 'textjp'
  let range = []
  if (item[val] && item[val].indexOf('『適正距離') > -1) {
    const pattern = /『適正距離.*?、/g
    // console.log(item[val].match(pattern));
    range = item[val].match(pattern)
    if (range.length > 0) {
      for (let i = 0; i < range.length; i++) {
        range[i] = range[i].replace('『適正距離', '')
        range[i] = range[i].replace('、', '')
      }
    }
  } else if (item[val] && item[val].indexOf('「適正距離') > -1) {
    const pattern = /「適正距離.*?、/g
    // console.log(item[val].match(pattern));
    range = item[val].match(pattern)
    if (range.length > 0) {
      for (let i = 0; i < range.length; i++) {
        range[i] = range[i].replace('「適正距離', '')
        range[i] = range[i].replace('、', '')
      }
    }
  }
  return range
}
export function findAllRangeFromCards(thisGirl, thisGirlData, cardVale, isGroupYukihi) {
  if (thisGirlData[cardVale] && thisGirlData[cardVale].length > 0) {
    thisGirlData[cardVale].forEach(item => {
      if (item.types && item.types.includes('attack')) {
        thisGirl.cards.push(item)
        thisGirl.ranges = thisGirl.ranges.concat([...getAllRange(item, 'range')])
        if (item.rangeOpened) {
          thisGirl.rangeOpened = thisGirl.rangeOpened.concat([...getAllRange(item, 'rangeOpened')])
        }
        if (isGroupYukihi && (item.id.indexOf('yukihi') === -1)) {
          thisGirl.rangeOpened = thisGirl.rangeOpened.concat([...getAllRange(item, 'range')])
        }
        const _textRange = getRangeFrom(item)
        // console.log(item.name, _textRange)
        if (_textRange && _textRange.length > 0) {
          // console.log(item.name, _textRange)
          thisGirl.cards.push(item)
          for (let i = 0; i < _textRange.length; i++) {
            thisGirl.ranges = thisGirl.ranges.concat([...getAllRange(item, 'range', _textRange[i])])
            if (isGroupYukihi && (item.id.indexOf('yukihi') === -1)) {
              thisGirl.rangeOpened = thisGirl.rangeOpened.concat([...getAllRange(item, 'range', _textRange[i])])
            }
          }
        }
      } else if (item.textjp && (item.textjp.indexOf('『適正距離') > -1 || item.textjp.indexOf('「適正距離') > -1) && item.id !== '06-yukihi-a1-s-2') {
        const _textRange = getRangeFrom(item)
        // console.log(item.name, _textRange)
        if (_textRange && _textRange.length > 0) {
          thisGirl.cards.push(item)
          for (let i = 0; i < _textRange.length; i++) {
            thisGirl.ranges = thisGirl.ranges.concat([...getAllRange(item, 'range', _textRange[i])])
            if (isGroupYukihi && (item.id.indexOf('yukihi') === -1)) {
              thisGirl.rangeOpened = thisGirl.rangeOpened.concat([...getAllRange(item, 'range', _textRange[i])])
            }
          }
        }
      }
      if (item.id === '06-yukihi-a1-s-2') {
        thisGirl.rangeOpened = thisGirl.rangeOpened.concat([...getAllRange(item, 'range', '0-5')])
      }
      // if (item.id === '22-renri-o-s-4-ex1') {
      //   thisGirl.ranges = thisGirl.ranges.concat([...getAllRange(item, 'range', '0-10')])
      // }
    })
  }
  return thisGirl
}
export function paintRange(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].list.length; j++) {
      // console.log(data[i].list[j].name)
      const thisGirl = {
        name: data[i].list[j].name,
        cards: [],
        ranges: [],
        rangeOpened: []
      }

      findAllRangeFromCards(thisGirl, data[i].list[j], 'normal')
      findAllRangeFromCards(thisGirl, data[i].list[j], 'special')
      findAllRangeFromCards(thisGirl, data[i].list[j], 'extra')
      findAllRangeFromCards(thisGirl, data[i].list[j], 'transform')
      findAllRangeFromCards(thisGirl, data[i].list[j], 'changeExtra')

      thisGirl.ranges = sortByKey(getCounts(thisGirl.ranges).resultList, 'name')
      if (thisGirl.rangeOpened.length > 0) {
        thisGirl.rangeOpened = sortByKey(getCounts(thisGirl.rangeOpened).resultList, 'name')
      }

      data[i].list[j].girlExtra = thisGirl
      // console.log(thisGirl)
    }
  }
  return data
}

export function sortInObjectOptions(arr, options, updown) {
  updown = updown || 'down'
  if (options && options.length > 0) {
    return arr.sort((a, b) => {
      const aa = updown === 'up' ? a : b
      const bb = updown === 'up' ? b : a
      let sort = aa[options[0]] - bb[options[0]]
      for (let i = 1; i < options.length; i++) {
        const item = options[i]
        if (item === 'name') {
          sort = sort || bb[item].localeCompare(aa[item])
        }
        else {
          sort = sort || aa[item] - bb[item]
        }
      }
      return sort
    })
  }
  return arr
}
/**
 * 从URL获取对应key的参数
 * @param {*} paramName 
 * @param {*} url 
 * @returns 
 */
export function getUrlQuery(paramName, url) {
  let seachUrl = window.location.search.replace('?', '')
  if (url != null) {
    const index = url.indexOf('?')
    url = url.substr(index + 1)
    seachUrl = url
  }
  const ss = seachUrl.split('&')
  let paramNameStr = ''
  let paramNameIndex = -1
  const result = paramName ? '' : {}
  for (let i = 0; i < ss.length; i++) {
    paramNameIndex = ss[i].indexOf('=')
    paramNameStr = ss[i].substring(0, paramNameIndex)
    if (!paramName) {
      const returnValue = ss[i].substring(paramNameIndex + 1, ss[i].length)
      result[paramNameStr] = returnValue
    } else if (paramNameStr === paramName) {
      let returnValue = ss[i].substring(paramNameIndex + 1, ss[i].length)
      if (typeof returnValue === 'undefined') {
        returnValue = ''
      }
      returnValue = returnValue.replace(/\?.*/, '')
      return returnValue.replace(/(#(.*))$/, '')
    }
  }
  return result
}

export function findCardWithFaqCardName(cardType, girlItem, gitem) {
  if (girlItem[cardType] && girlItem[cardType].length > 0) {
    girlItem[cardType].forEach(citem => {
      gitem.list[0].QADATA.forEach(faqitem => {
        const nameAfterFilter = faqitem.name.replace(/\s+/g, '')
        if ((citem.name && (nameAfterFilter === `「${citem.name.replace(/\s+/g, '')}」`)) || (nameAfterFilter === `「${citem.namejp.replace(/\s+/g, '')}」`)) {
          // console.log(faqitem.name, citem.name.replace(/\s+/g, ''), citem.namejp.replace(/\s+/g, ''))
          if (citem.name) {
            faqitem.name = `「${citem.name}」`
          }
          faqitem.namejp = `「${citem.namejp}」`
          if (!(faqitem.nameCard)) {
            faqitem.nameCard = { ...citem }
          }
          if (!(citem.faq && citem.faq[0] && citem.faq[0].a)) {
            citem.faq = faqitem.list
          }
        }
      })
    })
  }
}
/**
     * 将输入的任意对象转换成 Date，如果装换失败将返回当前时间
     * silly-datetime组件，https://github.com/csbun/silly-datetime/blob/master/src/index.js
     * @param  {any} datetime 需要被格式化的时间
     * @return {Date}         转换好的 Date
     */
const getDateObject = datetime => {
  let t = datetime instanceof Date ? datetime : new Date(datetime)
  if (!t.getDate()) {
    t = new Date()
  }
  return t
}
/**
 * 格式化时间
 * silly-datetime组件，https://github.com/csbun/silly-datetime/blob/master/src/index.js
 * @param  {Date}   datetime  需要被格式化的时间
 * @param  {string} formatStr 格式化字符串，默认为 'YYYY-MM-DD HH:mm:ss'
 * @return {string}           格式化后的时间字符串
 */
export function formatTime(datetime, formatStr) {
  const t = this.getDateObject(datetime)
  let i = 0
  formatStr = formatStr || 'YYYY-MM-DD HH:mm:ss'
  const hours = t.getHours()
  const o = [
    ['M+', t.getMonth() + 1],
    ['D+', t.getDate()],
    // H 24小时制
    ['H+', hours],
    // h 12小时制
    ['h+', hours > 12 ? hours - 12 : hours],
    ['m+', t.getMinutes()],
    ['s+', t.getSeconds()]
  ]
  // 替换 Y
  if (/(Y+)/.test(formatStr)) {
    formatStr = formatStr.replace(
      RegExp.$1,
      (t.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  // 替换 M, D, H, h, m, s
  for (; i < o.length; i++) {
    if (new RegExp('(' + o[i][0] + ')').test(formatStr)) {
      formatStr = formatStr.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? o[i][1]
          : ('00' + o[i][1]).substr(('' + o[i][1]).length)
      )
    }
  }
  // 替换 a/A 为 am, pm
  return formatStr.replace(/a/gi, hours > 11 ? 'pm' : 'am')
}

export function unique(arr, findKeyName) {
  findKeyName = findKeyName === undefined ? 'id' : findKeyName
  const obj = {}
  arr = arr.reduce((cur, next) => {
    obj[next[findKeyName]]
      ? ''
      : (obj[next[findKeyName]] = true && cur.push(next))
    return cur
  }, [])
  return arr
}

function filterEmoji(keywords) {
  keywords = keywords.replace(
    /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
    ''
  )
  return keywords
}

export function filterKeywords(keywords) {
  // console.log('过滤前',keywords)
  const _pattern = new RegExp(
    '[`~!@#$^&*()=|{}\':;\',\\[\\]<>/?~！@#￥……&*（）——|{}‘；：\'，。、！？：；﹑•＂…‘’“”〝〞∕¦‖—　〈〉﹞﹝「」‹›〖〗】【»«』『〕〔》《﹐¸﹕︰﹔！¡？¿﹖﹌﹏﹋＇´ˊˋ―﹫︳︴¯＿￣﹢﹦﹤‐­˜﹟﹩﹠﹪﹡﹨﹍﹉﹎﹊ˇ︵︶︷︸︹︿﹀︺︽︾ˉ﹁﹂﹃﹄︻︼（）]'
  )
  let _newKeywords = ''
  for (let i = 0; i < keywords.length; i++) {
    _newKeywords =
      _newKeywords + keywords.substr(i, 1).replace(_pattern, '')
  }
  _newKeywords = this.filterEmoji(_newKeywords)
  // console.log('过滤后',_newKeywords)
  return _newKeywords
}