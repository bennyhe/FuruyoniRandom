export default [{
  name: '第一回 VS 胧',
  namejp: '第1回：オボロへの挑戦',
  index: 4,
  subIndex: 0,
  list: [{
    name: '通常战',
    namejp: '通常戦',
    normalOrg: ['1|1'],
    normal: [{
      id: 'na-05-oboro-o-n-α',
      name: '唤仙之术',
      namejp: '仙人呼法',
      baseType: 'normal',
      types: ['action'],
      cardwho: '原初',
      cardwhojp: '原初',
      text: '获得1点集中力，盖伏你的牌库顶牌。\n【常时】若此牌位于弃牌区，则计算盖牌区的牌张数时此牌也视为盖牌区中的牌。\n【常时】若此牌位于弃牌区，则你不会受到因重铸牌库造成的命伤。',
      textjp: '集中力を1得て、あなたの山札の一番上を伏せ札にする。\n【常時】このカードは捨て札にあるならば、伏せ札の枚数に数える。\n【常時】このカードは捨て札にあるならば、あなたは再構成によるダメージを受けない。'
    }],
    special: [{
      id: 'na-05-oboro-o-s-α',
      name: '胧霞',
      namejp: '朧霞',
      baseType: 'special',
      types: ['action'],
      cardwho: '原初',
      cardwhojp: '原初',
      cost: '2',
      text: '【使用后】每回合内，每当你第一次从盖牌区中使用非《攻击》的牌时，该牌结算完毕后你可以执行1次基本动作。',
      textjp: '【使用済】各ターンにあなたが初めて伏せ札から《攻撃》でないカードを使用した時、その解決後に基本動作を1回行ってもよい。'
    }]
  },
  {
    name: '英雄战',
    namejp: '英雄戦',
    normal: [{
      id: 'na-05-oboro-o-n-α',
      name: '唤仙之术',
      namejp: '仙人呼法',
      baseType: 'normal',
      types: ['action'],
      cardwho: '原初',
      cardwhojp: '原初',
      text: '获得1点集中力，盖伏你的牌库顶牌。\n【常时】若此牌位于弃牌区，则计算盖牌区的牌张数时此牌也视为盖牌区中的牌。\n【常时】若此牌位于弃牌区，则你不会受到因重铸牌库造成的命伤。',
      textjp: '集中力を1得て、あなたの山札の一番上を伏せ札にする。\n【常時】このカードは捨て札にあるならば、伏せ札の枚数に数える。\n【常時】このカードは捨て札にあるならば、あなたは再構成によるダメージを受けない。'
    },
    {
      id: 'na-05-oboro-o-n-β',
      cardwho: '扩张',
      cardwhojp: '拡張',
      name: '绯色手里剑',
      namejp: '緋色手裏剣',
      baseType: 'normal',
      types: ['attack'],
      range: '3-6',
      damage: '2/1',
      text: '设置\n【常时】你可以如从你的手牌一样从盖牌区使用此牌。\n【常时】每当你的结束阶段开始时，若双方盖牌区中的牌张数之和大于等于5，则你可以将此牌从弃牌区置入手牌。',
      textjp: '設置\n【常時】あなたはこのカードを手札にあるかのように伏せ札から使用してもよい。\n【常時】あなたの終了フェイズに両者の伏せ札が合計5枚以上あるならば、このカードを捨て札から手札に戻してもよい。'
    }],
    special: [{
      id: 'na-05-oboro-o-s-β',
      name: '胧霞・血樱绽放',
      namejp: '朧霞・血桜開花',
      baseType: 'special',
      types: ['action'],
      cardwho: '原初',
      cardwhojp: '原初',
      cost: '2',
      text: '【使用后】每回合内，每当你第一次从盖牌区中使用非《攻击》的牌时，该牌结算完毕后你可以执行1次基本动作。\n【使用后】你从盖牌区中使用的《攻击》牌生成的《攻击》获得+0/+1。',
      textjp: '【使用済】各ターンにあなたが初めて伏せ札から《攻撃》でないカードを使用した時、その解決後に基本動作を1回行ってもよい。\n【使用済】あなたが伏せ札から使用した《攻撃》カードによる《攻撃》は+0/+1となる。'
    }]
  }]
},
{
  name: '第二回 VS 千影',
  namejp: '第2回：チカゲへの挑戦',
  index: 8,
  subIndex: 0,
  list: [{
    name: '通常战',
    namejp: '通常戦',
    normalOrg: ['1|4'],
    normal: [{
      id: 'na-09-chikage-o-n-α',
      name: '扭曲之眼',
      namejp: '歪の眼',
      baseType: 'normal',
      types: ['action', 'reaction'],
      cardwho: '原初',
      cardwhojp: '原初',
      text: '检视对手手牌中的所有毒牌，你可以选择其中1张，将其移回你的毒袋。若如此做，则被对应的《攻击》获得-2/-1，将此牌置入手牌。',
      textjp: '相手の手札にある毒カード全てを見て、その中から1枚選び、あなたの毒袋に戻してもよい。そうした場合、対応した《攻撃》を-2/-1し、このカードを手札に戻す。'
    }],
    special: [{
      id: 'na-09-chikage-o-s-α',
      name: '绊毒永缠绵',
      namejp: '不朽の絆毒',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      cardwho: '原初',
      cardwhojp: '原初',
      text: '从毒袋中选择1张『雪灯毒』，将其置于对手的牌库顶。\n【使用后】每当你的准备阶段开始时，你可以将此牌变为未使用状态。若如此做，则进行一次“攻击距离0-2 伤害X/X 【常时】X等于对手的手牌中毒牌的张数。”的攻击。',
      textjp: '毒袋から「雪灯毒」を1枚選び、相手の山札の一番上に置く。\n【使用済】あなたの開始フェイズの開始時にこのカードを未使用に戻してもよい。そうした場合、攻撃『適正距離0-2、X/X、【常時】Xは相手の手札にある毒カードの枚数に等しい』を行う。'
    }],
    poison: [{
      id: 'na-09-chikage-o-p-α',
      cardwho: '扩张',
      cardwhojp: '拡張',
      name: '灭灯毒',
      namejp: '滅灯毒',
      baseType: 'normal',
      types: ['action'],
      text: '终端\n对自装造成2点伤害。\n【常时】此牌不能被移出弃牌区。\n【常时】若此牌位于弃牌区，则你的毒牌所记述的数字与樱花结晶的数目变为原来的2倍。\n（仅当使用神座规则时用此牌进行游戏）',
      textjp: '終端\nあなたのオーラに2ダメージを与える。\n【常時】このカードは捨て札から移動しない。\n【常時】このカードが捨て札にあるならば、あなたの毒カードに書かれた数字と桜花結晶の数は2倍になる。\n（このカードは神座の適用時のみに用いる）'
    },
    {
      id: 'na-09-chikage-o-p-α',
      cardwho: '扩张',
      cardwhojp: '拡張',
      name: '灭灯毒',
      namejp: '滅灯毒',
      baseType: 'normal',
      types: ['action'],
      text: '终端\n对自装造成2点伤害。\n【常时】此牌不能被移出弃牌区。\n【常时】若此牌位于弃牌区，则你的毒牌所记述的数字与樱花结晶的数目变为原来的2倍。\n（仅当使用神座规则时用此牌进行游戏）',
      textjp: '終端\nあなたのオーラに2ダメージを与える。\n【常時】このカードは捨て札から移動しない。\n【常時】このカードが捨て札にあるならば、あなたの毒カードに書かれた数字と桜花結晶の数は2倍になる。\n（このカードは神座の適用時のみに用いる）'
    },
    {
      id: 'na-09-chikage-o-p-β',
      name: '雪灯毒',
      namejp: '雪灯毒',
      cardwho: '原初',
      cardwhojp: '原初',
      baseType: 'normal',
      types: ['action'],
      text: '【常时】若本回合内你使用过通常牌，则你不能使用此牌。\n【常时】若此牌将被移回毒袋，则对手可以进行1次基本动作。\n将此牌移回对手的毒袋。结束当前阶段。',
      textjp: '【常時】このターン中にあなたが通常札を使用しているならば、このカードは使用できない。\n【常時】このカードが毒袋に戻るならば、その直前に相手は基本動作を1回行ってもよい。\nこのカードを相手の毒袋に戻す。その後、このフェイズを終了する。'
    }]
  },
  {
    name: '英雄战',
    namejp: '英雄戦',
    normal: [{
      id: 'na-09-chikage-o-n-β',
      name: '扭曲之刃',
      namejp: '歪の刃',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '0-10',
      damage: '1/2',
      cardwho: '原初',
      cardwhojp: '原初',
      text: '检视对手手牌中的所有毒牌，你可以选择其中1张，将其移回你的毒袋。若如此做，则被对应的《攻击》获得-2/-1，将此牌置入手牌。',
      textjp: '【攻撃後】相手の手札にある毒カード全てを見て、その中から1枚選び、あなたの毒袋に戻してもよい。そうした場合、対応した《攻撃》を-2/-1し、このカードを手札に戻す。'
    },
    {
      id: 'na-09-chikage-o-n-γ',
      cardwho: '扩张',
      cardwhojp: '拡張',
      name: '结缘油纸伞',
      namejp: '結び番傘',
      baseType: 'normal',
      types: ['attack'],
      range: '4',
      damage: '2/2',
      text: '不可被闪避\n【常时】若对手的手牌张数大于等于2，则此《攻击》获得距离扩大（近2、远2）。',
      textjp: '不可避\n【常時】相手の手札が2枚以上あるならば、この《攻撃》は距離拡大（近2）と距離拡大（遠2）を得る。\n（他に何もなければ、適正距離は2-6になる）'
    }],
    special: [{
      id: 'na-09-chikage-o-s-α',
      name: '绊毒永缠绵',
      namejp: '不朽の絆毒',
      baseType: 'special',
      types: ['action'],
      cost: '2',
      cardwho: '原初',
      cardwhojp: '原初',
      text: '从毒袋中选择1张『雪灯毒』，将其置于对手的牌库顶。\n【使用后】每当你的准备阶段开始时，你可以将此牌变为未使用状态。若如此做，则进行一次“攻击距离0-2 伤害X/X 【常时】X等于对手的手牌中毒牌的张数。”的攻击。',
      textjp: '毒袋から「雪灯毒」を1枚選び、相手の山札の一番上に置く。\n【使用済】あなたの開始フェイズの開始時にこのカードを未使用に戻してもよい。そうした場合、攻撃『適正距離0-2、X/X、【常時】Xは相手の手札にある毒カードの枚数に等しい』を行う。'
    }],
    poison: [{
      id: 'na-09-chikage-o-p-α',
      cardwho: '扩张',
      cardwhojp: '拡張',
      name: '灭灯毒',
      namejp: '滅灯毒',
      baseType: 'normal',
      types: ['action'],
      text: '终端\n对自装造成2点伤害。\n【常时】此牌不能被移出弃牌区。\n【常时】若此牌位于弃牌区，则你的毒牌所记述的数字与樱花结晶的数目变为原来的2倍。\n（仅当使用神座规则时用此牌进行游戏）',
      textjp: '終端\nあなたのオーラに2ダメージを与える。\n【常時】このカードは捨て札から移動しない。\n【常時】このカードが捨て札にあるならば、あなたの毒カードに書かれた数字と桜花結晶の数は2倍になる。\n（このカードは神座の適用時のみに用いる）'
    },
    {
      id: 'na-09-chikage-o-p-α',
      cardwho: '扩张',
      cardwhojp: '拡張',
      name: '灭灯毒',
      namejp: '滅灯毒',
      baseType: 'normal',
      types: ['action'],
      text: '终端\n对自装造成2点伤害。\n【常时】此牌不能被移出弃牌区。\n【常时】若此牌位于弃牌区，则你的毒牌所记述的数字与樱花结晶的数目变为原来的2倍。\n（仅当使用神座规则时用此牌进行游戏）',
      textjp: '終端\nあなたのオーラに2ダメージを与える。\n【常時】このカードは捨て札から移動しない。\n【常時】このカードが捨て札にあるならば、あなたの毒カードに書かれた数字と桜花結晶の数は2倍になる。\n（このカードは神座の適用時のみに用いる）'
    },
    {
      id: 'na-09-chikage-o-p-β',
      name: '雪灯毒',
      namejp: '雪灯毒',
      cardwho: '原初',
      cardwhojp: '原初',
      baseType: 'normal',
      types: ['action'],
      text: '【常时】若本回合内你使用过通常牌，则你不能使用此牌。\n【常时】若此牌将被移回毒袋，则对手可以进行1次基本动作。\n将此牌移回对手的毒袋。结束当前阶段。',
      textjp: '【常時】このターン中にあなたが通常札を使用しているならば、このカードは使用できない。\n【常時】このカードが毒袋に戻るならば、その直前に相手は基本動作を1回行ってもよい。\nこのカードを相手の毒袋に戻す。その後、このフェイズを終了する。'
    }]
  }]
},
{
  name: '第三回 VS 雷螺',
  namejp: '第3回：ライラへの挑戦',
  index: 11,
  subIndex: 0,
  list: [{
    name: '通常战',
    namejp: '通常戦',
    normal: [{
      id: '12-raira-o-n-α',
      namejp: '乱動',
      baseType: 'normal',
      types: ['attack'],
      range: '1-8',
      damage: '1/1',
      cardwho: '原初',
      cardwhojp: '原初',
      textjp: '終端\n【攻撃後】手札の《全力》カード1枚を使用してもよい。'
    }],
    normalOrg: ['1|1'],
    special: [{
      id: '12-raira-o-s-α',
      namejp: '天理天道覆載圏',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '5',
      cost: '1',
      cardwho: '原初',
      cardwhojp: '原初',
      textjp: '【展開中】あなたがカードを使用するたびに風神ゲージと雷神ゲージを1上げてもよい。\n【破棄時】嵐の力を好きなだけ使用する。'
    }],
    extra: [{
      id: '12-raira-a1-st',
      cardwho: '扩张',
      cardwhojp: '拡張',
      name: '【岚之力】',
      namejp: '【嵐の力】',
      baseType: '',
      types: ['extra'],
      text: '1风：虚（1）⇔ 距\n2风：抓1张牌，盖伏1张手牌。\n3风：你获得1点集中力，对手失去1点集中力。\n----\n1雷：本回合内你的下一次《攻击》获得+1/+0。\n2雷：进行一次“攻击距离0-4 伤害1/1”的攻击。\n3雷：本回合内你的下一次对装伤害不为“-”的《攻击》获得+0/+1。',
      textjp: '風1：ダスト（１）⇔間合。\n風2：カードを１枚引き、手札を１枚伏せ札にする。\n風3：あなたは集中力を１得て、相手は集中力を１失う。\n----\n雷1：このターンにあなたが次に行う《攻撃》は+1/+0となる。\n雷2：攻撃『適正距離0-4、1/1』を行う。\n雷3：このターンにあなたが次に行うオーラへのダメージが「-」でない《攻撃》は+0/+1となる。'
    }]
  },
  {
    name: '英雄战',
    namejp: '英雄戦',
    normal: [{
      id: '12-raira-o-n-α',
      namejp: '大乱動',
      baseType: 'normal',
      types: ['attack', 'reaction'],
      range: '1-8',
      damage: '2/1',
      cardwho: '原初',
      cardwhojp: '原初',
      textjp: '対応不可\n【攻撃後】手札のカード1枚を使用してもよい。（全力でもよい）'
    }, {
      id: '12-raira-o-n-γ',
      cardwho: '扩张',
      cardwhojp: '拡張',
      name: '原初暴风',
      namejp: '原初暴風',
      baseType: 'normal',
      types: ['attack'],
      range: '2-4',
      damage: '2/1',
      text: '【攻击后】风神槽的值增加1。然后你可以使用1次岚之力。',
      textjp: '【攻撃後】風神ゲージを1上げる。その後、嵐の力を1回使用してもよい。'
    }],
    special: [{
      id: '12-raira-o-s-α',
      namejp: '天理天道覆載圏',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '5',
      cost: '1',
      cardwho: '原初',
      cardwhojp: '原初',
      textjp: '【展開中】あなたがカードを使用するたびに風神ゲージと雷神ゲージを1上げてもよい。\n【破棄時】嵐の力を好きなだけ使用する。'
    }],
    extra: [{
      id: '12-raira-a1-st',
      cardwho: '扩张',
      cardwhojp: '拡張',
      name: '【岚之力】',
      namejp: '【嵐の力】',
      baseType: '',
      types: ['extra'],
      text: '1风：距（1） ⇔ 虚\n2风：你获得1集中力，对手失去1点集中力。\n3风：抓一张牌。\n----\n1雷：本回合你的下一次《攻击》获得+1/+0。\n2雷：本回合内你的下一次对装伤害不为“-”的《攻击》获得+0/+1。\n3雷：进行一次“攻击距离0-4 伤害2/2”的攻击。',
      textjp: '1風,間合（1） ⇔ 虚。\n2風,あなたは集中力を1得て、相手は集中力を1失う。\n3風,カードを1枚引く。\n----\n1雷,このターンにあなたが次に行う《攻撃》は+1/+0となる。\n2雷,このターンにあなたが次に行うオーラへのダメージが「—」でない《攻撃》は+0/+1となる。\n3雷,攻撃「適正距離0-4、2/2」を行う。'
    }]
  }]
},
{
  name: '第四回 VS 希',
  namejp: '第4回：メガミへの挑戦',
  index: 18,
  subIndex: 0,
  list: [{
    name: '通常战',
    namejp: '通常戦',
    normal: [{
      id: '19-megumi-o-n-α',
      namejp: '宿木',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['enhance'],
      capacity: '0',
      capacityGrowup: '2',
      text: '生长2\n（卡文文本待补充）',
      textjp: '生育 2\n（日本語テキストはもう少しお待ちください）'
    }, {
      id: '19-megumi-o-n-β',
      cardwho: '扩张',
      cardwhojp: '拡張',
      namejp: '片喰',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '2',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }],
    special: [{
      id: '19-megumi-o-s-α',
      namejp: 'その先の青空',
      baseType: 'special',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['enhance'],
      capacity: '3',
      cost: '2',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }],
    extra: [{
      id: '19-megumi-o-n-ε',
      namejp: '英雄の一撃',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['attack'],
      range: '4-5',
      damage: '3/2',
      text: '不可被对应',
      textjp: '対応不可'
    }]
  },
  {
    name: '英雄战',
    namejp: '英雄戦',
    normal: [{
      id: '19-megumi-o-n-γ',
      namejp: '勇者の杖',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['enhance'],
      capacity: '1',
      capacityGrowup: '2',
      text: '生长2\n（卡文文本待补充）',
      textjp: '生育 2\n（日本語テキストはもう少しお待ちください）'
    }, {
      id: '19-megumi-o-n-δ',
      cardwho: '扩张',
      cardwhojp: '拡張',
      namejp: '魔女の杖',
      baseType: 'normal',
      types: ['enhance'],
      capacity: '3',
      text: '（卡文文本待补充）',
      textjp: '日本語テキストはもう少しお待ちください）'
    }],
    special: [{
      id: '19-megumi-o-s-α',
      namejp: 'その先の青空',
      baseType: 'special',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['enhance'],
      capacity: '3',
      cost: '2',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }],
    extra: [{
      id: '19-megumi-o-n-ε',
      namejp: '英雄の一撃',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['attack'],
      range: '4-5',
      damage: '3/2',
      text: '不可被对应',
      textjp: '対応不可'
    }]
  }]
},
{
  name: '第五回 VS 森罗',
  namejp: '第5回：シンラへの挑戦',
  index: 6,
  subIndex: 0,
  list: [{
    name: '通常战',
    namejp: '通常戦',
    normalOrg: ['1|1'],
    normal: [{
      id: '07-shinra-o-n-α',
      namejp: '啓発',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['enhance'],
      capacity: '3',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }],
    special: [{
      id: '07-shinra-o-n-α',
      namejp: '不在証明',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['enhance'],
      capacity: '3',
      cost: '1',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }]
  },
  {
    name: '英雄战',
    namejp: '英雄戦',
    normal: [{
      id: '07-shinra-o-n-β',
      namejp: '啓蒙',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['enhance'],
      capacity: '3',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    },{
      id: '07-shinra-o-n-γ',
      cardwho: '扩张',
      cardwhojp: '拡張',
      namejp: '福音',
      baseType: 'normal',
      types: ['action', 'reaction'],
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }],
    special: [{
      id: '07-shinra-o-n-α',
      namejp: '不在証明',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['enhance'],
      capacity: '3',
      cost: '1',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }]
  }]
},
{
  name: '第六回 VS 常世（7扩限定）',
  namejp: '第6回：トコヨへの挑戦（第七拡張限定収録）',
  index: 3,
  subIndex: 0,
  list: [{
    name: '通常战',
    namejp: '通常戦',
    normal: [{
      id: '04-tokoyo-o-n-α',
      namejp: '審美眼',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['enhance', 'reaction'],
      capacity: '3',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }, {
      id: '04-tokoyo-o-n-β',
      namejp: '蝶の舞',
      baseType: 'normal',
      cardwho: '扩张',
      cardwhojp: '拡張',
      types: ['enhance'],
      capacity: '2',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }],
    special: [{
      id: '04-tokoyo-o-s-α',
      namejp: '花鳥風月常世郷',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['action'],
      cost: '1',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }]
  },
  {
    name: '英雄战',
    namejp: '英雄戦',
    normal: [{
      id: '04-tokoyo-o-n-α',
      namejp: '審美眼',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['enhance', 'reaction'],
      capacity: '3',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }, {
      id: '04-tokoyo-o-n-β',
      namejp: '蝶の舞',
      baseType: 'normal',
      cardwho: '扩张',
      cardwhojp: '拡張',
      types: ['enhance'],
      capacity: '2',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }],
    special: [{
      id: '04-tokoyo-o-s-α',
      namejp: '花鳥風月常世郷',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['action'],
      cost: '1',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }, {
      id: '04-tokoyo-o-s-β',
      namejp: '永遠のメガミ',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['enhance', 'fullpower'],
      capacity: '2',
      cost: '8',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }]
  }]
},
{
  name: '第七回 VS 凝努',
  namejp: '第7回：コルヌへの挑戦',
  index: 14,
  subIndex: 0,
  list: [{
    name: '通常战',
    namejp: '通常戦',
    normal: [{
      id: '15-korunu-o-n-α',
      namejp: '永久凍土',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['enhance'],
      capacity: '4',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }],
    special: [{
      id: '15-korunu-o-s-α',
      namejp: 'コルヌコラムヌカラ',
      baseType: 'special',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['action', 'reaction'],
      cost: '3',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }]
  },
  {
    name: '英雄战',
    namejp: '英雄戦',
    normal: [{
      id: '15-korunu-o-n-β',
      namejp: '永久凍土',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['enhance'],
      capacity: '4',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }, {
      id: '15-korunu-o-n-γ',
      namejp: '霧氷',
      baseType: 'normal',
      cardwho: '扩张',
      cardwhojp: '拡張',
      types: ['attack', 'reaction'],
      range: '4-9',
      damage: '1/-',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }],
    special: [{
      id: '15-korunu-o-s-α',
      namejp: 'コルヌコラムヌカラ',
      baseType: 'special',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['action', 'reaction'],
      cost: '3',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }]
  }]
},
{
  name: '第八回 VS 破钟',
  namejp: '第8回：ハガネへの挑戦',
  index: 7,
  subIndex: 0,
  list: [{
    name: '通常战',
    namejp: '通常戦',
    normal: [{
      id: '08-hagane-o-n-α',
      namejp: '大跳ね',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['action'],
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }],
    special: [{
      id: '08-hagane-o-s-α',
      namejp: '大旋空ストリ一ム',
      baseType: 'special',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['action'],
      cost: '3',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }]
  },
  {
    name: '英雄战',
    namejp: '英雄戦',
    normal: [{
      id: '08-hagane-o-n-β',
      namejp: '土砂雪崩',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['action'],
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }],
    special: [{
      id: '08-hagane-o-s-β',
      namejp: '大旋空エクストリ一ム',
      baseType: 'special',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['action'],
      cost: '3',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }]
  }]
},
{
  name: '第9回 VS 雪灯',
  namejp: '第9回：ユキヒの挑戦',
  index: 5,
  subIndex: 0,
  list: [{
    name: '通常战',
    namejp: '通常戦',
    normal: [{
      id: '06-yukihi-o-n-α',
      namejp: 'こころがさね',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['action', 'reaction'],
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }],
    special: [{
      id: '06-yukihi-o-s-α-1',
      namejp: 'こころがさね',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['attack'],
      range: '4-6',
      damage: '2/1',
      cost: '2',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }, {
      id: '06-yukihi-o-s-α-2',
      namejp: '滅灯淀路',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['action'],
      cost: '0',
      text: '终端\n（卡文文本待补充）',
      textjp: '終端\n（日本語テキストはもう少しお待ちください）'
    }]
  },
  {
    name: '英雄战',
    namejp: '英雄戦',
    normal: [{
      id: '06-yukihi-o-n-α',
      namejp: 'こころがさね',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['action', 'reaction'],
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }],
    special: [{
      id: '06-yukihi-o-s-α-1',
      namejp: 'こころがさね',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['attack'],
      range: '4-6',
      damage: '2/1',
      cost: '2',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }, {
      id: '06-yukihi-o-s-α-2',
      namejp: '滅灯淀路',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['action'],
      cost: '0',
      text: '终端\n（卡文文本待补充）',
      textjp: '終端\n（日本語テキストはもう少しお待ちください）'
    }]
  }]
},
{
  name: '第十回 VS 初海',
  namejp: '第10回：ハツミへの挑戦',
  index: 16,
  subIndex: 0,
  list: [{
    name: '通常战',
    namejp: '通常戦',
    normal: [{
      id: '17-hatsumi-o-n-α',
      namejp: '大瀑布',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['attack'],
      range: '2-7',
      damage: '7/4',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }, {
      id: '17-hatsumi-o-n-β',
      namejp: '大潮',
      baseType: 'normal',
      cardwho: '扩张',
      cardwhojp: '拡張',
      types: ['enhance'],
      capacity: '1',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }],
    special: [{
      id: '17-hatsumi-o-s-α',
      namejp: '天ツ水道七標',
      baseType: 'special',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['action'],
      cost: 'X',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }]
  },
  {
    name: '英雄战',
    namejp: '英雄戦',
    normal: [{
      id: '17-hatsumi-o-n-α',
      namejp: '大瀑布',
      baseType: 'normal',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['attack'],
      range: '2-7',
      damage: '7/4',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }, {
      id: '17-hatsumi-o-n-β',
      namejp: '大潮',
      baseType: 'normal',
      cardwho: '扩张',
      cardwhojp: '拡張',
      types: ['enhance'],
      capacity: '1',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }],
    special: [{
      id: '17-hatsumi-o-s-α',
      namejp: '天ツ水道七標',
      baseType: 'special',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['action'],
      cost: 'X',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }, {
      id: '17-hatsumi-o-s-β',
      namejp: '海神の天運',
      baseType: 'special',
      cardwho: '原初',
      cardwhojp: '原初',
      types: ['action', 'reaction'],
      cost: '2',
      text: '（卡文文本待补充）',
      textjp: '（日本語テキストはもう少しお待ちください）'
    }]
  }]
}
]