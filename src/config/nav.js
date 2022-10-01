export default [{
  name: 'Main',
  namejp: 'Main',
  onlyCn: false,
  show: 1
},
{
  name: 'Card List',
  namejp: 'カードリスト',
  onlyCn: false,
  show: 1
},
{
  name: '赛季更新',
  namejp: 'カード更新',
  show: 1
}, {
  name: '扩展玩法',
  namejp: 'Story/連携戦',
  onlyCn: false,
  show: 1,
  childTabIndex: 0,
  child: [{
    name: '新幕原初挑战',
    namejp: 'メガミへの挑戦',
    link: 'https://main-bakafire.ssl-lolipop.jp//furuyoni/na/jitaku.html',
    show: 1
  }, {
    name: 'Story',
    namejp: 'Story',
    onlyCn: false,
    show: 0
  }, {
    name: '祭札 2019',
    namejp: '祭札 2019',
    onlyCn: true,
    show: 1
  }, {
    name: '连携战',
    namejp: '連携戦',
    onlyCn: false,
    show: 1
  }]
}, {
  name: '卡组广场',
  namejp: 'Decks',
  show: 1,
  childTabIndex: 0,
  child: [{
    name: 'Decks',
    namejp: 'Decks',
    onlyCn: false,
    show: 1
  }, {
    name: 'Analysis',
    namejp: 'Analysis',
    onlyCn: false,
    show: 1
  }]
}, {
  name: 'Q&A',
  namejp: 'Q&A',
  show: 1
}]