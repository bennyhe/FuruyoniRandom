/*
  {
    id: [String],

    name: [String],
    namejp: [String],
    namekr: [String],
    nameen: [String],

    text: [String],
    textjp: [String],
    textkr: [String],
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
const sakuraWithData = [{
  name: '连携战',
  namejp: '連携戦',
  list: [
    {
      id: 'na-c-01-yurina-saine',
      name: '勇往迈进',
      namejp: '勇往邁進',
      text: '【常时】八相~若自装中的樱花结晶的数目小于等于1，则此《攻击》获得+1/+1和不可被对应（王牌）。\n【常时】决死~若自命中的樱花结晶的数目小于等于3，则此《攻击》获得+1/+1和不可被对应（通常牌）。',
      textjp: '【常時】八相～あなたのオーラが1以下ならば、この《攻撃》は+1/+1となり、対応不可（切札）を得る。\n【常時】決死～あなたのライフが3以下ならば、この《攻撃》は+1/+1となり、対応不可（通常札）を得る。',
      baseType: 'normal',
      types: ['attack'],
      range: '3-5',
      damage: '2/1',
      returnloop: '复归条件：自命受到1点及以上的伤害时。',
      returnloopjp: '復帰条件：あなたがライフへと1以上のダメージを受ける。',
      returnloopGirls: [[0, 0], [1, 0]]
    },
    {
      id: 'na-c-02-saine-tokoyo',
      name: '山紫水明',
      namejp: '山紫水明',
      text: '【常时】由你选择对手如何承受此《攻击》的伤害。\n【攻击后】若本回合内你进行过对应，则打消被对应的非王牌的《攻击》。',
      textjp: '【常時】この《攻撃》のダメージはあなたが選ぶ。\n【攻撃後】あなたがこのターンに他の対応を行っているならば、対応した切り札でないこの《攻撃》を打ち消す。',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '1-5',
      damage: '2/1',
      returnloop: '复归条件：你在一回合内进行第4次《攻击》时。',
      returnloopjp: '復帰条件：あなたが同一ターンに4回目の攻撃を行う。',
      returnloopGirls: [[1, 0], [3, 0]]
    },
    {
      id: 'na-c-03-yurina-shinra',
      name: '不共戴天',
      namejp: '不倶戴天',
      text: '【常时】若虚中的樱花结晶的数目小于此牌的纳，则此牌展开时你不从自装中选择樱花结晶，而改为从敌装和敌气中选择樱花结晶作为此牌的纳。\n【破弃时】决死~若自命中的樱花结晶的数目小于等于3，则你可以从弃牌区中选择1个【破弃时】效果或者【攻击后】效果并结算之。',
      textjp: '【常時】ダストが不足しているならば、展開時にあなたのオーラではなく相手のオーラや相手のフレアから納める。\n【破棄時】決死～あなたのライフが3以下ならば、あなたの捨て札にあるカードの【破棄時】効果か【攻撃後】効果を1つ選び、それを解決してもよい。',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      returnloop: '复归条件：你实行鬼谋计略时。',
      returnloopjp: '復帰条件：あなたが鬼謀の計略を実行する。',
      returnloopGirls: [[0, 0], [6, 0]]
    },
    {
      id: 'na-c-04-yukihi-chikage',
      name: '暮色苍然/暗香疏影',
      namejp: '暮色蒼然/暗香疎影',
      text: '闭伞：【攻击后】从毒袋中选择「麻痹毒」「幻觉毒」「迟缓毒」中的1张，将其置入对手的手牌。\n开伞：【攻击后】将对手手牌中的所有毒牌以随机顺序置于对手的牌堆顶。',
      textjp: '閉；【攻撃後】毒袋から「麻痺毒」「幻覚毒」「弛緩毒」のいずれか1枚を選び、そのカードを相手の手札に加える。\n開；【攻撃後】相手の手札にある毒カード全て無作為納順で相手の山札の上に置く。',
      baseType: 'normal',
      types: ['attack'],
      range: '4-6',
      damage: '2/1',
      rangeOpened: '1-2',
      damageOpened: '0/0',
      returnloop: '复归条件：你的结束阶段开始时，当前距离等于0。',
      returnloopjp: '復帰条件：あなたの終了フェイズに現在の間合が0である。',
      returnloopGirls: [[5, 0], [8, 0]]
    },
    {
      id: 'na-c-05-oboro-thallya',
      name: '坚忍不拔',
      namejp: '堅忍不抜',
      text: '设置 燃烧\n【常时】此牌不视为你的手牌，而视为你的盖牌区中的牌（只能通过设置、「鸢影」等的效果使用）。\n进行1次骑动。然后，你可以从盖牌区使用一张具设置或燃烧关键字的牌。',
      textjp: '設置　燃焼\n【常時】このカードは使用するにあたり手札でなく伏せ札にあるかのように扱う。（設置か「鳶影」などの効果でしか使用できない）騎動を行う。その後、伏せ札から設置か燃焼を持つカード1枚を使用してもよい。',
      baseType: 'normal',
      types: ['action'],
      returnloop: '复归条件：你的结束阶段开始时，你的引擎中处于未燃烧状态的造花结晶的数目小于等于2。',
      returnloopjp: '復帰条件：あなたの終了フェイズにマシンにある造花結晶が2個以下である。',
      returnloopGirls: [[4, 0], [10, 0]]
    },
    {
      id: 'na-c-06-utsuro-kururu',
      name: '奇奇怪怪',
      namejp: '奇々怪々',
      text: '机巧：绿\n敌命（1）→虚',
      textjp: '<付>相ライフ(1)→ダスト',
      baseType: 'normal',
      types: ['action'],
      colors: [['绿']],
      textkururu: [{
        if: '<i class="i-bean i-bean--green"></i>',
        ctn: '敌命（1）→虚'
      }],
      textkururujp: [{
        if: '<i class="i-bean i-bean--green"></i>',
        ctn: '相ライフ(1)→ダスト'
      }],
      returnloop: '复归条件：你使用《全力》牌时。',
      returnloopjp: '復帰条件：あなたが《全力》カードを使用する。',
      returnloopGirls: [[9, 0], [12, 0]]
    },
    {
      id: 'na-c-07-hagane-honoka',
      name: '创意工夫',
      namejp: '創意工夫',
      text: '虚（1）→自命\n然后，若自命中的樱花结晶的数目大于等于敌命中樱花结晶的数目的2倍，则你赢得本局游戏。',
      textjp: 'ダスト(1)→自ライフ\nその後、あなたのライフが相手のライフの2倍以上ならばあなたは勝利する。',
      baseType: 'normal',
      types: ['action'],
      returnloop: '复归条件：你的结束阶段开始时，樱花结晶的数目恰等于5的区域的数目大于等于3。',
      returnloopjp: '復帰条件：あなたの終了フェイズに、桜花結晶がちょうど5つある領域が3つ以上ある。',
      returnloopGirls: [[7, 0], [13, 0]]
    },
    {
      id: 'na-c-08-himika-raira',
      name: '疾风怒涛',
      namejp: '疾風怒濤',
      text: '抓1张牌。\n以任意顺序执行：\n·若风神槽的值大于等于6，则距（2）⇔虚\n·若雷神槽的值大于等于6，则进行一次“攻击距离4-8 伤害2/2”的攻击。',
      textjp: 'カードを1枚引く。\n以下を任意の順で行う、\n　・風神ゲージが6以上ならば、\n　　　　間合(2)⇔ダスト\n　・雷神ゲージが6以上ならば、攻撃「適正距離4-8、2/2」を行う。',
      baseType: 'normal',
      types: ['action'],
      returnloop: '复归条件：你在一回合内使用除此牌以外的第3张牌时。',
      returnloopjp: '復帰条件：あなたが同一ターンにこのカードを除いて3枚目のカードを使用する。',
      returnloopGirls: [[2, 0], [11, 0]]
    },
    {
      id: 'na-c-09-kururu-yatsuha',
      name: '朱墨爛然',
      namejp: '朱墨爛然',
      text: '展示你的牌库顶牌。\n若该牌为《攻击》牌，则其获得距离扩大（近1）和+1/+1，然后使用之。\n若该牌为《行动》牌，则使用该牌2次。\n若该牌为《付与》牌，则选择其纳的数值增大2或减小2，然后使用之。\n若无法使用该牌，则将其置入弃牌区。',
      textjp: 'あなたの山札の一番上のカードを公開する。そのカードが《攻撃》ならば距離拡大(近1)を与え、+1/+1して使用する。そのカードが《行動》ならば2回使用する。そのカードが《付与》ならば納を2増加または減少させ使用する。何らかの理由で使用できないならば捨て札にする。',
      baseType: 'normal',
      types: ['action', 'reaction'],
      returnloop: '复归条件：你的结束阶段开始时，鏡映数大于等于1。',
      returnloopjp: '復帰条件：あなたの終了フェイズに鏡映数が1以上である。',
      returnloopGirls: [[9, 0], [15, 0]]
    },
    {
      id: 'na-c-10-yatsuha-mizuki',
      name: '当意即妙',
      namejp: '当意即妙',
      text: '打消被对应的非王牌的《攻击》。\n选择1项：\n自装（1）→敌装\n自气（1）→敌气\n【常时】不动~若本回合内当前距离的值没有发生过变化，则此牌的箭头（→）变为双箭头（⇔）',
      textjp: '対応した切り札でない《攻撃》を打ち消す。\n以下のどちらかを行う。\n　自オーラ(1)→相オーラ\n　自フレア(1)→相フレア\n【常時】不動～このターン中に現在の間合が変化していないならば、このカードの矢印は両矢印になる。',
      baseType: 'normal',
      types: ['action', 'reaction'],
      returnloop: '复归条件：你使用具终端关键字的牌时。',
      returnloopjp: '復帰条件：あなたが終端を持つカードを使用する。',
      returnloopGirls: [[15, 0], [17, 0]]
    },
    {
      id: 'na-c-11-korunu-hatsumi',
      name: '滴水成冰',
      namejp: '滴水成氷',
      text: '【展开时/破弃时】若你处于顺风状态，则本回合内你的第一次《攻击》获得+1/+1。若你处于逆风状态，则冻结对手1次。',
      textjp: '【展開時/破棄時】現在が順風ならばこのターンの最初の《攻撃》は+1/+1となる。現在が逆風ならば相手は1回凍結する。',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      returnloop: '复归条件：你的准备阶段开始时，当前距离大于等于4。',
      returnloopjp: '復帰条件：あなたの開始フェイズに現在の間合が4以上である。',
      returnloopGirls: [[14, 0], [16, 0]]
    }
  ]
}]
const sakuraStoryData = [{
  name: '物语0 神话的开端',
  namejp: '物語0：神語りのはじまり',
  list: [{
    name: '刀',
    namejp: '刀',
    namekr: '도',
    nameen: 'KATANA',
    normal: [
      {
        id: 'story-00',
        name: '乱打',
        namejp: '乱打',
        namekr: '난타',
        baseType: 'normal',
        types: ['attack'],
        range: '2',
        damage: '2/1',
        text: '【常时】决死～若自命中的樱花结晶的数目小于等于3，则此《攻击》获得+0/+2和不可被对应。',
        textjp: '【常時】決死-あなたのライフが3以下ならば、この《攻撃》は+0/+2となり、対応不可を得る。',
        textkr: '【상시】결사-당신의 라이프가 3 이하라면, 이 《공격》은 +0/+2가 되고, 대응불가를 얻는다.'
      },
      {
        id: 'story-00',
        name: '一闪',
        namejp: '一閃',
        namekr: '일섬',
        baseType: 'normal',
        types: ['attack'],
        range: '3',
        damage: '2/2',
        text: '【常时】决死～若自命中的樱花结晶的数目小于等于3，则此《攻击》获得+1/+0。',
        textjp: '【常時】決死-あなたのライフが3以下ならば、この《攻撃》は+1/+0となる。',
        textkr: '【상시】결사-당신의 라이프가 3 이하라면, 이 《공격》은 +1/+0이 된다.'
      },
      {
        id: 'story-00',
        name: '柄击',
        namejp: '柄打ち',
        namekr: '자루치기',
        baseType: 'normal',
        types: ['attack'],
        range: '1-2',
        damage: '2/1',
        text: '【攻击后】决死～若自命中的樱花结晶的数目小于等于3，则本回合内你的下一次《攻击》获得+1/+0。',
        textjp: '【攻撃後】決死-あなたのライフが3以下ならば、このターンにあなたが次に行う《攻撃》は+1/+0となる。',
        textkr: '【공격후】결사-당신의 라이프가 3 이하라면, 이 턴에 당신이 다음에 행하는 《공격》은 +1/+0이 된다.'
      },
      {
        id: 'story-00',
        name: '居合斩',
        namejp: '居合',
        namekr: '거합',
        baseType: 'normal',
        types: ['attack', 'fullpower'],
        range: '2-4',
        damage: '4/3',
        text: '【常时】若当前距离小于等于2，则此《攻击》获得-1/-1。',
        textjp: '【常時】現在の間合が2以下ならば、この攻撃は-1/-1となる。',
        textkr: '【상시】현재 간격이 2 이하라면, 이 공격은 -1/-1이 된다.'
      },
      {
        id: 'story-00',
        name: '疾跑',
        namejp: '足捌き',
        namekr: '',
        baseType: 'normal',
        types: ['action'],
        text: '若当前距离大于4，则距（2）→虚。 \n若当前距离小于1，则虚（2）→距。',
        textjp: '現在の間合が4以上ならば、間合→ダスト：2\n現在の間合が1以下ならば、ダスト→間合：2',
        textkr: ''
      },
      {
        id: 'story-00-A-1',
        name: '威风',
        namejp: '威風',
        baseType: 'normal',
        types: ['attack', 'reaction'],
        range: '0-4',
        damage: '1/-',
        text: '【攻击后】被对应的《攻击》获得-1/-0。',
        textjp: '【攻撃後】対応した《攻撃》は-1/+0となる。'
      },
      {
        id: 'story-00-A-2',
        name: '执着',
        namejp: '執着',
        baseType: 'normal',
        types: ['action', 'reaction'],
        text: '对手畏缩。\n自气（1）→自装',
        textjp: '相手を畏縮させる。\n自フレア→自オーラ：1'
      }
    ],
    special: [
      {
        id: 'story-00',
        name: '月影落',
        namejp: '月影落',
        namekr: '월영이 떨어지니',
        baseType: 'special',
        types: ['attack'],
        range: '3-4',
        damage: '4/4',
        cost: '7',
        text: '',
        textjp: '',
        textkr: ''
      },
      {
        id: 'story-00-A-3',
        name: '斩华六道—罗',
        namejp: '斬華六道―羅',
        baseType: 'special',
        types: ['action', 'fullpower'],
        cost: '2',
        text: '自命（1）→虚\n【使用后】你的《攻击》获得+1/+1。\n----\n【即再起】自命受到除重铸牌库以外的1点及以上的伤害。',
        textjp: '自ライフ→ダスト：1\n【使用済】あなたの《攻撃》は+1/+1となる。\n----\n【即再起】あなたが再構成以外でライフに1以上のダメージを受ける。'
      },
      {
        id: 'story-00-A-4',
        name: '玄奥之手',
        namejp: '奥の手',
        baseType: 'special',
        types: ['action', 'reaction'],
        cost: '3',
        text: '打消被对应的非王牌的《攻击》。对手的集中力变为0，对手畏缩。天音摇波与冰雨细音就此结下不解之缘。',
        textjp: '対応した切札でない攻撃を打ち消し、相手の集中力は0となり、相手を畏縮させる。天音揺波と氷雨細音の因縁はここに結ばれる。'
      }
    ]
  }, {
    name: '薙刀',
    namejp: '薙刀',
    namekr: '나기나타',
    nameen: 'NAGINATA',
    normal: [
      {
        id: 'story-00',
        name: '八面斩',
        namejp: '八方振り',
        namekr: '팔방 휘두르기',
        baseType: 'normal',
        types: ['attack'],
        range: '4-5',
        damage: '2/1',
        text: '【攻击后】八相～若自装中的樱花结晶的数目等于0，则进行一次“攻击距离4-5 伤害2/1”的攻击。',
        textjp: '【攻撃後】八相-あなたのオーラが0ならば、攻撃『適正距離4-5、2/1』を行う。',
        textkr: '【공격후】팔상-당신의 오라가 0이라면, 공격『적정거리4-5、2/1』을 행한다.'
      },
      {
        id: 'story-00',
        name: '薙刀斩',
        namejp: '薙斬り',
        namekr: '후려베기',
        baseType: 'normal',
        types: ['attack', 'reaction'],
        range: '4-5',
        damage: '3/1',
        text: '',
        textjp: '',
        textkr: ''
      },
      {
        id: 'story-00',
        name: '石突',
        namejp: '石突き',
        namekr: '석돌 치기',
        baseType: 'normal',
        types: ['attack', 'reaction'],
        range: '2-3',
        damage: '2/1',
        text: '【攻击后】八相～若自装中的樱花结晶的数目等于0，则虚（1）→距',
        textjp: '【攻撃後】八相-あなたのオーラが0ならば、ダスト→間合：1',
        textkr: '【공격후】팔상-당신의 오라가 0이라면, 더스트→간격：1'
      },
      {
        id: 'story-00',
        name: '识破',
        namejp: '見切り',
        namekr: '간파',
        baseType: 'normal',
        types: ['action'],
        text: '【常时】八相～若自装中的樱花结晶的数目等于0，则此牌可以如《对应》牌一样对应《攻击》使用。\n距（1） ⇔ 虚',
        textjp: '【常時】八相-あなたのオーラが0ならば、このカードを《対応》を持つかのように相手の《攻撃》に割り込んで使用できる。\n間合⇔ダスト：1',
        textkr: '【상시】팔상-당신의 오라가 0이라면, 이 카드를 《대응》을 갖는것과 같이 상대의 《공격》 에 끼어들어 사용 가능하다.\n간격⇔더스트：1'
      },
      {
        id: 'story-00',
        name: '无音壁',
        namejp: '無音壁',
        namekr: '무음벽',
        baseType: 'normal',
        types: ['enhance', 'fullpower'],
        capacity: '5',
        text: '【展开中】当你结算对装伤害时，此牌上的樱花结晶视为在自装中。',
        textjp: '【展開中】あなたへのダメージを解決するに際し、このカードの上に置かれた桜花結晶をあなたのオーラにあるかのように扱う。',
        textkr: '【전개중】당신으로의 대미지를 해결 할 때, 이 카드 위에 놓인 벚꽃 결정을 당신의 오라에 있는 것처럼 취급한다.'
      },
      {
        id: 'story-00-B-1',
        name: '冰刃',
        namejp: '氷刃',
        baseType: 'normal',
        types: ['attack'],
        range: '3-4',
        damage: '2/2',
        text: '',
        textjp: ''
      },
      {
        id: 'story-00-B-2',
        name: '涉渡',
        namejp: '渡渉',
        baseType: 'normal',
        types: ['action'],
        text: '自装（1）→距\n敌装（1）→距',
        textjp: '自オーラ→間合：1\n相オーラ→間合：1'
      }
    ],
    special: [
      {
        id: 'story-00',
        name: '雪上舞踏',
        namejp: '雪上舞踏',
        baseType: 'special',
        types: ['action'],
        cost: '0',
        text: '敌装（1）→距\n----\n【再起】本回合内你进行了3次或更多的《攻击》。',
        textjp: '相オーラ→間合：1\n----\n【再起】このターンに3回以上の《攻撃》を行っている。'
      },
      {
        id: 'story-00',
        name: '音无碎冰',
        namejp: '音無砕氷',
        namekr: '무음쇄빙',
        baseType: 'special',
        types: ['attack', 'reaction'],
        range: '0-10',
        damage: '1/1',
        cost: '2',
        text: '【攻击后】被对应的《攻击》获得-1/-1。\n----\n【再起】八相～自装中的樱花结晶的数目等于0。',
        textjp: '【攻撃後】対応した《攻撃》は-1/-1となる。\n----\n【再起】八相-あなたのオーラが0である。',
        textkr: '【공격후】대응한 《공격》은 -1/-1이 된다.\n----\n【재기】팔상-당신의 오라가 0이다.'
      },
      {
        id: 'story-00-B-3',
        name: '冰雨细音的终焉',
        namejp: '氷雨細音の果ての果て',
        namekr: '히사메 사이네의 종말의 끝',
        baseType: 'special',
        types: ['attack', 'reaction'],
        range: '1-5',
        damage: '5/5',
        cost: '5',
        text: '【常时】仅当你对应王牌时可以使用此牌。',
        textjp: '【常時】このカードは切札に対する対応でしか使用できない。',
        textkr: '【상시】이 카드는 비장패에 대한 대응으로만 사용한다.'
      }
    ]
  }]
},
{
  name: '物语1 天音摇波 对 冰雨细音',
  namejp: '物語1：天音揺波 対 氷雨細音',
  list: [{
    name: '刀',
    namejp: '刀',
    namekr: '도',
    nameen: 'KATANA',
    normal: [
      {
        id: 'story-01',
        name: '斩',
        namejp: '斬',
        namekr: '참',
        baseType: 'normal',
        types: ['attack'],
        range: '3-4',
        damage: '3/1',
        text: '',
        textjp: '',
        textkr: ''
      },
      {
        id: 'story-01',
        name: '一闪',
        namejp: '一閃',
        namekr: '일섬',
        baseType: 'normal',
        types: ['attack'],
        range: '3',
        damage: '2/2',
        text: '【常时】决死～若自命中的樱花结晶的数目小于等于3，则此《攻击》获得+1/+0。',
        textjp: '【常時】決死-あなたのライフが3以下ならば、この《攻撃》は+1/+0となる。',
        textkr: '【상시】결사-당신의 라이프가 3 이하라면, 이 《공격》은 +1/+0이 된다.'
      },
      {
        id: 'story-01-A-1',
        name: '浑身',
        namejp: '渾身',
        baseType: 'normal',
        types: ['attack'],
        range: '2',
        damage: '2/1',
        text: '【常时】奉纳～若你赌上了自己的意志，则此《攻击》获得+0/+2和不可被闪避。',
        textjp: '【常時】奉納―あなたが意志を賭しているならば、この《攻撃》は+0/+2となり、不可避を得る。'
      },
      {
        id: 'story-01',
        name: '居合斩',
        namejp: '居合',
        namekr: '거합',
        baseType: 'normal',
        types: ['attack', 'fullpower'],
        range: '2-4',
        damage: '4/3',
        text: '【常时】若当前距离小于等于2，则此《攻击》获得-1/-1。',
        textjp: '【常時】現在の間合が2以下ならば、この攻撃は-1/-1となる。',
        textkr: '【상시】현재 간격이 2 이하라면, 이 공격은 -1/-1이 된다.'
      },
      {
        id: 'story-01',
        name: '疾跑',
        namejp: '足捌き',
        namekr: '',
        baseType: 'normal',
        types: ['action'],
        text: '若当前距离大于4，则距（2）→虚。 \n若当前距离小于1，则虚（2）→距。',
        textjp: '現在の間合が4以上ならば、間合→ダスト：2\n現在の間合が1以下ならば、ダスト→間合：2',
        textkr: ''
      },
      {
        id: 'story-01-A-2',
        name: '执念',
        namejp: '執念',
        baseType: 'normal',
        types: ['action'],
        text: '对手畏缩。\n奉纳～若你赌上了自己的意志，则对手弃1张牌。',
        textjp: '相手を畏縮させる。\n奉納―あなたが意思を賭しているならば、相手は手札を1枚捨て札にする。'
      },
      {
        id: 'story-01',
        name: '气合斩',
        namejp: '圧気',
        namekr: '압기',
        baseType: 'normal',
        types: ['enhance'],
        capacity: '2',
        text: '破绽\n【破弃时】进行一次“攻击距离1-4 伤害3/-”的攻击。',
        textjp: '隙\n【破棄時】攻撃『適正距離1-4、3/-』を行う。',
        textkr: '빈틈\n【파기시】공격『적정거리1-4、3/-』을 행한다.'
      }
    ],
    special: [
      {
        id: 'story-01',
        name: '浦波岚',
        namejp: '浦波嵐',
        namekr: '파도치는 폭풍우',
        baseType: 'special',
        types: ['attack', 'reaction'],
        range: '0-10',
        damage: '2/-',
        cost: '3',
        text: '终端\n【攻击后】被对应的《攻击》获得-2/+0。',
        textjp: '終端\n【攻撃後】対応した《攻撃》は-2/+0となる。',
        textkr: '종단\n【공격후】대응한 《공격》은 -2/+0이 된다.'
      },
      {
        id: 'story-01-A-3',
        name: '斩华六道—人',
        namejp: '斬華六道―人',
        baseType: 'special',
        types: ['action'],
        cost: '1',
        text: '虚（2）→自装\n----\n【再起】奉纳～你赌上了自己的意志。',
        textjp: 'ダスト→自オーラ：2\n----\n【再起】奉納―あなたが意志を賭している。'
      },
      {
        id: 'story-01-A-4',
        name: '天音摇波的底力：初日',
        namejp: '天音揺波の底力：初日',
        baseType: 'special',
        types: ['attack', 'fullpower'],
        range: '1-4',
        damage: '5/5',
        cost: '5',
        text: '【常时】决死～仅当自命中的樱花结晶的数目小于等于3时可以使用此牌。\n【常时】奉纳～若你赌上了自己的意志，则此《攻击》获得不可被闪避。',
        textjp: '【常時】決死―あなたのライフが3以下でないと、このカードは使用できない。\n【常時】奉納―あなたが意志を賭しているならば、この《攻撃》は不可避を得る。'
      }
    ]
  }, {
    name: '薙刀',
    namejp: '薙刀',
    namekr: '나기나타',
    nameen: 'NAGINATA',
    normal: [
      {
        id: 'story-01',
        name: '八面斩',
        namejp: '八方振り',
        namekr: '팔방 휘두르기',
        baseType: 'normal',
        types: ['attack'],
        range: '4-5',
        damage: '2/1',
        text: '【攻击后】八相～若自装中的樱花结晶的数目等于0，则进行一次“攻击距离4-5 伤害2/1”的攻击。',
        textjp: '【攻撃後】八相-あなたのオーラが0ならば、攻撃『適正距離4-5、2/1』を行う。',
        textkr: '【공격후】팔상-당신의 오라가 0이라면, 공격『적정거리4-5、2/1』을 행한다.'
      },
      {
        id: 'story-01',
        name: '薙刀斩',
        namejp: '薙斬り',
        namekr: '후려베기',
        baseType: 'normal',
        types: ['attack', 'reaction'],
        range: '4-5',
        damage: '3/1',
        text: '',
        textjp: '',
        textkr: ''
      },
      {
        id: 'story-01',
        name: '反身斩',
        namejp: '返し刃',
        namekr: '',
        baseType: 'normal',
        types: ['attack', 'reaction'],
        range: '3-5',
        damage: '1/1',
        text: '【攻击后】若此牌作为对应使用，则进行一次“攻击距离3-5 伤害2/1 不可被对应”的攻击。',
        textjp: '【攻撃後】このカードを対応で使用したならば、攻撃『適正距離3-5、2/1、対応不可』を行う。',
        textkr: ''
      },
      {
        id: 'story-01-B-1',
        name: '冰牙',
        namejp: '氷牙',
        baseType: 'normal',
        types: ['attack'],
        range: '3',
        damage: '2/2',
        text: '【常时】每当你的准备阶段开始时，若敌装中樱花结晶的数目等于最大值，则你可以将此牌从弃牌区置入手牌。',
        textjp: '【常時】あなたの開始フェイズの開始時に相手のオーラが最大値ならば、捨て札にあるこのカードを手札に戻してもよい。'
      },
      {
        id: 'story-01',
        name: '识破',
        namejp: '見切り',
        namekr: '간파',
        baseType: 'normal',
        types: ['action'],
        text: '【常时】八相～若自装中的樱花结晶的数目等于0，则此牌可以如《对应》牌一样对应《攻击》使用。\n距（1） ⇔ 虚',
        textjp: '【常時】八相-あなたのオーラが0ならば、このカードを《対応》を持つかのように相手の《攻撃》に割り込んで使用できる。\n間合⇔ダスト：1',
        textkr: '【상시】팔상-당신의 오라가 0이라면, 이 카드를 《대응》을 갖는것과 같이 상대의 《공격》 에 끼어들어 사용 가능하다.\n간격⇔더스트：1'
      },
      {
        id: 'story-01',
        name: '诗舞',
        namejp: '詩舞',
        namekr: '시의 춤',
        baseType: 'normal',
        types: ['action', 'reaction'],
        text: '获得1点集中力，选择一项：\n1.自气（1）→自装\n2.自装（1）→距',
        textjp: '集中力を1得て、以下から1つを選ぶ。\n・自フレア→自オーラ：1\n・自オーラ→間合：1',
        textkr: '집중력을 1 얻고, 이하에서 하나를 고른다.\n ・자신 플레어→자신 오라：1\n ・자신 오라→간격：1'
      },
      {
        id: 'story-01-B-2',
        name: '雪舞台',
        namejp: '雪舞台',
        baseType: 'normal',
        types: ['enhance'],
        capacity: '5',
        text: '【展开中】达人距离增大1，自装与敌装的最大值减小1。\n【展开中】若自装或敌装中樱花结晶的数目大于最大值，则将超出的结晶移至虚。',
        textjp: '【展開中】達人の間合は1大きくなり、あなたと相手のオーラの最大値は1小さくなる。\n【展開中】現在のオーラが最大値より大きくなるならば、その分をダストへと移動させる。'
      }
    ],
    special: [
      {
        id: 'story-01',
        name: '律动弧戟',
        namejp: '律動弧戟',
        namekr: '율동호극',
        baseType: 'special',
        types: ['action'],
        cost: '6',
        text: '进行一次“攻击距离3-4 伤害1/1”的攻击。\n进行一次“攻击距离4-5 伤害1/1”的攻击。\n进行一次“攻击距离3-5 伤害2/2”的攻击。',
        textjp: '攻撃『適正距離3-4、1/1』を行う。\n攻撃『適正距離4-5、1/1』を行う。\n攻撃『適正距離3-5、2/2』を行う。',
        textkr: '공격『적정거리3-4、1/1』을 행한다.\n공격『적정거리4-5、1/1』을 행한다.\n공격『적정거리3-5、2/2』을 행한다.'
      },
      {
        id: 'story-01',
        name: '常世之月',
        namejp: '常世ノ月',
        namekr: '토코요의 달',
        baseType: 'special',
        types: ['action'],
        cost: '2',
        text: '你的集中力变为2，对手的集中力变为0，对手畏缩。',
        textjp: 'あなたの集中力は2になり、相手の集中力は0になり、相手を畏縮させる。',
        textkr: '당신의 집중력이 2가 되고, 상대의 집중력이 0이 되고, 상대를 위축시킨다。'
      },
      {
        id: 'story-01-B-3',
        name: '冰雨细音的终焉：初雪',
        namejp: '氷雨細音の果ての果て：初雪',
        baseType: 'special',
        types: ['attack', 'reaction'],
        range: '1-5',
        damage: '5/5',
        cost: '3',
        text: '【常时】仅当你对应王牌时可以使用此牌。\n【常时】此《攻击》的伤害与被对应的《攻击》的伤害同时结算。',
        textjp: '【常時】このカードは切札に対する対応でしか使用できない。\n【常時】この《攻撃》によるダメージは対応した攻撃と同時に与えられる。'
      }
    ]
  }]
},
{
  name: '物语2 暗杀龙之宫一志计划',
  namejp: '物語2：龍ノ宮一志暗殺計画',
  list: [{
    name: '毒',
    namejp: '毒',
    namekr: '독',
    nameen: 'POISON',
    normal: [{
      id: '',
      name: '毒针·甲',
      namejp: '毒針・甲',
      baseType: 'normal',
      types: ['attack'],
      range: '3',
      damage: '1/1',
      text: '【攻击后】若此毒针涂有灭灯毒，则你赢得本局游戏。',
      textjp: '【攻撃後】滅灯毒が塗られていたならば、あなたは勝利する。'
    }, {
      id: '',
      name: '毒针·乙',
      namejp: '毒針・乙',
      baseType: 'normal',
      types: ['attack'],
      range: '4',
      damage: '1/1',
      text: '【攻击后】若此毒针涂有灭灯毒，则你赢得本局游戏。',
      textjp: '【攻撃後】滅灯毒が塗られていたならば、あなたは勝利する。'
    }, {
      id: '',
      name: '毒针·丙',
      namejp: '毒針・丙',
      baseType: 'normal',
      types: ['attack'],
      range: '5',
      damage: '1/1',
      text: '【攻击后】若此毒针涂有灭灯毒，则你赢得本局游戏。',
      textjp: '【攻撃後】滅灯毒が塗られていたならば、あなたは勝利する。'
    }, {
      id: '',
      name: '重涂',
      namejp: '塗り替え',
      baseType: 'normal',
      types: ['action', 'fullpower'],
      text: '重新选择涂有灭灯毒的毒针。',
      textjp: '滅灯毒が塗られている毒針を選び直す。'
    }],
    special: [{
      id: '',
      name: '隐毒藏灭灯',
      namejp: '滅灯の隠毒',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      text: '终端\n重新选择涂有灭灯毒的毒针。',
      textjp: '終端\n滅灯毒が塗られている毒針を選び直す。'
    }, {
      id: '',
      name: '暗昏千影的信条：刹那',
      namejp: '闇昏千影の生きる道：刹那',
      baseType: 'special',
      types: ['attack'],
      range: '1-3',
      damage: '2/0',
      cost: '2',
      text: '【攻击后】如果对手选择用命承受此次伤害，则你赢得本局游戏。',
      textjp: '【攻撃後】相手がライフへのダメージを選んだならば、あなたは勝利する。'
    }]
  }, {
    name: '锤',
    namejp: '鎚',
    namekr: '철퇴',
    nameen: 'HAMMER',
    normal: [{
      id: '',
      name: '练习用铁锤',
      namejp: '演習用鉄槌',
      baseType: 'normal',
      types: ['attack'],
      range: '2-6',
      damage: '4/3',
      text: '远心',
      textjp: '遠心'
    }, {
      id: '',
      name: '全身撞击',
      namejp: '体当たり',
      baseType: 'normal',
      types: ['attack'],
      range: '2-3',
      damage: '2/2',
      text: '',
      textjp: ''
    }, {
      id: '',
      name: '追击',
      namejp: '追撃',
      baseType: 'normal',
      types: ['attack'],
      range: '4-5',
      damage: '2/1',
      text: '',
      textjp: ''
    }, {
      id: '',
      name: '看破',
      namejp: '看破',
      baseType: 'normal',
      types: ['action'],
      text: '你可以支付1集中力。若如此做，检视对手涂有灭灯毒的毒针。',
      textjp: '集中力を1支払ってもよい。そうしたならば、相手が滅灯毒を塗っている毒針を見る。'
    }, {
      id: '',
      name: '飞退',
      namejp: '飛び退き',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '虚（1）→距',
      textjp: 'ダスト→間合：1'
    }],
    special: [{
      id: '',
      name: '龙之本能',
      namejp: '龍の本能',
      baseType: 'special',
      types: ['action', 'reaction'],
      cost: '2',
      text: '检视对手涂有灭灯毒的毒针。然后你可以打消被对应的伤害为1/1的《攻击》，否则将此牌变为未使用状态。',
      textjp: '相手が滅灯毒を塗っている毒針を見る。その後、対応した1/1の《攻撃》を打ち消してもよい。そうしない場合、このカードを未使用に戻す。'
    }]
  }]
},
{
  name: '物语9 最初的代理战争',
  namejp: '物語9：はじめての代理戦争',
  list: [{
    name: '盔',
    namejp: '兜',
    namekr: '투구',
    nameen: 'ARMET',
    normal: [{
      id: '',
      name: '反攻',
      namejp: '反攻',
      baseType: 'normal',
      types: ['attack'],
      range: '2-3',
      damage: '1/1',
      text: '【常时】若上一回合内你进行过对应，则此《攻击》获得+1/+1。\n全力化：【常时】此《攻击》获得+2/+1。',
      textjp: '【常時】あなたが直前のターンに対応しているならば、この《攻撃》は+1/+1となる。\n全力化：【常時】この《攻撃》は+2/+1となる。'
    }, {
      id: '',
      name: '防壁',
      namejp: '防壁',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '终端\n若此牌为本回合内你进行的第一次对应，则打消被对应的《攻击》的伤害。',
      textjp: '終端\nこのターンで最初の対応ならば、対応した《攻撃》のダメージを打ち消す。'
    }],
    special: [{
      id: '',
      name: '天主八龙阁',
      namejp: '天主八龍閣',
      baseType: 'special',
      types: ['enhance', 'reaction'],
      capacity: '3',
      cost: '5',
      text: '终端\n【展开时】打消被对应的非全力的《攻击》。\n【展开中】你的其他女神的《攻击》获得+0/+1。',
      textjp: '終端\n【展開時】対応した全力でない《攻撃》を打ち消す。\n【展開中】あなたの他のメガミの《攻撃》は+0/+1となる。'
    }]
  }, {
    name: '遥原夕罗',
    namejp: '遥原夕羅',
    normal: [{
      id: '',
      name: '铁拳',
      namejp: '鉄拳',
      baseType: 'normal',
      types: ['attack'],
      range: '1-2',
      damage: '2/1',
      text: '【常时】不动―若本回合内当前距离的值没有发生过变化，此《攻击》获得+0/+1。',
      textjp: '【常時】不動―現在の間合がターン開始時の間合から変化してないならば、この《攻撃》は+0/+1となる。'
    }, {
      id: '',
      name: '击落',
      namejp: '撃ち落とし',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '1-5',
      damage: '1/1',
      text: '【常时】不动～若本回合内当前距离的值没有发生过变化，则打消被对应的非《全力》且非王牌的《攻击》。',
      textjp: '【常時】不動―現在の間合がターン開始時の間合から変化してないならば、対応した全力でも切札でもない《攻撃》を打ち消す。'
    }],
    special: [{
      id: '',
      name: '敷道二式',
      namejp: '敷道弐式',
      baseType: 'special',
      types: ['enhance'],
      capacity: '2',
      cost: '2',
      text: '【展开中】对手不能执行基本动作《前进》、《后退》和《离脱》。',
      textjp: '【展開中】相手は基本動作《前進》と《後退》と《離脱》を行えない。'
    }, {
      id: '',
      name: '敷道四式',
      namejp: '敷道肆式',
      baseType: 'special',
      types: ['action'],
      cost: '1',
      text: '盖伏自己的牌库，从自己的弃牌区或盖牌区中移除至多2张牌，之后重铸牌库。然后将被移除的牌以任意顺序置于牌库顶。',
      textjp: '山札をすべて伏せ札にし、捨て札または伏せ札からカードを2枚まで取り除き、山札を再構成する。その後、取り除いたカードを任意の順で山札の上に置く。'
    }]
  }]
}
  // {
  //   name: '物语10 挑战凝努！',
  //   namejp: '物語10：コルヌに挑戦！',
  //   list: [{
  //     normal: [],
  //   }]
  // },{
  //   name: '物语10 挑战凝努！（英雄战）',
  //   namejp: '物語10：コルヌに挑戦！（英雄戦）',
  //   list: [{
  //     normal: [],
  //   }]
  // },{
  //   name: '物语12 挑战徒神细音！',
  //   namejp: '物語12：徒神サイネに挑戦！',
  //   list: [{
  //     normal: [],
  //   }]
  // },{
  //   name: '物语12 挑战徒神细音！（英雄战）',
  //   namejp: '物語12：徒神サイネに挑戦！（英雄戦）',
  //   list: [{
  //     normal: [],
  //   }]
  // },{
  //   name: '物语13 挑战新幕常世！',
  //   namejp: '物語13：新幕、トコヨに挑戦！',
  //   list: [{
  //     normal: [],
  //   }]
  // },{
  //   name: '物语13 挑战新幕常世！（英雄战）',
  //   namejp: '物語13：新幕、トコヨに挑戦！（英雄戦）',
  //   list: [{
  //     normal: [],
  //   }]
  // },{
  //   name: '物语15 她的挑战',
  //   namejp: '物語15：彼女の挑戦',
  //   list: [{
  //     normal: [],
  //   }]
  // }
]
const sakuraOtherData = [{
  name: '祭札 2019-缘',
  namejp: '祭札 2019-缘',
  list: [
    {
      id: 'N1',
      name: '情念之缘',
      namejp: '情念之缘',
      text: '【常时】X等于你的结缘数的一半（向下取整）。',
      textjp: '【常时】X等于你的结缘数的一半（向下取整）。',
      baseType: 'normal',
      types: ['attack'],
      range: '1-2',
      damage: '3/X',
      cardwhojp: '緣'
    },
    {
      id: 'N2',
      name: '憧憬之缘',
      namejp: '憧憬之缘',
      text: '【常时】X等于你的结缘数。',
      textjp: '【常时】X等于你的结缘数。',
      baseType: 'normal',
      types: ['attack'],
      range: '3-10',
      damage: 'X/1',
      cardwhojp: '緣'
    },
    {
      id: 'N3',
      name: '友情之缘',
      namejp: '友情之缘',
      text: '超克\n【常时】X等于你的结缘数。',
      textjp: '超克\n【常时】X等于你的结缘数。',
      baseType: 'normal',
      types: ['attack', 'fullpower'],
      range: '2-4',
      damage: 'X/3',
      cardwhojp: '緣'
    },
    {
      id: 'N4',
      name: '执着之缘',
      namejp: '执着之缘',
      text: '结算以下效果X次。X等于你的结缘数的一半（向下取整）。\n距（1）→自气',
      textjp: '结算以下效果X次。X等于你的结缘数的一半（向下取整）。\n距（1）→自气',
      baseType: 'normal',
      types: ['action'],
      cardwhojp: '緣'
    },
    {
      id: 'N5',
      name: '隔意之缘',
      namejp: '隔意之缘',
      text: '【常时】X等于你的结缘数。\n【攻击后】虚（2）→距',
      textjp: '【常时】X等于你的结缘数。\n【攻击后】虚（2）→距',
      baseType: 'normal',
      types: ['attack'],
      range: '0-X',
      damage: '-/1',
      cardwhojp: '緣'
    },
    {
      id: 'N6',
      name: '疎外之缘',
      namejp: '疎外之缘',
      text: '打消被对应的非王牌的对装伤害小于结缘数的《攻击》。若以此法打消了《攻击》，则你可以抓一张牌。',
      textjp: '打消被对应的非王牌的对装伤害小于结缘数的《攻击》。若以此法打消了《攻击》，则你可以抓一张牌。',
      baseType: 'normal',
      types: ['action', 'reaction'],
      cardwhojp: '緣'
    },
    {
      id: 'N7',
      name: '怜悯之缘',
      namejp: '怜悯之缘',
      text: '【常时】X等于你的结缘数。\n【展开时】你可以从对手的弃牌区与盖牌区中选择牌，其张数至多为结缘数的一半。将那些牌封印于此牌下。\n【破弃时】将此牌封印的所有牌置入对手的弃牌区。',
      textjp: '【常时】X等于你的结缘数。\n【展开时】你可以从对手的弃牌区与盖牌区中选择牌，其张数至多为结缘数的一半。将那些牌封印于此牌下。\n【破弃时】将此牌封印的所有牌置入对手的弃牌区。',
      baseType: 'normal',
      types: ['enhance'],
      capacity: 'X',
      cardwhojp: '緣'
    },
    {
      id: 'N8',
      name: '缘之丝',
      namejp: '缘之丝',
      text: '【展开中】每当你与新的女神结缘时，你的集中力变为2。',
      textjp: '【展开中】每当你与新的女神结缘时，你的集中力变为2。',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      cardwhojp: '緣'
    }
  ]
}]
export {
  sakuraWithData,
  sakuraStoryData,
  sakuraOtherData
}