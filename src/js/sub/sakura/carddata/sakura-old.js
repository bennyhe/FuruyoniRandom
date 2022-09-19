
const sakuraDataOldVer = [{
  name: '刀',
  list: [{
    name: '刀',
    isSelect: false,
    pic: 'twiicon_sa_01.jpg',
    piclong: '01.png',
    picq: 'sd_yurina.png',
    normal: [{
      id: '01-yurina-o-n-1',
      name: '斩',
      baseType: 'normal',
      types: ['attack'],
      range: '1-2',
      damage: '3/1',
      text: ''
    },
    {
      id: '01-yurina-o-n-2',
      name: '一闪',
      baseType: 'normal',
      types: ['attack'],
      range: '2',
      damage: '2/2',
      text: ''
    },
    {
      id: '01-yurina-o-n-3',
      name: '远击',
      baseType: 'normal',
      types: ['attack'],
      range: '4-5',
      damage: '2/1',
      text: '【常时】决死～若自命中的樱花结晶的数目小于等于3，则此《攻击》获得+1/+0。'
    },
    {
      id: '01-yurina-o-n-4',
      name: '居合斩',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '2-3',
      damage: '4/2',
      text: ''
    },
    {
      id: '01-yurina-o-n-5',
      name: '疾跑',
      baseType: 'normal',
      types: ['action'],
      text: '若当前距离大于等于3，则距（2）→虚。'
    },
    {
      id: '01-yurina-o-n-6',
      name: '气合斩',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '破绽\n【破弃时】进行一次“攻击距离0-5 伤害3/-”的攻击。'
    },
    {
      id: '01-yurina-o-n-7',
      name: '气焰万丈',
      baseType: 'normal',
      types: ['enhance', 'fullpower'],
      capacity: '4',
      text: '【展开中】决死～若自命中的樱花结晶的数目小于等于3，则你的《攻击》获得+1/+0。'
    }],
    special: [{
      id: '01-yurina-o-s-1',
      name: '月影落',
      baseType: 'special',
      types: ['attack'],
      range: '1-2',
      damage: '4/3',
      cost: '6',
      text: ''
    },
    {
      id: '01-yurina-o-s-2',
      name: '浦波岚',
      baseType: 'special',
      types: ['attack', 'reaction'],
      range: '0-10',
      damage: '2/-',
      cost: '3',
      text: '【攻击后】被对应的《攻击》获得-2/+0。'
    },
    {
      id: '01-yurina-o-s-3',
      name: '浮舟宿',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '虚（5）→自装  \n虚（5）→敌装'
    },
    {
      id: '01-yurina-o-s-4',
      name: '天音摇波的底力',
      baseType: 'special',
      types: ['attack', 'fullpower'],
      range: '1-3',
      damage: '5/5',
      cost: '5',
      text: '【常时】决死～仅当自命中的樱花结晶的数目小于等于3时可以使用此牌。'
    }]
  }]
},
{
  name: '薙刀',
  list: [{
    name: '薙刀',
    isSelect: false,
    pic: 'twiicon_sa_07.jpg',
    piclong: '07.png',
    picq: 'sd_saine.png',
    normal: [{
      id: '07-saine-o-n-1',
      name: '薙刀斩',
      baseType: 'normal',
      types: ['attack'],
      range: '3-4',
      damage: '3/1',
      text: ''
    },
    {
      id: '07-saine-o-n-2',
      name: '八面斩',
      baseType: 'normal',
      types: ['attack'],
      range: '3-4',
      damage: '2/1',
      text: '【攻击后】八相～若自装中的樱花结晶的数目为0，则进行一次“攻击距离4 伤害2/1”的攻击。'
    },
    {
      id: '07-saine-o-n-3',
      name: '快步',
      baseType: 'normal',
      types: ['action'],
      text: '选择以下一项：\n距（1）→虚 \n虚（1）→距'
    },
    {
      id: '07-saine-o-n-4',
      name: '圈域',
      baseType: 'normal',
      types: ['action'],
      text: '（使用此牌没有任何效果）\n【常时】如果本卡牌位于弃牌中，则：在对方回合中，每当距产生了变化，且距的数值比对方回合开始时的数值小2及以上时，进行一次“攻击距离0-4 伤害3/1”的攻击'
    },
    {
      id: '07-saine-o-n-5',
      name: '识破',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '我方获得1点集中力 \n八相~使用本卡牌对应时，如果我方装中的樱花结晶的数目为0，可以打消《全力》或者《王牌》以外的攻击'
    },
    {
      id: '07-saine-o-n-6',
      name: '冲音晶',
      baseType: 'normal',
      types: ['enhance', 'reaction'],
      capacity: '1',
      text: '【展开时】被对应的《攻击》获得-1/+0。\n【破弃时】进行一次“攻击距离0-5 伤害1/- ”的攻击。'
    },
    {
      id: '07-saine-o-n-7',
      name: '无音壁',
      baseType: 'normal',
      types: ['enhance', 'fullpower'],
      capacity: '5',
      text: '【展开中】在结算我方所受的伤害时，该付与牌上所有的樱花结晶指示物可以视为我方的装'
    }],
    special: [{
      id: '07-saine-o-s-1',
      name: '律动弧戟',
      baseType: 'special',
      types: ['action'],
      cost: '4',
      text: '进行一次“攻击距离2-3 伤害1/1”的攻击。\n进行一次“攻击距离3-4 伤害1/1”的攻击。\n进行一次“攻击距离2-4 伤害2/1”的攻击。'
    },
    {
      id: '07-saine-o-s-2',
      name: '响鸣共振',
      baseType: 'special',
      types: ['action'],
      cost: '1',
      text: '若敌装中的樱花结晶数目为5，则敌装（2）→距'
    },
    {
      id: '07-saine-o-s-3',
      name: '音无碎冰',
      baseType: 'special',
      types: ['action', 'reaction'],
      cost: '2',
      text: '使用本卡牌对应时，处理完本卡牌所对应的《攻击》后，如果现在阶段为主要阶段，则结束该主要阶段\n----\n【再起】八相～自装中的樱花结晶的数目等于0。'
    },
    {
      id: '07-saine-o-s-4',
      name: '冰雨细音的终焉',
      baseType: 'special',
      types: ['attack', 'reaction'],
      range: '1-5',
      damage: '5/4',
      cost: '4',
      text: '【常时】本卡牌只能在对应对方王牌的时候使用'
    }]
  }]
},
{
  name: '铳',
  list: [{
    name: '铳',
    isSelect: false,
    pic: 'twiicon_sa_02.jpg',
    piclong: '02.png',
    picq: 'sd_himika.png',
    normal: [{
      id: '02-himika-o-n-1',
      name: '射击',
      baseType: 'normal',
      types: ['attack'],
      range: '4-10',
      damage: '2/1',
      text: ''
    },
    {
      id: '02-himika-o-n-2',
      name: '速射',
      baseType: 'normal',
      types: ['attack'],
      range: '6-9',
      damage: '2/1',
      text: '【常时】连火～若本卡牌为本回合使用的第3张或以上的卡牌，则该《攻击》获得+1/+0。'
    },
    {
      id: '02-himika-o-n-3',
      name: '麦林加农炮',
      baseType: 'normal',
      types: ['attack'],
      range: '5-7',
      damage: '3/2',
      text: '【攻击后】自命（1）→虚'
    },
    {
      id: '02-himika-o-n-4',
      name: '完全爆破',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '6-9',
      damage: '3/1',
      text: '【常时】对方由于该《攻击》受到伤害时，装和命需要同时结算伤害。'
    },
    {
      id: '02-himika-o-n-5',
      name: '后跳',
      baseType: 'normal',
      types: ['action'],
      text: '抓一张牌。 \n虚（1）→距'
    },
    {
      id: '02-himika-o-n-6',
      name: '回燃',
      baseType: 'normal',
      types: ['action'],
      text: '敌气（1）→敌装\n连火～若本卡牌为本回合使用的第3张或以上的卡牌，则抽一张牌。'
    },
    {
      id: '02-himika-o-n-7',
      name: '迷烟',
      baseType: 'normal',
      types: ['enhance', 'fullpower'],
      capacity: '5',
      text: '【展开中】将本卡牌上放置的樱花结晶数加上现在的距中的樱花结晶数视为现在的实际距离。'
    }],
    special: [{
      id: '02-himika-o-s-1',
      name: '真红凶弹',
      baseType: 'special',
      types: ['attack'],
      range: '5-10',
      damage: '3/1',
      cost: '1',
      text: ''
    },
    {
      id: '02-himika-o-s-2',
      name: '绯红零时',
      baseType: 'special',
      types: ['attack'],
      range: '0',
      damage: '3/2',
      cost: '2',
      text: '【常时】此《攻击》不可被对应。'
    },
    {
      id: '02-himika-o-s-3',
      name: '猩红狂想',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '抓2张牌。'
    },
    {
      id: '02-himika-o-s-4',
      name: '真红领域',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '连火～若本卡牌为本回合使用的第3张或以上的卡牌，则虚（2）→距\n----\n【再起】你的手牌张数等于0。'
    }]
  }]
},
{
  name: '扇',
  list: [{
    name: '扇',
    isSelect: false,
    pic: 'twiicon_sa_03.jpg',
    piclong: '03.png',
    picq: 'sd_tokoyo.png',
    normal: [{
      id: '03-tokoyo-o-n-1',
      name: '梳流',
      baseType: 'normal',
      types: ['attack'],
      range: '4',
      damage: '-/1',
      text: '【常时】心境～只有当我方集中力为2时才可以使用本卡牌'
    },
    {
      id: '03-tokoyo-o-n-2',
      name: '雅击',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '2-3',
      damage: '2/1',
      text: '【攻击后】心境～当我方集中力为2，使用本卡牌对应时，打消被对应的王牌以外的《攻击》。'
    },
    {
      id: '03-tokoyo-o-n-3',
      name: '脱兔',
      baseType: 'normal',
      types: ['action'],
      text: '若当前距离小于等于2，则虚（2）→距'
    },
    {
      id: '03-tokoyo-o-n-4',
      name: '诗舞',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '选择一项：\n1.自装（1）→距\n2.自气（1）→自装'
    },
    {
      id: '03-tokoyo-o-n-5',
      name: '扇回旋',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '从弃牌和（或）盖牌中选择最多2张卡牌。将它们以任意顺序置于你的牌库底。 \n虚（2）→自装'
    },
    {
      id: '03-tokoyo-o-n-6',
      name: '风舞台',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '【展开时】距（2）→自装 \n【破弃时】自装（2）→距'
    },
    {
      id: '03-tokoyo-o-n-7',
      name: '点睛',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '4',
      text: '【破绽】 \n【破弃时】进行一次“攻击距离2-3 -/1 不可被应对”的攻击。'
    }],
    special: [{
      id: '03-tokoyo-o-s-1',
      name: '久远之花',
      baseType: 'special',
      types: ['attack', 'reaction'],
      range: '0-10',
      damage: '-/1',
      cost: '5',
      text: '【攻击后】打消被对应的《攻击》。 '
    },
    {
      id: '03-tokoyo-o-s-2',
      name: '千岁之鸟',
      baseType: 'special',
      types: ['attack'],
      range: '3-4',
      damage: '3/1',
      cost: '2',
      text: '【攻击后】重铸牌库（你不会因此受到伤害）。'
    },
    {
      id: '03-tokoyo-o-s-3',
      name: '无穷之风',
      baseType: 'special',
      types: ['action'],
      cost: '1',
      text: '随机选择对方一张手牌，将其放入弃牌\n----\n【再起】心境～你的集中力等于2。'
    },
    {
      id: '03-tokoyo-o-s-4',
      name: '常世之月',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '我方集中力变为2。'
    }]
  }]
},
{
  name: '忍',
  list: [{
    name: '忍',
    isSelect: false,
    pic: 'twiicon_sa_04.jpg',
    piclong: '04.png',
    picq: 'sd_oboro.png',
    normal: [{
      id: '04-oboro-o-n-1',
      name: '钢丝',
      baseType: 'normal',
      types: ['attack'],
      range: '3-4',
      damage: '2/2',
      text: '设置'
    },
    {
      id: '04-oboro-o-n-2',
      name: '影菱',
      baseType: 'normal',
      types: ['attack'],
      range: '2',
      damage: '2/1',
      text: '设置  \n【常时】若你从盖牌区使用此牌，则这张《攻击》获得+1/+1。'
    },
    {
      id: '04-oboro-o-n-3',
      name: '斩击乱舞',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '2-4',
      damage: '3/2',
      text: '【常时】若本卡处在盖牌中，则将其视为名为“手里剑乱舞”“攻击距离4-7 3/1”的《攻击》《全力》卡，并可以从盖牌区发动本卡牌'
    },
    {
      id: '04-oboro-o-n-4',
      name: '忍步',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '设置 以任意顺序进行以下2个行动 \n气 (1)→ 距\n若你从盖牌区中使用此牌，则你可以从盖牌区中额外使用1张具设置关键字的牌。所选择的《攻击》获得不可被应对\n执行完毕后，将本卡牌设置为盖牌。'
    },
    {
      id: '04-oboro-o-n-5',
      name: '诱导',
      baseType: 'normal',
      types: ['action'],
      text: '设置 \n选择一项：\n1.距（1）→敌装\n2.敌装（1）→敌气'
    },
    {
      id: '04-oboro-o-n-6',
      name: '分身术',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '从盖牌区中选择1张《全力》或《付与》以外的卡牌，使用所选择的卡牌。随后，如果使用后的卡牌需要放入弃牌，则放入弃牌后从弃牌中再使用一次。'
    },
    {
      id: '04-oboro-o-n-7',
      name: '生物活性',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '破绽 设置 \n【破弃时】将你的1张处于使用后状态的王牌变为未使用状态。'
    }],
    special: [{
      id: '04-oboro-o-s-1',
      name: '熊介',
      baseType: 'special',
      types: ['attack', 'fullpower'],
      range: '3-4',
      damage: '2/1',
      cost: '3',
      text: '【攻击后】进行X次“攻击距离3-4 伤害2/1”的攻击，X等于你盖牌区中的牌张数。 '
    },
    {
      id: '04-oboro-o-s-2',
      name: '鸢影',
      baseType: 'special',
      types: ['action', 'reaction'],
      cost: '3',
      text: '从盖牌区中选择1张非《全力》的牌使用。'
    },
    {
      id: '04-oboro-o-s-3',
      name: '虚鱼',
      baseType: 'special',
      types: ['enhance'],
      capacity: '5',
      cost: '3',
      text: '【展开中】我方卡牌效果中描述的箭头标记→全部改为反向。'
    },
    {
      id: '04-oboro-o-s-4',
      name: '壬蔓',
      baseType: 'special',
      types: ['action'],
      cost: '0',
      text: '虚（1）→自气 \n----\n【再起】自气中的樱花结晶的数目等于0。'
    }]
  }]
},
{
  name: '伞/簪',
  list: [{
    name: '伞/簪',
    isSelect: false,
    pic: 'twiicon_sa_05.jpg',
    piclong: '05.png',
    picq: 'sd_yukihi_b.png',
    normal: [{
      id: '05-yukihi-o-n-1',
      name: '藏针/含针',
      baseType: 'normal',
      types: ['attack'],
      range: '4-5',
      rangeOpened: '0-1',
      damage: '3/1',
      damageOpened: '1/1',
      text: ''
    },
    {
      id: '05-yukihi-o-n-2',
      name: '拒/引',
      baseType: 'normal',
      types: ['attack'],
      range: '3-5',
      rangeOpened: '0-2',
      damage: '1/1',
      damageOpened: '1/1',
      text: '闭伞：【攻击后】虚（1）→距 \n开伞：【攻击后】距（1）→虚】'
    },
    {
      id: '05-yukihi-o-n-3',
      name: '挥舞/突刺',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '4-6',
      rangeOpened: '0',
      damage: '5/-',
      damageOpened: '-/2',
      text: ''
    },
    {
      id: '05-yukihi-o-n-4',
      name: '伞飞转',
      baseType: 'normal',
      types: ['action'],
      text: '（使用此牌没有任何效果）\n【常时】当你进行伞的开合操作时，你可以从手牌中展示此牌。若如此做，则虚（1）→自装'
    },
    {
      id: '05-yukihi-o-n-5',
      name: '闪回/潜进',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '闭伞：虚（1）→距 \n开伞：距（1）→虚'
    },
    {
      id: '05-yukihi-o-n-6',
      name: '相散/相逢',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '闭伞：虚（3）→距 \n开伞：距（3）→虚'
    },
    {
      id: '05-yukihi-o-n-7',
      name: '远望/细察',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '4',
      text: '闭伞：【展开中】我方《攻击》获得-1/+0，并且获得距离扩大（远1） \n开伞：【展开中】我方《攻击》获得+1/+0，并且获得距离缩小（近1） '
    }],
    special: [{
      id: '05-yukihi-o-s-1',
      name: '纷扬如雪',
      baseType: 'special',
      types: ['attack'],
      range: '4-5',
      rangeOpened: '0-1',
      damage: '3/1',
      damageOpened: '0/0',
      cost: '2',
      text: '闭伞：无\n开伞：无 \n【即再起】进行伞的开合操作'
    },
    {
      id: '05-yukihi-o-s-2',
      name: '明灭如灯',
      baseType: 'special',
      types: ['attack'],
      range: '4-6',
      rangeOpened: '0',
      damage: '0/0',
      damageOpened: '4/4',
      cost: '5',
      text: '闭伞：无\n开伞：无'
    },
    {
      id: '05-yukihi-o-s-3',
      name: '无常其心',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '选择场上任意一张《全力》以外的付与牌，将该牌上所有的樱花结晶移到虚中'
    },
    {
      id: '05-yukihi-o-s-4',
      name: '复返其身',
      baseType: 'special',
      types: ['action'],
      cost: '0',
      text: '进行一次伞的开合操作。'
    }]
  }]
},
{
  name: '书',
  list: [{
    name: '书',
    isSelect: false,
    pic: 'twiicon_sa_06.jpg',
    piclong: '06.png',
    picq: 'sd_shinra.png',
    normal: [{
      id: '06-shinra-o-n-1',
      name: '立论',
      baseType: 'normal',
      types: ['attack'],
      range: '2-7',
      damage: '-/0',
      text: '【常时】若对手牌库的牌张数大于等于2，则盖伏对手牌库顶的2张牌。反之，对方装受到2点伤害'
    },
    {
      id: '06-shinra-o-n-2',
      name: '反论',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '2-7',
      damage: '1/-',
      text: '【攻击后】若被对应的《攻击》非王牌且对装伤害大于等于3，则打消该《攻击》。\n【攻击后】对手抓1张牌。'
    },
    {
      id: '06-shinra-o-n-3',
      name: '诡辩',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '2-9',
      damage: '-/1',
      text: '【攻击后】我装（2）→敌装'
    },
    {
      id: '06-shinra-o-n-4',
      name: '引用',
      baseType: 'normal',
      types: ['action'],
      text: '讲坛~如果我方场上有展开中的付与牌，则执行以下效果\n 检视对手的手牌，你可以从中选择一张《全力》以外的卡牌，你可以使用所选择的卡牌或者将其设置为盖牌。'
    },
    {
      id: '06-shinra-o-n-5',
      name: '煽动',
      baseType: 'normal',
      types: ['action'],
      text: '敌装（1）→距'
    },
    {
      id: '06-shinra-o-n-6',
      name: '抗辩',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '5',
      text: '【展开中】每回合使用的第二张及之后的《攻击》获得-1/+0.（计算双方使用的《攻击》牌）'
    },
    {
      id: '06-shinra-o-n-7',
      name: '论破',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '4',
      text: '【展开时】选择对手弃牌区中的1张牌，封印于此牌下。 \n【破弃时】将被此牌封印的牌置入对手的弃牌区。',
      sealable: true
    }],
    special: [{
      id: '06-shinra-o-s-1',
      name: '完全论破',
      baseType: 'special',
      types: ['action'],
      cost: '4',
      text: '选择对手弃牌区中的1张牌，封印于此牌下（本局游戏不再归还）。',
      sealable: true
    },
    {
      id: '06-shinra-o-s-2',
      name: '诸式理解',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '选择场上任意一张付与牌，从虚中拿去最多X个樱花结晶放置在该付与牌上。X为所选付与牌的纳'
    },
    {
      id: '06-shinra-o-s-3',
      name: '天地反驳',
      baseType: 'special',
      types: ['enhance', 'fullpower'],
      capacity: '5',
      cost: '2',
      text: '【展开中】交换你的《攻击》牌对装和命的伤害（交换优先于修正结算）。'
    },
    {
      id: '06-shinra-o-s-4',
      name: '森罗判证',
      baseType: 'special',
      types: ['enhance'],
      capacity: '5',
      cost: '5',
      text: '【展开时】虚（2）→自命 \n【展开中】当你的其他《付与》牌破弃时，对敌命造成1点伤害。\n【破弃时】你输掉本局游戏。'
    }]
  }]
},
{
  name: '锤',
  list: [{
    name: '锤',
    isSelect: false,
    pic: 'twiicon_sa_08.jpg',
    piclong: '08.png',
    picq: 'sd_hagane.png',
    normal: [{
      id: '08-hagane-o-n-1',
      name: '远心击',
      baseType: 'normal',
      types: ['attack'],
      range: '2-5',
      damage: '5/2',
      text: '远心 \n【攻击后】盖伏你的所有手牌，结束当前阶段。'
    },
    {
      id: '08-hagane-o-n-2',
      name: '砂风尘',
      baseType: 'normal',
      types: ['attack'],
      range: '2-6',
      damage: '1/-',
      text: '【攻击后】若当前距离与本回合开始时距离之差的绝对值大于等于2，则对手随机弃1张牌。'
    },
    {
      id: '08-hagane-o-n-3',
      name: '大地碎击',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '0-2',
      damage: '2/-',
      text: '不可被对应 \n【攻击后】对手集中力变为0，对手下一个开始阶段不会获得集中力'
    },
    {
      id: '08-hagane-o-n-4',
      name: '超反冲',
      baseType: 'normal',
      types: ['action'],
      text: '若当前距离小于等于2，则敌气（1）→距'
    },
    {
      id: '08-hagane-o-n-5',
      name: '圆舞链',
      baseType: 'normal',
      types: ['action'],
      text: '远心 \n若敌气中的樱花结晶的数目大于等于3，则敌气（2）→自装'
    },
    {
      id: '08-hagane-o-n-6',
      name: '大鸣钟',
      baseType: 'normal',
      types: ['action'],
      text: '远心 \n选择一项：\n1.本回合内，你的下一次《攻击》获得不可被打消；\n2.本回合内，若你的下一次《攻击》对装伤害大于等于3，则该《攻击》获得+0/+1，否则获得+2/+0。'
    },
    {
      id: '08-hagane-o-n-7',
      name: '引力场',
      baseType: 'normal',
      types: ['enhance', 'fullpower'],
      capacity: '4',
      text: '【展开时】距（2）→自气\n【破弃时】自气（1）→距。'
    }],
    special: [{
      id: '08-hagane-o-s-1',
      name: '大天空·破限',
      baseType: 'special',
      types: ['attack'],
      range: '2-8',
      damage: 'X/Y',
      cost: '5',
      text: '【常时】X为当前距离与本回合开始时距离之差的绝对值，Y为X的一半（向上取整）。'
    },
    {
      id: '08-hagane-o-s-2',
      name: '大破钟·断限',
      baseType: 'special',
      types: ['action'],
      cost: '3',
      text: '若你的其他王牌均处于使用后状态，则虚（2）→自命'
    },
    {
      id: '08-hagane-o-s-3',
      name: '大重力·无限',
      baseType: 'special',
      types: ['action'],
      cost: '4',
      text: '距（3）→自气。'
    },
    {
      id: '08-hagane-o-s-4',
      name: '大山脉·转限',
      baseType: 'special',
      types: ['action', 'fullpower'],
      cost: '1',
      text: '选择一张手牌并将其盖放在本牌之下进行封印\n【使用后】在我方主要阶段开始时，可以选择吧封印的卡牌加入手牌。\n【再起】本牌之下没有封印任何卡牌'
    }]
  }]
},
{
  name: '毒',
  list: [{
    name: '毒',
    isSelect: false,
    pic: 'twiicon_sa_09.jpg',
    piclong: '09.png',
    picq: 'sd_chikage.png',
    normal: [{
      id: '09-chikage-o-n-1',
      name: '飞苦无',
      baseType: 'normal',
      types: ['attack'],
      range: '3-5',
      damage: '2/1',
      text: ''
    },
    {
      id: '09-chikage-o-n-2',
      name: '毒针',
      baseType: 'normal',
      types: ['attack'],
      range: '5',
      damage: '1/1',
      text: '【攻击后】从毒袋中选择『麻痹毒』『幻觉毒』『迟缓毒』中的1张，将其置于对手的牌库顶。'
    },
    {
      id: '09-chikage-o-n-3',
      name: '遁术',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '1-2',
      damage: '1/-',
      text: '【攻击后】自装（2）→距\n【攻击后】本回合内所有玩家都不能执行基本动作《前进》。'
    },
    {
      id: '09-chikage-o-n-4',
      name: '斩首',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '0-3',
      damage: '2/3',
      text: ''
    },
    {
      id: '09-chikage-o-n-5',
      name: '蹑足',
      baseType: 'normal',
      types: ['action'],
      text: '距（1）→自装'
    },
    {
      id: '09-chikage-o-n-6',
      name: '毒雾',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '从毒袋中选择『麻痹毒』『幻觉毒』『迟缓毒』中的1张，将其置于对手的牌库顶。'
    },
    {
      id: '09-chikage-o-n-7',
      name: '泥泞',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '【展开中】对手不能执行基本动作《后退》'
    }],
    special: [{
      id: '09-chikage-o-s-1',
      name: '魂毒渐灭灯',
      baseType: 'special',
      types: ['action'],
      cost: '5',
      text: '从毒袋中将1张『灭灯毒』置于对手的牌库顶。'
    },
    {
      id: '09-chikage-o-s-2',
      name: '缠毒揭叛旗',
      baseType: 'special',
      types: ['enhance'],
      capacity: '6',
      cost: '2',
      text: '【展开中】对手无法使用伤害中含有“-”的所有《攻击》。'
    },
    {
      id: '09-chikage-o-s-3',
      name: '霞毒空流转',
      baseType: 'special',
      types: ['attack'],
      range: '3-7',
      damage: '1/1',
      cost: '0',
      text: '【再起】对手的手牌不少于2张。'
    },
    {
      id: '09-chikage-o-s-4',
      name: '暗昏千影的信条',
      baseType: 'special',
      types: ['enhance', 'fullpower'],
      capacity: '4',
      cost: '5',
      text: '【展开中】若自命受到1点及以上的伤害，则将此牌上的所有樱花结晶置入虚，并将其变为未使用状态（不结算破弃时效果）。\n【破弃时】若你的其它王牌均处于使用后状态，则你赢得本局游戏。'
    }],
    poison: [{
      id: '09-chikage-o-p-1',
      name: '麻痹毒',
      baseType: 'normal',
      extra: true,
      types: ['action'],
      text: '【常时】若本回合内你执行过基本动作，则你不能使用此牌。\n将此牌移回对手的毒袋。结束当前阶段。'
    },
    {
      id: '09-chikage-o-p-2',
      name: '幻觉毒',
      baseType: 'normal',
      extra: true,
      types: ['action'],
      text: '将此牌移回对手的毒袋。 自气（2）→虚'
    },
    {
      id: '09-chikage-o-p-3',
      name: '迟缓毒',
      baseType: 'normal',
      extra: true,
      types: ['enhance'],
      capacity: '3',
      text: '【展开中】你不能使用《攻击》牌。 \n【破弃时】将此牌移回对手的毒袋。'
    },
    {
      id: '09-chikage-o-p-4',
      name: '灭灯毒',
      baseType: 'normal',
      extra: true,
      types: ['action', 'fullpower'],
      text: '自装（1）→虚'
    },
    {
      id: '09-chikage-o-p-4',
      name: '灭灯毒',
      baseType: 'normal',
      extra: true,
      types: ['action', 'fullpower'],
      text: '自装（1）→虚'
    }]
  }]
},
{
  name: '络缲',
  list: [{
    name: '络缲',
    isSelect: false,
    pic: 'twiicon_sa_10.jpg',
    piclong: '10.png',
    picq: 'sd_kururu.png',
    normal: [{
      id: '10-kururu-o-n-1',
      name: '电气疗法',
      baseType: 'normal',
      types: ['action'],
      text: '机巧：蓝蓝蓝紫紫～\n对敌命造成1点伤害。'
    },
    {
      id: '10-kururu-o-n-2',
      name: '加束效应',
      baseType: 'normal',
      types: ['action'],
      text: '机巧：蓝蓝绿～\n选择你手牌里的1张《全力》牌并使用。\n（当前阶段不会因此而结束）'
    },
    {
      id: '10-kururu-o-n-3',
      name: '枢噜噜～',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '【常时】此牌只能作为对应使用。\n执行最多2次行动，每次从以下3选1：\n1.抓1张牌；\n2.从盖牌区选择1张牌置于你的牌库底；\n3.对手失去1点集中力'
    },
    {
      id: '10-kururu-o-n-4',
      name: '大龙卷轰',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '机巧：红红～\n对敌装造成5点伤害。\n机巧：绿绿～对敌命造成1点伤害。'
    },
    {
      id: '10-kururu-o-n-5',
      name: '回嗖利用',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '机巧：红紫～\n你可以使用你的1张使用后的王牌，而不需支付其费用（可以选择《全力》牌）。\n你的集中力变为0，且下回合开始阶段我方无法获得集中力。'
    },
    {
      id: '10-kururu-o-n-6',
      name: '模块化',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '【展开中】每当你使用的《行动》牌结算完毕时，你可以执行一次基本动作。'
    },
    {
      id: '10-kururu-o-n-7',
      name: '悖论',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '0',
      text: '机巧：红黄～\n【展开时】将虚中的4个樱花结晶移至此牌上。\n【展开中】当距中的樱花结晶少于等于6个时，将6减去现在距中的樱花结晶数目，其结果视为当前实际距离'
    }],
    special: [{
      id: '10-kururu-o-s-1',
      name: '魔能吸收',
      baseType: 'special',
      types: ['action', 'reaction'],
      cost: '3',
      text: '敌装（1）→自装 \n【使用后】每当你的处于使用后状态的王牌变为未使用状态时，你可以使用此牌，而不需支付其费用。'
    },
    {
      id: '10-kururu-o-s-2',
      name: '大魔像',
      baseType: 'special',
      types: ['action'],
      cost: '4',
      text: '【使用后】机巧：黄黄～\n每当你的结束阶段开始时，你可以对敌命造成1点伤害。若如此做，则对自命造成1点伤害并重铸你的牌库。\n【使用后】每当你使用具《全力》副类别的牌时，结算完毕后你可以执行一次基本动作。'
    },
    {
      id: '10-kururu-o-s-3',
      name: '复自黏贴',
      baseType: 'special',
      types: ['action'],
      cost: '1',
      text: '若此牌没有封印牌，则你可以从你的手牌中选择1张非《付与》的牌，封印在此牌下。\n从追加牌区域中将1张追加牌『复制品齿轮』置于你的牌库底。\n【即再起】你重铸牌库后。',
      sealable: true
    },
    {
      id: '10-kururu-o-s-4',
      name: '神涉装置：枢式',
      baseType: 'special',
      types: ['action'],
      cost: '4',
      text: '机巧：红红蓝蓝蓝绿绿～\n查看对方的王牌，并可以选择1张将其设为使用完毕状态。\n选择1张对方已经使用完毕的王牌，并可以不支付其费用使用该王牌。（可以选择《全力》王牌）',
      removable: true
    }],
    extra: [{
      id: '10-kururu-o-s-3-ex1',
      name: '复制品齿轮',
      baseType: 'normal',
      extra: true,
      extraFrom: '10-kururu-o-s-4',
      types: ['variable'],
      text: '【常时】此牌为被『复自黏贴』封印的牌之复制，但名称仍为『复制品齿轮』（『复自黏贴』没有封印牌时不能使用此牌）。'
    }, {
      id: '10-kururu-o-s-3-ex1',
      name: '复制品齿轮',
      baseType: 'normal',
      extra: true,
      extraFrom: '10-kururu-o-s-4',
      types: ['variable'],
      text: '【常时】此牌为被『复自黏贴』封印的牌之复制，但名称仍为『复制品齿轮』（『复自黏贴』没有封印牌时不能使用此牌）。'
    }, {
      id: '10-kururu-o-s-3-ex1',
      name: '复制品齿轮',
      baseType: 'normal',
      extra: true,
      extraFrom: '10-kururu-o-s-4',
      types: ['variable'],
      text: '【常时】此牌为被『复自黏贴』封印的牌之复制，但名称仍为『复制品齿轮』（『复自黏贴』没有封印牌时不能使用此牌）。'
    }]
  }]
},
{
  name: '骑',
  list: [{
    name: '骑',
    isSelect: false,
    pic: 'twiicon_sa_11.jpg',
    piclong: '11.png',
    picq: 'sd_thallya.png',
    normal: [{
      id: '11-thallya-o-n-1',
      name: 'Burning Steam',
      baseType: 'normal',
      types: ['attack'],
      range: '4-5',
      damage: '2/1',
      text: '【攻击后】骑动 '
    },
    {
      id: '11-thallya-o-n-2',
      name: 'Waving Edge',
      baseType: 'normal',
      types: ['attack'],
      range: '2-3',
      damage: '2/1',
      text: '燃烧\n【攻击后】骑动'
    },
    {
      id: '11-thallya-o-n-3',
      name: 'Shield Charge',
      baseType: 'normal',
      types: ['attack'],
      range: '1',
      damage: '3/1',
      text: '燃烧\n【常时】若此《攻击》对对手造成了伤害，则将因结算伤害移动的樱花结晶改为移动至距。'
    },
    {
      id: '11-thallya-o-n-4',
      name: 'Steam Cannon',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '2-8',
      damage: '3/2',
      text: '燃烧'
    },
    {
      id: '11-thallya-o-n-5',
      name: 'Stunt',
      baseType: 'normal',
      types: ['action'],
      text: '自装（2）→自气'
    },
    {
      id: '11-thallya-o-n-6',
      name: 'Roaring',
      baseType: 'normal',
      types: ['action'],
      text: '你可以燃烧2个造花结晶。若如此做，则你获得1点集中力，对手失去1点集中力。\n你可以支付2点集中力。若如此做，则回复3个造花结晶。'
    },
    {
      id: '11-thallya-o-n-7',
      name: 'Turbo Switch',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '燃烧\n骑动'
    }],
    special: [{
      id: '11-thallya-o-s-1',
      name: 'Alpha-Edge',
      baseType: 'special',
      types: ['attack'],
      range: '1,3,5,7',
      damage: '1/1',
      cost: '1',
      text: '【即再起】骑动造成距离变化'
    },
    {
      id: '11-thallya-o-s-2',
      name: 'Omega-Burst',
      baseType: 'special',
      types: ['action', 'reaction'],
      cost: '4',
      text: '回复你的所有造花结晶。打消被对应的对装伤害为“-”或小于X的《攻击》，X等于因此牌效果回复的造花结晶的个数。'
    },
    {
      id: '11-thallya-o-s-3',
      name: 'Thallya\'s Masterpiece',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '回复2个造花结晶 \n【使用后】你其他女神的《攻击》牌获得“【攻击后】可以进行一次骑动”'
    },
    {
      id: '11-thallya-o-s-4',
      name: 'Julia\'s BlackBox',
      baseType: 'special',
      types: ['action', 'fullpower'],
      cost: '0',
      text: '若你的造花结晶的数目等于0，则TRANSFORM'
    }],
    transform: [{
      id: 'transform-01',
      name: '亚克夏形态',
      baseType: 'transform',
      types: ['transform'],
      text: '【常时】若你没有造花结晶，则你不能进行基本动作。\n【追加基本动作】Beta-Edge：进行一次“攻击距离2,4,6,8 伤害2/1 【攻击后】进行一次骑动。”的攻击。'
    },
    {
      id: 'transform-02',
      name: '娜迦形态',
      baseType: 'transform',
      types: ['transform'],
      text: '【常时】若对方移动樱结晶后敌气中的樱花结晶的数目大于等于6，则将该樱花结晶移到虚而非气。\n【追加基本动作】Gamma-Ray：弃置对手的牌库顶牌。'
    },
    {
      id: 'transform-03',
      name: '迦楼达形态',
      baseType: 'transform',
      types: ['transform'],
      text: '【常时】我方手牌上限增加1 \n【追加基本动作】Delta-Wing：虚（1）→距'
    }]
  }]
},
{
  name: '镰',
  list: [{
    name: '镰',
    isSelect: false,
    pic: 'twiicon_sa_12.jpg',
    piclong: '12.png',
    picq: 'sd_utsuro.png',
    normal: [{
      id: '12-utsuro-o-n-1',
      name: '圆月',
      baseType: 'normal',
      types: ['attack'],
      range: '6-9',
      damage: '2/1',
      text: '【常时】灰尘～若虚中的樱花结晶的数目大于等于8，则此《攻击》对装伤害改为“-”。'
    },
    {
      id: '12-utsuro-o-n-2',
      name: '灰之右手',
      baseType: 'normal',
      types: ['attack'],
      range: '4-7',
      damage: '1/1',
      text: '【攻击后】若对手选择由装承受此次伤害，则检视对手的手牌，弃置其中1张。'
    },
    {
      id: '12-utsuro-o-n-3',
      name: '尘之左手',
      baseType: 'normal',
      types: ['attack'],
      range: '4-7',
      damage: '1/1',
      text: '【攻击后】若对手选择由装承受此次伤害，则敌气（2）→虚'
    },
    {
      id: '12-utsuro-o-n-4',
      name: '影之翅',
      baseType: 'normal',
      types: ['action'],
      text: '灰尘~若虚中的樱花结晶的数目大于等于8，则虚（2）→距'
    },
    {
      id: '12-utsuro-o-n-5',
      name: '影屏障',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '若被应对的《攻击》对装伤害大于等于3，则被应对的《攻击》获得-1/+0，否则被对应的《攻击》获得+0/-1。'
    },
    {
      id: '12-utsuro-o-n-6',
      name: '契约之楔',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '4',
      text: '【展开中】所有的《攻击》获得距离缩小（远1）\n【常时】在本卡上放置樱花结晶时，可以把对方的非《全力》或非《王牌》的付与牌上的樱花结晶视同在虚中获取'
    },
    {
      id: '12-utsuro-o-n-7',
      name: '遗灰咒',
      baseType: 'normal',
      types: ['enhance', 'fullpower'],
      capacity: '2',
      text: '【展开时】敌装（3）→虚 \n【破弃时】灰尘～若虚中的樱花结晶的数目大于等于8，则虚（3）→敌装，敌命（1）→虚'
    }],
    special: [{
      id: '12-utsuro-o-s-1',
      name: '灰灭',
      baseType: 'special',
      types: ['action'],
      cost: '20',
      text: '【常时】此牌的费用减小X，X等于虚中的樱花结晶的数目。\n敌命（2）→虚',
      removable: true
    },
    {
      id: '12-utsuro-o-s-2',
      name: '虚伪',
      baseType: 'special',
      types: ['enhance', 'reaction'],
      capacity: '6',
      cost: '2',
      text: '【展开中】对手不结算其【攻击后】效果和【破弃时】效果。'
    },
    {
      id: '12-utsuro-o-s-3',
      name: '终末',
      baseType: 'special',
      types: ['enhance'],
      capacity: '3',
      cost: '2',
      text: '【展开中】若你因被攻击受到了1点及以上的伤害，则当其效果结算完毕时将此牌上所有樱花结晶移入虚。\n【破弃时】结束当前阶段。\n----\n【再起】灰尘～虚中的樱花结晶的数目大于等于8。'
    },
    {
      id: '12-utsuro-o-s-4',
      name: '阴阳事变：阴',
      baseType: 'special',
      types: ['action'],
      cost: '5',
      text: '【使用后】每当你的准备阶段开始时，对手选择一项：\n1.敌装（1）→虚\n2.敌气（2）→虚'
    }]
  }]
},
{
  name: '旗',
  list: [{
    name: '旗',
    isSelect: false,
    pic: 'twiicon_sa_13.jpg',
    piclong: '13.png',
    picq: 'sd_honoka.png',
    normal: [{
      id: '13-honoka-o-n-1',
      name: '精灵式',
      baseType: 'normal',
      exchangabaleTo: '13-honoka-o-n-1-ex1',
      types: ['attack'],
      range: '2',
      damage: '1/1',
      text: '不可被对应\n【攻击后】开花～你可以将这张『精灵式』与追加牌中的『守护灵式』交换。若如此做，则你可以将『守护灵式』置于你的牌库底。'
    },
    {
      id: '13-honoka-o-n-2',
      name: '樱吹雪',
      baseType: 'normal',
      types: ['attack'],
      range: '1-5',
      damage: '2/1',
      text: '【攻击后】对手选择一项：\n1.距（1）→虚；\n2.虚（1）→距。'
    },
    {
      id: '13-honoka-o-n-3',
      name: '义旗共振',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '3-9',
      damage: '2/2',
      text: '【攻击后】可以从我方弃牌区选择另一名女神《全力》之外的一张卡牌，并且使用之'
    },
    {
      id: '13-honoka-o-n-4',
      name: '缓步',
      baseType: 'normal',
      exchangabaleTo: '13-honoka-o-n-4-ex1',
      types: ['action'],
      text: '距（2）→虚\n【常时】当本卡放入弃牌区时，将这张『缓步』与我方追加牌中的『週回』进行交换。随后结束当前阶段'
    },
    {
      id: '13-honoka-o-n-5',
      name: '原初的护符',
      baseType: 'normal',
      exchangabaleTo: '14-honoka-o-n-5-ex1',
      types: ['action', 'reaction'],
      text: '打消被对应的非王牌的《攻击》。如果这么做，将这张『原初的护符』与追加牌中的『褪色的护符』进行交换。'
    },
    {
      id: '13-honoka-o-n-6',
      name: '樱之翅',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '5',
      text: '破绽 \n【展开中】我方无法进行基本动作《前进》。\n【展开中】当前距离增加3'
    },
    {
      id: '13-honoka-o-n-7',
      name: '花初妍',
      baseType: 'normal',
      exchangabaleTo: '13-honoka-o-n-7-ex1',
      types: ['enhance'],
      capacity: '3',
      text: '【展开中】你的《攻击》获得距离扩大（远1）。\n【破弃时】开花~可以将张『花初妍』与追加牌中的『花争妍』进行交换。并且交换后可以选择将其放在牌库底。'
    }
    ],
    special: [{
      id: '13-honoka-o-s-1',
      name: '心胸所念',
      baseType: 'special',
      exchangabaleTo: '13-honoka-o-s-1-ex1',
      types: ['action', 'fullpower'],
      cost: '5',
      text: '虚（5）→自装 \n开花～将这张『心胸所念』与追加牌中的『双拳生花』进行交换，并将其设置为未使用状态。'
    },
    {
      id: '13-honoka-o-s-2',
      name: '以旗之名',
      baseType: 'special',
      types: ['attack'],
      range: '3-7',
      damage: '4/2',
      cost: '5',
      text: '【常时】当你使用此牌时，你可以选择你的1张展开中的付与牌。若此《攻击》将造成伤害，则将因结算伤害移动的樱花结晶改为移至所选择的付与牌上。'
    },
    {
      id: '13-honoka-o-s-3',
      name: '四季轮舞',
      baseType: 'special',
      types: ['action'],
      cost: '3',
      text: '将我方所有手牌设置为盖牌 \n进行牌库重构（不造成伤害） \n抽2张牌 \n结束当前阶段 '
    },
    {
      id: '13-honoka-o-s-4',
      name: '阴阳事变：阳',
      baseType: 'special',
      types: ['action'],
      cost: '5',
      text: '【使用后】每当我方回合结束阶段时，选择以下一项：虚（1）→自装  \n虚（2）→自气'
    }
    ],
    extra: [{
      id: '13-honoka-o-n-1-ex1',
      name: '守护灵式',
      baseType: 'normal',
      extra: true,
      extraFrom: '13-honoka-o-n-1',
      exchangabaleTo: '13-honoka-o-n-1-ex2',
      types: ['attack', 'reaction'],
      range: '2-3',
      damage: '2/1',
      text: '【攻击后】虚（1）→自装\n【攻击后】开花～你可以将这张『守护灵式』与追加牌中的『突击灵式』交换。若如此做，则你可以将『突击灵式』置于你的牌库底。'
    },
    {
      id: '13-honoka-o-n-1-ex2',
      name: '突击灵式',
      baseType: 'normal',
      extra: true,
      extraFrom: '14-honoka-o-n-1-ex1',
      exchangabaleTo: '14-honoka-o-n-1-ex3',
      types: ['attack'],
      range: '4-5',
      damage: '3/2',
      text: '【攻击后】开花～你可以将这张『突击灵式』与追加牌中的『神灵式』交换。若如此做，则你可以将『神灵式』置于你的牌库底。'
    },
    {
      id: '13-honoka-o-n-1-ex3',
      name: '神灵式',
      baseType: 'normal',
      extra: true,
      extraFrom: '13-honoka-o-n-1-ex2',
      types: ['attack', 'fullpower'],
      range: '2-4',
      damage: '4/3',
      text: '不可被对应'
    },
    {
      id: '13-honoka-o-n-4-ex1',
      name: '週回',
      baseType: 'normal',
      extra: true,
      extraFrom: '13-honoka-o-n-4',
      exchangabaleTo: '13-honoka-o-n-4',
      types: ['action'],
      text: '虚（2）→距 \n将这张『週回』与追加牌中的『缓步』进行交换。'
    },
    {
      id: '13-honoka-o-n-5-ex1',
      name: '褪色的护符',
      baseType: 'normal',
      extra: true,
      extraFrom: '13-honoka-o-n-5',
      types: ['action'],
      text: '将这张『褪色的护符』与追加牌中的『原初的护符』进行交换。'
    },
    {
      id: '13-honoka-o-n-7-ex1',
      name: '花争妍',
      baseType: 'normal',
      extra: true,
      extraFrom: '13-honoka-o-n-7',
      exchangabaleTo: '13-honoka-o-n-7-ex2',
      types: ['enhance', 'fullpower'],
      capacity: '5',
      text: '【展开中】我方的《攻击》获得距离扩大（近1）\n【破弃时】开花~可以将这张『花争妍』与追加牌中的『尽极妍』进行交换。并且交换后可以将其放置在牌库底'
    },
    {
      id: '13-honoka-o-n-7-ex1',
      name: '尽极妍',
      baseType: 'normal',
      extra: true,
      extraFrom: '13-honoka-o-n-7-ex1',
      types: ['enhance'],
      capacity: '10',
      text: '【展开中】我方的《攻击》的攻击距离变为0-10'
    },
    {
      id: '13-honoka-o-s-1-ex1',
      name: '双拳生花',
      baseType: 'special',
      extra: true,
      extraFrom: '13-honoka-o-s-1',
      exchangabaleTo: '13-honoka-o-s-1-ex2',
      types: ['action'],
      cost: '0',
      text: '【使用后】开花～每当你的结束阶段开始时，你可以将至多2个樱花结晶从自装移至此牌上。然后若此牌上恰有5个樱花结晶，则将它们移入自气，将这张『双拳生花』与追加牌中的『散樱乱武』交换，将『散樱乱武』变为未使用状态。'
    },
    {
      id: '13-honoka-o-s-1-ex2',
      name: '散樱乱武',
      baseType: 'special',
      extra: true,
      extraFrom: '13-honoka-o-s-1-ex1',
      types: ['action'],
      cost: '0',
      text: '当距、虚、自装、自气、自命这五个区域中，有三个或以上的区域中的樱花结晶数目正好为5，则你立即获胜'
    }]
  }]
}]
export default sakuraDataOldVer