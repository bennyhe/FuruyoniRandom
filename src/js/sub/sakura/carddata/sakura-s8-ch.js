//头像 https://main-bakafire.ssl-lolipop.jp//furuyoni/na/rule.html
// cardDemo Json
/*
  {
    id: [String],
    
    name: [String],
    namejp: [String],

    text: [String],
    textjp: [String],

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
const sakuraDataCh = [{
  name: 'YURINA 摇波',
  namejp: 'ユリナ',
  desc: '背水～当我方命为3或以下时，一部分卡牌将会强化',
  descjp: '決死～あなたのライフが3以下ならば、いくつかのカードが強化される。',
  list: [{
    name: '刀',
    namejp: '刀',
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
      text: '【常时】背水～我方命为3或以下时，本《攻击》获得+1/+0。',
      textjp: '【常時】決死-あなたのライフが3以下ならば、この《攻撃》は+1/+0となる。'
    },
    {
      id: '01-yurina-o-n-3',
      name: '刀柄突',
      namejp: '柄打ち',
      baseType: 'normal',
      types: ['attack'],
      range: '1-2',
      damage: '2/1',
      text: '【攻击后】背水～我方命为3或以下时，本回合中我方的下一次《攻击》获得+1/+0。',
      textjp: '【攻撃後】決死-あなたのライフが3以下ならば、このターンにあなたが次に行う《攻撃》は+1/+0となる。'
    },
    {
      id: '01-yurina-o-n-4',
      name: '居合',
      namejp: '居合',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '2-4',
      damage: '4/3',
      text: '【常时】当前距为2或以下时，本《攻击》获得-1/-1。',
      textjp: '【常時】現在の間合が2以下ならば、この攻撃は-1/-1となる。'
    },
    {
      id: '01-yurina-o-n-5',
      name: '气魄',
      namejp: '気迫',
      baseType: 'normal',
      types: ['action'],
      text: '我方获得1点集中力\n本回合中我方下次其他女神王牌以外的《攻击》获得（通常牌）无法对应以及延势（近1）。',
      textjp: 'あなたは集中力を1得る。\nこのターンにあなたが次に行う他のメガミによる切札でない《攻撃》は対応不可（通常札）と距離拡大（近1）を得る。'
    },
    {
      id: '01-yurina-o-n-6',
      name: '气合斩',
      namejp: '圧気',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '破绽\n【弃置时】进行『攻击距离1-4，3/-』的攻击。',
      textjp: '隙\n【破棄時】攻撃『適正距離1-4、3/-』を行う。'
    },
    {
      id: '01-yurina-o-n-7',
      name: '气炎万丈',
      namejp: '気炎万丈',
      baseType: 'normal',
      types: ['enhance', 'fullpower'],
      capacity: '4',
      text: '【展开中】背水～我方命为3或以下时，我方其他女神的《攻击》获得+1/+1以及超克。',
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
      text: '终止\n【攻击后】受到对应的《攻击》获得-2/+0。',
      textjp: '終端\n【攻撃後】対応した《攻撃》は-2/+0となる。'
    },
    {
      id: '01-yurina-o-s-3',
      name: '浮舟宿',
      namejp: '浮舟宿',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '虚（5）→我方装 \n----\n【即再起】背水～我方命从4或以上变为3或以下的状态时。',
      textjp: 'ダスト→自オーラ：5 \n----\n【即再起】決死-あなたのライフが3以下になる。'
    },
    {
      id: '01-yurina-o-s-4',
      name: '天音摇波的潜力',
      namejp: '天音揺波の底力',
      baseType: 'special',
      types: ['attack', 'fullpower'],
      range: '1-4',
      damage: '5/5',
      cost: '5',
      text: '【常时】背水～必须在我方命为3或以下时，才可以使用本卡牌。',
      textjp: '【常時】決死-あなたのライフが3以下でないと、このカードは使用できない。'
    }]
  },
  {
    name: '古刀',
    namejp: '古刀',
    isSelect: false,
    pic: 'twiicon_sa_15.jpg',
    picq: 'sd_yurina_a1.png',
    changenormal: [{
      changeIndex: '1',
      id: '01-yurina-a1-n-1',
      name: '乱砍',
      namejp: '乱打',
      baseType: 'normal',
      types: ['attack'],
      range: '2',
      damage: '2/1',
      text: '【常时】背水～我方命为3或以下时，本《攻击》获得+0/+2以及无法对应。',
      textjp: '【常時】決死-あなたのライフが3以下ならば、この《攻撃》は+0/+2となり、対応不可を得る。'
    },
    {
      changeIndex: '6',
      id: '01-yurina-a1-n-6',
      name: '响炮',
      namejp: '癇癪玉',
      baseType: 'normal',
      types: ['enhance', 'reaction'],
      capacity: '1',
      text: '【弃置时】进行『攻击距离0-4，1/-，无法对应，【攻击后】对方畏缩』的攻击。',
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
      text: '终止\n【攻击后】受到对应的《攻击》获得-3/+0。',
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
        text: '【攻击后】如果对方选择命受到伤害，则盖伏对手牌库顶3张卡牌，我方执行1次基本动作，对方尽可能执行1次相同的基本动作。'
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
        text: '【展开中】每回合对方的装首次由于受到《攻击》伤害或者执行基本动作而产生变化时，该《攻击》或者基本动作处理完毕后，我方可以选择下述一项执行。\n·执行基本动作《装附》。随后，我方可以执行基本动作《聚气》。\n·进行一次『攻击距离3-5,2/1』的攻击。'
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
        text: '无法对应\n【常时】X为我方支付本卡牌的费用时的我方气。\n【攻击后】执行合计X次基本动作《装附》或《聚气》。选择我方最多X张使用完毕的王牌，将其重新设为未使用状态。本回合中，我方的手牌上限增加X。'
      }
    ]
  }]
},
{
  name: 'SAINE 细音',
  namejp: 'サイネ',
  desc: '八相～当我方装为1或以下时，一部分卡牌将会强化。',
  descjp: '八相～あなたのオーラが1以下ならば、いくつかのカードが強化される。',
  list: [{
    name: '薙刀',
    namejp: '薙刀',
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
      text: '【攻击后】八相～我方装为1或以下则进行『攻击距离4-5，伤害2/1』的攻击。',
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
      name: '镦击',
      namejp: '石突き',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '2-3',
      damage: '2/1',
      text: '【攻击后】八相～我方装为1或以下则，虚（1）→距',
      textjp: '【攻撃後】八相-あなたのオーラが1以下ならば、ダスト→間合：1'
    },
    {
      id: '02-saine-o-n-4',
      name: '识破',
      namejp: '見切り',
      baseType: 'normal',
      types: ['action'],
      text: '【常时】八相～我方装为1或以下则本卡牌如同《对应》牌一样，可以在对方《攻击》时使用并且优先处理。\n距（1） ⇔ 虚',
      textjp: '【常時】八相-あなたのオーラが1以下ならば、このカードを《対応》を持つかのように相手の《攻撃》に割り込んで使用できる。\n間合⇔ダスト：1'
    },
    {
      id: '02-saine-o-n-5',
      name: '圈域',
      namejp: '圏域',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '【展开中】需要将本付与牌上的樱花结晶移动至虚时，将其移动至距。\n【展开中】近身距离扩大1。',
      textjp: '【展開中】この付与札の上の桜花結晶がダストへと送られるならば、それは代わりに間合へと移動する。\n【展開中】達人の間合は1大きくなる。'
    },
    {
      id: '02-saine-o-n-6',
      name: '冲音晶',
      namejp: '衝音晶',
      baseType: 'normal',
      types: ['enhance', 'reaction'],
      capacity: '1',
      text: '【展开时】受到对应的《攻击》获得-1/+0。\n【弃置时】进行『攻击距离0-10，1/-，无法对应』的攻击，虚（1）→距',
      textjp: '【展開時】対応した《攻撃》は-1/+0となる。\n【破棄時】攻撃『適正距離0-10、1/-、対応不可』を行い、ダスト→間合：1'
    },
    {
      id: '02-saine-o-n-7',
      name: '无音壁',
      namejp: '無音壁',
      baseType: 'normal',
      types: ['enhance', 'fullpower'],
      capacity: '5',
      text: '【展开中】在结算我方受到的伤害时，本卡牌上的樱花结晶视作我方装。',
      textjp: '【展開中】あなたへのダメージを解決するに際し、このカードの上に置かれた桜花結晶をあなたのオーラにあるかのように扱う。'
    }],
    special: [{
      id: '02-saine-o-s-1',
      name: '律动弧戟',
      namejp: '律動弧戟',
      baseType: 'special',
      types: ['action'],
      cost: '6',
      text: '进行『攻击距离3-4，1/1』的攻击。\n进行『攻击距离4-5，1/1』的攻击。\n进行『攻击距离3-5，2/2』的攻击。',
      textjp: '攻撃『適正距離3-4、1/1』を行う。\n攻撃『適正距離4-5、1/1』を行う。\n攻撃『適正距離3-5、2/2』を行う。'
    },
    {
      id: '02-saine-o-s-2',
      name: '响鸣共振',
      namejp: '響鳴共振',
      baseType: 'special',
      types: ['action'],
      cost: '8',
      text: '【常时】本卡牌的费用减少当前对方装中樱花结晶的数量。\n对方装（2）→距',
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
      text: '【攻击后】受到对应的《攻击》获得-1/-1。\n----\n【再起】八相～我方装为1或以下。',
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
      text: '【常时】本卡牌必须在对应王牌时才可以使用。',
      textjp: '【常時】このカードは切札に対する対応でしか使用できない。'
    }]
  },
  {
    name: '琵琶',
    namejp: '琵琶',
    isSelect: false,
    pic: 'twiicon_sa_17.jpg',
    picq: 'sd_saine_a1.png',
    changenormal: [{
      changeIndex: '3',
      id: '02-saine-a1-n-3',
      name: '冰之音',
      namejp: '氷の音',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '对方装（1）→虚\n如果使用本卡牌对应则追加\n对方装（1）→虚',
      textjp: '相オーラ→ダスト：1\nこのカードを対応で使用したならば、さらに\n相オーラ→ダスト：1'
    },
    {
      changeIndex: '6',
      id: '02-saine-a1-n-6',
      name: '伴奏',
      namejp: '伴奏',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '4',
      text: '【展开中】如果我方其他女神的王牌有1张或以上为使用完毕状态，则每回合对方的第一次《攻击》获得-1/+0。\n【展开中】如果我方细音的王牌有1张或以上为使用完毕状态，则每回合我方第一次使用王牌时，该王牌费用减1（费用无法小于0）。',
      textjp: '【展開中】あなたの他のメガミの切札が1枚以上使用済ならば、各ターンの最初の相手の《攻撃》は-1/+0となる。\n【展開中】あなたのサイネの切札が1枚以上使用済ならば、各ターンにあなたが最初に使用する切札の消費は1少なくなる(0未満にはならない)。'
    }],
    changespecial: [{
      changeIndex: '2',
      id: '02-saine-a1-s-2',
      name: '二重奏：弹奏冰瞑',
      namejp: '二重奏：弾奏氷瞑',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '终止\n对方畏缩。我方选择抽取1张卡牌或者获得1点集中力。\n【使用后】我方其他女神的《攻击》获得+0/+1以及锁定。\n----\n【即再起】由于牌库重组之外的原因，我方命受到1点或以上伤害时。',
      textjp: '終端\n相手を畏縮させる。あなたはカードを1枚引くか、集中力を1得る。\n【使用済】あなたの他のメガミによる《攻撃》は+0/+1となり、不可避を得る。\n----\n【即再起】あなたが再構築以外でライフに1以上のダメージを受ける。'
    }]
  },
  {
    name: '拒',
    namejp: '拒',
    isSelect: false,
    pic: 'twiicon_sa_26.jpg',
    picq: 'sd_saine_a2.png',
    changenormal: [{
      changeIndex: '2',
      id: '02-saine-a2-n-2',
      name: '反逆斩',
      namejp: '裏斬り',
      baseType: 'normal',
      types: ['attack'],
      range: '4-5',
      damage: '1/3',
      text: '（通常牌）无法对应',
      textjp: '対応不可（通常札）'
    },
    {
      changeIndex: '7',
      id: '02-saine-a2-n-7',
      name: '遗响壁',
      namejp: '遺響壁',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '【展开中】在结算我方受到的伤害时，本卡牌上的樱花结晶视作我方装。\n【弃置时】八相～我方装为1或以下且当前为我方回合时，进行『攻击距离0-5，0/0，【攻击后】对对方装造成2点伤害，本回合我方下一次《攻击》获得+0/+1』的攻击。',
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
      text: '终止\n【攻击后】受到对应的《攻击》处理完毕后，如果我方由于让该《攻击》选择装受到伤害，且此时我方装为0，则结束当前阶段。',
      textjp: '終端\n【攻撃後】対応した《攻撃》の解決後に、その《攻撃》でオーラへのダメージが選ばれ、かつあなたのオーラが0ならば現在のフェイズを終了する。'
    }]
  }]
},
{
  name: 'HIMIKA 绯弥香',
  namejp: 'ヒミカ',
  desc: '连火～当我方在1回合内使用第3张或之后的卡牌时，一部分卡牌将会强化。',
  descjp: '連火～あなたが1ターン中に３枚以上のカードを使用するならば、いくつかのカードが強化される。',
  list: [{
    name: '铳',
    namejp: '銃',
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
      text: '【常时】连火～本卡牌为本回合中使用的第3张或之后的卡牌，则本《攻击》获得+1/+1。',
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
      text: '【攻击后】我方命（1）→虚',
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
      text: '【常时】本《攻击》造成伤害时，对方必须同时结算两边的伤害。',
      textjp: '【常時】この《攻撃》がダメージを与えるならば、相手は片方を選ぶのではなく両方のダメージを受ける。'
    },
    {
      id: '03-himika-o-n-5',
      name: '后跳',
      namejp: 'バックステップ',
      baseType: 'normal',
      types: ['action'],
      text: '我方抽取1张卡牌。 \n虚（1）→距',
      textjp: 'カードを1枚引く。 \nダスト→間合：1'
    },
    {
      id: '03-himika-o-n-6',
      name: '回燃',
      namejp: 'バックドラフト',
      baseType: 'normal',
      types: ['action'],
      text: '对方畏缩。\n连火～本卡牌为本回合中使用的第3张或之后的卡牌，则本回合中我方下次对装的伤害不为「-」的其他女神《攻击》获得+1/+1。',
      textjp: '相手を畏縮させる。\n連火-このカードがこのターンに使用した3枚目以降のカードならば、このターンにあなたが次に行う他のメガミによるオーラへのダメージが「-」でない《攻撃》を+1/+1する。'
    },
    {
      id: '03-himika-o-n-7',
      name: '迷烟',
      namejp: 'スモーク',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '【展开中】无法通过卡牌上的箭头标记效果将距中的樱花结晶移动至其他区域。',
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
      text: '【常时】本《攻击》造成伤害时，对方必须同时结算两边的伤害。\n【常时】当前距为0则本《攻击》获得无法对应。',
      textjp: '【常時】この《攻撃》がダメージを与えるならば、相手は片方を選ぶのではなく両方のダメージを受ける。\n【常時】現在の間合が0ならば、この《攻撃》は対応不可を得る。'
    },
    {
      id: '03-himika-o-s-3',
      name: '猩红狂想',
      namejp: 'スカーレットイマジン',
      baseType: 'special',
      types: ['action'],
      cost: '3',
      text: '我方抽取2张卡牌。随后，我方盖伏1张手牌。',
      textjp: 'カードを2枚引く。その後、あなたは手札を1枚伏せ札にする。'
    },
    {
      id: '03-himika-o-s-4',
      name: '朱红领域',
      namejp: 'ヴァーミリオンフィールド',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '连火～本卡牌为本回合中使用的第3张或之后的卡牌，则虚（2）→距\n----\n【再起】我方手牌数量为0。',
      textjp: '連火-このカードがこのターンに使用した3枚目以降のカードならば、ダスト→間合：2\n----\n【再起】あなたの手札が0枚である。'
    }]
  },
  {
    name: '炎',
    namejp: '炎',
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
      text: '【常时】连火～本卡牌为本回合中使用的第3张或之后的卡牌，则本《攻击》获得+0/+1。',
      textjp: '【常時】連火-このカードがこのターンに使用した3枚目以降のカードならば、この《攻撃》は+0/+1となる。'
    },
    {
      changeIndex: '5',
      id: '03-himika-a1-n-5',
      name: '杀意',
      namejp: '殺意',
      baseType: 'normal',
      types: ['action'],
      text: '如果我方手牌数量为0则对方装（2）→虚。',
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
      text: '无法对应\n【常时】X等于8减去当前的距。\n【攻击后】我方输掉本局游戏。',
      textjp: '対応不可 \n【常時】Xは8から現在の間合を引いた値に等しい。 \n【攻撃後】あなたは敗北する。'
    }]
  }]
},
{
  name: 'TOKOYO 常世',
  namejp: 'トコヨ',
  desc: '心境～当我方集中力为2时，一部分卡牌将会强化。',
  descjp: '心境～あなたの集中力が2ならば、いくつかのカードが強化される。',
  list: [{
    name: '扇',
    namejp: '扇',
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
      text: '【攻击后】心境～我方集中力为2则将本卡牌放到牌库顶。',
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
      text: '【攻击后】心境～我方集中力为2则打消受到对应的王牌以外的《攻击》。',
      textjp: '【攻撃後】境地-あなたの集中力が2ならば、対応した切札でない《攻撃》を打ち消す。'
    },
    {
      id: '04-tokoyo-o-n-3',
      name: '脱兔',
      namejp: '跳ね兎',
      baseType: 'normal',
      types: ['action'],
      text: '当前距为3或以下时，则虚（2）→距',
      textjp: '現在の間合が3以下ならば、ダスト→間合：2'
    },
    {
      id: '04-tokoyo-o-n-4',
      name: '诗舞',
      namejp: '詩舞',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '我方获得1点集中力，并且选择下述1项执行\n1.我方气（1）→我方装\n2.我方装（1）→距',
      textjp: '集中力を1得て、以下から1つを選ぶ。\n・自フレア→自オーラ：1\n・自オーラ→間合：1'
    },
    {
      id: '04-tokoyo-o-n-5',
      name: '扇迴旋',
      namejp: '要返し',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '从弃牌和/或盖牌中选择最多2张卡牌，将这些卡牌以任何顺序放入牌库底。\n虚（2）→我方装',
      textjp: '捨て札か伏せ札からカードを2枚まで選ぶ。それらのカードを好きな順で山札の底に置く。 \nダスト→自オーラ：2'
    },
    {
      id: '04-tokoyo-o-n-6',
      name: '风舞台',
      namejp: '風舞台',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '【展开时】距（2）→我方装 \n【弃置时】我方装（2）→距',
      textjp: '【展開時】間合→自オーラ：2 \n【破棄時】自オーラ→間合：2'
    },
    {
      id: '04-tokoyo-o-n-7',
      name: '晴舞台',
      namejp: '晴舞台',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '终止\n【展开时】我方的集中力变为2。\n【弃置时】进行『攻击距离3-6、-/1』的攻击。',
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
      text: '【攻击后】打消受到对应的《攻击》。',
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
      text: '【攻击后】重组牌库。（该重组不会使我方受到伤害）',
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
      text: '无法对应\n【攻击后】对方必须舍弃手牌中1张《攻击》以外的卡牌。如果无法执行，则必须公开手牌。\n----\n【再起】心境～我方集中力为2。',
      textjp: '対応不可 \n【攻撃後】相手は手札から《攻撃》でないカード1枚を捨て札にする。それが行えない場合、相手は手札を公開する。 \n----\n【再起】境地-あなたの集中力が2である。'
    },
    {
      id: '04-tokoyo-o-s-4',
      name: '常世之月',
      namejp: '常世ノ月',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '我方集中力变为2，对方集中力变为0，对方畏缩。',
      textjp: 'あなたの集中力は2になり、相手の集中力は0になり、相手を畏縮させる。'
    }]
  },
  {
    name: '笛',
    namejp: '笛',
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
      text: '【常时】如果我方常世的王牌有1张或以上为使用完毕状态，则本《攻击》获得无法对应。\n【攻击后】心境～我方集中力为2，且我方其他女神的王牌有1张或以上为使用完毕状态，则将本卡牌放入牌库顶。',
      textjp: '【常時】あなたのトコヨの切札が1枚以上使用済ならば、この《攻撃》は対応不可を得る。 \n【攻撃後】境地-あなたの集中力が2かつ、あなたの他のメガミの切札が1枚以上使用済ならば、このカードを山札の上に置く。'
    },
    {
      changeIndex: '5',
      id: '04-tokoyo-a1-n-5',
      name: '阳之音',
      namejp: '陽の音',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '【展开中】每当我方使用《对应》牌，则其处理完毕后虚（1）→我方装\n【展开中】本卡牌上放置的樱花结晶在对方回合中不会移动。',
      textjp: '【展開中】あなたが《対応》カードを使用した時、その解決後にダスト→自オーラ：1 \n【展開中】相手のターンにこのカードの上の桜花結晶は移動しない。'
    }],
    changespecial: [{
      changeIndex: '2',
      id: '04-tokoyo-a1-s-2',
      name: '二重奏：吹弹阳明',
      namejp: '二重奏：吹弾陽明',
      baseType: 'special',
      types: ['action'],
      cost: '1',
      text: '【使用后】我方开始阶段开始时，我方选择下述1项执行。\n1.我方从盖牌中选择1张卡牌，将其放入牌库底。\n2.我方从弃牌中选择1张《行动》牌，将其放入牌库底。\n----\n【即再起】由于牌库重组之外的原因，我方命受到1点或以上伤害时。',
      textjp: '【使用済】あなたの開始フェイズの開始時に以下のどちらかを行ってもよい。\n・あなたの伏せ札からカード1枚を選び、山札の底に置く。 \n・あなたの捨て札から《行動》カード1枚を選び、山札の底に置く。 \n----\n【即再起】あなたが再構成以外でライフに1以上のダメージを受ける。'
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
      name: '掠畏',
      namejp: '畏掠め',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '2-3',
      damage: '2/1',
      text: '【常时】对方集中力为0则该《攻击》由我方代为选择对装还是命造成伤害。\n【攻击后】心境～我方集中力为2时则受到对应的王牌以外的《攻击》获得-X/-Y。X为本次《攻击》所造成装的伤害，Y为所造成命的伤害。',
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
      text: '【攻击后】如果对方选择装受到伤害，则\n对方气（1）→我方装\n----\n【再起】对方集中力为1。',
      textjp: '【攻撃後】相手がオ一ラへのダメ一ジを選んだならば、\n相フレア→自オーラ：1\n----\n【再起】相手の集中力が1である。'
    }, {
      changeIndex: '3',
      id: '04-tokoyo-a2-s-3',
      name: '恣妄八重樱',
      namejp: '徒寄ノ八重桜',
      baseType: 'special',
      types: ['action'],
      cost: '4',
      text: '我方执行5次基本动作《装附》。\n【使用后】通过我方卡牌的箭头效果导致向我方装移动樱花结晶时，装的上限视为8。\n【使用后】我方回合开始阶段开始时，我方装为6或以上，则进行『攻击距离0-8、-/1』的攻击。',
      textjp: 'あなたは基本動作《纏い》を5回行う。\n【使用済】あなたのカ一ドの矢印効果があなたのオ一ラへと桜花結晶を動かすならば、その間だけオ一うの上限を8として扱う。\n【使用済】あなたの開始フェイズの開始時にあなたのオ一ラが6以上ならば、攻撃『適正距離0-8、-/1』を行う。'
    }]
  }]
},
{
  name: 'OBORO 胧',
  namejp: 'オボロ',
  desc: '设置～带有设置特性的卡牌在盖牌中时，可以在牌库重组之前选择并使用其中1张。',
  descjp: '設置～設置を持つカードが伏せ札にある際に山札の再構築を行う場合、再構築の直前にその中の1枚を伏せ札から使用してもよい。',
  list: [{
    name: '忍',
    namejp: '忍',
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
      text: '设置 无法对应 \n【攻击后】如果从盖牌中使用本卡牌，查看对方手牌，选择并盖伏其中1张手牌。',
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
      text: '【常时】对方在本回合中如果装已经受到过伤害，则本《攻击》获得+1/+1。',
      textjp: '【常時】相手がこのターン中にオーラへのダメージを受けているならば、この《攻撃》は+1/+1となる。'
    },
    {
      id: '05-oboro-o-n-4',
      name: '忍步',
      namejp: '忍歩',
      baseType: 'normal',
      types: ['action'],
      text: '设置\n虚 (1)→ 距\n如果从盖牌中使用本卡牌，可以再从盖牌中选择并使用1张带有设置特性的卡牌。',
      textjp: '設置 \nダスト→間合：1 \nこのカードを伏せ札から使用したならば、伏せ札から設置を持つカードを1枚使用してもよい。'
    },
    {
      id: '05-oboro-o-n-5',
      name: '诱导',
      namejp: '誘導',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '设置 \n我方选择下述1项执行。\n1.距（1）→对方装\n2.对方装（1）→对方气',
      textjp: '設置\n以下から１つを選ぶ。\n・間合→相オーラ：1\n・相オーラ→相フレア：1'
    },
    {
      id: '05-oboro-o-n-6',
      name: '分身术',
      namejp: '分身の術',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '从盖牌中选择并使用1张《全力》牌以外的卡牌。随后，如果所使用的卡牌变为弃牌，则从弃牌中再使用1次。如果所选择的卡牌是《攻击》牌则其《攻击》获得无法对应（2次使用均获得无法对应）。',
      textjp: '伏せ札から《全力》でないカードを1枚選び、そのカードを使用する。その後、そのカードが捨て札にあるならば捨て札からもう1回使用する。《攻撃》カードが使用されたならばそれらの《攻撃》は対応不可を得る（2回ともに対応不可を得る）。'
    },
    {
      id: '05-oboro-o-n-7',
      name: '生物活性',
      namejp: '生体活性',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '4',
      text: '破绽 设置 \n【弃置时】选择1张我方已经使用完毕的王牌，将其重新设为未使用状态。',
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
      text: '【攻击后】进行X次『攻击距离3-4，2/2』的攻击。X等于当前我方场上盖牌的数量。',
      textjp: '【攻撃後】攻撃『適正距離3-4、2/2』をX回行う。Xはあなたの伏せ札の枚数に等しい。'
    },
    {
      id: '05-oboro-o-s-2',
      name: '鸢影',
      namejp: '鳶影',
      baseType: 'special',
      types: ['action', 'reaction'],
      cost: '4',
      text: '我方可以从盖牌中选择并使用1张《全力》牌以外的卡牌。此时，如果本卡牌正在对应《攻击》，则视为所选的卡牌也在对应该《攻击》。',
      textjp: '伏せ札から《全力》でないカードを1枚選び、そのカードを使用してもよい。この際、このカードが対応している《攻撃》があるならば、使用されたカードはそれに対応しているものと扱う。'
    },
    {
      id: '05-oboro-o-s-3',
      name: '虚鱼',
      namejp: '虚魚',
      baseType: 'special',
      types: ['action'],
      cost: '4',
      text: '【使用后】每当我方执行牌库重组时，都可以按照任意顺序使用任意数量带有设置特性的卡牌。',
      textjp: '【使用済】あなたは1回の再構成に対して、設置を持つカードを任意の枚数、任意の順で使用できる。'
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
      text: '【攻击后】虚（1）→我方气 \n----\n【再起】我方气为0。',
      textjp: '【攻撃後】ダスト→自フレア：1 \n----\n【再起】あなたのフレアが0である。'
    }]
  },
  {
    name: '战略',
    namejp: '戦略',
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
      text: '【常时】在我方结束阶段开始时，如果双方的盖牌合计为5张或以上，则我方可以将本卡牌从弃牌放入手牌。',
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
      text: '（通常牌）无法对应\n【常时】本《攻击》获得-X/-X，X为对方盖牌数量。',
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
      text: '游戏外（1）→我方装\n游戏外（1）→我方气\n移除本卡牌，以未使用状态从追加牌区域获得「最后的结晶」。',
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
      text: '【常时】本卡牌仅可由于下述效果发动。我方首次输掉本局游戏时，可以选择将我方所有命移至虚，并且支付费用后使用本卡牌。\n盖伏1张手牌，虚（1）→我方命',
      textjp: '【常時】このカードはこの効果でのみ使用できる。あなたが初めて敗北するならば、代わりにあなたのライフ全てをダストに送り、このカードを使用してもよい(消費は支払う)。 \n手札を一枚伏せ札にし、ダスト→自ライフ：1'
    }]
  }]
},
{
  name: 'YUKIHI 雪灯',
  namejp: 'ユキヒ',
  desc: '变貌～拥有开伞与合伞两种状态。不同状态下一部分卡牌效果会变化。游戏开始时为合伞状态。我方可以在我方结束阶段时进行1次伞面开合，改变当前的伞面状态（通过伞面牌来表示）。',
  descjp: '変貌～傘が閉じている状態と開いている状態があり、いくつかのカードは状態に応じて効果が変わる。ゲーム開始時は閉じた状態である。あなたの終了フェイズに1回、傘の開閉を行い、状態を変えられる（傘カードで表す）。',
  list: [{
    name: '伞/簪',
    namejp: '傘/簪',
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
      name: '明敕/暗袭',
      namejp: 'しこみび / ねこだまし',
      baseType: 'normal',
      types: ['attack'],
      range: '5-6',
      rangeOpened: '0-2',
      damage: '1/1',
      damageOpened: '1/1',
      text: '合伞：【攻击后】本卡牌返回至手牌，并进行伞面开合处理。 \n开伞：（无）',
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
      text: '合伞：【攻击后】距（1）⇔ 虚 \n开伞：【攻击后】距（2）→虚',
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
      text: '（本卡牌使用时没有任何效果）\n【常时】当我方进行伞面开合处理时，可以从手牌中公开本卡牌。如果这么做则虚（1）→我方装',
      textjp: '(このカードは使用しても効果はない) \n【常時】あなたが傘の開閉を行った時、このカードを手札から公開してもよい。そうした場合、 \nダスト→自オーラ：1'
    },
    {
      id: '06-yukihi-o-n-6',
      name: '闪回/潜进',
      namejp: 'ひきあし / もぐりこみ',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '合伞：虚（1）→距 \n开伞：距（1）→虚',
      textjp: '閉；ダスト→間合：1\n開；間合→ダスト：1'
    },
    {
      id: '06-yukihi-o-n-7',
      name: '缘相结',
      namejp: 'えんむすび',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '【展开时】距（1）→虚 \n【弃置时】虚（1）→距 \n【常时】如果我方伞面状态为开伞，则本卡牌中的箭头标记改为反向。',
      textjp: '【展開時】間合→ダスト：1 \n【破棄時】ダスト→間合：1 \n【常時】あなたの傘が開いているならば、このカードの矢印(→)は逆になる。'
    }],
    special: [{
      id: '06-yukihi-o-s-1',
      name: '纷扬如雪',
      namejp: 'はらりゆき',
      baseType: 'special',
      types: ['attack'],
      range: '3-6',
      rangeOpened: '0-2',
      damage: '3/1',
      damageOpened: '0/0',
      cost: '2',
      text: '闭伞：【攻击后】我方获得1点集中力。\n----\n【即再起】我方进行伞面开合处理时。',
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
      text: '【展开中】我方雪灯的《攻击》同时带有开伞状态与合伞状态的攻击距离。',
      textjp: '【展開中】あなたのユキヒの《攻撃》は傘を開いた状態と傘を閉じた状態両方の適正距離を持つ。'
    },
    {
      id: '06-yukihi-o-s-4',
      name: '復反其身',
      namejp: 'くるりみ',
      baseType: 'special',
      types: ['action', 'reaction'],
      cost: '1',
      text: '进行伞面开合处理。\n虚（1）→我方装',
      textjp: '傘の開閉を行う。 \nダスト→自オーラ：1'
    }]
  },
  {
    name: '社交',
    namejp: '社交',
    isSelect: false,
    pic: 'null.png',
    picq: 'sd_yukihi_a1.png',
    changenormal: [{
      changeIndex: '2',
      id: '06-yukihi-a1-n-2',
      name: '声援/威吓',
      namejp: 'ちからぞえ / おどしつけ',
      baseType: 'normal',
      types: ['attack'],
      range: '3-5',
      rangeOpened: '1-2',
      damage: '2/1',
      damageOpened: '1/2',
      text: '合伞：【常时】如果我方付与牌上合计拥有4片或以上的樱花结晶，则本《攻击》获得+0/+1。\n开伞：【常时】如果我方付与牌上合计拥有4片或以上的樱花结晶，则本《攻击》获得+1/+0。',
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
      text: '合伞：【攻击后】本回合中我方下一次其他女神的《攻击》获得延势（远1）以及延势（近1）。将本卡牌放入牌库底。\n开伞：【攻击后】如果本回合中我方尚未使用其他卡牌，则使用1张我方弃牌中其他女神的《全力》以外的卡牌。',
      textjp: '閉；【攻撃後】このターンにあなたが次に行う他のメガミによる《攻撃》は距離拡大（遠1）と距離拡大（近1）を得る。このカードを山札の底に置く。\n開；【攻撃後】このターン中にあなたが他のカードを使用していないならば、あなたの捨て札にある他のメガミの《全力》でないカード1枚を使用する。'
    }],
    changespecial: [{
      changeIndex: '2',
      id: '06-yukihi-a1-s-2',
      name: '翩然如衬',
      namejp: 'ひらりおり',
      baseType: 'special',
      types: ['enhance'],
      capacity: '1',
      cost: '4',
      text: '合伞：【展开中】我方每回合中初次使用其他女神的通常牌时，处理完毕后我方可以获得1点集中力，并且将3片樱花结晶从虚移至本卡牌上。\n开伞：【展开中】我方开始阶段开始时，进行『攻击距离0-5，2/2』的攻击。',
      textjp: '閉；【展開中】あなたが他のメガミの通常札をあなたの各ターンに初めて使用した時、その解決後にあなたは集中力を1得て、ダストからこのカードの上に桜花結晶を3つ置いてもよい。\n開；【展開中】あなたの開始フェイズの開始時に攻撃『適正距離0-5、2/2』を行う。'
    }]
  }]
},
{
  name: 'SHINRA 森罗',
  namejp: 'シンラ',
  desc: '谋略～私下筹划2种谋略中的一种，在处理谋略时期时翻开并处理其对应的状态，随后私下筹划下一个谋略。（游戏开始时的谋略必定为「神算」）',
  descjp: '計略～2種類の計略どちらかを秘密裏に準備しておく。計略の実行時には準備されていた効果を解決し、次の計略を再び秘密裏に準備する。（最初の計略は必ず「神算」である）',
  list: [{
    name: '书',
    namejp: '書',
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
      text: '【常时】如果对方牌库中包含2张或以上的卡牌，则本《攻击》不造成伤害，改为盖伏对方牌库顶2张卡牌。',
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
      text: '【攻击后】打消受到对应的王牌以外且对装造成3或以上伤害《攻击》的伤害。\n【攻击后】对方抽取1张卡牌。',
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
      text: '【攻击后】处理当前谋略，并且筹划下一个谋略。 \n神算：盖伏对方牌库顶3张牌。 \n鬼谋：我方可以选择并使用对方1张弃牌。',
      textjp: '【攻撃後】計略を実行し、次の計略を準備する。 \n[神算] 相手の山札の上から3枚を伏せ札にする。 \n[鬼謀] 相手の捨て札にあるカードを1枚選び、それを使用してもよい。'
    },
    {
      id: '07-shinra-o-n-4',
      name: '引用',
      namejp: '引用',
      baseType: 'normal',
      types: ['action'],
      text: '我方查看对方手牌，并且可以从中选择1张《攻击》牌。如果这么做，则使用或盖伏所选择的卡牌。如果所选择的卡牌为《全力》牌则结束当前阶段。',
      textjp: '相手の手札を見て、《攻撃》カードを1枚選んでもよい。そうした場合、そのカードを使用するか伏せ札にする。その後、そのカードが《全力》を持つならば現在のフェイズを終了する。'
    },
    {
      id: '07-shinra-o-n-5',
      name: '煽动',
      namejp: '煽動',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '处理当前谋略，并且筹划下一个谋略。\n神算：虚（1）→距\n鬼谋：距（1）→对方装',
      textjp: '計略を実行し、次の計略を準備する。 \n[神算] ダスト→間合：1 \n[鬼謀] 間合→相オーラ：1'
    },
    {
      id: '07-shinra-o-n-6',
      name: '壮语',
      namejp: '壮語',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '【弃置时】处理当前谋略，并且筹划下一个谋略。\n神算：我方获得1点集中力，并将本卡牌放到牌库顶。\n鬼谋：如果对方的手牌为1张或以下，则对方畏缩并且对方抽取3张卡牌，随后对方从手牌中舍弃2张卡牌。',
      textjp: '【破棄時】計略を実行し、次の計略を準備する。 \n[神算] あなたは集中力を1得て、このカードを山札の一番上に置く。 \n[鬼謀] 相手の手札が1枚以下ならば、相手を畏縮させ、相手はカードを3枚引き、相手は手札を2枚捨て札にする。'
    },
    {
      id: '07-shinra-o-n-7',
      name: '论破',
      namejp: '論破',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '4',
      text: '【展开时】从对方的弃牌中选择1张卡牌进行封印，将其放置于本卡牌下方。 \n【弃置时】本卡牌下方封印的卡牌返还至对方的弃牌。',
      textjp: '【展開時】相手の捨て札にあるカード1枚を選び、このカードの下に封印する。 \n【破棄時】このカードに封印されたカードを相手の捨て札に戻す。'
    }],
    special: [{
      id: '07-shinra-o-s-1',
      name: '完全论破',
      namejp: '完全論破',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '从对方的弃牌中选择1张卡牌进行封印，将其放置于本卡牌下方（本局游戏中不再返还）。',
      textjp: '相手の捨て札にあるカード1枚を選び、このカードの下に封印する。 \n(ゲーム中に戻ることはない)'
    },
    {
      id: '07-shinra-o-s-2',
      name: '诸式理解',
      namejp: '皆式理解',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '处理当前谋略，并且筹划下一个谋略。\n神算：从我方的弃牌或者使用完毕的王牌中，选择并免费使用1张《付与》牌。如果所选择的卡牌为《全力》牌则结束当前阶段。\n鬼谋：选择1张对方场上王牌以外的付与牌。将所选付与牌上所有的樱花结晶移至虚。',
      textjp: '計略を実行し、次の計略を準備する。 \n[神算] あなたの捨て札または使用済の切札から、消費を支払わずに《付与》カード1枚を使用する。そのカードが《全力》ならば現在のフェイズを終了する。 \n[鬼謀] 切札でない相手の付与札を1枚選ぶ。その上の桜花結晶全てをダストに送る。'
    },
    {
      id: '07-shinra-o-s-3',
      name: '天地反驳',
      namejp: '天地反駁',
      baseType: 'special',
      types: ['enhance', 'fullpower'],
      capacity: '5',
      cost: '2',
      text: '【展开中】处理我方的《攻击》时，替换对装造成的伤害与对命造成的伤害数值。（结算时，首先结算伤害替换，随后结算伤害增减）',
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
      text: '【展开时】虚（2）→我方命\n【展开中】我方其他付与牌弃置时，对方命受到1点伤害。\n【弃置时】我方输掉本局游戏。',
      textjp: '【展開時】ダスト→自ライフ：2 \n【展開中】あなたの他の付与札が破棄された時、相手のライフに1ダメージを与える。 \n【破棄時】あなたは敗北する。'
    }]
  },
  {
    name: '经',
    namejp: '経',
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
      text: '使用本卡牌对应时，处理当前谋略，并且筹划下一个谋略。\n神算：如果当前对方牌库有3张或以上卡牌，则对对方命造成1点伤害。\n鬼谋：如果当前对方牌库有3张或以下卡牌，则对对方装造成2点伤害。',
      textjp: 'このカードを対応で使用したならば、計略を実行し、次の計略を準備する。 \n[神算] 相手の山札が3枚以上ならば、相手のライフに1ダメージを与える。 \n[鬼謀] 相手の山札が3枚以下ならば、相手のオーラに2ダメージを与える。'
    },
    {
      changeIndex: '7',
      id: '07-shinra-a1-n-7',
      name: '使徒',
      namejp: '使徒',
      baseType: 'normal',
      types: ['enhance', 'fullpower'],
      capacity: '2',
      text: '【展开时/弃置时】处理当前谋略，并且筹划下一个谋略。\n神算：进行『攻击距离1,3,5，伤害2/2，锁定』的攻击。\n鬼谋：进行『攻击距离0,2,4，伤害2/2，锁定』的攻击。',
      textjp: '【展開時/破棄時】計略を実行し、次の計略を準備する。\n[神算] 攻撃『適正距離1,3,5、2/2、不可避』を行う。\n[鬼謀] 攻撃『適正距離0,2,4、2/2、不可避』を行う。'
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
      text: '无法对应\n【攻击后】我方可以舍弃任意数量的手牌以及盖牌。随后，按照任意顺序处理弃牌中任意数量的谋略。所有谋略处理完毕后，筹划下一个谋略。\n（如果当前谋略为神算则处理时全部按照神算处理）',
      textjp: '対応不可\n【攻撃後】あなたは手札と伏せ札を好きな枚数だけ捨て札にする。その後、捨て札にあるカードから任意の数の計略を、任意の順で実行する。それら全てを解决し終えたら、次の計略を準備する。（神算を選んでいたら全て神算で実行する）'
    }]
  }]
},
{
  name: 'HAGANE 破钟',
  namejp: 'ハガネ',
  desc: '离心～只有同时满足下述2个条件之后，才可以使用带有离心特性的卡牌。1. 当前距较回合开始时的距远离了2或以上。2. 我方当前回合中尚未进行过《攻击》。',
  descjp: '遠心～以下の2つを共に満たしている場合のみ、遠心を持つカードは使用できる。<br>1.現在の間合がターン開始時の間合から2以上離れている。<br>2.このターン中にあなたが《攻撃》を行ってない。',
  list: [{
    name: '锤',
    namejp: '鎚',
    isSelect: false,
    pic: 'twiicon_sa_08.jpg',
    picq: 'sd_hagane.png',
    normal: [{
      id: '08-hagane-o-n-1',
      name: '离心击',
      namejp: '遠心撃',
      baseType: 'normal',
      types: ['attack'],
      range: '2-6',
      damage: '5/3',
      text: '离心\n【攻击后】如果当前为我方回合，则盖伏我方和对方所有的手牌，我方集中力变为0，并且结束当前阶段。',
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
      text: '【攻击后】如果当前距较回合开始时距产生了2或以上的变化，则随机选择并舍弃对方1张手牌。',
      textjp: '【攻撃後】現在の間合がターン開始時の間合から2以上変化しているならば、相手の手札を1枚無作為に選び、それを捨て札にする。'
    },
    {
      id: '08-hagane-o-n-3',
      name: '地裂击',
      namejp: '大地砕き',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '0-3',
      damage: '2/-',
      text: '无法对应 \n【攻击后】对方集中力变为0，对方畏缩。',
      textjp: '対応不可 \n【攻撃後】相手の集中力は0になり、相手を畏縮させる。'
    },
    {
      id: '08-hagane-o-n-4',
      name: '超反弹',
      namejp: '超反動',
      baseType: 'normal',
      types: ['action'],
      text: '根据当前的距进行下述处理。\n5或以上…距（1）→我方气\n4或以下…对方气（1）→距',
      textjp: '現在の間合が5以上ならば、間合→自フレア：1\n現在の間合が4以下ならば、相フレア→間合：1'
    },
    {
      id: '08-hagane-o-n-5',
      name: '圆舞链',
      namejp: '円舞錬',
      baseType: 'normal',
      types: ['action'],
      text: '离心\n如果对方气为3或以上则，对方气（2）→我方装',
      textjp: '遠心 \n相手のフレアが3以上ならば、相フレア→自オーラ：2'
    },
    {
      id: '08-hagane-o-n-6',
      name: '大鸣钟',
      namejp: '鐘鳴らし',
      baseType: 'normal',
      types: ['action'],
      text: '离心\n我方选择下述1项执行。本回合中我方的下一次《攻击》获得所选择的效果。\n1.+2/+1。\n2.无法对应以及延势（远1）。',
      textjp: '遠心\n以下から1つを選ぶ。このターンにあなたが次に行う《攻撃》にそれを与える。\n・+2/+1\n・対応不可と距離拡大（遠1）'
    },
    {
      id: '08-hagane-o-n-7',
      name: '引力场',
      namejp: '引力場',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '4',
      text: '全开：【常时】通过本卡牌的箭头效果移动樱花结晶时，额外移动1片结晶。\n【展开时】距（1）→我方装\n【展开中】近身距离缩小1。',
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
      text: '超克\n【常时】X为当前距较回合开始时距之间的变化值。Y为X的一半（向上取整）。',
      textjp: '超克 \n【常時】Xは現在の間合がターン開始時の間合からどれだけ変化しているかに等しい。YはXの半分(切り上げ)に等しい。'
    },
    {
      id: '08-hagane-o-s-2',
      name: '大破钟·断限',
      namejp: '大破鐘メガロベル',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '如果我方其他所有王牌已经使用完毕则，虚（2）→我方命',
      textjp: 'あなたの他の切札が全て使用済ならば、ダスト→自ライフ：2'
    },
    {
      id: '08-hagane-o-s-3',
      name: '大重力·无限',
      namejp: '大重力アトラクト',
      baseType: 'special',
      types: ['action'],
      cost: '5',
      text: '距（3）→我方气\n----\n【再起】本回合中，我方已使用带有离心特性的卡牌，并且未使用本卡牌。',
      textjp: '間合→自フレア：3 \n----\n【再起】このターンにあなたが遠心を持つカードを使用しており、このカードを使用していない。'
    },
    {
      id: '08-hagane-o-s-4',
      name: '大山脉·转限',
      namejp: '大山脈リスペクト',
      baseType: 'special',
      types: ['action'],
      cost: '4',
      text: '离心\n从我方的弃牌中选择2张《全力》牌以外的不同卡牌，并按照任意顺序使用。',
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
      text: '当前距为3或以上则\n距（1）→我方气\n距（1）→对方气',
      textjp: '現在の間合が3以上ならば、\n間合→自フレア：1\n間合→相フレア：1\n'
    }, {
      changeIndex: '2',
      id: '08-hagane-a1-n-2',
      name: '旋回起',
      namejp: '旋回起',
      baseType: 'normal',
      types: ['action'],
      text: '如果当前距较回合开始时的距产生了2点或以上的距离变化，则我方抽取一张卡牌并且获得1点集中力。',
      textjp: '現在の間合がターン開始時の間合から2以上変化しているならば、カードを1枚引き、あなたは集中力を1得る。'
    }],
    changespecial: [{
      changeIndex: '1',
      id: '08-hagane-a1-s-1',
      name: '大炼成·禁限',
      namejp: '大錬成マテリアル',
      baseType: 'special',
      types: ['action'],
      cost: '1',
      text: '终止\n如果本卡牌所有权属于我方，处理下述效果。\n铁砧区域已有卡牌，则从虚移动1片樱花结晶至铁砧区域的卡牌上。铁砧区域没有卡牌，则我方可以从手牌中选择1张其他女神的《攻击》牌放入铁砧区域。\n我方从追加牌区域拿取1张「炼成攻击」放入牌库底。\n----\n【再起】本回合中我方使用过「炼成攻击」。',
      textjp: '終端\nこのカードがあなたのカードならば、以下の効果を解決する。\n金床にカードがあるならばダストから金床に桜花結晶を1つ置く。金床にカードがないならば、手札から他のメガミの《攻撃》カ一ドを1枚選び金床に置いてもよい。\nあなたの追加札から「錬成攻撃」を山札の底に1枚置く。\n----\n【再起】このターンにあなたが「錬成攻撃」を使用している。'
    }],
    changeExtra: [{
      id: '08-hagane-a1-s-1-ex1',
      name: '炼成攻击',
      namejp: '錬成攻撃',
      baseType: 'normal',
      extraFrom: '08-hagane-a1-s-1',
      types: ['variable'],
      text: '【常时】本卡牌除卡牌名称，使用者以及本效果之外，视作铁砧区域卡牌的複制品。位于手牌中的本卡牌无法由于对方的效果被指定。不位于手牌或盖牌中时无法通过牌库重组之外的效果返回牌库或者手牌。本卡牌无法被封印。根据铁砧区域中卡牌上樱花结晶的数量，获得下述额外效果。\n0或以上…获得+1/+0和延势（远1）\n1或以上…获得+1/+1和延势（远1）\n2或以上…获得+1/+1、延势（远1），并且无法被打消。',
      textjp: '【常時】このカードは名前、使用者とこの効果を除き金床にあるカードの複製になる。このカードが手札にあるなら相手の効果で選べず、手札か伏せ札にないなら再構成以外で山札に戻らない。このカードは封印されない。金床にある桜花結晶の個数に応じて以下の効果を得る。\n0以上…+1/+0となり、距離拡大（遠1）を得る。\n1以上…+1/+1となり、距離拡大（遠1）を得る。\n2以上…+1/+1となり、距離拡大（遠1）を得る、打ち消されない。'
    }]
  }]
},
{
  name: 'CHIKAGE 千影',
  namejp: 'チカゲ',
  desc: '毒袋～毒袋中包含有5张毒素牌（「麻痹毒」、「幻觉毒」、「迟缓毒」以及2张「灭灯毒」）。',
  descjp: '毒袋～毒袋に5枚のカード（「麻痺毒」「幻覚毒」「遅緩毒」「滅灯毒」2枚）を持つ。',
  list: [{
    name: '毒',
    namejp: '毒',
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
      text: '【攻击后】从毒袋选择「麻痹毒」「幻觉毒」「迟缓毒」中任意1张，将其放入对方的牌库顶。',
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
      text: '【攻击后】我方装（1）→距，虚（1）→距\n【攻击后】本回合中，对方无法执行基本动作《前进》。',
      textjp: '【攻撃後】自オーラ→間合：1、ダスト→間合：1\n【攻撃後】このターン中、相手は基本動作《前進》を行えない。'
    },
    {
      id: '09-chikage-o-n-4',
      name: '斩首',
      namejp: '首切り',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '0-3',
      damage: '2/3',
      text: '【攻击后】如果对方有2张或以上手牌，则对方选择并舍弃1张手牌。',
      textjp: '【攻撃後】相手の手札が2枚以上あるならば、相手は手札を1枚捨て札にする。'
    },
    {
      id: '09-chikage-o-n-5',
      name: '毒雾',
      namejp: '毒霧',
      baseType: 'normal',
      types: ['action'],
      text: '从毒袋选择「麻痹毒」「幻觉毒」「迟缓毒」中任意1张，将其加入对方手牌。',
      textjp: '毒袋から「麻痺毒」「幻覚毒」「弛緩毒」のいずれか1枚を選び、そのカードを相手の手札に加える。'
    },
    {
      id: '09-chikage-o-n-6',
      name: '蹑足',
      namejp: '抜き足',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '4',
      text: '破绽\n【展开中】当前距离减小2。（距离无法小于0）',
      textjp: '隙 \n【展開中】現在の間合は2減少する。 \n(間合は0未満にならない)'
    },
    {
      id: '09-chikage-o-n-7',
      name: '泥泞',
      namejp: '泥濘',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '【展开中】对方无法执行基本动作《后退》和《脱离》。',
      textjp: '【展開中】相手は基本動作《後退》と《離脱》を行えない。'
    }],
    special: [{
      id: '09-chikage-o-s-1',
      name: '魂毒渐灭灯',
      namejp: '滅灯の魂毒',
      baseType: 'special',
      types: ['action'],
      cost: '3',
      text: '从毒袋中选择1张「灭灯毒」，将其放入对方的牌库顶。',
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
      text: '【展开中】打消对方对装的伤害或者对命的伤害中有一项为「-」的《攻击》。',
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
      text: '【再起】对方的手牌为2张或以上。',
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
      text: '【展开中】我方命受到1点或以上伤害时，将本卡牌上所有的樱花结晶移至虚，并将本卡牌重新设为未使用状态。（不触发弃置时效果）\n【弃置时】如果我方其他所有王牌已经使用完毕则我方赢得本局游戏。',
      textjp: '【展開中】あなたが1以上のライフへのダメージを受けた時、このカードの上の桜花結晶は全てダストに送られ、このカードは未使用に戻る。 \n(破棄時効果は失敗する) \n【破棄時】あなたの他の切札が全て使用済ならば、あなたは勝利する。'
    }],
    poison: [{
      id: '09-chikage-o-p-1',
      name: '麻痹毒',
      namejp: '麻痺毒',
      baseType: 'normal',
      types: ['action'],
      text: '【常时】如果本回合我方已经执行过基本动作则无法使用本卡牌。\n将本卡牌返还至对方的毒袋。随后结束当前阶段。',
      textjp: '毒（このカードは伏せ札にできない） \n【常時】このターン中にあなたが基本動作を行ったならば、このカードは使用できない。 \nこのカードを相手の毒袋に戻す。その後、このフェイズを終了する。'
    },
    {
      id: '09-chikage-o-p-2',
      name: '幻觉毒',
      namejp: '幻覚毒',
      baseType: 'normal',
      types: ['action'],
      text: '将本卡牌返还至对方的毒袋。我方气（2）→虚',
      textjp: '毒（このカードは伏せ札にできない） \nこのカードを相手の毒袋に戻す。 \n自フレア→ダスト：2'
    },
    {
      id: '09-chikage-o-p-3',
      name: '迟缓毒',
      namejp: '弛緩毒',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '【展开中】我方无法使用《攻击》牌。 \n【弃置时】将本卡牌返还至对方的毒袋。',
      textjp: '毒（このカードは伏せ札にできない） \n【展開中】あなたは《攻撃》カードを使用できない。 \n【破棄時】このカードを相手の毒袋に戻す。'
    },
    {
      id: '09-chikage-o-p-4',
      name: '灭灯毒',
      namejp: '滅灯毒',
      baseType: 'normal',
      types: ['action'],
      text: '我方装（3）→虚',
      textjp: '毒（このカードは伏せ札にできない） \n自オーラ→ダスト：3'
    },
    {
      id: '09-chikage-o-p-4',
      name: '灭灯毒',
      namejp: '滅灯毒',
      baseType: 'normal',
      types: ['action'],
      text: '我方装（3）→虚',
      textjp: '毒（このカードは伏せ札にできない） \n自オーラ→ダスト：3'
    }]
  },
  {
    name: '绊',
    namejp: '絆',
    isSelect: false,
    pic: 'twiicon_sa_20.jpg',
    picq: 'sd_chikage_a1.png',
    changenormal: [{
      changeIndex: '5',
      id: '09-chikage-a1-n-5',
      name: '机关纸伞',
      namejp: '仕掛け番傘',
      baseType: 'normal',
      types: ['attack'],
      range: '4',
      damage: '2/1',
      text: '锁定\n【常时】如果对方有2张或以上手牌，则本《攻击》获得延势（近2）以及延势（远2）。（即没有其他影响则攻击变为2-6）',
      textjp: '不可避 \n【常時】相手の手札が2枚以上あるならば、この《攻撃》は距離拡大(近2)と距離拡大(遠2)を得る。 \n(他に何もなければ、適正距離は2-6になる)'
    },
    {
      changeIndex: '6',
      id: '09-chikage-a1-n-6',
      name: '奋迅',
      namejp: '奮迅',
      baseType: 'normal',
      types: ['action'],
      text: '如果对方有2张或以上手牌，则我方获得1点集中力。\n距（1）⇔虚',
      textjp: '相手の手札が2枚以上あるならば、あなたは集中力を1得る。 \n間合⇔ダスト：1'
    }],
    changespecial: [{
      changeIndex: '4',
      id: '09-chikage-a1-s-4',
      name: '绊毒余残滓',
      namejp: '残滓の絆毒',
      baseType: 'special',
      types: ['attack'],
      range: '0-1',
      damage: '4/X',
      cost: '4',
      text: '（通常牌）无法对应\n【常时】X为当前对方手牌数量乘以2的数值。',
      textjp: '対応不可（通常札）\n【常時】Xは相手の手札にあるカードの枚数の2倍に等しい。'
    }]
  }]
},
{
  name: 'KURURU 枢',
  namejp: 'クルル',
  desc: '组装～如果没有完成齿轮栏中所需的颜色，就无法处理齿轮栏中描述的效果。正确组装齿轮需要我方正面朝上的卡牌类型的颜色，与齿轮栏中的颜色对应。<br><i class="i-bean i-bean--red"></i>=攻击&nbsp;<i class="i-bean i-bean--blue"></i>=行动&nbsp;<i class="i-bean i-bean--green"></i>=付与&nbsp;<i class="i-bean i-bean--purple"></i>=对应&nbsp;<i class="i-bean i-bean--yellow"></i>=全力',
  descjp: '機巧～機巧が完成していないと歯車枠の効果は解決されない。機巧の完成には歯車枠に示された種類のあなたのカードが表向きである必要がある。<br><i class="i-bean i-bean--red"></i>＝攻撃&nbsp;<i class="i-bean i-bean--blue"></i>＝行動&nbsp;<i class="i-bean i-bean--green"></i>＝付与&nbsp;<i class="i-bean i-bean--purple"></i>＝対応&nbsp;<i class="i-bean i-bean--yellow"></i>＝全力',
  list: [{
    name: '络缲',
    namejp: '絡繰',
    isSelect: false,
    pic: 'twiicon_sa_10.jpg',
    picq: 'sd_kururu.png',
    normal: [{
      id: '10-kururu-o-n-1',
      name: '电气疗法',
      namejp: 'えれきてる',
      baseType: 'normal',
      types: ['action'],
      text: '组装：蓝蓝蓝紫紫～\n对对方命造成1点伤害。',
      textjp: '<行行行対対> 相手のライフに1ダメージを与える。 ',
      textkururu: [{
        if: '<i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--purple"></i><i class="i-bean i-bean--purple"></i>',
        ctn: '对对方命造成1点伤害。'
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
      text: '组装：蓝蓝绿～\n我方可以选择并使用手牌中的1张《全力》牌（不会导致阶段结束）。',
      textjp: '<行行付> あなたの手札から《全力》カードを1枚選び、そのカードを使用してもよい。 \n(フェイズは終了しない) ',
      textkururu: [{
        if: '<i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--green"></i>',
        ctn: '我方可以选择并使用手牌中的1张《全力》牌（不会导致阶段结束）。'
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
      text: '【常时】本卡牌必须作为对应才可以使用。我方选择下列项最多2项，并按照任意顺序执行。\n（无法选择同一项执行2次）\n抽取1张卡牌。\n将1张盖牌放入牌库底。\n对方舍弃1张手牌。',
      textjp: '【常時】このカードは対応でしか使用できない。 \n以下から2つまでを選び、任意の順に行う。 \n(同じものを2回選ぶことはできない)\n・カードを1枚引く。\n・伏せ札1枚を山札の底に置く。\n・相手は手札を1枚捨て札にする。'
    },
    {
      id: '10-kururu-o-n-4',
      name: '大龙捲轰',
      namejp: 'とるねーど',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '组装：红红～\n对对方装造成5点伤害。\n组装：绿绿～\n对对方命造成1点伤害。',
      textjp: '<攻攻> 相手のオーラに5ダメージを与える。 \n----\n<付付> 相手のライフに1ダメージを与える。',
      textkururu: [{
        if: '<i class="i-bean i-bean--red"></i><i class="i-bean i-bean--red"></i>',
        ctn: '对对方装造成5点伤害。'
      }, {
        if: '<i class="i-bean i-bean--green"></i><i class="i-bean i-bean--green"></i>',
        ctn: '对对方命造成1点伤害。'
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
      text: '组装：绿紫～\n我方可以从弃牌、盖牌或王牌中选择1张非未使用状态且非《全力》牌的其他女神的卡牌。不支付任何费用使用所选卡牌。此时，攻击距离中的所有数值、任意侧的伤害值、献的数量可以选择一项增减1点。\n【常时】本卡牌在盖牌中时，可以视作在我方手牌中并按照标准情况使用。',
      textjp: '<付対> 捨て札、伏せ札、切札のいずれかから未使用でも《全力》でもない他のメガミのカードを1枚選んでもよい。そのカードのコストを支払わずに使用する。その際、適正距離のすべての値、どちらかのダメージ、納のいずれかを1増減させてもよい。\n----\n【常時】このカードは伏せ札から手札にあるかのように通常の方法で使用できる。',
      textkururu: [{
        if: '<i class="i-bean i-bean--green"></i><i class="i-bean i-bean--purple"></i>',
        ctn: '我方可以从弃牌、盖牌或王牌中选择1张非未使用状态且非《全力》牌的其他女神的卡牌。不支付任何费用使用所选卡牌。此时，攻击距离中的所有数值、任意侧的伤害值、献的数量可以选择一项增减1点。'
      }, {
        ctn: '【常时】本卡牌在盖牌中时，可以视作在我方手牌中并按照标准情况使用。'
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
      text: '【展开中】我方使用《行动》牌并处理完毕之后，可以执行1次基本动作。',
      textjp: '【展開中】あなたが《行動》カードを使用した時、その解決後に基本動作を1回行ってもよい。'
    },
    {
      id: '10-kururu-o-n-7',
      name: '反涩装置',
      namejp: 'りふれくた',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '0',
      text: '组装：红紫～\n【展开时】从虚中将4片樱花结晶移至本卡牌上。\n【展开中】打消每回合中对方的第2次《攻击》。',
      textjp: '<攻対> 【展開時】このカードの上に桜花結晶を4個ダストから置く。 \n----\n【展開中】各ターンにおける相手の2回目の《攻撃》は打ち消される。\n',
      textkururu: [{
        if: '<i class="i-bean i-bean--red"></i><i class="i-bean i-bean--purple"></i>',
        ctn: '【展开时】从虚中将4片樱花结晶移至本卡牌上。'
      }, {
        ctn: '【展开中】打消每回合中对方的第2次《攻击》。'
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
      text: '对方装（1）→我方装 \n【使用后】我方将使用完毕的王牌重新设为未使用状态时，可以免费再次使用本卡牌。',
      textjp: '相オーラ→自オーラ：1 \n【使用済】あなたの使用済の切札が未使用に戻った時、このカードを消費を支払わずに使用してもよい。'
    },
    {
      id: '10-kururu-o-s-2',
      name: '大魔像',
      namejp: 'びっぐごーれむ',
      baseType: 'special',
      types: ['action'],
      cost: '4',
      text: '组装：黄黄紫～\n【使用后】我方可以在我方结束阶段时选择对方命造成1点伤害，如果这么做，我方重组牌库且不受伤害。\n【使用后】我方使用《全力》牌并处理完毕之后，可以执行1次基本动作。',
      textjp: '<対全全> 【使用済】あなたの終了フェイズに相手のライフに1ダメージを与えてもよい。そうした場合、山札を再構成する。 \n----\n【使用済】あなたが《全力》カードを使用した時、その解決後に基本動作を1回行ってもよい。\n',
      textkururu: [{
        if: '<i class="i-bean i-bean--yellow"></i><i class="i-bean i-bean--yellow"></i><i class="i-bean i-bean--purple"></i>',
        ctn: '【使用后】我方可以在我方结束阶段时选择对方命造成1点伤害，如果这么做，我方重组牌库且不受伤害。'
      }, {
        ctn: '【使用后】我方使用《全力》牌并处理完毕之后，可以执行1次基本动作。'
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
      name: '複自粘贴',
      namejp: 'いんだすとりあ',
      baseType: 'special',
      types: ['action'],
      cost: '1',
      text: '如果本卡牌所有权属于我方且本卡牌下方没有封印卡牌时，可以从手牌或者弃牌中选择1张《付与》牌之外的卡牌，将其正面朝上进行封印，放置于本卡牌下方。\n我方从追加牌区域拿取1张「複制品齿轮」放入牌库底。（最多合计3张）\n----\n【即再起】我方重组牌库时（重组完毕后设为未使用状态）。',
      textjp: 'このカードがあなたのカードで、カードが封印されていないならば、手札または捨て札から《付与》でないカードを1枚選び、そのカードをこのカードの下に表向きで封印してもよい。 \nあなたの追加札から「でゅーぷりぎあ」を山札の底に1枚置く(最大で合計3枚)。 \n----\n【即再起】あなたが山札を再構成する(再構成の後に未使用に戻る)。'
    },
    {
      id: '10-kururu-o-s-4',
      name: '神涉装置：枢式',
      namejp: '神渉装置：枢式',
      baseType: 'special',
      types: ['action'],
      cost: '3',
      text: '组装：红红蓝蓝蓝绿绿～\n我方查看对方的王牌，并且可以选择1张将其设为使用完毕状态。\n我方可以选择并免费使用1张对方已经使用完毕的王牌（所选王牌可以是《全力》牌）。\n随后，移除本卡牌。',
      textjp: '<攻攻行行行付付> 相手の切札を見て、その中から1枚選び、それを使用済にしてもよい。\n----\n相手の使用済の切札1枚を選んでもよい。そのカードを消費を支払わずに使用する(《全力》カードでもよい)。その後、このカードを取り除く。',
      textkururu: [{
        if: '<i class="i-bean i-bean--red"></i><i class="i-bean i-bean--red"></i><i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--green"></i><i class="i-bean i-bean--green"></i>',
        ctn: '我方查看对方的王牌，并且可以选择1张将其设为使用完毕状态。'
      }, {
        ctn: '我方可以选择并免费使用1张对方已经使用完毕的王牌（所选王牌可以是《全力》牌）。\n随后，移除本卡牌。'
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
      name: '複制品齿轮',
      namejp: 'でゅーぷりぎあ',
      baseType: 'normal',
      extraFrom: '10-kururu-o-s-3',
      types: ['variable'],
      text: '（无法使用卡牌类型为不定的卡牌）\n【常时】本卡牌视作我方「複自粘贴」下封印的卡牌的複制品。但是卡牌名称为「複制品齿轮」。\n（如果「複自粘贴」为未使用状态，则本卡牌不视作某卡牌的複制品，无法使用）',
      textjp: '(カードタイプが不定のカードは使用できない) \n【常時】このカードはあなたの「いんだすとりあ」に封印されたカードの複製となる。但し、名前は変更されない。 \n(「いんだすとりあ」が未使用なら複製とならないので、使用できない)'
    }, {
      id: '10-kururu-o-s-3-ex1',
      name: '複制品齿轮',
      namejp: 'でゅーぷりぎあ',
      baseType: 'normal',
      extraFrom: '10-kururu-o-s-3',
      types: ['variable'],
      text: '（无法使用卡牌类型为不定的卡牌）\n【常时】本卡牌视作我方「複自粘贴」下封印的卡牌的複制品。但是卡牌名称为「複制品齿轮」。\n（如果「複自粘贴」为未使用状态，则本卡牌不视作某卡牌的複制品，无法使用）',
      textjp: '(カードタイプが不定のカードは使用できない) \n【常時】このカードはあなたの「いんだすとりあ」に封印されたカードの複製となる。但し、名前は変更されない。 \n(「いんだすとりあ」が未使用なら複製とならないので、使用できない)'
    }, {
      id: '10-kururu-o-s-3-ex1',
      name: '複制品齿轮',
      namejp: 'でゅーぷりぎあ',
      baseType: 'normal',
      extraFrom: '10-kururu-o-s-3',
      types: ['variable'],
      text: '（无法使用卡牌类型为不定的卡牌）\n【常时】本卡牌视作我方「複自粘贴」下封印的卡牌的複制品。但是卡牌名称为「複制品齿轮」。\n（如果「複自粘贴」为未使用状态，则本卡牌不视作某卡牌的複制品，无法使用）',
      textjp: '(カードタイプが不定のカードは使用できない) \n【常時】このカードはあなたの「いんだすとりあ」に封印されたカードの複製となる。但し、名前は変更されない。 \n(「いんだすとりあ」が未使用なら複製とならないので、使用できない)'
    }]
  },
  {
    name: '机器',
    namejp: '機器',
    isSelect: false,
    pic: 'twiicon_sa_25.jpg',
    picq: 'sd_kururu_a1.png',
    changenormal: [{
      changeIndex: '1',
      id: '10-kururu-a1-n-1',
      name: '调查昏析',
      namejp: 'あならいず',
      baseType: 'normal',
      types: ['action'],
      text: '组装：绿红紫～\n选择并舍弃我方任意1张盖牌，或者随机选择并舍弃对方1张盖牌。如果所选卡牌为《攻击》牌则对对方命造成1点伤害。除此之外则对方盖伏1张手牌。',
      textjp: '<付攻対>あなたの任意の伏せ札１枚または相手の無作為な伏せ札１枚を捨て札にする。そのカードが《攻撃》ならば相手のライフに１ダメージを与える。そうでなければ相手は手札を１枚伏せ札にする',
      textkururu: [{
        if: '<i class="i-bean i-bean--green"></i><i class="i-bean i-bean--red"></i><i class="i-bean i-bean--purple"></i>',
        ctn: '选择并舍弃我方任意1张盖牌，或者随机选择并舍弃对方1张盖牌。如果所选卡牌为《攻击》牌则对对方命造成1点伤害。除此之外则对方盖伏1张手牌。'
      }],
      textkururujp: [{
        if: '<i class="i-bean i-bean--green"></i><i class="i-bean i-bean--red"></i><i class="i-bean i-bean--purple"></i>',
        ctn: 'あなたの任意の伏せ札１枚または相手の無作為な伏せ札１枚を捨て札にする。そのカードが《攻撃》ならば相手のライフに１ダメージを与える。そうでなければ相手は手札を１枚伏せ札にする'
      }]
    },
    {
      changeIndex: '3',
      id: '10-kururu-a1-n-3',
      name: '探嚓测度',
      namejp: 'だうじんぐ',
      baseType: 'normal',
      types: ['action'],
      text: '舍弃对方牌库顶1张卡牌。\n随后，从对方弃牌中选择1张卡牌。\n组装：X红Y～\n使用所选择的卡牌。X为所选卡牌的卡牌类型，Y为所选卡牌的次要类型。',
      textjp: '相手の山札の上から１枚を捨て札にする。その後、相手の捨て札を１枚選ぶ。\n<X攻Y>選んだカードを使用する。Xは選んだカードのカードタイプに、Yはサブタイプに等しい',
      textkururu: [{
        ctn: '舍弃对方牌库顶1张卡牌。\n随后，从对方弃牌中选择1张卡牌。'
      }, {
        if: '<i class="i-bean i-bean--x"></i><i class="i-bean i-bean--red"></i><i class="i-bean i-bean--y"></i>',
        ctn: '使用所选择的卡牌。X为所选卡牌的卡牌类型，Y为所选卡牌的次要类型。'
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
      name: '最终嗖寻',
      namejp: 'らすとりさーち',
      baseType: 'special',
      types: ['action'],
      cost: '1',
      text: '组装：红～\n对方选择对方1张盖牌，我方声明1次所选卡牌的卡牌名称，对方舍弃所选卡牌。如果我方声明的卡牌名称与所选卡牌名称一致，则将1片樱花结晶从虚中移至本卡牌上。如果本卡牌上有2片樱花结晶，则将本卡牌上所有的樱花结晶移至虚，处理世纪大发现的效果（查看对方的所有王牌。然后选择你或者对方，将该玩家眼前构筑时没有选用的5张王牌，从游戏外以未使用状态加入王牌。将「最终嗖寻」移出游戏并从追加牌中将「壮绝旅程」以未使用状态加入王牌。），并且本卡牌获得终止特性。\n----\n【即再起】我方重组牌库时（重组完毕后设为未使用状态）。',
      textjp: '<攻>相手は伏せ札から１枚選ぶ。あなたはカード名を１つ宣言し、相手は選んだカードを捨て札にする。そのカード名が一致したらこのカードの上にダストから桜花結晶を１つ置く。2つになったらこのカードの上の桜花結晶をダストに送るとともに世紀の大発見を行い、このカードは終端を得る。\n【即再起】あなたが山札を再構成する（再構成の後に未使用に戻る）。',
      textkururu: [{
        if: '<i class="i-bean i-bean--red"></i>',
        ctn: '对方选择对方1张盖牌，我方声明1次所选卡牌的卡牌名称，对方舍弃所选卡牌。如果我方声明的卡牌名称与所选卡牌名称一致，则将1片樱花结晶从虚中移至本卡牌上。如果本卡牌上有2片樱花结晶，则将本卡牌上所有的樱花结晶移至虚，处理世纪大发现的效果（查看对方的所有王牌。然后选择你或者对方，将该玩家眼前构筑时没有选用的5张王牌，从游戏外以未使用状态加入王牌。将「最终嗖寻」移出游戏并从追加牌中将「壮绝旅程」以未使用状态加入王牌。），并且本卡牌获得终止特性。'
      }, {
        ctn: '----\n【即再起】我方重组牌库时（重组完毕后设为未使用状态）。'
      }],
      textkururujp: [{
        if: '<i class="i-bean i-bean--red"></i>',
        ctn: '相手は伏せ札から１枚選ぶ。あなたはカード名を１つ宣言し、相手は選んだカードを捨て札にする。そのカード名が一致したらこのカードの上にダストから桜花結晶を１つ置く。2つになったらこのカードの上の桜花結晶をダストに送るとともに世紀の大発見を行い、このカードは終端を得る。'
      }, {
        ctn: '【即再起】あなたが山札を再構成する（再構成の後に未使用に戻る）。'
      }]
    }],
    changeExtra: [{
      id: '10-kururu-a1-s-3-ex1',
      name: '壮绝旅程',
      namejp: 'ぐらんがりばー',
      baseType: 'special',
      extraFrom: '10-kururu-a1-s-3',
      types: ['action'],
      cost: 'X',
      text: '【常时】X等于我方气。\n【使用后】我方所有王牌的费用变为0。',
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
      name: '衝叽波',
      namejp: 'ぶらすたー',
      baseType: 'normal',
      types: ['attack'],
      range: '2-6',
      damage: '0/0',
      text: '（通常牌）无法对应\n机巧：绿～【攻击后】如果由其他女神的卡牌完成本次组装，则进行『攻击距离0-6，1/1』的攻击。\n机巧：蓝紫～【攻击后】如果由其他女神的卡牌完成本次组装，则进行『攻击距离0-6，1/1』的攻击。',
      textjp: '<付>【攻撃後】他のメガミのカードで組み立てたならば、攻撃『適正距離0-6、1/1』を行う。\n<行対>【攻撃後】他のメガミのカードで組み立てたならば、攻撃『適正距離0-6、1/1』を行う。',
      textkururu: [{
        ctn: '（通常牌）无法对应'
      }, {
        if: '<i class="i-bean i-bean--green"></i>',
        ctn: '【攻击后】如果由其他女神的卡牌完成本次组装，则进行『攻击距离0-6，1/1』的攻击。'
      }, {
        if: '<i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--purple"></i>',
        ctn: '【攻击后】如果由其他女神的卡牌完成本次组装，则进行『攻击距离0-6，1/1』的攻击。'
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
      name: '超电吡炮',
      namejp: 'れーるがん',
      baseType: 'normal',
      types: ['attack'],
      range: '2-6',
      damage: '1/1',
      text: '机巧：红红～【常时】进行本《攻击》时，本《攻击》获得+2/+0。\n机巧：黄～终止\n【常时】进行本《攻击》时，本《攻击》获得+0/+1，并且无法被打消',
      textjp: '<攻攻>【常時】この《攻撃》が行われた時、この《攻撃》は+2/+0となる。\n<全>終端\n【常時】この《攻撃》が行われた時、この《攻撃》は+0/+1となり、打ち消されない。',
      textkururu: [{
        if: '<i class="i-bean i-bean--red"></i><i class="i-bean i-bean--red"></i>',
        ctn: '【常时】进行本《攻击》时，本《攻击》获得+2/+0。'
      }, {
        if: '<i class="i-bean i-bean--yellow"></i>',
        ctn: '终止\n【常时】进行本《攻击》时，本《攻击》获得+0/+1，并且无法被打消'
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
      name: '骇録装置',
      namejp: 'こねくとだいぶ',
      baseType: 'special',
      types: ['action'],
      cost: '1',
      text: '机巧：绿蓝紫～【使用时/使用后】如果由其他女神的卡牌完成本次组装，则在使用本卡牌以及我方结束阶段时，我方可以从虚或我方装中将1片樱花结晶移至本卡牌上。\n【使用后】我方处理齿轮栏中的效果时，可以选择将1片樱花结晶从本卡牌移至虚。如果这么做，当前处理的齿轮栏中所有的数值变为2倍。',
      textjp: '<付行対>【使用時/使用済】他のメガミのカードで組み立てたならば、使用時とあなたの終了フェイズにダストまたはあなたのオーラからこのカードの上に桜花結晶を1つ置いてもよい。\n【使用済】あなたがある機巧枠の効果を解決するに際し、このカードの上の桜花結晶を1つダストに送ってもよい。そうした場合、その機巧枠の中に書かれた数字全てを2倍にする。',
      textkururu: [{
        if: '<i class="i-bean i-bean--green"></i><i class="i-bean i-bean--blue"></i><i class="i-bean i-bean--purple"></i>',
        ctn: '【使用时/使用后】如果由其他女神的卡牌完成本次组装，则在使用本卡牌以及我方结束阶段时，我方可以从虚或我方装中将1片樱花结晶移至本卡牌上。'
      }, {
        ctn: '【使用后】我方处理齿轮栏中的效果时，可以选择将1片樱花结晶从本卡牌移至虚。如果这么做，当前处理的齿轮栏中所有的数值变为2倍。'
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
  desc: '造花～引擎区域有5片造花结晶。',
  descjp: '造花～マシンに造花結晶を5つ持つ。',
  list: [{
    name: '骑',
    namejp: '乗騎',
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
      text: '【攻击后】进行1次骑动。',
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
      text: '燃烧\n【攻击后】进行1次骑动。',
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
      text: '燃烧\n【常时】进行本《攻击》所造成伤害的处理时，将樱花结晶移至距，而不是虚或者气。',
      textjp: '燃焼 \n【常時】この《攻撃》のダメージにより移動する桜花結晶は、ダストやフレアでなく間合に動かす。'
    },
    {
      id: '11-thallya-o-n-4',
      name: 'Steam Cannon',
      namejp: 'Steam Cannon',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '2-8',
      damage: '3/3',
      text: '燃烧',
      textjp: '燃焼'
    },
    {
      id: '11-thallya-o-n-5',
      name: 'Stunt',
      namejp: 'Stunt',
      baseType: 'normal',
      types: ['action'],
      text: '对方畏缩。\n我方装（2）→我方气',
      textjp: '相手を畏縮させる。 \n自オーラ→自フレア：2'
    },
    {
      id: '11-thallya-o-n-6',
      name: 'Roaring',
      namejp: 'Roaring',
      baseType: 'normal',
      types: ['action'],
      text: '我方可以将2片造花结晶从引擎区域移至燃尽区域。如果这么做，我方获得1点集中力，对方失去1点集中力，对方畏缩。\n我方可以消耗2点集中力。如果这么做，我方回复3片燃尽的造花结晶。',
      textjp: 'コストとして、あなたのマシンにある造花結晶を2つ燃焼済にしても良い。そうした場合、あなたは集中力を1得て、相手は集中力を1失い、相手を畏縮させる。 \nコストとして、集中力を2支払ってもよい。そうした場合、あなたの燃焼済の造花結晶を3つ回復する。'
    },
    {
      id: '11-thallya-o-n-7',
      name: 'Turbo Switch',
      namejp: 'Turbo Switch',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '燃烧\n进行1次骑动。',
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
      text: '【即再起】我方通过骑动导致距离发生变化时。',
      textjp: '【即再起】あなたが騎動により間合を変化させる。'
    },
    {
      id: '11-thallya-o-s-2',
      name: 'Omega-Burst',
      namejp: 'Omega-Burst',
      baseType: 'special',
      types: ['action', 'reaction'],
      cost: '4',
      text: '我方回复所有燃尽的造花结晶。\n打消受到对应的对装的伤害为「-」或者为X或以下的《攻击》。\nX为通过本卡牌回复的造花结晶的数量。',
      textjp: 'あなたの燃焼済の造花結晶を全て回復する。 \n対応した、オーラへのダメージが「-」またはX以下の《攻撃》を打ち消す。Xはこのカードにより回復した造花結晶の個数に等しい。'
    },
    {
      id: '11-thallya-o-s-3',
      name: 'Thallya\'s Masterpiece',
      namejp: 'Thallya\'s Masterpiece',
      baseType: 'special',
      types: ['action'],
      cost: '1',
      text: '【使用后】在我方的回合中，每当我方通过基本动作以外的方法进行骑动，导致距发生变化时，我方可以\n虚（1）⇔ 距',
      textjp: '【使用済】あなたのターンに、あなたが基本動作以外の方法で騎動を行い、間合を変化させるたびに\nダスト⇔間合：1 \nを行ってもよい。'
    },
    {
      id: '11-thallya-o-s-4',
      name: 'Julia\'s BlackBox',
      namejp: 'Julia\'s BlackBox',
      baseType: 'special',
      types: ['action', 'fullpower'],
      cost: '2',
      text: '如果我方引擎区域没有造花结晶，则进行TRANSFORM，然后回复2片造花结晶。否则，将本卡牌重新设为未使用状态。',
      textjp: 'あなたのマシンに造花結晶がないならば、あなたのマシンはTransFormし、あなたの燃焼済の造花結晶を2つ回復する。そうでない場合、このカードを未使用に戻す。'
    }],
    transform: [{
      id: '11-thallya-o-tf-1',
      name: 'Form: YAKSHA',
      namejp: 'Form: YAKSHA',
      baseType: 'transform',
      types: ['transform'],
      text: '【变形时】对方的下一个开始阶段只能抽取1张卡牌，对方畏缩。\n【常时】如果我方的引擎区域没有造花结晶则我方无法执行基本动作。\n【追加基本动作】Beta-Edge：进行『攻击距离2,4,6,8，2/1，【攻击后】进行1次骑动』的攻击。',
      textjp: '【変形時】相手は次の開始フェイズにカードを1枚しか引けない。相手を畏縮させる。\n----\n【常時】あなたのマシンに造花結晶がないならば、あなたは基本動作を行えない。\n----\n【追加基本行動：Beta-Edge】『適正距離2,4,6,8、2/1 【攻撃後】騎動を行う』の《攻撃》を行う。'
    },
    {
      id: '11-thallya-o-tf-2',
      name: 'Form: NAGA',
      namejp: 'Form: NAGA',
      baseType: 'transform',
      types: ['transform'],
      text: '【变形时】对方气为3或以上时，将多余的樱花结晶全部移至虚，使其剩余的气为2。\n【追加基本动作】Gamma-Ray：对方舍弃其牌库顶的1张牌。',
      textjp: '【変形時】相手のフレアが3以上ならば、フレアが2になるように桜花結晶をダストへ移動させる。\n----\n【追加基本行動：Gamma-Ray】\n相手の山札の一番上のカードを相手の捨て札に置く。'
    },
    {
      id: '11-thallya-o-tf-3',
      name: 'Form: GARUDA',
      namejp: 'Form: GARUDA',
      baseType: 'transform',
      types: ['transform'],
      text: '【变形时】抽取2张卡牌。在本回合中，我方的手牌没有上限。\n【追加基本动作】Delta-Wing：当前距为7或以下则虚（1）→距',
      textjp: '【変形時】カードを2枚引き、このターンの間手札の上限が無くなる。\n----\n【追加基本行動：Delta-Wing】\n現在の間合が7以下ならば、ダスト→間合：1'
    }]
  },
  {
    name: '新型',
    namejp: '新型',
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
      text: '【展开时】我方回复1片燃尽的造花结晶。随后，选择1张追加牌区域中的TransForm牌，将其正面朝上进行封印，放置于本卡牌下方（不处理变形时效果）。\n【展开中】我方可以执行本卡牌下所封卡牌的追加基本动作，该封印卡牌上常时效果持续生效。\n【弃置时】将本卡牌下所封印的卡牌放入追加牌区域。',
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
      text: '终止\n我方回复1片燃尽的造花结晶。随后，如果我方没有燃尽的造化结晶，则将1片樱花结晶从虚中移至本卡牌上。本卡牌上有2片樱花结晶时，将本卡牌上所有的樱花结晶移至虚，并且我方进行TransForm。\n----\n【再起】我方引擎区域中的造化结晶数量为3或以下。或者本回合中我方进行过TransForm。',
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
      text: '【常时】X为我方在本局游戏中TransForm的次数。',
      textjp: '【常時】XはあなたのマシンがこのゲームでTransFormした回数に等しい。'
    }],
    changeTransform: [{
      changeIndex: '1',
      id: '11-thallya-a1-tf-1',
      name: 'Form: KINNARI',
      namejp: 'Form: KINNARI',
      baseType: 'transform',
      types: ['transform'],
      text: '【变形时】盖伏对方牌库中所有的卡牌。\n----\n【常时】Zeta-Voice：我方可以在对方重组牌库完毕后进行『攻击距离2,4,6，2/2』的攻击。',
      textjp: '【変形時】相手は山札をすべて伏せ札にする。\n----\n【常時】Zeta-Voice：相手が山札を再構築したとき、その解決後に攻撃『適正距離2,4,6、2/2』を行ってもよい。'
    },
    {
      changeIndex: '3',
      id: '11-thallya-a1-tf-3',
      name: 'Form: ASURA',
      namejp: 'Form: ASURA',
      baseType: 'transform',
      types: ['transform'],
      text: '【变形时】对方舍弃1张盖牌，随后，再次舍弃1张盖牌。\n----\n【追加基本动作】Sigma-Drive：进行『攻击距离3,5，3/2 【攻击后】我方畏缩』的攻击。此基本动作每回合仅可执行一次。',
      textjp: '【変形時】相手は伏せ札から１枚を選び、それを捨て札にする。これをもう１回繰り返す。\n----\n【常時】Sigma-Drive：『適正距離3,5、3/2【攻撃後】あなたは畏縮する。』を行う。\nこの基本動作は一ターンに1回だけ行える。'
    },
    {
      changeIndex: '4',
      id: '11-thallya-a1-tf-4',
      name: 'Form: DEVA',
      namejp: 'Form: DEVA',
      baseType: 'transform',
      types: ['transform'],
      text: '【变形时】我方回复2片燃尽的造花结晶。并且执行2次基本动作《装附》。\n----\n【常时】Phi-Cycle：每当对方弃牌中的卡牌数量变为0以外的偶数时，我方获得1点集中力。',
      textjp: '【変形時】あなたの燃焼済の造花結晶を2つ回復し、基本動作《纏い》を2回行う。\n----\n【常時】Phi-Cycle：相手の捨て札にあるカードの枚数が0でない2の倍数になるたびに、あなたは集中力を1得る。'
    }]
  }]
},
{
  name: 'RAIRA 雷螺',
  namejp: 'ライラ',
  desc: '风雷～拥有风神槽与雷神槽，初期数值为0，最大数值为20。我方使用其他女神的卡牌时会带电，如果解除带电则可以选择其中之一提升1点。（横置卡牌来表示解除带电）',
  descjp: '風雷～風神ゲージと雷神ゲージを持ち、初期値は0、最大値は20である。あなたが他のメガミのカードを使用するたびにそれは帯電し、帯電を解除すればどちらかのゲージを1上げられる。（帯電を解除したらカードを横向きにして表す）',
  list: [{
    name: '爪',
    namejp: '爪',
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
      range: '2',
      damage: 'X/2',
      text: '【常时】X为风神槽或雷神槽中较少一方的数值。',
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
      text: '【攻击后】我方可以选择弃牌中的1张《攻击》牌，并将其放到牌库顶。',
      textjp: '【攻撃後】あなたの捨て札にある《攻撃》カード1枚を選び、山札の一番上に置いてもよい。'
    },
    {
      id: '12-raira-o-n-4',
      name: '疾风步',
      namejp: '風走り',
      baseType: 'normal',
      types: ['action'],
      text: '当前距为3或以上则距（2）→虚',
      textjp: '現在の間合が3以上ならば、間合→ダスト：2'
    },
    {
      id: '12-raira-o-n-5',
      name: '风雷之智',
      namejp: '風雷の知恵',
      baseType: 'normal',
      types: ['action'],
      text: '如果我方风神槽与雷神槽合计数值为4或以上，则我方可以选择弃牌中其他女神的1张卡牌，并将其放到牌库顶。选择风神槽或者雷神槽提升1点。',
      textjp: '風神ゲージと雷神ゲージの合計が4以上ならば、あなたの捨て札にある他のメガミのカード1枚を選び、山札の一番上に置いてもよい。 \n風神ゲージか雷神ゲージを1上げる。'
    },
    {
      id: '12-raira-o-n-6',
      name: '咆哮',
      namejp: '呼び声',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '对方畏缩。我方选择下述1项执行。\n1.风神槽与雷神槽各提升1点。\n2.盖伏所有手牌，将雷神槽的数值翻倍。',
      textjp: '相手を畏縮させ、以下から1つを選ぶ。\n・風神ゲージと雷神ゲージを1ずつ上げる。\n・手札を全て伏せ札にし、雷神ゲージを2倍にする。'
    },
    {
      id: '12-raira-o-n-7',
      name: '驭空',
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
      text: '【常时】我方的雷神槽为4或以上则本《攻击》获得+1/+0。\n----\n【再起】我方的风神槽为4或以上。',
      textjp: '【常時】あなたの雷神ゲージが4以上ならば、この《攻撃》は+1/+0となる。 \n----\n【再起】あなたの風神ゲージが4以上である。'
    },
    {
      id: '12-raira-o-s-2',
      name: '天雷召唤阵',
      namejp: '天雷召喚陣',
      baseType: 'special',
      types: ['action', 'fullpower'],
      cost: '6',
      text: '进行X次『攻击距离0-10，1/1』的攻击，X等于目前我方雷神槽数值的一半（向上取整）。',
      textjp: '攻撃『適正距離0-10、1/1』をX回行う。Xは雷神ゲージの半分(切り上げ)に等しい。'
    },
    {
      id: '12-raira-o-s-3',
      name: '风魔招来孔',
      namejp: '風魔招来孔',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '根据我方当前风神槽点数，从追加牌区域以未使用状态获得下述卡牌（获得满足条件的所有卡牌）。随后，移除本卡牌。\n3点或以上…「风魔旋风」\n7点或以上…「风魔缠回」\n12点或以上…「风魔天狗道」',
      textjp: '現在の風神ゲージに応じて、以下の切札を追加札から未使用で得る(条件を満たしたものは全て得る)。その後、このカードを取り除く。 \n3以上…風魔旋風 \n7以上…風魔纏廻 \n12以上…風魔天狗道'
    },
    {
      id: '12-raira-o-s-4',
      name: '圆环轮回旋',
      namejp: '円環輪廻旋',
      baseType: 'special',
      types: ['enhance', 'reaction'],
      capacity: '3',
      cost: '2',
      text: '【展开中】对方的《攻击》处理完毕后，我方可以执行下述所有行动。\n1. 距（1）⇔ 虚\n2. 选择风神槽或者雷神槽提升1点。',
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
      text: '选择1张我方使用完毕的王牌，将其重新设为未使用状态\n【使用后】我方所有的王牌费用减1（王牌的费用无法小于0）。',
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
      text: '距（5）⇔ 虚\n我方通过本效果移动樱花结晶时，可以任意选择移动0至5片樱花结晶。\n随后，移除本卡牌。',
      textjp: 'ダスト⇔間合：5 \nあなたはこの効果で本来より少ない個数の桜花結晶を動かしてもよい。その後、このカードを取り除く。'
    }]
  },
  {
    name: '岚',
    namejp: '嵐',
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
      text: '【攻击后】我方可以选择并使用1次风暴之力。',
      textjp: '【攻撃後】嵐の力を1回使用してもよい。'
    },
    {
      changeIndex: '6',
      id: '12-raira-a1-n-6',
      name: '狂岚',
      namejp: '大嵐',
      baseType: 'normal',
      types: ['enhance', 'fullpower'],
      capacity: '0',
      text: '【展开时】我方选择下列项合计3次，可以多次选择同一项。\n1.风神槽或者雷神槽提升1点；\n2.将1片樱花结晶从虚中移至本卡牌上。\n【展开中】我方与对方的结束阶段时，我方进行『攻击距离0-4，1/1，无法对应』的攻击。\n【展开中】每回合对方第一次《攻击》获得+0/-1。',
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
      text: '风神槽和雷神槽各提升1点，对方畏缩。\n【使用后】我方使用的卡牌不再带电。\n【使用后】我方主要阶段开始时，如果我方选择执行标准行动，则我方可以使用最多2次风暴之力。此时，无法2次选择同一项风暴之力。',
      textjp: '風神ゲージと雷神ゲージを1ずつ上げ、相手を畏縮させる。\n【使用済】あなたが使用したカードは帯電しない。\n【使用済】あなたのメインフェイズの開始時に、あなたが標準行動を選択したなら、嵐の力を2回まで使用してもよい。だたし、同じ力は選べない。'
    }],
    girlBoard: [{
      id: '12-raira-a1-st',
      name: '【风暴之力】',
      namejp: '【嵐の力】',
      baseType: '',
      types: ['extra'],
      text: '1风：虚（1）⇔ 距\n2风：我方抽取1张手牌，并且盖伏1张手牌。\n3风：我方获得1点集中力，对方失去1点集中力。\n----\n1雷：本回合内我方的下一次《攻击》获得+1/+0。\n2雷：进行『攻击距离0-4，1/1』的攻击。\n3雷：本回合中我方的下一次对装伤害不为「-」的《攻击》获得+0/+1。',
      textjp: '風1：ダスト（１）⇔間合。\n風2：カードを１枚引き、手札を１枚伏せ札にする。\n風3：あなたは集中力を１得て、相手は集中力を１失う。\n----\n雷1：このターンにあなたが次に行う《攻撃》は+1/+0となる。\n雷2：攻撃『適正距離0-4、1/1』を行う。\n雷3：このターンにあなたが次に行うオーラへのダメージが「-」でない《攻撃》は+0/+1となる。'
    }]
  }]
},
{
  name: 'UTSURO 虚路',
  namejp: 'ウツロ',
  desc: '灰尘～当虚为12或以上时，一部分卡牌将会强化。',
  descjp: '灰塵～ダストが12以上ならば、いくつかのカードが強化される。',
  list: [{
    name: '镰',
    namejp: '鎌',
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
      text: '【常时】灰尘～虚为12或以上则本《攻击》对装的伤害变为「-」。',
      textjp: '【常時】灰塵-ダストが12以上ならば、この《攻撃》のオーラへのダメージは「-」になる。'
    },
    {
      id: '13-utsuro-o-n-2',
      name: '漆黑波动',
      namejp: '黒き波動',
      baseType: 'normal',
      types: ['attack'],
      range: '4-7',
      damage: '1/2',
      text: '【攻击后】如果对方选择装受到伤害，则我方查看对方手牌，选择并舍弃其中1张牌。',
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
      text: '【攻击后】对方从从对方的装，气，命中选择2片樱花结晶，将其移至虚。\n【攻击后】我方可以选择1张对方的付与牌。如果这么做，将其上方的2片樱花结晶移至虚。',
      textjp: '【攻撃後】相手は相手のオーラ、フレア、ライフのいずれかから桜花結晶を合計2つダストへ移動させる。 \n【攻撃後】相手の付与札を1枚選んでもよい。そうした場合、その付与札の上から桜花結晶を2つダストへ送る。'
    },
    {
      id: '13-utsuro-o-n-4',
      name: '重压',
      namejp: '重圧',
      baseType: 'normal',
      types: ['action'],
      text: '对方从对方的装，气，命中选择1片樱花结晶，将其移至虚。\n灰尘～虚为12或以上则对方畏缩。',
      textjp: '相手は相手のオーラ、フレア、ライフのいずれかから桜花結晶を1つダストへ移動させる。 \n灰塵-ダストが12以上ならば、相手を畏縮させる。'
    },
    {
      id: '13-utsuro-o-n-5',
      name: '影飞翅',
      namejp: '影の翅',
      baseType: 'normal',
      types: ['action'],
      text: '本回合中，当前距离增加2且近身距离2。',
      textjp: 'このターン中、現在の間合は2増加し、達人の間合は2大きくなる。'
    },
    {
      id: '13-utsuro-o-n-6',
      name: '影屏障',
      namejp: '影の壁',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '受到对应的《攻击》获得-0/-1。',
      textjp: '対応した《攻撃》は+0/-1となる。'
    },
    {
      id: '13-utsuro-o-n-7',
      name: '遗灰咒',
      namejp: '遺灰呪',
      baseType: 'normal',
      types: ['enhance', 'fullpower'],
      capacity: '2',
      text: '【展开时】对方装（3）→虚 \n【弃置时】灰尘～虚为12或以上则进行下述处理。\n虚（2）→对方装，对方命（1）→虚',
      textjp: '【展開時】相オーラ→ダスト：3 \n【破棄時】灰塵-ダストが12以上ならば以下を行う。 \nダスト→相オーラ：2、相ライフ→ダスト：1'
    }],
    special: [{
      id: '13-utsuro-o-s-1',
      name: '灰灭',
      namejp: '灰滅',
      baseType: 'special',
      types: ['action'],
      cost: '24',
      text: '【常时】本卡牌的费用减少当前虚中樱花结晶的数量\n对方命（3）→虚\n移除本卡牌。',
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
      text: '【展开中】对方的《攻击》获得抑势（近1），并且不处理【攻击后】的效果。\n【展开中】对方将《付与》牌放置上场时，其基础献减少1点。对方的付与牌不处理【弃置时】的效果。',
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
      text: '【展开中】对我方产生1点或以上伤害的《攻击》处理完毕后，将本卡牌上所有的樱花结晶移至虚。\n【弃置时】结束当前阶段。\n----\n【再起】灰尘～虚为12或以上。',
      textjp: '【展開中】あなたに1以上のダメージを与えた《攻撃》の解決後に、このカードの上の桜花結晶を全てをダストに送る。 \n【破棄時】現在のフェイズを終了する。 \n----\n【再起】灰塵-ダストが12以上である。'
    },
    {
      id: '13-utsuro-o-s-4',
      name: '魔食',
      namejp: '魔食',
      baseType: 'special',
      types: ['action'],
      cost: '4',
      text: '【使用后】我方开始阶段开始时，对方选择下述1项执行。\n1.对方装（1）→虚\n2.对方气（2）→虚',
      textjp: '【使用済】あなたの開始フェイズの開始時に相手は以下のどちらかを選ぶ。\n・相オーラ→ダスト：1\n・相フレア→ダスト：2'
    }]
  },
  {
    name: '尘',
    namejp: '塵',
    isSelect: false,
    pic: 'twiicon_sa_21.jpg',
    picq: 'sd_utsuro_a1.png',
    changenormal: [{
      changeIndex: '2',
      id: '13-utsuro-a1-n-2',
      name: '蚀心尘',
      namejp: '蝕みの塵',
      baseType: 'normal',
      types: ['attack'],
      range: '3-6',
      damage: '2/0',
      text: '【攻击后】如果对方选择命受到伤害，则对方气（2）→虚',
      textjp: '【攻撃後】相手がライフへのダメージを選んだならば、相フレア→ダスト：2'
    }],
    changespecial: [{
      changeIndex: '1',
      id: '13-utsuro-a1-s-1',
      name: '残响装置：枢式',
      namejp: '残響装置:枢式',
      baseType: 'special',
      types: ['enhance'],
      capacity: '2',
      cost: '2',
      text: '【展开中】本卡牌上的樱花结晶仅会在虚为13或以上，且我方命为6或以下时移动。\n【弃置时】如果当前阶段为回合开始阶段，则终焉之影复苏（将你手牌、牌库、盖牌区、弃牌与付与区中的所有非王牌移出游戏（不结算付与牌的弃置时效果），将因此移出游戏的樱花结晶移至虚，将追加牌「万象乖离歼灭之影」「我等亡殁静寂往灭」「终焉·降临」置于弃牌并洗牌）。随后，移除本卡牌，从追加牌区域以使用完毕状态获得「夙愿」，再抽取1张卡牌。',
      textjp: '【展開中】ダストが13以上かつあなたのライフが6以下である場合のみ、このカードの上の桜花結晶は移動する。\n【破棄時】現在のフェイズが開始フェイズならば終焉の影が蘇る。その後、このカードを取り除き、あなたの追加札から「望我」を使用済で得て、カードを1枚引く。'
    }],
    changeExtra: [{
      id: '13-utsuro-a1-s-1-ex1',
      name: '夙愿',
      namejp: '望我',
      baseType: 'special',
      extraFrom: '13-utsuro-a1-s-1',
      types: ['action'],
      cost: '6',
      text: '【使用后】我方不会受到伤害。\n----\n【即再起】我方主要阶段开始时。',
      textjp: '【使用済】あなたはダメージを受けない。 \n----\n【即再起】あなたのメインフェイズが開始する。'
    },
    {
      id: '13-utsuro-a1-s-1-ex2',
      name: '万象乖离歼灭之影',
      namejp: '万象乖ク殲滅ノ影',
      baseType: 'normal',
      extraFrom: '13-utsuro-a1-s-1',
      types: ['attack', 'fullpower'],
      range: '0-3',
      damage: '-/0',
      text: '无法对应\n【攻击后】对方从对方的装，气，命中选择合计6片樱花结晶，将其移至虚。',
      textjp: '対応不可 \n【攻撃後】相手は相手のオーラ、フレア、ライフのいずれかから桜花結晶を合計6つダストへ移動させる。'
    },
    {
      id: '13-utsuro-a1-s-1-ex3',
      name: '我等亡殁静寂往灭',
      namejp: '我ヲ亡クシテ静寂ヲ往ク',
      baseType: 'normal',
      extraFrom: '13-utsuro-a1-s-1',
      types: ['action', 'fullpower'],
      text: '我方可以执行至多5次《前进》以外的基本动作。\n进行『攻击距离4-10，3/2』的攻击。\n进行『攻击距离5-10，1/1』的攻击。\n进行『攻击距离6-10，1/1』的攻击。',
      textjp: 'あなたは《前進》以外の基本動作を5回まで行ってもよい。 \n攻撃『適正距離4-10、3/2』を行う。 \n攻撃『適正距離5-10、1/1』を行う。 \n攻撃『適正距離6-10、1/1』を行う。'
    },
    {
      id: '13-utsuro-a1-s-1-ex4',
      name: '终焉·降临',
      namejp: '終焉、来タレ',
      baseType: 'normal',
      extraFrom: '13-utsuro-a1-s-1',
      types: ['enhance'],
      capacity: '2',
      text: '【弃置时】对方舍弃牌库与手牌中的所有卡牌。对方集中力变为0。对方畏缩。',
      textjp: '【破棄時】相手は手札と山札をすべて捨て札にする。相手の集中力は0になる。相手を畏縮させる。'
    }]
  }]
},
{
  name: 'HONOKA 仄佳',
  namejp: 'ホノカ',
  desc: '绽放～一部分卡牌使用后会变为不同的卡牌。',
  descjp: '開花～いくつのカードは使用した後で異なるカードへと変換される。',
  list: [{
    name: '旗',
    namejp: '旗',
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
      text: '无法对应\n【攻击后】绽放～我方可以将「精灵式」与追加牌区域中的「守护灵式」进行交换。如果这么做，我方可以选择将「守护灵式」放入牌库底。',
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
      text: '【攻击后】对方选择一项。\n1.距（1）→我方装；\n2.对方装（1）→距。',
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
      text: '【攻击后】我方可以抽取1张卡牌。\n【攻击后】我方可以选择1张卡牌，将其放入牌库底。\n【攻击后】我方可以将本卡牌放入牌库底。',
      textjp: '【攻撃後】カードを１枚引いてもよい。 \n【攻撃後】あなたは手札を1枚選び、それを山札の底に置いてもよい。 \n【攻撃後】このカードを山札の底に置いてもよい。'
    },
    {
      id: '14-honoka-o-n-4',
      name: '樱飞翅',
      namejp: '桜の翅',
      baseType: 'normal',
      types: ['action'],
      text: '距（2）⇔虚\n将「樱之翅」与追加牌区域中的「再生」进行交换。',
      textjp: '間合⇔ダスト：2 \nこの「桜の翅」を追加札の「再生」と交換する。'
    },
    {
      id: '14-honoka-o-n-5',
      name: '樱花护符',
      namejp: '桜花のお守り',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '我方可以选择并盖伏1张手牌。如果这么做，打消受到对应的王牌以外的《攻击》。\n绽放～我方可以将「樱花护符」与追加牌区域中的「微光闪烁」进行交换。如果这么做，我方可以选择将「微光闪烁」放入牌库底。',
      textjp: 'あなたは手札を１枚選び、それを伏せ札にしてもよい。そうした場合、対応した切札でない《攻撃》を打ち消す。 \n開花-この「桜花のお守り」を追加札の「仄かなる輝き」と交換してもよい。そうした場合、その「仄かなる輝き」を山札の底に置いてもよい。'
    },
    {
      id: '14-honoka-o-n-6',
      name: '指挥',
      namejp: '指揮',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '【展开中】在我方结束阶段时，进行『攻击距离1-5，1/1，无法对应』的攻击。',
      textjp: '【展開中】あなたの終了フェイズに攻撃『適正距離1-5、1/1、対応不可』を行う。'
    },
    {
      id: '14-honoka-o-n-7',
      name: '追轻风',
      namejp: '追い風',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '【展开中】我方的《攻击》获得延势（远1）。',
      textjp: '【展開中】あなたの《攻撃》は距離拡大(遠1)を得る。'
    }],
    special: [{
      id: '14-honoka-o-s-1',
      name: '心胸所念',
      namejp: '胸に想いを',
      baseType: 'special',
      types: ['action'],
      cost: '5',
      text: '绽放～将「心胸所念」与追加牌区域的「双掌生花」进行交换，并将其设为未使用状态。',
      textjp: '開花-この「胸に想いを」を追加札の「両手に華を」に交換し、未使用に戻す。'
    },
    {
      id: '14-honoka-o-s-2',
      name: '以旗之名',
      namejp: 'この旗の名の下に',
      baseType: 'special',
      types: ['attack'],
      range: '3-7',
      damage: '3/2',
      cost: '4',
      text: '【常时】使用本卡牌时，我方可以选择1张我方展开中的付与牌。如果这么做，因本《攻击》而产生移动的樱花结晶不进入虚或者气，而是移动至所选择的付与牌上。\n（场上没有付与牌或者无法移动时，则按照通常情况移动樱花结晶）',
      textjp: '【常時】このカードを使用するに際し、あなたの付与札を1つ選んでもよい。この《攻撃》のダメージにより移動する桜花結晶はダストやフレアでなく選ばれた付与札に可能ならば動かす。 \n(付与札が存在しないなど不可能な場合は通常通りに桜花結晶を動かす)'
    },
    {
      id: '14-honoka-o-s-3',
      name: '四季轮迴',
      namejp: '四季はまた廻り来る',
      baseType: 'special',
      types: ['action', 'reaction'],
      cost: '1',
      text: '我方可以从盖牌中选择1张卡牌，将其放入牌库底。\n我方可以抽取1张卡牌。\n盖伏1张手牌。一旦这么做，我方执行1次基本动作《装附》。\n【使用后】当我方将我方的卡牌从追加牌区域移至其它区域时，可以将本卡牌移至追加牌区域。如果这么做，从追加牌区域以未使用状态获得本卡牌。',
      textjp: 'あなたの伏せ札からカードを1枚選び、山札の底に置いてもよい。\nカードを1枚引いてもよい。\n手札を1枚伏せ札にする。そうした場合、基本動作《纏い》を1回行う。\n【使用済】あなたのカードが追加札から别の領域へと移動した時、このカードを追加札に移してもよい。その後、このカードを未使用で追加札から得る。'
    },
    {
      id: '14-honoka-o-s-4',
      name: '漫天花道',
      namejp: '満天の花道で',
      baseType: 'special',
      types: ['enhance'],
      capacity: '5',
      cost: '2',
      text: '【展开中】需要将本卡牌上的樱花结晶移至虚时，改为移至我方装。如果我方装为5或以上，则改为移动至我方气。',
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
      text: '【攻击后】虚（1）→我方装\n【攻击后】绽放～我方可以将「守护灵式」与追加牌区域中的「突击灵式」进行交换。如果这么做，我方可以选择将「突击灵式」放入牌库底。',
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
      text: '无法对应\n【攻击后】虚（1）→我方命\n【攻击后】绽放～我方可以将「突击灵式」与追加牌区域中的「神灵樱花」进行交换。如果这么做，我方可以选择将「神灵樱花」放入牌库底。',
      textjp: '対応不可\n【攻撃後】ダスト→自ライフ：1\n【攻撃後】開花-この「突撃霊式」を追加札の「神霊ヲウカ」と交換してもよい。そうした場合、その「神霊ヲウカ」を山札の底に置いてもよい。'
    },
    {
      id: '14-honoka-o-n-1-ex3',
      name: '神灵樱花',
      namejp: '神霊ヲウカ',
      baseType: 'normal',
      extraFrom: '14-honoka-o-n-1-ex2',
      types: ['attack', 'fullpower'],
      range: '1-4',
      damage: '4/3',
      text: '无法对应\n【攻击后】虚（2）→我方装',
      textjp: '対応不可 \n【攻撃後】ダスト→自オーラ：2'
    },
    {
      id: '14-honoka-o-n-4-ex1',
      name: '再生',
      namejp: '再生',
      baseType: 'normal',
      extraFrom: '14-honoka-o-n-4',
      types: ['action', 'fullpower'],
      text: '虚（1）→我方装\n虚（1）→我方气\n将「再生」与追加牌区域中的「樱之翅」进行交换。',
      textjp: 'ダスト→自オーラ：1 \nダスト→自フレア：1 \nこの「再生」を追加札の「桜の翅」と交換する。'
    },
    {
      id: '14-honoka-o-n-5-ex1',
      name: '微光闪烁',
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
      name: '双掌生花',
      namejp: '両手に華を',
      baseType: 'special',
      extraFrom: '14-honoka-o-s-1',
      types: ['action', 'fullpower'],
      cost: '0',
      text: '执行1次基本动作《装附》。（此次《装附》不会触发此牌的替代效果）\n【使用后】在我方结束阶段时，我方执行1次基本动作《装附》。\n【使用后】绽放～如果我方执行基本动作《装附》则我方可以选择从虚或我方装中，将1片樱花结晶移至本卡牌上，来替代通常的装附行动如果导致本卡牌上有5片樱花结晶，则将这些樱花结晶移至我方气，并将「双掌生花」与追加牌区域的「新幕来临」进行交换，最后将其设为未使用状态。',
      textjp: '基本動作《纏い》を1回行う。\n【使用済】あなたの終了フェイズに基本動作《纏い》を1回行う。\n【使用済】開花-あなたが基本動作《纏い》を行うならば、代わりにダストまたはあなたのオーラからこのカードの上に桜花結晶を1つ置いてもよい。その結果、ちょうど5つになったならば、それらの桜花結晶をあなたのフレアへと移動させ、この「両手に華を」を追加札の「そして新たな幕開けを」に交換し、未使用に戻す。'
    },
    {
      id: '14-honoka-o-s-1-ex2',
      name: '新幕来临',
      namejp: 'そして新たな幕開けを',
      baseType: 'special',
      extraFrom: '14-honoka-o-s-1-ex1',
      types: ['action'],
      cost: '5',
      text: '【使用后】在我方结束阶段时，进行『攻击距离0-10，X/X，无法对应 【常时】X为正好有5片樱花结晶的区域的数量』的攻击。',
      textjp: '【使用済】あなたの終了フェイズに攻撃『適正距離0-10、X/X、対応不可 【常時】Xは桜花結晶がちょうど5つある領域の数に等しい」を行う。'
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
      name: '双樱剑',
      namejp: '桜の双剣',
      baseType: 'normal',
      types: ['attack'],
      range: '4-6',
      damage: '2/1',
      text: '【攻击后】虚（1）→我方装\n【攻击后】将『双樱剑』与追加牌区域中的『对影手』进行交换。此时，我方可以选择将「对影手」放入牌库底。',
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
      text: '对方装（1）→我方装\n绽放～根据虚中樱花结晶的数目，将『独醒于昏明』与追加牌区域中的下述卡牌进行交换，随后将其放入牌库底。\n5或以下…『循迹访清荧』\n6或以上…『彷徨徒视影』',
      textjp: '相オーラ→自オーラ：1\n開花―ダストに応じてこの「ひとり目覚めて」を以下のカードと交換し、それを山札の底に置く。\n5以下…「標をたどり」\n6以上…「影面見向き」'
    }],
    changeExtra: [{
      id: '14-honoka-a1-n-1-ex1',
      extraFrom: '14-honoka-a1-n-1',
      name: '对影手',
      namejp: '影の両手',
      baseType: 'normal',
      types: ['attack'],
      range: '3-4',
      damage: '1/0',
      text: '【攻击后】如果对方选择装受到伤害，则我方查看对方手牌，选择并舍弃其中1张牌。如果对方选择命受到伤害，则对方气（2）→虚\n【攻击后】将「对影手」与追加牌区域中的「双樱剑」进行交换。此时，我方可以选择将「双樱剑」放入牌库底。',
      textjp: '【攻撃後】相手がオーラへのダメージを選んだならば、相手の手札を見てその中から1枚を選び、それを捨て札にする。相手がライフへのダメージを選んだならば、相フレア→ダスト：2\n【攻撃後】この「影の両手」を追加札の「桜の双剣」と交換する。そうした場合、その「桜の双剣」を山札の底に置いてもよい。'
    }, {
      id: '14-honoka-a1-s-1-ex1',
      extraFrom: '14-honoka-a1-s-1',
      name: '循迹访清荧',
      namejp: '標をたどり',
      baseType: 'normal',
      types: ['action'],
      text: '我方执行至最多2次不同的基本动作。\n绽放～根据虚中的樱花结晶的数量，将「循迹访清荧」与追加牌区域中的下述卡牌进行交换，并将其设为未使用状态。\n0…『熠熠见繁樱』\n1或以上…『觫觫结袂情』',
      textjp: '異なる基本動作を合計2回まで行う。\n開花―ダストに応じてこの「標をたどり」を以下のカードと交換し、それを未使用に戻す。\n0……「桜花眩く輝かん」\n1以上…「ふたり震える手を取ろう」'
    }, {
      id: '14-honoka-a1-s-1-ex2',
      extraFrom: '14-honoka-a1-s-1',
      name: '彷徨徒视影',
      namejp: '影面見向き',
      baseType: 'normal',
      types: ['action'],
      text: '对方从对方的气或者命中任意选择1片樱花结晶，将其移至虚。\n绽放～根据虚中的樱花结晶的数量，将「彷徨徒视影」与追加区域中的下述卡牌进行交换，并将其设为未使用状态。\n12或以上…『踽踽虚路行』\n11或以下…『觫觫结袂情』',
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
      text: '超克\n【常时】X为本卡牌上樱花结晶的数量。\n【攻击后】将1片樱花结晶从虚移至本卡牌上。\n----\n【再起】至少1个区域当前正好拥有5片樱花结晶。',
      textjp: '超克\n【常時】Xはこのカードの上の桜花結晶の数に等しい。\n【攻撃後】このカードの上にダストから1つ桜花結晶を置く。\n----\n【再起】桜花結晶がちょうど5つある領域が1つ以上ある。'
    }, {
      id: '14-honoka-a1-s-1-ex4',
      extraFrom: '14-honoka-a1-s-1-ex2',
      name: '觫觫结袂情',
      namejp: 'ふたり震える手を取ろう',
      baseType: 'special',
      types: ['action'],
      cost: '5',
      text: '对方装（5）→我方装',
      textjp: '相オーラ→自オーラ：5'
    }, {
      id: '14-honoka-a1-s-1-ex5',
      extraFrom: '14-honoka-a1-s-1-ex2',
      name: '踽踽虚路行',
      namejp: '旧き虚路を歩みゆく',
      baseType: 'special',
      types: ['action'],
      cost: '3',
      text: '对方跳过下一次的主要阶段。\n移除本卡牌。',
      textjp: '相手は次のメインフェイズを失う。\nこのカードを取り除く。'
    }]
  }
  ]
},
{
  name: 'KORUNU 凝努',
  namejp: 'コルヌ',
  desc: '冻结～冻结对方，将冻结指示物移至装中填充装中的空位。只要冻结状态没有解除，基本动作《聚气》效果变为「移除1片冻结指示物」。',
  descjp: '凍結～凍結させ、凍結トークンをオーラに置いてオーラの空きを埋められる。凍結している限り、基本動作《宿し》は「凍結トークンを1つ取り除く」に変化する。',
  list: [{
    name: '橇',
    namejp: '橇',
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
      text: '【攻击后】冻结对方1次。',
      textjp: '【攻撃後】相手は1回凍結する。'
    },
    {
      id: '15-korunu-o-n-2',
      name: '迴旋刃',
      namejp: '旋回刃',
      baseType: 'normal',
      types: ['attack'],
      range: '2-3',
      damage: '2/2',
      text: '【常时】如果本《攻击》受到对应，则对应牌的效果处理完毕后距（2）⇔虚',
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
      text: '【常时】对方装没有空余则本《攻击》获得+1/+1。',
      textjp: '【常時】相手のオーラに空きがないならば、この《攻撃》は+1/+1となる。'
    },
    {
      id: '15-korunu-o-n-4',
      name: '踏雪步',
      namejp: '雪渡り',
      baseType: 'normal',
      types: ['action'],
      text: '距（1）⇔虚\n对方装没有空余则我方可以虚（1）→距',
      textjp: '間合⇔ダスト:1\n相手のオーラの空きがないならば、ダスト→間合：1を行ってもよい'
    },
    {
      id: '15-korunu-o-n-5',
      name: '绝对零度',
      namejp: '絶対零度',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '全开：进行『攻击距离2-5，1/2』的攻击，冻结对方直至对方装没有空余。\n执行1次基本动作《装附》。如果对方被冻结3点或以上，则额外执行1次。',
      textjp: '全力化:攻撃『適正距離2-5、1/2』を行い、相手はオーラの空きがなくなるまで凍結する。\n基本動作《纏い》を1回行う。相手が3つ以上凍結しているならばさらにもう1回行う。'
    },
    {
      id: '15-korunu-o-n-6',
      name: '僵冷',
      namejp: 'かじかみ',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '【展开时】冻结对方1次。\n【展开中】对方无法执行基本动作《聚气》。',
      textjp: '【展開時】相手は1回凍結する。\n【展開中】相手は基本動作《宿し》を行えない。'
    },
    {
      id: '15-korunu-o-n-7',
      name: '寒霜棘',
      namejp: '霜の茨',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '【展开中】在我方回合中时，我方第一次王牌以外的《攻击》获得+1/+1。\n【展开中】如果对方为冻结状态，则每当我方回合开始阶段处理时，我方可以选择不移动本卡牌上的樱花结晶。',
      textjp: '【展開中】あなたのターンにおけるあなたの最初の切札でない《攻撃》は+1/+1となる。\n【展開中】相手が凍結しているならば、\nあなたの開始フェイズの処理でこのカードの上の桜花結晶を移動させなくてもよい。'
    }],
    special: [{
      id: '15-korunu-o-s-1',
      name: '飞雹式',
      namejp: 'コンルルヤンペ',
      baseType: 'special',
      types: ['attack'],
      range: '2-3',
      damage: '2/3',
      cost: '4',
      text: '【攻击后】如果对方选择装受到伤害，则冻结对方，直至对方装没有空余。',
      textjp: '【攻撃後】相手がオーラへのダメージを選んだならば、相手はオーラの空きがなくなるまで凍結する。'
    },
    {
      id: '15-korunu-o-s-2',
      name: '白风式',
      namejp: 'レタルレラ',
      baseType: 'special',
      types: ['action', 'reaction'],
      cost: '2',
      text: '如果对方装没有空余，则打消受到对应的《攻击》。否则，距（1）→对方装',
      textjp: '相手のオーラに空きがないならば、対応した《攻撃》を打ち消す。そうでなければ、間合→相オーラ：1'
    },
    {
      id: '15-korunu-o-s-3',
      name: '吹雪式',
      namejp: 'ウパシトゥム',
      baseType: 'special',
      types: ['attack'],
      range: '3-6',
      damage: '0/-',
      cost: '0',
      text: '【攻击后】冻结对方1次。\n（本卡牌自身效果导致装没有空余时，由于本卡牌还在使用中，不触发即再起效果）----\n【即再起】对方装从有空余变为没有空余时。',
      textjp: '【攻撃後】相手は1回凍結する。(この効果でオーラの空きがなくなっても、まだ使用中なので未使用には戻らない)----\n【即再起】相手のオーラが空いた状態から空きがなくなる。'
    },
    {
      id: '15-korunu-o-s-4',
      name: '冥沼式',
      namejp: 'ポルチャルトー',
      baseType: 'special',
      types: ['enhance'],
      capacity: '1',
      cost: '2',
      text: '【常时】如果消耗4点费用使用本卡牌，则本卡牌如同《对应》牌一样，可以在对方《攻击》时使用并且优先处理。\n【展开时】距（1） ⇔ 虚\n冻结对方1次。\n【弃置时】我方可以在支付费用后，将本卡牌视作4献的付与牌并再次使用。',
      textjp: '【常時】このカードを消費４で対応を持つかのように相手の《攻撃》に割り込んで使用してもよい。\n【展開時】間合⇔ダスト：1\n相手は１回凍結する。\n【破棄時】このカードを納４として使用してもよい。（消費は支払う）'
    }]
  }]
},
{
  name: 'YATSUHA 八叶',
  namejp: 'ヤツハ',
  desc: '镜映～镜映数量为我方与对方的装，气，命数值一致的区域的数量。。',
  descjp: '鏡映～あなたと相手のオーラ、フレア、ライフで値が一致している個数が鏡映数となる。',
  list: [{
    name: '镜',
    namejp: '鏡',
    isSelect: false,
    pic: 'twiicon_sa_23.jpg',
    picq: 'sd_yatsuha.png',
    normal: [{
      id: '16-yatsuha-o-n-1',
      name: '星云爪',
      namejp: '星の爪',
      baseType: 'normal',
      types: ['attack'],
      range: '3-4',
      damage: '3/2',
      text: '（通常牌）无法对应\n【攻击后】我方装（1）→对方气',
      textjp: '対応不可（通常札）\n【攻撃後】自オーラ→相フレア：1'
    },
    {
      id: '16-yatsuha-o-n-2',
      name: '昏神颚',
      namejp: '昏い咢',
      baseType: 'normal',
      types: ['attack'],
      range: '4',
      damage: '3/1',
      text: '（通常牌）无法对应\n【常时】此《攻击》获得+0/+X。X为当前的镜映数量。\n【攻击后】我方畏缩。',
      textjp: '対応不可（通常札）\n【【常時】この《攻撃》は+0/+Xとなる。Xは鏡映数に等しい。\n【攻撃後】あなたは畏縮する。'
    },
    {
      id: '16-yatsuha-o-n-3',
      name: '镜中魔',
      namejp: '鏡の悪魔',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '2-3',
      damage: '5/3',
      text: '【攻击后】我方命（1）→虚',
      textjp: '【攻撃後】自ライフ→ダスト：1'
    },
    {
      id: '16-yatsuha-o-n-4',
      name: '幻影步',
      namejp: '幻影歩法',
      baseType: 'normal',
      types: ['action'],
      text: '我方获得1点集中力。选择下述1项执行。\n1.本回合中，当前距离增加1点，且近身距离1；\n2.本回合中，当前距离减少点，且近身距离缩小1。',
      textjp: 'あなたは集中力を1得。以下から1つを選ぶ。\n・このターン中、現在の間合は1増加し、達人の間合は1大きくなる。\n・このターン中、現在の間合は1減少し、達人の間合は1小きくなる。\n'
    },
    {
      id: '16-yatsuha-o-n-5',
      name: '意志',
      namejp: '意志',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '选择下述1项执行或者下述2项全部执行。\n1.我方装（1）⇔我方气\n2.对方装（1）⇔对方气',
      textjp: '以下のどちらかまたは両方を行う。\n・自オーラ⇔自フレア：1\n・相オーラ⇔相フレア：1'
    },
    {
      id: '16-yatsuha-o-n-6',
      name: '契约',
      namejp: '契約',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '对方气（1）→我方装\下一个回合结束阶段时，如果对方气小于等于我方气，则我方装（1）→对方气',
      textjp: '相フレア→自オーラ：1\n次の終了フェイズに相手のフレアがあなたのフレア以下ならば、\n自オーラ→相フレア：1'
    },
    {
      id: '16-yatsuha-o-n-7',
      name: '寄花',
      namejp: '寄花',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '破绽\n【常时】本卡牌的献为基础献减去当前镜映数量。\n【弃置时】进行『攻击距离1-4，0/0，【攻击后】对方装（2）→我方装』的攻击。',
      textjp: '隙\n【常時】このカードの納は鏡映数だけ小さくなる。\n【破棄時】攻撃『適正距離1-4、0/0、【攻撃後】相オーラ→自オーラ：2』を行う。'
    }],
    special: [{
      id: '16-yatsuha-o-s-1',
      name: '双叶镜显祟神',
      namejp: '双葉鏡の祟り神',
      baseType: 'special',
      types: ['action', 'reaction'],
      cost: '4',
      text: '如果我方命小于对方命，则複制受到对应的《攻击》，随后用该複制进行《攻击》。此时，视作该複制正在对应《攻击》。（複制攻击与原本攻击拥有同样的攻击距离，伤害，【攻击后】效果，超克特性，所使用女神。複制的基本攻击距离以及伤害为原本攻击所有效果处理完毕后的数值）\n打消受到对应的王牌以外的《攻击》。',
      textjp: 'あなたのライフが相手のライフよりも小さいならば、対応した《攻撃》複製である《攻撃》を行う。その《攻撃》は対応した《攻撃》に対応しているものとして扱う。（複製とは適正距離、ダメージ、【攻撃後】効果、超克の有無、使用メガミが同一の攻撃である。適正距離やダメージは全ての効果を適用した後のものを用いる）\n対応した切札でない《攻撃》を打ち消す。'
    },
    {
      id: '16-yatsuha-o-s-2',
      name: '四叶镜咏童谣',
      namejp: '四葉鏡のわらべ唄',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '选择1张展开中的王牌以外的付与牌，将其上方所有的樱花结晶移至虚。\n随后，如果所选《付与》牌属于弃牌或者使用完毕的王牌，则我方可以免费使用所选卡牌。如果这么做且所选卡牌为《全力》牌则本卡牌获得终止特性。',
      textjp: '切札でない付与札を1つ選び、その上から桜花結晶全てをダストに送る。\nその《付与》カードがいずれかの捨て札にあるならば、そのカードを消費を支払わずに使用してもよい。そうした場合、そのカードが《全力》ならばこのカードは終端を得る。'
    },
    {
      id: '16-yatsuha-o-s-3',
      name: '六叶镜汇星海',
      namejp: '六葉鏡の星の海',
      baseType: 'special',
      types: ['attack'],
      range: '3-7',
      damage: '3/1',
      cost: '5',
      text: '超克 （通常牌）无法对应\n【常时】本《攻击》获得+X/+X。X为当前镜映数量。',
      textjp: '超克　対応不可（通常札） \n【常時】この《攻撃》は＋X/+Xとなる。Xは鏡映数に等しい。'
    },
    {
      id: '16-yatsuha-o-s-4',
      name: '八叶镜映彼方',
      namejp: '八葉鏡の向こう側',
      baseType: 'special',
      types: ['enhance'],
      capacity: '5',
      cost: '2',
      text: '终止\n【展开中】我方卡牌的箭头（→）标记改为双向（⇔）标记。\n【弃置时】移除本卡牌。',
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
      name: '八叶镜殒茕樱',
      namejp: '八葉鏡の徒桜',
      baseType: 'special',
      cost: 1,
      types: ['action'],
      text: '终止 距离限制（0-7）\n【使用时/使用后】使用时以及我方重组牌库前，可以选择并公开1张八叶的弃牌或者手牌，随后将其替换为完全形态。如果这么做，我方畏缩。\n（例如，可以将手牌中的「星云爪」公开，并将其与追加牌中的「摘星爪」进行交换，随后放回手牌。）',
      textjp: '終端　間合制限（0-7）\n【使用時/使用済】使用時とあなたが山札を再構築する直前に、あなたの捨て札または手札にあるヤツハのカード1枚を公開し、完全態にしてもよい。そうした場合、あなたは畏縮する。\n（「星の爪」なら「星辰の鉤爪」が同じ領域に加える）'
    }],
    changeExtra: [{
      id: '16-yatsuha-a1-n-1-ex1',
      extraFrom: '16-yatsuha-o-n-1',
      name: '摘星爪',
      namejp: '星辰の鉤爪',
      baseType: 'normal',
      types: ['attack'],
      range: '3-4',
      damage: '2/1',
      text: '【攻击后】对方气（1）→我方装',
      textjp: '【攻撃後】相フレア→自オーラ：1。'
    }, {
      id: '16-yatsuha-a1-n-2-ex1',
      extraFrom: '16-yatsuha-o-n-2',
      name: '吞天颚',
      namejp: '深淵の大口',
      baseType: 'normal',
      types: ['attack'],
      range: '4-5',
      damage: '2/1',
      text: '无法对应\n【常时】本《攻击》获得+X/+X，X为当前的镜映数量。',
      textjp: '対応不可\n【常時】この《攻撃》は+Ｘ/+Ｘとなる。Ｘは鏡映数に等しい。'
    }, {
      id: '16-yatsuha-a1-n-3-ex1',
      extraFrom: '16-yatsuha-o-n-3',
      name: '现世魔',
      namejp: '本当の怪物',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '1-3',
      damage: '4/1',
      text: '【攻击后】如果对方选择命受到伤害，则\n对方命（1）→我方命',
      textjp: '【攻撃後】相手がライフへのダメージを選んだならば、\n相ライフ→自ライフ：1。'
    }, {
      id: '16-yatsuha-a1-n-4-ex1',
      extraFrom: '16-yatsuha-o-n-4',
      name: '幻影联动',
      namejp: '幻影連携',
      baseType: 'normal',
      types: ['action'],
      text: '我方选择下述1项执行。\n1.本回合中，当前距离增加1点，且近身距离扩大1；\n2.本回合中，当前距离减小1点，且近身距离缩小1。\n随后，进行『攻击距离3-5，2/1』的攻击。',
      textjp: '以下から1つを選ぶ。\n・このターン中、現在の間合は1増加し、達人の間合は1大きくなる。\n・このターン中、現在の間合は1減少し、達人の間合は1小さくなる。\nその後、攻撃『適正距離3-5、2/1』を行う。'
    }, {
      id: '16-yatsuha-a1-n-5-ex1',
      extraFrom: '16-yatsuha-o-n-5',
      name: '决意',
      namejp: '決意',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '选择下述1项执行或者下述2项全部执行。\n1.我方装（1）⇔我方气\n2.打消受到对应的对装的伤害为X或以下的且为王牌以外的《攻击》。X为当前的镜映数量+1。',
      textjp: '以下のどちらかまたは両方を行う。\n・自オーラ↔自フレア：1\n・対応した切札でない《攻撃》のオーラへのダメージがX以下ならば、その《攻撃》を打ち消す。Xは鏡映数に1を足した値に等しい。'
    }, {
      id: '16-yatsuha-a1-n-6-ex1',
      extraFrom: '16-yatsuha-o-n-6',
      name: '盟约',
      namejp: '盟約',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '我方选择下述1项执行。\n1.对方装（1）⇔我方气\n2.对方气（1）⇔我方装',
      textjp: '以下から1つを選ぶ。\n・相オーラ↔自フレア：1。\n・相フレア↔自オーラ：1。'
    }, {
      id: '16-yatsuha-a1-n-7-ex1',
      extraFrom: '16-yatsuha-o-n-7',
      name: '茕花',
      namejp: '徒寄花',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '【弃置时】根据我方进行过完全形态替换的卡牌的数量执行下述处理。\n3或以下…可以选择并公开1张八叶的弃牌或者手牌，随后将其替换为完全形态。。\n4或以上…将本卡牌放入牌库底，对方命（2）→游戏外',
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
        name: '未知的世界',
        textjp: '【常時】このカードがあなたがこのゲームで初めて使用するカードならば、使用するに際し、ゲーム外から桜花結晶を納めてもよい。\n【破棄時】あなたは基本動作《前進》を2回行う。その後、このカードを取り除き。追加札から「色づく世界」を未使用で得る。',
        text: '【常时】如果本局游戏中我方首次使用的卡牌为本卡牌，则可以选择将游戏外的樱花结晶作为献放置在本卡牌上。\n【弃置时】我方执行2次基本动作《前进》。随后，移除本卡牌，从追加牌区域以未使用状态获得「渐识的世界」。'
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
        name: '她心中的自我与决意',
        textjp: '捨て札、伏せ札、手札のいずれかからヤツハのカードを1枚公開し、そのカードを完全態にしてもよい。その後、そのカードを山札の上に置いてもよい。\n【使用済】あなたはある《攻撃》に対応を行う代わりにこのカードを取り除き、手札から他のメガミのカード1枚を捨て札にしてもよい。そうした場合、その《攻撃》を打ち消す。\n（対応不可を持つ《攻撃》にも行える）',
        text: '我方可以从弃牌，盖牌以及手牌中选择并公开任意1张八叶的卡牌，将其替换为完全形态。随后，我方可以将替换后的卡牌放在牌库顶。\n【使用后】我方在需要对应某次《攻击》时，可以选择移除本卡牌并且从手牌中弃置1张其他女神的卡牌作为代替。如果这么做，打消这次《攻击》。\n（即使该《攻击》带有无法对应特性，依然可以打消）'
      }
    ],
    girlBoard: [
      {
        id: '16-yatsuha-aa1-t-1',
        namejp: '【桜降る代の旅路】',
        name: '【散樱代的旅途】',
        textjp: '桜降る代の旅路に出発するならば、旅路の面を表として、任意の辺を下に向けて用意する。これによりしたに向けた箇所が始点となる。その後、ダストから桜花結晶1つを始点に置く。\n----家路----\n手札からカードを1枚まで選ぶ。選ばれたカード以外のあなたの通常札全てを思い出に仕舞い、この上の桜花結晶をダストに送り、追加札から「彼女にとっての桜降る代」を未使用で得る。\n----旅路----\n・カードを1枚引く。\n・あなたは集中力を1得る。\n・あなたか相手の付与札を1つ選ぶ。その付与札から桜花結晶を1つダストに送るか、その付与札に桜花結晶をダストから1つ置く。\n・捨て札か伏せ札からカードを1枚選ぶ。それを山札の底に置く。',
        text: '从散樱代的旅途出发时，翻至旅途这一面，随后选择任意方向放置。此时，下方位置将视作旅途的起点。随后，从虚中拿取1片樱花结晶放置于起点。\n----归途----\n从手牌中选择最多1张卡牌。将所选卡牌之外的我方通常牌全部填充至回忆区域，将这些卡牌上的樱花结晶移至虚，从追加牌区域以未使用状态获得「她眼中的散樱代」。\n----旅途----\n1.抽取1张卡牌。\n2.我方获得1点集中力。\n3.我方选择1张我方或对方展开中的付与牌。将所选付与牌上的1片樱花结晶移至虚，或者从虚中移动1片樱花结晶至所选付与牌。\n4.从弃牌或盖牌中选择1张卡牌。将所选卡牌移至牌库底。'
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
        name: '渐识的世界',
        textjp: '桜降る代の旅路に任意の始点から出発する。\n【使用済】各ターンの開始フェイズの開始時に所在地の効果を解決し、桜花結晶を次の位置へと時計回りに動かす。始点の効果を2回目に解決するならば、代わりに家路の効果を解決する。',
        text: '从散樱代的旅途中选择任意起点出发。\n【使用后】每回合的回合开始阶段开始时，处理当前所在地的效果，将樱花结晶按照顺时针方向移动至下一个位置。如需第2次处理起点的效果，则改为处理归途的效果。'
      },
      {
        id: '16-yatsuha-aa1-n-7-ex2',
        extraFrom: '16-yatsuha-aa1-n-7-ex1',
        baseType: 'special',
        cost: '0',
        types: ['action'],
        namejp: '彼女にとっての桜降る代',
        name: '她眼中的散樱代',
        textjp: '思い出からカードを1枚選び、それを手札に戻す。\n【使用済】あなたがカードを引くならば、代わりに思い出のカードを選んで手札に戻してよい。\n【使用済】あなたが山札の再構成によりダメージを受けるならば、代わりに思い出のカードを1枚選んで公開し、それを取り除いてもよい。\n（思い出から戻るカードは公開し完全態とできる）',
        text: '从回忆区域选择1张卡牌，并将所选卡牌从回忆区域放入手牌。\n【使用后】我方抽取卡牌时，可以选择回忆区域的1张卡牌放入手牌作为代替。\n【使用后】我方由于重组牌库受到伤害时，可以选择公开回忆区域的1张卡牌并将其移除作为代替。\n（回忆区域的卡牌放入手牌时，可以选择公开并将其替换为完全形态）'
      }
    ]
  }]
},
{
  name: 'HATSUMI 初海',
  namejp: 'ハツミ',
  desc: '航海～上一回合对方未发动攻击则顺风，反之则逆风。',
  descjp: '航海～直前のターンに相手に攻撃されていないならば順風に、されているならば逆風になる。',
  list: [{
    name: '桨',
    namejp: '櫂',
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
      text: '【常时】如果当前为顺风状态则本《攻击》获得+2/+2。\n【攻击后】如果当前为逆风状态则，则距（2） ⇔ 虚',
      textjp: '【常時】順風ならば、この《攻撃》は+2/+2となる。\n【攻撃後】逆風ならば、間合⇔ダスト：2'
    },
    {
      id: '17-hatsumi-o-n-2',
      namejp: '水激流',
      name: '水流',
      baseType: 'normal',
      types: ['attack'],
      range: '4-5',
      damage: '2/1',
      text: '【常时】如果当前为顺风状态则本《攻击》获得+1/+1。\n全开（主要阶段，若你选择执行全力行动，则我方可以如使用《全力》牌一样使用此牌。如果这么做，则此牌额外获得以下效果）：【常时】本《攻击》获得（通常牌）无法对应，并且处理本《攻击》所造成的伤害时，将樱花结晶移动至距，而不是虚或者气。',
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
      text: '【常时】如果当前为逆风状态则处理本《攻击》对命所造成的伤害时，将樱花结晶移动至虚，而不是气。',
      textjp: '【常時】逆風ならば、この《攻撃》のライフへのダメージにより移動する桜花結晶はフレアでなくダストに動かす。'
    },
    {
      id: '17-hatsumi-o-n-4',
      namejp: '海嘯',
      name: '海啸',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '如果当前距为4或以下则，虚（1）→距。\n如果当前为逆风状态则上图箭头的左侧变更为对方气。',
      textjp: '現在の間合が4以下ならば、\n間合→ダスト：1\n逆風ならば、この矢印効果の左側を相手のフレアに変更する。'
    },
    {
      id: '17-hatsumi-o-n-5',
      namejp: '準備万端',
      name: '准备万全',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '虚（3）→我方装\n我方可以抽1张牌。\n如果当前为逆风，则本回合中手牌上限+1。',
      textjp: 'ダスト→自オーラ：3\nカードを1枚引いてもよい。\n逆風ならばこのターンの間、手札の上限が1増加する。'
    },
    {
      id: '17-hatsumi-o-n-6',
      namejp: '羅針盤',
      name: '罗盘',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '【展开中】从我方的《攻击》中追加攻击距离5，从对方的《攻击》中去除攻击距离5。该效果多重抵消。（结算时，首先结算追加或者去除攻击距离，随后结算延势或者抑势）\n【弃置时】虚（1）→我方装',
      textjp: '【展開中】あなたの《攻撃》に適正距離5を追加し、相手の《攻撃》から適正距離5を取り除く。この効果が重複したら相殺する。（距離拡大、距離縮小より先に適用する）\n【破棄時】ダスト→自オーラ：1'
    },
    {
      id: '17-hatsumi-o-n-7',
      namejp: '波呼び',
      name: '唤潮',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '1',
      text: '【展开中】本卡牌上的樱花结晶仅会在我方回合且当前为顺风状态时移动。\n【展开中/弃置时】我方回合开始阶段开始时，以及本卡牌弃置时，可以选择1张盖牌，并将其放到牌库顶。\n【弃置时】执行最多1次基本动作，并且进行『攻击距离2-7，1/-』的攻击。',
      textjp: '【展開中】あなたのターンかつ順風である場合のみこのカードの上の桜花結晶は移動する。\n【展開中/破棄時】あなたの開始フェイズの開始時と破棄時に伏せ札を1枚選び、山札の上に置いてもよい。\n【破棄時】基本動作を1回まで行い、攻撃『適正距離2-7、1/-』を行う。'
    }],
    special: [{
      id: '17-hatsumi-o-s-1',
      namejp: 'イサナ海域',
      name: '鲸群海域',
      baseType: 'special',
      cost: '4',
      types: ['attack'],
      range: '3-5',
      damage: '3/1',
      text: '【常时】如果当前为顺风状态则本《攻击》获得+0/+2。\n【攻击后】如果当前为逆风状态则进行虚（2）→距的处理，随后将本卡牌设为未使用状态。',
      textjp: '【常時】順風ならば、この《攻撃》は+0/+2となる。\n【攻撃後】逆風ならば、\nダスト→間合：2\nを行い、このカードを未使用に戻す。'
    },
    {
      id: '17-hatsumi-o-s-2',
      namejp: 'オヨギビ砲火',
      name: '飞鱼炮火',
      baseType: 'special',
      cost: '2',
      types: ['attack'],
      range: '5-6',
      damage: '2/2',
      text: '【常时】本卡牌重新设为未使用状态时，我方可以执行1次基本动作。\n----\n【即再起】对方回合中，当前距较回合开始距接近了2或以上时。',
      textjp: '【常時】このカードが未使用に戻った時、基本動作を1回行ってもよい。\n----\n【即再起】相手のターンに現在の間合はターン開始時の間合から2以上近付く。'
    },
    {
      id: '17-hatsumi-o-s-3',
      namejp: 'カラハリ灯台',
      name: '司南灯塔',
      baseType: 'special',
      cost: '1',
      types: ['action'],
      text: '如果当前不为逆风状态，则我方畏缩。\n【使用后】近身距离扩大1。\n【使用后】对方回合中，如果对方从手牌中使用《攻击》牌以外的卡牌时，舍弃其所使用的卡牌并且不处理卡牌的效果。随后，将本卡牌设为未使用状态。',
      textjp: '逆風でないならば、あなたは畏縮する。\n【使用済】達人の間合は1大きくなる。\n【使用済】相手のターンに相手が《攻撃》でないカードを手札から使用したならば、それを解決する代わりに捨て札に置き、このカードを未使用に戻す。'
    },
    {
      id: '17-hatsumi-o-s-4',
      namejp: 'ミオビキ航路',
      name: '津渠航路',
      baseType: 'special',
      cost: '2',
      types: ['action'],
      text: '如果当前为逆风状态则对方畏缩，并且公开对方牌库顶的1张卡牌。如果被公开的卡牌为《攻击》牌则舍弃该卡牌。\n【使用后】我方开始阶段开始时如果为逆风状态，则我方可以免费再次使用本卡牌。',
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
      text: '破绽\n【展开时】进行潜水。\n【弃置时】进行『攻击距离1-7，-/1，无法对应』的攻击。',
      textjp: '隙\n【展開時】潜水を行う。\n【破棄時】攻撃『適正距離1-7、-/1、対応不可』を行う。'
    }],
    changespecial: [{
      changeIndex: '1',
      id: '17-hatsumi-a1-s-1',
      name: '狭雾海域',
      namejp: 'サギリ海域',
      types: ['enhance', 'reaction'],
      capacity: '4',
      cost: '3',
      text: '【展开中】在对方回合中，攻击距离有3项或以上的对方的《攻击》，除了最大项以及最小项以外，失去所有攻击距离。\n（例如，攻击距离3-5则变为攻击距离3,5）',
      textjp: '【展開中】相手のターン中、適正距離を3つ以上持つ相手の《攻撃》はその中から最小と最大の値を除いて全ての適正距離を失う。\n（例えば3-5ならば3,5になる）'
    }, {
      changeIndex: '4',
      id: '17-hatsumi-a1-s-4',
      name: '远洋航路',
      namejp: 'ワダナカ航路',
      types: ['enhance'],
      capacity: '2',
      cost: '2',
      text: '【展开时】进行潜水，对手畏缩。\n【弃置时】如果当前为顺风状态，对对方装和对方命造成1点伤害。\n----\n【再起】当前为逆风状态。',
      textjp: '【展開時】潜水を行い、相手を畏缩させる。\n【破棄時】順風ならば、相手のオーラとライフに1ダメージを与える。\n----\n【再起】逆風である。'
    }],
    changeExtra: [{
      id: '17-hatsumi-a1-di1',
      name: '潜水前进',
      namejp: '潜水前進',
      text: '本回合中，当前距减少1点，且近身距离缩小1。\n随后，如果《攻击》牌导致本卡面翻面，立即进行距离判定。如果因此导致当前进行的《攻击》失败，则不处理《攻击》效果，并且下一回合我方变为顺风状态。失败的《攻击》如果为通常牌则舍弃，王牌则设为使用完毕的状态。无法对失败的《攻击》进行对应。',
      textjp: 'このターン中、現在の間合は1減少し、達人の間合は1小さくなる。\nその後、これを公開させた《攻撃》があるならば直ちに間合を判定する。それが外れたならば《攻撃》を失敗として解決せずに終了し、次のターンにあなたは順風となる。\n《攻撃》が通常札によるものならば捨て札に、切札よるものならば使用済になる。失敗した《攻撃》への対応はできない。'
    }, {
      id: '17-hatsumi-a1-di2',
      name: '潜水后退',
      namejp: '潜水後退',
      text: '本回合中，当前距增加1点，且近身距离扩大1。\n随后，如果《攻击》牌导致本卡面翻面，立即进行距离判定。如果因此导致当前进行的《攻击》失败，则不处理《攻击》效果，并且下一回合我方变为顺风状态。失败的《攻击》如果为通常牌则舍弃，王牌则设为使用完毕的状态。无法对失败的《攻击》进行对应。',
      textjp: 'このターン中、現在の間合は1増加し、達人の間合は1大きくなる。\nその後、これを公開させた《攻撃》があるならば直ちに間合を判定する。それが外れたならば《攻撃》を失敗として解決せずに終了し、次のターンにあなたは順風となる。\n《攻撃》が通常札によるものならば捨て札に、切札よるものならば使用済になる。失敗した《攻撃》への対応はできない。'
    }]
  }]
},
{
  name: 'MIZUKI 水津城',
  namejp: 'ミズキ',
  desc: '统率～兵舍中包含4张卡牌（2张「枪兵」，「盾兵」，「骑兵」）。',
  descjp: '統率～兵舎に4枚のカード（「槍兵」2枚「盾兵」「騎兵」）を持つ。',
  list: [{
    name: '兜',
    namejp: '兜',
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
      text: '【常时】如果我方在上一回合中进行过对应，则本《攻击》获得+2/+1。\n全开（主要阶段，若你选择执行全力行动，则我方可以如使用《全力》牌一样使用此牌。如果这么做，则此牌额外获得以下效果）：【常时】本《攻击》获得+1/+1。',
      textjp: '【常時】あなたが直前のターンに対応しているならば、この《攻撃》は+2/+1となる。\n全力化：【常時】この《攻撃》は+1/+1となる。'
    },
    {
      id: '18-mizuki-o-n-3',
      namejp: '撃ち落とし',
      name: '攻陷',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '1-5',
      damage: '1/1',
      text: '【攻击后】不动～如果本回合中距没有发生过变化，则打消受到对应的《全力》以外且王牌以外的《攻击》。（本卡牌视为菰珠的卡牌）',
      textjp: '【攻撃後】不動‐このターン中に現在の間合が変化していないならば、対応した《全力》でも切札でもない《攻撃》を打ち消す。\n（このカードはコダマのカードとして扱う）'
    },
    {
      id: '18-mizuki-o-n-4',
      namejp: '号令',
      name: '号令',
      baseType: 'normal',
      types: ['action'],
      text: '进行1次征兵。\n如果我方在上一回合中进行过对应，则我方获得1点集中力。',
      textjp: '徴兵を1回行う。\nあなたが直前のターンに対応しているならば、集中力を1得る。'
    },
    {
      id: '18-mizuki-o-n-5',
      namejp: '防壁',
      name: '防壁',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '终止\n如果本次对应为当前回合我方进行的第1次对应，则打消受到对应的《全力》以外且王牌以外的《攻击》。',
      textjp: '終端\nこのカードがこのターンであなたが行う最初の対応ならば、対応した切札でも《全力》でもない《攻撃》を打ち消す。'
    },
    {
      id: '18-mizuki-o-n-6',
      namejp: '制圧前進',
      name: '压制前进',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '我方选择下列项合计3次，可以多次选择同一项。\n1.进行1次征兵；\n2.执行1次基本动作《前进》；\n3.执行1次基本动作《装附》。',
      textjp: '以下を３回選ぶ。同じものを複数回選んでもよい。\n・徴兵を１回行う。\n・基本動作《前進》を行う。\n・基本動作《纏い》を行う。'
    },
    {
      id: '18-mizuki-o-n-7',
      namejp: '戰場',
      name: '战场',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '【展开中】不动～我方在回合中首次使用王牌以外的《攻击》时，如果本回合中距没有发生过变化，则该《攻击》获得+1/+1。（本卡牌视为菰珠的卡牌）',
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
      text: '终止\n【展开时】打消受到对应的《攻击》。\n【展开中】我方其他女神或者兵员的《攻击》获得+0/+1。',
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
      text: '【常时】如果我方在本回合中进行过攻击，则无法使用本卡牌。\n----\n【即再起】我方使用带有终止特性的卡牌时。（处理带有终止特性的卡牌之前进行再起）',
      textjp: '【常時】あなたがこのターン中に攻撃しているならば、このカードは使用できない。\n----\n【即再起】あなたが終端を持つカートを使用する。（解決より前に再起する）'
    },
    {
      id: '18-mizuki-o-s-3',
      namejp: '大手楯無門',
      name: '大手楯无门',
      baseType: 'special',
      cost: '3',
      types: ['action'],
      text: '终止\n将我方1张手牌以及追加牌区域中的「斗神」放入兵舍并设为征兵状态。进行1次征兵。\n【使用后】我方从兵舍中使用的《攻击》牌产生的《攻击》获得+1/+0。我方从兵舍中使用的《对应》牌失去终止特性。',
      textjp: '終端\n追加札の「闘神」と手札のカード1枚を選び、それらを兵舎に徴兵済で置く。徴兵を1回行う。\n【使用済】あなたが兵舎から使用した《攻撃》カードによる《攻撃》は+1/+0となる。あなたが兵舎から使用した《対応》カードは終端を失う。'
    },
    {
      id: '18-mizuki-o-s-4',
      namejp: '山城水津城の鬨の声',
      name: '山城水津城的战吼',
      baseType: 'special',
      cost: '5',
      types: ['enhance', 'fullpower'],
      capacity: '5',
      text: '【展开中】原本带有终止特性的我方通常牌以及兵员牌失去终止特性。\n【展开中】原本次要类型为《全力》的我方通常牌失去次要类型《全力》，并且获得终止特性。',
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
        text: '【常时】不动～如果本回合中距没有发生过变化，则本《攻击》获得+0/+1。\n【攻击后】将本卡牌放入追加牌区域。\n（本卡牌视为菰珠的卡牌）',
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
        text: '终止\n【常时】如果我方在上一回合中进行过对应，则本《攻击》获得+1/+0。',
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
        text: '终止\n【常时】如果我方在上一回合中进行过对应，则本《攻击》获得+1/+0。',
        textjp: '終端\n【常時】あなたが直前のターンに対応しているならば、この《攻撃》は+1/+0となる。'
      },
      {
        id: '18-mizuki-o-t-2',
        name: '盾兵',
        namejp: '盾兵',
        baseType: 'soldier',
        types: ['action', 'reaction'],
        text: '终止\n受到对应的非《全力》的《攻击》获得-1/+0。',
        textjp: '終端\n対応した《全力》でない《攻撃》は-1/+0となる。'
      },
      {
        id: '18-mizuki-o-t-3',
        name: '骑兵',
        namejp: '騎兵',
        baseType: 'soldier',
        types: ['enhance'],
        capacity: '2',
        text: '终止\n【展开中】对方的《攻击》失去无法对应特性。\n【弃置时】我方获得1点集中力。',
        textjp: '終端\n【展開中】相手の《攻撃》は対応不可を失う。\n【破棄時】あなたは集中力を1得る。'
      }]
  }]
}, {
  name: 'MEGUMI 希',
  namejp: 'メグミ',
  desc: '异樱～土壤区域有5片种结晶',
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
      text: '【常时】我方土壤区域上所有的种结晶都为发芽状态则本《攻击》获得+1/+1。'
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
      text: '【常时】我方付与牌上拥有种结晶则本《攻击》获得+1/+1。'
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
      text: '【攻击后】本回合我方下一次使用的其他女神的《付与》牌获得培育2。'
    },
    {
      id: '19-megumi-o-n-4',
      namejp: '棹穿ち',
      name: '枷穿',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '2-4',
      damage: '1/1',
      textjp: '【常時】この《攻撃》のダメージにより移動する桜花結晶は、ダストやフレアでなく間合に移動する。\n【攻撃後】あなたが付与札を出しているならば、このターンに相手が行う次の基本動作は効果を解決しない。',
      text: '【常时】处理本《攻击》所造成的伤害时，将樱花结晶移动至距，而不是虚或者气。\n【攻击后】如果我方场上存在付与牌，则本回合内对方执行的下一个基本动作不作处理。'
    },
    {
      id: '19-megumi-o-n-5',
      namejp: '葦',
      name: '苇',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '1',
      capacityGrowup: '1',
      textjp: '生育１\n【展開時】ダスト → 間合 :１。\n【展開中】現在の間合はX増加し、達人の間合はX大きくなる。Xはこの付与札の上の種結晶の個数に等しい。',
      text: '培育1\n【展开时】虚（1）→距。\n【展开中】当前距增加X，并且近身距离扩大X。X为本付与牌上种结晶的数量。'
    },
    {
      id: '19-megumi-o-n-6',
      namejp: '鳳仙花',
      name: '凤仙花',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '1',
      capacityGrowup: '2',
      textjp: '生育 2 隙\n【展開中】相手のメインフェイズの開始時に攻撃『適正距離3-5、2/1』を行う。あなたのメインフェイズの開始時に攻撃『適正距離1-3、2/1 』を行う。\n【破棄時】相手を畏縮させる。',
      text: '培育2 破绽\n【展开中】对方的主要阶段开始时，进行『攻击距离3-5、2/1』的攻击。我方的主要阶段开始时，进行『攻击距离1-3、2/1』的攻击。\n【弃置时】对方畏缩。'
    },
    {
      id: '19-megumi-o-n-7',
      namejp: '野茨',
      name: '野棘',
      baseType: 'normal',
      types: ['enhance', 'fullpower'],
      capacity: '0',
      capacityGrowup: '2',
      textjp: '生育 2\n【展開時/展開中】展開時とあなたの終了フェイズに基本動作を1回行ってもよい。\n【展開中】相手が各ターンに初めて間合にある桜花結晶を動かした時、ダスト → 間合 :１。\n【展開中】相手のターンにこの付与札の上の桜花結晶は移動しない。',
      text: '培育2\n【展开时/展开中】展开时以及我方结束阶段时，我方可以执行1个基本动作。\n【展开中】对方在每回合首次移动距中的樱花结晶时，\n虚（1）→距。\n【展开中】本卡牌上放置的樱花结晶在对方回合中不会移动。'
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
      text: '【攻击后】我方土壤区域上的1片种结晶变为发芽状态。\n----\n【再起】我方土壤区域上没有发芽的种结晶。'
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
      text: '培育1\n\n【常时】X等于所有《付与》牌上我方种结晶数量的合计值。\n【展开时】受到对应的《攻击》获得-X/+0。\n【展开中】对方回合开始阶段开始时，进行『攻击距离1-5，0/1，【常时】本攻击获得+X/+0』的攻击。'
    },
    {
      id: '19-megumi-o-s-3',
      namejp: '結末の果実',
      name: '通始末之实',
      baseType: 'special',
      types: ['enhance'],
      capacity: '2',
      cost: '4',
      textjp: '【展開中】この付与札の上の桜花結晶はメインフェイズに移動しない。開始フェイズの処理であなたの他の付与札から桜花結晶がよダストへと送られるならば、それは代わりにこの付与札へと移動する。\n【展開中】この付与札の上の種結晶が5個になったターンの終了フェイズに、攻撃『適正距離5、5/5、不可避、【常時】この《攻撃》は打ち消されない』を行い、このカードの上の桜花結晶を全てダストに送る。',
      text: '【展开中】本卡牌上放置的樱花结晶在主要阶段时不会移动。回合开始阶段处理时，我方其他付与牌上的樱花结晶移至虚的处理改为移动至本卡牌上。\n【展开中】本卡牌上的种结晶达到5片时，在该回合的回合结束阶段进行『攻击距离5，5/5，锁定，【常时】本《攻击》无法被打消』的《攻击》，随后将本卡牌上所有的樱花结晶移至虚。'
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
      text: '培育5\n【展开中】我方每回合首次进行对装伤害为3或以下的《攻击》时，该《攻击》获得+1/+1。'
    }]
  }]
},
{
  name: 'KANAWE 叶慧',
  namejp: 'カナヱ',
  desc: '神语～从故事板块的白幕开始讲述英雄谭。完成构想后可以移至下一幕，一旦到达终幕则我方获得胜利。',
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
      text: '【常时】X等于当前幕数值的一半（向上取整）。\n【攻击后】当前幕数值为偶数则\n距（1）⇔虚',
      textjp: '【常時】Xは現在の幕の値の半分（切り上げ）に等しい。\n【攻撃後】現在の幕の値が偶数ならば、間合↔ダスト：1。'
    },
    {
      id: '20-kanawe-o-n-2',
      name: '定场',
      namejp: '脚本化',
      baseType: 'normal',
      types: ['attack'],
      range: '2-8',
      damage: '0/0',
      text: '【攻击后】我方可以从追加牌区域选择并准备1张构想牌。\n【常时】在我方结束阶段时，可以将本卡牌从弃牌放入牌库底。如果这么做，对方获得1点集中力。',
      textjp: '【攻撃後】追加札から構想カードを1枚準備してもよい。\n【常時】あなたの終了フェイズにこのカードを捨て札から山札の底に置いてもよい。そうした場合、相手は集中力を1得る。'
    },
    {
      id: '20-kanawe-o-n-3',
      name: '垛句',
      namejp: '演出化',
      baseType: 'normal',
      types: ['attack'],
      range: '2-3',
      damage: '2/1',
      text: '【常时】当前幕如果为【紫】，本《攻击》获得+0/+1。\n【攻击后】我方在本回合中无法继续推进构想。',
      textjp: '【常時】現在の幕の色が紫ならば、この《攻撃》は+0/+1となる。\n【攻撃後】あなたはこのターンに構想を進められない。'
    },
    {
      id: '20-kanawe-o-n-4',
      name: '赋赞',
      namejp: '断行',
      baseType: 'normal',
      types: ['action'],
      text: '我方可以执行1次基本动作《装附》。随后，可以再执行1次《装附》以外的基本动作。\n全开：我方可以从追加牌区域或者已完成区域选择并准备1张构想牌。对方畏缩。',
      textjp: '基本動作《纏い》を1回行ってもよい。その後、《纏い》以外の基本動作を1回行ってもよい。\n全力化：追加札または達成済から構想カードを1枚準備してもよい。相手を畏縮させる。'
    },
    {
      id: '20-kanawe-o-n-5',
      name: '砌末',
      namejp: '残光',
      baseType: 'normal',
      types: ['action'],
      text: '当前幕如果为【紫】或者【绿】，则我方查看对方的手牌，从中选择1张卡牌并将其放入对方牌库底。对方获得1点集中力。',
      textjp: '現在の幕の色が紫または緑ならば、相手の手札を見てその中から1枚を選び、それを山札の底に置く。相手は集中力を1得る。'
    },
    {
      id: '20-kanawe-o-n-6',
      name: '即兴',
      namejp: '即興',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '我方可以从手牌中选择并使用1张全力牌以外的其他女神的《攻击》牌。此时，如果本卡牌正在对应《攻击》。则视作所选的卡牌也在对应该《攻击》。随后，当前幕如果为【绿】并且所选卡牌处理后变为弃牌，将所选卡牌从弃牌放入手牌。',
      textjp: '手札から他のメガミの全力でない《攻撃》カードを1枚使用してもよい。このカードが対応している《攻撃》があるならば、使用されたカードはそれに対応しているものと扱う。現在の幕の色が緑かつそのカードが捨て札にあるならば、そのカードを手札に戻す。'
    },
    {
      id: '20-kanawe-o-n-7',
      name: '封杀',
      namejp: '封殺',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '【展开时】声明1张卡牌的卡牌名称。\n【展开中】在对方回合中，对方无法使用我方所声明的卡牌名称的王牌。当前幕如果为【红】，对方无法使用我方所声明的卡牌名称的通常牌。\n【弃置时】我方获得1点集中力。',
      textjp: '【展開時】カードの名前を1つ宣言する。\n【展開中】相手のターン中、相手は宣言された名前を持つ切札を使用できない。現在の幕の色が赤ならば、宣言された名前を持つ通常札も使用できない。\n【破棄時】あなたは集中力を1得る。'
    }],
    special: [
      {
        id: '20-kanawe-o-s-1',
        name: '疾书弗尽尺璧阴',
        namejp: 'たまゆらふみ',
        baseType: 'special',
        cost: '1',
        types: ['action'],
        text: '我方可以支付1点集中力。如果这么做，从追加牌区域或者已完成区域选择并准备1张构想牌，选择已完成区域的构想牌时，移除本卡牌。\n【使用后】对方回合开始阶段开始时，如果我方在上一回合没有推进构想，则将本卡牌重新设为未使用状态。',
        textjp: '集中力を1支払ってもよい。そうした場合、追加札または達成済から構想カードを1枚準備する。達成済から準備したらこのカードを取り除く。\n【使用済】相手の開始フェイズの開始時に、あなたが直前のターンに構想を進めていないならば、このカードを未使用に戻す。'
      },
      {
        id: '20-kanawe-o-s-2',
        name: '芳颜无常辉灯影',
        namejp: 'ほかげきらぼし',
        baseType: 'special',
        cost: 'X',
        types: ['action'],
        text: '【常时】X为当前幕的数值。\n当前幕如果为【绿】、【红】或【紫】，获得其对应的效果。\n----\n【即再起】进入下一幕时。',
        textjp: '【常時】Xは現在の幕の値に等しい。\n現在の幕の色が緑、赤、紫のいずれかならば、その効果を得る。\n----\n【即再起】次の幕へ向かう。'
      },
      {
        id: '20-kanawe-o-s-3',
        name: '良宵讵待盛景盈',
        namejp: 'あたらよちよに',
        baseType: 'special',
        cost: '4',
        types: ['attack', 'reaction'],
        range: '0-4',
        damage: '2/1',
        text: '【攻击后】打消受到对应的王牌以外的《攻击》。如果对应的《攻击》为通常牌，则将所对应的卡牌放入对方的牌库顶。',
        textjp: '【攻撃後】対応した切札でない《攻撃》を打ち消す。\nその《攻撃》が通常札ならば、そのカードを山札の上に置く。'
      },
      {
        id: '20-kanawe-o-s-4',
        name: '知音难觅化境心',
        namejp: 'はらからのあまつそら',
        baseType: 'special',
        cost: '2',
        types: ['action'],
        text: '我方可以“从手牌中”选择并公开一张通常牌，随后移除公开的卡牌。如果这么做，从眼前构筑阶段未选择的通常牌中选择1张并公开，随后加入手牌\n移除本卡牌，随后从眼前构筑阶段未选择的王牌中选择1张，将其设为未使用状态。',
        textjp: 'あなたの手札から通常札を1枚公開し、それを取り除いてもよい。そうした場合、眼前構築で選んでいないあなたの通常札1枚を公開し、それを手札に加える。\nこのカードを取り除き、眼前構築で選んでいないあなたの切札1枚を未使用で得る。'
      }],
    extra: [{
      id: '20-kanawe-o-p-1',
      name: '杀阵',
      namejp: '殺陣',
      text: '本回合中合计进行了2次或以上《攻击》或者对应。（达成次数：2次）\n\n--意志（卡牌背面）--\n本回合中合计进行了5次或以上《攻击》或者对应。（达成次数：1次）',
      textjp: 'このターンに《攻撃》か対応が合計2回以上を行われた。（達成回数：2）\n\n--試練--\nこのターンに《攻撃》か対応が合計5回以上を行われた。（達成回数：1）'
    }, {
      id: '20-kanawe-o-p-2',
      name: '樱飞沫',
      namejp: '桜飛沫',
      text: '本回合中将3片或以上的樱花结晶一次性移动至付与牌以外的区域。（达成次数：1次）\n\n--意志（卡牌背面）--\n本回合中一次性移动了5片或以上的樱花结晶。（达成次数：1次）',
      textjp: 'このターンに3個以上の桜花結晶が付与札以外の領域へ一度に移動した。（達成回数：1）\n\n--試練--\nこのターンに5個以上の桜花結晶が一度に移動した。（達成回数：1）'
    }, {
      id: '20-kanawe-o-p-3',
      name: '鼓动',
      namejp: '鼓動',
      text: '本回合中命产生过变化。（达成次数：2次）\n\n--意志（卡牌背面）--\n本回合中命一次性产生了2点或以上的变化。（达成次数：1次）',
      textjp: 'このターンにライフが変化した。（達成回数：2）\n\n--試練--\nこのターンにライフが一度に2以上変化した。（達成回数：1）'
    }, {
      id: '20-kanawe-o-p-4',
      name: '明转',
      namejp: '明転',
      text: '本回合中处理过箭头效果。（达成次数：2次）\n\n--意志（卡牌背面）--\n本回合中处理了2次或以上的箭头效果。（达成次数：2次）',
      textjp: 'このターンに矢印効果を解決した。（達成回数：2）\n\n--試練--\nこのターンに矢印効果を2回以上解決した。（達成回数：2）'
    }, {
      id: '20-kanawe-o-p-5',
      name: '惊堂',
      namejp: '粒立て',
      text: '此卡牌并非本回合所准备的构想牌，且本回合中使用过《全力》牌。（达成次数：1次）\n\n--意志（卡牌背面）--\n此卡牌并非本回合所准备的构想牌，且本回合中使用过《全力》牌。（达成次数：2次）',
      textjp: 'このターンに準備されたのでなく、このターンに《全力》カードが使用された。（達成回数：1）\n\n--試練--\nこのターンに準備されたのでなく、このターンに《全力》カードが使用された。（達成回数：2）'
    }, {
      id: '20-kanawe-o-p-6',
      name: '圆场',
      namejp: '位置取り',
      text: '当前距较回合开始时的距产生了2点或以上的距离变化，且为8或以下。（达成次数：2次）\n\n--意志（卡牌背面）--\n当前距较回合开始时的距产生了5点或以上的距离变化。（达成次数：1次）',
      textjp: '現在の間合がターン開始時の間合から2以上変化し、かつ8以下である。（達成回数：2）\n\n--試練--\n現在の間合がターン開始時の間合から5以上変化している。（達成回数：1）'
    }],
    girlBoard: [{
      id: 'Story Board',
      name: '【物语板块】',
      namejp: '【物語ボード】',
      text: '<div class="story-board"><div class="story-board__row story-board__row--0"><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--1"><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--2"><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--3"><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--4"><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--5"><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--6"><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__info"><p>Start：开始</p><p>红：对对方命造成1点伤害。</p><p>紫：我方可以执行1次基本动作。</p><p>绿：我方从盖牌中选择1张卡牌并将其放入牌库底。</p><p>金：我方通过攻击牌所产生的《攻击》获得+0/+1。</p><p>End：特殊胜利</p></div></div>',
      textjp: '<div class="story-board"><div class="story-board__row story-board__row--0"><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--1"><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--2"><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--3"><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--4"><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--5"><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div><div class="story-board__item"><div class="txt"></div></div></div><div class="story-board__row story-board__row--6"><div class="story-board__item"><div class="txt"></div></div></div></div>'
    }]
  }]
},
{
  name: 'KAMUWI 神居',
  namejp: 'カムヰ',
  desc: '禁忌～当我方的禁忌槽为16点或以上时，我方输掉本局游戏。',
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
      text: '禁忌+1～【常时】本《攻击》获得+1/+1。',
      textjp: '＜禁忌+1＞【常時】この《攻撃》は+1/+1となる。\n----',
      textkururu: [{
        if: '<i class="i-jinji">禁忌+1</i>',
        ctn: '【常时】本《攻击》获得+1/+1。'
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
      damage: '3/1',
      text: '禁忌+1～【攻击后】如果对方装为4或以下，对对方装造成1点伤害。\n【攻击后】执行1次基本动作《装附》。',
      textjp: '＜禁忌+1＞【攻撃後】相手のオーラが4以下ならば、相手のオーラに1ダメージを与える。\n【攻撃後】基本動作《纏い》を1回行う。\n----',
      textkururu: [{
        if: '<i class="i-jinji">禁忌+1</i>',
        ctn: '【攻击后】如果对方装为4或以下，对对方装造成1点伤害。\n【攻击后】执行1次基本动作《装附》。'
      }],
      textkururujp: [{
        if: '<i class="i-jinji">禁忌+1</i>',
        ctn: '【攻撃後】相手のオーラが4以下ならば、相手のオーラに1ダメージを与える。\n【攻撃後】基本動作《纏い》を1回行う。'
      }]
    }, {
      id: '21-kamuwi-o-n-3',
      name: '四剑乱刃',
      namejp: '四剣乱刃',
      baseType: 'normal',
      types: ['attack'],
      range: '2-4',
      damage: '2/1',
      text: '禁忌+1～全开：【攻击后】进行3次『攻击距离2-4，1/1』的攻击。',
      textjp: '＜禁忌+1＞全开：【攻撃後】攻撃『適正距離2-4、1/1』を3回行う。\n----',
      textkururu: [{
        if: '<i class="i-jinji">禁忌+1</i>',
        ctn: '全开：【攻击后】进行3次『攻击距离2-4，1/1』的攻击。'
      }],
      textkururujp: [{
        if: '<i class="i-jinji">禁忌+1</i>',
        ctn: '全力化：【攻撃後】攻撃『適正距離2-4、1/1』を3回行う。'
      }]
    }, {
      id: '21-kamuwi-o-n-4',
      name: '挥砍',
      namejp: '斬り払い',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '1-4',
      damage: '1/1',
      text: '【常时】本卡牌必须作为对应才可以使用。\n禁忌+2～【攻击后】打消受到对应的《攻击》的伤害。如果借此打消《全力》牌或王牌的《攻击》的伤害，则禁忌槽提升2点。',
      textjp: '【常時】このカードは対応でしか使用できない\n----\n<禁忌+2>【攻撃後】対応した《攻撃》のダメージを打ち消す。その《攻撃》が《全力》または切札であるなら禁忌ゲージを2上げる。\n----',
      textkururu: [{
        ctn: '【常时】本卡牌必须作为对应才可以使用。'
      }, {
        if: '<i class="i-jinji">禁忌+2</i>',
        ctn: '【攻击后】打消受到对应的《攻击》的伤害。如果借此打消《全力》牌或王牌的《攻击》的伤害，则禁忌槽提升2点。'
      }],
      textkururujp: [{
        ctn: '【常時】このカードは対応でしか使用できない'
      }, {
        if: '<i class="i-jinji">禁忌+2</i>',
        ctn: '【攻撃後】対応した《攻撃》のダメージを打ち消す。その《攻撃》が《全力》または切札であるなら禁忌ゲージを2上げる。'
      }]
    }, {
      id: '21-kamuwi-o-n-5',
      name: '缝棘',
      namejp: '棘縫い',
      baseType: 'normal',
      types: ['action'],
      text: '根据当前的距离进行下述处理。\n5或以上…距（2）→虚\n2或以上且为4或以下…本回合中我方下次其他女神的且为王牌以外的《攻击》获得+1/+0以及（通常牌）无法对应。\n1或以下…虚（2）→距。',
      textjp: '現在の間合に応じて以下を行う。\n5以上…間合→ダスト：2。\n2以上4以下…このターンにあなたが次に行う他のメガミによる切札でない《攻撃》は+1/+0となり、対応不可（通常札）を得る。\n1以下…ダスト→間合：２。'
    }, {
      id: '21-kamuwi-o-n-6',
      name: '血晶乱流',
      namejp: '血晶乱流',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '我方选择下列项中不同的2项，并按照从上至下顺序执行。\n1.进行『攻击距离5-9，4/1』的攻击。\n2.当前距离为5或以上，则距（2）→虚\n3.进行『攻击距离2-4，2/2』的攻击。\n4.虚（2）→我方装',
      textjp: '以下から異なる2つを選び、上から順に行う。\n・攻撃『適正距離5-9、4/1』を行う。\n・現在の間合が5以上ならば、間合→ダスト:２。\n・攻撃『適正距離2-4、2/2』を行う。\n・ダスト→自オーラ：2。'
    }, {
      id: '21-kamuwi-o-n-7',
      name: '血飞沫',
      namejp: '血飛沫',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '禁忌+1～【展开时】进行『攻击距离3，2/2，锁定』的攻击。\n破绽\n【展开中】需要将樱花结晶移动至对方装时，改为移动至虚。一旦这么做，将1片樱花结晶从本卡牌上移至虚。',
      textjp: '＜禁忌+1＞【展開時】攻撃『適正距離3、2/2、不可避』を行う。\n----\n隙\n【展開中】相手のオーラへと桜花結晶が移動するならば、それは代わりにダストへと移動する。そうした場合、このカードの上から桜花結晶を1つダストに送る。',
      textkururu: [{
        if: '<i class="i-jinji">禁忌+1</i>',
        ctn: '【展开时】进行『攻击距离3，2/2，锁定』的攻击。'
      }, {
        ctn: '破绽\n【展开中】需要将樱花结晶移动至对方装时，改为移动至虚。一旦这么做，将1片樱花结晶从本卡牌上移至虚。'
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
      text: '禁忌+3～将我方气中所有的樱花结晶全部移至虚，并且我方命受到1点伤害。\n从追加牌区域以未使用状态获得「晓」。',
      textjp: '＜禁忌+3＞あなたのフレアにある桜花結晶すべてをダストに送り、あなたのライフに1ダメージを与える。\n追加札から「暁」を未使用で得る。\n----',
      textkururu: [{
        if: '<i class="i-jinji">禁忌+3</i>',
        ctn: '将我方气中所有的樱花结晶全部移至虚，并且我方命受到1点伤害。\n从追加牌区域以未使用状态获得「晓」。'
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
      text: '禁忌+2～【展开时】进行『攻击距离3-4，3/3，（通常牌）无法对应』的攻击，并且我方命受到1点伤害。\n【常时】本卡牌上放置有樱花结晶时，我方无法获得胜利。',
      textjp: '＜禁忌+2＞【展開時】攻撃『適正距離3-4、3/3、対応不可（通常札）』を行い、あなたのライフに1ダメージを与える。\n----\n【常時】このカードの上に桜花結晶が置かれているならば、あなたは勝利できない。',
      textkururu: [{
        if: '<i class="i-jinji">禁忌+2</i>',
        ctn: '【展开时】进行『攻击距离3-4，3/3，（通常牌）无法对应』的攻击，并且我方命受到1点伤害。'
      }, {
        ctn: '【常时】本卡牌上放置有樱花结晶时，我方无法获得胜利。'
      }],
      textkururujp: [{
        if: '<i class="i-jinji">禁忌+2</i>',
        ctn: '【展開時】攻撃『適正距離3-4、3/3、対応不可（通常札）』を行い、あなたのライフに1ダメージを与える。'
      }, {
        ctn: '【常時】このカードの上に桜花結晶が置かれているならば、あなたは勝利できない。'
      }]
    }
    , {
      id: '21-kamuwi-o-s-3',
      name: '尸',
      namejp: '尸',
      cost: '1',
      baseType: 'special',
      types: ['attack', 'reaction'],
      range: '0-6',
      damage: '0/0',
      text: '【攻击后】本回合内，对方下次使用与受到本卡牌对应的《攻击》属于同一女神的卡牌时，必须从手牌舍弃1张该女神的卡牌作为额外费用。\n----\n【即再起】我方禁忌槽点数变为6的倍数时。',
      textjp: '【攻撃後】このターン中、このカードが対応した《攻撃》を行ったメガミのカードを相手が次に使用するならば、追加コストとして手札からそのメガミのカードを1枚を捨て札にしなくてはならない。\n----\n【即再起】あなたの禁忌ゲージが6の倍数になる。'
    }
    , {
      id: '21-kamuwi-o-s-4',
      name: '理',
      namejp: '理',
      cost: '3',
      baseType: 'special',
      types: ['action'],
      text: '【常时】必须在我方命为6或以下时，才可以使用本卡牌。\n虚（1）→我方命\n【使用后】对方使用类型为《行动》的王牌时，必须从手牌舍弃1张与所使用王牌属于同一女神的卡牌作为额外费用。',
      textjp: '【常時】あなたのライフが6以下でないと、このカードは使用できない。\nダスト→自ライフ：1。\n【使用済】相手が《行動》の切札を使用するならば、追加コストとして手札から同一のメガミのカード1枚を捨て札にしなくてはならない。'
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
      text: '超克\n【常时】如果本《攻击》受到通常牌对应，则舍弃该对应牌并且不处理卡牌的效果，改为本《攻击》获得-1/+0。如果受到王牌对应，则将其设为使用完毕状态并且不处理卡牌的效果，改为本《攻击》获得-1/-1。\n【攻击后】移除本卡牌。',
      textjp: '超克\n【常時】この《攻撃》が通常札に対応されたならば、それを解決する代わりに捨て札に置き、この《攻撃》を-1/+0する。切札に対応されたならば、それを解決する代わりに使用済にし、この《攻撃》を-1/-1する。\n【攻撃後】このカードを取り除く。'
    }]
  }]
},
{
  name: 'RENRI 恋离',
  namejp: 'レンリ',
  desc: '伪证～在标准情况下使用通常牌时可以进行伪证，每种带有伪证特性的卡牌每回合都可以用此法声明1次。如未受到反驳，则按照所声明的伪证牌使用，随后盖伏。如受到反驳，伪证为假则无法使用卡牌并舍弃。证据为真则对方触发1次焦躁，随后再使用卡牌。',
  descjp: '偽証～通常札を通常の方法で使うならば、偽証を持つ各カードとして1回ずつ偽証できる。反証されなければ偽証通り使用して伏せ札にする。反証され、偽物なら使用できず捨て札となる。本物なら相手は焦燥を受け、カードも使用する。',
  list: [{
    name: '衣',
    namejp: '衣',
    isSelect: false,
    pic: 'twiicon_sa_39.jpg',
    picq: 'sd_renri.png',
    normal: [{
      id: '22-renri-o-n-1',
      name: '妄言',
      namejp: '嘘突き',
      baseType: 'normal',
      types: ['attack'],
      range: '1-2',
      damage: '2/1',
      text: '伪证\n【常时】如果本伪证没有受到对方反驳，则我方可以选择公开本卡牌。如果证据为假，则对方无法选择装受到伤害。\n（选择公开本卡牌则处理完毕后舍弃）',
      textjp: '偽証\n【常時】この偽証が反証されなかったならば、このカードを公開してもよい。それが偽物だったならば、相手はオーラへのダメージを選べない。\n（公開したならば解決後に捨て札になる）'
    }, {
      id: '22-renri-o-n-2',
      name: '惯骗',
      namejp: '都度討ち',
      baseType: 'normal',
      types: ['attack'],
      range: '3-5',
      damage: '2/1',
      text: '伪证\n我方的弃牌以及付与牌中合计有3张或以上通常牌时，本《攻击》获得+1/+0。',
      textjp: '偽証\n【常時】あなたの捨て札と付与札に通常札が合計3枚以上あるならば、この《攻撃》は+1/+0となる。'
    }, {
      id: '22-renri-o-n-3',
      name: '批贬',
      namejp: '玄塗り',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '1-5',
      damage: '1/2',
      text: '伪证（进行对应时无法使用伪证特性）\n【攻击后】如果本回合曾从虚中移出过樱花结晶，则受到对应的《攻击》进行下述处理。\n该《攻击》的对装的伤害为3或以上则获得-1/+0；否则获得+0/-1。',
      textjp: '偽証（偽証は対応では行えない）\n【攻撃後】このターン中にダストから桜花結晶が移動しているならば、対応した《攻撃》に以下を行う。\nその《攻撃》はオーラへのダメージが3以上ならば-1/+0、そうでないならば+0/-1となる。'
    }, {
      id: '22-renri-o-n-4',
      name: '乱煽风',
      namejp: '煽り殺陣',
      baseType: 'normal',
      types: ['action'],
      text: '对手畏缩。\n如果本回合中对方曾反驳失败，则我方可以选择弃牌中带有伪证特性的1张卡牌，并将其放入手牌。',
      textjp: '相手を畏縮させる。\nこのターン中に相手が反証に失敗しているならば、あなたの捨て札にある偽証を持つカードを1枚を選び、手札に戻してもよい。'
    }, {
      id: '22-renri-o-n-5',
      name: '摄念',
      namejp: '雲喰い',
      baseType: 'normal',
      types: ['action'],
      text: '伪证\n如果我方弃牌以及付与牌中合计有3张或以上通常牌，则对方选择并盖伏1张手牌。如果对方无法盖伏手牌，则对方畏缩。\n【常时】反驳本卡牌时，如果证据为真，则对方由于反驳失败而触发的焦躁由1次改为2次。',
      textjp: '偽証\nあなたの捨て札と付与札に通常札が合計３枚以上あるならば、相手は手札を1枚伏せ札にする。伏せ札にしようとした上で行えないならば、相手を畏縮させる。\n【常時】この偽証に反証されてこのカードが本物だったならば、相手は焦燥を1回でなく2回受ける。'
    }, {
      id: '22-renri-o-n-6',
      name: '饵献',
      namejp: '魚吊り',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '伪证（进行对应时无法使用伪证特性）\n距（1）→虚',
      textjp: '偽証（偽証は対応では行えない）\n間合→ダスト：1。'
    }, {
      id: '22-renri-o-n-7',
      name: '蛊惑',
      namejp: '惹き騙り',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '【展开时/弃置时】若当前距为2或以上则距（1）→虚',
      textjp: '【展開時/破棄時】現在の間合が2以上ならば、間合→ダスト：1。'
    }],
    special: [{
      id: '22-renri-o-s-1',
      name: '乱语颠鸾',
      namejp: 'ルルララリ',
      cost: '4',
      baseType: 'special',
      types: ['attack'],
      range: '0-10',
      damage: '1/2',
      text: '【常时】本《攻击》造成伤害时，如果本回合中对方曾反驳失败，则对方必须同时结算两边的伤害。\n【使用后】在我方结束阶段时，对对方装造成1点伤害，随后将本卡牌设为未使用状态。',
      textjp: '【常時】この《攻撃》がダメージを与えるに際してこのターン中に相手が反証に失敗しているならば、相手は片方を選ぶのでわなく両方のダメージを受ける。\n【使用済】あなたの終了フェイズに相手のオーラに1ダメージを与え、このカードを未使用に戻す。'
    }, {
      id: '22-renri-o-s-2',
      name: '论据轮换',
      namejp: 'ラナラロミレリラ',
      cost: '4',
      baseType: 'special',
      types: ['action', 'reaction'],
      text: '【常时】本卡牌必须作为对应才可以使用。\n我方查看对方手牌，并且可以从中选择1张其他女神的且为《全力》牌以外的卡牌。如果这么做，则使用或盖伏所选择的卡牌。选择使用卡牌，则视作所选的卡牌也在对应本卡牌正在对应的《攻击》。',
      textjp: '【常時】このカードは対応でしか使用できない。\n相手の手札を見て、《全力》でない他のメガミのカード1枚を選んでもよい。そうした場合、そのカードを使用するか伏せ札にする。使用されたカードはこのカードが対応している《攻撃》に対応しているものと扱う。'
    }, {
      id: '22-renri-o-s-3',
      name: '良师典犯',
      namejp: 'オリレテラレル',
      cost: '2',
      baseType: 'special',
      types: ['action', 'reaction'],
      text: '选择1张眼前构筑阶段未选择的带有伪证特性的通常牌并公开，使用所选择的卡牌。随后移除所选择的卡牌。如果本卡牌正在对应《攻击》，则视作所选的卡牌也在对应该《攻击》。\n----\n【再起】我方弃牌以及付与牌中合计有3张或以上通常牌。',
      textjp: '眼前構築で選んでいないあなたの通常札から偽証を持つ1枚を公開し、それを使用する。その後、それを取り除く。このカードが対応している《攻撃》があるならば、使用されたカードはそれに対応しているものと扱う。\n----\n【再起】あなたの捨て札と付与札に通常札が合計3枚以上ある。'
    }, {
      id: '22-renri-o-s-4',
      namejp: '夜山恋離のなれの果て',
      name: '夜山恋离的落幕',
      baseType: 'special',
      cost: '1',
      types: ['enhance'],
      capacity: '3',
      text: '终止\n【展开时】从追加牌区域以未使用的状态获得『铭衣』。\n【展开中】本付与牌上放置的樱花结晶仅在进行我方回合开始阶段的处理时才可以移动。',
      textjp: '終端\n【展開時】追加札から「刻まれし衣」を未使用で得る。\n【展開中】この付与札の上の桜花結晶はあなたの開始フェイズの処理でしか移動しない。'
    }],
    extra: [{
      id: '22-renri-o-s-4-ex1',
      extraFrom: '22-renri-o-s-4',
      name: '铭衣',
      namejp: '刻まれし衣',
      baseType: 'special',
      cost: 'X',
      types: ['variable'],
      text: '【常时】根据所有权属于我方的『夜山恋离的落幕』上放置的樱花结晶数量，本卡牌视作下述卡牌的複制品。\n大于等于3…『久远之花』\n2…『完全论破』\n1…『夙愿』\n0…『御剑桐子的巫女神乐』',
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
      text: '【使用后】我方执行通过刃舞触发的基本动作《装附》时，可以选择执行基本动作《聚气》作为代替。\n【使用后】我方在本回合第3次刃舞处理完毕时，可以支付费用并使用本卡牌。',
      textjp: '【使用済】あなたが剣舞により基本動作《纏い》を行うならば、代わりに基本動作《宿し》を行ってもよい。\n【使用済】あなたがこのターンに3回目の剣舞を行った時、このカードを使用してもよい。（消費を支払う）'
    }]
  }]
},
{
  name: 'AKINA 安岐那',
  namejp: 'アキナ',
  desc: '行情~具有行情槽，行情的初始值为2。\n对对方命造成0点或以上伤害时：+1\n发行债券导致樱花结晶移动时：+1\n我方命受到0点或以上伤害时：-1\n赎回导致樱花结晶移动时：-2',
  descjp: '相場～相場ゲージを持ち、初期値は2である。\n相手のライフに0以上のダメージを与える：+ 1\n投資券により桜花結晶を動かす：+1\nあなたのライフに0以上のダメージを受ける：‐1\n回収により桜花結晶をを動かす：‐2',
  list: [{
    name: '算盘',
    namejp: '算盤',
    isSelect: false,
    pic: 'twiicon_sa_46_b.jpg',
    picq: 'sd_akina.png',
    normal: [{
      id: '23-akina-o-n-1',
      name: '算珠',
      namejp: '算盤玉',
      baseType: 'normal',
      types: ['attack'],
      range: '1-6',
      damage: '1/0',
      text: '【攻击后】我方选择下述1项执行。\n1.我方获得1点集中力；\n2.进行赎回；\n3.我方气（1）⇔我方流转',
      textjp: '【攻撃後】以下から1つを選ぶ。\n・あなたは集中力を1得る。\n・回収を行う。\n・自フレア↔自フロー：１。'
    }, {
      id: '23-akina-o-n-2',
      name: '恫吓',
      namejp: '恫喝',
      baseType: 'normal',
      types: ['attack'],
      range: '4-5',
      damage: '-/0',
      text: '债券\n【常时】我方资本大于对方资本时，本《攻击》获得+0/+1。',
      textjp: '投資券\n【常時】あなたの資本が相手の資本より大きいならば、この《攻撃》は+0/+1となる。'
    }, {
      id: '23-akina-o-n-3',
      name: '交易',
      namejp: '交易',
      baseType: 'normal',
      types: ['attack'],
      range: '1-5',
      damage: '2/0',
      text: '终止\n【攻击后】我方资本大于对方资本3点或以上时，从弃牌中选择最多1张其他女神的卡牌，将所选卡牌放回手牌。\n【攻击后】我方资本大于对方资本时，可以执行1次基本动作。',
      textjp: '終端\n【攻撃後】あなたの資本が相手の資本より3以上大きいならば、捨て札にある他のメガミのカード1枚までを選び、手札に戻す。\n【攻撃後】あなたの資本が相手の資本より大きいならば、基本動作を1回行ってもよい。'
    }, {
      id: '23-akina-o-n-4',
      name: '投机',
      namejp: '投機',
      baseType: 'normal',
      types: ['action'],
      text: '我方选择下述1项执行。\n1.我方装（2）→我方流转\n2.虚（2）→我方装',
      textjp: '以下から1つを選ぶ。\n・自オーラ→自フロー：２。\n・ダスト→自オーラ：２。'
    }, {
      id: '23-akina-o-n-5',
      name: '算法',
      namejp: '算法',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '我方获得1点集中力。\n本回合中，《攻击》的所有攻击距离减少1点。\n（例如：3-4变为2-3）',
      textjp: 'あなたは集中力を1得る。\nこのターン中、《攻撃》は全ての適正距離が1減少する。\n（例えば3‐4は2‐3となる）'
    }, {
      id: '23-akina-o-n-6',
      name: '翻盘',
      namejp: '盤狂わせ',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '距离限制（0-3）\n【展开时】对方气（2）→距\n【弃置时】距（1）→对方气',
      textjp: '間合制限（0‐3）\n【展開時】相フレア→間合：２。\n【破棄時】間合→相フレア：１。'
    }, {
      id: '23-akina-o-n-7',
      name: '直接金融',
      namejp: '直接金融',
      baseType: 'normal',
      types: ['enhance', 'fullpower'],
      capacity: '2',
      text: '债券\n【展开时】对方装（2）→我方装\n【弃置时】可以进行『攻击距离2-5 1/0』的攻击。',
      textjp: '投資券\n【展開時】相オーラ→自オーラ：２。\n【破棄時】攻撃『適正距離2-5、1/0』を行ってもよい。'
    }],
    special: [{
      id: '23-akina-o-s-1',
      name: '无限方程强贷法',
      namejp: '開方冥式切取法',
      baseType: 'special',
      cost: '時價',
      types: ['action'],
      text: '进行『攻击距离0-10 -/1，【常时】如果本《攻击》受到对应，打消本《攻击》。【常时】本《攻击》的伤害不会发生变化』的攻击。随后如果我方资本大于对方资本，使用本卡牌。\n（需要支付费用，费用不会由于时价以外的原因产生变化。）',
      textjp: '攻撃『適正距離0-10、‐/1、【常時】この《攻撃》が対応されたならば、この《攻撃》は打ち消される。【常時】この《攻撃》のダメージは変化しない』を行う。その後、あなたの資本が相手の資本より大きいならばこのカードを使用する。\n（消費は支払い、それは時価以外で加減されない）'
    }, {
      id: '23-akina-o-s-2',
      name: '珠算求根成交案',
      namejp: '大衍算顆手打表',
      baseType: 'special',
      cost: '0',
      types: ['attack', 'reaction'],
      range: '0-10',
      damage: '2/0',
      text: '【攻击后】我方气（1）→我方装\n我方流转（1）→我方装\n我方命（1）→我方装',
      textjp: '【攻撃後】\n自フレア→自オーラ：１。\n自フロー→自オーラ：１。\n自ライフ→自オーラ：１。'
    }, {
      id: '23-akina-o-s-3',
      name: '数列递推敛财术',
      namejp: '衰垜逐肘守料術',
      baseType: 'special',
      cost: '1',
      types: ['enhance'],
      capacity: '1',
      text: '【展开时】从我方命中移动4片樱花结晶至我方气。\n【展开中】本付与牌上的樱花结晶不会由于本卡牌效果之外的其他效果移动。\n【展开中】如果我方由于命降为0而输掉本局有戏时，改为从我方气中移动4片樱花结晶至我方命。随后，将本付与牌上所有的樱花结晶移至虚，移除本卡牌。',
      textjp: '【展開時】あなたのライフからフレアへと桜花結晶を4つ移動させる。\n【展開中】このカードの効果以外でこの付与札の上の桜花結晶は移動しない。\n【展開中】あなたのライフが0の時にあなたが敗北するならば、代わりにあなたのフレアからライフへと桜花結晶を4つ移動させる。\nその後、この上の桜花結晶を全てダストに送り、このカードを取り除く。'
    }, {
      id: '23-akina-o-s-4',
      name: '源上安岐那的高算',
      namejp: '源上安岐那の御明算',
      baseType: 'special',
      cost: '時價',
      types: ['action'],
      text: '距离限制（0-7） 债券\n我方可以进行赎回。如果这么做，执行最多2次《装附》，移除本卡牌。\n【使用后】我方回合开始阶段开始时，可以执行1次基本动作《聚气》。',
      textjp: '間合制限（0‐7）　投資券\n回収を行ってもよい。そうした場合、基本動作《纏い》を2回まで行い、このカードを取り除く。\n【使用済】あなたの開始フェイズの開始時に基本動作《宿し》を1回行ってもよい。'
    }]
  }]
},
{
  name: 'SHISUI 志水',
  namejp: 'シスイ',
  desc: '裂伤～我方的回合开始阶段开始时，可以按照任意顺序将每个区域中我方的裂伤指示物转为伤害。',
  descjp: '裂傷～あなたの開始フェイズの開始時に各領域にあるあなたの裂傷トークンを任意の順でダメージ化する。',
  list: [{
    name: '锯',
    namejp: '鋸',
    isSelect: false,
    pic: 'twiicon_sa_47_b.jpg',
    picq: 'sd_shisui.png',
    normal: [{
      id: '24-shisui-o-n-1',
      name: '锯斩',
      namejp: '鋸斬り',
      baseType: 'normal',
      types: ['attack'],
      range: '2-3',
      damage: '3/1',
      text: '',
      textjp: ''
    }, {
      id: '24-shisui-o-n-2',
      name: '刻刃',
      namejp: '刻み刃',
      baseType: 'normal',
      types: ['attack'],
      range: '2-3',
      damage: '1/1',
      text: '【攻击后】进行『攻击距离2-3 {1/2}，【常时】如果对方装中拥有的我方裂伤指示物数量大于或等于对方装时，对方无法选择装受到伤害』的攻击。',
      textjp: '【攻撃後】攻撃『適正距離2-3、{1/2}、【常時】相手のオーラに置かれたあなたの裂傷トークンの個数が相手のオーラ以上ならば、相手はオーラへのダメージを選べない』を行う。',
      isLacerationDamage: true
    }, {
      id: '24-shisui-o-n-3',
      name: '反乱击',
      namejp: '反乱撃',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '2-4',
      damage: '1/1',
      text: '【常时】本回合中我方受到过伤害，则本《攻击》获得+1/+1。\n【攻击后】本回合中我方受到过2次或以上伤害，则执行1次基本动作《装附》。',
      textjp: '【常時】あなたがこのターン中にダメージを受けているならば、この《攻撃》は+1/+1となる。\n【攻撃後】あなたがこのターン中にダメージを2回以上受けているならば、基本動作《纏い》を1回行う。'
    }, {
      id: '24-shisui-o-n-4',
      name: '彻底抗战',
      namejp: '徹底抗戦',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '1-7',
      damage: '2/3',
      text: '无法对应\n【攻击后】对手畏缩，我方选择我方装，气或者命受到1点裂伤。',
      textjp: '対応不可\n【攻撃後】相手を畏縮させ、あなたのオーラかフレアかライフに裂傷を1与える。',
      isLacerationDamage: true
    }, {
      id: '24-shisui-o-n-5',
      name: '棘途',
      namejp: '茨道',
      baseType: 'normal',
      types: ['action'],
      text: '距（2）→虚\n我方选择我方装或者气受到1点裂伤。如果当前距为0，则改为我方命受到1点裂伤。',
      textjp: '間合→ダスト：2。\nあなたのオーラかフレアに裂傷を1与える。現在の間合が0ならば、代わりにライフに裂傷を1与える。'
    }, {
      id: '24-shisui-o-n-6',
      name: '附金尘',
      namejp: '金屑纏い',
      baseType: 'normal',
      types: ['action'],
      text: '执行2次基本动作《装附》。随后，我方选择下述1项执行。\n1.我方与对方的装受到1点裂伤。\n2.我方与对方的气受到1点裂伤。',
      textjp: '基本動作《纏い》を2回行う。その後、以下から1つを選ぶ。\n・あなたと相手のオーラに裂傷を1与える。\n・あなたと相手のフレアに裂傷を1与える。'
    }, {
      id: '24-shisui-o-n-7',
      name: '披黑铠',
      namejp: '黒き鎧',
      baseType: 'normal',
      types: ['enhance', 'reaction'],
      capacity: '0',
      text: '【展开时】从虚中拿取X片樱花结晶，放置在本卡牌上。X等于我方本回合受到伤害次数的2倍。如果X的结果为4或以上，则额外再放置1片。\n【展开中】对手的《攻击》获得+0/-1，处理完毕之后，将2片樱花结晶从本付与牌移至虚。',
      textjp: '【展開時】このカードの上に桜花結晶をX個ダストから置く。Xはあなたがこのターン中にダメージを受けた回数の2倍に等しい。Xが4以上ならばもう1つ置く。\n【展開中】相手の《攻撃》は+0/-1となり、その解決後にこの付与札の桜花結晶を2つダストに送る。'
    }],
    special: [{
      id: '24-shisui-o-s-1',
      name: '红莲狱·斩',
      namejp: 'ハドマギリ',
      baseType: 'special',
      cost: '3',
      types: ['action', 'reaction'],
      text: '【常时】如果本卡牌正在对应《攻击》，则受到对应的《攻击》处理完毕后再处理本卡牌的效果。\n选择任意数量的区域，按照任意顺序将这些区域中我方的裂伤指示物转为伤害。随后，进行『攻击距离1-4,2/1，（通常牌）无法对应，【常时】本《攻击》获得+0/+X。X等于我方本回合受到伤害次数的一半（向上取整）』的攻击。',
      textjp: '【常時】このカードが対応している《攻撃》があるならば、その《攻撃》の解決後にこのカードの効果を解決する。\n任意の数の領域を選び、それらに置かれたあなたの裂傷トークンを任意の順でダメージ化する。その後、攻撃『適正距離1-4、2/1、対応不可（通常札）、【常時】この《攻撃》は+0/+Xとなる。Xはあなたがこのターン中にダメージを受けた回数の半分（切り上げ）に等しい』を行う。'
    }, {
      id: '24-shisui-o-s-2',
      name: '青莲狱·裂',
      namejp: 'ウバラザキ',
      baseType: 'special',
      cost: '2',
      types: ['attack'],
      range: '1-4',
      damage: '2/1',
      text: '【攻击后】如果对方选择命受到伤害，将本回合我方下一次对装伤害为2或以下的《攻击》伤害裂伤化。\n----\n【再起】我方装与气合计值为6或以下。',
      textjp: '【攻撃後】相手がライフへのダメージを選んだならば、このターンにあなたが次に行うオーラへのダメージが2以下の《攻撃》のダメージは裂傷化する。\n----\n【再起】あなたのオーラとフレアの合計が6以下である。',
      isLacerationDamage: true,
      isLacerationCost: true
    }, {
      id: '24-shisui-o-s-3',
      name: '具疱狱·噬',
      namejp: 'アブダグイ',
      baseType: 'special',
      cost: '2',
      types: ['action', 'reaction'],
      text: '打消受到对应的《攻击》的伤害。如果成功打消，则我方受到{X/Y}点裂伤。X/Y等于打消的伤害。\n----\n【即再起】本回合我方受到第3次伤害时。',
      textjp: '対応した《攻撃》のダメージを打ち消す。そうしたあなたは{X/Y}の裂傷を受ける。X/Yは打ち消したダメージの値に等しい。\n----\n【即再起】あなたがこのターンに3回目のダメージを受ける。'
    }, {
      id: '24-shisui-o-s-4',
      name: '桑畑志水的死境',
      namejp: '桑畑志水の死に所',
      baseType: 'special',
      cost: '2',
      types: ['enhance', 'fullpower'],
      capacity: '2',
      text: '【展开时】从对方气中拿取X片樱花结晶，放置在本卡牌上。如果对方气的数量大于我方气，则X等于两者的差值。否则，X等于0。\n【展开中】我方不会输掉本局游戏。\n【展开中】如果我方命为0，则对方无法花费集中力。',
      textjp: '【展開時】このカードの上に桜花X個相手のフレアから置く。相手のフレアがあなたのフレアより大きいならば、Xはその差に等しい。そうでないならばXは0である。\n【展開中】あなたは敗北しない。\n【展開中】あなたのライフが0ならば、相手は集中力を支払えない。',
      isLacerationCost: true
    }]
  }]
}
]

export default sakuraDataCh