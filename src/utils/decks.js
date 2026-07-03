import { sortInObjectOptions } from './export.js'
/**
 * findDeck - 根据女神筛选卡组
 * @param  {Map}    girlToDeckMap    女神→卡组映射（initDecksPlaza 中构建）
 * @param  {Array}  sakuraPlayerDeckData 全部卡组数据
 * @param  {Array|Object} data      指定女神列表，不传则用 deckAvatarList 中已选中的
 * @param  {Array}  deckAvatarList  头像列表（data为空时从中取已选中）
 * @param  {Boolean} isAnd          为true时仅查精确2Pick匹配
 * @return {Object} { result, resultPick2, all }  排序后的结果
 */
export function findDeck(girlToDeckMap, sakuraPlayerDeckData, data, deckAvatarList, isAnd) {
  // 1. 确定要查找的女神列表
  let avatarList
  if (Array.isArray(data)) {
    avatarList = data
  } else if (data) {
    avatarList = [data]
  } else {
    avatarList = deckAvatarList.filter(item => item.isSelect)
  }

  // 2. 空列表直接返回
  if (avatarList.length === 0) {
    return { result: [], resultPick2: [], all: [] }
  }

  // 3. 重置所有卡组的选中状态
  sakuraPlayerDeckData.forEach(item => {
    item.isSelect = false
  })

  let result = []
  let resultPick2 = []

  // 4. 2Pick精确匹配
  if (avatarList.length === 2) {
    const girl1Decks = girlToDeckMap.get(avatarList[0].name) || []
    const girl2Decks = girlToDeckMap.get(avatarList[1].name) || []
    const girl2Set = new Set(girl2Decks)
    girl1Decks.forEach(item => {
      if (girl2Set.has(item) && item.groupCardData[1].name === avatarList[1].name) {
        resultPick2.push(item)
      }
    })
  }

  // 5. 单女神包含匹配
  if (!isAnd) {
    const resultSet = new Set(resultPick2)
    avatarList.forEach(aitem => {
      const decks = girlToDeckMap.get(aitem.name) || []
      decks.forEach(item => {
        if (!resultSet.has(item)) {
          result.push(item)
          resultSet.add(item)
        }
      })
    })
  }

  // 6. 分别排序
  if (resultPick2.length > 0) {
    resultPick2 = sortInObjectOptions(resultPick2, ['id'], 'up')
  }
  if (result.length > 0) {
    result = sortInObjectOptions(result, ['id'], 'up')
  }

  return [...resultPick2, ...result]
}