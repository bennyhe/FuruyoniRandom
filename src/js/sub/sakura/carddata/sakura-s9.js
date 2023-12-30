//头像 https://main-bakafire.ssl-lolipop.jp//furuyoni\na/rule.html
// cardDemo Json
/*
  {
    id: [String],
    
    name: [String],
    namejp: [String],
    nameen: [String],

    text: [String],
    textjp: [String],
    texten: [String],

    baseType: [String],     //normal, special

    types: [Array],         //attack, fullpower, action, enhance, reaction

    range: [String],        //format: x-x
    rangeOpened: [String],  //format: x-x

    damage: [String],       //format: x/x
    damageOpened: [String], //format: x/x

    changeIndex: [Number],
    
    capacity: [Number],
    capacityGrowup: [Number],

    cost: [String],
  }
*/
const Sakura = [{
  name: 'YURINA 摇波',
  namejp: 'ユリナ',
  nameen: 'YURINA',
  desc: '决死～若自命中的樱花结晶的数目小于等于3，则你的一部分牌会获得强化。',
  descjp: '決死～あなたのライフが3以下ならば、いくつかのカードが強化される。',
  // girlInfo: '身高：158cm\n喜欢的东西：打赢别人，睡觉和团子。\n<b>--物語--</b>\n「わたしと一緒に勝利を目指しましょう！」\nユリナはもとは人間、天音揺波でした。２０年前の一大事にて誕生したメガミの１柱で、中でも立役者と呼ぶべき英雄です。\n現在の彼女は今代における武神であり、戦いと勝利を象徴しています。桜花決闘という文化を深く愛し、それを広げ、盛り立てることに何よりも情熱を注いでいます。無論、決闘の実力は最高峰であり、衰える気配を見せません。\nその一方で、決闘以外では不器用さが目立ちます。色々とすっぽ抜けており、周囲の嘆息もやむを得ないといったところです。',
  // girlInfojp: '身長：158cm\n好きなもの：勝つこと、寝ること、お団子\n<b>--物語--</b>\n「わたしと一緒に勝利を目指しましょう！」\nユリナはもとは人間、天音揺波でした。２０年前の一大事にて誕生したメガミの１柱で、中でも立役者と呼ぶべき英雄です。\n現在の彼女は今代における武神であり、戦いと勝利を象徴しています。桜花決闘という文化を深く愛し、それを広げ、盛り立てることに何よりも情熱を注いでいます。無論、決闘の実力は最高峰であり、衰える気配を見せません。\nその一方で、決闘以外では不器用さが目立ちます。色々とすっぽ抜けており、周囲の嘆息もやむを得ないといったところです。',
  list: [{
    name: '刀',
    namejp: '刀',
    nameen: 'KATANA',
    isSelect: false,
    pic: 'twiicon_sa_01.jpg',
    picq: 'sd_yurina.png',
    normal: [{
      id: '01-yurina-o-n-1',
      name: '斩',
      namejp: '斬',
      baseType: 'normal',
      types: ['attack'],
      range: '3-4',
      damage: '3/1',
      text: '',
      textjp: ''
    },
    {
      id: '01-yurina-o-n-2',
      name: '一闪',
      namejp: '一閃',
      baseType: 'normal',
      types: ['attack'],
      range: '3',
      damage: '2/2',
      text: '【常时】决死～若自命中的樱花结晶的数目小于等于3，则此《攻击》获得+1/+0。',
      textjp: '【常時】決死-あなたのライフが3以下ならば、この《攻撃》は+1/+0となる。'
    },
    {
      id: '01-yurina-o-n-3',
      name: '柄击',
      namejp: '柄打ち',
      baseType: 'normal',
      types: ['attack'],
      range: '1-2',
      damage: '2/1',
      text: '【攻击后】决死～若自命中的樱花结晶的数目小于等于3，则本回合内你的下一次《攻击》获得+1/+0。',
      textjp: '【攻撃後】決死-あなたのライフが3以下ならば、このターンにあなたが次に行う《攻撃》は+1/+0となる。'
    },
    {
      id: '01-yurina-o-n-4',
      name: '居合斩',
      namejp: '居合',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '2-4',
      damage: '4/3',
      text: '【常时】若当前距离小于等于2，则此《攻击》获得-1/-1。',
      textjp: '【常時】現在の間合が2以下ならば、この《攻撃》は-1/-1となる。'
    },
    {
      id: '01-yurina-o-n-5',
      name: '气魄',
      namejp: '気迫',
      baseType: 'normal',
      types: ['action'],
      text: '你获得1点集中力。\n本回合内你的其他女神的下一次非王牌的《攻击》获得不可被对应（通常牌）和距离扩大（近1）。',
      textjp: 'あなたは集中力を1得る。\nこのターンにあなたが次に行う他のメガミによる切札でない《攻撃》は対応不可（通常札）と距離拡大（近1）を得る。'
    },
    {
      id: '01-yurina-o-n-6',
      name: '气合斩',
      namejp: '圧気',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '破绽\n【破弃时】进行一次“攻击距离1-4 伤害3/-”的攻击。',
      textjp: '隙\n【破棄時】攻撃『適正距離1-4、3/-』を行う。'
    },
    {
      id: '01-yurina-o-n-7',
      name: '气焰万丈',
      namejp: '気炎万丈',
      baseType: 'normal',
      types: ['enhance', 'fullpower'],
      capacity: '4',
      text: '【展开中】决死～若自命中的樱花结晶的数目小于等于3，则你的其他女神的《攻击》获得+1/+1和超克。',
      textjp: '【展開中】決死-あなたのライフが3以下ならば、あなたの他のメガミによる《攻撃》は+1/+1となるとともに超克を得る。'
    }],
    special: [{
      id: '01-yurina-o-s-1',
      name: '月影落',
      namejp: '月影落',
      baseType: 'special',
      types: ['attack'],
      range: '3-4',
      damage: '4/4',
      cost: '7',
      text: '',
      textjp: ''
    },
    {
      id: '01-yurina-o-s-2',
      name: '浦波岚',
      namejp: '浦波嵐',
      baseType: 'special',
      types: ['attack', 'reaction'],
      range: '0-10',
      damage: '2/-',
      cost: '3',
      text: '终端\n【攻击后】被对应的《攻击》获得-2/+0。',
      textjp: '終端\n【攻撃後】対応した《攻撃》は-2/+0となる。'
    },
    {
      id: '01-yurina-o-s-3',
      name: '浮舟宿',
      namejp: '浮舟宿',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '虚（5）→自装 \n----\n【即再起】决死～自命中的樱花结晶的数目降至3及以下。',
      textjp: 'ダスト→自オーラ：5 \n----\n【即再起】決死-あなたのライフが3以下になる。'
    },
    {
      id: '01-yurina-o-s-4',
      name: '天音摇波的底力',
      namejp: '天音揺波の底力',
      baseType: 'special',
      types: ['attack', 'fullpower'],
      range: '1-4',
      damage: '5/5',
      cost: '5',
      text: '【常时】决死～仅当自命中的樱花结晶的数目小于等于3时可以使用此牌。',
      textjp: '【常時】決死-あなたのライフが3以下でないと、このカードは使用できない。'
    }]
  },
  {
    name: '古刀',
    namejp: '古刀',
    nameen: 'KOTŌ',
    isSelect: false,
    pic: 'twiicon_sa_15.jpg',
    picq: 'sd_yurina_a1.png',
    changenormal: [{
      changeIndex: '1',
      id: '01-yurina-a1-n-1',
      name: '乱打',
      namejp: '乱打',
      baseType: 'normal',
      types: ['attack'],
      range: '2',
      damage: '2/1',
      text: '【常时】决死～若自命中的樱花结晶的数目小于等于3，则此《攻击》获得+0/+2和不可被对应。',
      textjp: '【常時】決死-あなたのライフが3以下ならば、この《攻撃》は+0/+2となり、対応不可を得る。'
    },
    {
      changeIndex: '6',
      id: '01-yurina-a1-n-6',
      name: '暴砂雷',
      namejp: '癇癪玉',
      baseType: 'normal',
      types: ['enhance', 'reaction'],
      capacity: '1',
      text: '【破弃时】进行一次“攻击距离0-4 伤害1/- 不可被对应 【攻击后】对手畏缩”的攻击。',
      textjp: '【破棄時】攻撃『適正距離0-4、1/-、対応不可、【攻撃後】相手を畏縮させる』を行う。'
    }],
    changespecial: [{
      changeIndex: '2',
      id: '01-yurina-a1-s-2',
      name: '不完全浦波岚',
      namejp: '不完全浦波嵐',
      baseType: 'special',
      types: ['attack', 'reaction'],
      range: '0-10',
      damage: '3/-',
      cost: '5',
      text: '终端\n【攻击后】被对应的《攻击》获得-3/+0。',
      textjp: '終端\n【攻撃後】対応した《攻撃》は-3/+0となる。'
    }]
  },
  {
    name: '心',
    namejp: '心',
    isSelect: false,
    pic: 'twiicon_sa_44.jpg',
    picq: 'sd_yurina_a2.png',
    changenormal: [
      {
        changeIndex: '3',
        id: '01-yurina-a2-n-3',
        baseType: 'normal',
        types: ['attack'],
        range: '2-5',
        damage: '3/0',
        namejp: '問答',
        name: '问与答',
        textjp: '【攻撃後】相手がライフへのダメージを選んだらば、相手の山札の上から3枚を伏せ札にして、あなたは基本動作を1回行い、相手は同じ基本動作を可能ならば行う。',
        text: '【攻击后】若对手选择由命承受此次伤害，则盖伏对手牌库顶的3张牌，执行1次基本动作，然后若对手能够执行该基本动作，则对手也如此做。'
      },
      {
        changeIndex: '7',
        id: '01-yurina-a2-n-7',
        baseType: 'normal',
        types: ['enhance'],
        capacity: '3',
        namejp: '阿吽',
        name: '始与终',
        textjp: '【展開中】各ターンで《攻撃》のダメージまたは基本動作で初めて相手のオーラが変化した時、その《攻撃》や基本動作の解決後にあなたは以下のいずれかを行ってもよい。\n・基本動作《纏い》を行う。その後、基本動作《宿し》を行ってもよい。\n・攻撃『適正距離3-5、2/1』を行う。',
        text: '【展开中】每回合内，每当敌装中的樱花结晶数目首次因《攻击》伤害或基本动作的效果而变化时，该《攻击》或基本动作结算完毕后，你可以选择一项。\n1.执行一次基本动作《装附》。你可以执行一次基本动作《聚气》。\n2.进行一次“攻击距离3-5 伤害2/1”的攻击。'
      }
    ],
    changespecial: [
      {
        changeIndex: '1',
        id: '01-yurina-a2-s-1',
        baseType: 'special',
        namejp: '神座渡',
        name: '神座渡',
        cost: 'X',
        types: ['attack', 'fullpower'],
        range: '0-5',
        damage: 'X/2',
        textjp: '対応不可\n【常時】Xはこのカードのコストを支払う際のあなたのフレアに等しい。\n【攻撃後】基本動作《纏い》か《宿し》を合計Ｘ回まで行う。あなたの使用済の切り札をX枚まで選び、それらを未使用に戻す。このターンの間、手札の上限がX増加する。',
        text: '不可被对应\n【常时】X等于支付此牌费用时自气中的樱花结晶的数目。（修正王牌费用的效果于此效果之后结算）\n【攻击后】以任意顺序执行至多X次基本动作《装附》或基本动作《聚气》。选择至多X张你的使用后状态的王牌，将其变为未使用状态。本回合内，你的手牌上限增大X。'
      }
    ]
  }
  ]
},
{
  name: 'SAINE 细音',
  namejp: 'サイネ',
  nameen: 'SAINE',
  desc: '八相～若自装中的樱花结晶的数目小于等于1，则你的一部分牌会获得强化。',
  descjp: '八相～あなたのオーラが1以下ならば、いくつかのカードが強化される。',
  // girlInfo: '身高：163cm\n喜欢的东西：修行、音楽、かき氷\n<b>--物語--</b>\n「武の道を歩むというならば、共に参りましょう」\nサイネはもとは人間、氷雨細音であり、天音揺波の好敵手にして盲目の達人でした。彼女もまた２０年前の一大事で誕生したメガミの１柱で、英雄の一人です。\n今の彼女はユリナと並ぶ武神であり、武道と技を象徴しています。あらゆる雑音を取り払い、ただ技を極めることこそが彼女の生き様です。決闘も彼女にとっては技を高めるための手段でしかありません。\n神経質で自分の拘りを曲げられない不器用な気質です。その一方で流されやすく、他のメガミたちの奔放さに振り回されがちです。',
  // girlInfojp: '身長：163cm\n好きなもの：修行、音楽、かき氷\n<b>--物語--</b>\n「武の道を歩むというならば、共に参りましょう」\nサイネはもとは人間、氷雨細音であり、天音揺波の好敵手にして盲目の達人でした。彼女もまた２０年前の一大事で誕生したメガミの１柱で、英雄の一人です。\n今の彼女はユリナと並ぶ武神であり、武道と技を象徴しています。あらゆる雑音を取り払い、ただ技を極めることこそが彼女の生き様です。決闘も彼女にとっては技を高めるための手段でしかありません。\n神経質で自分の拘りを曲げられない不器用な気質です。その一方で流されやすく、他のメガミたちの奔放さに振り回されがちです。',
  list: [{
    name: '薙刀',
    namejp: '薙刀',
    nameen: 'NAGINATA',
    isSelect: false,
    pic: 'twiicon_sa_07.jpg',
    picq: 'sd_saine.png',
    normal: [{
      id: '02-saine-o-n-1',
      name: '八面斩',
      namejp: '八方振り',
      baseType: 'normal',
      types: ['attack'],
      range: '4-5',
      damage: '2/1',
      text: '【攻击后】八相～若自装中的樱花结晶的数目小于等于1，则进行一次“攻击距离4-5 伤害2/1”的攻击。',
      textjp: '【攻撃後】八相-あなたのオーラが1以下ならば、攻撃『適正距離4-5、2/1』を行う。'
    },
    {
      id: '02-saine-o-n-2',
      name: '薙刀斩',
      namejp: '薙斬り',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '4-5',
      damage: '3/1',
      text: '',
      textjp: ''
    },
    {
      id: '02-saine-o-n-3',
      name: '石突',
      namejp: '石突き',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '2-3',
      damage: '2/1',
      text: '【攻击后】八相～若自装中的樱花结晶的数目小于等于1，则虚（1）→距',
      textjp: '【攻撃後】八相-あなたのオーラが1以下ならば、ダスト→間合：1'
    },
    {
      id: '02-saine-o-n-4',
      name: '识破',
      namejp: '見切り',
      baseType: 'normal',
      types: ['action'],
      text: '【常时】八相～若自装中的樱花结晶的数目小于等于1，则此牌可以如《对应》牌一样对应《攻击》使用。\n距（1） ⇔ 虚',
      textjp: '【常時】八相-あなたのオーラが1以下ならば、このカードを《対応》を持つかのように相手の《攻撃》に割り込んで使用できる。\n間合⇔ダスト：1'
    },
    {
      id: '02-saine-o-n-5',
      name: '圈域',
      namejp: '圏域',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '【展开中】若此牌上的樱花结晶将被移除，则不将其移至虚，而改为移至距。\n【展开中】达人距离增大1。',
      textjp: '【展開中】この付与札の上の桜花結晶がダストへと送られるならば、それは代わりに間合へと移動する。\n【展開中】達人の間合は1大きくなる。'
    },
    {
      id: '02-saine-o-n-6',
      name: '冲音晶',
      namejp: '衝音晶',
      baseType: 'normal',
      types: ['enhance', 'reaction'],
      capacity: '1',
      text: '【展开时】被对应的《攻击》获得-1/+0。\n【破弃时】进行一次“攻击距离0-10 伤害1/- 不可被对应”的攻击。虚（1）→距',
      textjp: '【展開時】対応した《攻撃》は-1/+0となる。\n【破棄時】攻撃『適正距離0-10、1/-、対応不可』を行い、ダスト→間合：1'
    },
    {
      id: '02-saine-o-n-7',
      name: '无音壁',
      namejp: '無音壁',
      baseType: 'normal',
      types: ['enhance', 'fullpower'],
      capacity: '5',
      text: '【展开中】当你结算伤害时，此牌上的樱花结晶视为在自装中。（此牌上的樱花结晶不会因此占据自装的空位）',
      textjp: '【展開中】あなたへのダメージを解決するに際し、このカードの上に\n置かれた桜花結晶をあなたのオーラにあるかのように扱う。'
    }],
    special: [{
      id: '02-saine-o-s-1',
      name: '律动弧戟',
      namejp: '律動弧戟',
      baseType: 'special',
      types: ['action'],
      cost: '6',
      text: '进行一次“攻击距离3-4 伤害1/1”的攻击。\n进行一次“攻击距离4-5 伤害1/1”的攻击。\n进行一次“攻击距离3-5 伤害2/2”的攻击。',
      textjp: '攻撃『適正距離3-4、1/1』を行う。\n攻撃『適正距離4-5、1/1』を行う。\n攻撃『適正距離3-5、2/2』を行う。'
    },
    {
      id: '02-saine-o-s-2',
      name: '响鸣共振',
      namejp: '響鳴共振',
      baseType: 'special',
      types: ['action'],
      cost: '8',
      text: '【常时】此牌的牌面费用减小X，X等于敌装中的樱花结晶的数目。 \n敌装（2）→距',
      textjp: '【常時】このカードの消費は相手のオーラの数だけ少なくなる。\n相オーラ→間合：2'
    },
    {
      id: '02-saine-o-s-3',
      name: '音无碎冰',
      namejp: '音無砕氷',
      baseType: 'special',
      types: ['attack', 'reaction'],
      range: '0-10',
      damage: '1/1',
      cost: '2',
      text: '【攻击后】被对应的《攻击》获得-1/-1。\n----\n【再起】八相～自装中的樱花结晶的数目小于等于1。',
      textjp: '【攻撃後】対応した《攻撃》は-1/-1となる。\n----\n【再起】八相-あなたのオーラが1以下である。'
    },
    {
      id: '02-saine-o-s-4',
      name: '冰雨细音的终焉',
      namejp: '氷雨細音の果ての果て',
      baseType: 'special',
      types: ['attack', 'reaction'],
      range: '1-5',
      damage: '5/5',
      cost: '5',
      text: '【常时】仅当你对应王牌时可以使用此牌。',
      textjp: '【常時】このカードは切札に対する対応でしか使用できない。'
    }]
  },
  {
    name: '琵琶',
    namejp: '琵琶',
    nameen: 'BIWA',
    isSelect: false,
    pic: 'twiicon_sa_17.jpg',
    picq: 'sd_saine_a1.png',
    changenormal: [{
      changeIndex: '1',
      id: '02/04-saine/tokoyo-a1-n-1/4',
      name: '合奏',
      namejp: '合奏',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '2-5',
      damage: '3/0',
      text: '【攻击后】若你有细音的王牌处于使用后状态，则敌装（1）→虚\n【攻击后】八相/境地~若自装中樱花结晶的数目小于等于1，或你的集中力等于2，则虚（1）→距\n【攻击后】若你有常世的王牌处于使用后状态，则虚（1）→自装\n（此牌同时视为细音的牌与常世的牌）',
      textjp: '【攻撃後】サイネの切札が使用済ならば、相オーラ→ダスト：１\n【攻撃後】八相/境地―あなたのオーラが1以下またはあなたの集中力が2ならば、ダスト→間合：１\n【攻撃後】トコヨの切札が使用済ならば、ダスト→自オーラ：１\n（このカードはサイネとトコヨのカードである）'
    },
    {
      changeIndex: '6',
      id: '02-saine-a1-n-6',
      name: '伴奏',
      namejp: '伴奏',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '【展开中】八相~每回合内，每当对手第一次进行《攻击》时，若自装中樱花结晶的数目小于等于1，或你有其他女神的王牌处于使用后状态，则该《攻击》失去不可被对应并获得-1/+0。\n【展开时/破弃时】若你有细音的王牌处于使用后状态，本回合内你的王牌的费用减小1。',
      textjp: '【展開中】八相ー相手が各ターンで初めて《攻撃》を行った時、あなたのオーラが1以下または他のメガミの切札が使用済ならば、その《攻撃》は対応不可を失い、-1/+0となる。\0【展開時/破棄時】サイネの切札が使用済ならば、このターン中あなたの切札の消費は1少なくなる。'
    }],
    changespecial: [{
      changeIndex: '2',
      id: '02-saine-a1-s-2',
      name: '二重奏：弹奏冰瞑',
      namejp: '二重奏：弾奏氷瞑',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '【常时】八相~若自装中的樱花结晶的数目小于等于1，则此牌的费用减小1。\n本回合内，你不能进行《攻击》。\n【使用后】你的其他女神的《攻击》获得 + 0 / +1。\n----\n【即再起】自命因被攻击受到了大于等于1点的伤害。',
      textjp: '【常時】八相ーあなたのオーラが1以下ならば、このカードの消費は1少なくなる。\nこのターン中、あなたは《攻撃》を行えない。\n【使用済】あなたの他のメガミによる《攻撃》は+0/+1となる。\n------\n即再起：あなたが《攻撃》によりライフに1以上のダメージを受ける。'
    }]
  },
  {
    name: '拒',
    namejp: '拒',
    nameen: 'REFUSE',
    isSelect: false,
    pic: 'twiicon_sa_26.jpg',
    picq: 'sd_saine_a2.png',
    changenormal: [{
      changeIndex: '2',
      id: '02-saine-a2-n-2',
      name: '里斩',
      namejp: '裏斬り',
      baseType: 'normal',
      types: ['attack'],
      range: '4-5',
      damage: '3/1',
      text: '不可被对应（王牌）\n【常时】进行此《攻击》时，若敌装中樱花结晶的数目小于等于1，则将此《攻击》的对装伤害与对命伤害交换。',
      textjp: '対応不可（切札）\n【常時】この《攻撃》が行われた時、相手のオーラが1以下ならば、この《攻撃》のオーラへのダメージとライフへのダメージを入れ替える。'
    },
    {
      changeIndex: '7',
      id: '02-saine-a2-n-7',
      name: '遗响壁',
      namejp: '遺響壁',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '【展开中】当你结算伤害时，此牌上的樱花结晶视为在自装中。（此牌上的樱花结晶不会因此占据自装的空位）\n【破弃时】八相～若当前为你的回合，且自装中的樱花结晶的数目小于等于1，则进行一次“攻击距离0-5 伤害0/0 【攻击后】对敌装造成2点伤害，本回合内你进行的下一次《攻击》获得+0/+1。”的攻击。',
      textjp: '【展開中】あなたへのダメージを解決するに際し、このカードの上に\n置かれた桜花結晶をあなたのオーラにあるかのように扱う。\n【破棄時】八相-あなたのオーラが1以下かつ現在のターンがあなたのターンならば、攻撃『適正距離0-5、0/0、【攻撃後】相手のオーラに2ダメージを与え、このターンにあなたが次に行う<攻撃>は+0/+1となる』を行う。'
    }],
    changespecial: [{
      changeIndex: '3',
      id: '02-saine-a2-s-3',
      name: '绝唱绝华',
      namejp: '絶唱絶华',
      baseType: 'special',
      types: ['attack', 'reaction'],
      cost: '1',
      range: '0-10',
      damage: '2/-',
      text: '终端\n【攻击后】被对应的《攻击》结算完毕后，若你选择用装承受该《攻击》的伤害，且自装中的樱花结晶的数目等于0，则结束当前阶段。',
      textjp: '終端\n【攻撃後】対応した《攻撃》の解決後に、その《攻撃》でオーラへのダメージが選ばれ、かつあなたのオーラが0ならば現在のフェイズを終了する。'
    }]
  }]
},
{
  name: 'HIMIKA 绯弥香',
  namejp: 'ヒミカ',
  nameen: 'HIMIKA',
  desc: '连火～若此牌为本回合内你使用的第3张或之后的牌，则你的一部分牌会获得强化。',
  descjp: '連火～あなたが1ターン中に３枚以上のカードを使用するならば、いくつかのカードが強化される。',
  // girlInfo: '身高：173cm\n喜欢的东西：人間、良い景色、新しいもの\n<b>--物語--</b>\n「バーン！ バーン！ そんでバーン！ ……な、簡単だろ？」\nヒミカは比較的旧いメガミであり、強い自然の力を持っています。万象の根幹に近しい力である炎を象徴するのですから、それも当然のことでしょう。彼女の炎は扱う者の感情とも直結しており、ある意味では感情を象徴しているとも言えます。しかし残念ながらバカです。\n人間好きで気さくなため、人間との友好関係の広さは随一と言えます。新しいものや楽しいものを好み、特にここ数十年は海の向こうに強い関心を持っています。彼女の銃も３０年ほど昔、海の向こうより伝わったもの元にして、ハガネと共に作り上げたものです。',
  // girlInfojp: '身長：173cm\n好きなもの：人間、良い景色、新しいもの\n<b>--物語--</b>\n「バーン！ バーン！ そんでバーン！ ……な、簡単だろ？」\nヒミカは比較的旧いメガミであり、強い自然の力を持っています。万象の根幹に近しい力である炎を象徴するのですから、それも当然のことでしょう。彼女の炎は扱う者の感情とも直結しており、ある意味では感情を象徴しているとも言えます。しかし残念ながらバカです。\n人間好きで気さくなため、人間との友好関係の広さは随一と言えます。新しいものや楽しいものを好み、特にここ数十年は海の向こうに強い関心を持っています。彼女の銃も３０年ほど昔、海の向こうより伝わったもの元にして、ハガネと共に作り上げたものです。',
  list: [{
    name: '铳',
    namejp: '銃',
    nameen: 'ARQUEBUS',
    isSelect: false,
    pic: 'twiicon_sa_02.jpg',
    picq: 'sd_himika.png',
    normal: [{
      id: '03-himika-o-n-1',
      name: '射击',
      namejp: 'シュート',
      baseType: 'normal',
      types: ['attack'],
      range: '4-10',
      damage: '2/1',
      text: '',
      textjp: ''
    },
    {
      id: '03-himika-o-n-2',
      name: '速射',
      namejp: 'ラピッドファイア',
      baseType: 'normal',
      types: ['attack'],
      range: '6-8',
      damage: '2/1',
      text: '【常时】连火～若此牌为本回合内你使用的第3张或之后的牌，则此《攻击》获得+1/+1。',
      textjp: '【常時】連火-このカードがこのターンに使用した3枚目以降のカードならば、この《攻撃》は+1/+1となる。'
    },
    {
      id: '03-himika-o-n-3',
      name: '麦林加农炮',
      namejp: 'マグナムカノン',
      baseType: 'normal',
      types: ['attack'],
      range: '5-8',
      damage: '3/2',
      text: '【攻击后】自命（1）→虚',
      textjp: '【攻撃後】自ライフ→ダスト：1'
    },
    {
      id: '03-himika-o-n-4',
      name: '完全爆破',
      namejp: 'フルバースト',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '5-9',
      damage: '3/1',
      text: '【常时】此《攻击》对敌装和敌命均造成伤害。',
      textjp: '【常時】この《攻撃》がダメージを与えるならば、相手は片方を選ぶのではなく両方のダメージを受ける。'
    },
    {
      id: '03-himika-o-n-5',
      name: '后跳',
      namejp: 'バックステップ',
      baseType: 'normal',
      types: ['action'],
      text: '抓一张牌。 \n虚（1）→距',
      textjp: 'カードを1枚引く。 \nダスト→間合：1'
    },
    {
      id: '03-himika-o-n-6',
      name: '回燃',
      namejp: 'バックドラフト',
      baseType: 'normal',
      types: ['action'],
      text: '对手畏缩。\n连火～若此牌为本回合内你使用的第3张或之后的牌，则本回合内你的其他女神的下一次对装伤害不为“-”的《攻击》获得+1/+1。',
      textjp: '相手を畏縮させる。\n連火-このカードがこのターンに使用した3枚目以降のカードならば、このターンにあなたが次に行う他のメガミによるオーラへのダメージが「-」でない《攻撃》を+1/+1する。'
    },
    {
      id: '03-himika-o-n-7',
      name: '迷烟',
      namejp: 'スモーク',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '【展开中】距中的樱花结晶不能被卡牌上的箭头效果移出距。',
      textjp: '【展開中】カードの矢印(→)により間合にある桜花結晶は移動しない。'
    }],
    special: [{
      id: '03-himika-o-s-1',
      name: '真红凶弹',
      namejp: 'レッドバレット',
      baseType: 'special',
      types: ['attack'],
      range: '5-10',
      damage: '3/1',
      cost: '0',
      text: '',
      textjp: ''
    },
    {
      id: '03-himika-o-s-2',
      name: '绯红零时',
      namejp: 'クリムゾンゼロ',
      baseType: 'special',
      types: ['attack'],
      range: '0-2',
      damage: '2/2',
      cost: '5',
      text: '【常时】此《攻击》对敌装和敌命均造成伤害。\n【常时】若当前距离等于0，则此《攻击》获得不可被对应。',
      textjp: '【常時】この《攻撃》がダメージを与えるならば、相手は片方を選ぶのではなく両方のダメージを受ける。\n【常時】現在の間合が0ならば、この《攻撃》は対応不可を得る。'
    },
    {
      id: '03-himika-o-s-3',
      name: '猩红狂想',
      namejp: 'スカーレットイマジン',
      baseType: 'special',
      types: ['action'],
      cost: '3',
      text: '抓2张牌，然后盖伏1张牌。',
      textjp: 'カードを2枚引く。その後、あなたは手札を1枚伏せ札にする。'
    },
    {
      id: '03-himika-o-s-4',
      name: '真红领域',
      namejp: 'ヴァーミリオンフィールド',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '连火～若此牌为本回合内你使用的第3张或之后的牌，则虚（2）→距\n----\n【再起】你的手牌张数等于0。',
      textjp: '連火-このカードがこのターンに使用した3枚目以降のカードならば、ダスト→間合：2\n----\n【再起】あなたの手札が0枚である。'
    }]
  },
  {
    name: '炎',
    namejp: '炎',
    nameen: 'FLAME',
    isSelect: false,
    pic: 'twiicon_sa_16.jpg',
    picq: 'sd_himika_a1.png',
    changenormal: [{
      changeIndex: '2',
      id: '03-himika-a1-n-2',
      name: '火炎流',
      namejp: '火炎流',
      baseType: 'normal',
      types: ['attack'],
      range: '1-3',
      damage: '2/1',
      text: '【常时】连火～若此牌为本回合内你使用的第3张或之后的牌，则此《攻击》获得+0/+1。',
      textjp: '【常時】連火-このカードがこのターンに使用した3枚目以降のカードならば、この《攻撃》は+0/+1となる。'
    },
    {
      changeIndex: '5',
      id: '03-himika-a1-n-5',
      name: '杀意',
      namejp: '殺意',
      baseType: 'normal',
      types: ['action'],
      text: '若你的手牌张数等于0，则敌装（2）→虚。',
      textjp: 'あなたの手札が0枚ならば、相オーラ→ダスト：2'
    }],
    changespecial: [{
      changeIndex: '2',
      id: '03-himika-a1-s-2',
      name: '炎天·红绯弥香',
      namejp: '炎天・紅緋弥香',
      baseType: 'special',
      types: ['attack', 'fullpower'],
      range: '0-7',
      damage: 'X/X',
      cost: '5',
      text: '不可被对应\n【常时】X等于8减去当前距离。\n【攻击后】你输掉本局游戏。',
      textjp: '対応不可 \n【常時】Xは8から現在の間合を引いた値に等しい。 \n【攻撃後】あなたは敗北する。'
    }]
  }]
},
{
  name: 'TOKOYO 常世',
  namejp: 'トコヨ',
  nameen: 'TOKOYO',
  desc: '境地～若你的集中力等于2，则你的一部分牌会获得强化。',
  descjp: '境地～あなたの集中力が2ならば、いくつかのカードが強化される。',
  // girlInfo: '身高：141cm\n喜欢的东西：芸術全般、批評、恋愛小説（甘ったるいやつ）\n<b>--物語--</b>\n「あんたの舞い、一応期待しといてあげる」\nトコヨは生粋の芸術家であり、批評家でもあります。伝統や古典を重んじる頑固で厳格な気質を持ちます。彼女は時おり人の世へと顕現し、お忍びの芸術家として創作や批評へと打ち込むこともあります（この体格なので、分かる人には分かってしまうのですが）。\n決闘については、本分を芸術に置いているためさほど乗り気ではありません。しかし負けず嫌いな気質ゆえか、力を貸すのはやぶさかではないようです。\n最近は恋愛小説、特に甘ったるいものが気になっているようで、隠れて読んでいる所が目撃されています。',
  // girlInfojp: '身長：141cm\n好きなもの：芸術全般、批評、恋愛小説（甘ったるいやつ）\n<b>--物語--</b>\n「あんたの舞い、一応期待しといてあげる」\nトコヨは生粋の芸術家であり、批評家でもあります。伝統や古典を重んじる頑固で厳格な気質を持ちます。彼女は時おり人の世へと顕現し、お忍びの芸術家として創作や批評へと打ち込むこともあります（この体格なので、分かる人には分かってしまうのですが）。\n決闘については、本分を芸術に置いているためさほど乗り気ではありません。しかし負けず嫌いな気質ゆえか、力を貸すのはやぶさかではないようです。\n最近は恋愛小説、特に甘ったるいものが気になっているようで、隠れて読んでいる所が目撃されています。',
  list: [{
    name: '扇',
    namejp: '扇',
    nameen: 'FAN',
    isSelect: false,
    pic: 'twiicon_sa_03.jpg',
    picq: 'sd_tokoyo.png',
    normal: [{
      id: '04-tokoyo-o-n-1',
      name: '梳流',
      namejp: '梳流し',
      baseType: 'normal',
      types: ['attack'],
      range: '4',
      damage: '-/1',
      text: '【攻击后】境地～若你的集中力等于2，则将此牌置于你的牌库顶。',
      textjp: '【攻撃後】境地-あなたの集中力が2ならば、このカードを山札の上に戻す。'
    },
    {
      id: '04-tokoyo-o-n-2',
      name: '雅击',
      namejp: '雅打ち',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '2-4',
      damage: '2/1',
      text: '【攻击后】境地～若你的集中力等于2，则打消被对应的非王牌的《攻击》。',
      textjp: '【攻撃後】境地-あなたの集中力が2ならば、対応した切札でない《攻撃》を打ち消す。'
    },
    {
      id: '04-tokoyo-o-n-3',
      name: '脱兔',
      namejp: '跳ね兎',
      baseType: 'normal',
      types: ['action'],
      text: '若当前距离小于等于3，则虚（2）→距',
      textjp: '現在の間合が3以下ならば、ダスト→間合：2'
    },
    {
      id: '04-tokoyo-o-n-4',
      name: '诗舞',
      namejp: '詩舞',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '获得1点集中力，选择1项：\n1.自气（1）→自装\n2.自装（1）→距',
      textjp: '集中力を1得て、以下から1つを選ぶ。\n・自フレア→自オーラ：1\n・自オーラ→間合：1'
    },
    {
      id: '04-tokoyo-o-n-5',
      name: '扇回旋',
      namejp: '要返し',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '从你的弃牌和/或盖牌中选择至多2张牌，将它们以任意顺序置于你的牌库底。 \n虚（2）→自装',
      textjp: '捨て札か伏せ札からカードを2枚まで選ぶ。それらのカードを好きな順で山札の底に置く。 \nダスト→自オーラ：2'
    },
    {
      id: '04-tokoyo-o-n-6',
      name: '风舞台',
      namejp: '風舞台',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '【展开时】距（2）→自装 \n【破弃时】自装（2）→距',
      textjp: '【展開時】間合→自オーラ：2 \n【破棄時】自オーラ→間合：2'
    },
    {
      id: '04-tokoyo-o-n-7',
      name: '晴舞台',
      namejp: '晴舞台',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '终端\n【展开时】你的集中力变为2。\n【破弃时】进行一次“攻击距离3-6 伤害-/1”的攻击。',
      textjp: '終端\n【展開時】あなたの集中力は2になる。\n【破棄時】攻撃『適正距離3-6、-/1』を行う。'
    }],
    special: [{
      id: '04-tokoyo-o-s-1',
      name: '久远之花',
      namejp: '久遠ノ花',
      baseType: 'special',
      types: ['attack', 'reaction'],
      range: '0-10',
      damage: '-/1',
      cost: '5',
      text: '【攻击后】打消被对应的《攻击》。',
      textjp: '【攻撃後】対応した《攻撃》を打ち消す。'
    },
    {
      id: '04-tokoyo-o-s-2',
      name: '千岁之鸟',
      namejp: '千歳ノ鳥',
      baseType: 'special',
      types: ['attack'],
      range: '3-4',
      damage: '2/2',
      cost: '2',
      text: '【攻击后】重铸牌库（你不会因此受到伤害）。',
      textjp: '【攻撃後】山札を再構成する。 \n(その際にダメージは受けない)'
    },
    {
      id: '04-tokoyo-o-s-3',
      name: '无穷之风',
      namejp: '無窮ノ風',
      baseType: 'special',
      types: ['attack'],
      range: '3-8',
      damage: '1/1',
      cost: '1',
      text: '不可被对应\n【攻击后】对手从手牌中弃置1张非《攻击》的牌。若不能如此做，对手须展示其手牌。\n----\n【再起】境地～你的集中力等于2。',
      textjp: '対応不可 \n【攻撃後】相手は手札から《攻撃》でないカード1枚を捨て札にする。それが行えない場合、相手は手札を公開する。 \n----\n【再起】境地-あなたの集中力が2である。'
    },
    {
      id: '04-tokoyo-o-s-4',
      name: '常世之月',
      namejp: '常世ノ月',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '你的集中力变为2，对手的集中力变为0，对手畏缩。',
      textjp: 'あなたの集中力は2になり、相手の集中力は0になり、相手を畏縮させる。'
    }]
  },
  {
    name: '笛',
    namejp: '笛',
    nameen: 'FLUTE',
    isSelect: false,
    pic: 'twiicon_sa_18.jpg',
    picq: 'sd_tokoyo_a1.png',
    changenormal: [{
      changeIndex: '1',
      id: '04-tokoyo-a1-n-1',
      name: '奏流',
      namejp: '奏流し',
      baseType: 'normal',
      types: ['attack'],
      range: '5',
      damage: '-/1',
      text: '【常时】若你有常世的王牌处于使用后状态，此《攻击》获得不可被对应。\n【攻击后】境地~若你的集中力等于2，或你有其他女神的王牌处于使用后状态，则将此牌置于你的牌库顶或牌库底。',
      textjp: '【常時】トコヨの切札が使用済ならば、この《攻撃》は対応不可を得る。\n【攻撃後】境地ーあなたの集中力が2または他のメガミの切札が使用済ならば、このカードを山札の上か底に置く。'
    },
    {
      changeIndex: '4',
      id: '02/04-saine/tokoyo-a1-n-1/4',
      name: '合奏',
      namejp: '合奏',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '2-5',
      damage: '3/0',
      text: '【攻击后】若你有细音的王牌处于使用后状态，则敌装（1）→虚\n【攻击后】八相/境地~若自装中樱花结晶的数目小于等于1，或你的集中力等于2，则虚（1）→距\n【攻击后】若你有常世的王牌处于使用后状态，则虚（1）→自装\n（此牌同时视为细音的牌与常世的牌）',
      textjp: '【攻撃後】サイネの切札が使用済ならば、相オーラ→ダスト：１\n【攻撃後】八相/境地―あなたのオーラが1以下またはあなたの集中力が2ならば、ダスト→間合：１\n【攻撃後】トコヨの切札が使用済ならば、ダスト→自オーラ：１\n（このカードはサイネとトコヨのカードである）'
    }],
    changespecial: [{
      changeIndex: '3',
      id: '04-tokoyo-a1-s-3',
      name: '二重奏：吹弹阳明',
      namejp: '二重奏：吹弾陽明',
      baseType: 'special',
      types: ['action'],
      cost: '1',
      text: '【常时】境地~若你的集中力等于2，则此牌的费用减小1。\n本回合内，你不能支付集中力。\n【使用后】每当你使用其他女神的牌进行对应时，你可以从你的弃牌或盖牌中选择1张，将其置于牌库底。\n----\n【即再起】自命因被攻击受到了大于等于1点的伤害。',
      textjp: '【常時】境地ーあなたの集中力が2ならば、このカードの消費は1小さくなる。\nこのターン中、あなたは集中力を支払えない。\n【使用済】あなたが他のメガミのカードで対応した時、捨て札か伏せ札のカードを1枚選び、それを山札の底においてもよい。\n------\n即再起：あなたが《攻撃》によりライフに1以上のダメージを受ける。'
    }]
  }, {
    name: '恐怖',
    namejp: '恐怖',
    isSelect: false,
    pic: 'twiicon_sa_35.jpg',
    picq: 'sd_tokoyo_a2.png',
    changenormal: [{
      changeIndex: '2',
      id: '04-tokoyo-a2-n-2',
      name: '畏掠',
      namejp: '畏掠め',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '2-3',
      damage: '2/1',
      text: '【常时】若对手的集中力等于0，则由你选择对手如何承受此攻击的伤害。\n【攻击后】境地～若你的集中力等于2，则被对应的非王牌的《攻击》获得-X/-Y。X等于此《攻击》造成的对装的伤害，Y等于此攻击造成的对命的伤害。',
      textjp: '【常時】相手の集中力が0ならば、この《攻撃》のダメージはあなたが選ぶ。\n【攻撃後】境地―あなたの集中力が2ならば、対応した切札でない《攻撃》は-X/-Yとなる。Xはこの《攻撃》が与えたオーラへのダメージ、Yはライフへのダメージに等しい。'
    }],
    changespecial: [{
      changeIndex: '2',
      id: '04-tokoyo-a2-s-2',
      name: '悠久之雪',
      namejp: '悠久ノ雪',
      baseType: 'special',
      types: ['attack'],
      cost: '1',
      range: '3-5',
      damage: '1/1',
      text: '【攻击后】若对手选择由装承受此次伤害，则\n敌气（1）→自装\n----\n【再起】对手的集中力等于1。',
      textjp: '【攻撃後】相手がオ一ラへのダメ一ジを選んだならば、\n相フレア→自オーラ：1\n----\n【再起】相手の集中力が1である。'
    }, {
      changeIndex: '3',
      id: '04-tokoyo-a2-s-3',
      name: '徒寄之八重樱',
      namejp: '徒寄ノ八重桜',
      baseType: 'special',
      types: ['action'],
      cost: '4',
      text: '进行5次基本动作《装附》。\n【使用后】当你的牌上的箭头效果将樱花结晶移至自装时，自装上限视为8。\n【使用后】你的准备阶段开始时，若自装中的樱花结晶的数目大于等于6，则进行一次“攻击距离0-8 伤害-/1”的攻击。',
      textjp: 'あなたは基本動作《纏い》を5回行う。\n【使用済】あなたのカ一ドの矢印効果があなたのオ一ラへと桜花結晶を動かすならば、その間だけオ一うの上限を8として扱う。\n【使用済】あなたの開始フェイズの開始時にあなたのオ一ラが6以上ならば、攻撃『適正距離0-8、-/1』を行う。'
    }]
  }]
},
{
  name: 'OBORO 胧',
  namejp: 'オボロ',
  nameen: 'OBORO',
  desc: '设置～每当你将要重铸牌库时，若你的盖牌区中有具设置关键字的牌，则你可以使用其中的1张。',
  descjp: '設置～設置を持つカードが伏せ札にある際に山札の再構成を行う場合、再構成の直前にその中の1枚を伏せ札から使用してもよい。',
  // girlInfo: '身高：145cm\n喜欢的东西：実験、フィールドワーク、水泳、寫眞撮影\n<b>--物語--</b>\n「共に忍の道を行くお主を   拙者は歓迎するぞ」\nオボロは自然を知り、自然と共に在り続ける求道者で、同時に優れた生物学者でもあります。常に人の世に顕現している変わり者で、深い森の中で研究を続けています。\nストイックに己を磨き、探求を続けるその姿からいつしか周囲に人が集い、彼女を模倣する形でこの世界の「忍」が生まれることとなりました。時が流れるに従い彼女の側も忍たちの影響を受けるようになり、今では双方向に影響し合う忍の里という共同体を作り出しています。\n共同体の長ゆえか、メガミにしては面倒見が良く常識人です。たまに暴走することもありますが。',
  // girlInfojp: '身長：145cm\n好きなもの：実験、フィールドワーク、水泳、寫眞撮影\n<b>--物語--</b>\n「共に忍の道を行くお主を   拙者は歓迎するぞ」\nオボロは自然を知り、自然と共に在り続ける求道者で、同時に優れた生物学者でもあります。常に人の世に顕現している変わり者で、深い森の中で研究を続けています。\nストイックに己を磨き、探求を続けるその姿からいつしか周囲に人が集い、彼女を模倣する形でこの世界の「忍」が生まれることとなりました。時が流れるに従い彼女の側も忍たちの影響を受けるようになり、今では双方向に影響し合う忍の里という共同体を作り出しています。\n共同体の長ゆえか、メガミにしては面倒見が良く常識人です。たまに暴走することもありますが。',
  list: [{
    name: '忍',
    namejp: '忍',
    nameen: 'NINJUTSU',
    isSelect: false,
    pic: 'twiicon_sa_04.jpg',
    picq: 'sd_oboro.png',
    normal: [{
      id: '05-oboro-o-n-1',
      name: '钢丝',
      namejp: '鋼糸',
      baseType: 'normal',
      types: ['attack'],
      range: '3-4',
      damage: '2/2',
      text: '设置',
      textjp: '設置'
    },
    {
      id: '05-oboro-o-n-2',
      name: '影菱',
      namejp: '影菱',
      baseType: 'normal',
      types: ['attack'],
      range: '2',
      damage: '2/1',
      text: '设置 不可被对应 \n【攻击后】若你从盖牌区使用此牌，则检视对手的手牌，从中选择1张并盖伏。',
      textjp: '設置　対応不可\n【攻撃後】このカードを伏せ札から使用したならば、相手の手札を見てその中から1枚を選び、それを伏せ札にする。'
    },
    {
      id: '05-oboro-o-n-3',
      name: '斩击乱舞',
      namejp: '斬撃乱舞',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '2-4',
      damage: '3/2',
      text: '【常时】若本回合内敌装受到过伤害，则此《攻击》获得+1/+1。',
      textjp: '【常時】相手がこのターン中にオーラへのダメージを受けているならば、この《攻撃》は+1/+1となる。'
    },
    {
      id: '05-oboro-o-n-4',
      name: '忍步',
      namejp: '忍歩',
      baseType: 'normal',
      types: ['action'],
      text: '设置\n虚 (1)→ 距\n若你从盖牌区中使用此牌，则你可以从盖牌区中额外使用1张具设置关键字的牌。',
      textjp: '設置 \nダスト→間合：1 \nこのカードを伏せ札から使用したならば、伏せ札から設置を持つカードを1枚使用してもよい。'
    },
    {
      id: '05-oboro-o-n-5',
      name: '诱导',
      namejp: '誘導',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '设置 \n选择1项：\n1.距（1）→敌装\n2.敌装（1）→敌气',
      textjp: '設置\n以下から１つを選ぶ。\n・間合→相オーラ：1\n・相オーラ→相フレア：1'
    },
    {
      id: '05-oboro-o-n-6',
      name: '分身术',
      namejp: '分身の術',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '从盖牌区中选择1张不具《全力》副类别的牌使用。若该牌因此进入弃牌区，则从弃牌区中再使用1次。若所选择的牌是《攻击》牌，则此《攻击》获得不可被对应（2次都获得不可被对应）。',
      textjp: '伏せ札から《全力》でないカードを1枚選び、そのカードを使用する。その後、そのカードが捨て札にあるならば捨て札からもう1回使用する。《攻撃》カードが使用されたならばそれらの《攻撃》は対応不可を得る（2回ともに対応不可を得る）。'
    },
    {
      id: '05-oboro-o-n-7',
      name: '生物活性',
      namejp: '生体活性',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '4',
      text: '破绽 设置 \n【破弃时】将你的1张处于使用后状态的王牌变为未使用状态。',
      textjp: '隙　設置 \n【破棄時】あなたの使用済の切札を1枚選び、それを未使用に戻す。'
    }],
    special: [{
      id: '05-oboro-o-s-1',
      name: '熊介',
      namejp: '熊介',
      baseType: 'special',
      types: ['attack', 'fullpower'],
      range: '3-4',
      damage: '2/2',
      cost: '4',
      text: '【攻击后】进行X次“攻击距离3-4 伤害2/2”的攻击，X等于你盖牌区中的牌张数。',
      textjp: '【攻撃後】攻撃『適正距離3-4、2/2』をX回行う。Xはあなたの伏せ札の枚数に等しい。'
    },
    {
      id: '05-oboro-o-s-2',
      name: '鸢影',
      namejp: '鳶影',
      baseType: 'special',
      types: ['action', 'reaction'],
      cost: '4',
      text: '你可以从盖牌中选择1张不具《全力》副类别的牌并使用之。若此牌对应了一个《攻击》，则视为所选择的牌也对应了该《攻击》。',
      textjp: '伏せ札から《全力》でないカードを1枚選び、そのカードを使用してもよい。この際、このカードが対応している《攻撃》があるならば、使用されたカードはそれに対応しているものと扱う。'
    },
    {
      id: '05-oboro-o-s-3',
      name: '虚鱼',
      namejp: '虚魚',
      baseType: 'special',
      types: ['enhance'],
      capacity: '3',
      cost: '2',
      text: '【展开时】从你的弃牌区中盖伏任意数量的牌。\n【展开中】你从盖牌区使用的牌的效果中的箭头变为双箭头（⇔）。\n【展开中/使用后】每当你将要重铸牌库时，你可以从盖牌区额外使用1张具设置关键字的非《攻击》牌。',
      textjp: '【展開時】あなたは捨て札を好きな枚数だけ伏せ札にする。\n【展開中】あなたが伏せ札から使用するカードの矢印は両矢印(⇔)になる。\n【展開中/使用済】山札を再構成する直前に設置を持つ《攻撃》でないカードを追加で1枚伏せ札から使用できる。'
    },
    {
      id: '05-oboro-o-s-4',
      name: '壬蔓',
      namejp: '壬蔓',
      baseType: 'special',
      types: ['attack'],
      range: '3-7',
      damage: '1/1',
      cost: '0',
      text: '【攻击后】虚（1）→自气 \n----\n【再起】自气中的樱花结晶的数目等于0。',
      textjp: '【攻撃後】ダスト→自フレア：1 \n----\n【再起】あなたのフレアが0である。'
    }]
  },
  {
    name: '战略',
    namejp: '戦略',
    nameen: 'STRATEGY',
    isSelect: false,
    pic: 'twiicon_sa_19.jpg',
    picq: 'sd_oboro_a1.png',
    changenormal: [{
      changeIndex: '2',
      id: '05-oboro-a1-n-2',
      name: '手里剑',
      namejp: '手裏剣',
      baseType: 'normal',
      types: ['attack'],
      range: '3-5',
      damage: '2/1',
      text: '【常时】你的结束阶段开始时，若双方盖牌区中的牌张数之和大于等于5，则你可以将此牌从弃牌区置入手牌。。',
      textjp: '【常時】あなたの終了フェイズに両者の伏せ札が合計5枚以上あるならば、このカードを捨て札から手札に戻してもよい。'
    },
    {
      changeIndex: '3',
      id: '05-oboro-a1-n-3',
      name: '突袭',
      namejp: '不意打ち',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '1-3',
      damage: '4/3',
      text: '不可被对应（通常牌）\n【常时】此《攻击》获得-X/-X，X等于对手盖牌区中的牌张数。',
      textjp: '対応不可（通常札） \n【常時】この《攻撃》は-X/-Xとなる。Xは相手の伏せ札の枚数に等しい。'
    }],
    changespecial: [{
      changeIndex: '4',
      id: '05-oboro-a1-s-4',
      name: '神代枝',
      namejp: '神代枝',
      baseType: 'special',
      types: ['action', 'fullpower'],
      cost: '0',
      text: '游戏外（1）→自装\n游戏外（1）→自气\n将『最后的结晶』从追加牌区以未使用状态加入王牌，将此牌移出游戏。',
      textjp: 'ゲーム外→自オーラ：1 \nゲーム外→自フレア：1 \nこのカードを取り除き、切札「最後の結晶」を追加札から未使用で得る。'
    }],
    changeExtra: [{
      id: '05-oboro-a1-s-4-ex1',
      name: '最后的结晶',
      namejp: '最後の結晶',
      baseType: 'special',
      extraFrom: '05-oboro-a1-s-4',
      types: ['action'],
      cost: '3',
      text: '【常时】此牌不能以正常方法使用。仅当你将第一次输掉本局游戏时，可以防止此次失败，将自命中的所有樱花结晶移至虚，并立即使用此牌（仍需支付费用）。\n盖伏1张手牌，虚（1）→自命',
      textjp: '【常時】このカードはこの効果でのみ使用できる。あなたが初めて敗北するならば、代わりにあなたのライフ全てをダストに送り、このカードを使用してもよい(消費は支払う)。 \n手札を1枚伏せ札にし、ダスト→自ライフ：1'
    }]
  },
  {
    name: '电子',
    namejp: '電子',
    isSelect: false,
    pic: 'twiicon_sa_50.jpg',
    picq: 'sd_oboro_a2.png',
    changenormal: [{
      changeIndex: '1',
      id: '05-oboro-a2-n-1',
      name: '全息苦无',
      namejp: 'ホロ苦無',
      baseType: 'normal',
      types: ['attack'],
      range: '1,3,5',
      damage: '1/1',
      text: '设置\n【攻击后】组装1个零件。\n【常时】若此牌因使用完毕将进入弃牌区，则你可以改为将其置入盖牌区。',
      textjp: '設置\n【攻撃後】パーツを1つ組み立てる。\n【常時】使用されたこのカードが捨て札になるならば、代わりに伏せ札にしてもよい。'
    }],
    changespecial: [{
      changeIndex: '1',
      id: '05-oboro-a2-s-1',
      name: '千兆洪流',
      namejp: 'ギガ介',
      baseType: 'special',
      types: ['attack'],
      range: '3-4',
      damage: '2/1',
      cost: '16',
      text: '【常时】此牌的费用减小X，X等于你的盖牌张数与已组装的零件数之和。\n【攻击后】进行3次“攻击距离3-4 伤害2/1”的攻击。',
      textjp: '【常時】このカードの消費はあなたの伏せ札の枚数と組み立てられたパーツの数の合計だけ少なくなる。\n【攻撃後】攻撃『適正距離3-4、2/1』を3回行う。'
    }, {
      changeIndex: '3',
      id: '05-oboro-a2-s-3',
      name: '胧文书·电子神涉',
      namejp: '朧文書・電子神渉',
      baseType: 'special',
      types: ['action', 'fullpower'],
      cost: '0',
      text: '组装1个零件，执行至多1次基本动作。\n【使用后】每当你将要重铸牌库时，你可以拆除已组装的零件，直至已组装的零件数目小于等于1。然后若你已组装的零件数目小于等于1，则组装X个零件，X等于你的盖牌张数的一半（向上取整）。',
      textjp: 'パーツを1つ組み立て、基本動作を1回まで行う。\n【使用済】山札を再構築する直前に、組み立てられているパーツが1つ以下になるように解体してもよい。そうした場合、パーツをX個組み立てる。Xは伏せ札の枚数の半分（切り上げ）に等しい。'
    }],
    changeExtra: [{
      id: '05-oboro-a2-mp-1',
      name: '核心零件X',
      namejp: 'メインパーツX',
      types: ['attack'],
      range: '4-5',
      damage: '2/2',
      text: '数码设置',
      textjp: 'デジ設置'
    }, {
      id: '05-oboro-a2-mp-2',
      name: '核心零件Y',
      namejp: 'メインパーツY',
      types: ['attack'],
      range: '3,6',
      damage: '2/1',
      text: '数码设置',
      textjp: 'デジ設置'
    }, {
      id: '05-oboro-a2-mp-3',
      name: '核心零件Z',
      namejp: 'メインパーツZ',
      types: ['attack'],
      range: '0-2',
      damage: '1/0',
      text: '数码设置\n【攻击后】若对手选择由命承受此次伤害，则对手畏缩。',
      textjp: 'デジ設置\n【攻撃後】相手がライフへのダメージを選んだならば、相手を畏縮させる。'
    }, {
      id: '05-oboro-a2-cp1',
      name: '自定义零件A',
      namejp: 'カスタムパーツA',
      text: '一：不可被对应（《付与》牌）\n二：不可被对应（《攻击》牌）\n三：不可被对应（《行动》牌）\n四：不可被对应（通常牌）',
      textjp: '壱：対応不可（《付与》）\n弐：対応不可（《攻撃》）\n参：対応不可（《行動》）\n肆：対応不可（通常札）'
    }, {
      id: '05-oboro-a2-cp-2',
      name: '自定义零件B',
      namejp: 'カスタムパーツB',
      text: '一：【常时】此《攻击》获得+0/+0。\n二：【常时】此《攻击》获得+0/+1。\n三：【常时】此《攻击》获得+1/+0。\n四：【常时】此《攻击》获得+1/+1。',
      textjp: '壱：【常時】この《攻撃》は+0/+0となる。\n弐：【常時】この《攻撃》は+0/+1となる。\n参：【常時】この《攻撃》は+1/+0となる。\n肆：【常時】この《攻撃》は+1/+1となる。'
    }, {
      id: '05-oboro-a2-cp-3',
      name: '自定义零件C',
      namejp: 'カスタムパーツC',
      text: '一：【攻击后】虚（1）→距\n二：【攻击后】虚（1）⇔距\n三：【攻击后】虚（1）⇔距\n四：【攻击后】虚（1）⇔距\n你获得1点集中力。',
      textjp: '壱：【攻撃後】ダスト→間合：１\n弐：【攻撃後】ダスト↔間合：１\n参：【攻撃後】ダスト↔間合：１\n肆：【攻撃後】ダスト↔間合：１\nあなたは集中力を1得る。'
    }, {
      id: '05-oboro-a2-cp-4',
      name: '自定义零件D',
      namejp: 'カスタムパーツD',
      text: '一：【攻击后】从你的弃牌中选择至多1张牌置入盖牌区。\n二：【攻击后】从你的盖牌中选择至多1张牌置于牌库底。\n三：【攻击后】从你的盖牌中选择至多2张牌以任意顺序置于牌库底。\n四：【攻击后】从你的弃牌和/或盖牌中选择至多2张牌，以任意顺序置于牌库底。',
      textjp: '壱：【攻撃後】捨て札を1枚まで選び、それを伏せ札にする。\n弐：【攻撃後】伏せ札からカードを1枚まで選び、それを山札の底に　　　置く。\n参：【攻撃後】伏せ札からカードを2枚まで選び、それを好きな順で山札の底に置く。\n肆：【攻撃後】捨て札か伏せ札からカードを2枚まで選び、それを好きな順で山札の底に置く。'
    }]
  }]
},
{
  name: 'YUKIHI 雪灯',
  namejp: 'ユキヒ',
  nameen: 'YUKIHI',
  desc: '变貌～伞面具有开伞和闭伞两种状态，你的一部分牌的效果会根据伞面状态发生变化。游戏开始时伞面的状态为闭伞。每当你的结束阶段开始时，你可以进行伞的开合操作，改变伞面的状态。（用伞面状态卡表示）',
  descjp: '変貌～傘が閉じている状態と開いている状態があり、いくつかのカードは状態に応じて効果が変わる。ゲーム開始時は閉じた状態である。あなたの終了フェイズに1回、傘の開閉を行い、状態を変えられる（傘カードで表す）。',
  // girlInfo: '身高：156cm\n喜欢的东西：会話、可愛いもの、名所探訪\n<b>--物語--</b>\n「わたしにはふたつの心があるの。ふふっ」\nユキヒは縁や人間関係を象徴するメガミですが、不思議な秘密を持っています。彼女はふたつの心を持っており、傘の開閉と簪の着脱でそれらが切り替わるのです。いわゆる多重人格と捉えても間違いではありません。\n傘が閉じた「表」の姿は面倒見が良く、占いを通して縁を視るミステリアスなお姉さんです。優しく友好的ですが、僅かに距離を置いて人々に接する節があります。\n傘が開いた「裏」の姿は渦巻く情念を纏っています。自らに縁が結ばれた者を求め続けていますが、少しばかり過激すぎるため、彼女と接するには危険が伴うでしょう。',
  // girlInfojp: '身長：156cm\n好きなもの：会話、可愛いもの、名所探訪\n<b>--物語--</b>\n「わたしにはふたつの心があるの。ふふっ」\nユキヒは縁や人間関係を象徴するメガミですが、不思議な秘密を持っています。彼女はふたつの心を持っており、傘の開閉と簪の着脱でそれらが切り替わるのです。いわゆる多重人格と捉えても間違いではありません。\n傘が閉じた「表」の姿は面倒見が良く、占いを通して縁を視るミステリアスなお姉さんです。優しく友好的ですが、僅かに距離を置いて人々に接する節があります。\n傘が開いた「裏」の姿は渦巻く情念を纏っています。自らに縁が結ばれた者を求め続けていますが、少しばかり過激すぎるため、彼女と接するには危険が伴うでしょう。',
  list: [{
    name: '伞/簪',
    namejp: '傘/簪',
    nameen: 'UMBRELLA/HAIRPIN',
    isSelect: false,
    pic: 'twiicon_sa_05',
    picq: 'sd_yukihi.png',
    normal: [{
      id: '06-yukihi-o-n-1',
      name: '藏针/含针',
      namejp: 'しこみばり / ふくみばり',
      baseType: 'normal',
      types: ['attack'],
      range: '4-6',
      rangeOpened: '0-2',
      damage: '3/1',
      damageOpened: '1/2',
      text: '',
      textjp: ''
    },
    {
      id: '06-yukihi-o-n-2',
      name: '预演/猫骗',
      namejp: 'しこみび / ねこだまし',
      baseType: 'normal',
      types: ['attack'],
      range: '5-6',
      rangeOpened: '0-2',
      damage: '1/1',
      damageOpened: '1/1',
      text: '闭伞：【攻击后】将此牌置入你的手牌，进行一次伞的开合操作。 \n开伞：（无）',
      textjp: '閉；【攻撃後】このカードを手札に戻し、傘の開閉を行う。\n開；无'
    },
    {
      id: '06-yukihi-o-n-3',
      name: '拒/引',
      namejp: 'ふりはらい / たぐりよせ',
      baseType: 'normal',
      types: ['attack'],
      range: '2-5',
      rangeOpened: '0-2',
      damage: '1/1',
      damageOpened: '1/1',
      text: '闭伞：【攻击后】距（1）⇔ 虚 \n开伞：【攻击后】距（2）→虚',
      textjp: '閉；【攻撃後】ダスト⇔間合：1\n開；【攻撃後】間合→ダスト：2'
    },
    {
      id: '06-yukihi-o-n-4',
      name: '挥舞/突刺',
      namejp: 'ふりまわし / つきさし',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '4-6',
      rangeOpened: '0-2',
      damage: '5/-',
      damageOpened: '-/2',
      text: '',
      textjp: ''
    },
    {
      id: '06-yukihi-o-n-5',
      name: '伞飞转',
      namejp: 'かさまわし',
      baseType: 'normal',
      types: ['action'],
      text: '（使用此牌没有任何效果）\n【常时】每当你进行伞的开合操作时，你可以从手牌中展示此牌。若如此做，则虚（1）→自装',
      textjp: '(このカードは使用しても効果はない) \n【常時】あなたが傘の開閉を行った時、このカードを手札から公開してもよい。そうした場合、 \nダスト→自オーラ：1'
    },
    {
      id: '06-yukihi-o-n-6',
      name: '闪回/潜进',
      namejp: 'ひきあし / もぐりこみ',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '闭伞：虚（1）→距 \n开伞：距（1）→虚',
      textjp: '閉；ダスト→間合：1\n開；間合→ダスト：1'
    },
    {
      id: '06-yukihi-o-n-7',
      name: '结缘',
      namejp: 'えんむすび',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '【展开时】距（1）→虚 \n【破弃时】虚（1）→距 \n【常时】若伞面处于开伞状态，则此牌效果中所有的箭头反向。',
      textjp: '【展開時】間合→ダスト：1 \n【破棄時】ダスト→間合：1 \n【常時】あなたの傘が開いているならば、このカードの矢印(→)は逆になる。'
    }],
    special: [{
      id: '06-yukihi-o-s-1',
      name: '纷扬如雪',
      namejp: 'はらりゆき',
      baseType: 'special',
      types: ['attack'],
      range: '4-5',
      rangeOpened: '0-2',
      damage: '3/1',
      damageOpened: '0/0',
      cost: '2',
      text: '闭伞：【攻击后】获得1点集中力。\n----\n【即再起】进行伞的开合操作。',
      textjp: '閉；【攻撃後】あなたは集中力を1得る。\n----\n【即再起】あなたが傘の開閉を行う。'
    },
    {
      id: '06-yukihi-o-s-2',
      name: '明灭如灯',
      namejp: 'ゆらりび',
      baseType: 'special',
      types: ['attack'],
      range: '4-6',
      rangeOpened: '0',
      damage: '0/0',
      damageOpened: '4/5',
      cost: '5',
      text: '',
      textjp: ''
    },
    {
      id: '06-yukihi-o-s-3',
      name: '无常其心',
      namejp: 'どろりうら',
      baseType: 'special',
      types: ['enhance', 'fullpower'],
      capacity: '7',
      cost: '3',
      text: '【展开中】你的雪灯的《攻击》牌攻击距离改为开伞时与闭伞时攻击距离的叠加。',
      textjp: '【展開中】あなたのユキヒの《攻撃》は傘を開いた状態と傘を閉じた状態両方の適正距離を持つ。'
    },
    {
      id: '06-yukihi-o-s-4',
      name: '复返其身',
      namejp: 'くるりみ',
      baseType: 'special',
      types: ['action', 'reaction'],
      cost: '1',
      text: '进行一次伞的开合操作。\n虚（1）→自装',
      textjp: '傘の開閉を行う。 \nダスト→自オーラ：1'
    }]
  },
  {
    name: '社交',
    namejp: '社交',
    nameen: 'SOCIETY',
    isSelect: false,
    pic: 'null.png',
    picq: 'sd_yukihi_a1.png',
    changenormal: [{
      changeIndex: '2',
      id: '06-yukihi-a1-n-2',
      name: '声援/恫吓',
      namejp: 'ちからぞえ / おどしつけ',
      baseType: 'normal',
      types: ['attack'],
      range: '3-5',
      rangeOpened: '1-2',
      damage: '2/1',
      damageOpened: '1/2',
      text: '闭伞：【常时】若你展开中的《付与》牌上樱花结晶的数目之和大于等于4，则此攻击获得+0/+1。\n开伞：【常时】若你展开中的《付与》牌上樱花结晶的数目之和大于等于4，则此攻击获得+1/+0。',
      textjp: '閉；【常時】あなたの付与札に合計4つ以上の桜花結晶があるならば、この《攻撃》は+0/+1となる。\n開；【常時】あなたの付与札に合計4つ以上の桜花結晶があるならば、この《攻撃》は+1/+0となる。'
    },
    {
      changeIndex: '4',
      id: '06-yukihi-a1-n-4',
      name: '纬丝/经纱',
      namejp: 'よこいと / たていと',
      baseType: 'normal',
      types: ['attack'],
      range: '2-8',
      rangeOpened: '0-4',
      damage: '1/1',
      damageOpened: '0/0',
      text: '闭伞：【攻击后】本回合内你的下一次其他女神的攻击获得距离扩大（近1、远1）。将此牌置于你的牌库底。\n开伞：【攻击后】若本回合内你没有使用过其他牌，则你可以从弃牌区中使用1张其他女神的不具《全力》副类别的牌。',
      textjp: '閉；【攻撃後】このターンにあなたが次に行う他のメガミによる《攻撃》は距離拡大（遠1）と距離拡大（近1）を得る。このカードを山札の底に置く。\n開；【攻撃後】このターン中にあなたが他のカードを使用していないならば、あなたの捨て札にある他のメガミの《全力》でないカード1枚を使用する。'
    }],
    changespecial: [{
      changeIndex: '2',
      id: '06-yukihi-a1-s-2',
      name: '翩然如织',
      namejp: 'ひらりおり',
      baseType: 'special',
      types: ['enhance'],
      capacity: '1',
      cost: '4',
      text: '闭伞：【展开中】你的回合内，每当你第一次使用的其他女神的通常牌时，该牌结算完毕后你可以获得1点集中力，并将虚中的3个樱花结晶移至此牌上。\n开伞：【展开中】你的准备阶段开始时，进行一次“攻击距离0-5 伤害2/2”的攻击。',
      textjp: '閉；【展開中】あなたが他のメガミの通常札をあなたの各ターンに初めて使用した時、その解決後にあなたは集中力を1得て、ダストからこのカードの上に桜花結晶を3つ置いてもよい。\n開；【展開中】あなたの開始フェイズの開始時に攻撃『適正距離0-5、2/2』を行う。'
    }]
  }]
},
{
  name: 'SHINRA 森罗',
  namejp: 'シンラ',
  nameen: 'SHINRA',
  desc: '计略～你可以秘密地准备两种计略之一。当你实行当前计略时，根据你准备的计略执行对应的效果，再秘密地准备下一个计略。（最初的计略必须是「神算」）',
  descjp: '計略～2種類の計略どちらかを秘密裏に準備しておく。計略の実行時には準備されていた効果を解決し、次の計略を再び秘密裏に準備する。（最初の計略は必ず「神算」である）',
  // girlInfo: '身高：167cm\n喜欢的东西：論破、謀、スイーツ\n<b>--物語--</b>\n「謀は三手先を読むもの。その程度はできますよね？」\nシンラは社会学と弁論を象徴する知恵者であり、いくつかの秘密結社を通してこの世界を裏から操る謀略者でもあります。メガミとしては珍しいことに組織を愛し、大きな野望のためにそれを活用するのです。彼女は自らの価値観ゆえに今の桜降る代には不満を持っているようで、世界を変えるための謀を水面下で進めているようです。\n性格は極めて悪質であり、弁舌にて相手をやり込める事を何よりも好みます。特に、ある程度に頭が回る者を論破するのは彼女にとって最高の愉悦のようです。腹黒さにおいて、彼女の右に出るものはいないでしょう。',
  // girlInfojp: '身長：167cm\n好きなもの：論破、謀、スイーツ\n<b>--物語--</b>\n「謀は三手先を読むもの。その程度はできますよね？」\nシンラは社会学と弁論を象徴する知恵者であり、いくつかの秘密結社を通してこの世界を裏から操る謀略者でもあります。メガミとしては珍しいことに組織を愛し、大きな野望のためにそれを活用するのです。彼女は自らの価値観ゆえに今の桜降る代には不満を持っているようで、世界を変えるための謀を水面下で進めているようです。\n性格は極めて悪質であり、弁舌にて相手をやり込める事を何よりも好みます。特に、ある程度に頭が回る者を論破するのは彼女にとって最高の愉悦のようです。腹黒さにおいて、彼女の右に出るものはいないでしょう。',
  list: [{
    name: '书',
    namejp: '書',
    nameen: 'SCROLL',
    isSelect: false,
    pic: 'twiicon_sa_06.jpg',
    picq: 'sd_shinra.png',
    normal: [{
      id: '07-shinra-o-n-1',
      name: '立论',
      namejp: '立論',
      baseType: 'normal',
      types: ['attack'],
      range: '2-7',
      damage: '2/-',
      text: '【常时】若对手牌库的牌张数大于等于2，则此《攻击》不造成伤害，而改为盖伏对手牌库顶的2张牌。',
      textjp: '【常時】相手の山札に2枚以上のカードがあるならば、この《攻撃》はダメージを与える代わりに山札の上から2枚を伏せ札にする。'
    },
    {
      id: '07-shinra-o-n-2',
      name: '反论',
      namejp: '反論',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '2-7',
      damage: '1/-',
      text: '【攻击后】若被对应的《攻击》非王牌且对装伤害大于等于3，则打消该《攻击》的伤害。（不影响效果伤害）\n【攻击后】对手抓1张牌。',
      textjp: '【攻撃後】対応した切札でなく、オーラへのダメージが3以上である《攻撃》のダメージを打ち消す。 \n【攻撃後】相手はカードを1枚引く。'
    },
    {
      id: '07-shinra-o-n-3',
      name: '诡辩',
      namejp: '詭弁',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '3-8',
      damage: '-/1',
      text: '【攻击后】实行当前计略，准备下个计略。 \n神算：盖伏对手牌库顶的3张牌。 \n鬼谋：你可以从对手的弃牌中选择1张牌并使用。',
      textjp: '【攻撃後】計略を実行し、次の計略を準備する。 \n[神算] 相手の山札の上から3枚を伏せ札にする。 \n[鬼謀] 相手の捨て札にあるカードを1枚選び、それを使用してもよい。',
      textkururu: [{
        ctn: '【攻击后】实行当前计略，准备下个计略。'
      }, {
        if: '<i class="i-bean i-bean--plan-blue"></i>',
        ctn: '神算：盖伏对手牌库顶的3张牌。'
      }, {
        if: '<i class="i-bean i-bean--plan-red"></i>',
        ctn: '鬼谋：你可以从对手的弃牌中选择1张牌并使用。'
      }],
      textkururujp: [{
        ctn: '【攻撃後】計略を実行し、次の計略を準備する。'
      }, {
        if: '<i class="i-bean i-bean--plan-blue"></i>',
        ctn: '[神算] 相手の山札の上から3枚を伏せ札にする。'
      }, {
        if: '<i class="i-bean i-bean--plan-red"></i>',
        ctn: '[鬼謀] 相手の捨て札にあるカードを1枚選び、それを使用してもよい。'
      }]
    },
    {
      id: '07-shinra-o-n-4',
      name: '引用',
      namejp: '引用',
      baseType: 'normal',
      types: ['action'],
      text: '检视对手的手牌，你可以从中选择1张《攻击》牌。若如此做，则选择一项：\n1.使用所选择的牌；\n2.盖伏所选择的牌。\n若所选择的牌具有《全力》副类别，则结束当前阶段。',
      textjp: '相手の手札を見て、《攻撃》カードを1枚選んでもよい。そうした場合、そのカードを使用するか伏せ札にする。その後、そのカードが《全力》を持つならば現在のフェイズを終了する。'
    },
    {
      id: '07-shinra-o-n-5',
      name: '煽动',
      namejp: '煽動',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '实行当前计略，准备下个计略。\n神算：虚（1）→距\n鬼谋：距（1）→敌装',
      textjp: '計略を実行し、次の計略を準備する。 \n[神算] ダスト→間合：1 \n[鬼謀] 間合→相オーラ：1',
      textkururu: [{
        ctn: '实行当前计略，准备下个计略。'
      }, {
        if: '<i class="i-bean i-bean--plan-blue"></i>',
        ctn: '神算：虚（1）→距'
      }, {
        if: '<i class="i-bean i-bean--plan-red"></i>',
        ctn: '鬼谋：距（1）→敌装'
      }],
      textkururujp: [{
        ctn: '計略を実行し、次の計略を準備する。'
      }, {
        if: '<i class="i-bean i-bean--plan-blue"></i>',
        ctn: '[神算] ダスト→間合：1'
      }, {
        if: '<i class="i-bean i-bean--plan-red"></i>',
        ctn: '[鬼謀] 間合→相オーラ：1'
      }]
    },
    {
      id: '07-shinra-o-n-6',
      name: '壮语',
      namejp: '壮語',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '【破弃时】实行当前计略，准备下个计略。\n神算：你获得1点集中力，将此牌置于你的牌库顶。\n鬼谋：若对手的手牌张数小于等于1，则对手畏缩，对手抓3张牌，然后从手牌中弃置2张牌。',
      textjp: '【破棄時】計略を実行し、次の計略を準備する。 \n[神算] あなたは集中力を1得て、このカードを山札の一番上に置く。 \n[鬼謀] 相手の手札が1枚以下ならば、相手を畏縮させ、相手はカードを3枚引き、相手は手札を2枚捨て札にする。',
      textkururu: [{
        ctn: '【破弃时】实行当前计略，准备下个计略。'
      }, {
        if: '<i class="i-bean i-bean--plan-blue"></i>',
        ctn: '神算：你获得1点集中力，将此牌置于你的牌库顶。'
      }, {
        if: '<i class="i-bean i-bean--plan-red"></i>',
        ctn: '鬼谋：若对手的手牌张数小于等于1，则对手畏缩，对手抓3张牌，然后从手牌中弃置2张牌。'
      }],
      textkururujp: [{
        ctn: '【破棄時】計略を実行し、次の計略を準備する。'
      }, {
        if: '<i class="i-bean i-bean--plan-blue"></i>',
        ctn: '[神算] あなたは集中力を1得て、このカードを山札の一番上に置く。'
      }, {
        if: '<i class="i-bean i-bean--plan-red"></i>',
        ctn: '[鬼謀] 相手の手札が1枚以下ならば、相手を畏縮させ、相手はカードを3枚引き、相手は手札を2枚捨て札にする。'
      }]
    },
    {
      id: '07-shinra-o-n-7',
      name: '论破',
      namejp: '論破',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '4',
      text: '【展开时】从对手的弃牌中选择1张牌，封印于此牌下。  \n【破弃时】将此牌所封印的所有牌置入对手的弃牌区。',
      textjp: '【展開時】相手の捨て札にあるカード1枚を選び、このカードの下に封印する。 \n【破棄時】このカードに封印されたカードを相手の捨て札に戻す。'
    }],
    special: [{
      id: '07-shinra-o-s-1',
      name: '完全论破',
      namejp: '完全論破',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '从对手的弃牌中选择1张牌，封印于此牌下（本局游戏不再归还）。',
      textjp: '相手の捨て札にあるカード1枚を選び、このカードの下に封印する。 \n(ゲーム中に戻ることはない)'
    },
    {
      id: '07-shinra-o-s-2',
      name: '诸式理解',
      namejp: '皆式理解',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '实行当前计略，准备下个计略。\n神算：从你的弃牌与处于使用后状态的王牌中选择1张《付与》牌使用，而不需支付自气中的樱花结晶。若所选择的牌具有《全力》副类别，则结束当前阶段。\n鬼谋：从对手的非王牌的展开中的《付与》牌中选择1张，将其上所有樱花结晶移至虚。',
      textjp: '計略を実行し、次の計略を準備する。 \n[神算] あなたの捨て札または使用済の切札から、消費を支払わずに《付与》カード1枚を使用する。そのカードが《全力》ならば現在のフェイズを終了する。 \n[鬼謀] 切札でない相手の付与札を1枚選ぶ。その上の桜花結晶全てをダストに送る。',
      textkururu: [{
        ctn: '实行当前计略，准备下个计略。'
      }, {
        if: '<i class="i-bean i-bean--plan-blue"></i>',
        ctn: '神算：从你的弃牌与处于使用后状态的王牌中选择1张《付与》牌使用，而不需支付自气中的樱花结晶。若所选择的牌具有《全力》副类别，则结束当前阶段。'
      }, {
        if: '<i class="i-bean i-bean--plan-red"></i>',
        ctn: '鬼谋：从对手的非王牌的展开中的《付与》牌中选择1张，将其上所有樱花结晶移至虚。'
      }],
      textkururujp: [{
        ctn: '計略を実行し、次の計略を準備する。'
      }, {
        if: '<i class="i-bean i-bean--plan-blue"></i>',
        ctn: '[神算] あなたの捨て札または使用済の切札から、消費を支払わずに《付与》カード1枚を使用する。そのカードが《全力》ならば現在のフェイズを終了する。'
      }, {
        if: '<i class="i-bean i-bean--plan-red"></i>',
        ctn: '[鬼謀] 切札でない相手の付与札を1枚選ぶ。その上の桜花結晶全てをダストに送る。'
      }]
    },
    {
      id: '07-shinra-o-s-3',
      name: '天地反驳',
      namejp: '天地反駁',
      baseType: 'special',
      types: ['enhance', 'fullpower'],
      capacity: '5',
      cost: '2',
      text: '【展开中】交换你的《攻击》对装和命的伤害（交换优先于修正结算）。',
      textjp: '【展開中】あなたの《攻撃》のオーラへのダメージとライフへのダメージを入れ替える。 \n（ダメージの入れ替えは、ダメージの増減より先に適用される）'
    },
    {
      id: '07-shinra-o-s-4',
      name: '森罗判证',
      namejp: '森羅判証',
      baseType: 'special',
      types: ['enhance'],
      capacity: '6',
      cost: '6',
      text: '【展开时】虚（2）→自命\n【展开中】每当你的其他《付与》牌破弃时，对敌命造成1点伤害。\n【破弃时】你输掉本局游戏。',
      textjp: '【展開時】ダスト→自ライフ：2 \n【展開中】あなたの他の付与札が破棄された時、相手のライフに1ダメージを与える。 \n【破棄時】あなたは敗北する。'
    }]
  },
  {
    name: '经',
    namejp: '経',
    nameen: 'CLASSICS',
    isSelect: false,
    pic: 'twiicon_sa_24.jpg',
    picq: 'sd_shinra_a1.png',
    changenormal: [{
      changeIndex: '2',
      id: '07-shinra-a1-n-2',
      name: '真言',
      namejp: '真言',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '若此牌作为对应使用，则实行当前计略，准备下个计略。\n神算：若对手牌库的牌张数大于等于3，则对敌命造成1点伤害。\n鬼谋：若对手牌库的牌张数小于等于3，则对敌装造成2点伤害。',
      textjp: 'このカードを対応で使用したならば、計略を実行し、次の計略を準備する。 \n[神算] 相手の山札が3枚以上ならば、相手のライフに1ダメージを与える。 \n[鬼謀] 相手の山札が3枚以下ならば、相手のオーラに2ダメージを与える。',
      textkururu: [{
        ctn: '若此牌作为对应使用，则实行当前计略，准备下个计略。'
      }, {
        if: '<i class="i-bean i-bean--plan-blue"></i>',
        ctn: '神算：若对手牌库的牌张数大于等于3，则对敌命造成1点伤害。'
      }, {
        if: '<i class="i-bean i-bean--plan-red"></i>',
        ctn: '鬼谋：若对手牌库的牌张数小于等于3，则对敌装造成2点伤害。'
      }],
      textkururujp: [{
        ctn: 'このカードを対応で使用したならば、計略を実行し、次の計略を準備する。'
      }, {
        if: '<i class="i-bean i-bean--plan-blue"></i>',
        ctn: '[神算] 相手の山札が3枚以上ならば、相手のライフに1ダメージを与える。'
      }, {
        if: '<i class="i-bean i-bean--plan-red"></i>',
        ctn: '[鬼謀] 相手の山札が3枚以下ならば、相手のオーラに2ダメージを与える。'
      }]
    },
    {
      changeIndex: '7',
      id: '07-shinra-a1-n-7',
      name: '使徒',
      namejp: '使徒',
      baseType: 'normal',
      types: ['enhance', 'fullpower'],
      capacity: '2',
      text: '【展开时】你可以支付1点集中力，并重新准备计略。\n【展开时/破弃时】实行当前计略，准备下个计略。\n神算：进行一次“攻击距离1,3,5 伤害2/2 不可被闪避 【攻击后】对手从手牌中选择1张牌置于牌库底。”的攻击。\n鬼谋：进行一次“攻击距离0,2,4 伤害2/2 不可被闪避 【攻击后】弃置对手牌库顶的1张牌，然后盖伏对手牌库顶的1张牌。”的攻击。',
      textjp: '【展開時】集中力を1支払い、計略を準備してもよい。\n【展開時/破棄時】計略を実行し、次の計略を準備する。\n[神算] 攻撃『適正距離1,3,5、2/2、不可避、【攻撃後】相手は相手の手札から1枚を選び、山札の底に置く』を行う。\n[鬼謀] 攻撃『適正距離0,2,4、2/2、不可避、【攻撃後】相手の山札の上から1枚を捨て札にして、1枚を伏せ札にする』を行う。',
      textkururu: [{
        ctn: '【展开时】你可以支付1点集中力，并重新准备计略。\n【展开时/破弃时】实行当前计略，准备下个计略。'
      }, {
        if: '<i class="i-bean i-bean--plan-blue"></i>',
        ctn: '神算：进行一次“攻击距离1,3,5 伤害2/2 不可被闪避 【攻击后】对手从手牌中选择1张牌置于牌库底。”的攻击。'
      }, {
        if: '<i class="i-bean i-bean--plan-red"></i>',
        ctn: '鬼谋：进行一次“攻击距离0,2,4 伤害2/2 不可被闪避 【攻击后】弃置对手牌库顶的1张牌，然后盖伏对手牌库顶的1张牌。”的攻击。'
      }],
      textkururujp: [{
        ctn: '【展開時】集中力を1支払い、計略を準備してもよい。'
      }, {
        ctn: '【展開時/破棄時】計略を実行し、次の計略を準備する。'
      }, {
        if: '<i class="i-bean i-bean--plan-blue"></i>',
        ctn: '[神算] 攻撃『適正距離1,3,5、2/2、不可避、【攻撃後】相手は相手の手札から1枚を選び、山札の底に置く』を行う。'
      }, {
        if: '<i class="i-bean i-bean--plan-red"></i>',
        ctn: '[鬼謀] 攻撃『適正距離0,2,4、2/2、不可避、【攻撃後】相手の山札の上から1枚を捨て札にして、1枚を伏せ札にする』を行う。'
      }]
    }],
    changespecial: [{
      changeIndex: '3',
      id: '07-shinra-a1-s-3',
      name: '全知圣典',
      namejp: '全知経典',
      baseType: 'special',
      types: ['attack', 'fullpower'],
      range: '0-5',
      damage: '2/2',
      cost: '4',
      text: '不可被对应\n【攻击后】将任意张手牌和盖牌置入弃牌区。然后从弃牌中选择任意数量的计略，以任意顺序实行。所选择的计略全部结算完毕后，准备下个计略。\n（如果此前准备的计略是神算那么实行的计略全部都是神算）',
      textjp: '対応不可\n【攻撃後】あなたは手札と伏せ札を好きな枚数だけ捨て札にする。その後、捨て札にあるカードから任意の数の計略を、任意の順で実行する。それら全てを解决し終えたら、次の計略を準備する。（神算を選んでいたら全て神算で実行する）'
    }]
  }]
},
{
  name: 'HAGANE 破钟',
  namejp: 'ハガネ',
  nameen: 'HAGANE',
  desc: '远心～仅当同时满足以下2个条件时，可以使用具远心关键字的牌：<br>1.当前距离比回合开始时的距离远2及以上；<br>2.本回合内你没有进行过《攻击》。',
  descjp: '遠心～以下の2つを共に満たしている場合のみ、遠心を持つカードは使用できる。<br>1.現在の間合がターン開始時の間合から2以上離れている。<br>2.このターン中にあなたが《攻撃》を行ってない。',
  // girlInfo: '身高：142cm\n喜欢的东西：体を動かすこと、登山、鍛冶\n<b>--物語--</b>\n「それじゃすごいの、いっくよー！」\nハガネは大地を象徴するメガミです。その領分には金属も含まれており、鉄槌を通して金属に権能を込め、鍛え上げることも可能です。彼女は名工であり、メガミの象徴武器の中には彼女の手で作られたものもいくつかあります。\n天真爛漫とした子供らしい気質を持ち、自由で活発、多くの物事に興味を示します。さらに極度の右脳派で、勘の鋭さも相当のもの。それゆえに興味に向けていつでも全力で突き進みます。そんな彼女を心配して、何柱かのメガミは保護者のような振る舞いを見せているようです。',
  // girlInfojp: '身長：142cm\n好きなもの：体を動かすこと、登山、鍛冶\n<b>--物語--</b>\n「それじゃすごいの、いっくよー！」\nハガネは大地を象徴するメガミです。その領分には金属も含まれており、鉄槌を通して金属に権能を込め、鍛え上げることも可能です。彼女は名工であり、メガミの象徴武器の中には彼女の手で作られたものもいくつかあります。\n天真爛漫とした子供らしい気質を持ち、自由で活発、多くの物事に興味を示します。さらに極度の右脳派で、勘の鋭さも相当のもの。それゆえに興味に向けていつでも全力で突き進みます。そんな彼女を心配して、何柱かのメガミは保護者のような振る舞いを見せているようです。',
  list: [{
    name: '锤',
    namejp: '鎚',
    nameen: 'HAMMER',
    isSelect: false,
    pic: 'twiicon_sa_08.jpg',
    picq: 'sd_hagane.png',
    normal: [{
      id: '08-hagane-o-n-1',
      name: '远心击',
      namejp: '遠心撃',
      baseType: 'normal',
      types: ['attack'],
      range: '2-6',
      damage: '5/3',
      text: '远心 \n【攻击后】若现在是你的回合，则盖伏你和对手的所有手牌，你的集中力变为0，结束当前阶段。',
      textjp: '遠心 \n【攻撃後】現在のターンがあなたのターンならば、あなたと相手の手札を全て伏せ札にし、あなたの集中力は0になり、現在のフェイズを終了する。'
    },
    {
      id: '08-hagane-o-n-2',
      name: '砂风尘',
      namejp: '砂風塵',
      baseType: 'normal',
      types: ['attack'],
      range: '0-6',
      damage: '1/-',
      text: '【攻击后】若当前距离与本回合开始时距离之差的绝对值大于等于2，则对手从手牌中随机弃1张牌。',
      textjp: '【攻撃後】現在の間合がターン開始時の間合から2以上変化しているならば、相手の手札を1枚無作為に選び、それを捨て札にする。'
    },
    {
      id: '08-hagane-o-n-3',
      name: '大地碎击',
      namejp: '大地砕き',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '0-3',
      damage: '2/-',
      text: '不可被对应 \n【攻击后】对手集中力变为0，对手畏缩。',
      textjp: '対応不可 \n【攻撃後】相手の集中力は0になり、相手を畏縮させる。'
    },
    {
      id: '08-hagane-o-n-4',
      name: '超反动',
      namejp: '超反動',
      baseType: 'normal',
      types: ['action'],
      text: '根据当前距离结算以下效果：\n大于等于5……距（1）→自气\n小于等于4……敌气（1）→距',
      textjp: '現在の間合が5以上ならば、間合→自フレア：1\n現在の間合が4以下ならば、相フレア→間合：1'
    },
    {
      id: '08-hagane-o-n-5',
      name: '圆舞链',
      namejp: '円舞錬',
      baseType: 'normal',
      types: ['action'],
      text: '远心 \n若敌气中的樱花结晶的数目大于等于3，则敌气（2）→自装',
      textjp: '遠心 \n相手のフレアが3以上ならば、相フレア→自オーラ：2'
    },
    {
      id: '08-hagane-o-n-6',
      name: '大鸣钟',
      namejp: '鐘鳴らし',
      baseType: 'normal',
      types: ['action'],
      text: '远心\n选择1项。本回合内你进行的下一次《攻击》获得所选择的效果：\n1.+2/+1；\n2.不可被对应与距离扩大（远1）。',
      textjp: '遠心\n以下から1つを選ぶ。このターンにあなたが次に行う《攻撃》にそれを与える。\n・+2/+1\n・対応不可と距離拡大（遠1）'
    },
    {
      id: '08-hagane-o-n-7',
      name: '引力场',
      namejp: '引力場',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '全力化：【常时】因此牌上的箭头效果移动的樱花结晶的数目增大1。\n【展开时】距（1）→自装\n【展开中】达人距离减小1。',
      textjp: '全力化:【常時】このカードの持つ矢印で動く桜花結晶は1つ多くなる。\n【展開時】間合→自オーラ：1\n【展開中】達人の間合は1小さくなる。'
    }],
    special: [{
      id: '08-hagane-o-s-1',
      name: '大天空·破限',
      namejp: '大天空クラッシュ',
      baseType: 'special',
      types: ['attack'],
      range: '0-10',
      damage: 'X/Y',
      cost: '4',
      text: '超克 \n【常时】X为当前距离与本回合开始时距离之差的绝对值，Y为X的一半（向上取整）。',
      textjp: '超克 \n【常時】Xは現在の間合がターン開始時の間合からどれだけ変化しているかに等しい。YはXの半分(切り上げ)に等しい。'
    },
    {
      id: '08-hagane-o-s-2',
      name: '大破钟·断限',
      namejp: '大破鐘メガロベル',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '若你的其他王牌均处于使用后状态，则虚（2）→自命',
      textjp: 'あなたの他の切札が全て使用済ならば、ダスト→自ライフ：2'
    },
    {
      id: '08-hagane-o-s-3',
      name: '大重力·无限',
      namejp: '大重力アトラクト',
      baseType: 'special',
      types: ['action'],
      cost: '5',
      text: '距（3）→自气\n----\n【再起】本回合内你使用了具远心关键字的牌，且没有使用此牌。',
      textjp: '間合→自フレア：3 \n----\n【再起】このターンにあなたが遠心を持つカードを使用しており、このカードを使用していない。'
    },
    {
      id: '08-hagane-o-s-4',
      name: '大山脉·转限',
      namejp: '大山脈リスペクト',
      baseType: 'special',
      types: ['action'],
      cost: '4',
      text: '远心 \n从你的弃牌中选择至多2张不具《全力》副类别的牌，以任意顺序使用它们。',
      textjp: '遠心 \nあなたの捨て札にある異なる《全力》でないカードを2枚まで選び、任意の順番で使用する。'
    }]
  },
  {
    name: '铁砧',
    namejp: '金床',
    isSelect: false,
    pic: 'twiicon_sa_36.jpg',
    picq: 'sd_hagane_a1.png',
    changenormal: [{
      changeIndex: '1',
      id: '08-hagane-a1-n-1',
      name: '炉火',
      namejp: '爐火',
      baseType: 'normal',
      types: ['action'],
      text: '若当前距离大于等于3，则\n距（1）→自气\n距（1）→敌气',
      textjp: '現在の間合が3以上ならば、\n間合→自フレア：1\n間合→相フレア：1\n'
    }, {
      changeIndex: '2',
      id: '08-hagane-a1-n-2',
      name: '旋回起',
      namejp: '旋回起',
      baseType: 'normal',
      types: ['action'],
      text: '若当前距离与本回合开始时距离之差的绝对值大于等于2，则你抓1张牌并获得1点集中力。',
      textjp: '現在の間合がターン開始時の間合から2以上変化しているならば、カードを1枚引き、あなたは集中力を1得る。'
    }],
    changespecial: [{
      changeIndex: '1',
      id: '08-hagane-a1-s-1',
      name: '大炼成·原限',
      namejp: '大錬成マテリアル',
      baseType: 'special',
      types: ['action'],
      cost: '1',
      text: '终端\n若此牌为你的牌，则结算以下效果。\n若铁砧中有牌，则将1个樱花结晶从虚移至铁砧上。若铁砧中没有牌，则你可以从手牌中选择1张其他女神的《攻击》牌置于铁砧中。\n将1张『炼成攻击』从追加区移至你的牌库底。\n----\n【再起】本回合内你使用了『炼成攻击』。',
      textjp: '終端\nこのカードがあなたのカードならば、以下の効果を解決する。\n金床にカードがあるならばダストから金床に桜花結晶を1つ置く。金床にカードがないならば、手札から他のメガミの《攻撃》カ一ドを1枚選び金床に置いてもよい。\nあなたの追加札から「錬成攻撃」を山札の底に1枚置く。\n----\n【再起】このターンにあなたが「錬成攻撃」を使用している。'
    }],
    changeExtra: [{
      id: '08-hagane-a1-s-1-ex1',
      name: '炼成攻击',
      namejp: '錬成攻撃',
      baseType: 'normal',
      extraFrom: '08-hagane-a1-s-1',
      types: ['variable'],
      text: '【常时】此牌为铁砧上的牌之复制，但其名称、使用者与此效果保持不变。若此牌在手牌中，则此牌不可被对手的效果选择为目标。若此牌不在手牌与盖牌区中，则无法因重铸牌库以外的效果移动至牌库或手牌。此牌不可被封印。根据铁砧上的樱花结晶的数目，此牌获得以下效果。\n大于等于0……+1/+0和距离扩大（远1）\n大于等于1……+1/+1和距离扩大（远1）\n大于等于2……+1/+1、距离扩大（远1）和不可被打消。',
      textjp: '【常時】このカードは名前、使用者とこの効果を除き金床にあるカードの複製になる。このカードが手札にあるなら相手の効果で選べず、手札か伏せ札にないなら再構成以外で山札に戻らない。このカードは封印されない。金床にある桜花結晶の個数に応じて以下の効果を得る。\n0以上……+1/+0となり、距離拡大（遠1）を得る。\n1以上……+1/+1となり、距離拡大（遠1）を得る。\n2以上……+1/+1となり、距離拡大（遠1）を得る、打ち消されない。'
    }]
  }]
},
{
  name: 'CHIKAGE 千影',
  namejp: 'チカゲ',
  nameen: 'CHIKAGE',
  desc: '毒袋～毒袋中有5张牌（「麻痹毒」、「迟缓毒」、「幻觉毒」和2张「灭灯毒」）。',
  descjp: '毒袋～毒袋に5枚のカード（「麻痺毒」「幻覚毒」「遅緩毒」「滅灯毒」2枚）を持つ。',
  // girlInfo: '身高：153cm\n喜欢的东西：暗くて狭いところ、身の安全、お茶\n<b>--物語--</b>\n「千影は死にたくない。それだけ、ですよ……」\nユリナやサイネと同じく、チカゲももとは人間、闇昏千影でした。彼女も２０年前の一大事で誕生したメガミの一柱であり、現在の彼女は毒を中心とした薬効を権能とし、生存と致死を象徴しています。\n人としては忍の里の生まれで、かつては忍として生きていました。しかしある任務で死の危険に瀕し、死を極度に恐れるようになります。それゆえに死を象徴するメガミ・ホロビの力を求め、彼女と歪な絆を結ぶに至ります。その絆は２０年前にも大きな影響を与え、それゆえに彼女はメガミへと至り、その権能が形作られたのです。',
  // girlInfojp: '身長：153cm\n好きなもの：暗くて狭いところ、身の安全、お茶\n<b>--物語--</b>\n「千影は死にたくない。それだけ、ですよ……」\nユリナやサイネと同じく、チカゲももとは人間、闇昏千影でした。彼女も２０年前の一大事で誕生したメガミの一柱であり、現在の彼女は毒を中心とした薬効を権能とし、生存と致死を象徴しています。\n人としては忍の里の生まれで、かつては忍として生きていました。しかしある任務で死の危険に瀕し、死を極度に恐れるようになります。それゆえに死を象徴するメガミ・ホロビの力を求め、彼女と歪な絆を結ぶに至ります。その絆は２０年前にも大きな影響を与え、それゆえに彼女はメガミへと至り、その権能が形作られたのです。',
  list: [{
    name: '毒',
    namejp: '毒',
    nameen: 'POISON',
    isSelect: false,
    pic: 'twiicon_sa_09.jpg',
    picq: 'sd_chikage.png',
    normal: [{
      id: '09-chikage-o-n-1',
      name: '飞苦无',
      namejp: '飛苦無',
      baseType: 'normal',
      types: ['attack'],
      range: '4-5',
      damage: '2/2',
      text: '',
      textjp: ''
    },
    {
      id: '09-chikage-o-n-2',
      name: '毒针',
      namejp: '毒針',
      baseType: 'normal',
      types: ['attack'],
      range: '4',
      damage: '1/1',
      text: '【攻击后】从毒袋中选择『麻痹毒』『幻觉毒』『迟缓毒』中的1张，将其置于对手的牌库顶。',
      textjp: '【攻撃後】毒袋から「麻痺毒」「幻覚毒」「弛緩毒」のいずれか1枚を選び、そのカードを相手の山札の一番上に置く。'
    },
    {
      id: '09-chikage-o-n-3',
      name: '遁术',
      namejp: '遁術',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '1-3',
      damage: '1/-',
      text: '【攻击后】自装（1）→距，虚（1）→距\n【攻击后】本回合内对手不能执行基本动作《前进》。',
      textjp: '【攻撃後】自オーラ→間合：1、ダスト→間合：1\n【攻撃後】このターン中、相手は基本動作《前進》を行えない。'
    },
    {
      id: '09-chikage-o-n-4',
      name: '暗器',
      namejp: '暗器',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '1-5',
      damage: '1/1',
      text: '全力化：【常时】此《攻击》获得+1/+2。\n全力化：【攻击后】对手查看你的毒袋，然后从中选择1张牌加入手牌。\n【攻击后】若对手的手牌中有毒牌，则执行1次基本动作《装附》。',
      textjp: '全力化:【常時】このこの《攻撃》は+1/+2となる。\n全力化:【攻撃後】相手はあなたの毒袋を見てその中から1枚を選び、それを相手の手札に加える。\n【攻撃後】相手の手札に毒カードかあるならば、基本動作《纏い》を1回行う。'
    },
    {
      id: '09-chikage-o-n-5',
      name: '毒雾',
      namejp: '毒霧',
      baseType: 'normal',
      types: ['action'],
      text: '从毒袋中选择『麻痹毒』『幻觉毒』『迟缓毒』中的1张，将其置入对手的手牌。',
      textjp: '毒袋から「麻痺毒」「幻覚毒」「弛緩毒」のいずれか1枚を選び、そのカードを相手の手札に加える。'
    },
    {
      id: '09-chikage-o-n-6',
      name: '蹑足',
      namejp: '抜き足',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '4',
      text: '破绽\n【展开中】当前距离减小2（距离不会为负）。',
      textjp: '隙 \n【展開中】現在の間合は2減少する。 \n(間合は0未満にならない)'
    },
    {
      id: '09-chikage-o-n-7',
      name: '泥泞',
      namejp: '泥濘',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '【展开中】对手不能执行基本动作《后退》和《离脱》。',
      textjp: '【展開中】相手は基本動作《後退》と《離脱》を行えない。'
    }],
    special: [{
      id: '09-chikage-o-s-1',
      name: '魂毒渐灭灯',
      namejp: '滅灯の魂毒',
      baseType: 'special',
      types: ['action'],
      cost: '3',
      text: '从毒袋中选择1张『灭灯毒』，将其置于对手的牌库顶。',
      textjp: '毒袋から「滅灯毒」を1枚を選び、そのカードを相手の山札の一番上に置く。'
    },
    {
      id: '09-chikage-o-s-2',
      name: '缠毒揭叛旗',
      namejp: '叛旗の纏毒',
      baseType: 'special',
      types: ['enhance', 'reaction'],
      capacity: '5',
      cost: '2',
      text: '【展开中】打消对手进行的伤害中含有“-”的所有《攻击》。',
      textjp: '【展開中】相手によるオーラへのダメージかライフへのダメージのどちらかが「-」である《攻撃》は打ち消される。'
    },
    {
      id: '09-chikage-o-s-3',
      name: '霞毒空流转',
      namejp: '流転の霞毒',
      baseType: 'special',
      types: ['attack'],
      range: '3-7',
      damage: '1/2',
      cost: '1',
      text: '【再起】对手的手牌张数大于等于2。',
      textjp: '【再起】相手の手札が2枚以上ある。'
    },
    {
      id: '09-chikage-o-s-4',
      name: '暗昏千影的信条',
      namejp: '闇昏千影の生きる道',
      baseType: 'special',
      types: ['enhance', 'fullpower'],
      capacity: '4',
      cost: '5',
      text: '【展开中】当自命受到大于等于1点的伤害时，将此牌上的所有樱花结晶移至虚，并将其变为未使用状态（不结算破弃时效果）。\n【破弃时】若你的其它王牌均处于使用后状态，则你赢得本局游戏。',
      textjp: '【展開中】あなたが1以上のライフへのダメージを受けた時、このカードの上の桜花結晶は全てダストに送られ、このカードは未使用に戻る。 \n(破棄時効果は失敗する) \n【破棄時】あなたの他の切札が全て使用済ならば、あなたは勝利する。'
    }],
    poison: [{
      id: '09-chikage-o-p-1',
      name: '麻痹毒',
      namejp: '麻痺毒',
      baseType: 'poison',
      types: ['action'],
      text: '【常时】若本回合内你执行过基本动作，则你不能使用此牌。\n将此牌置入对手的毒袋。结束当前阶段。',
      textjp: '毒（このカードは伏せ札にできない） \n【常時】このターン中にあなたが基本動作を行ったならば、このカードは使用できない。 \nこのカードを相手の毒袋に戻す。その後、このフェイズを終了する。'
    },
    {
      id: '09-chikage-o-p-2',
      name: '幻觉毒',
      namejp: '幻覚毒',
      baseType: 'poison',
      types: ['action'],
      text: '将此牌置入对手的毒袋。自气（2）→虚',
      textjp: '毒（このカードは伏せ札にできない） \nこのカードを相手の毒袋に戻す。 \n自フレア→ダスト：2'
    },
    {
      id: '09-chikage-o-p-3',
      name: '迟缓毒',
      namejp: '弛緩毒',
      baseType: 'poison',
      types: ['enhance'],
      capacity: '3',
      text: '【展开中】你不能使用《攻击》牌。 \n【破弃时】将此牌置入对手的毒袋。',
      textjp: '毒（このカードは伏せ札にできない） \n【展開中】あなたは《攻撃》カードを使用できない。 \n【破棄時】このカードを相手の毒袋に戻す。'
    },
    {
      id: '09-chikage-o-p-4',
      name: '灭灯毒',
      namejp: '滅灯毒',
      baseType: 'poison',
      types: ['action'],
      text: '自装（3）→虚',
      textjp: '毒（このカードは伏せ札にできない） \n自オーラ→ダスト：3'
    },
    {
      id: '09-chikage-o-p-4',
      name: '灭灯毒',
      namejp: '滅灯毒',
      baseType: 'poison',
      types: ['action'],
      text: '自装（3）→虚',
      textjp: '毒（このカードは伏せ札にできない） \n自オーラ→ダスト：3'
    }]
  },
  {
    name: '绊',
    namejp: '絆',
    nameen: 'KIZUNA',
    isSelect: false,
    pic: 'twiicon_sa_20.jpg',
    picq: 'sd_chikage_a1.png',
    changenormal: [{
      changeIndex: '5',
      id: '09-chikage-a1-n-5',
      name: '机关油纸伞',
      namejp: '仕掛け番傘',
      baseType: 'normal',
      types: ['attack'],
      range: '4',
      damage: '2/1',
      text: '不可被闪避\n【常时】若对手的手牌张数大于等于2，则此《攻击》获得距离扩大（近2、远2）。',
      textjp: '不可避 \n【常時】相手の手札が2枚以上あるならば、この《攻撃》は距離拡大(近2)と距離拡大(遠2)を得る。 \n(他に何もなければ、適正距離は2-6になる)'
    },
    {
      changeIndex: '6',
      id: '09-chikage-a1-n-6',
      name: '奋迅',
      namejp: '奮迅',
      baseType: 'normal',
      types: ['action'],
      text: '若对手的手牌张数大于等于2，则你获得1点集中力。\n距（1）⇔虚',
      textjp: '相手の手札が2枚以上あるならば、あなたは集中力を1得る。 \n間合⇔ダスト：1'
    }],
    changespecial: [{
      changeIndex: '4',
      id: '09-chikage-a1-s-4',
      name: '绊毒淀残渣',
      namejp: '残滓の絆毒',
      baseType: 'special',
      types: ['attack'],
      range: '0-1',
      damage: '4/X',
      cost: '4',
      text: '不可被对应（通常牌）\n【常时】X等于对手的手牌张数的2倍。',
      textjp: '対応不可（通常札）\n【常時】Xは相手の手札にあるカードの枚数の2倍に等しい。'
    }]
  }]
},
{
  name: 'KURURU 枢',
  namejp: 'クルル',
  nameen: 'KURURU',
  desc: '机巧～仅当完成机巧时结算相应的齿轮框内的效果。完成机巧需要你的与齿轮框上所示类别相符的牌正面朝上。<br><i class="i-bean i-bean--red"></i>=攻击&nbsp;<i class="i-bean i-bean--blue"></i>=行动&nbsp;<i class="i-bean i-bean--green"></i>=付与&nbsp;<i class="i-bean i-bean--purple"></i>=对应&nbsp;<i class="i-bean i-bean--yellow"></i>=全力',
  descjp: '機巧～機巧が完成していないと歯車枠の効果は解決されない。機巧の完成には歯車枠に示された種類のあなたのカードが表向きである必要がある。<br><i class="i-bean i-bean--red"></i>＝攻撃&nbsp;<i class="i-bean i-bean--blue"></i>＝行動&nbsp;<i class="i-bean i-bean--green"></i>＝付与&nbsp;<i class="i-bean i-bean--purple"></i>＝対応&nbsp;<i class="i-bean i-bean--yellow"></i>＝全力',
  // girlInfo: '身高：169cm\n喜欢的东西：ひらめき、お風呂、コーヒー（砂糖特盛）\n<b>--物語--</b>\n「くるるーん☆　ひらめきましたっ！」\nクルルは着想を象徴するメガミです。着想は主に発明家としてのひらめきのことを指し、それゆえに彼女はカラクリを操る発明家なのです。それも、かなりマッドな部類の。\n彼女の精神性は極めて独特です。彼女は他人はおろか、自分にすら興味がありません。彼女が主とするのはその着想のみであり、それを実現できるかどうかが全てなのです。発明家としては最高の資質ですが、多くの危険をはらんでいるのは言うまでもないでしょう。\n事実、２０年前の一大事では彼女の大発明は世界を危険な方向へと動かしました。他方で、彼女や彼女に影響を受けた人々が、世界を便利な方向へと進めているのも確かです。',
  // girlInfojp: '身長：169cm\n好きなもの：ひらめき、お風呂、コーヒー（砂糖特盛）\n<b>--物語--</b>\n「くるるーん☆　ひらめきましたっ！」\nクルルは着想を象徴するメガミです。着想は主に発明家としてのひらめきのことを指し、それゆえに彼女はカラクリを操る発明家なのです。それも、かなりマッドな部類の。\n彼女の精神性は極めて独特です。彼女は他人はおろか、自分にすら興味がありません。彼女が主とするのはその着想のみであり、それを実現できるかどうかが全てなのです。発明家としては最高の資質ですが、多くの危険をはらんでいるのは言うまでもないでしょう。\n事実、２０年前の一大事では彼女の大発明は世界を危険な方向へと動かしました。他方で、彼女や彼女に影響を受けた人々が、世界を便利な方向へと進めているのも確かです。',
  list: [{
    name: '络缲',
    namejp: '絡繰',
    nameen: 'KARAKURI',
    isSelect: false,
    pic: 'twiicon_sa_10.jpg',
    picq: 'sd_kururu.png',
    normal: [{
      id: '10-kururu-o-n-1',
      name: '电气疗法',
      namejp: 'えれきてる',
      baseType: 'normal',
      types: ['action'],
      text: '机巧：蓝蓝蓝紫紫～\n对敌命造成1点伤害。',
      textjp: '<行行行対対> 相手のライフに1ダメージを与える。',
      textkururu: [{
        if: '<i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--purple"></i><i class="i-bean i-bean--purple"></i>',
        ctn: '对敌命造成1点伤害。'
      }],
      textkururujp: [{
        if: '<i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--purple"></i><i class="i-bean i-bean--purple"></i>',
        ctn: '相手のライフに1ダメージを与える。'
      }]
    },
    {
      id: '10-kururu-o-n-2',
      name: '加束效应',
      namejp: 'あくせらー',
      baseType: 'normal',
      types: ['action'],
      text: '机巧：蓝蓝绿～\n你可以从手牌中选择1张具《全力》副类别的牌并使用。\n（当前阶段不会因此而结束）',
      textjp: '<行行付> あなたの手札から《全力》カードを1枚選び、そのカードを使用してもよい。 \n(フェイズは終了しない) ',
      textkururu: [{
        if: '<i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--green"></i>',
        ctn: '你可以从手牌中选择1张具《全力》副类别的牌并使用。\n（当前阶段不会因此而结束）'
      }],
      textkururujp: [{
        if: '<i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--green"></i>',
        ctn: 'あなたの手札から《全力》カードを1枚選び、そのカードを使用してもよい。\n(フェイズは終了しない)'
      }]
    },
    {
      id: '10-kururu-o-n-3',
      name: '枢噜噜～',
      namejp: 'くるるーん',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '【常时】仅当进行对应时可以使用此牌。\n选择至多2项，以任意顺序结算（不能选择同一项2次）：\n1.抓1张牌；\n2.从盖牌区选择1张牌置于你的牌库底；\n3.对手从手牌中弃1张牌。',
      textjp: '【常時】このカードは対応でしか使用できない。 \n以下から2つまでを選び、任意の順に行う。 \n(同じものを2回選ぶことはできない)\n・カードを1枚引く。\n・伏せ札1枚を山札の底に置く。\n・相手は手札を1枚捨て札にする。'
    },
    {
      id: '10-kururu-o-n-4',
      name: '大龙卷轰',
      namejp: 'とるねーど',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '机巧：红红～\n对敌装造成5点伤害。\n机巧：绿绿～\n对敌命造成1点伤害。',
      textjp: '<攻攻> 相手のオーラに5ダメージを与える。 \n----\n<付付> 相手のライフに1ダメージを与える。',
      textkururu: [{
        if: '<i class="i-bean i-bean--red"></i><i class="i-bean i-bean--red"></i>',
        ctn: '对敌装造成5点伤害。'
      }, {
        if: '<i class="i-bean i-bean--green"></i><i class="i-bean i-bean--green"></i>',
        ctn: '对敌命造成1点伤害。'
      }],
      textkururujp: [{
        if: '<i class="i-bean i-bean--red"></i><i class="i-bean i-bean--red"></i>',
        ctn: '相手のオーラに5ダメージを与える。'
      }, {
        if: '<i class="i-bean i-bean--green"></i><i class="i-bean i-bean--green"></i>',
        ctn: '相手のライフに1ダメージを与える。'
      }]
    },
    {
      id: '10-kururu-o-n-5',
      name: '回嗖利用',
      namejp: 'りげいなー',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '机巧：绿紫～你可以从弃牌、盖牌或使用后的王牌中选择并使用1张其他女神的非《全力》牌，而无需支付其费用。此时你可以从该牌的攻击距离中含有的所有值、对装伤害、对命伤害或纳中选择一项，所选择的所有值增大或减小1。\n----\n【常时】你可以从盖牌区由主要阶段的规则效果使用此牌。',
      textjp: '<付対> 捨て札、伏せ札、切札のいずれかから未使用でも《全力》でもない他のメガミのカードを1枚選んでもよい。そのカードのコストを支払わずに使用する。その際、適正距離のすべての値、どちらかのダメージ、納のいずれかを1増減させてもよい。\n----\n【常時】このカードは伏せ札から手札にあるかのように通常の方法で使用できる。',
      textkururu: [{
        if: '<i class="i-bean i-bean--green"></i><i class="i-bean i-bean--purple"></i>',
        ctn: '你可以从弃牌、盖牌或使用后的王牌中选择并使用1张其他女神的非《全力》牌，而无需支付其费用。此时你可以从该牌的攻击距离中含有的所有值、对装伤害、对命伤害或纳中选择一项，所选择的所有值增大或减小1。'
      }, {
        ctn: '【常时】你可以从盖牌区由主要阶段的规则效果使用此牌。'
      }],
      textkururujp: [{
        if: '<i class="i-bean i-bean--green"></i><i class="i-bean i-bean--purple"></i>',
        ctn: '捨て札、伏せ札、切札のいずれかから未使用でも《全力》でもない他のメガミのカードを1枚選んでもよい。そのカードのコストを支払わずに使用する。その際、適正距離のすべての値、どちらかのダメージ、納のいずれかを1増減させてもよい。'
      }, {
        ctn: '【常時】このカードは伏せ札から手札にあるかのように通常の方法で使用できる。'
      }]
    },
    {
      id: '10-kururu-o-n-6',
      name: '模块化',
      namejp: 'もじゅるー',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '【展开中】每当你使用的《行动》牌结算完毕时，你可以执行一次基本动作。',
      textjp: '【展開中】あなたが《行動》カードを使用した時、その解決後に基本動作を1回行ってもよい。'
    },
    {
      id: '10-kururu-o-n-7',
      name: '反射',
      namejp: 'りふれくた',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '0',
      text: '机巧：红紫～\n【展开时】将4个樱花结晶从虚移至此牌上。\n【展开中】打消每回合对手进行的第二次《攻击》。',
      textjp: '<攻対> 【展開時】このカードの上に桜花結晶を4個ダストから置く。 \n----\n【展開中】各ターンにおける相手の2回目の《攻撃》は打ち消される。\n',
      textkururu: [{
        if: '<i class="i-bean i-bean--red"></i><i class="i-bean i-bean--purple"></i>',
        ctn: '【展开时】将4个樱花结晶从虚移至此牌上。'
      }, {
        ctn: '【展开中】打消每回合对手进行的第二次《攻击》。'
      }],
      textkururujp: [{
        if: '<i class="i-bean i-bean--red"></i><i class="i-bean i-bean--purple"></i>',
        ctn: '【展開時】このカードの上に桜花結晶を4個ダストから置く。'
      }, {
        ctn: '展開中】各ターンにおける相手の2回目の《攻撃》は打ち消される。'
      }]
    }],
    special: [{
      id: '10-kururu-o-s-1',
      name: '魔能吸收',
      namejp: 'どれーんでびる',
      baseType: 'special',
      types: ['action', 'reaction'],
      cost: '2',
      text: '敌装（1）→自装 \n【使用后】每当你的处于使用后状态的王牌变为未使用状态时，你可以使用此牌，而不需支付自气中的樱花结晶。',
      textjp: '相オーラ→自オーラ：1 \n【使用済】あなたの使用済の切札が未使用に戻った時、このカードを消費を支払わずに使用してもよい。'
    },
    {
      id: '10-kururu-o-s-2',
      name: '大魔像',
      namejp: 'びっぐごーれむ',
      baseType: 'special',
      types: ['action'],
      cost: '4',
      text: '机巧：黄黄紫～\n【使用后】你的结束阶段开始时，你可以对敌命造成1点伤害。若敌命因此受到了伤害，则重铸你的牌库（你不会因此受到伤害）。\n【使用后】每当你使用具《全力》副类别的牌时，该牌结算完毕后你可以执行1次基本动作。',
      textjp: '<対全全> 【使用済】あなたの終了フェイズに相手のライフに1ダメージを与えてもよい。そうした場合、山札を再構成する。 \n----\n【使用済】あなたが《全力》カードを使用した時、その解決後に基本動作を1回行ってもよい。\n',
      textkururu: [{
        if: '<i class="i-bean i-bean--yellow"></i><i class="i-bean i-bean--yellow"></i><i class="i-bean i-bean--purple"></i>',
        ctn: '【使用后】你的结束阶段开始时，你可以对敌命造成1点伤害。若敌命因此受到了伤害，则重铸你的牌库（你不会因此受到伤害）。'
      }, {
        ctn: '【使用后】每当你使用具《全力》副类别的牌时，该牌结算完毕后你可以执行1次基本动作。'
      }],
      textkururujp: [{
        if: '<i class="i-bean i-bean--yellow"></i><i class="i-bean i-bean--yellow"></i><i class="i-bean i-bean--purple"></i>',
        ctn: '【使用済】あなたの終了フェイズに相手のライフに1ダメージを与えてもよい。そうした場合、山札を再構成する。'
      }, {
        ctn: '【使用済】あなたが《全力》カードを使用した時、その解決後に基本動作を1回行ってもよい。'
      }]
    },
    {
      id: '10-kururu-o-s-3',
      name: '复自黏贴',
      namejp: 'いんだすとりあ',
      baseType: 'special',
      types: ['action'],
      cost: '1',
      text: '若此牌为你的牌，且此牌没有封印牌，则你可以从你的手牌或弃牌中选择1张非《付与》的牌，封印于此牌下。\n将1张『复制品齿轮』从追加牌区置于你的牌库底（最多3张）。\n----\n【即再起】你重铸牌库后。',
      textjp: 'このカードがあなたのカードで、カードが封印されていないならば、手札または捨て札から《付与》でないカードを1枚選び、そのカードをこのカードの下に表向きで封印してもよい。 \nあなたの追加札から「でゅーぷりぎあ」を山札の底に1枚置く(最大で合計3枚)。 \n----\n【即再起】あなたが山札を再構成する(再構成の後に未使用に戻る)。'
    },
    {
      id: '10-kururu-o-s-4',
      name: '神涉装置：枢式',
      namejp: '神渉装置：枢式',
      baseType: 'special',
      types: ['action'],
      cost: '3',
      text: '机巧：红红蓝蓝蓝绿绿～检视对手的王牌。你可以从中选择1张处于未使用状态的牌，将其变为使用后状态。\n你可以从对手的处于使用后状态的王牌中选择1张。使用所选择的牌，而不需支付自气中的樱花结晶（可以选择具《全力》副类别的牌）。结算完毕后将此牌移出游戏。',
      textjp: '<攻攻行行行付付> 相手の切札を見て、その中から1枚選び、それを使用済にしてもよい。\n----\n相手の使用済の切札1枚を選んでもよい。そのカードを消費を支払わずに使用する(《全力》カードでもよい)。その後、このカードを取り除く。',
      textkururu: [{
        if: '<i class="i-bean i-bean--red"></i><i class="i-bean i-bean--red"></i><i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--green"></i><i class="i-bean i-bean--green"></i>',
        ctn: '检视对手的王牌。你可以从中选择1张处于未使用状态的牌，将其变为使用后状态。'
      }, {
        ctn: '你可以从对手的处于使用后状态的王牌中选择1张。使用所选择的牌，而不需支付自气中的樱花结晶（可以选择具《全力》副类别的牌）。结算完毕后将此牌移出游戏。'
      }],
      textkururujp: [{
        if: '<i class="i-bean i-bean--red"></i><i class="i-bean i-bean--red"></i><i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--green"></i><i class="i-bean i-bean--green"></i>',
        ctn: '相手の切札を見て、その中から1枚選び、それを使用済にしてもよい。'
      }, {
        ctn: '相手の使用済の切札1枚を選んでもよい。そのカードを消費を支払わずに使用する(《全力》カードでもよい)。その後、このカードを取り除く。'
      }]
    }],
    extra: [{
      id: '10-kururu-o-s-3-ex1',
      name: '复制品齿轮',
      namejp: 'でゅーぷりぎあ',
      baseType: 'normal',
      extraFrom: '10-kururu-o-s-3',
      types: ['variable'],
      text: '（牌类别为不定的牌不能使用）\n【常时】此牌为被『复自黏贴』封印的牌之复制，但名称仍为『复制品齿轮』（『复自黏贴』没有封印牌时不触发复制，故不能使用此牌）。',
      textjp: '(カードタイプが不定のカードは使用できない) \n【常時】このカードはあなたの「いんだすとりあ」に封印されたカードの複製となる。但し、名前は変更されない。 \n(「いんだすとりあ」が未使用なら複製とならないので、使用できない)'
    },
    {
      id: '10-kururu-o-s-3-ex1',
      name: '复制品齿轮',
      namejp: 'でゅーぷりぎあ',
      baseType: 'normal',
      extraFrom: '10-kururu-o-s-3',
      types: ['variable'],
      text: '（牌类别为不定的牌不能使用）\n【常时】此牌为被『复自黏贴』封印的牌之复制，但名称仍为『复制品齿轮』（『复自黏贴』没有封印牌时不触发复制，故不能使用此牌）。',
      textjp: '(カードタイプが不定のカードは使用できない) \n【常時】このカードはあなたの「いんだすとりあ」に封印されたカードの複製となる。但し、名前は変更されない。 \n(「いんだすとりあ」が未使用なら複製とならないので、使用できない)'
    },
    {
      id: '10-kururu-o-s-3-ex1',
      name: '复制品齿轮',
      namejp: 'でゅーぷりぎあ',
      baseType: 'normal',
      extraFrom: '10-kururu-o-s-3',
      types: ['variable'],
      text: '（牌类别为不定的牌不能使用）\n【常时】此牌为被『复自黏贴』封印的牌之复制，但名称仍为『复制品齿轮』（『复自黏贴』没有封印牌时不触发复制，故不能使用此牌）。',
      textjp: '(カードタイプが不定のカードは使用できない) \n【常時】このカードはあなたの「いんだすとりあ」に封印されたカードの複製となる。但し、名前は変更されない。 \n(「いんだすとりあ」が未使用なら複製とならないので、使用できない)'
    }]
  },
  {
    name: '机器',
    namejp: '機器',
    nameen: 'MACHANISM',
    isSelect: false,
    pic: 'twiicon_sa_25.jpg',
    picq: 'sd_kururu_a1.png',
    changenormal: [{
      changeIndex: '1',
      id: '10-kururu-a1-n-1',
      name: '分析',
      namejp: 'あならいず',
      baseType: 'normal',
      types: ['action'],
      text: '机巧：绿红紫～\n从你的盖牌中选择1张牌或者从对手的盖牌中随机选择1张牌，将其置入弃牌区。若该牌为《攻击》牌，则对敌命造成1点伤害。否则对手盖伏1张手牌。',
      textjp: '<付攻対>あなたの任意の伏せ札１枚または相手の無作為な伏せ札１枚を捨て札にする。そのカードが《攻撃》ならば相手のライフに１ダメージを与える。そうでなければ相手は手札を１枚伏せ札にする',
      textkururu: [{
        if: '<i class="i-bean i-bean--green"></i><i class="i-bean i-bean--red"></i><i class="i-bean i-bean--purple"></i>',
        ctn: '从你的盖牌中选择1张牌或者从对手的盖牌中随机选择1张牌，将其置入弃牌区。若该牌为《攻击》牌，则对敌命造成1点伤害。否则对手盖伏1张手牌。'
      }],
      textkururujp: [{
        if: '<i class="i-bean i-bean--green"></i><i class="i-bean i-bean--red"></i><i class="i-bean i-bean--purple"></i>',
        ctn: 'あなたの任意の伏せ札１枚または相手の無作為な伏せ札１枚を捨て札にする。そのカードが《攻撃》ならば相手のライフに１ダメージを与える。そうでなければ相手は手札を１枚伏せ札にする'
      }]
    },
    {
      changeIndex: '3',
      id: '10-kururu-a1-n-3',
      name: '探测',
      namejp: 'だうじんぐ',
      baseType: 'normal',
      types: ['action'],
      text: '弃置对手的牌库顶牌。然后从对手的弃牌中选择1张牌。\n机巧：X红Y～\n使用所选择的牌。X为所选择的牌的主类别，Y为所选择的牌的副类别。',
      textjp: '相手の山札の上から１枚を捨て札にする。その後、相手の捨て札を１枚選ぶ。\n<X攻Y>選んだカードを使用する。Xは選んだカードのカードタイプに、Yはサブタイプに等しい',
      textkururu: [{
        ctn: '弃置对手的牌库顶牌。然后从对手的弃牌中选择1张牌。'
      }, {
        if: '<i class="i-bean i-bean--x"></i><i class="i-bean i-bean--red"></i><i class="i-bean i-bean--y"></i>',
        ctn: '使用所选择的牌。X为所选择的牌的主类别，Y为所选择的牌的副类别。'
      }],
      textkururujp: [{
        ctn: '相手の山札の上から１枚を捨て札にする。その後、相手の捨て札を１枚選ぶ。'
      }, {
        if: '<i class="i-bean i-bean--x"></i><i class="i-bean i-bean--red"></i><i class="i-bean i-bean--y"></i>',
        ctn: '選んだカードを使用する。Xは選んだカードのカードタイプに、Yはサブタイプに等しい'
      }]
    }],
    changespecial: [{
      changeIndex: '3',
      id: '10-kururu-a1-s-3',
      name: '不懈探索',
      namejp: 'らすとりさーち',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '机巧～红：若对手盖牌区的牌张数为0，则盖伏对手牌库顶的1张牌。对手从其盖牌中选择1张牌。你宣言1个牌名，并将所选择的牌置入弃牌区。若你宣言的牌名与该牌的牌名一致，则将1个樱花结晶从游戏外移至此牌上。然后若此牌上的樱花结晶的数目变为2，则将这些结晶移至虚，进行世纪的大发现（查看对手的所有王牌。然后选择你或者对手，将该玩家眼前构筑时未选用的5张王牌，从游戏外以未使用状态加入王牌。将『不懈探索』移出游戏并将『壮绝旅途』从追加牌区以未使用状态加入王牌。）。\n【使用后】每当你重铸牌库时，或每当你使用具《全力》副类别的牌时，该回合的结束阶段开始时你可以使用此牌，而无需支付其费用。',
      textjp: '<攻>相手の伏せ札が0枚ならば相手の山札の上から1枚を伏せ札にする。相手は伏せ札から1枚選ぶ。あなたはカード名を1つ宣言し、相手は選んだカードを捨て札にする。そのカード名が一致したらこのカードの上にゲーム外から桜花結晶を1つ置く。2つになったら世紀の大発見を行う。\n----\n【使用済】あなたが山札を再構成した時ならびに《全力》カードを使用した時、このターンの終了フェイズにこのカードをコストを支払わずに使用してもよい。',
      textkururu: [{
        if: '<i class="i-bean i-bean--red"></i>',
        ctn: '若对手盖牌区的牌张数为0，则盖伏对手牌库顶的1张牌。对手从其盖牌中选择1张牌。你宣言1个牌名，并将所选择的牌置入弃牌区。若你宣言的牌名与该牌的牌名一致，则将1个樱花结晶从游戏外移至此牌上。然后若此牌上的樱花结晶的数目变为2，则将这些结晶移至虚，进行世纪的大发现（查看对手的所有王牌。然后选择你或者对手，将该玩家眼前构筑时未选用的5张王牌，从游戏外以未使用状态加入王牌。将『不懈探索』移出游戏并将『壮绝旅途』从追加牌区以未使用状态加入王牌。）。'
      }, {
        ctn: '【使用后】每当你重铸牌库时，或每当你使用具《全力》副类别的牌时，该回合的结束阶段开始时你可以使用此牌，而无需支付其费用。'
      }],
      textkururujp: [{
        if: '<i class="i-bean i-bean--red"></i>',
        ctn: '相手の伏せ札が0枚ならば相手の山札の上から1枚を伏せ札にする。相手は伏せ札から1枚選ぶ。あなたはカード名を1つ宣言し、相手は選んだカードを捨て札にする。そのカード名が一致したらこのカードの上にゲーム外から桜花結晶を1つ置く。2つになったら世紀の大発見を行う。'
      }, {
        ctn: '【使用済】あなたが山札を再構成した時ならびに《全力》カードを使用した時、このターンの終了フェイズにこのカードをコストを支払わずに使用してもよい。'
      }]
    }],
    changeExtra: [{
      id: '10-kururu-a1-s-3-ex1',
      name: '壮绝旅途',
      namejp: 'ぐらんがりばー',
      baseType: 'special',
      extraFrom: '10-kururu-a1-s-3',
      types: ['action'],
      cost: 'X',
      text: '【常时】X等于自气中樱花结晶的数目。\n【使用后】你的王牌的牌面费用变为0。',
      textjp: '【常時】Xはあなたのフレアに等しい。\n【使用済】あなたの切札の消費は０となる。'
    }]
  },
  {
    name: '友情',
    namejp: '友情',
    isSelect: false,
    pic: 'twiicon_sa_42.jpg',
    picq: 'sd_kururu_a2.png',
    changenormal: [{
      changeIndex: '1',
      id: '10-kururu-a2-n-1',
      name: '激光枪',
      namejp: 'ぶらすたー',
      baseType: 'normal',
      types: ['attack'],
      range: '2-6',
      damage: '0/0',
      text: '不可被对应（通常牌）\n机巧：绿～【攻击后】若此机巧全部由其他女神的牌组装，则进行一次“攻击距离0-6 伤害1/1”的攻击。\n机巧：蓝紫～【攻击后】若此机巧全部由其他女神的牌组装，则进行一次“攻击距离0-6 伤害1/1”的攻击。',
      textjp: '<付>【攻撃後】他のメガミのカードで組み立てたならば、攻撃『適正距離0-6、1/1』を行う。\n<行対>【攻撃後】他のメガミのカードで組み立てたならば、攻撃『適正距離0-6、1/1』を行う。',
      textkururu: [{
        ctn: '不可被对应（通常牌）'
      }, {
        if: '<i class="i-bean i-bean--green"></i>',
        ctn: '【攻击后】若此机巧全部由其他女神的牌组装，则进行一次“攻击距离0-6 伤害1/1”的攻击。'
      }, {
        if: '<i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--purple"></i>',
        ctn: '【攻击后】若此机巧全部由其他女神的牌组装，则进行一次“攻击距离0-6 伤害1/1”的攻击。'
      }],
      textkururujp: [{
        ctn: '対応不可(通常札)'
      }, {
        if: '<i class="i-bean i-bean--green"></i>',
        ctn: '【攻撃後】他のメガミのカードで組み立てたならば、攻撃『適正距離0-6、1/1』を行う。'
      }, {
        if: '<i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--purple"></i>',
        ctn: '【攻撃後】他のメガミのカードで組み立てたならば、攻撃『適正距離0-6、1/1』を行う。'
      }]
    }, {
      changeIndex: '2',
      id: '10-kururu-a2-n-2',
      name: '电磁炮',
      namejp: 'れーるがん',
      baseType: 'normal',
      types: ['attack'],
      range: '2-6',
      damage: '1/1',
      text: '机巧：红红～【常时】进行此《攻击》时，此《攻击》获得+2/+0。\n机巧：黄～终端\n【常时】进行此《攻击》时，此《攻击》获得+0/+1和不可被打消。',
      textjp: '<攻攻>【常時】この《攻撃》が行われた時、この《攻撃》は+2/+0となる。\n<全>終端\n【常時】この《攻撃》が行われた時、この《攻撃》は+0/+1となり、打ち消されない。',
      textkururu: [{
        if: '<i class="i-bean i-bean--red"></i><i class="i-bean i-bean--red"></i>',
        ctn: '【常时】进行此《攻击》时，此《攻击》获得+2/+0。'
      }, {
        if: '<i class="i-bean i-bean--yellow"></i>',
        ctn: '终端\n【常时】进行此《攻击》时，此《攻击》获得+0/+1和不可被打消。'
      }],
      textkururujp: [{
        if: '<i class="i-bean i-bean--red"></i><i class="i-bean i-bean--red"></i>',
        ctn: '【常時】この《攻撃》が行われた時、この《攻撃》は+2/+0となる。'
      }, {
        if: '<i class="i-bean i-bean--yellow"></i>',
        ctn: '終端\n【常時】この《攻撃》が行われた時、この《攻撃》は+0/+1となり、打ち消されない。'
      }]
    }],
    changespecial: [{
      changeIndex: '4',
      id: '10-kururu-a2-s-4',
      name: '深层连结',
      namejp: 'こねくとだいぶ',
      baseType: 'special',
      types: ['action'],
      cost: '1',
      text: '机巧：绿蓝紫～【使用时/使用后】当你使用此牌时和你的结束阶段开始时，若此机巧全部由其他女神的牌组装，则你可以从虚或自装中选择1个樱花结晶移至此牌上。\n【使用后】每当你结算齿轮框中的效果时，你可以将此牌上的1个樱花结晶移至虚。若如此做，该齿轮框中记述的所有数字变为原来的2倍。',
      textjp: '<付行対>【使用時/使用済】他のメガミのカードで組み立てたならば、使用時とあなたの終了フェイズにダストまたはあなたのオーラからこのカードの上に桜花結晶を1つ置いてもよい。\n【使用済】あなたがある機巧枠の効果を解決するに際し、このカードの上の桜花結晶を1つダストに送ってもよい。そうした場合、その機巧枠の中に書かれた数字全てを2倍にする。',
      textkururu: [{
        if: '<i class="i-bean i-bean--green"></i><i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--purple"></i>',
        ctn: '【使用时/使用后】当你使用此牌时和你的结束阶段开始时，若此机巧全部由其他女神的牌组装，则你可以从虚或自装中选择1个樱花结晶移至此牌上。'
      }, {
        ctn: '【使用后】每当你结算齿轮框中的效果时，你可以将此牌上的1个樱花结晶移至虚。若如此做，该齿轮框中记述的所有数字变为原来的2倍。'
      }],
      textkururujp: [{
        if: '<i class="i-bean i-bean--green"></i><i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--purple"></i>',
        ctn: '【使用時/使用済】他のメガミのカードで組み立てたならば、使用時とあなたの終了フェイズにダストまたはあなたのオーラからこのカードの上に桜花結晶を1つ置いてもよい。'
      }, {
        ctn: '【使用済】あなたがある機巧枠の効果を解決するに際し、このカードの上の桜花結晶を1つダストに送ってもよい。そうした場合、その機巧枠の中に書かれた数字全てを2倍にする。'
      }]
    }]
  }]
},
{
  name: 'THALLYA 萨莉娅',
  namejp: 'サリヤ',
  nameen: 'THALLYA',
  desc: '造花～引擎中有5个造花结晶。',
  descjp: '造花～マシンに造花結晶を5つ持つ。',
  // girlInfo: '身高：176cm\n喜欢的东西：お世話、ツーリング、サーフィン\n<b>--物語--</b>\n「大丈夫！　お姉ちゃんに任せて」\n蒸気機関を搭載した鉄の獣ヴィーナを駆る騎士である彼女は、ユリナやサイネと同じく、もとは人間、サリヤ・ソルアリア・ラーナークでした。彼女も２０年前の一大事で誕生したメガミの一柱です。騎乗の技術などを象徴しているとされていますが、この地の人々は扱いを決めかねてもいます。\nというのも、彼女は海の向こうの出身であり、元々はミコトですらありませんでした。２０年前に自らが仕える貴族の研究者ジュリアを護衛するためこの地へと渡りますが、不幸にもこの地は動乱のさなかにありました。そして様々な事件の結果、メガミへと至ります。そう、彼女は完全なるイレギュラーなのです。',
  // girlInfojp: '身長：176cm\n好きなもの：お世話、ツーリング、サーフィン\n<b>--物語--</b>\n「大丈夫！　お姉ちゃんに任せて」\n蒸気機関を搭載した鉄の獣ヴィーナを駆る騎士である彼女は、ユリナやサイネと同じく、もとは人間、サリヤ・ソルアリア・ラーナークでした。彼女も２０年前の一大事で誕生したメガミの一柱です。騎乗の技術などを象徴しているとされていますが、この地の人々は扱いを決めかねてもいます。\nというのも、彼女は海の向こうの出身であり、元々はミコトですらありませんでした。２０年前に自らが仕える貴族の研究者ジュリアを護衛するためこの地へと渡りますが、不幸にもこの地は動乱のさなかにありました。そして様々な事件の結果、メガミへと至ります。そう、彼女は完全なるイレギュラーなのです。',
  list: [{
    name: '骑',
    namejp: '乗騎',
    nameen: 'MOUNT',
    isSelect: false,
    pic: 'twiicon_sa_11.jpg',
    picq: 'sd_thallya.png',
    normal: [{
      id: '11-thallya-o-n-1',
      name: 'Burning Steam',
      namejp: 'Burning Steam',
      baseType: 'normal',
      types: ['attack'],
      range: '3-5',
      damage: '2/1',
      text: '【攻击后】骑动',
      textjp: '【攻撃後】騎動を行う。'
    },
    {
      id: '11-thallya-o-n-2',
      name: 'Waving Edge',
      namejp: 'Waving Edge',
      baseType: 'normal',
      types: ['attack'],
      range: '1-3',
      damage: '3/1',
      text: '燃烧\n【攻击后】骑动',
      textjp: '燃焼 \n【攻撃後】騎動を行う。'
    },
    {
      id: '11-thallya-o-n-3',
      name: 'Shield Charge',
      namejp: 'Shield Charge',
      baseType: 'normal',
      types: ['attack'],
      range: '1',
      damage: '3/2',
      text: '燃烧\n【常时】若此《攻击》对对手造成了伤害，则不将因结算伤害移动的樱花结晶移至气或虚，而改为移至距。',
      textjp: '燃焼 \n【常時】この《攻撃》のダメージにより移動する桜花結晶は、ダストやフレアでなく間合に動かす。'
    },
    {
      id: '11-thallya-o-n-4',
      name: 'Steam Cannon',
      namejp: 'Steam Cannon',
      baseType: 'normal',
      types: ['attack'],
      range: '3-7',
      damage: '1/1',
      text: '燃烧\n全力化：【常时】此《攻击》获得距离扩大（近1）、距离扩大（远1）与+2/+2。\n【攻击后】若此牌未全力化，则回复2个已燃烧的造花结晶。',
      textjp: '燃焼\n全力化:【常時】この《攻撃》は距離拡大(近1)と距離拡大(遠1)を得て、+2/+2となる。【攻撃後】全力化していないならば、あなたの燃焼済の造花結晶を2つ回復する。'
    },
    {
      id: '11-thallya-o-n-5',
      name: 'Stunt',
      namejp: 'Stunt',
      baseType: 'normal',
      types: ['action'],
      text: '自装（2）→自气 \n对手畏缩。',
      textjp: '相手を畏縮させる。 \n自オーラ→自フレア：2'
    },
    {
      id: '11-thallya-o-n-6',
      name: 'Roaring',
      namejp: 'Roaring',
      baseType: 'normal',
      types: ['action'],
      text: '你可以燃烧2个造花结晶。若如此做，则你获得1点集中力，对手失去1点集中力，对手畏缩。\n你可以支付2点集中力。若如此做，则回复3个造花结晶。',
      textjp: 'コストとして、あなたのマシンにある造花結晶を2つ燃焼済にしても良い。そうした場合、あなたは集中力を1得て、相手は集中力を1失い、相手を畏縮させる。 \nコストとして、集中力を2支払ってもよい。そうした場合、あなたの燃焼済の造花結晶を3つ回復する。'
    },
    {
      id: '11-thallya-o-n-7',
      name: 'Turbo Switch',
      namejp: 'Turbo Switch',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '燃烧\n骑动',
      textjp: '燃焼 \n騎動を行う。'
    }],
    special: [{
      id: '11-thallya-o-s-1',
      name: 'Alpha-Edge',
      namejp: 'Alpha-Edge',
      baseType: 'special',
      types: ['attack'],
      range: '1,3,5,7',
      damage: '1/1',
      cost: '1',
      text: '【即再起】骑动造成距离变化。',
      textjp: '【即再起】あなたが騎動により間合を変化させる。'
    },
    {
      id: '11-thallya-o-s-2',
      name: 'Omega-Burst',
      namejp: 'Omega-Burst',
      baseType: 'special',
      types: ['action', 'reaction'],
      cost: '4',
      text: '回复你所有的造花结晶。打消被对应的对装伤害为“-”或小于等于X的《攻击》，X等于因此牌效果回复的造花结晶的个数。',
      textjp: 'あなたの燃焼済の造花結晶を全て回復する。 \n対応した、オーラへのダメージが「-」またはX以下の《攻撃》を打ち消す。Xはこのカードにより回復した造花結晶の個数に等しい。'
    },
    {
      id: '11-thallya-o-s-3',
      name: 'Thallya\'s Masterpiece',
      namejp: 'Thallya\'s Masterpiece',
      baseType: 'special',
      types: ['action'],
      cost: '1',
      text: '【使用后】你的回合内，每当你由于除基本动作以外的效果进行骑动时，若此次骑动改变了距离，则你可以选择\n虚（1）⇔ 距',
      textjp: '【使用済】あなたのターンに、あなたが基本動作以外の方法で騎動を行い、間合を変化させるたびに\nダスト⇔間合：1 \nを行ってもよい。'
    },
    {
      id: '11-thallya-o-s-4',
      name: 'Julia\'s BlackBox',
      namejp: 'Julia\'s BlackBox',
      baseType: 'special',
      types: ['action', 'fullpower'],
      cost: '2',
      text: '若你的引擎中没有处于未燃烧状态的造花结晶，则TRANSFORM你的引擎，然后回复2个处于燃尽状态的造花结晶，否则将此牌变为未使用状态。',
      textjp: 'あなたのマシンに造花結晶がないならば、あなたのマシンはTransFormし、あなたの燃焼済の造花結晶を2つ回復する。そうでない場合、このカードを未使用に戻す。'
    }],
    transform: [{
      id: '11-thallya-o-tf-1',
      name: 'Form: YAKSHA',
      namejp: 'Form: YAKSHA',
      baseType: 'transform',
      types: ['transform'],
      text: '【变形时】对手下个准备阶段只抓1张牌，对手畏缩。\n【常时】若你的引擎中没有处于未燃烧状态的造花结晶，则你不能执行基本动作。\n【追加基本动作】Beta-Edge：进行一次“攻击距离2,4,6,8 伤害2/1 【攻击后】进行一次骑动。”的攻击。',
      textjp: '【変形時】相手は次の開始フェイズにカードを1枚しか引けない。相手を畏縮させる。\n----\n【常時】あなたのマシンに造花結晶がないならば、あなたは基本動作を行えない。\n----\n【追加基本行動：Beta-Edge】『適正距離2,4,6,8、2/1 【攻撃後】騎動を行う』の《攻撃》を行う。'
    },
    {
      id: '11-thallya-o-tf-2',
      name: 'Form: NAGA',
      namejp: 'Form: NAGA',
      baseType: 'transform',
      types: ['transform'],
      text: '【变形时】若敌气中的樱花结晶的数目大于等于3，则保留其中2个樱花结晶，其余移至虚。\n【追加基本动作】Gamma-Ray：弃置对手的牌库顶牌。',
      textjp: '【変形時】相手のフレアが3以上ならば、フレアが2になるように桜花結晶をダストへ移動させる。\n----\n【追加基本行動：Gamma-Ray】\n相手の山札の一番上のカードを相手の捨て札に置く。'
    },
    {
      id: '11-thallya-o-tf-3',
      name: 'Form: GARUDA',
      namejp: 'Form: GARUDA',
      baseType: 'transform',
      types: ['transform'],
      text: '【变形时】抓2张牌。本回合内你的手牌数量没有上限。\n【追加基本动作】Delta-Wing：若当前距离小于等于7，则虚（1）→距',
      textjp: '【変形時】カードを2枚引き、このターンの間手札の上限が無くなる。\n----\n【追加基本行動：Delta-Wing】\n現在の間合が7以下ならば、ダスト→間合：1'
    }]
  },
  {
    name: '新型',
    namejp: '新型',
    nameen: 'NEW FORM',
    isSelect: false,
    pic: 'twiicon_sa_31.jpg',
    picq: 'sd_thallya_a1.png',
    changenormal: [{
      changeIndex: '5',
      id: '11-thallya-a1-n-5',
      name: 'Quick Change',
      namejp: 'Quick Change',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '【展开时】回复1个处于燃尽状态的造花结晶。然后从追加牌区选择1张变形牌，封印于此牌下（不结算变形时效果）。\n【展开中】此牌所封印的牌的追加基本动作与常时效果生效。\n【破弃时】将此牌所封印的牌置入追加牌区。',
      textjp: '【展開時】あなたの燃焼済の造花結晶を1つ回復する。その後、追加札にあるTransFormカードを1枚選び、このカードの下に封印する（変形時効果は解決されない）。\n【展開中】このカードに封印されたカードの追加基本動作、常時を有効にする。\n【破棄時】このカードに封印されたカードを追加札に戻す。'
    }],
    changespecial: [{
      changeIndex: '1',
      id: '11-thallya-a1-s-1',
      name: 'BlackBox NEO',
      namejp: 'BlackBox NEO',
      baseType: 'special',
      types: ['action'],
      cost: '1',
      text: '终端\n回复1个处于燃尽状态的造花结晶。然后若你处于燃尽状态的造花结晶的数目等于0，则将1个樱花结晶从虚移至此牌上。若此牌上的樱花结晶的数目变为2，则将它们移至虚，然后TRANSFORM你的引擎。\n----\n【再起】你的引擎中造花结晶的数目小于等于3。或者本回合内你的引擎进行了TRANSFORM。',
      textjp: '終端\nあなたの燃焼済の造花結晶を1つ回復する。その後、あなたが燃焼済の造花結晶をもたないならば、このカードの上にダストから桜花結晶を1つ置く。2つになったらこのカードの上の桜花結晶をダストに送るとともに、あなたのマシンはTransFormする。\n----\n【再起】あなたのマシンにある造花結晶が3個以下である。または、このターンにあなたのマシンはTransFormしている。'
    },
    {
      changeIndex: '2',
      id: '11-thallya-a1-s-2',
      name: 'OMNIS-Blaster',
      namejp: 'OMNIS-Blaster',
      baseType: 'special',
      types: ['attack'],
      range: '3-10',
      damage: 'X/X',
      cost: 'X',
      text: '【常时】X等于本局游戏中你的引擎进行TRANSFORM的次数。',
      textjp: '【常時】XはあなたのマシンがこのゲームでTransFormした回数に等しい。'
    }],
    changeTransform: [{
      changeIndex: '1',
      id: '11-thallya-a1-tf-1',
      name: 'Form: KINNARI',
      namejp: 'Form: KINNARI',
      baseType: 'transform',
      types: ['transform'],
      text: '【变形时】盖伏对手的牌库。\n----\n【常时】Zeta-Voice：每当对手重铸牌库时，重铸完毕后你可以进行一次“攻击距离2,4,6 伤害2/2”的攻击。',
      textjp: '【変形時】相手は山札をすべて伏せ札にする。\n----\n【常時】Zeta-Voice：相手が山札を再構成したとき、その解決後に攻撃『適正距離2,4,6、2/2』を行ってもよい。'
    },
    {
      changeIndex: '3',
      id: '11-thallya-a1-tf-3',
      name: 'Form: ASURA',
      namejp: 'Form: ASURA',
      baseType: 'transform',
      types: ['transform'],
      text: '【变形时】对手从其盖牌中选择1张牌并弃置之。然后再结算上述效果1次。\n----\n【追加基本动作】Sigma-Drive：进行一次“攻击距离3,5 伤害3/2 【攻击后】你畏缩”的攻击。此基本动作每回合至多执行一次。',
      textjp: '【変形時】相手は伏せ札から１枚を選び、それを捨て札にする。これをもう１回繰り返す。\n----\n【常時】Sigma-Drive：『適正距離3,5、3/2【攻撃後】あなたは畏縮する。』を行う。\nこの基本動作は一ターンに1回だけ行える。'
    },
    {
      changeIndex: '4',
      id: '11-thallya-a1-tf-4',
      name: 'Form: DEVA',
      namejp: 'Form: DEVA',
      baseType: 'transform',
      types: ['transform'],
      text: '【变形时】回复2个处于燃尽状态的造花结晶。执行2次基本动作《装附》。\n----\n【常时】Phi-Cycle：每当对手的弃牌张数变为除0以外的2的倍数时，你获得1点集中力。',
      textjp: '【変形時】あなたの燃焼済の造花結晶を2つ回復し、基本動作《纏い》を2回行う。\n----\n【常時】Phi-Cycle：相手の捨て札にあるカードの枚数が0でない2の倍数になるたびに、あなたは集中力を1得る。'
    }]
  }]
},
{
  name: 'RAIRA 雷螺',
  namejp: 'ライラ',
  nameen: 'RAIRA',
  desc: '风雷～具有风神槽和雷神槽，槽的初始值为0，最大值为20。每当你使用其他女神的牌时，该牌会带电。若你解除牌的带电状态，则两个槽之一的值上升1。（横置牌表示其已解除带电）',
  descjp: '風雷～風神ゲージと雷神ゲージを持ち、初期値は0、最大値は20である。あなたが他のメガミのカードを使用するたびにそれは帯電し、帯電を解除すればどちらかのゲージを1上げられる。（帯電を解除したらカードを横向きにして表す）',
  // girlInfo: '身高：161cm\n喜欢的东西：肉、天体観測、走ること、沐浴\n<b>--物語--</b>\n「らいの爪、迅い。頼りにしていい……」\nライラは風と雷を象徴するメガミです。外見の通り、人間よりも獣に近い精神性を持ち、戦いの場においては獰猛に吠え、敵を引き掴み切り裂きます。野生の獣のように警戒心が強く、冷静で冷徹。しかし一度気を許した家族には思う存分甘えるようです。\nこれだけ見ると彼女の頭が悪いと誤解されてしまいそうですが、実はそうではありません。彼女は学問に興味はなく、言葉を扱うのが苦手です。しかし彼女は誰よりも自然の知恵に長けているのです。例えば星の運行を本能で把握し、時刻や方角を深く理解するのはお手の物です。彼女は天性のシャーマンでもあり、いつも自然と共にあるのです。',
  // girlInfojp: '身長：161cm\n好きなもの：肉、天体観測、走ること、沐浴\n<b>--物語--</b>\n「らいの爪、迅い。頼りにしていい……」\nライラは風と雷を象徴するメガミです。外見の通り、人間よりも獣に近い精神性を持ち、戦いの場においては獰猛に吠え、敵を引き掴み切り裂きます。野生の獣のように警戒心が強く、冷静で冷徹。しかし一度気を許した家族には思う存分甘えるようです。\nこれだけ見ると彼女の頭が悪いと誤解されてしまいそうですが、実はそうではありません。彼女は学問に興味はなく、言葉を扱うのが苦手です。しかし彼女は誰よりも自然の知恵に長けているのです。例えば星の運行を本能で把握し、時刻や方角を深く理解するのはお手の物です。彼女は天性のシャーマンでもあり、いつも自然と共にあるのです。',
  list: [{
    name: '爪',
    namejp: '爪',
    nameen: 'CLAW',
    isSelect: false,
    pic: 'twiicon_sa_14.jpg',
    picq: 'sd_raira.png',
    normal: [{
      id: '12-raira-o-n-1',
      name: '兽爪',
      namejp: '獣爪',
      baseType: 'normal',
      types: ['attack'],
      range: '1-2',
      damage: '3/1',
      text: '',
      textjp: ''
    },
    {
      id: '12-raira-o-n-2',
      name: '风雷击',
      namejp: '風雷撃',
      baseType: 'normal',
      types: ['attack'],
      range: '1-2',
      damage: 'X/2',
      text: '【常时】X等于风神槽与雷神槽的值中的较小者。',
      textjp: '【常時】Xは風神ゲージと雷神ゲージのうち、小さい方の値である。'
    },
    {
      id: '12-raira-o-n-3',
      name: '流转爪',
      namejp: '流転爪',
      baseType: 'normal',
      types: ['attack'],
      range: '1-2',
      damage: '2/1',
      text: '【攻击后】你可以从弃牌中选择1张《攻击》牌，将其置于你的牌库顶。',
      textjp: '【攻撃後】あなたの捨て札にある《攻撃》カード1枚を選び、山札の一番上に置いてもよい。'
    },
    {
      id: '12-raira-o-n-4',
      name: '疾风步',
      namejp: '風走り',
      baseType: 'normal',
      types: ['action'],
      text: '若当前距离大于等于3，则距（2）→虚',
      textjp: '現在の間合が3以上ならば、間合→ダスト：2'
    },
    {
      id: '12-raira-o-n-5',
      name: '风雷的知慧',
      namejp: '風雷の知恵',
      baseType: 'normal',
      types: ['action'],
      text: '若风神槽与雷神槽的值之和大于等于4，则你可以从弃牌中选择1张其他女神的牌，将其置于你的牌库顶。\n选择风神槽或雷神槽，其值增加1。',
      textjp: '風神ゲージと雷神ゲージの合計が4以上ならば、あなたの捨て札にある他のメガミのカード1枚を選び、山札の一番上に置いてもよい。 \n風神ゲージか雷神ゲージを1上げる。'
    },
    {
      id: '12-raira-o-n-6',
      name: '吼叫',
      namejp: '呼び声',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '对手畏缩。选择1项：\n1.风神槽与雷神槽的值各增加1；\n2.盖伏所有手牌，雷神槽的值加倍。',
      textjp: '相手を畏縮させ、以下から1つを選ぶ。\n・風神ゲージと雷神ゲージを1ずつ上げる。\n・手札を全て伏せ札にし、雷神ゲージを2倍にする。'
    },
    {
      id: '12-raira-o-n-7',
      name: '驭空术',
      namejp: '空駆け',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '距（3）⇔ 虚',
      textjp: '間合⇔ダスト：3'
    }],
    special: [{
      id: '12-raira-o-s-1',
      name: '雷螺风神爪',
      namejp: '雷螺風神爪',
      baseType: 'special',
      types: ['attack'],
      range: '1-2',
      damage: '2/2',
      cost: '3',
      text: '【常时】若雷神槽的值大于等于4，则此《攻击》获得+1/+0。\n----\n【再起】风神槽的值大于等于4。',
      textjp: '【常時】あなたの雷神ゲージが4以上ならば、この《攻撃》は+1/+0となる。 \n----\n【再起】あなたの風神ゲージが4以上である。'
    },
    {
      id: '12-raira-o-s-2',
      name: '天雷召唤阵',
      namejp: '天雷召喚陣',
      baseType: 'special',
      types: ['action', 'fullpower'],
      cost: '6',
      text: '进行X次“攻击距离0-10 伤害1/1”的攻击，X等于雷神槽的值的一半（向上取整）。',
      textjp: '攻撃『適正距離0-10、1/1』をX回行う。Xは雷神ゲージの半分(切り上げ)に等しい。'
    },
    {
      id: '12-raira-o-s-3',
      name: '风魔招来孔',
      namejp: '風魔招来孔',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '根据现在的风神槽的值，将以下牌从追加牌区以未使用状态加入王牌，然后将此牌移出游戏。\n大于等于3……『风魔旋风』\n大于等于7……『风魔缠回』\n大于等于12……『风魔天狗道』',
      textjp: '現在の風神ゲージに応じて、以下の切札を追加札から未使用で得る(条件を満たしたものは全て得る)。その後、このカードを取り除く。 \n3以上……風魔旋風 \n7以上……風魔纏廻 \n12以上……風魔天狗道'
    },
    {
      id: '12-raira-o-s-4',
      name: '圆环轮回旋',
      namejp: '円環輪廻旋',
      baseType: 'special',
      types: ['enhance', 'reaction'],
      capacity: '3',
      cost: '2',
      text: '【展开中】每当对手进行的《攻击》结算完毕时，你可以依次执行：\n距（1）⇔ 虚\n选择风神槽或雷神槽，其值增加1。',
      textjp: '【展開中】相手が《攻撃》を行なったならば、その解決後に以下を行ってもよい。\nダスト⇔間合：1 \n風神ゲージか雷神ゲージを1上げる。'
    }],
    extra: [{
      id: '12-raira-o-s-3-ex1',
      name: '风魔旋风',
      namejp: '風魔旋風',
      baseType: 'special',
      extraFrom: '12-raira-o-s-3',
      types: ['attack'],
      range: '1-3',
      damage: '1/2',
      cost: '1',
      text: '',
      textjp: ''
    },
    {
      id: '12-raira-o-s-3-ex2',
      name: '风魔缠回',
      namejp: '風魔纏廻',
      baseType: 'special',
      extraFrom: '12-raira-o-s-3',
      types: ['action'],
      cost: '1',
      text: '从你的处于使用后状态的王牌中选择1张，将其变为未使用状态。\n【使用后】你的王牌的牌面费用减小1（王牌的牌面费用不会为负）。',
      textjp: 'あなたの使用済の切札を1枚選び、それを未使用に戻す。 \n【使用済】あなたの切札の消費は1少なくなる(0未満にはならない)。'
    },
    {
      id: '12-raira-o-s-3-ex3',
      name: '风魔天狗道',
      namejp: '風魔天狗道',
      baseType: 'special',
      extraFrom: '12-raira-o-s-3',
      types: ['action', 'reaction'],
      cost: '4',
      text: '距（5）⇔ 虚\n结算上述效果时，你可以选择移动少于指定数目的樱花结晶。\n将此牌移出游戏。',
      textjp: 'ダスト⇔間合：5 \nあなたはこの効果で本来より少ない個数の桜花結晶を動かしてもよい。その後、このカードを取り除く。'
    }]
  },
  {
    name: '岚',
    namejp: '嵐',
    nameen: 'STORM',
    isSelect: false,
    pic: 'twiicon_sa_32.jpg',
    picq: 'sd_raira_a1.png',
    changenormal: [{
      changeIndex: '2',
      id: '12-raira-a1-n-2',
      name: '暴风',
      namejp: '暴風',
      baseType: 'normal',
      types: ['attack'],
      range: '2-3',
      damage: '2/1',
      text: '【攻击后】你可以使用1次岚之力。',
      textjp: '【攻撃後】嵐の力を1回使用してもよい。'
    },
    {
      changeIndex: '6',
      id: '12-raira-a1-n-6',
      name: '大风暴',
      namejp: '大嵐',
      baseType: 'normal',
      types: ['enhance', 'fullpower'],
      capacity: '0',
      text: '【展开时】选择3次。你可以多次选择同一个选项。\n1.选择风神槽或雷神槽，其值增加1；\n2.将1个樱花结晶从虚移至此牌上。\n【展开中】每回合的结束阶段开始时，进行一次“攻击距离0-4 伤害1/1 不可被对应”的攻击。\n【展开中】每回合内对手进行的第一次《攻击》获得+0/-1。',
      textjp: '【展開時】以下を3回選ぶ。同じものを複数回選んでも良い。\n・風神ゲージか雷神ゲージを1上げる。\n・このカードの上にダストから桜花結晶を1つ置く。\n【展開中】あなたと相手の終了フェイズに攻撃『適正距離0-4、1/1、対応不可』を行う。\n【展開中】各ターンにおける相手の最初の《攻撃》は+0/-1となる。'
    }],
    changespecial: [{
      changeIndex: '3',
      id: '12-raira-a1-s-3',
      name: '阵风祭天式',
      namejp: '陣風祭天儀',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '风神槽和雷神槽各增加1，对手畏缩。\n【使用后】你使用的牌不会带电。\n【使用后】每当你的主要阶段开始时，若你选择执行标准行动，则你可以使用至多2次岚之力，但不能选择同一项2次。',
      textjp: '風神ゲージと雷神ゲージを1ずつ上げ、相手を畏縮させる。\n【使用済】あなたが使用したカードは帯電しない。\n【使用済】あなたのメインフェイズの開始時に、あなたが標準行動を選択したなら、嵐の力を2回まで使用してもよい。だたし、同じ力は選べない。'
    }],
    girlBoard: [{
      id: '12-raira-a1-st',
      name: '【岚之力】',
      namejp: '【嵐の力】',
      baseType: '',
      types: ['extra'],
      text: '1风：虚（1）⇔ 距\n2风：抓1张牌，盖伏1张手牌。\n3风：你获得1点集中力，对手失去1点集中力。\n----\n1雷：本回合内你的下一次《攻击》获得+1/+0。\n2雷：进行一次“攻击距离0-4 伤害1/1”的攻击。\n3雷：本回合内你的下一次对装伤害不为“-”的《攻击》获得+0/+1。',
      textjp: '風1：ダスト（１）⇔間合。\n風2：カードを１枚引き、手札を１枚伏せ札にする。\n風3：あなたは集中力を１得て、相手は集中力を１失う。\n----\n雷1：このターンにあなたが次に行う《攻撃》は+1/+0となる。\n雷2：攻撃『適正距離0-4、1/1』を行う。\n雷3：このターンにあなたが次に行うオーラへのダメージが「-」でない《攻撃》は+0/+1となる。'
    }]
  }]
},
{
  name: 'UTSURO 虚路',
  namejp: 'ウツロ',
  nameen: 'UTSURO',
  desc: '灰尘～若虚中的樱花结晶的数目大于等于12，则你的一部分牌会获得强化。',
  descjp: '灰塵～ダストが12以上ならば、いくつかのカードが強化される。',
  // girlInfo: '身高：147cm\n喜欢的东西：お掃除、すごく辛いもの、一人遊び\n<b>--物語--</b>\n「灰よ、塵よ、集いて呑み込め……！」\nこの世界の力の源である桜花結晶は、その生成を司るホノカと塵化を司るウツロにより循環しています。役割からも分かる通り、かつて彼女は世界の根幹をなす強大なメガミでした。ですが今は違います。はるか昔の時代において、生成を司っていたヲウカとの対立によりかつてのウツロは封じられ、今の彼女はそこから零れた残滓に過ぎないのです。\n２０年前の一大事でその姿を現し、騒乱を引き起こしました。しかしユリナとホノカによって助けられ、今は彼女らと共に桜花決闘の運営を行っています。無感情で冷酷なように見えますが、本質は孤独を恐れる優しい気質をしています。',
  // girlInfojp: '身長：147cm\n好きなもの：お掃除、すごく辛いもの、一人遊び\n<b>--物語--</b>\n「灰よ、塵よ、集いて呑み込め……！」\nこの世界の力の源である桜花結晶は、その生成を司るホノカと塵化を司るウツロにより循環しています。役割からも分かる通り、かつて彼女は世界の根幹をなす強大なメガミでした。ですが今は違います。はるか昔の時代において、生成を司っていたヲウカとの対立によりかつてのウツロは封じられ、今の彼女はそこから零れた残滓に過ぎないのです。\n２０年前の一大事でその姿を現し、騒乱を引き起こしました。しかしユリナとホノカによって助けられ、今は彼女らと共に桜花決闘の運営を行っています。無感情で冷酷なように見えますが、本質は孤独を恐れる優しい気質をしています。',
  list: [{
    name: '镰',
    namejp: '鎌',
    nameen: 'SCYTHE',
    isSelect: false,
    pic: 'twiicon_sa_12.jpg',
    picq: 'sd_utsuro.png',
    normal: [{
      id: '13-utsuro-o-n-1',
      name: '圆月',
      namejp: '円月',
      baseType: 'normal',
      types: ['attack'],
      range: '5-7',
      damage: '2/2',
      text: '【常时】灰尘～若虚中的樱花结晶的数目大于等于12，则此《攻击》获得距离扩大（近1），且对装伤害变为“-”。',
      textjp: '【常時】灰塵-ダストが12以上ならば、この《攻撃》は距離拡大（近1）を得て、そのオーラへのダメージは「-」になる。'
    },
    {
      id: '13-utsuro-o-n-2',
      name: '黑之波动',
      namejp: '黒き波動',
      baseType: 'normal',
      types: ['attack'],
      range: '4-7',
      damage: '1/2',
      text: '【攻击后】若对手选择由装承受此次伤害，则检视对手的手牌，从中选择1张弃置。',
      textjp: '【攻撃後】相手がオーラへのダメージを選んだならば、相手の手札を見てその中から1枚を選び、それを捨て札にする。'
    },
    {
      id: '13-utsuro-o-n-3',
      name: '收割',
      namejp: '刈取り',
      baseType: 'normal',
      types: ['attack'],
      range: '4',
      damage: '-/0',
      text: '【攻击后】对手从其装、气、命三个区域中选择共2个樱花结晶移至虚。\n【攻击后】你可以选择对手的1张展开中的《付与》牌，将其上2个樱花结晶移至虚。',
      textjp: '【攻撃後】相手は相手のオーラ、フレア、ライフのいずれかから桜花結晶を合計2つダストへ移動させる。 \n【攻撃後】相手の付与札を1枚選んでもよい。そうした場合、その付与札の上から桜花結晶を2つダストへ送る。'
    },
    {
      id: '13-utsuro-o-n-4',
      name: '重压',
      namejp: '重圧',
      baseType: 'normal',
      types: ['action'],
      text: '对手从其装、气、命三个区域中选择1个樱花结晶移至虚。\n灰尘～若虚中的樱花结晶的数目大于等于12，则对手畏缩。',
      textjp: '相手は相手のオーラ、フレア、ライフのいずれかから桜花結晶を1つダストへ移動させる。 \n灰塵-ダストが12以上ならば、相手を畏縮させる。'
    },
    {
      id: '13-utsuro-o-n-5',
      name: '影之翅',
      namejp: '影の翅',
      baseType: 'normal',
      types: ['action'],
      text: '直到回合结束，当前距离增大2，达人距离增大2。',
      textjp: 'このターン中、現在の間合は2増加し、達人の間合は2大きくなる。'
    },
    {
      id: '13-utsuro-o-n-6',
      name: '影之壁',
      namejp: '影の壁',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '被对应的《攻击》获得-0/-1。',
      textjp: '対応した《攻撃》は+0/-1となる。'
    },
    {
      id: '13-utsuro-o-n-7',
      name: '遗灰咒',
      namejp: '遺灰呪',
      baseType: 'normal',
      types: ['enhance', 'fullpower'],
      capacity: '2',
      text: '【展开时】敌装（3）→虚 \n【破弃时】灰尘～若虚中的樱花结晶的数目大于等于12，则虚（2）→敌装，敌命（1）→虚',
      textjp: '【展開時】相オーラ→ダスト：3 \n【破棄時】灰塵-ダストが12以上ならば以下を行う。 \nダスト→相オーラ：2、相ライフ→ダスト：1'
    }],
    special: [{
      id: '13-utsuro-o-s-1',
      name: '灰灭',
      namejp: '灰滅',
      baseType: 'special',
      types: ['action'],
      cost: '24',
      text: '【常时】此牌的牌面费用减小X，X等于虚中的樱花结晶的数目。\n敌命（3）→虚\n将此牌移出游戏。',
      textjp: '【常時】このカードの消費はダストの数だけ少なくなる。 \n相ライフ→ダスト：3 \nこのカードを取り除く。'
    },
    {
      id: '13-utsuro-o-s-2',
      name: '虚伪',
      namejp: '虚偽',
      baseType: 'special',
      types: ['enhance', 'reaction'],
      capacity: '3',
      cost: '3',
      text: '【展开中】对手的《攻击》获得距离缩小（近1），且不结算其【攻击后】效果。\n【展开中】对手的《付与》牌的纳减小1，且不结算其【破弃时】效果。',
      textjp: '【展開中】相手の《攻撃》は距離縮小(近1)を得て、【攻撃後】効果が解決されない。 \n【展開中】相手の《付与》カードは納が1減少し、【破棄時】効果が解決されない。'
    },
    {
      id: '13-utsuro-o-s-3',
      name: '终末',
      namejp: '終末',
      baseType: 'special',
      types: ['enhance'],
      capacity: '3',
      cost: '2',
      text: '【展开中】当你因被攻击受到了大于等于1点的伤害时，该《攻击》结算完毕后将此牌上所有樱花结晶移至虚。\n【破弃时】结束当前阶段。\n----\n【再起】灰尘～虚中的樱花结晶的数目大于等于12。',
      textjp: '【展開中】あなたに1以上のダメージを与えた《攻撃》の解決後に、このカードの上の桜花結晶を全てをダストに送る。 \n【破棄時】現在のフェイズを終了する。 \n----\n【再起】灰塵-ダストが12以上である。'
    },
    {
      id: '13-utsuro-o-s-4',
      name: '魔食',
      namejp: '魔食',
      baseType: 'special',
      types: ['action'],
      cost: '4',
      text: '【使用后】每当你的准备阶段开始时，对手选择一项：\n1.敌装（1）→虚\n2.敌气（2）→虚',
      textjp: '【使用済】あなたの開始フェイズの開始時に相手は以下のどちらかを選ぶ。\n・相オーラ→ダスト：1\n・相フレア→ダスト：2'
    }]
  },
  {
    name: '尘',
    namejp: '塵',
    nameen: 'DUST',
    isSelect: false,
    pic: 'twiicon_sa_21.jpg',
    picq: 'sd_utsuro_a1.png',
    changenormal: [{
      changeIndex: '2',
      id: '13-utsuro-a1-n-2',
      name: '侵蚀之尘',
      namejp: '蝕みの塵',
      baseType: 'normal',
      types: ['attack'],
      range: '3-6',
      damage: '2/0',
      text: '【攻击后】若对手选择由命承受此次伤害，则敌气（2）→虚',
      textjp: '【攻撃後】相手がライフへのダメージを選んだならば、相フレア→ダスト：2'
    }],
    changespecial: [{
      changeIndex: '1',
      id: '13-utsuro-a1-s-1',
      name: '残响装置：枢式',
      namejp: '残響装置:枢式',
      baseType: 'special',
      types: ['attack'],
      range: '3-10',
      damage: '2/1',
      cost: '2',
      text: '终端\n【使用后】双方的结束阶段开始时，若虚中的樱花结晶的数目大于等于13，则终焉之影苏醒（将你手牌、牌库、盖牌区、弃牌区与付与区中的所有非王牌的牌移出游戏（不结算《付与》牌的破弃时效果），将『万象乖离残灭之影』『自灭往寂』『终焉将至』从追加牌区置入弃牌区并洗牌）。将『夙愿』从追加牌区以使用后状态加入王牌。抓1张牌。若自命中樱花结晶的数目大于等于6，则保留其中5个樱花结晶，其余移至虚。然后将此牌移出游戏。',
      textjp: '終端\n【使用済】あなたか相手の終了フェイズにダストが13以上ならば、終焉の影が蘇る。その後、このカードを取り除き、あなたの追加札から「望我」を使用済で得て、カードを1枚引き、あなたのライフが6以上ならば、ライフが5になるように桜花結晶をダストに移動させる。'
    }],
    changeExtra: [{
      id: '13-utsuro-a1-s-1-ex1',
      name: '夙愿',
      namejp: '望我',
      baseType: 'special',
      extraFrom: '13-utsuro-a1-s-1',
      types: ['action'],
      cost: '6',
      text: '【使用后】你不会受到伤害。\n----\n【即再起】你的主要阶段开始时。',
      textjp: '【使用済】あなたはダメージを受けない。 \n----\n【即再起】あなたのメインフェイズが開始する。'
    },
    {
      id: '13-utsuro-a1-s-1-ex2',
      name: '万象乖离残灭之影',
      namejp: '万象乖ク殲滅ノ影',
      baseType: 'normal',
      extraFrom: '13-utsuro-a1-s-1',
      types: ['attack', 'fullpower'],
      range: '0-3',
      damage: '-/0',
      text: '不可被对应\n【攻击后】对手从其装、命、气三个区域中选择共6个樱花结晶移至虚。',
      textjp: '対応不可 \n【攻撃後】相手は相手のオーラ、フレア、ライフのいずれかから桜花結晶を合計6つダストへ移動させる。'
    },
    {
      id: '13-utsuro-a1-s-1-ex3',
      name: '自灭往寂',
      namejp: '我ヲ亡クシテ静寂ヲ往ク',
      baseType: 'normal',
      extraFrom: '13-utsuro-a1-s-1',
      types: ['action', 'fullpower'],
      text: '你可以执行至多5次非《前进》的基本动作。\n进行一次“攻击距离4-10 伤害3/2”的攻击。\n进行一次“攻击距离5-10 伤害1/1”的攻击。\n进行一次“攻击距离6-10 伤害1/1”的攻击。',
      textjp: 'あなたは《前進》以外の基本動作を5回まで行ってもよい。 \n攻撃『適正距離4-10、3/2』を行う。 \n攻撃『適正距離5-10、1/1』を行う。 \n攻撃『適正距離6-10、1/1』を行う。'
    },
    {
      id: '13-utsuro-a1-s-1-ex4',
      name: '终焉将至',
      namejp: '終焉、来タレ',
      baseType: 'normal',
      extraFrom: '13-utsuro-a1-s-1',
      types: ['enhance'],
      capacity: '2',
      text: '【破弃时】对手将其牌库与手牌置入弃牌区。对手的集中力变为0，对手畏缩。',
      textjp: '【破棄時】相手は手札と山札をすべて捨て札にする。相手の集中力は0になる。相手を畏縮させる。'
    }]
  }]
},
{
  name: 'HONOKA 仄佳',
  namejp: 'ホノカ',
  nameen: 'HONOKA',
  desc: '开花～你的一部分牌在使用后可以与其他牌交换。',
  descjp: '開花～いくつのカードは使用した後で異なるカードへと変換される。',
  // girlInfo: '身高：147cm\n喜欢的东西：お料理、衣装作り、和菓子\n<b>--物語--</b>\n「塵はまた桜へ……そしてわたしたちの力へ！」\nこの世界の力の源である桜花結晶は、その生成を司るホノカと塵化を司るウツロにより循環しています。世界の根幹をなす力ではありますが、彼女はまだその力を使いこなせていません。彼女ははるか昔の時代で生成を司っていた原初の三柱・ヲウカが転生した姿であり、未成熟な存在なのです。\nある動乱でヲウカは危機に陥り、転生しました。そして２０年前の一大事においてまだ人間だった天音揺波の片手に宿り、彼女との絆を育み、今ではユリナ、ウツロと共に桜花決闘の運営を行っています。いい子ではあるのですが、最近は本性が見えてきたとの噂も？',
  // girlInfojp: '身長：147cm\n好きなもの：お料理、衣装作り、和菓子\n<b>--物語--</b>\n「塵はまた桜へ……そしてわたしたちの力へ！」\nこの世界の力の源である桜花結晶は、その生成を司るホノカと塵化を司るウツロにより循環しています。世界の根幹をなす力ではありますが、彼女はまだその力を使いこなせていません。彼女ははるか昔の時代で生成を司っていた原初の三柱・ヲウカが転生した姿であり、未成熟な存在なのです。\nある動乱でヲウカは危機に陥り、転生しました。そして２０年前の一大事においてまだ人間だった天音揺波の片手に宿り、彼女との絆を育み、今ではユリナ、ウツロと共に桜花決闘の運営を行っています。いい子ではあるのですが、最近は本性が見えてきたとの噂も？',
  list: [{
    name: '旗',
    namejp: '旗',
    nameen: 'FLAG',
    isSelect: false,
    pic: 'twiicon_sa_13.jpg',
    picq: 'sd_honoka.png',
    normal: [{
      id: '14-honoka-o-n-1',
      name: '精灵式',
      namejp: '精霊式',
      baseType: 'normal',
      types: ['attack'],
      range: '2-8',
      damage: '1/1',
      text: '不可被对应\n【攻击后】开花～你可以将这张『精灵式』与追加牌区中的『守护灵式』交换。若如此做，则你可以将『守护灵式』置于你的牌库底。',
      textjp: '対応不可 \n【攻撃後】開花-この「精霊式」を追加札の「守護霊式」と交換してもよい。そうした場合、その「守護霊式」を山札の底に置いてもよい。'
    },
    {
      id: '14-honoka-o-n-2',
      name: '樱吹雪',
      namejp: '桜吹雪',
      baseType: 'normal',
      types: ['attack'],
      range: '3-5',
      damage: '2/1',
      text: '【攻击后】对手选择一项：\n1.距（1）→自装；\n2.敌装（1）→距。',
      textjp: '【攻撃後】相手は以下のどちらかを選ぶ。\n・間合→自オーラ：1\n・相オーラ→間合：1'
    },
    {
      id: '14-honoka-o-n-3',
      name: '义旗共振',
      namejp: '義旗共振',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '2-9',
      damage: '2/2',
      text: '【攻击后】你可以抓1张牌。\n【攻击后】你可以将1张手牌置于你的牌库底。\n【攻击后】你可以将此牌置于你的牌库底。',
      textjp: '【攻撃後】カードを１枚引いてもよい。 \n【攻撃後】あなたは手札を1枚選び、それを山札の底に置いてもよい。 \n【攻撃後】このカードを山札の底に置いてもよい。'
    },
    {
      id: '14-honoka-o-n-4',
      name: '樱之翅',
      namejp: '桜の翅',
      baseType: 'normal',
      types: ['action'],
      text: '距（2）⇔虚\n将这张『樱之翅』与追加牌区中的『再生』交换。',
      textjp: '間合⇔ダスト：2 \nこの「桜の翅」を追加札の「再生」と交換する。'
    },
    {
      id: '14-honoka-o-n-5',
      name: '樱花护身符',
      namejp: '桜花のお守り',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '你可以从手牌中选择1张牌并盖伏。若如此做，则打消被对应的非王牌的《攻击》。\n开花～你可以将这张『樱花护身符』与追加牌区中的『暗淡的光辉』交换。若如此做，则你可以将『暗淡的光辉』置于你的牌库底。',
      textjp: 'あなたは手札を１枚選び、それを伏せ札にしてもよい。そうした場合、対応した切札でない《攻撃》を打ち消す。 \n開花-この「桜花のお守り」を追加札の「仄かなる輝き」と交換してもよい。そうした場合、その「仄かなる輝き」を山札の底に置いてもよい。'
    },
    {
      id: '14-honoka-o-n-6',
      name: '指挥',
      namejp: '指揮',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '【展开中】你的结束阶段开始时，进行一次“攻击距离1-5 伤害1/1 不可被对应”的攻击。',
      textjp: '【展開中】あなたの終了フェイズに攻撃『適正距離1-5、1/1、対応不可』を行う。'
    },
    {
      id: '14-honoka-o-n-7',
      name: '追风',
      namejp: '追い風',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '【展开中】你的《攻击》获得距离扩大（远1）。',
      textjp: '【展開中】あなたの《攻撃》は距離拡大(遠1)を得る。'
    }],
    special: [{
      id: '14-honoka-o-s-1',
      name: '感存于心',
      namejp: '胸に想いを',
      baseType: 'special',
      types: ['action'],
      cost: '5',
      text: '开花～将这张『感存于心』与追加牌区中的『结樱于手』交换，将『结樱于手』变为未使用状态。',
      textjp: '開花-この「胸に想いを」を追加札の「両手に華を」に交換し、未使用に戻す。'
    },
    {
      id: '14-honoka-o-s-2',
      name: '在此旗的名义之下',
      namejp: 'この旗の名の下に',
      baseType: 'special',
      types: ['attack'],
      range: '3-7',
      damage: '3/2',
      cost: '4',
      text: '【常时】当你使用此牌时，你可以选择你的1张展开中的《付与》牌。若此《攻击》对对手造成了伤害，则不将因结算伤害移动的樱花结晶移至气或虚，而改为移至所选择的《付与》牌上。',
      textjp: '【常時】このカードを使用するに際し、あなたの付与札を1つ選んでもよい。この《攻撃》のダメージにより移動する桜花結晶はダストやフレアでなく選ばれた付与札に可能ならば動かす。 \n(付与札が存在しないなど不可能な場合は通常通りに桜花結晶を動かす)'
    },
    {
      id: '14-honoka-o-s-3',
      name: '四季轮回',
      namejp: '四季はまた廻り来る',
      baseType: 'special',
      types: ['action', 'reaction'],
      cost: '1',
      text: '你可以从你的盖牌中选择1张牌，将其置于你的牌库底。\n你可以抓1张牌。\n盖伏1张手牌。若如此做，执行1次基本动作《装附》。\n【使用后】每当你的牌从追加牌区移动至其他区域时，你可以将此牌置入追加牌区，若如此做，则将此牌从追加牌区以未使用状态加入王牌。',
      textjp: 'あなたの伏せ札からカードを1枚選び、山札の底に置いてもよい。\nカードを1枚引いてもよい。\n手札を1枚伏せ札にする。そうした場合、基本動作《纏い》を1回行う。\n【使用済】あなたのカードが追加札から别の領域へと移動した時、このカードを追加札に移してもよい。その後、このカードを未使用で追加札から得る。'
    },
    {
      id: '14-honoka-o-s-4',
      name: '漫天的花道',
      namejp: '満天の花道で',
      baseType: 'special',
      types: ['enhance'],
      capacity: '5',
      cost: '2',
      text: '【展开中】若此牌上的樱花结晶将被移除，则不将其移至虚，而改为移至自装。若自装中樱花结晶的数目大于等于5，则改为将其移至自气。',
      textjp: '【展開中】この付与札の上の桜花結晶がダストへと送られるならば、それは代わりにあなたのオーラへと移動する。あなたのオーラが5以上ならば、代わりにあなたのフレアへ移動する。'
    }],
    extra: [{
      id: '14-honoka-o-n-1-ex1',
      name: '守护灵式',
      namejp: '守護霊式',
      baseType: 'normal',
      extraFrom: '14-honoka-o-n-1',
      types: ['attack', 'reaction'],
      range: '2-3',
      damage: '2/1',
      text: '【攻击后】虚（1）→自装\n【攻击后】开花～你可以将这张『守护灵式』与追加牌区中的『突击灵式』交换。若如此做，则你可以将『突击灵式』置于你的牌库底。',
      textjp: '【攻撃後】ダスト→自オーラ：1 \n【攻撃後】開花-この「守護霊式」を追加札の「突撃霊式」と交換してもよい。そうした場合、その「突撃霊式」を山札の底に置いてもよい。'
    },
    {
      id: '14-honoka-o-n-1-ex2',
      name: '突击灵式',
      namejp: '突撃霊式',
      baseType: 'normal',
      extraFrom: '14-honoka-o-n-1-ex1',
      types: ['attack'],
      range: '5',
      damage: '3/2',
      text: '不可被对应\n【攻击后】虚（1）→自命\n【攻击后】开花～你可以将这张『突击灵式』与追加牌区中的『神灵奥华』交换。若如此做，则你可以将『神灵奥华』置于你的牌库底。',
      textjp: '対応不可\n【攻撃後】ダスト→自ライフ：1\n【攻撃後】開花-この「突撃霊式」を追加札の「神霊ヲウカ」と交換してもよい。そうした場合、その「神霊ヲウカ」を山札の底に置いてもよい。'
    },
    {
      id: '14-honoka-o-n-1-ex3',
      name: '神灵奥华',
      namejp: '神霊ヲウカ',
      baseType: 'normal',
      extraFrom: '14-honoka-o-n-1-ex2',
      types: ['attack', 'fullpower'],
      range: '1-4',
      damage: '4/3',
      text: '不可被对应\n【攻击后】虚（2）→自装',
      textjp: '対応不可 \n【攻撃後】ダスト→自オーラ：2'
    },
    {
      id: '14-honoka-o-n-4-ex1',
      name: '再生',
      namejp: '再生',
      baseType: 'normal',
      extraFrom: '14-honoka-o-n-4',
      types: ['action', 'fullpower'],
      text: '虚（1）→自装\n虚（1）→自气\n将这张『再生』与追加牌区中的『樱之翅』交换。',
      textjp: 'ダスト→自オーラ：1 \nダスト→自フレア：1 \nこの「再生」を追加札の「桜の翅」と交換する。'
    },
    {
      id: '14-honoka-o-n-5-ex1',
      name: '暗淡余辉',
      namejp: '仄かなる輝き',
      baseType: 'normal',
      extraFrom: '14-honoka-o-n-5',
      types: ['attack'],
      range: '1-3',
      damage: '1/2',
      text: '',
      textjp: ''
    },
    {
      id: '14-honoka-o-s-1-ex1',
      name: '结樱于手',
      namejp: '両手に華を',
      baseType: 'special',
      extraFrom: '14-honoka-o-s-1',
      types: ['action', 'fullpower'],
      cost: '0',
      text: '执行1次基本动作《装附》。（此次《装附》不会触发此牌的替代效果）\n【使用后】你的结束阶段开始时，执行1次基本动作《装附》。\n【使用后】开花～你可以将你的基本动作《装附》的效果改为将1个樱花结晶从虚或自装移至此牌上。若此牌上的樱花结晶的数目因此恰好变为5，则将它们移至自气，将这张『结樱于手』与追加牌区中的『旋即旌招幕展』交换，将『旋即旌招幕展』变为未使用状态。',
      textjp: '基本動作《纏い》を1回行う。\n【使用済】あなたの終了フェイズに基本動作《纏い》を1回行う。\n【使用済】開花-あなたが基本動作《纏い》を行うならば、代わりにダストまたはあなたのオーラからこのカードの上に桜花結晶を1つ置いてもよい。その結果、ちょうど5つになったならば、それらの桜花結晶をあなたのフレアへと移動させ、この「両手に華を」を追加札の「そして新たな幕開けを」に交換し、未使用に戻す。'
    },
    {
      id: '14-honoka-o-s-1-ex2',
      name: '旋即旌招幕展',
      namejp: 'そして新たな幕開けを',
      baseType: 'special',
      extraFrom: '14-honoka-o-s-1-ex1',
      types: ['action'],
      cost: '5',
      text: '【使用后】你的结束阶段开始时，进行一次“攻击距离0-10 伤害X/X 不可被对应 【常时】X等于场上樱花结晶的数目恰等于5的区域的个数。”的攻击。',
      textjp: '【使用済】あなたの終了フェイズに攻撃『適正距離0-10、X/X、対応不可 【常時】Xは桜花結晶がちょうど5つある領域の数に等しい』を行う。'
    }]
  },
  {
    name: '勾玉',
    namejp: '勾玉',
    isSelect: false,
    pic: 'twiicon_sa_37.jpg',
    picq: 'sd_honoka_a1.png',
    changenormal: [{
      changeIndex: '1',
      id: '14-honoka-a1-n-1',
      name: '樱之双剑',
      namejp: '桜の双剣',
      baseType: 'normal',
      types: ['attack'],
      range: '4-6',
      damage: '2/1',
      text: '【攻击后】虚（1）→自装\n【攻击后】将这张『樱之双剑』与追加牌区中的『影之两手』交换。若如此做，则你可以将『影之两手』置于你的牌库底。',
      textjp: '【攻撃後】ダスト→自オーラ：1\n【攻撃後】この「桜の双剣」を追加札の「影の両手」と交換する。そうした場合、その「影の両手」を山札の底に置いてもよい。'
    }],
    changespecial: [{
      changeIndex: '1',
      id: '14-honoka-a1-s-1',
      name: '独醒于昏明',
      namejp: 'ひとり目覚めて',
      cost: '3',
      baseType: 'special',
      types: ['action'],
      text: '敌装（1）→自装\n开花～根据虚中樱花结晶的数目，将这张『独醒于昏明』与下述的牌进行交换，并置于你的牌库底。\n小于等于5……『循迹访清荧』\n大于等于6……『彷徨徒视影』',
      textjp: '相オーラ→自オーラ：1\n開花―ダストに応じてこの「ひとり目覚めて」を以下のカードと交換し、それを山札の底に置く。\n5以下…「標をたどり」\n6以上…「影面見向き」'
    }],
    changeExtra: [{
      id: '14-honoka-a1-n-1-ex1',
      extraFrom: '14-honoka-a1-n-1',
      name: '影之两手',
      namejp: '影の両手',
      baseType: 'normal',
      types: ['attack'],
      range: '3-4',
      damage: '1/0',
      text: '【攻击后】若对手选择由装承受此次伤害，则检视对手的手牌，从中选择1张弃置。若对手选择由命承受此次伤害，则敌气（2）→虚\n【攻击后】将这张『影之两手』与追加牌区中的『樱之双剑』交换。若如此做，则你可以将『樱之双剑』置于你的牌库底。',
      textjp: '【攻撃後】相手がオーラへのダメージを選んだならば、相手の手札を見てその中から1枚を選び、それを捨て札にする。相手がライフへのダメージを選んだならば、相フレア→ダスト：2\n【攻撃後】この「影の両手」を追加札の「桜の双剣」と交換する。そうした場合、その「桜の双剣」を山札の底に置いてもよい。'
    }, {
      id: '14-honoka-a1-s-1-ex1',
      extraFrom: '14-honoka-a1-s-1',
      name: '循迹访清荧',
      namejp: '標をたどり',
      baseType: 'normal',
      types: ['action'],
      text: '执行至多2次各不相同的基本动作。\n开花～根据虚中的樱花结晶的数目，将这张『循迹访清荧』与下述的牌进行交换，并将其变为未使用状态。\n0……『熠熠见繁樱』\n大于等于1……『觫觫结袂情』',
      textjp: '異なる基本動作を合計2回まで行う。\n開花―ダストに応じてこの「標をたどり」を以下のカードと交換し、それを未使用に戻す。\n0………「桜花眩く輝かん」\n1以上…「ふたり震える手を取ろう」'
    }, {
      id: '14-honoka-a1-s-1-ex2',
      extraFrom: '14-honoka-a1-s-1',
      name: '彷徨徒视影',
      namejp: '影面見向き',
      baseType: 'normal',
      types: ['action'],
      text: '对手从其气或命中选择1个樱花结晶移至虚。\n开花～根据虚中的樱花结晶的数目，将这张『彷徨徒视影』与下述的牌进行交换，并将其变为未使用状态。\n大于等于12……『踽踽虚路行』\n小于等于11……『觫觫结袂情』',
      textjp: '相手は相手のフレア、ライフのいずれかから桜花結晶を1つダストへ移動させる。\n開花―ダストに応じてこの「影面見向き」を以下のカードと交換し、それを未使用に戻す。\n12以上…「旧き虚路を歩みゆく」\n11以下…「ふたり震える手を取ろう」'
    }, {
      id: '14-honoka-a1-s-1-ex3',
      extraFrom: '14-honoka-a1-s-1-ex1',
      name: '熠熠见繁樱',
      namejp: '桜花眩く輝かん',
      baseType: 'special',
      types: ['attack'],
      range: '3-5',
      damage: 'X/2',
      cost: '1',
      text: '超克\n【常时】X等于此牌上的樱花结晶的数目。\n【攻击后】将1个樱花结晶从虚移至此牌上。\n----\n【再起】至少1个区域中的樱花结晶的数目恰等于5。',
      textjp: '超克\n【常時】Xはこのカードの上の桜花結晶の数に等しい。\n【攻撃後】このカードの上にダストから1つ桜花結晶を置く。\n----\n【再起】桜花結晶がちょうど5つある領域が1つ以上ある。'
    }, {
      id: '14-honoka-a1-s-1-ex4',
      extraFrom: '14-honoka-a1-s-1-ex2',
      name: '觫觫结袂情',
      namejp: 'ふたり震える手を取ろう',
      baseType: 'special',
      types: ['action'],
      cost: '5',
      text: '敌装（5）→自装',
      textjp: '相オーラ→自オーラ：5'
    }, {
      id: '14-honoka-a1-s-1-ex5',
      extraFrom: '14-honoka-a1-s-1-ex2',
      name: '踽踽虚路行',
      namejp: '旧き虚路を歩みゆく',
      baseType: 'special',
      types: ['action'],
      cost: '3',
      text: '对手失去下一个主要阶段。然后将此牌移出游戏。',
      textjp: '相手は次のメインフェイズを失う。\nこのカードを取り除く。'
    }]
  }
  ]
},
{
  name: 'KORUNU 凝努',
  namejp: 'コルヌ',
  nameen: 'KORUNU',
  desc: '冻结～冻结是将一个冻结指示物置于敌装中，填充敌装中的空位。被冻结时，基本动作《聚气》的效果改为「移除一个冻结指示物」。',
  descjp: '凍結～凍結させ、凍結トークンをオーラに置いてオーラの空きを埋められる。凍結している限り、基本動作《宿し》は「凍結トークンを1つ取り除く」に変化する。',
  // girlInfo: '身高：165cm\n喜欢的东西：役割を全うすること、見どころのある者、氷上舞踏\n<b>--物語--</b>\n「貴様の器を見定めてやろう」\nこの地の北限は玄関口である御冬の里を最後に、人の住まわぬ地とされています。旧い時代よりその地の番人としての役割を担ってきたのが彼女、氷雪を象徴するメガミ・コルヌです。\n彼女の気質を述べるならば、第一には堅物の仕事主義者です。彼女は己の役割に信念を持ち、それを順守することを何よりも優先します。自分にも他人にも厳しく、信念の共有を求めます。第二にはドＳで、相手の苦闘を楽しんでいる節があります。しかし苦難を乗り越えた者は心から認め、優しさも見せるようです。',
  // girlInfojp: '身長：165cm\n好きなもの：役割を全うすること、見どころのある者、氷上舞踏\n<b>--物語--</b>\n「貴様の器を見定めてやろう」\nこの地の北限は玄関口である御冬の里を最後に、人の住まわぬ地とされています。旧い時代よりその地の番人としての役割を担ってきたのが彼女、氷雪を象徴するメガミ・コルヌです。\n彼女の気質を述べるならば、第一には堅物の仕事主義者です。彼女は己の役割に信念を持ち、それを順守することを何よりも優先します。自分にも他人にも厳しく、信念の共有を求めます。第二にはドＳで、相手の苦闘を楽しんでいる節があります。しかし苦難を乗り越えた者は心から認め、優しさも見せるようです。',
  list: [{
    name: '橇',
    namejp: '橇',
    nameen: 'SKATE BLADE',
    isSelect: false,
    pic: 'twiicon_sa_22.jpg',
    picq: 'sd_korunu.png',
    normal: [{
      id: '15-korunu-o-n-1',
      name: '雪刃',
      namejp: '雪刃',
      baseType: 'normal',
      types: ['attack'],
      range: '3-4',
      damage: '1/1',
      text: '【攻击后】冻结对手1次。',
      textjp: '【攻撃後】相手は1回凍結する。'
    },
    {
      id: '15-korunu-o-n-2',
      name: '旋回刃',
      namejp: '旋回刃',
      baseType: 'normal',
      types: ['attack'],
      range: '2-3',
      damage: '2/2',
      text: '【常时】若此《攻击》被对手对应，则每张对应此《攻击》的牌结算完毕后虚（2）⇔距',
      textjp: '【常時】この《攻撃》が対応されたならば、対応したカードの解決後に間合⇔ダスト:2'
    },
    {
      id: '15-korunu-o-n-3',
      name: '剑舞',
      namejp: '剣の舞',
      baseType: 'normal',
      types: ['attack'],
      range: '4-5',
      damage: '2/1',
      text: '【常时】若敌装中没有空位，则此《攻击》获得+1/+1。',
      textjp: '【常時】相手のオーラに空きがないならば、この《攻撃》は+1/+1となる。'
    },
    {
      id: '15-korunu-o-n-4',
      name: '渡雪',
      namejp: '雪渡り',
      baseType: 'normal',
      types: ['action'],
      text: '距（1）⇔虚\n若敌装中没有空位，则你可以选择虚（1）→距',
      textjp: '間合⇔ダスト:1\n相手のオーラの空きがないならば、ダスト→間合：1を行ってもよい'
    },
    {
      id: '15-korunu-o-n-5',
      name: '绝对零度',
      namejp: '絶対零度',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '全力化：进行一次“攻击距离2-5 伤害1/2”的攻击。冻结对手，直至敌装中没有空位为止。\n执行1次基本动作《装附》。若敌装中有至少3个冻结指示物，则再执行1次基本动作《装附》。',
      textjp: '全力化:攻撃『適正距離2-5、1/2』を行い、相手はオーラの空きがなくなるまで凍結する。\n基本動作《纏い》を1回行う。相手が3つ以上凍結しているならばさらにもう1回行う。'
    },
    {
      id: '15-korunu-o-n-6',
      name: '冻僵',
      namejp: 'かじかみ',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '【展开时】冻结对手1次。\n【展开中】对手不能执行基本动作《聚气》。',
      textjp: '【展開時】相手は1回凍結する。\n【展開中】相手は基本動作《宿し》を行えない。'
    },
    {
      id: '15-korunu-o-n-7',
      name: '霜之棘',
      namejp: '霜の茨',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '【展开中】每个你的回合内，你进行的第一次非王牌的《攻击》获得+1/+1。\n【展开中】若对手被冻结，则你的准备阶段从所有《付与》牌上移除樱花结晶时可以不移除此牌上的樱花结晶。',
      textjp: '【展開中】あなたのターンにおけるあなたの最初の切札でない《攻撃》は+1/+1となる。\n【展開中】相手が凍結しているならば、\nあなたの開始フェイズの処理でこのカードの上の桜花結晶を移動させなくてもよい。'
    }],
    special: [{
      id: '15-korunu-o-s-1',
      name: '凛冽冰雨',
      namejp: 'コンルルヤンペ',
      baseType: 'special',
      types: ['attack'],
      range: '2-3',
      damage: '2/3',
      cost: '4',
      text: '【攻击后】若对手选择由装承受此次伤害，则冻结对手，直至敌装中没有空位为止。',
      textjp: '【攻撃後】相手がオーラへのダメージを選んだならば、相手はオーラの空きがなくなるまで凍結する。'
    },
    {
      id: '15-korunu-o-s-2',
      name: '刺骨霜风',
      namejp: 'レタルレラ',
      baseType: 'special',
      types: ['action', 'reaction'],
      cost: '2',
      text: '若敌装中没有空位，则打消被对应的《攻击》。否则距（1）→敌装',
      textjp: '相手のオーラに空きがないならば、対応した《攻撃》を打ち消す。そうでなければ、間合→相オーラ：1'
    },
    {
      id: '15-korunu-o-s-3',
      name: '纷飞寒雪',
      namejp: 'ウパシトゥム',
      baseType: 'special',
      types: ['attack'],
      range: '3-6',
      damage: '0/-',
      cost: '0',
      text: '【攻击后】冻结对手1次。\n（即使因此效果使敌装变为没有空位的状态，此牌也会因为仍在使用中而不会变为未使用状态。）----\n【即再起】敌装从有空位的状态变为没有空位的状态。',
      textjp: '【攻撃後】相手は1回凍結する。(この効果でオーラの空きがなくなっても、まだ使用中なので未使用には戻らない)----\n【即再起】相手のオーラが空いた状態から空きがなくなる。'
    },
    {
      id: '15-korunu-o-s-4',
      name: '彼世深渊',
      namejp: 'ポルチャルトー',
      baseType: 'special',
      types: ['enhance'],
      capacity: '1',
      cost: '2',
      text: '【常时】此牌可以如《对应》牌一样对应《攻击》使用。若以此法使用，则此牌的牌面费用视为4。\n【展开时】距（1） ⇔ 虚\n冻结对手1次。\n【破弃时】你可以再次使用此牌。若以此法使用，则此牌的纳视为4。（仍需支付费用）',
      textjp: '【常時】このカードを消費４で対応を持つかのように相手の《攻撃》に割り込んで使用してもよい。\n【展開時】間合⇔ダスト：1\n相手は１回凍結する。\n【破棄時】このカードを納４として使用してもよい。（消費は支払う）'
    }]
  }]
},
{
  name: 'YATSUHA 八叶',
  namejp: 'ヤツハ',
  nameen: 'YATSUHA',
  desc: '镜映～镜映数等于你的装，气，命和对手对应区域中的樱花结晶相同的区域数目。',
  descjp: '鏡映～あなたと相手のオーラ、フレア、ライフで値が一致している個数が鏡映数となる。',
  // girlInfo: '身高：157cm\n喜欢的东西：お買い物、小物集め、旅\n<b>--物語--</b>\n「私は誰なのか。それを探すのを、手伝ってくれますか？」\n北限で目覚めた正体不明のメガミ、それがヤツハです。自らの名前を除いて記憶がなく、その権能も定かではありません。しかし北限での騒乱で垣間見えた力は暴虐的で恐ろしいものでした。\n今は自らを知るためにクルルやハツミと行動を共にしています。桜降る代の各地を巡る旅を通してこの世界を知り、自らのいるべき場所を探し続けています。知識こそないものの頭は良いようですが、ちょっと感性のピントはずれているようにも見えます。彼女が未知の果てに何を見出すのか。それはまだ、これからのお話。',
  // girlInfojp: '身長：157cm\n好きなもの：お買い物、小物集め、旅\n<b>--物語--</b>\n「私は誰なのか。それを探すのを、手伝ってくれますか？」\n北限で目覚めた正体不明のメガミ、それがヤツハです。自らの名前を除いて記憶がなく、その権能も定かではありません。しかし北限での騒乱で垣間見えた力は暴虐的で恐ろしいものでした。\n今は自らを知るためにクルルやハツミと行動を共にしています。桜降る代の各地を巡る旅を通してこの世界を知り、自らのいるべき場所を探し続けています。知識こそないものの頭は良いようですが、ちょっと感性のピントはずれているようにも見えます。彼女が未知の果てに何を見出すのか。それはまだ、これからのお話。',
  list: [{
    name: '镜',
    namejp: '鏡',
    nameen: 'MIRROR',
    isSelect: false,
    pic: 'twiicon_sa_23.jpg',
    picq: 'sd_yatsuha.png',
    normal: [{
      id: '16-yatsuha-o-n-1',
      name: '星之爪',
      namejp: '星の爪',
      baseType: 'normal',
      types: ['attack'],
      range: '3-4',
      damage: '3/2',
      text: '不可被对应（通常牌）\n【攻击后】自装（1）→敌气',
      textjp: '対応不可（通常札）\n【攻撃後】自オーラ→相フレア：1'
    },
    {
      id: '16-yatsuha-o-n-2',
      name: '暗之颚',
      namejp: '昏い咢',
      baseType: 'normal',
      types: ['attack'],
      range: '4',
      damage: '3/1',
      text: '不可被对应（通常牌）\n【常时】此《攻击》获得+0/+X。X等于镜映数。\n【攻击后】你畏缩。',
      textjp: '対応不可（通常札）\n【常時】この《攻撃》は+0/+Xとなる。Xは鏡映数に等しい。\n【攻撃後】あなたは畏縮する。'
    },
    {
      id: '16-yatsuha-o-n-3',
      name: '镜之恶魔',
      namejp: '鏡の悪魔',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '2-3',
      damage: '5/3',
      text: '【攻击后】自命（1）→虚',
      textjp: '【攻撃後】自ライフ→ダスト：1'
    },
    {
      id: '16-yatsuha-o-n-4',
      name: '幻影步法',
      namejp: '幻影歩法',
      baseType: 'normal',
      types: ['action'],
      text: '获得1点集中力。选择1项：\n1.本回合内，当前距离增大1，达人距离增大1；\n2.本回合内，当前距离减小1，达人距离减小1。',
      textjp: 'あなたは集中力を1得る。以下から1つを選ぶ。\n・このターン中、現在の間合は1増加し、達人の間合は1大きくなる。\n・このターン中、現在の間合は1減少し、達人の間合は1小きくなる。\n'
    },
    {
      id: '16-yatsuha-o-n-5',
      name: '意志',
      namejp: '意志',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '选择一项或都选：\n1.自装（1）⇔自气\n2.敌装（1）⇔敌气',
      textjp: '以下のどちらかまたは両方を行う。\n・自オーラ⇔自フレア：1\n・相オーラ⇔相フレア：1'
    },
    {
      id: '16-yatsuha-o-n-6',
      name: '契约',
      namejp: '契約',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '敌气（1）→自装\n下一个结束阶段开始时，若敌气中的樱花结晶的数目小于等于自气，则自装（1）→敌气',
      textjp: '相フレア→自オーラ：1\n次の終了フェイズに相手のフレアがあなたのフレア以下ならば、\n自オーラ→相フレア：1'
    },
    {
      id: '16-yatsuha-o-n-7',
      name: '寄花',
      namejp: '寄花',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '破绽\n【常时】此牌的纳减小X，X等于镜映数。\n【破弃时】进行一次“攻击距离1-4 伤害0/0 【攻击后】敌装（2）→自装”的攻击。',
      textjp: '隙\n【常時】このカードの納は鏡映数だけ小さくなる。\n【破棄時】攻撃『適正距離1-4、0/0、【攻撃後】相オーラ→自オーラ：2』を行う。'
    }],
    special: [{
      id: '16-yatsuha-o-s-1',
      name: '双叶镜的祟神',
      namejp: '双葉鏡の祟り神',
      baseType: 'special',
      types: ['action', 'reaction'],
      cost: '4',
      text: '若自命中的樱花结晶的数目小于敌命，则进行一次《攻击》，该《攻击》为被对应的《攻击》的复制，且视为该《攻击》也对应了原《攻击》。\n（复制的《攻击》的攻击距离、伤害、【攻击后】效果、有无超克、使用女神均与被复制的攻击相同。攻击距离与伤害使用由其他所有效果修正后的值）\n打消被对应的非王牌的《攻击》。',
      textjp: 'あなたのライフが相手のライフよりも小さいならば、対応した《攻撃》複製である《攻撃》を行う。その《攻撃》は対応した《攻撃》に対応しているものとして扱う。（複製とは適正距離、ダメージ、【攻撃後】効果、超克の有無、使用メガミが同一の攻撃である。適正距離やダメージは全ての効果を適用した後のものを用いる）\n対応した切札でない《攻撃》を打ち消す。'
    },
    {
      id: '16-yatsuha-o-s-2',
      name: '四叶镜的童谣',
      namejp: '四葉鏡のわらべ唄',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '选择1张展开中的非王牌的《付与》牌，将其上所有樱花结晶移至虚。\n若该《付与》牌因此移动至弃牌区，则你可以使用该牌。若如此做，且该牌具有《全力》副类别，则此牌额外获得终端。',
      textjp: '切札でない付与札を1つ選び、その上から桜花結晶全てをダストに送る。\nその《付与》カードがいずれかの捨て札にあるならば、そのカードを消費を支払わずに使用してもよい。そうした場合、そのカードが《全力》ならばこのカードは終端を得る。'
    },
    {
      id: '16-yatsuha-o-s-3',
      name: '六叶镜的星海',
      namejp: '六葉鏡の星の海',
      baseType: 'special',
      types: ['attack'],
      range: '3-7',
      damage: '3/1',
      cost: '5',
      text: '超克 不可被对应（通常牌）\n【常时】此《攻击》获得+X/+X。X等于镜映数。',
      textjp: '超克　対応不可（通常札） \n【常時】この《攻撃》は＋X/+Xとなる。Xは鏡映数に等しい。'
    },
    {
      id: '16-yatsuha-o-s-4',
      name: '八叶镜的映界',
      namejp: '八葉鏡の向こう側',
      baseType: 'special',
      types: ['enhance'],
      capacity: '5',
      cost: '2',
      text: '终端\n【展开中】你的牌的效果中的箭头（→）变为双箭头（⇔）。\n【破弃时】将此牌移出游戏。',
      textjp: '終端\n【展開中】あなたのカードの矢印(→)は両矢印(⇔)になる。\n【破棄時】このカードを取り除く。'
    }]
  }, {
    name: '花',
    namejp: '花',
    isSelect: false,
    pic: 'twiicon_sa_41.jpg',
    picq: 'sd_yatsuha_a1.png',
    changenormal: [],
    changespecial: [{
      changeIndex: '4',
      id: '16-yatsuha-a1-s-4',
      name: '八叶镜的徒樱',
      namejp: '八葉鏡の徒桜',
      baseType: 'special',
      cost: 1,
      types: ['action'],
      text: '终端 距离限制（0-7）\n【使用时/使用后】当你使用此牌时或将要重铸牌库时，你可以从弃牌或手牌中选择1张八叶的牌，展示该牌，然后将其变为完全态。若如此做，则你畏缩。\n（例如，若你展示了手牌中的『星之爪』，则将其与追加牌区中的『星尘之利爪』交换，并加入手牌。）',
      textjp: '終端　間合制限（0-7）\n【使用時/使用済】使用時とあなたが山札を再構成する直前に、あなたの捨て札または手札にあるヤツハのカード1枚を公開し、完全態にしてもよい。そうした場合、あなたは畏縮する。\n（「星の爪」なら「星辰の鉤爪」が同じ領域に加える）'
    }],
    changeExtra: [{
      id: '16-yatsuha-a1-n-1-ex1',
      extraFrom: '16-yatsuha-o-n-1',
      name: '星辰之利爪',
      namejp: '星辰の鉤爪',
      baseType: 'normal',
      types: ['attack'],
      range: '3-4',
      damage: '2/1',
      text: '【攻击后】敌气（1）→自装',
      textjp: '【攻撃後】相フレア→自オーラ：1。'
    }, {
      id: '16-yatsuha-a1-n-2-ex1',
      extraFrom: '16-yatsuha-o-n-2',
      name: '深渊之巨吻',
      namejp: '深淵の大口',
      baseType: 'normal',
      types: ['attack'],
      range: '4-5',
      damage: '2/1',
      text: '不可被对应\n【常时】此攻击得+X/+X，X等于镜映数。',
      textjp: '対応不可\n【常時】この《攻撃》は+Ｘ/+Ｘとなる。Ｘは鏡映数に等しい。'
    }, {
      id: '16-yatsuha-a1-n-3-ex1',
      extraFrom: '16-yatsuha-o-n-3',
      name: '现世之魔物',
      namejp: '本当の怪物',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '1-3',
      damage: '4/1',
      text: '【攻击后】若对手选择由命承受此《攻击》的伤害，则\n敌命（1）→自命',
      textjp: '【攻撃後】相手がライフへのダメージを選んだならば、\n相ライフ→自ライフ：1。'
    }, {
      id: '16-yatsuha-a1-n-4-ex1',
      extraFrom: '16-yatsuha-o-n-4',
      name: '幻影联动',
      namejp: '幻影連携',
      baseType: 'normal',
      types: ['action'],
      text: '选择1项：\n1.本回合内，当前距离增大1，达人距离增大1；\n2.本回合内，当前距离减小1，达人距离减小1。\n然后进行一次“攻击距离3-5 伤害2/1”的攻击。',
      textjp: '以下から1つを選ぶ。\n・このターン中、現在の間合は1増加し、達人の間合は1大きくなる。\n・このターン中、現在の間合は1減少し、達人の間合は1小さくなる。\nその後、攻撃『適正距離3-5、2/1』を行う。'
    }, {
      id: '16-yatsuha-a1-n-5-ex1',
      extraFrom: '16-yatsuha-o-n-5',
      name: '决意',
      namejp: '決意',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '选择一项或都选：\n1.自装（1）⇔自气\n2.若被对应的《攻击》非王牌且对装伤害小于等于X，则打消被对应的《攻击》。X等于镜映数加1。',
      textjp: '以下のどちらかまたは両方を行う。\n・自オーラ↔自フレア：1\n・対応した切札でない《攻撃》のオーラへのダメージがX以下ならば、その《攻撃》を打ち消す。Xは鏡映数に1を足した値に等しい。'
    }, {
      id: '16-yatsuha-a1-n-6-ex1',
      extraFrom: '16-yatsuha-o-n-6',
      name: '盟约',
      namejp: '盟約',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '选择1项：\n1.敌装（1）⇔自气\n2.敌气（1）⇔自装',
      textjp: '以下から1つを選ぶ。\n・相オーラ↔自フレア：1。\n・相フレア↔自オーラ：1。'
    }, {
      id: '16-yatsuha-a1-n-7-ex1',
      extraFrom: '16-yatsuha-o-n-7',
      name: '徒寄花',
      namejp: '徒寄花',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '【破弃时】根据你的八叶的牌变为完全态的次数结算以下效果。\n小于等于3……你可以从弃牌或手牌中选择1张八叶的牌，展示该牌，然后将其变为完全态。\n大于等于4……将此牌置于牌库底，敌命（2）→游戏外',
      textjp: '【破棄時】完全態にした枚数に応じて以下を行う。\n3以下…あなたの捨て札または手札にあるヤツハのカード1枚を公開し、完全態にしてもよい。\n4以上…このカードを山札の底に置き、相ライフ→ゲーム外:2。'
    }]
  },
  {
    name: '魂',
    namejp: '魂',
    isSelect: false,
    pic: 'twiicon_sa_45.jpg',
    picq: 'sd_yatsuha_aa1.png',
    changenormal: [
      {
        changeIndex: '7',
        id: '16-yatsuha-aa1-n-7',
        baseType: 'normal',
        types: ['enhance'],
        capacity: '1',
        namejp: '見知らぬ世界',
        name: '万叶仍未识',
        textjp: '【常時】このカードがあなたがこのゲームで初めて使用するカードならば、使用するに際し、ゲーム外から桜花結晶を納めてもよい。\n【破棄時】あなたは基本動作《前進》を2回行う。その後、このカードを取り除き。追加札から「色づく世界」を未使用で得る。',
        text: '【常时】若此牌是你本局游戏中使用的第一张牌，则你可以选择游戏外的樱花结晶作为此牌的纳。\n【破弃时】进行2次基本动作《前进》。然后将此牌移出游戏，将『千芳犹增色』从追加牌区以未使用状态加入王牌。'
      }
    ],
    changespecial: [
      {
        changeIndex: '4',
        id: '16-yatsuha-aa1-s-4',
        baseType: 'special',
        types: ['action'],
        cost: '4',
        namejp: '彼女にとっての自我と決意',
        name: '此心所念之神与魂',
        textjp: '捨て札、伏せ札、手札のいずれかからヤツハのカードを1枚公開し、そのカードを完全態にしてもよい。その後、そのカードを山札の上に置いてもよい。\n【使用済】あなたはある《攻撃》に対応を行う代わりにこのカードを取り除き、手札から他のメガミのカード1枚を捨て札にしてもよい。そうした場合、その《攻撃》を打ち消す。\n（対応不可を持つ《攻撃》にも行える）',
        text: '你可以从弃牌、盖牌或手牌中选择1张八叶的牌。展示该牌，然后将其变为完全态。你可以将该牌置于牌库顶。\n【使用后】每当结算对你进行的《攻击》时，你可以选择不使用牌来对应该《攻击》，而改为将此牌移出游戏，并从手牌中弃置1张其他女神的牌。若如此做，则打消被对应的《攻击》。\n（对于具不可被对应关键字的《攻击》也可以如此做，但对于对应使用的《攻击》牌生成的攻击不能如此做）'
      }
    ],
    girlBoard: [
      {
        id: '16-yatsuha-aa1-t-1',
        namejp: '【桜降る代の旅路】',
        name: '【散樱代的旅途】',
        textjp: '桜降る代の旅路に出発するならば、旅路の面を表として、任意の辺を下に向けて用意する。これによりしたに向けた箇所が始点となる。その後、ダストから桜花結晶1つを始点に置く。\n----家路----\n手札からカードを1枚まで選ぶ。選ばれたカード以外のあなたの通常札全てを思い出に仕舞い、この上の桜花結晶をダストに送り、追加札から「彼女にとっての桜降る代」を未使用で得る。\n----旅路----\n・カードを1枚引く。\n・あなたは集中力を1得る。\n・あなたか相手の付与札を1つ選ぶ。その付与札から桜花結晶を1つダストに送るか、その付与札に桜花結晶をダストから1つ置く。\n・捨て札か伏せ札からカードを1枚選ぶ。それを山札の底に置く。',
        text: '开始散樱代的旅途时，将此牌翻为旅途面朝上，并旋转至任意一边向下。向下的一边上所述的地点变为出发地。然后将1个樱花结晶从虚移至出发地。\n----归途----\n选择至多1张手牌。将你的牌库、手牌、弃牌、盖牌与付与区中除所选择的牌以外的所有通常牌背面朝上置入回忆区（不结算《付与》牌的破弃时效果，仅你可以检视这些牌），将此牌上的樱花结晶移至虚，将『此目所及之散樱代』从追加牌区以未使用状态加入王牌。\n----旅途----\n1.抓1张牌\n2.获得1点集中力\n3.选择你或对手的1张展开中的《付与》牌。将该牌上1个樱花结晶移至虚，或将1个樱花结晶从虚移至该牌上。\n4.从弃牌或盖牌中选择1张牌，将其置于牌库底。'
      }
    ],
    changeExtra: [
      {
        id: '16-yatsuha-aa1-n-7-ex1',
        extraFrom: '16-yatsuha-aa1-n-7',
        baseType: 'special',
        types: ['action'],
        cost: '2',
        namejp: '色づく世界',
        name: '千芳犹增色',
        textjp: '桜降る代の旅路に任意の始点から出発する。\n【使用済】各ターンの開始フェイズの開始時に所在地の効果を解決し、桜花結晶を次の位置へと時計回りに動かす。始点の効果を2回目に解決するならば、代わりに家路の効果を解決する。',
        text: '从任意起点出发，开始散樱代的旅途。（仅寄宿了自我八叶的玩家可以开始旅途，每局游戏中每名玩家仅能开始旅途一次）\n【使用后】每回合的准备阶段开始时，结算所在地的效果，然后将樱花结晶沿顺时针方向移至下一个地点。当将要第2次结算出发地的效果时，不结算出发地的效果，而改为结算归途的效果。'
      },
      {
        id: '16-yatsuha-aa1-n-7-ex2',
        extraFrom: '16-yatsuha-aa1-n-7-ex1',
        baseType: 'special',
        cost: '0',
        types: ['action'],
        namejp: '彼女にとっての桜降る代',
        name: '此目所及之散樱代',
        textjp: '思い出からカードを1枚選び、それを手札に戻す。\n【使用済】あなたがカードを引くならば、代わりに思い出のカードを選んで手札に戻してよい。\n【使用済】あなたが山札の再構成によりダメージを受けるならば、代わりに思い出のカードを1枚選んで公開し、それを取り除いてもよい。\n（思い出から戻るカードは公開し完全態とできる）',
        text: '从回忆区中选择1张牌置入手牌。\n【使用后】每当你将要抓牌时，你可以选择不抓牌，而改为从回忆区中选择等量的牌置入手牌。\n【使用后】每当你将要因重铸牌库受到命伤时，你可以选择不受到此次命伤，而改为从回忆区中选择并展示1张牌，然后将该牌移出游戏。\n（若八叶的未变为完全态的牌将从回忆区置入手牌，则你可以选择将该牌变为完全态后置入手牌）'
      }
    ]
  }
  ]
},
{
  name: 'HATSUMI 初海',
  namejp: 'ハツミ',
  nameen: 'HATSUMI',
  desc: '航海～若上一回合内对手没有进行过《攻击》，则本回合内你处于顺风状态，否则处于逆风状态。',
  descjp: '航海～直前のターンに相手に攻撃されていないならば順風に、されているならば逆風になる。',
  // girlInfo: '身高：151cm\n喜欢的东西：波間を漂うこと、海獣たち、日記や散文を書くこと\n<b>--物語--</b>\n「あの……鍛錬に励むってのはほら、自らの道とかそんな感じの意味で……」\n海を象徴する偉大なメガミです。広い桜降る代に数多く存在するメガミの中でも、彼女ほど信頼され、深い敬意を払われている者はいないかもしれません。海のように広い心ゆえに人々に優しく、それでいて自然の偉大さを教えるような厳しさも持ち合わせています。彼女は人々に苦難を乗り越えるだけの屈強な肉体を求めており、ゆえに彼女を信じる者たちはそれに見合った肉体を備えています。\n以上が桜降る代で一般的に認知されているハツミの姿です。はてさて、実際はどうなのでしょうか。いつの日か、本当の彼女を理解してくれる方が現れるといいですね。',
  // girlInfojp: '身長：151cm\n好きなもの：波間を漂うこと、海獣たち、日記や散文を書くこと\n<b>--物語--</b>\n「あの……鍛錬に励むってのはほら、自らの道とかそんな感じの意味で……」\n海を象徴する偉大なメガミです。広い桜降る代に数多く存在するメガミの中でも、彼女ほど信頼され、深い敬意を払われている者はいないかもしれません。海のように広い心ゆえに人々に優しく、それでいて自然の偉大さを教えるような厳しさも持ち合わせています。彼女は人々に苦難を乗り越えるだけの屈強な肉体を求めており、ゆえに彼女を信じる者たちはそれに見合った肉体を備えています。\n以上が桜降る代で一般的に認知されているハツミの姿です。はてさて、実際はどうなのでしょうか。いつの日か、本当の彼女を理解してくれる方が現れるといいですね。',
  list: [{
    name: '桨',
    namejp: '櫂',
    nameen: 'QUANT',
    isSelect: false,
    pic: 'twiicon_sa_27.jpg',
    picq: 'sd_hatsumi.png',
    normal: [{
      id: '17-hatsumi-o-n-1',
      namejp: '水雷球',
      name: '水雷球',
      baseType: 'normal',
      types: ['attack'],
      range: '3-5',
      damage: '0/0',
      text: '【常时】若你处于顺风状态，则此《攻击》获得+2/+2。\n【攻击后】若你处于逆风状态，则距（2） ⇔ 虚',
      textjp: '【常時】順風ならば、この《攻撃》は+2/+2となる。\n【攻撃後】逆風ならば、間合⇔ダスト：2'
    },
    {
      id: '17-hatsumi-o-n-2',
      namejp: '水流',
      name: '水流',
      baseType: 'normal',
      types: ['attack'],
      range: '4-5',
      damage: '2/1',
      text: '【常时】若你处于顺风状态，则此《攻击》获得+1/+1。\n全力化（主要阶段，若你选择执行全力行动，则你可以如使用《全力》牌一样使用此牌。若如此做，则此牌额外获得以下效果）：【常时】此《攻击》获得不可被对应（通常牌），若此《攻击》对对手造成了伤害，则不将因结算伤害移动的樱花结晶移至气或虚，而改为移至距。',
      textjp: '【常時】順風ならば、この《攻撃》は+1/+1となる。\n全力化：【常時】この《攻撃》は対応不可（通常札）を得るとともに、そのダメージにより移動する桜花結晶はダストやフレアでなく間合に動かす。'
    },
    {
      id: '17-hatsumi-o-n-3',
      namejp: '強酸',
      name: '强酸',
      baseType: 'normal',
      types: ['attack'],
      range: '5-6',
      damage: '3/1',
      text: '【常时】若你处于逆风状态，且此《攻击》对敌命造成了伤害，则不将因结算伤害移动的樱花结晶移至气，而改为移至虚。',
      textjp: '【常時】逆風ならば、この《攻撃》のライフへのダメージにより移動する桜花結晶はフレアでなくダストに動かす。'
    },
    {
      id: '17-hatsumi-o-n-4',
      namejp: '海嘯',
      name: '海啸',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '若当前距离小于等于4，则虚（1）→距。\n【常时】若你处于逆风状态，则此箭头效果左侧的区域改为敌气。',
      textjp: '現在の間合が4以下ならば、\n間合→ダスト：1\n逆風ならば、この矢印効果の左側を相手のフレアに変更する。'
    },
    {
      id: '17-hatsumi-o-n-5',
      namejp: '準備万端',
      name: '准备万全',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '虚（3）→自装\n你可以抓1张牌。\n若你处于逆风状态，则本回合内你的手牌上限增大1。',
      textjp: 'ダスト→自オーラ：3\nカードを1枚引いてもよい。\n逆風ならばこのターンの間、手札の上限が1増加する。'
    },
    {
      id: '17-hatsumi-o-n-6',
      namejp: '羅針盤',
      name: '罗盘',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '【展开中】你的《攻击》额外获得攻击距离5，对手的《攻击》失去攻击距离5。若游戏中存在多个此效果，则此效果相互抵消。（此效果先于距离扩大与距离缩小结算）\n【破弃时】虚（1）→自装',
      textjp: '【展開中】あなたの《攻撃》に適正距離5を追加し、相手の《攻撃》から適正距離5を取り除く。この効果が重複したら相殺する。（距離拡大、距離縮小より先に適用する）\n【破棄時】ダスト→自オーラ：1'
    },
    {
      id: '17-hatsumi-o-n-7',
      namejp: '波呼び',
      name: '唤潮',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '1',
      text: '【展开中】仅当你的回合内你处于顺风状态时可以移除此牌上的樱花结晶。\n【展开中/破弃时】当你的准备阶段开始时或此牌破弃时，你可以从盖牌区中选择1张牌置于牌库顶。\n【破弃时】执行至多1次基本动作，进行一次“攻击距离2-7 伤害1/-”的攻击。',
      textjp: '【展開中】あなたのターンかつ順風である場合のみこのカードの上の桜花結晶は移動する。\n【展開中/破棄時】あなたの開始フェイズの開始時と破棄時に伏せ札を1枚選び、山札の上に置いてもよい。\n【破棄時】基本動作を1回まで行い、攻撃『適正距離2-7、1/-』を行う。'
    }],
    special: [{
      id: '17-hatsumi-o-s-1',
      namejp: 'イサナ海域',
      name: '鲸鱼海域',
      baseType: 'special',
      cost: '4',
      types: ['attack'],
      range: '3-5',
      damage: '3/1',
      text: '【常时】若你处于顺风状态，则此《攻击》获得+0/+2。\n【攻击后】若你处于逆风状态，则虚（2）→距，然后将此牌变为未使用状态。',
      textjp: '【常時】順風ならば、この《攻撃》は+0/+2となる。\n【攻撃後】逆風ならば、\nダスト→間合：2\nを行い、このカードを未使用に戻す。'
    },
    {
      id: '17-hatsumi-o-s-2',
      namejp: 'オヨギビ砲火',
      name: '鱼雷炮击',
      baseType: 'special',
      cost: '2',
      types: ['attack'],
      range: '5-6',
      damage: '2/2',
      text: '【常时】每当此牌变为未使用状态时，你可以执行1次基本动作。\n----\n【即再起】对手的回合内，回合开始时距离与当前距离的差大于等于2。',
      textjp: '【常時】このカードが未使用に戻った時、基本動作を1回行ってもよい。\n----\n【即再起】相手のターンに現在の間合はターン開始時の間合から2以上近付く。'
    },
    {
      id: '17-hatsumi-o-s-3',
      namejp: 'カラハリ灯台',
      name: '子午灯塔',
      baseType: 'special',
      cost: '1',
      types: ['action'],
      text: '若你不处于逆风状态，则你畏缩。\n【使用后】达人距离增大1。\n【使用后】对手的回合内，每当对手从手牌使用非《攻击》的牌时，不结算该牌的效果，而改为将该牌置入弃牌区（但仍视为对手使用了该牌），然后将此牌变为未使用状态。',
      textjp: '逆風でないならば、あなたは畏縮する。\n【使用済】達人の間合は1大きくなる。\n【使用済】相手のターンに相手が《攻撃》でないカードを手札から使用したならば、それを解決する代わりに捨て札に置き、このカードを未使用に戻す。'
    },
    {
      id: '17-hatsumi-o-s-4',
      namejp: 'ミオビキ航路',
      name: '引水航道',
      baseType: 'special',
      cost: '2',
      types: ['action'],
      text: '若你处于逆风状态，则对手畏缩，展示对手牌库顶的1张牌。若该牌为《攻击》牌，则将其置入弃牌区。\n【使用后】你的准备阶段开始时，若你处于逆风状态，则你可以使用此牌，而不需支付其费用。',
      textjp: '逆風ならば、相手を畏縮させ、相手の山札の上から1枚を公開する。それが《攻撃》カードならば捨て札にする。\n【使用済】あなたの開始フェイズの開始時に逆風ならば、このカードを消費を支払わずに使用してもよい。'
    }]
  },
  {
    name: '信赖',
    namejp: '信賴',
    isSelect: false,
    pic: 'twiicon_sa_43.jpg',
    picq: 'sd_hatsumi_a1.png',
    changenormal: [{
      changeIndex: '4',
      id: '17-hatsumi-a1-n-4',
      name: '潜雷',
      namejp: '潜雷',
      types: ['enhance'],
      capacity: '2',
      text: '破绽\n【展开时】进行一次潜水。\n【破弃时】进行一次“攻击距离1-7 伤害-/1 不可被对应”的攻击。',
      textjp: '隙\n【展開時】潜水を行う。\n【破棄時】攻撃『適正距離1-7、-/1、対応不可』を行う。'
    }],
    changespecial: [{
      changeIndex: '1',
      id: '17-hatsumi-a1-s-1',
      name: '峡雾海域',
      namejp: 'サギリ海域',
      types: ['enhance', 'reaction'],
      capacity: '4',
      cost: '3',
      text: '【展开中】对手的回合内，若对手的《攻击》的攻击距离含有至少3个值，则该《攻击》失去除最大值与最小值以外的所有攻击距离。\n（例如3-5的攻击距离变为3,5）',
      textjp: '【展開中】相手のターン中、適正距離を3つ以上持つ相手の《攻撃》はその中から最小と最大の値を除いて全ての適正距離を失う。\n（例えば3-5ならば3,5になる）'
    }, {
      changeIndex: '4',
      id: '17-hatsumi-a1-s-4',
      name: '汪洋航道',
      namejp: 'ワダナカ航路',
      types: ['enhance'],
      capacity: '2',
      cost: '2',
      text: '【展开时】进行一次潜水，对手畏缩。\n【破弃时】若你处于顺风状态，则对敌装与敌命各造成1点伤害。\n----\n【再起】你处于逆风状态。',
      textjp: '【展開時】潜水を行い、相手を畏缩させる。\n【破棄時】順風ならば、相手のオーラとライフに1ダメージを与える。\n----\n【再起】逆風である。'
    }],
    changeExtra: [{
      id: '17-hatsumi-a1-di1',
      name: '潜水前进',
      namejp: '潜水前進',
      text: '本回合内，当前距离减小1，达人距离减小1。\n然后，若此牌因使用《攻击》牌触发，则立即进行一次距离检查。若当前距离不包含于攻击距离，则视为对手没有进行过该《攻击》，并将你的下个回合固定为顺风状态，若该《攻击》为通常牌《攻击》，则将该牌置入弃牌区；若由王牌生成，则将该牌变为使用后状态。失败的《攻击》不会进入对应步骤。',
      textjp: 'このターン中、現在の間合は1減少し、達人の間合は1小さくなる。\nその後、これを公開させた《攻撃》があるならば直ちに間合を判定する。それが外れたならば《攻撃》を失敗として解決せずに終了し、次のターンにあなたは順風となる。\n《攻撃》が通常札によるものならば捨て札に、切札よるものならば使用済になる。失敗した《攻撃》への対応はできない。'
    }, {
      id: '17-hatsumi-a1-di2',
      name: '潜水后退',
      namejp: '潜水後退',
      text: '本回合内，当前距离增大1，达人距离增大1。\n然后，若此牌因使用《攻击》牌触发，则立即进行一次距离检查。若当前距离不包含于攻击距离，则视为对手没有进行过该《攻击》，并将你的下个回合固定为顺风状态，若该《攻击》为通常牌《攻击》，则将该牌置入弃牌区；若由王牌生成，则将该牌变为使用后状态。失败的《攻击》不会进入对应步骤。',
      textjp: 'このターン中、現在の間合は1増加し、達人の間合は1大きくなる。\nその後、これを公開させた《攻撃》があるならば直ちに間合を判定する。それが外れたならば《攻撃》を失敗として解決せずに終了し、次のターンにあなたは順風となる。\n《攻撃》が通常札によるものならば捨て札に、切札よるものならば使用済になる。失敗した《攻撃》への対応はできない。'
    }]
  }]
},
{
  name: 'MIZUKI 水津城',
  namejp: 'ミズキ',
  nameen: 'MIZUKI',
  desc: '统率～兵舍内有4张牌（「盾兵」、「骑兵」和2张「枪兵」）。',
  descjp: '統率～兵舎に4枚のカード（「槍兵」  2枚「盾兵」「騎兵」）を持つ。',
  // girlInfo: '身高：146cm\n喜欢的东西：盤上遊戯、芸術鑑賞（？）、羊羹、みかん\n<b>--物語--</b>\n「槍兵、盾兵、前へ！　ここで参りますわ！」\n軍略と祖霊を象徴するメガミです。ユリナやサイネのような個人の武を貴ぶ武神ではなく、軍としての武や勝利を貴ぶ軍神であり、信仰する人々の層も異なっています。その権能は祖たる兵たちを呼び起こし、顕現させ共に戦うというものです。彼らを指揮する兜のみならず、付き従う兵員全てが彼女の象徴武器と言えるでしょう。\n元は人間にして山城の英雄・山城水津城でした。軍略の天才であった彼女は戦で戦果をあげ、その果てにメガミ・コダマへの挑戦に勝利してメガミの座へと至りました。\n現在はある理由によりコダマを自らの兵舎・大手門の中に匿っており、権能が混在した状態にあります。そして同じ理由で身を隠してもいるようです。',
  // girlInfojp: '身長：146cm\n好きなもの：盤上遊戯、芸術鑑賞（？）、羊羹、みかん\n<b>--物語--</b>\n「槍兵、盾兵、前へ！　ここで参りますわ！」\n軍略と祖霊を象徴するメガミです。ユリナやサイネのような個人の武を貴ぶ武神ではなく、軍としての武や勝利を貴ぶ軍神であり、信仰する人々の層も異なっています。その権能は祖たる兵たちを呼び起こし、顕現させ共に戦うというものです。彼らを指揮する兜のみならず、付き従う兵員全てが彼女の象徴武器と言えるでしょう。\n元は人間にして山城の英雄・山城水津城でした。軍略の天才であった彼女は戦で戦果をあげ、その果てにメガミ・コダマへの挑戦に勝利してメガミの座へと至りました。\n現在はある理由によりコダマを自らの兵舎・大手門の中に匿っており、権能が混在した状態にあります。そして同じ理由で身を隠してもいるようです。',
  list: [{
    name: '兜',
    namejp: '兜',
    nameen: 'ARMET',
    isSelect: false,
    pic: 'twiicon_sa_28.jpg',
    picq: 'sd_mizuki.png',
    normal: [{
      id: '18-mizuki-o-n-1',
      namejp: '陣頭',
      name: '头阵',
      baseType: 'normal',
      types: ['attack'],
      range: '1-2',
      damage: '1/1',
      text: '【攻击后】进行1次征兵。',
      textjp: '【攻撃後】徴兵を1回行う。'
    },
    {
      id: '18-mizuki-o-n-2',
      namejp: '反攻',
      name: '反攻',
      baseType: 'normal',
      types: ['attack'],
      range: '2-3',
      damage: '1/1',
      text: '【常时】若上一回合内你进行过对应，则此《攻击》获得+2/+1。\n全力化（主要阶段，若你选择执行全力行动，则你可以如使用《全力》牌一样使用此牌。若如此做，则此牌额外获得以下效果）：【常时】此《攻击》获得+1/+1。',
      textjp: '【常時】あなたが直前のターンに対応しているならば、この《攻撃》は+2/+1となる。\n全力化：【常時】この《攻撃》は+1/+1となる。'
    },
    {
      id: '18-mizuki-o-n-3',
      namejp: '撃ち落とし',
      name: '击落',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '1-5',
      damage: '1/1',
      text: '【攻击后】不动～若本回合内当前距离的值没有发生过变化，则打消被对应的不具《全力》副类别且非王牌的《攻击》。（此牌视为菰珠的牌）',
      textjp: '【攻撃後】不動‐このターン中に現在の間合が変化していないならば、対応した《全力》でも切札でもない《攻撃》を打ち消す。\n（このカードはコダマのカードとして扱う）'
    },
    {
      id: '18-mizuki-o-n-4',
      namejp: '号令',
      name: '号令',
      baseType: 'normal',
      types: ['action'],
      text: '进行1次征兵。\n若上一回合内你进行过对应，则获得1点集中力。',
      textjp: '徴兵を1回行う。\nあなたが直前のターンに対応しているならば、集中力を1得る。'
    },
    {
      id: '18-mizuki-o-n-5',
      namejp: '防壁',
      name: '防壁',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '终端\n若此牌为本回合内你进行的第一次对应，则打消被对应的不具《全力》副类别且非王牌的《攻击》。',
      textjp: '終端\nこのカードがこのターンであなたが行う最初の対応ならば、対応した切札でも《全力》でもない《攻撃》を打ち消す。'
    },
    {
      id: '18-mizuki-o-n-6',
      namejp: '制圧前進',
      name: '压制前进',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '选择3次。你可以多次选择同一个选项：\n1.进行1次征兵；\n2.执行1次基本动作《前进》；\n3.执行1次基本动作《装附》。',
      textjp: '以下を３回選ぶ。同じものを複数回選んでもよい。\n・徴兵を１回行う。\n・基本動作《前進》を行う。\n・基本動作《纏い》を行う。'
    },
    {
      id: '18-mizuki-o-n-7',
      namejp: '戰場',
      name: '战场',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '【展开中】不动～每回合内，每当你进行第一次非王牌的《攻击》时，若该回合内当前距离的值没有发生过变化，则该《攻击》获得+1/+1。（此牌视为菰珠的牌）',
      textjp: '【展開中】不動―あなたがこのターンで初めて切札でない《攻撃》を行った時、このターン中に現在の間合が変化していないならば、その《攻撃》は+1/+1となる。\n（このカードはコダマのカードとして扱う）'
    }],
    special: [{
      id: '18-mizuki-o-s-1',
      namejp: '天主八龍閣',
      name: '天主八龙阁',
      baseType: 'special',
      cost: '5',
      types: ['enhance', 'reaction'],
      capacity: '3',
      text: '终端\n【展开时】打消被对应的《攻击》。\n【展开中】你的兵员和其他女神的《攻击》获得+0/+1。',
      textjp: '終端\n【展開時】対応した《攻撃》を打ち消す。\n【展開中】あなたの他のメガミまたは兵員の《攻撃》は+0/+1となる。'
    },
    {
      id: '18-mizuki-o-s-2',
      namejp: '三重膝丸櫓',
      name: '三重膝丸橹',
      baseType: 'special',
      cost: '2',
      types: ['attack'],
      range: '3-4',
      damage: '3/1',
      text: '【常时】若本回合内你进行过攻击，则你不能使用此牌。\n----\n【即再起】你使用具终端关键字的牌。（该牌结算前再起）',
      textjp: '【常時】あなたがこのターン中に攻撃しているならば、このカードは使用できない。\n----\n【即再起】あなたが終端を持つカートを使用する。（解決より前に再起する）'
    },
    {
      id: '18-mizuki-o-s-3',
      namejp: '大手楯無門',
      name: '大手楯无门',
      baseType: 'special',
      cost: '3',
      types: ['action'],
      text: '终端\n将你的1张手牌与追加牌区中的『斗神』以已征兵状态置于兵舍。进行1次征兵。\n【使用后】你从兵舍中使用的《攻击》牌生成的《攻击》获得+1/+0。你从兵舍中使用的具《对应》副类别的牌失去终端关键字。',
      textjp: '終端\n追加札の「闘神」と手札のカード1枚を選び、それらを兵舎に徴兵済で置く。徴兵を1回行う。\n【使用済】あなたが兵舎から使用した《攻撃》カードによる《攻撃》は+1/+0となる。あなたが兵舎から使用した《対応》カードは終端を失う。'
    },
    {
      id: '18-mizuki-o-s-4',
      namejp: '山城水津城の鬨の声',
      name: '山城水津城的喧天号角',
      baseType: 'special',
      cost: '5',
      types: ['enhance', 'fullpower'],
      capacity: '5',
      text: '【展开中】你的原本具终端关键字的通常牌和兵员牌失去终端。\n【展开中】你的原本具《全力》副类别的通常牌失去《全力》副类别，并获得终端。',
      textjp: '【展開中】元々終端を持つあなたの通常札と兵員は終端を失う。\n【展開中】元々が《全力》であるあなたの通常札は《全力》を失い、終端を得る。'
    }],
    extra: [
      {
        id: '18-mizuki-o-s-3-ex1',
        name: '斗神',
        namejp: '闘神',
        baseType: 'normal',
        types: ['attack'],
        range: '1-2',
        damage: '2/1',
        text: '【常时】不动～若本回合内当前距离的值没有发生过变化，则此《攻击》获得+0/+1。\n【攻击后】将此牌置入追加牌区。\n（此牌视为菰珠的牌）',
        textjp: '【常時】不動―このターン中に現在の間合が変化していないならば、この《攻撃》は+0/+1となる。\n【攻撃後】このカードを追加札に戻す。\n（このカードはコダマのカードとして扱う）',
        extraFrom: '18-mizuki-o-s-3'
      }, {
        id: '18-mizuki-o-t-1',
        name: '枪兵',
        namejp: '槍兵',
        baseType: 'soldier',
        types: ['attack'],
        range: '3',
        damage: '1/1',
        text: '终端\n【常时】若上一回合内你进行过对应，则此《攻击》获得+1/+0。',
        textjp: '終端\n【常時】あなたが直前のターンに対応しているならば、この《攻撃》は+1/+0となる。'
      },
      {
        id: '18-mizuki-o-t-1',
        name: '枪兵',
        namejp: '槍兵',
        baseType: 'soldier',
        types: ['attack'],
        range: '3',
        damage: '1/1',
        text: '终端\n【常时】若上一回合内你进行过对应，则此《攻击》获得+1/+0。',
        textjp: '終端\n【常時】あなたが直前のターンに対応しているならば、この《攻撃》は+1/+0となる。'
      },
      {
        id: '18-mizuki-o-t-2',
        name: '盾兵',
        namejp: '盾兵',
        baseType: 'soldier',
        types: ['action', 'reaction'],
        text: '终端\n被对应的不具《全力》副类别的《攻击》获得-1/+0。',
        textjp: '終端\n対応した《全力》でない《攻撃》は-1/+0となる。'
      },
      {
        id: '18-mizuki-o-t-3',
        name: '骑兵',
        namejp: '騎兵',
        baseType: 'soldier',
        types: ['enhance'],
        capacity: '2',
        text: '终端\n【展开中】对手的《攻击》失去不可被对应。\n【破弃时】你获得1点集中力。',
        textjp: '終端\n【展開中】相手の《攻撃》は対応不可を失う。\n【破棄時】あなたは集中力を1得る。'
      }]
  }]
}, {
  name: 'MEGUMI 希',
  namejp: 'メグミ',
  desc: '异樱～土壤中有5个种子结晶',
  descjp: '異桜～土壌に種結晶を５つ持つ。',
  list: [{
    name: '梿枷',
    namejp: '唐棹',
    nameen: 'Flail',
    isSelect: false,
    pic: 'twiicon_sa_33.jpg',
    picq: 'sd_megumi.png',
    normal: [{
      id: '19-megumi-o-n-1',
      namejp: '空閃',
      name: '空闪',
      baseType: 'normal',
      types: ['attack'],
      range: '4-8',
      damage: '2/1',
      textjp: '【常時】あなたの土壌の種結晶が全て萌芽しているならば、この《攻撃》は +1/+1 となる。',
      text: '【常时】若你的土壤中的种子结晶已经全部萌芽，则此《攻击》获得+1/+1。'
    },
    {
      id: '19-megumi-o-n-2',
      namejp: '打擲',
      name: '打掷',
      baseType: 'normal',
      types: ['attack'],
      range: '4-5',
      damage: '2/1',
      textjp: '【常時】あなたの付与札に種結晶があるならば、この《攻撃》は +1/+1 となる。',
      text: '【常时】若你的《付与》牌上有种子结晶，则此《攻击》获得+1/+1。'
    },
    {
      id: '19-megumi-o-n-3',
      namejp: '殻打ち',
      name: '脱粒',
      baseType: 'normal',
      types: ['attack'],
      range: '3-5',
      damage: '2/1',
      textjp: '【攻撃後】このターンにあなたが次に使用する他のメガミの《付与》カードは生育２を得る。',
      text: '【攻击后】本回合内你使用的下一张其他女神的《付与》牌获得生长2。'
    },
    {
      id: '19-megumi-o-n-4',
      namejp: '棹穿ち',
      name: '穿竹',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '2-4',
      damage: '1/1',
      textjp: '【常時】この《攻撃》のダメージにより移動する桜花結晶は、ダストやフレアでなく間合に移動する。\n【攻撃後】あなたが付与札を出しているならば、このターンに相手が行う次の基本動作は効果を解決しない。',
      text: '【常时】若此《攻击》对对手造成了伤害，则不将因结算伤害移动的樱花结晶移至气或虚，而改为移至距。\n【攻击后】若你的付与区存在展开中的《付与》牌，则不结算本回合内对手执行的下一次基本动作的效果。'
    },
    {
      id: '19-megumi-o-n-5',
      namejp: '葦',
      name: '苇草',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '1',
      capacityGrowup: '1',
      textjp: '生育１\n【展開時】ダスト → 間合 :１。\n【展開中】現在の間合はX増加し、達人の間合はX大きくなる。Xはこの付与札の上の種結晶の個数に等しい。',
      text: '生长1\n【展开时】虚（1）→距。\n【展开中】当前的距离增大X，达人距离增大X。X等于这张《付与》牌上种子结晶的个数。'
    },
    {
      id: '19-megumi-o-n-6',
      namejp: '鳳仙花',
      name: '凤仙花',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '1',
      capacityGrowup: '2',
      textjp: '生育 2 隙\n【展開中】相手のメインフェイズの開始時に攻撃『適正距離3-5、2/1』を行う。あなたのメインフェイズの開始時に攻撃『適正距離1-3、2/1』を行う。\n【破棄時】相手を畏縮させる。',
      text: '生长2 破绽\n【展开中】对手的主要阶段开始时，进行一次“攻击距离3-5，伤害2/1”的攻击。你的主要阶段开始时，进行一次“攻击距离1-3，伤害2/1”的攻击。\n【破弃时】对手畏缩。'
    },
    {
      id: '19-megumi-o-n-7',
      namejp: '野茨',
      name: '野蔷薇',
      baseType: 'normal',
      types: ['enhance', 'fullpower'],
      capacity: '0',
      capacityGrowup: '2',
      textjp: '生育 2\n【展開時/展開中】展開時とあなたの終了フェイズに基本動作を1回行ってもよい。\n【展開中】相手が各ターンに初めて間合にある桜花結晶を動かした時、ダスト → 間合 :１。\n【展開中】相手のターンにこの付与札の上の桜花結晶は移動しない。',
      text: '生长2\n【展开时/展开中】当此《付与》牌展开时和你的结束阶段开始时，你可以执行1次基本动作。\n【展开中】每回合内，每当对手第一次将距中的樱花结晶移出距时，\n虚（1）→距\n【展开中】对手的回合内不能移除此牌上的樱花结晶。'
    }],
    special: [{
      id: '19-megumi-o-s-1',
      namejp: '因果律の根',
      name: '因果律之根',
      baseType: 'special',
      types: ['attack'],
      range: '3-7',
      damage: '1/1',
      cost: '1',
      textjp: '【攻撃後】あなたの土壌の種結晶を1つ萌芽させる。\n----\n【再起】あなたの土壌に萌芽した種結晶がない。',
      text: '【攻击后】将你的土壤中的1个种子结晶变为萌芽状态。\n----\n【再起】你的土壤中没有处于萌芽状态的种子结晶。'
    },
    {
      id: '19-megumi-o-s-2',
      namejp: '可能性の枝',
      name: '可能性之枝',
      baseType: 'special',
      cost: '3',
      types: ['enhance', 'reaction'],
      capacity: '2',
      capacityGrowup: '1',
      textjp: '生育1\n【常時】Xは《付与》カードの上にあるあなたの種結晶の個数の合計に等しい。\n【展開時】対応した《攻撃》は-X/+0となる。\n【展開中】相手の開始フェイズの開始時に攻撃『1ｰ5、0/1、【常時】この攻撃は+X/+0となる』を行う。',
      text: '生育1\n【常时】X等于置于你的展开中的《付与》牌上的种子结晶的总数。\n【展开时】被对应的《攻击》获得-X/+0。\n【展开中】每当对手的准备阶段开始时，进行一次“攻击距离1-5 伤害0/1 【常时】此攻击获得+X/+0。”的攻击。'
    },
    {
      id: '19-megumi-o-s-3',
      namejp: '結末の果実',
      name: '终结之果实',
      baseType: 'special',
      types: ['enhance'],
      capacity: '2',
      cost: '4',
      textjp: '【展開中】この付与札の上の桜花結晶はメインフェイズに移動しない。開始フェイズの処理であなたの他の付与札から桜花結晶がよダストへと送られるならば、それは代わりにこの付与札へと移動する。\n【展開中】この付与札の上の種結晶が5個になったターンの終了フェイズに、攻撃『適正距離5、5/5、不可避、【常時】この《攻撃》は打ち消されない』を行い、このカードの上の桜花結晶を全てダストに送る。',
      text: '【展开中】主要阶段内不能移除此牌上的樱花结晶。准备阶段移除所有《付与》牌上的樱花结晶时，若你的其他《付与》牌上的樱花结晶将要移至虚，则改为移至此牌上。\n【展开中】当此牌上的种子结晶的数目变为5时，于该回合的结束阶段开始时进行一次“攻击距离5，伤害5/5 , 不可避，【常时】此《攻击》不可被打消。”的攻击，然后将此牌上的所有樱花结晶移至虚。'
    },
    {
      id: '19-megumi-o-s-4',
      namejp: '瀧河希の掌',
      name: '泷河希之掌',
      baseType: 'special',
      types: ['enhance'],
      capacity: '0',
      cost: '3',
      capacityGrowup: '5',
      textjp: '生育 5\n【展開中】各ターンにあなたが初めて行う《オーラ》へのダメージが3以下の《攻撃》は +1/+1 となる。',
      text: '生长5\n【展开中】每个回合内，你进行的第一次对装伤害小于等于3的《攻击》获得+1/+1。'
    }]
  }]
},
{
  name: 'KANAWE 叶慧',
  namejp: 'カナヱ',
  desc: '神话～英雄传说从故事版图的白色剧幕开始。若你达成了构想，则将棋子向下一个剧幕移动一步。到达最终剧幕时，你赢得本局游戏。',
  descjp: '神語～物語ボードの白の幕から英雄譚は始まる。構想を達成すれば駒を次の幕へ進められ、終幕を迎えたらあなたは勝利する。',
  list: [{
    name: '面具',
    namejp: '仮面',
    isSelect: false,
    pic: 'twiicon_sa_34.jpg',
    picq: 'sd_kanawe.png',
    normal: [{
      id: '20-kanawe-o-n-1',
      name: '空想',
      namejp: '空想',
      baseType: 'normal',
      types: ['attack'],
      range: '0-10',
      damage: 'X/1',
      text: '【常时】X等于当前剧幕的值的一半（向上取整）。\n【攻击后】若当前剧幕的值为偶数，则\n距（1）⇔虚',
      textjp: '【常時】Xは現在の幕の値の半分（切り上げ）に等しい。\n【攻撃後】現在の幕の値が偶数ならば、間合↔ダスト：1。'
    },
    {
      id: '20-kanawe-o-n-2',
      name: '脚本化',
      namejp: '脚本化',
      baseType: 'normal',
      types: ['attack'],
      range: '2-8',
      damage: '0/0',
      text: '【攻击后】你可以从追加区准备1张构想牌。\n【常时】你的结束阶段开始时，若此牌位于弃牌区，则你可以将其置于牌库底。若如此做，则对手获得1点集中力。',
      textjp: '【攻撃後】追加札から構想カードを1枚準備してもよい。\n【常時】あなたの終了フェイズにこのカードを捨て札から山札の底に置いてもよい。そうした場合、相手は集中力を1得る。'
    },
    {
      id: '20-kanawe-o-n-3',
      name: '演出化',
      namejp: '演出化',
      baseType: 'normal',
      types: ['attack'],
      range: '2-3',
      damage: '2/1',
      text: '【常时】若当前剧幕的颜色为【紫】，则此《攻击》获得+0/+1。\n【攻击后】本回合内你不能达成构想。',
      textjp: '【常時】現在の幕の色が紫ならば、この《攻撃》は+0/+1となる。\n【攻撃後】あなたはこのターンに構想を進められない。'
    },
    {
      id: '20-kanawe-o-n-4',
      name: '断行',
      namejp: '断行',
      baseType: 'normal',
      types: ['action'],
      text: '你可以执行1次基本动作《装附》。然后你可以执行1次《装附》以外的基本动作。\n全力化：你可以从追加区或已达成区域准备1张构想牌。对手畏缩。',
      textjp: '基本動作《纏い》を1回行ってもよい。その後、《纏い》以外の基本動作を1回行ってもよい。\n全力化：追加札または達成済から構想カードを1枚準備してもよい。相手を畏縮させる。'
    },
    {
      id: '20-kanawe-o-n-5',
      name: '残光',
      namejp: '残光',
      baseType: 'normal',
      types: ['action'],
      text: '若当前剧幕的颜色为【紫】或【绿】，则查看对手手牌，从中选择1张置于对手的牌库底。对手获得1点集中力。',
      textjp: '現在の幕の色が紫または緑ならば、相手の手札を見てその中から1枚を選び、それを山札の底に置く。相手は集中力を1得る。'
    },
    {
      id: '20-kanawe-o-n-6',
      name: '即兴',
      namejp: '即興',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '你可以从手牌中使用1张其他女神的不具《全力》副类别的《攻击》牌。若此牌对应了一个《攻击》，则视为所使用的牌也对应了该《攻击》。然后若当前剧幕的颜色为【绿】且该牌位于弃牌区，则将该牌置入手牌。',
      textjp: '手札から他のメガミの全力でない《攻撃》カードを1枚使用してもよい。このカードが対応している《攻撃》があるならば、使用されたカードはそれに対応しているものと扱う。現在の幕の色が緑かつそのカードが捨て札にあるならば、そのカードを手札に戻す。'
    },
    {
      id: '20-kanawe-o-n-7',
      name: '封杀',
      namejp: '封殺',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '【展开时】宣言1个牌名。\n【展开中】对手的回合内，对手不能使用具你所宣言的名称的王牌。若当前剧幕的颜色为【红】，则对手不能使用具你所宣言的名称的通常牌。\n【破弃时】你获得1点集中力。',
      textjp: '【展開時】カードの名前を1つ宣言する。\n【展開中】相手のターン中、相手は宣言された名前を持つ切札を使用できない。現在の幕の色が赤ならば、宣言された名前を持つ通常札も使用できない。\n【破棄時】あなたは集中力を1得る。'
    }],
    special: [
      {
        id: '20-kanawe-o-s-1',
        name: '疾书弗尽 尺璧寸阴',
        namejp: 'たまゆらふみ',
        baseType: 'special',
        cost: '1',
        types: ['action'],
        text: '从追加区或已达成区域准备1张构想牌。若你以此法从已达成区域准备了构想牌，则将此牌移出游戏。\n【使用后】对手的准备阶段开始时，若你上回合内构想牌上的樱花结晶没有前进，则将此牌变为未使用状态。若如此做，则对手获得1点集中力。',
        textjp: '追加札または達成済から構想カードを1枚準備する。達成済から準備したらこのカードを取り除く。\n【使用済】相手の開始フェイズの開始時に、あなたが直前のターンに構想を進めていないならば、このカードを未使用に戻す。そうした場合、相手は集中力を1得る。'
      },
      {
        id: '20-kanawe-o-s-2',
        name: '芳颜无常 星辉灯影',
        namejp: 'ほかげきらぼし',
        baseType: 'special',
        cost: 'X',
        types: ['action'],
        text: '【常时】X等于当前剧幕的值。\n若当前剧幕的颜色为【绿】、【红】、【紫】之一，则结算其对应的效果。\n----\n【即再起】进入下一个剧幕。',
        textjp: '【常時】Xは現在の幕の値に等しい。\n現在の幕の色が緑、赤、紫のいずれかならば、その効果を得る。\n----\n【即再起】次の幕へ向かう。'
      },
      {
        id: '20-kanawe-o-s-3',
        name: '良宵讵待 盛景久盈',
        namejp: 'あたらよちよに',
        baseType: 'special',
        cost: '4',
        types: ['attack', 'reaction'],
        range: '0-4',
        damage: '2/1',
        text: '【攻击后】打消被对应的非王牌的《攻击》。若被对应的《攻击》为通常牌，则将该牌置于牌库顶。',
        textjp: '【攻撃後】対応した切札でない《攻撃》を打ち消す。\nその《攻撃》が通常札ならば、そのカードを山札の上に置く。'
      },
      {
        id: '20-kanawe-o-s-4',
        name: '知音难觅 化境在心',
        namejp: 'はらからのあまつそら',
        baseType: 'special',
        cost: '2',
        types: ['action'],
        text: '你可以从手牌中展示1张通常牌并将其移出游戏。若如此做，则展示1张你眼前构筑时没有选用的通常牌，将其加入手牌。\n将此牌移出游戏，然后将1张你眼前构筑时没有选用的王牌以未使用状态加入王牌。',
        textjp: 'あなたの手札から通常札を1枚公開し、それを取り除いてもよい。そうした場合、眼前構築で選んでいないあなたの通常札1枚を公開し、それを手札に加える。\nこのカードを取り除き、眼前構築で選んでいないあなたの切札1枚を未使用で得る。'
      }],
    extra: [{
      id: '20-kanawe-o-p-1',
      name: '杀阵',
      namejp: '殺陣',
      text: '本回合内双方进行了至少2次《攻击》或对应。（达成次数：2次）\n\n--意志（卡牌背面）--\n本回合内双方进行了至少5次《攻击》或对应。（达成次数：1次）',
      textjp: 'このターンに《攻撃》か対応が合計2回以上を行われた。（達成回数：2）\n\n--試練--\nこのターンに《攻撃》か対応が合計5回以上を行われた。（達成回数：1）'
    }, {
      id: '20-kanawe-o-p-2',
      name: '樱飞沫',
      namejp: '桜飛沫',
      text: '本回合内有至少3个樱花结晶一次性移动到了付与区以外的区域。（达成次数：1次）\n\n--意志（卡牌背面）--\n本回合内有至少5个樱花结晶一次性移动到了其他区域。（达成次数：1次）',
      textjp: 'このターンに3個以上の桜花結晶が付与札以外の領域へ一度に移動した。（達成回数：1）\n\n--試練--\nこのターンに5個以上の桜花結晶が一度に移動した。（達成回数：1）'
    }, {
      id: '20-kanawe-o-p-3',
      name: '鼓动',
      namejp: '鼓動',
      text: '本回合内某一方命中的樱花结晶的数目发生了变化。（达成次数：2次）\n\n--意志（卡牌背面）--\n本回合内某一方命中的樱花结晶的数目一次性发生了大于等于2的变化。（达成次数：1次）',
      textjp: 'このターンにライフが変化した。（達成回数：2）\n\n--試練--\nこのターンにライフが一度に2以上変化した。（達成回数：1）'
    }, {
      id: '20-kanawe-o-p-4',
      name: '明转',
      namejp: '明転',
      text: '本回合内结算了箭头效果。（达成次数：2次）\n\n--意志（卡牌背面）--\n本回合内结算了至少2次箭头效果。（达成次数：2次）',
      textjp: 'このターンに矢印効果を解決した。（達成回数：2）\n\n--試練--\nこのターンに矢印効果を2回以上解決した。（達成回数：2）'
    }, {
      id: '20-kanawe-o-p-5',
      name: '战栗',
      namejp: '粒立て',
      text: '此构想并非本回合内准备，且本回合内使用了具《全力》副类别的牌。（达成次数：1次）\n\n--意志（卡牌背面）--\n此构想并非本回合内准备，且本回合内使用了具《全力》副类别的牌。（达成次数：2次）',
      textjp: 'このターンに準備されたのでなく、このターンに《全力》カードが使用された。（達成回数：1）\n\n--試練--\nこのターンに準備されたのでなく、このターンに《全力》カードが使用された。（達成回数：2）'
    }, {
      id: '20-kanawe-o-p-6',
      name: '定位',
      namejp: '位置取り',
      text: '当前距离与回合开始时距离之差的绝对值大于等于2，且当前距离小于等于8。（达成次数：2次）\n\n--意志（卡牌背面）--\n当前距离与回合开始时距离之差的绝对值大于等于5。（达成次数：1次）',
      textjp: '現在の間合がターン開始時の間合から2以上変化し、かつ8以下である。（達成回数：2）\n\n--試練--\n現在の間合がターン開始時の間合から5以上変化している。（達成回数：1）'
    }],
    girlBoard: [{
      id: 'Story Board',
      name: '【物语板块】',
      namejp: '【物語ボード】',
      text: '<div class="story-board"><div class="story-board__row story-board__row--0"><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--1"><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--2"><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--3"><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--4"><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--5"><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--6"><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__info"><p>Start：开始</p><p>红：对敌命造成1点伤害。</p><p>紫：你可以执行1次基本动作。</p><p>绿：从盖牌区中选择1张牌，将其置于你的牌库底。</p><p>金：你的由《攻击》牌（而非其效果文本）进行的《攻击》获得+0/+1。</p><p>End：特殊胜利</p></div></div>',
      textjp: '<div class="story-board"><div class="story-board__row story-board__row--0"><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--1"><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--2"><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--3"><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--4"><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--5"><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--6"><div class="story-board__item"><div class="txt"></div></div></div></div>'
    }]
  }]
},
{
  name: 'KAMUWI 神居',
  namejp: 'カムヰ',
  desc: '禁忌～若你的禁忌槽的值大于等于16，则你输掉本局游戏。',
  descjp: '禁忌～あなたの禁忌ゲージが１６以上ならば、あなたは敗北する。',
  list: [{
    name: '剑',
    namejp: '剣',
    isSelect: false,
    pic: 'twiicon_sa_38.jpg',
    picq: 'sd_kamuwi.png',
    normal: [{
      id: '21-kamuwi-o-n-1',
      name: '红刃',
      namejp: '紅刃',
      baseType: 'normal',
      types: ['attack'],
      range: '3',
      damage: '3/1',
      text: '禁忌+1～【常时】此《攻击》获得+1/+1。\n----',
      textjp: '＜禁忌+1＞【常時】この《攻撃》は+1/+1となる。\n----',
      textkururu: [{
        if: '<i class="i-jinji">禁忌+1</i>',
        ctn: '【常时】此《攻击》获得+1/+1。'
      }],
      textkururujp: [{
        if: '<i class="i-jinji">禁忌+1</i>',
        ctn: '【常時】この《攻撃》は+1/+1となる。'
      }]
    }, {
      id: '21-kamuwi-o-n-2',
      name: '散华刃',
      namejp: '散華刃',
      baseType: 'normal',
      types: ['attack'],
      range: '3-4',
      damage: '2/1',
      text: '禁忌+1～【常时】此《攻击》获得+1/+1。\n----\n禁忌+1～【攻击后】若敌装中樱花结晶的数目小于等于4，则敌装（1）→自装\n----',
      textjp: '----\n＜禁忌+1＞\n【常時】この《攻撃》は+1/+0となる。\n----\n----\n＜禁忌+1＞\n【攻撃後】相手のオーラが4以下ならば、相オーラ→自オーラ：1\n----',
      textkururu: [{
        if: '<i class="i-jinji">禁忌+1</i>',
        ctn: '【常时】此《攻击》获得+1/+0。'
      }, {
        if: '<i class="i-jinji">禁忌+1</i>',
        ctn: '【攻击后】若敌装中樱花结晶的数目小于等于4，则敌装（1）→自装'
      }],
      textkururujp: [{
        if: '<i class="i-jinji">禁忌+1</i>',
        ctn: '【常時】この《攻撃》は+1/+0となる。'
      }, {
        if: '<i class="i-jinji">禁忌+1</i>',
        ctn: '【攻撃後】相手のオーラが4以下ならば、相オーラ→自オーラ：1'
      }]
    }, {
      id: '21-kamuwi-o-n-3',
      name: '四剑乱刃',
      namejp: '四剣乱刃',
      baseType: 'normal',
      types: ['attack'],
      range: '2-4',
      damage: '2/1',
      text: '禁忌+1～全力化：【攻击后】进行3次“攻击距离2-4 伤害1/1”的攻击。\n----',
      textjp: '＜禁忌+1＞全力化：【攻撃後】攻撃『適正距離2-4、1/1』を3回行う。\n----',
      textkururu: [{
        if: '<i class="i-jinji">禁忌+1</i>',
        ctn: '全力化：【攻击后】进行3次“攻击距离2-4 伤害1/1”的攻击。'
      }],
      textkururujp: [{
        if: '<i class="i-jinji">禁忌+1</i>',
        ctn: '全力化：【攻撃後】攻撃『適正距離2-4、1/1』を3回行う。'
      }]
    }, {
      id: '21-kamuwi-o-n-4',
      name: '格杀',
      namejp: '斬り払い',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '1-4',
      damage: '1/1',
      text: '【常时】仅当进行对应时可以使用此牌。\n禁忌+2～【攻击后】打消被对应的《攻击》的伤害。若该《攻击》为王牌或具《全力》副类别，则禁忌槽的值增加2。\n----',
      textjp: '【常時】このカードは対応でしか使用できない\n----\n<禁忌+2>【攻撃後】対応した《攻撃》のダメージを打ち消す。その《攻撃》が《全力》または切札であるなら禁忌ゲージを2上げる。\n----',
      textkururu: [{
        ctn: '【常时】仅当进行对应时可以使用此牌。'
      }, {
        if: '<i class="i-jinji">禁忌+2</i>',
        ctn: '【攻击后】打消被对应的《攻击》的伤害。若该《攻击》为王牌或具《全力》副类别，则禁忌槽的值增加2。'
      }],
      textkururujp: [{
        ctn: '【常時】このカードは対応でしか使用できない'
      }, {
        if: '<i class="i-jinji">禁忌+2</i>',
        ctn: '【攻撃後】対応した《攻撃》のダメージを打ち消す。その《攻撃》が《全力》または切札であるなら禁忌ゲージを2上げる。'
      }]
    }, {
      id: '21-kamuwi-o-n-5',
      name: '织荆',
      namejp: '棘縫い',
      baseType: 'normal',
      types: ['action'],
      text: '根据当前距离结算以下效果。\n大于等于5……距（2）→虚\n大于等于2小于等于4……本回合内你进行的下一次其他女神的非王牌的《攻击》获得+1/+0与不可被对应（通常牌）。\n小于等于1……虚（2）→距。',
      textjp: '現在の間合に応じて以下を行う。\n5以上…間合→ダスト：2。\n2以上4以下…このターンにあなたが次に行う他のメガミによる切札でない《攻撃》は+1/+0となり、対応不可（通常札）を得る。\n1以下…ダスト→間合：２。'
    }, {
      id: '21-kamuwi-o-n-6',
      name: '血晶乱流',
      namejp: '血晶乱流',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '选择2项，按由上至下的顺序执行（不能选择同一项2次）：\n1.进行一次“攻击距离5-9 伤害4/1”的攻击；\n2.若当前距离大于等于5，则距（2）→虚\n3.进行一次“攻击距离2-4 伤害2/2”的攻击；\n4.虚（2）→自装',
      textjp: '以下から異なる2つを選び、上から順に行う。\n・攻撃『適正距離5-9、4/1』を行う。\n・現在の間合が5以上ならば、間合→ダスト:２。\n・攻撃『適正距離2-4、2/2』を行う。\n・ダスト→自オーラ：2。'
    }, {
      id: '21-kamuwi-o-n-7',
      name: '血飞沫',
      namejp: '血飛沫',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '禁忌+1～【展开时】进行一次“攻击距离3 伤害2/2 不可被闪避”的攻击。\n----\n破绽\n【展开中】若任意数量的樱花结晶将被移动至敌装，则不将其移至敌装，而改为移至虚。若如此做，从此牌上移除1个樱花结晶。',
      textjp: '＜禁忌+1＞【展開時】攻撃『適正距離3、2/2、不可避』を行う。\n----\n隙\n【展開中】相手のオーラへと桜花結晶が移動するならば、それは代わりにダストへと移動する。そうした場合、このカードの上から桜花結晶を1つダストに送る。',
      textkururu: [{
        if: '<i class="i-jinji">禁忌+1</i>',
        ctn: '【展开时】进行一次“攻击距离3 伤害2/2 不可被闪避”的攻击。'
      }, {
        ctn: '破绽\n【展开中】若任意数量的樱花结晶将被移动至敌装，则不将其移至敌装，而改为移至虚。若如此做，从此牌上移除1个樱花结晶。'
      }],
      textkururujp: [{
        if: '<i class="i-jinji">禁忌+1</i>',
        ctn: '【展開時】攻撃『適正距離3、2/2、不可避』を行う。'
      }, {
        ctn: '隙\n【展開中】相手のオーラへと桜花結晶が移動するならば、それは代わりにダストへと移動する。そうした場合、このカードの上から桜花結晶を1つダストに送る。'
      }]
    }],
    special: [{
      id: '21-kamuwi-o-s-1',
      namejp: '灯',
      name: '灯',
      baseType: 'special',
      cost: '5',
      types: ['action'],
      text: '禁忌+3～将自气中的所有樱花结晶移至虚，对自命造成1点伤害。将『晓』从追加牌区以未使用状态加入王牌。\n----',
      textjp: '＜禁忌+3＞あなたのフレアにある桜花結晶すべてをダストに送り、あなたのライフに1ダメージを与える。\n追加札から「暁」を未使用で得る。\n----',
      textkururu: [{
        if: '<i class="i-jinji">禁忌+3</i>',
        ctn: '将自气中的所有樱花结晶移至虚，对自命造成1点伤害。将『晓』从追加牌区以未使用状态加入王牌。'
      }],
      textkururujp: [{
        if: '<i class="i-jinji">禁忌+3</i>',
        ctn: 'あなたのフレアにある桜花結晶すべてをダストに送り、あなたのライフに1ダメージを与える。\n追加札から「暁」を未使用で得る。'
      }]
    }, {
      id: '21-kamuwi-o-s-2',
      name: '阡',
      namejp: '阡',
      baseType: 'special',
      cost: '3',
      types: ['enhance'],
      capacity: '4',
      text: '禁忌+2～【展开时】进行一次“攻击距离3-4 伤害3/3 不可被对应（通常牌）”的攻击，对自命造成1点伤害。\n----\n【常时】若此牌上置有樱花结晶，则你不能因敌命中樱花结晶的数目降至0或叙述为“你赢得本局游戏”的牌的效果而赢得本局游戏。',
      textjp: '＜禁忌+2＞【展開時】攻撃『適正距離3-4、3/3、対応不可（通常札）』を行い、あなたのライフに1ダメージを与える。\n----\n【常時】このカードの上に桜花結晶が置かれているならば、あなたは勝利できない。',
      textkururu: [{
        if: '<i class="i-jinji">禁忌+2</i>',
        ctn: '【展开时】进行一次“攻击距离3-4 伤害3/3 不可被对应（通常牌）”的攻击，对自命造成1点伤害。'
      }, {
        ctn: '【常时】若此牌上置有樱花结晶，则你不能因敌命中樱花结晶的数目降至0或叙述为“你赢得本局游戏”的牌的效果而赢得本局游戏。'
      }],
      textkururujp: [{
        if: '<i class="i-jinji">禁忌+2</i>',
        ctn: '【展開時】攻撃『適正距離3-4、3/3、対応不可（通常札）』を行い、あなたのライフに1ダメージを与える。'
      }, {
        ctn: '【常時】このカードの上に桜花結晶が置かれているならば、あなたは勝利できない。'
      }]
    }, {
      id: '21-kamuwi-o-s-3',
      name: '尸',
      namejp: '尸',
      cost: '1',
      baseType: 'special',
      types: ['attack', 'reaction'],
      range: '0-6',
      damage: '0/0',
      text: '【攻击后】本回合内，对手下一次使用被对应的《攻击》的使用者的牌时，必须从手牌中弃置1张该女神的牌作为额外费用。\n----\n【即再起】你的禁忌槽的值变为6的倍数。',
      textjp: '【攻撃後】このターン中、このカードが対応した《攻撃》を行ったメガミのカードを相手が次に使用するならば、追加コストとして手札からそのメガミのカードを1枚を捨て札にしなくてはならない。\n----\n【即再起】あなたの禁忌ゲージが6の倍数になる。'
    }, {
      id: '21-kamuwi-o-s-4',
      name: '理',
      namejp: '理',
      cost: '3',
      baseType: 'special',
      types: ['action'],
      text: '选择至多3次。你可以多次选择同一个选项。\n1.距（1）→虚；\n2.若自命中樱花结晶的数目小于等于8，则禁忌槽的值增加1。若如此做，则自装（1）→自命',
      textjp: '以下を3回まで選ぶ。同じものを複数回選んでもよい。\n・間合→ダスト：1\n・あなたのライフが8以下ならば、あなたの禁忌ゲージを1上げる。そうした場合、自オーラ→自ライフ：1'
    }],
    extra: [{
      id: '21-kamuwi-o-s-1-ex1',
      name: '晓',
      namejp: '暁',
      extraFrom: '21-kamuwi-o-s-1',
      baseType: 'special',
      cost: '6',
      types: ['attack'],
      range: '3-7',
      damage: '6/4',
      text: '超克\n【常时】若此《攻击》被通常牌对应，则不结算该牌，而改为将其置入弃牌区，此《攻击》得-1/+0；若被王牌对应，则不结算该牌，而改为将其变为使用后状态，此攻击得-1/-1。\n【攻击后】将此牌移出游戏。',
      textjp: '超克\n【常時】この《攻撃》が通常札に対応されたならば、それを解決する代わりに捨て札に置き、この《攻撃》を-1/+0する。切札に対応されたならば、それを解決する代わりに使用済にし、この《攻撃》を-1/-1する。\n【攻撃後】このカードを取り除く。'
    }]
  }]
},
{
  name: 'RENRI 恋离',
  namejp: 'レンリ',
  desc: '伪证～每当你由主要阶段的规则效果使用通常牌时，展示该牌前，你可以声称将要使用的牌为某种具有伪证关键字的牌以进行一次伪证，每种牌每回合限一次。若对手不进行反证，则该牌背面朝上视为所声称的牌使用，结算完毕后盖伏该牌。否则展示该牌，若该牌并非所声称的牌，则不使用该牌，而改为将其置入弃牌区；若该牌为所声称的牌，则对手承受1次焦躁伤害，你使用该牌。',
  descjp: '偽証～通常札を通常の方法で使うならば、偽証を持つ各カードとして1回ずつ偽証できる。反証されなければ偽証通り使用して伏せ札にする。反証され、偽物なら使用できず捨て札となる。本物なら相手は焦燥を受け、カードも使用する。',
  list: [{
    name: '衣',
    namejp: '衣',
    isSelect: false,
    pic: 'twiicon_sa_39.jpg',
    picq: 'sd_renri.png',
    normal: [{
      id: '22-renri-o-n-1',
      name: '荼酷谩言',
      namejp: '嘘突き',
      baseType: 'normal',
      types: ['attack'],
      range: '1-2',
      damage: '2/1',
      text: '伪证\n【常时】若此伪证未被反证，则你可以展示用于伪证的牌。若该牌并非此牌，则对手不能选择由装承受此《攻击》的伤害。若你展示了该牌，则结算完毕后，不将该牌置入盖牌区，而改为置入弃牌区。',
      textjp: '偽証\n【常時】この偽証が反証されなかったならば、このカードを公開してもよい。それが偽物だったならば、相手はオーラへのダメージを選べない。\n（公開したならば解決後に捨て札になる）'
    }, {
      id: '22-renri-o-n-2',
      name: '骛虚谝言',
      namejp: '都度討ち',
      baseType: 'normal',
      types: ['attack'],
      range: '3-5',
      damage: '2/1',
      text: '伪证\n【常时】若你的弃牌区与付与区的通常牌的张数之和大于等于3，则此《攻击》获得+1/+0。',
      textjp: '偽証\n【常時】あなたの捨て札と付与札に通常札が合計3枚以上あるならば、この《攻撃》は+1/+0となる。'
    }, {
      id: '22-renri-o-n-3',
      name: '涂污谗言',
      namejp: '玄塗り',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '1-5',
      damage: '1/2',
      text: '伪证（对应时不能进行伪证）\n【攻击后】若本回合内有樱花结晶移出虚，则被对应的《攻击》结算以下效果。\n若该《攻击》的对装伤害大于等于3则获得-1/+0，否则获得+0/-1。',
      textjp: '偽証（偽証は対応では行えない）\n【攻撃後】このターン中にダストから桜花結晶が移動しているならば、対応した《攻撃》に以下を行う。\nその《攻撃》はオーラへのダメージが3以上ならば-1/+0、そうでないならば+0/-1となる。'
    }, {
      id: '22-renri-o-n-4',
      name: '唆使',
      namejp: '煽り殺陣',
      baseType: 'normal',
      types: ['action'],
      text: '对手畏缩。\n若对手本回合内曾反证失败，则你可以从弃牌中选择1张具伪证关键字的牌置入手牌。',
      textjp: '相手を畏縮させる。\nこのターン中に相手が反証に失敗しているならば、あなたの捨て札にある偽証を持つカードを1枚を選び、手札に戻してもよい。'
    }, {
      id: '22-renri-o-n-5',
      name: '鹘鹜谖言',
      namejp: '雲喰い',
      baseType: 'normal',
      types: ['action'],
      text: '伪证\n若你的弃牌区与付与区中的通常牌的张数之和大于等于3，则对手盖伏1张手牌。若对手不能如此做，则对手畏缩。\n【常时】若此伪证被对手反证，且用于伪证的牌为此牌，则对手因反证失败受到的焦躁改为2次。',
      textjp: '偽証\nあなたの捨て札と付与札に通常札が合計３枚以上あるならば、相手は手札を1枚伏せ札にする。伏せ札にしようとした上で行えないならば、相手を畏縮させる。\n【常時】この偽証に反証されてこのカードが本物だったならば、相手は焦燥を1回でなく2回受ける。'
    }, {
      id: '22-renri-o-n-6',
      name: '辜毒谄言',
      namejp: '魚吊り',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '伪证（对应时不能进行伪证）\n距（1）→自气',
      textjp: '偽証（偽証は対応では行えない）\n間合→自フレア：1。'
    }, {
      id: '22-renri-o-n-7',
      name: '蛊惑',
      namejp: '惹き騙り',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '【展开时/破弃时】若当前距离大于等于2，则距（1）→虚',
      textjp: '【展開時/破棄時】現在の間合が2以上ならば、間合→ダスト：1。'
    }],
    special: [{
      id: '22-renri-o-s-1',
      name: '谰戾淋漓',
      namejp: 'ルルララリ',
      cost: '4',
      baseType: 'special',
      types: ['attack'],
      range: '0-10',
      damage: '1/2',
      text: '【常时】若本回合内对手曾反证失败，则此攻击对敌装和敌命均造成伤害。\n【使用后】你的结束阶段开始时，对敌装造成1点伤害，然后将此牌变为未使用状态。',
      textjp: '【常時】この《攻撃》がダメージを与えるに際してこのターン中に相手が反証に失敗しているならば、相手は片方を選ぶのでわなく両方のダメージを受ける。\n【使用済】あなたの終了フェイズに相手のオーラに1ダメージを与え、このカードを未使用に戻す。'
    }, {
      id: '22-renri-o-s-2',
      name: '立睖凌厉',
      namejp: 'ラナラロミレリラ',
      cost: '4',
      baseType: 'special',
      types: ['action', 'reaction'],
      text: '【常时】仅当进行对应时可以使用此牌。\n检视对手的手牌，你可以从中选择1张其他女神的不具《全力》副类别的牌。若如此做，则你可以使用或盖伏该牌。所使用的牌视为对应了此牌对应的《攻击》。',
      textjp: '【常時】このカードは対応でしか使用できない。\n相手の手札を見て、《全力》でない他のメガミのカード1枚を選んでもよい。そうした場合、そのカードを使用するか伏せ札にする。使用されたカードはこのカードが対応している《攻撃》に対応しているものと扱う。'
    }, {
      id: '22-renri-o-s-3',
      name: '论理怜悧',
      namejp: 'オリレテラレル',
      cost: '2',
      baseType: 'special',
      types: ['action', 'reaction'],
      text: '从眼前构筑时未选用的具伪证关键字的通常牌中选择1张，展示之，然后使用该牌。若此牌对应了一个《攻击》，则视为该牌也对应了该《攻击》。然后将该牌移出游戏。\n----\n【再起】你的弃牌区与付与区中的通常牌的张数之和大于等于3。',
      textjp: '眼前構築で選んでいないあなたの通常札から偽証を持つ1枚を公開し、それを使用する。その後、それを取り除く。このカードが対応している《攻撃》があるならば、使用されたカードはそれに対応しているものと扱う。\n----\n【再起】あなたの捨て札と付与札に通常札が合計3枚以上ある。'
    }, {
      id: '22-renri-o-s-4',
      namejp: '夜山恋離のなれの果て',
      name: '夜山恋离的终幕',
      baseType: 'special',
      cost: '1',
      types: ['enhance'],
      capacity: '3',
      text: '终端\n【展开时】将『铭镌之衣』从追加牌区以未使用状态加入王牌。\n【展开中】仅当你的准备阶段移除所有《付与》牌上的樱花结晶时可以移除此牌上的樱花结晶。',
      textjp: '終端\n【展開時】追加札から「刻まれし衣」を未使用で得る。\n【展開中】この付与札の上の桜花結晶はあなたの開始フェイズの処理でしか移動しない。'
    }],
    extra: [{
      id: '22-renri-o-s-4-ex1',
      extraFrom: '22-renri-o-s-4',
      name: '铭镌之衣',
      namejp: '刻まれし衣',
      baseType: 'special',
      cost: 'X',
      types: ['variable'],
      text: '【常时】根据你的『夜山恋离的终幕』上的樱花结晶的数目，此牌成为以下牌的复制。\n大于等于3……『久远之花』\n2……『完全论破』\n1……『夙愿』\n0……『御剑桐子的巫女神乐』',
      textjp: '【常時】このカードはあなたの「夜山恋離のなれの果て」の上の桜花結晶の個数に応じて、以下のカードの複製となる。\n3以上…「久遠ノ花」\n2…「完全論破」\n1…「望我」\n0…「御劔桐子の巫女神楽」'
    }, {
      id: '22-kiriko-o-s-4',
      name: '御剑桐子的巫女神乐',
      namejp: '御劔桐子の巫女神楽',
      baseType: 'special',
      cost: '3',
      types: ['attack'],
      range: '2-3',
      damage: '3/2',
      text: '【使用后】若你由剑舞执行基本动作《装附》，则你可以选择不执行基本动作《装附》，而改为执行基本动作《聚气》。\n【使用后】每当你进行本回合内的第3次剑舞时，结算完毕后你可以使用此牌。（需要支付费用）',
      textjp: '【使用済】あなたが剣舞により基本動作《纏い》を行うならば、代わりに基本動作《宿し》を行ってもよい。\n【使用済】あなたがこのターンに3回目の剣舞を行った時、このカードを使用してもよい。（消費を支払う）'
    }]
  }, {
    name: '遗物',
    namejp: '遺物',
    isSelect: false,
    pic: 'twiicon_sa_49.jpg',
    picq: 'sd_renri_a1.png',
    changenormal: [{
      changeIndex: 2,
      id: '22-renri-a1-n-2',
      name: '欺瞒之雾',
      namejp: '欺瞞の霧',
      baseType: 'normal',
      types: ['variable'],
      text: '【常时】你可以声称此牌为对手眼前构筑时能够选择的其他女神的非《付与》的牌并宣告将要由主要阶段的规则效果使用此牌。若如此做，对手可以从其手牌、盖牌区或弃牌区中展示所声称的牌。若对手展示了该牌，则不使用此牌，而改为将此牌置入弃牌区。',
      textjp: '【常時】このカードを、相手が眼前構築で選びうる他のメガミの《付与》でない通常札として通常の方法で使用を宣言してもよい。そうした場合、相手は相手の手札、伏せ札、捨て札からそのカードを公開できる。公開されたならば、このカードは使用されずに捨て札となる。'
    }, {
      changeIndex: 6,
      id: '22-renri-a1-n-6',
      name: '神授',
      namejp: '神授',
      baseType: 'normal',
      types: ['action'],
      text: '将这张『神授』置于牌库顶，然后与遗物中的1张通常牌交换。\n【常时】当你将要重铸牌库时，若这张『神授』位于弃牌区，则你可以使用此牌。',
      textjp: 'この「神授」を山札の上に置き、その後に遺物にある通常札1枚と交換する。\n【常時】山札を再構成する直前にこの「神授」が捨て札にあるならば、このカードを使用してもよい。'
    }],
    changespecial: [{
      changeIndex: 1,
      id: '22-renri-a1-s-1',
      name: '道化的觉悟',
      namejp: 'ロルレロラルロ',
      baseType: 'special',
      cost: '0',
      types: ['enhance'],
      capacity: '0',
      text: '【使用后】每当你的结束阶段开始时，你可以使用此牌。若以此法使用，则此牌的纳视为3，且其中1枚樱花结晶需从自命中选择。\n【展开中】每当你的主要阶段开始时，你可以抓1张牌。\n【展开中】对手因焦躁受到的伤害变为2/1。\n【展开中】若你的伪证未被反证，你可以公开用于伪证的牌。若该牌并非所声称的牌，则你获得1点集中力。',
      textjp: '【使用済】あなたの終了フェイズに納3として、そのうちの1つをライフから納める形でこのカードを使用してもよい。\n【展開中】あなたのメインフェイズの開始時にカードを1枚引いてもよい。\n【展開中】相手が焦燥で受けるダメージが2/1になる。\n【展開中】あなたの偽証が反証されなかったならば、そのカードを公開してもよい。それが偽物だったならば、集中力を1得る。'
    }],
    changeExtra: [{
      id: '22-renri-a1-n-6-ex1',
      extraFrom: '22-renri-a1-n-6',
      name: '谎言的武器',
      namejp: '偽りの武器',
      baseType: 'normal',
      types: ['attack'],
      range: '2-4',
      damage: '1/1',
      text: '伪证设置 伪证 回归\n【攻击后】伪火～若本回合内你使用的第3张牌为《攻击》牌，则该《攻击》获得+0/+1。',
      textjp: '偽証設置　偽証　回帰\n【攻撃後】偽火-あなたがこのターンで3枚目に使うカードが《攻撃》カードならば、その《攻撃》は+0/+1となる。'
    }, {
      id: '22-renri-a1-n-6-ex2',
      extraFrom: '22-renri-a1-n-6',
      name: '刃的本质',
      namejp: '刃の本質',
      baseType: 'normal',
      types: ['attack'],
      range: '3-4',
      damage: '3/1',
      text: '伪证 回归\n【常时】奉纳～若『道化的觉悟』上置有樱花结晶，则此《攻击》获得+0/+1。\n【常时】此牌回归时，对手的集中力变为0。\n（此牌视为斩华的牌）',
      textjp: '偽証　回帰\n【常時】奉納-「ロルレロラルロ」の上に桜花結晶があるならば、この《攻撃》は+0/+1となる。\n【常時】このカードを回帰した時、相手の集中力は0になる。\n（このカードはザンカのカードとして扱う）'
    }, {
      id: '22-renri-a1-n-6-ex3',
      extraFrom: '22-renri-a1-n-6',
      name: '最初的樱铃',
      namejp: '最初の桜鈴',
      baseType: 'normal',
      types: ['action'],
      text: '伪证 回归\n执行1次基本动作。若此伪证未被反证，则再执行1次基本动作。\n光辉～若虚中的樱花结晶的数目小于等于5，则从盖牌区中选择1张牌置于牌库底。\n【常时】此牌回归时，虚（1）→自命\n（此牌视为奥华的牌）',
      textjp: '偽証　回帰\n基本動作を1回行う。このカードが反証されていないならば、さらにもう1回行う。\n光輝-ダストが5以下ならば伏せ札からカードを1枚選び、山札の一番下に置く。\n【常時】このカードを回帰した時、ダスト→自ライフ：1\n（このカードはヲウカのカードとして扱う）'
    }]
  }]
},
{
  name: 'AKINA 安岐那',
  namejp: 'アキナ',
  desc: '价格~具有价格槽，槽的初始值为2。\n敌命受到重铸牌库以外的伤害时：+1\n由投资券移动樱花结晶时：+1\n自命受到重铸牌库以外的伤害时：-1\n由回收移动樱花结晶时：-2',
  descjp: '相場～相場ゲージを持ち、初期値は2である。\n相手のライフに0以上のダメージを与える：+ 1\n投資券により桜花結晶を動かす：+1\nあなたのライフに0以上のダメージを受ける：‐1\n回収により桜花結晶をを動かす：‐2',
  list: [{
    name: '算盘',
    namejp: '算盤',
    isSelect: false,
    pic: 'twiicon_sa_46.jpg',
    picq: 'sd_akina.png',
    normal: [{
      id: '23-akina-o-n-1',
      name: '算盘珠',
      namejp: '算盤玉',
      baseType: 'normal',
      types: ['attack'],
      range: '1-6',
      damage: '1/0',
      text: '【攻击后】选择1项：\n1.获得1点集中力；\n2.进行一次回收；\n3.自气（1）⇔自流',
      textjp: '【攻撃後】以下から1つを選ぶ。\n・あなたは集中力を1得る。\n・回収を行う。\n・自フレア↔自フロー：１。'
    }, {
      id: '23-akina-o-n-2',
      name: '威吓',
      namejp: '恫喝',
      baseType: 'normal',
      types: ['attack'],
      range: '4-5',
      damage: '-/0',
      text: '投资券\n【常时】若你的资本大于对手的资本，则此《攻击》获得+0/+1。',
      textjp: '投資券\n【常時】あなたの資本が相手の資本より大きいならば、この《攻撃》は+0/+1となる。'
    }, {
      id: '23-akina-o-n-3',
      name: '交易',
      namejp: '交易',
      baseType: 'normal',
      types: ['attack'],
      range: '1-5',
      damage: '2/0',
      text: '终端\n【攻击后】若你的资本比对手的资本大3及以上，则从弃牌区中选择至多1张其他女神的牌置入手牌。\n【攻击后】若你的资本大于对手的资本，则你可以执行1次基本动作。',
      textjp: '終端\n【攻撃後】あなたの資本が相手の資本より3以上大きいならば、捨て札にある他のメガミのカード1枚までを選び、手札に戻す。\n【攻撃後】あなたの資本が相手の資本より大きいならば、基本動作を1回行ってもよい。'
    }, {
      id: '23-akina-o-n-4',
      name: '投机',
      namejp: '投機',
      baseType: 'normal',
      types: ['action'],
      text: '选择1项：\n1.自装（2）→自流\n2.虚（2）→自装',
      textjp: '以下から1つを選ぶ。\n・自オーラ→自フロー：２。\n・ダスト→自オーラ：２。'
    }, {
      id: '23-akina-o-n-5',
      name: '算法',
      namejp: '算法',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '获得1点集中力。\n本回合内，所有《攻击》的攻击距离中的每一个值减小1。\n（例如攻击距离3-4会因此变为攻击距离2-3）',
      textjp: 'あなたは集中力を1得る。\nこのターン中、《攻撃》は全ての適正距離が1減少する。\n（例えば3‐4は2‐3となる）'
    }, {
      id: '23-akina-o-n-6',
      name: '乱拨',
      namejp: '盤狂わせ',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '距离限制（0-3）\n【展开时】敌气（2）→距\n【破弃时】距（1）→敌气',
      textjp: '間合制限（0‐3）\n【展開時】相フレア→間合：２。\n【破棄時】間合→相フレア：１。'
    }, {
      id: '23-akina-o-n-7',
      name: '直接金融',
      namejp: '直接金融',
      baseType: 'normal',
      types: ['enhance', 'fullpower'],
      capacity: '2',
      text: '破绽 投资券\n【展开时】敌装（1）→自装\n你可以支付1点集中力。若如此做，则再结算上述箭头效果1次。\n【破弃时】你可以进行一次“攻击距离2-5 伤害1/0”的攻击。',
      textjp: '隙　投資券\n【展開時】相オーラ→自オーラ\n集中力を1支払ってもよい。そうした場合、この矢印効果をもう1回行う。\n【破棄時】攻撃『適正距離2-5、1/0』を行ってもよい。'
    }],
    special: [{
      id: '23-akina-o-s-1',
      name: '仙霄鬼泉天元术',
      namejp: '開方冥式切取法',
      baseType: 'special',
      cost: '時価',
      types: ['action'],
      text: '进行一次“攻击距离0-10 伤害-/1 【常时】若此《攻击》被对应，则打消此《攻击》。【常时】此《攻击》的伤害不受效果修正。”的攻击。然后，若你的资本大于对手的资本，则再次使用此牌。\n（使用时仍需支付费用。行情费用不受增减效果修正。）',
      textjp: '攻撃『適正距離0-10、‐/1、【常時】この《攻撃》が対応されたならば、この《攻撃》は打ち消される。【常時】この《攻撃》のダメージは変化しない』を行う。その後、あなたの資本が相手の資本より大きいならばこのカードを使用する。\n（消費は支払い、それは時価以外で加減されない）'
    }, {
      id: '23-akina-o-s-2',
      name: '大衍算颗手算表',
      namejp: '大衍算顆手打表',
      baseType: 'special',
      cost: '0',
      types: ['attack', 'reaction'],
      range: '0-10',
      damage: '2/0',
      text: '【攻击后】自气（1）→自装\n自流（1）→自装\n自命（1）→自装',
      textjp: '【攻撃後】\n自フレア→自オーラ：１。\n自フロー→自オーラ：１。\n自ライフ→自オーラ：１。'
    }, {
      id: '23-akina-o-s-3',
      name: '差列递归征贿法',
      namejp: '衰垜逐肘守料術',
      baseType: 'special',
      cost: '1',
      types: ['enhance'],
      capacity: '1',
      text: '【展开时】从自命中选择4个樱花结晶移至自气。\n【展开中】仅此牌的效果可以移动此牌上的樱花结晶。\n【展开中】若你将因自命为0输掉本局游戏，则防止此次失败，从自气中选择4个樱花结晶移至自命，然后将此牌上的所有樱花结晶移至虚，将此牌移出游戏。',
      textjp: '【展開時】あなたのライフからフレアへと桜花結晶を4つ移動させる。\n【展開中】このカードの効果以外でこの付与札の上の桜花結晶は移動しない。\n【展開中】あなたのライフが0の時にあなたが敗北するならば、代わりにあなたのフレアからライフへと桜花結晶を4つ移動させる。\nその後、この上の桜花結晶を全てダストに送り、このカードを取り除く。'
    }, {
      id: '23-akina-o-s-4',
      name: '源上安岐那的正解',
      namejp: '源上安岐那の御明算',
      baseType: 'special',
      cost: '時価',
      types: ['action'],
      text: '距离限制（0-7） 投资券\n你可以进行一次回收。若如此做，则你可以执行至多2次基本动作《装附》，然后将此牌移出游戏。\n【使用后】每当你的主要阶段开始时，你可以不进行回收，而改为执行1次基本动作《聚气》。',
      textjp: '間合制限（0‐7）　投資券\n回収を行ってもよい。そうした場合、基本動作《纏い》を2回まで行い、このカードを取り除く。\n【使用済】あなたのメインフェイズの開始時、あなたは回収を行う代わりに基本動作《宿し》を1回行ってもよい。'
    }]
  }]
},
{
  name: 'SHISUI 志水',
  namejp: 'シスイ',
  desc: '裂伤～你的准备阶段开始时，将你的所有裂伤指示物以任意顺序伤害化。',
  descjp: '裂傷～あなたの開始フェイズの開始時に各領域にあるあなたの裂傷トークンを任意の順でダメージ化する。',
  list: [{
    name: '锯',
    namejp: '鋸',
    isSelect: false,
    pic: 'twiicon_sa_47.jpg',
    picq: 'sd_shisui.png',
    normal: [{
      id: '24-shisui-o-n-1',
      name: '锯',
      namejp: '鋸斬り',
      baseType: 'normal',
      types: ['attack'],
      range: '2-3',
      damage: '3/1',
      text: '',
      textjp: ''
    }, {
      id: '24-shisui-o-n-2',
      name: '利刃',
      namejp: '刻み刃',
      baseType: 'normal',
      types: ['attack'],
      range: '2-3',
      damage: '1/1',
      text: '【攻击后】进行一次“攻击距离2-3 伤害{1/2} 【常时】若敌装中你的裂伤指示物的数量大于等于敌装中樱花结晶的数量，则对手不能选择由装承受此次伤害。”的攻击。',
      textjp: '【攻撃後】攻撃『適正距離2-3、{1/2}、【常時】相手のオーラに置かれたあなたの裂傷トークンの個数が相手のオーラ以上ならば、相手はオーラへのダメージを選べない』を行う。',
      isLacerationDamage: true
    }, {
      id: '24-shisui-o-n-3',
      name: '叛乱击',
      namejp: '反乱撃',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '2-4',
      damage: '1/1',
      text: '【常时】若本回合内你受到过伤害，则此《攻击》获得+1/+1。\n【攻击后】若本回合内你受到过至少2次伤害，则执行1次基本动作《装附》。',
      textjp: '【常時】あなたがこのターン中にダメージを受けているならば、この《攻撃》は+1/+1となる。\n【攻撃後】あなたがこのターン中にダメージを2回以上受けているならば、基本動作《纏い》を1回行う。'
    }, {
      id: '24-shisui-o-n-4',
      name: '彻底反抗',
      namejp: '徹底抗戦',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '1-7',
      damage: '2/3',
      text: '不可被对应\n【攻击后】对手畏缩，对自装、自气或自命造成1点裂伤。',
      textjp: '対応不可\n【攻撃後】相手を畏縮させ、あなたのオーラかフレアかライフに裂傷を1与える。',
      isLacerationDamage: true
    }, {
      id: '24-shisui-o-n-5',
      name: '荆棘之道',
      namejp: '茨道',
      baseType: 'normal',
      types: ['action'],
      text: '距（2）→虚\n对自装或自气造成1点裂伤。若当前距离等于0，则不对自装或自气造成裂伤，而改为对自命造成1点裂伤。',
      textjp: '間合→ダスト：2。\nあなたのオーラかフレアに裂傷を1与える。現在の間合が0ならば、代わりにライフに裂傷を1与える。'
    }, {
      id: '24-shisui-o-n-6',
      name: '金粒护身',
      namejp: '金屑纏い',
      baseType: 'normal',
      types: ['action'],
      text: '距离限制（0-4）\n执行2次基本动作《装附》。你从自装或自气中选择一项，对手从敌装或敌气中选择一项。对所选择的所有区域各造成1点裂伤。',
      textjp: '間合制限（0‐4）\n基本動作《纏い》を2回行う。あなたはあなたのオーラかフレアを選ぶ。相手は相手のオーラかフレアを選ぶ。選ばれた領域に裂傷を1ずつ与える。'
    }, {
      id: '24-shisui-o-n-7',
      name: '玄色的羁绊',
      namejp: '黒き絆',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '选择至多X项。其中X等于本回合内你受到伤害的次数。\n1.被对应的《攻击》获得+0/-1；\n2.对手畏缩；\n3.对手从敌装、敌气或敌命中选择1个区域。你对该区域造成1点裂伤。',
      textjp: '以下から異なるX個までを選ぶ。Xはあなたがこのターンにダメージを受けた回数に等しい。\n・対応した《攻撃》を+0/-1する。\n・相手を畏縮させる。\n・相手は相手のオーラかフレアかライフから1つ選ぶ。あなたはそこに裂傷を1与える。'
    }],
    special: [{
      id: '24-shisui-o-s-1',
      name: '红莲钻心',
      namejp: 'ハドマギリ',
      baseType: 'special',
      cost: '3',
      types: ['action', 'reaction'],
      text: '【常时】若此牌对应了一个《攻击》，则此牌于该《攻击》结算完毕后结算。\n选择任意数量的区域。将所选择的区域中的你的裂伤指示物以任意顺序伤害化。然后进行一次“攻击距离1-4 伤害2/1 不可被对应（通常牌） 【常时】此攻击获得+0/+X，X等于本回合内你受到伤害的次数的一半（向上取整）。”的攻击',
      textjp: '【常時】このカードが対応している《攻撃》があるならば、その《攻撃》の解決後にこのカードの効果を解決する。\n任意の数の領域を選び、それらに置かれたあなたの裂傷トークンを任意の順でダメージ化する。その後、攻撃『適正距離1-4、2/1、対応不可（通常札）、【常時】この《攻撃》は+0/+Xとなる。Xはあなたがこのターン中にダメージを受けた回数の半分（切り上げ）に等しい』を行う。'
    }, {
      id: '24-shisui-o-s-2',
      name: '青莲裂肤',
      namejp: 'ウバラザキ',
      baseType: 'special',
      cost: '2',
      types: ['attack'],
      range: '3',
      damage: '2/1',
      text: '【攻击后】若对手选择由命承受此次伤害，则本回合内你进行的下一次对装伤害小于等于2的《攻击》的伤害裂伤化。\n----\n【再起】自装与自气中樱花结晶的数目之和小于等于6。',
      textjp: '【攻撃後】相手がライフへのダメージを選んだならば、このターンにあなたが次に行うオーラへのダメージが2以下の《攻撃》のダメージは裂傷化する。\n----\n【再起】あなたのオーラとフレアの合計が6以下である。',
      isLacerationDamage: true,
      isLacerationCost: true
    }, {
      id: '24-shisui-o-s-3',
      name: '寒疮噬身',
      namejp: 'アブダグイ',
      baseType: 'special',
      cost: '2',
      types: ['action', 'reaction'],
      text: '打消被对应的《攻击》的伤害。若以此法打消了《攻击》的伤害，则你受到一次{X/Y}的裂伤，X和Y分别等于该《攻击》的对装伤害和对命伤害。\n----\n【即再起】你受到了本回合内第3次伤害。',
      textjp: '対応した《攻撃》のダメージを打ち消す。そうした場合、あなたは{X/Y}の裂傷を受ける。X/Yは打ち消したダメージの値に等しい。\n----\n【即再起】あなたがこのターンに3回目のダメージを受ける。'
    }, {
      id: '24-shisui-o-s-4',
      name: '桑畑志水的埋骨地',
      namejp: '桑畑志水の死に所',
      baseType: 'special',
      cost: '2',
      types: ['enhance', 'fullpower'],
      capacity: '2',
      text: '【展开时】从敌气中选择X个樱花结晶置于此牌上。若敌气大于自气，则X等于二者中樱花结晶数目的差。否则X等于0。\n【展开中】你不会输掉本局游戏。\n【展开中】若自命中樱花结晶的数目等于0，则对手不能支付集中力。',
      textjp: '【展開時】このカードの上に桜花X個相手のフレアから置く。相手のフレアがあなたのフレアより大きいならば、Xはその差に等しい。そうでないならばXは0である。\n【展開中】あなたは敗北しない。\n【展開中】あなたのライフが0ならば、相手は集中力を支払えない。',
      isLacerationCost: true
    }]
  }]
},
{
  name: 'MISORA 御空',
  namejp: 'ミソラ',
  desc: '照准～每个结束阶段开始时，你可以将瞄准点的值设为当前距离。若你于自己的回合内进行了《攻击》，则主要阶段结束时移除瞄准点。',
  descjp: '照準～終了フェイズに現在の間合を照準として記録できる。あなたのターンに《攻撃》を行ったらメインフェイズの終了時に照準が外れる。',
  list: [{
    name: '弓',
    namejp: '弓',
    isSelect: false,
    pic: 'twiicon_sa_48.jpg',
    picq: 'sd_misora.png',
    normal: [{
      id: '25-misora-o-n-1',
      name: '弓流',
      namejp: '弓流し',
      baseType: 'normal',
      types: ['attack'],
      range: '4-7',
      damage: '2/1',
      text: '【常时】若当前距离与你的瞄准点皆位于攻击距离内，则此《攻击》的对装伤害变为“-”。\n【攻击后】若当前距离与瞄准点的值相等，则虚（1）→自装',
      textjp: '【常時】照準が合っているならば、この《攻撃》のオーラへのダメージは「ｰ」になる。\n【攻撃後】現在の間合と照準が等しいならば、ダスト→自オーラ：1'
    }, {
      id: '25-misora-o-n-2',
      name: '引弓蹴',
      namejp: '狙い蹴り',
      baseType: 'normal',
      types: ['attack'],
      range: '2-4',
      damage: '2/1',
      text: '【攻击后】你可以令瞄准点的值增大1或减小1。',
      textjp: '【攻撃後】あなたの照準を1増加させるか、1減少させてもよい。'
    }, {
      id: '25-misora-o-n-3',
      name: '风穴',
      namejp: '風孔',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '2-5',
      damage: '1/1',
      text: '【攻击后】根据当前距离与瞄准点的值的大小关系结算以下效果。\n当前距离等于瞄准点……虚（1）→自装\n当前距离大于瞄准点……距（1）→虚\n当前距离小于瞄准点……虚（1）→距',
      textjp: '【攻撃後】現在の間合と照準を比べて以下のいずれかを行う。\n・現在の間合＞照準…間合→ダスト：１\n・現在の間合＝照準…ダスト→自オーラ：１\n・現在の間合＜照準…ダスト→間合：１'
    }, {
      id: '25-misora-o-n-4',
      name: '旋翎疑矢',
      namejp: '甲矢乙矢',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '5-15',
      damage: '5/1',
      text: '追踪\n【攻击后】对手从手牌中弃置1张《攻击》牌。若不能如此做，对手须展示其手牌，并盖伏其牌库顶的3张牌。',
      textjp: '追尾\n【攻撃後】相手は手札から《攻撃》カード1枚を捨て札にする。それが行えない場合、相手は手札を公開し、相手の山札の上から3枚を伏せ札にする。'
    }, {
      id: '25-misora-o-n-5',
      name: '精密化',
      namejp: '精密化',
      baseType: 'normal',
      types: ['action'],
      text: '获得1点集中力。\n本回合内，对于你进行的下一次其他女神的对装伤害不为“-”的通常牌《攻击》，若当前距离与你的瞄准点皆位于该《攻击》的攻击距离内，则该《攻击》获得+1/+1。',
      textjp: '集中力を1得る。\nこのターンにあなたが次に行う他のメガミの通常札によるオーラのダメージが「ｰ」でない《攻撃》は、照準が合っているならば+1/+1となる。'
    }, {
      id: '25-misora-o-n-6',
      name: '寻踪箭',
      namejp: '追尾撃',
      baseType: 'normal',
      types: ['action'],
      text: '从眼前构筑时未选用的其他女神的牌或盖牌中选择1张非《全力》的《攻击》通常牌使用。以此法使用的牌获得追踪。若以此法从游戏外使用的牌将要移动至使用中以外的区域，则改为将其背面朝上移出游戏。\n（即回到眼前构筑时未选用的状态）',
      textjp: '眼前構築で選んでいない他のメガミのカードまたは伏せ札のカードから、《全力》でない《攻撃》の通常札1枚を選び、それに追尾を与えて使用する。ゲーム外から使用したそのカードが領域を移動するならば、代わりに裏向きで取り除く。\n（眼前構築で選んでいない状態に戻る）'
    }, {
      id: '25-misora-o-n-7',
      name: '空之翼',
      namejp: '空の翼',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '终端 距离限制（0-3）\n【展开时】敌装（2）→距\n【破弃时】本回合内，当前距离增大1，达人距离增大1。',
      textjp: '終端　間合制限（0ｰ3）\n【展開時】相オーラ→間合：２\n【破棄時】このターン中、現在の間合は1増加し、達人の間合は1大きくなる。'
    }],
    special: [{
      id: '25-misora-o-s-1',
      name: '遥瞩霜际',
      namejp: 'ミハテヌハテ',
      baseType: 'special',
      cost: '2',
      types: ['attack'],
      range: 'X',
      damage: '-/1',
      text: '追踪 不可被对应\n【常时】X等于此牌上的樱花结晶的数目的2倍加3。\n【攻击后】若X大于等于7，则盖伏对手的牌库。\n【使用后】当你的结束阶段开始时，将1个樱花结晶从虚移至此牌上，然后将此牌变为未使用状态。',
      textjp: '追尾　対応不可\n【常時】Xは3にこのカードの上の桜花結晶の数の2倍を加えた値に等しい。\n【攻撃後】Xが7以上ならば、相手の山札を全て伏せ札にする。\n【使用済】あなたの終了フェイズにこのカードの上にダストから1つ桜花結晶を置き、このカードを未使用に戻す。'
    }, {
      id: '25-misora-o-s-2',
      name: '蔽目重云',
      namejp: 'ツクモノクモ',
      baseType: 'special',
      cost: '1',
      types: ['enhance'],
      capacity: '1',
      text: '【展开中】若你有瞄准点，则当前距离变为瞄准点的值。\n【展开中】你不能执行基本动作《前进》或《离脱》。',
      textjp: '【展開中】照準があるならば、現在の間合は照準に等しくなる。\n【展開中】あなたは基本動作《前進》と《離脱》を行えない。'
    }, {
      id: '25-misora-o-s-3',
      name: '惴息悬影',
      namejp: 'カカゲルカゲ',
      baseType: 'special',
      cost: '2',
      types: ['enhance', 'reaction'],
      capacity: '3',
      text: '【展开时】若对于被对应的通常牌《攻击》而言，你的瞄准点位于该《攻击》的攻击距离内，则打消被对应的《攻击》，并将该牌封印于此牌下。\n【破弃时】将此牌所封印的所有牌置入对手的弃牌区。',
      textjp: '【展開時】対応した通常札による《攻撃》の適正距離があなたの照準を含むならば、対応した《攻撃》を打ち消し、そのカードをこのカードの下に封印する。\n【破棄時】このカードに封印されたカードを相手の捨て札に戻す。'
    }, {
      id: '25-misora-o-s-4',
      name: '御空穹仪',
      namejp: 'ミソラノソラ',
      baseType: 'special',
      cost: '5',
      types: ['enhance', 'fullpower'],
      capacity: '2',
      text: '【展开中】当前距离增大5。\n【破弃时】敌命（1）→距\n敌装（1）→距\n敌气（1）→距\n【使用后】不能由其他牌的效果使用此牌。',
      textjp: '【展開中】現在の間合は5増加する。\n【破棄時】相ライフ→間合：１\n　　　　　相オーラ→間合：１\n　　　　　相フレア→間合：１\n【使用済】このカードは使用できない。'
    }]
  }]
}
]

//为了chrome插件输出需要数据
// Sakura.forEach(a=>{
//   a.list.forEach(b => {
//     if (b.normal) {
//       var a = [];
//       b.normal.map(item => {
//         a.push({
//           id: item.id,
//           name: item.name,
//           namejp: item.namejp,
//         })
//       })
//       b.normal = a
//     }
//     if (b.special) {
//       var a = [];
//       b.special.map(item => {
//         a.push({
//           id: item.id,
//           name: item.name,
//           namejp: item.namejp,
//         })
//       })
//       b.special = a
//     }
//     if (b.changenormal) {
//       var a = [];
//       b.changenormal.map(item => {
//         a.push({
//           id: item.id,
//           name: item.name,
//           namejp: item.namejp,
//         })
//       })
//       b.changenormal = a
//     }
//     if (b.changespecial) {
//       var a = [];
//       b.changespecial.map(item => {
//         a.push({
//           id: item.id,
//           name: item.name,
//           namejp: item.namejp,
//         })
//       })
//       b.changespecial = a
//     }
//     if (b.extra) {
//       var a = [];
//       b.extra.map(item => {
//         a.push({
//           id: item.id,
//           name: item.name,
//           namejp: item.namejp,
//         })
//       })
//       b.extra = a
//     }
//     if (b.changeExtra) {
//       var a = [];
//       b.changeExtra.map(item => {
//         a.push({
//           id: item.id,
//           name: item.name,
//           namejp: item.namejp,
//         })
//       })
//       b.changeExtra = a
//     }
//     if (b.poison) {
//       var a = [];
//       b.poison.map(item => {
//         a.push({
//           id: item.id,
//           name: item.name,
//           namejp: item.namejp,
//         })
//       })
//       b.poison = a
//     }
//     if (b.transform) {
//       var a = [];
//       b.transform.map(item => {
//         a.push({
//           id: item.id,
//           name: item.name,
//           namejp: item.namejp,
//         })
//       })
//       b.transform = a
//     }
//     if (b.changeTransform) {
//       var a = [];
//       b.changeTransform.map(item => {
//         a.push({
//           id: item.id,
//           name: item.name,
//           namejp: item.namejp,
//         })
//       })
//       b.changeTransform = a
//     }
//   })
// })
// console.log(Sakura)

export default Sakura
// window.sakuraData = Sakura;