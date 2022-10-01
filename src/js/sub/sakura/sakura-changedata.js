export default [
  {
    id: 'S7-2',
    name: 'S7 -> S7-2赛季更新',
    namejp: 'シーズン７→７－２カード更新',
    link: 'http://bfpblog.bakafire.main.jp/?eid=568',
    list: [{
      id: '02-saine-a2-n-7',
      from: {
        cardwhojp: 'S7',
        changeIndex: '7',
        id: '02-saine-a2-n-7',
        name: '遗响壁',
        namejp: '遺響壁',
        baseType: 'normal',
        types: ['enhance'],
        capacity: '2',
        text: '【展开中】当你结算对装伤害时，此牌上的樱花结晶视为在自装中。\n【破弃时】本回合内你的下一次《攻击》获得+0/+1。',
        textjp: '【展开中】あなたへのダメージを解决するに際し、このカードの上に置かれた桜花结晶をあなたのオーラにあるかのように扱う。\n【破弃时】このターンにあなたが次に行う≪攻撃≫は+0/+1となる。'
      },
      to: {
        cardwhojp: 'S7-2',
        changeIndex: '7',
        id: '02-saine-a2-n-7',
        name: '遗响壁',
        namejp: '遺響壁',
        baseType: 'normal',
        types: ['enhance'],
        capacity: '2',
        text: '【展开中】当你结算对装伤害时，此牌上的樱花结晶视为在自装中。\n【破弃时】八相～若当前为你的回合，且自装中的樱花结晶的数目小于等于1，则进行一次“攻击距离0-5 伤害0/0 【攻击后】对敌装造成2点伤害，本回合内你进行的下一次《攻击》获得+0/+1。”的攻击。',
        textjp: '【展開中】あなたへのダメージを解決するに際し、このカードの上に\n置かれた桜花結晶をあなたのオーラにあるかのように扱う。\n【破棄時】八相-あなたのオーラが1以下かつ現在のターンがあなたのターンならば、攻撃『適正距離0-5、0/0、【攻撃後】相手のオーラに2ダメージを与え、このターンにあなたが次に行う<攻撃>は+0/+1となる』を行う。'
      }
    }, {
      id: '08-hagane-o-n-7',
      from: {
        cardwhojp: 'S7',
        id: '08-hagane-o-n-7',
        name: '引力场',
        namejp: '引力場',
        baseType: 'normal',
        types: ['enhance'],
        capacity: '4',
        text: '【展开时】距（1）→虚\n【展开中】达人距离减小1。',
        textjp: '【展開時】間合→ダスト：1 \n【展開中】達人の間合は1小さくなる。'
      },
      to: {
        cardwhojp: 'S7-2',
        id: '08-hagane-o-n-7',
        name: '引力场',
        namejp: '引力場',
        baseType: 'normal',
        types: ['enhance'],
        capacity: '2',
        text: '全力化：【常时】因此牌上的箭头效果移动的樱花结晶的数目增大1。\n【展开时】距（1）→自装\n【展开中】达人距离减小1。',
        textjp: '全力化:【常時】このカードの持つ矢印で動く桜花結晶は1つ多くなる。\n【展開時】間合→自オーラ：1\n【展開中】達人の間合は1小さくなる。'
      }
    }, {
      id: '10-kururu-o-n-5',
      from: {
        cardwhojp: 'S7',
        id: '10-kururu-o-n-5',
        name: '回嗖利用',
        namejp: 'りげいなー',
        baseType: 'normal',
        types: ['action', 'fullpower'],
        colors: ['红紫'],
        text: '机巧：红紫～\n你可以从你的处于使用后状态的王牌中选择1张。使用所选择的牌，而不需支付其费用（可以选择《全力》牌）。\n----\n你的集中力变为0。',
        textjp: '<攻対> あなたの使用済の切札を1枚選んでもよい。そのカードを消費を支払わずに使用する。(《全力》カードでもよい) \n----\nあなたの集中力は0になる。',
        textkururu: [{
          if: '<i class="i-bean i-bean--red"></i><i class="i-bean i-bean--purple"></i>',
          ctn: '你可以从你的处于使用后状态的王牌中选择1张。使用所选择的牌，而不需支付其费用（可以选择《全力》牌）。'
        }, {
          ctn: '你的集中力变为0。'
        }],
        textkururujp: [{
          if: '<i class="i-bean i-bean--red"></i><i class="i-bean i-bean--purple"></i>',
          ctn: 'あなたの使用済の切札を1枚選んでもよい。そのカードを消費を支払わずに使用する。(《全力》カードでもよい)'
        }, {
          ctn: 'あなたの集中力は0になる。'
        }]
      },
      to: {
        cardwhojp: 'S7-2',
        colors: ['绿紫'],
        id: '10-kururu-o-n-5',
        name: '回嗖利用',
        namejp: 'りげいなー',
        namekr: '리게이너',
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
      }
    }, {
      id: '13-utsuro-o-n-1',
      from: {
        cardwhojp: 'S7',
        id: '13-utsuro-o-n-1',
        name: '圆月',
        namejp: '円月',
        baseType: 'normal',
        types: ['attack'],
        range: '6-7',
        damage: '2/2',
        text: '【常时】灰尘～若虚中的樱花结晶的数目大于等于12，则此《攻击》的对装伤害改为“-”。',
        textjp: '【常時】灰塵-ダストが12以上ならば、この《攻撃》のオーラへのダメージは「-」になる。'
      },
      to: {
        cardwhojp: 'S7-2',
        id: '13-utsuro-o-n-1',
        name: '圆月',
        namejp: '円月',
        baseType: 'normal',
        types: ['attack'],
        range: '5-7',
        damage: '2/2',
        text: '【常时】灰尘～若虚中的樱花结晶的数目大于等于12，则此《攻击》获得距离扩大（近1），且对装伤害变为“-”。',
        textjp: '【常時】灰塵-ダストが12以上ならば、この《攻撃》は距離拡大（近1）を得て、そのオーラへのダメージは「-」になる。'
      }
    }, {
      id: '14-honoka-o-n-1',
      from: {
        cardwhojp: 'S7',
        id: '14-honoka-o-n-1',
        name: '精灵式',
        namejp: '精霊式',
        baseType: 'normal',
        types: ['attack'],
        range: '3-4',
        damage: '1/1',
        text: '不可被对应\n【攻击后】开花～你可以将这张『精灵式』与追加牌区中的『守护灵式』交换。若如此做，则你可以将『守护灵式』置于你的牌库底。',
        textjp: '対応不可 \n【攻撃後】開花-この「精霊式」を追加札の「守護霊式」と交換してもよい。そうした場合、その「守護霊式」を山札の底に置いてもよい。'
      },
      to: {
        cardwhojp: 'S7-2',
        id: '14-honoka-o-n-1',
        name: '精灵式',
        namejp: '精霊式',
        baseType: 'normal',
        types: ['attack'],
        range: '2-8',
        damage: '1/1',
        text: '不可被对应\n【攻击后】开花～你可以将这张『精灵式』与追加牌区中的『守护灵式』交换。若如此做，则你可以将『守护灵式』置于你的牌库底。',
        textjp: '対応不可 \n【攻撃後】開花-この「精霊式」を追加札の「守護霊式」と交換してもよい。そうした場合、その「守護霊式」を山札の底に置いてもよい。'
      }
    }, {
      id: '14-honoka-o-n-1-ex2',
      from: {
        cardwhojp: 'S7',
        id: '14-honoka-o-n-1-ex2',
        name: '突击灵式',
        namejp: '突撃霊式',
        baseType: 'normal',
        types: ['attack'],
        range: '5',
        damage: '3/2',
        text: '不可被闪避\n【攻击后】开花～你可以将这张『突击灵式』与追加牌区中的『神灵奥华』交换。若如此做，则你可以将『神灵奥华』置于你的牌库底。',
        textjp: '不可避 \n【攻撃後】開花-この「突撃霊式」を追加札の「神霊ヲウカ」と交換してもよい。そうした場合、その「神霊ヲウカ」を山札の底に置いてもよい。'
      },
      to: {
        cardwhojp: 'S7-2',
        id: '14-honoka-o-n-1-ex2',
        name: '突击灵式',
        namejp: '突撃霊式',
        baseType: 'normal',
        types: ['attack'],
        range: '5',
        damage: '3/2',
        text: '不可被对应\n【攻击后】虚（1）→自命\n【攻击后】开花～你可以将这张『突击灵式』与追加牌区中的『神灵奥华』交换。若如此做，则你可以将『神灵奥华』置于你的牌库底。',
        textjp: '対応不可\n【攻撃後】ダスト→自ライフ：1\n【攻撃後】開花ーこの「突撃霊式」を追加札の「神霊ヲウカ」と交換してもよい。そうした場合、その「神霊ヲウカ」を山札の底に置いてもよい。'
      }
    }, {
      id: '15-korunu-o-n-5',
      from: {
        cardwhojp: 'S7',
        id: '15-korunu-o-n-5',
        name: '绝对零度',
        namejp: '絶対零度',
        baseType: 'normal',
        types: ['action', 'fullpower'],
        text: '冻结对手，直至敌装中没有空位为止。',
        textjp: '相手はオーラの空きがなくなるまで凍結する。'
      },
      to: {
        cardwhojp: 'S7-2',
        id: '15-korunu-o-n-5',
        name: '绝对零度',
        namejp: '絶対零度',
        baseType: 'normal',
        types: ['action', 'reaction'],
        text: '全力化：进行一次“攻击距离2-5 伤害1/2”的攻击。冻结对手，直至敌装中没有空位为止。\n执行1次基本动作《装附》。若敌装中有至少3个冻结指示物，则再执行1次基本动作《装附》。',
        textjp: '全力化:攻撃『適正距離2-5、1/2』を行い、相手はオーラの空きがなくなるまで凍結する。\n基本動作《纏い》を1回行う。相手が3つ以上凍結しているならばさらにもう1回行う。'
      }
    }, {
      id: '16-yatsuha-a1-s-4',
      from: {
        cardwhojp: 'S7',
        changeIndex: '4',
        id: '16-yatsuha-a1-s-4',
        name: '八叶镜的徒樱',
        namejp: '八葉鏡の徒桜',
        baseType: 'special',
        cost: 2,
        types: ['attack'],
        range: '0-7',
        damage: '1/0',
        text: '【使用后】每当你将要重铸牌库时，你可以从弃牌或手牌中选择1张八叶的牌，展示该牌，然后将其变为完全态。\n（例如，若你展示了手牌中的『星之爪』，则将其与追加牌区中的『星尘之利爪』交换，并加入手牌。）',
        textjp: '【使用済】あなたが山札を再構成するならば、その直前にあなたの捨て札または手札にあるヤツハのカード1枚を公開し、完全態にしてもよい。\n（例えば手札の「星の爪」を公開したならば追加札の「星辰の鈎爪」と交換され、手札に加わる。）'
      },
      to: {
        cardwhojp: 'S7-2',
        changeIndex: '4',
        id: '16-yatsuha-a1-s-4',
        name: '八叶镜的徒樱',
        namejp: '八葉鏡の徒桜',
        baseType: 'special',
        cost: 1,
        types: ['attack'],
        range: '0-8',
        damage: '1/0',
        text: '终端 不可被对应\n【攻击后/使用后】攻击后或每当你将要重铸牌库时，你可以从弃牌区或手牌中选择1张八叶的牌，展示该牌，然后将其变为完全态。\n（例如，若你展示了手牌中的『星之爪』，则将其与追加牌区中的『星尘之利爪』交换，并加入手牌。）',
        textjp: '終端 対応不可\n【攻撃後/使用済】攻撃後とあなたが山札を再構成する直前に、あなたの捨て札または手札にあるヤツハのカード1枚を公開し、完全態にしてもよい。\n（例えば手札の「星の爪」を公開したならば追加札の「星辰の鈎爪」と交換され、手札に加わる。）'
      }
    }, {
      id: '17-hatsumi-o-n-5',
      from: {
        cardwhojp: 'S7',
        id: '17-hatsumi-o-n-5',
        namejp: '準備万端',
        name: '准备万全',
        baseType: 'normal',
        types: ['action', 'fullpower'],
        text: '虚（3）→自装\n你可以从手牌中选择1张牌，将其置于你的牌库顶。',
        textjp: 'ダスト→自オーラ：3\nあなたは手札を1枚選び、それを山札の一番上に置いてもよい。'
      },
      to: {
        cardwhojp: 'S7-2',
        id: '17-hatsumi-o-n-5',
        namejp: '準備万端',
        name: '准备万全',
        baseType: 'normal',
        types: ['action', 'fullpower'],
        text: '虚（3）→自装\n你可以抓1张牌。\n若你处于逆风状态，则本回合内你的手牌上限增大1。',
        textjp: 'ダスト→自オーラ：3\nカードを1枚引いてもよい。\n逆風ならばこのターンの間、手札の上限が1増加する。'
      }
    }, {
      id: '18-mizuki-o-s-3',
      from: {
        cardwhojp: 'S7',
        id: '18-mizuki-o-s-3',
        namejp: '大手楯無門',
        name: '大手楯无门',
        baseType: 'special',
        cost: '4',
        types: ['action'],
        text: '终端\n将你的一张手牌与追加牌区中的『斗神』以已征兵状态置于兵舍。',
        textjp: '終端\nあなたの手札一枚と追加札の「闘神」を兵舎に徴兵済で置く。'
      },
      to: {
        cardwhojp: 'S7-2',
        id: '18-mizuki-o-s-3',
        namejp: '大手楯無門',
        name: '大手楯无门',
        baseType: 'special',
        cost: '3',
        types: ['action'],
        text: '终端\n将你的1张手牌与追加牌区中的『斗神』以已征兵状态置于兵舍。进行1次征兵。\n【使用后】你从兵舍中使用的《攻击》牌生成的《攻击》获得+1/+0。你从兵舍中使用的具《对应》副类别的牌失去终端关键字。',
        textjp: '終端\n追加札の「闘神」と手札のカード1枚を選び、それらを兵舎に徴兵済で置く。徴兵を1回行う。\n【使用済】あなたが兵舎から使用した《攻撃》カードによる《攻撃》は+1/+0となる。あなたが兵舎から使用した《対応》カードは終端を失う。'
      }
    }, {
      id: '20-kanawe-o-n-2',
      from: {
        cardwhojp: 'S7',
        id: '20-kanawe-o-n-2',
        name: '脚本化',
        namejp: '脚本化',
        baseType: 'normal',
        types: ['attack'],
        range: '1-9',
        damage: '1/1',
        text: '【攻击后】你可以从追加区准备1张构想牌。\n【常时】你的结束阶段开始时，若此牌位于弃牌区，则你可以将其置于牌库底。',
        textjp: '【攻撃後】追加札から構想カードを1枚準備してもよい。\n【常時】あなたの終了フェイズにこのカードを捨て札から山札の底に置いてもよい。'
      },
      to: {
        cardwhojp: 'S7-2',
        id: '20-kanawe-o-n-2',
        name: '脚本化',
        namejp: '脚本化',
        baseType: 'normal',
        types: ['attack'],
        range: '2-8',
        damage: '0/0',
        text: '【攻击后】你可以从追加区准备1张构想牌。\n【常时】你的结束阶段开始时，若此牌位于弃牌区，则你可以将其置于牌库底。若如此做，则对手获得1点集中力。',
        textjp: '【攻撃後】追加札から構想カードを1枚準備してもよい。\n【常時】あなたの終了フェイズにこのカードを捨て札から山札の底に置いてもよい。そうした場合、相手は集中力を1得る。'
      }
    }, {
      id: '21-kamuwi-o-n-4',
      from: {
        cardwhojp: 'S7',
        id: '21-kamuwi-o-n-4',
        name: '格杀',
        namejp: '斬り払い',
        baseType: 'normal',
        types: ['attack', 'reaction'],
        range: '1-4',
        damage: '1/1',
        text: '禁忌+1～【攻击后】打消被对应的《攻击》。若该《攻击》为王牌，则禁忌槽的值增加2。\n----',
        textjp: '＜禁忌+1＞【攻撃後】対応した《攻撃》を打ち消す。その《攻撃》が切札ならば、禁忌ゲージを2上げる。\n----',
        textkururu: [{
          if: '<i class="i-jinji">禁忌+1</i>',
          ctn: '【攻击后】打消被对应的《攻击》。若该《攻击》为王牌，则禁忌槽的值增加2。'
        }],
        textkururujp: [{
          if: '<i class="i-jinji">禁忌+1</i>',
          ctn: '【攻撃後】対応した《攻撃》を打ち消す。その《攻撃》が切札ならば、禁忌ゲージを2上げる。'
        }]
      },
      to: {
        cardwhojp: 'S7-2',
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
      }
    }, {
      id: '21-kamuwi-o-s-1',
      from: {
        cardwhojp: 'S7',
        id: '21-kamuwi-o-s-1',
        namejp: '灯',
        name: '灯',
        baseType: 'special',
        cost: '4',
        types: ['action'],
        text: '禁忌+2～若自气中樱花结晶的数目大于等于2，则保留其中1个樱花结晶，其余移至虚。将『晓』以从追加牌区未使用状态加入王牌。\n----',
        textjp: '＜禁忌+2＞あなたのフレアが2以上ならば、フレアが1になるように桜花結晶をダストに送る。追加札から「暁」を未使用で得る。\n----',
        textkururu: [{
          if: '<i class="i-jinji">禁忌+2</i>',
          ctn: '若自气中樱花结晶的数目大于等于2，则保留其中1个樱花结晶，其余移至虚。将『晓』以从追加牌区未使用状态加入王牌。'
        }],
        textkururujp: [{
          if: '<i class="i-jinji">禁忌+2</i>',
          ctn: 'あなたのフレアが2以上ならば、フレアが1になるように桜花結晶をダストに送る。追加札から「暁」を未使用で得る。'
        }]
      },
      to: {
        cardwhojp: 'S7-2',
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
      }
    }, {
      id: '21-kamuwi-o-s-2',
      from: {
        cardwhojp: 'S7',
        id: '21-kamuwi-o-s-2',
        name: '阡',
        namejp: '阡',
        baseType: 'special',
        cost: '3',
        types: ['enhance'],
        capacity: '4',
        text: '禁忌+1～【展开时】进行一次“攻击距离3-4 伤害3/3 不可被对应（通常牌）”的攻击。\n----\n【常时】若此牌上置有樱花结晶，则你不能因敌命中樱花结晶的数目降至0或叙述为“你赢得本局游戏”的牌的效果而赢得本局游戏。',
        textjp: '＜禁忌+1＞【展開時】攻撃『適正距離3-4、3/3、対応不可（通常札）』を行う。\n----\n【常時】このカードの上に桜花結晶が置かれているならば、あなたは勝利できない。',
        textkururu: [{
          if: '<i class="i-jinji">禁忌+1</i>',
          ctn: '【展开时】进行一次“攻击距离3-4 伤害3/3 不可被对应（通常牌）”的攻击。'
        }, {
          ctn: '【常时】若此牌上置有樱花结晶，则你不能因敌命中樱花结晶的数目降至0或叙述为“你赢得本局游戏”的牌的效果而赢得本局游戏。'
        }],
        textkururujp: [{
          if: '<i class="i-jinji">禁忌+1</i>',
          ctn: '【展開時】攻撃『適正距離3-4、3/3、対応不可（通常札）』を行う。'
        }, {
          ctn: '【常時】このカードの上に桜花結晶が置かれているならば、あなたは勝利できない。'
        }]
      },
      to: {
        cardwhojp: 'S7-2',
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
      }
    }]
  },
  {
    id: 'S7',
    name: 'S6-2 -> S7赛季更新',
    namejp: 'シーズン６－２→７カード更新',
    link: 'http://bfpblog.bakafire.main.jp/?eid=515',
    list: [{
      id: '14-honoka-a1-s-1',
      to: {
        cardwhojp: 'S7',
        id: '14-honoka-a1-s-1',
        name: '独醒于昏明',
        namejp: 'ひとり目覚めて',
        cost: '3',
        baseType: 'special',
        types: ['action'],
        text: '敌装（1）→自装\n开花～根据虚中樱花结晶的数目，将这张『独醒于昏明』与下述的牌进行交换，并置于你的牌库底。\n小于等于5……『循迹访清荧』\n大于等于6……『彷徨徒视影』',
        textjp: '相オーラ→自オーラ：1\n開花―ダストに応じてこの「ひとり目覚めて」を以下のカードと交換し、それを山札の底に置く。\n5以下…「標をたどり」\n6以上…「影面見向き」'
      },
      from: {
        cardwhojp: 'S6-2',
        id: '14-honoka-a1-s-1',
        name: '独醒于昏明',
        namejp: 'ひとり目覚めて',
        cost: '2',
        baseType: 'special',
        types: ['action'],
        text: '敌装（1）→自装\n开花～根据虚中樱花结晶的数目，将这张『独醒于昏明』与下述的牌进行交换，并置于你的牌库底。\n小于等于5……『循迹访清荧』\n大于等于6……『彷徨徒视影』',
        textjp: '相オーラ→自オーラ：1\n開花―ダストに応じてこの「ひとり目覚めて」を以下のカードと交換し、それを山札の底に置く。\n5以下…「標をたどり」\n6以上…「影面見向き」'
      }
    },
    {
      id: '20-kanawe-o-n-7',
      to: {
        cardwhojp: 'S7',
        id: '20-kanawe-o-n-7',
        name: '封杀',
        namejp: '封殺',
        baseType: 'normal',
        types: ['enhance'],
        capacity: '3',
        text: '【展开时】宣言1个牌名。\n【展开中】对手的回合内，对手不能使用具有你所宣言的名称的王牌。若当前剧幕的颜色为【红】，对手不能使用具有你所宣言的名称的通常牌。\n【破弃时】你获得1点集中力。',
        textjp: '【展開時】カードの名前を1つ宣言する。\n【展開中】相手のターン中、相手は宣言された名前を持つ切札を使用できない。現在の幕の色が赤ならば、宣言された名前を持つ通常札も使用できない。\n【破棄時】あなたは集中力を1得る。'
      },
      from: {
        cardwhojp: 'S6-2',
        id: '20-kanawe-o-n-7',
        name: '封杀',
        namejp: '封殺',
        baseType: 'normal',
        types: ['enhance'],
        capacity: '2',
        text: '【展开时】宣言1个牌名。\n【展开中】对手的回合内，对手不能使用具有你所宣言的名称的王牌。若当前剧幕的颜色为【红】，对手不能使用具有你所宣言的名称的通常牌。\n【破弃时】你获得1点集中力。',
        textjp: '【展開時】カードの名前を1つ宣言する。\n【展開中】相手のターン中、相手は宣言された名前を持つ切札を使用できない。現在の幕の色が赤ならば、宣言された名前を持つ通常札も使用できない。\n【破棄時】あなたは集中力を1得る。'
      }
    },
    {
      id: '20-kanawe-o-s-2',
      to: {
        cardwhojp: 'S7',
        id: '20-kanawe-o-s-2',
        name: '芳颜无常 星辉灯影',
        namejp: 'ほかげきらぼし',
        baseType: 'special',
        cost: 'X',
        types: ['action'],
        text: '【常时】X等于当前剧幕的值。\n若当前剧幕的颜色为【绿】、【红】、【紫】之一，则结算其对应的效果。\n----\n【即再起】进入下一个剧幕。',
        textjp: '【常時】Xは現在の幕の値に等しい。\n現在の幕の色が緑、赤、紫のいずれかならば、その効果を得る。\n----\n【即再起】次の幕へ向かう。'
      },
      from: {
        cardwhojp: 'S6-2',
        id: '20-kanawe-o-s-2',
        name: '芳颜无常 星辉灯影',
        namejp: 'ほかげきらぼし',
        baseType: 'special',
        cost: 'X',
        types: ['action'],
        text: '【常时】X等于当前剧幕的值。\n执行1次基本动作。然后若当前剧幕的颜色为【绿】、【红】、【紫】之一，则结算其对应的效果。\n----\n【即再起】进入下一个剧幕。',
        textjp: '【常時】Xは現在の幕の値に等しい。\n基本動作を1回行う。その後、現在の幕の色が緑、赤、紫のいずれかならば、その効果を得る。\n----\n【即再起】次の幕へ向かう。'
      }
    },
    {
      id: '20-kanawe-o-s-3',
      to: {
        cardwhojp: 'S7',
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
      from: {
        cardwhojp: 'S6-2',
        id: '20-kanawe-o-s-3',
        name: '良宵讵待 盛景久盈',
        namejp: 'あたらよちよに',
        baseType: 'special',
        cost: '4',
        types: ['attack', 'reaction'],
        range: '0-4',
        damage: '2/1',
        text: '【攻击后】打消被对应的《攻击》。若被对应的《攻击》为通常牌，则将该牌置于牌库顶。若被对应的《攻击》为王牌，则将该牌变为未使用状态。',
        textjp: '【攻撃後】対応した《攻撃》を打ち消す。\nその《攻撃》が通常札ならば、そのカードを山札の上に置く。その《攻撃》が切札ならば、そのカードを未使用に戻す。'
      }
    }
    ]
  },
  {
    id: 'S6-2',
    name: 'S6 -> S6-2赛季更新',
    namejp: 'シーズン６→６－２カード更新',
    link: 'http://bfpblog.bakafire.main.jp/?eid=474',
    list: [
      {
        id: '02-saine-o-n-1',
        to: {
          cardwhojp: 'S6-2',
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
        from: {
          cardwhojp: 'S6',
          id: '02-saine-o-n-1',
          name: '八面斩',
          namejp: '八方振り',
          baseType: 'normal',
          types: ['attack'],
          range: '4-5',
          damage: '2/1',
          text: '【攻击后】八相～若自装中的樱花结晶的数目等于0，则进行一次“攻击距离4-5 伤害2/1”的攻击。',
          textjp: '【攻撃後】八相-あなたのオーラが0ならば、攻撃『適正距離4-5、2/1』を行う。'
        }
      },
      {
        id: '02-saine-o-n-3',
        to: {
          cardwhojp: 'S6-2',
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
        from: {
          cardwhojp: 'S6',
          id: '02-saine-o-n-3',
          name: '石突',
          namejp: '石突き',
          baseType: 'normal',
          types: ['attack', 'reaction'],
          range: '2-3',
          damage: '2/1',
          text: '【攻击后】八相～若自装中的樱花结晶的数目等于0，则虚（1）→距',
          textjp: '【攻撃後】八相-あなたのオーラが0ならば、ダスト→間合：1'
        }
      },
      {
        id: '02-saine-o-n-4',
        to: {
          cardwhojp: 'S6-2',
          id: '02-saine-o-n-4',
          name: '识破',
          namejp: '見切り',
          baseType: 'normal',
          types: ['action'],
          text: '【常时】八相～若自装中的樱花结晶的数目小于等于1，则此牌可以如《对应》牌一样对应《攻击》使用。\n距（1） ⇔ 虚',
          textjp: '【常時】八相-あなたのオーラが1以下ならば、このカードを《対応》を持つかのように相手の《攻撃》に割り込んで使用できる。\n間合⇔ダスト：1'
        },
        from: {
          cardwhojp: 'S6',
          id: '02-saine-o-n-4',
          name: '识破',
          namejp: '見切り',
          baseType: 'normal',
          types: ['action'],
          text: '【常时】八相～若自装中的樱花结晶的数目等于0，则此牌可以如《对应》牌一样对应《攻击》使用。\n距（1） ⇔ 虚',
          textjp: '【常時】八相-あなたのオーラが0ならば、このカードを《対応》を持つかのように相手の《攻撃》に割り込んで使用できる。\n間合⇔ダスト：1'
        }
      },
      {
        id: '02-saine-o-s-3',
        to: {
          cardwhojp: 'S6-2',
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
        from: {
          cardwhojp: 'S6',
          id: '02-saine-o-s-3',
          name: '音无碎冰',
          namejp: '音無砕氷',
          baseType: 'special',
          types: ['attack', 'reaction'],
          range: '0-10',
          damage: '1/1',
          cost: '2',
          text: '【攻击后】被对应的《攻击》获得-1/-1。\n----\n【再起】八相～自装中的樱花结晶的数目等于0。',
          textjp: '【攻撃後】対応した《攻撃》は-1/-1となる。\n----\n【再起】八相-あなたのオーラが0である。'
        }
      },
      {
        id: '02-saine-a1-s-2',
        to: {
          cardwhojp: 'S6-2',
          id: '02-saine-a1-s-2',
          name: '二重奏：弹奏冰瞑',
          namejp: '二重奏：弾奏氷瞑',
          baseType: 'special',
          types: ['action'],
          cost: '2',
          text: '终端\n对手畏缩。你抓1张牌，或获得1点集中力。\n【使用后】你的其他女神的《攻击》获得+0/+1和不可被闪避。\n----\n【即再起】自命受到除重铸牌库以外的1点及以上的伤害。',
          textjp: '終端\n相手を畏縮させる。あなたはカードを1枚引くか、集中力を1得る。\n【使用済】あなたの他のメガミによる《攻撃》は+0/+1となり、不可避を得る。\n----\n【即再起】あなたが再構築以外でライフに1以上のダメージを受ける。'
        },
        from: {
          cardwhojp: 'S6',
          id: '02-saine-a1-s-2',
          name: '二重奏：弹奏冰瞑',
          namejp: '二重奏：弾奏氷瞑',
          baseType: 'special',
          types: ['action'],
          cost: '2',
          text: '结束当前阶段。\n【使用后】你的其他女神的《攻击》获得+0/+1。\n----\n【即再起】自命受到除重铸牌库以外的1点及以上的伤害。',
          textjp: '現在のフェイズを終了する。\n【使用済】あなたの他のメガミによる《攻撃》は+0/+1となる。\n----\n【即再起】あなたが再構成以外でライフに1以上のダメージを受ける。'
        }
      },
      {
        id: '02-saine-a2-s-3',
        to: {
          cardwhojp: 'S6-2',
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
        },
        from: {
          cardwhojp: 'S6',
          id: '02-saine-a2-s-3',
          name: '绝唱绝华',
          namejp: '絶唱絶华',
          baseType: 'special',
          types: ['action', 'reaction'],
          cost: '3',
          text: '被对应的《攻击》结算完毕后，若你选择用装承受该《攻击》的伤害，且自装中的樱花结晶的数目等于0，则结束当前阶段。\n【再起】八相～自装中的樱花结晶的数目等于0。',
          textjp: '対応した≪攻撃≫の解决后に、その≪攻撃≫でオーラへのダメージ选ばれ、かつあなたのオーラが0ならば现在のフェイズ终了する。\n【再起】八相-あなたのオーラが0である。'
        }
      },
      {
        id: '03-himika-a1-s-2',
        to: {
          cardwhojp: 'S6-2',
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
        },
        from: {
          cardwhojp: 'S6',
          id: '03-himika-a1-s-2',
          name: '炎天·红绯弥香',
          namejp: '炎天・紅緋弥香',
          baseType: 'special',
          types: ['attack', 'fullpower'],
          range: '0-6',
          damage: 'X/X',
          cost: '7',
          text: '不可被对应\n【常时】X等于7减去当前距离。\n【攻击后】你输掉本局游戏。',
          textjp: '対応不可 \n【常時】Xは7から現在の間合を引いた値に等しい。 \n【攻撃後】あなたは敗北する。'
        }
      },
      {
        id: '04-tokoyo-o-n-7',
        to: {
          cardwhojp: 'S6-2',
          id: '04-tokoyo-o-n-7',
          name: '晴舞台',
          namejp: '晴舞台',
          baseType: 'normal',
          types: ['enhance'],
          capacity: '2',
          text: '终端\n【展开时】你的集中力变为2。\n【破弃时】进行一次“攻击距离3-6 伤害-/1”的攻击。',
          textjp: '終端\n【展開時】あなたの集中力は2になる。\n【破棄時】攻撃『適正距離3-6、-/1』を行う。'
        },
        from: {
          cardwhojp: 'S6',
          id: '04-tokoyo-o-n-7',
          name: '晴舞台',
          namejp: '晴舞台',
          baseType: 'normal',
          types: ['enhance'],
          capacity: '1',
          text: '【破弃时】境地～若你的集中力等于2，则虚（2）→自装\n【破弃时】你获得1点集中力。',
          textjp: '【破棄時】境地-あなたの集中力が2ならば、ダスト→自オーラ：2 \n【破棄時】境地-あなたは集中力を1得る。'
        }
      },
      {
        id: '08-hagane-o-n-4',
        to: {
          cardwhojp: 'S6-2',
          id: '08-hagane-o-n-4',
          name: '超反动',
          namejp: '超反動',
          baseType: 'normal',
          types: ['action'],
          text: '根据当前距离结算以下效果：\n大于等于5……距（1）→自气\n小于等于4……敌气（1）→距',
          textjp: '現在の間合が5以上ならば、間合→自フレア：1\n現在の間合が4以下ならば、相フレア→間合：1'
        },
        from: {
          cardwhojp: 'S6',
          id: '08-hagane-o-n-4',
          name: '超反发',
          namejp: '超反発',
          baseType: 'normal',
          types: ['action'],
          text: '若当前距离小于等于4，则敌气（1）→距',
          textjp: '現在の間合が4以下ならば、相フレア→間合：1'
        }
      },
      {
        id: '09-chikage-a1-s-4',
        to: {
          cardwhojp: 'S6-2',
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
        },
        from: {
          cardwhojp: 'S6',
          id: '09-chikage-a1-s-4',
          name: '绊毒淀残渣',
          namejp: '残滓の絆毒',
          baseType: 'special',
          types: ['attack'],
          range: '0-1',
          damage: '4/X',
          cost: '5',
          text: '【常时】X等于对手的手牌张数的2倍。',
          textjp: '【常時】Xは相手の手札にあるカードの枚数の2倍に等しい。'
        }
      },
      {
        id: '14-honoka-a1-s-1-ex3',
        to: {
          cardwhojp: 'S6-2',
          id: '14-honoka-a1-s-1-ex3',
          name: '熠熠见繁樱',
          namejp: '桜花眩く輝かん',
          baseType: 'special',
          types: ['attack'],
          range: '3-5',
          damage: 'X/2',
          cost: '1',
          text: '超克\n【常时】X等于此牌上的樱花结晶的数目。\n【攻击后】将1个樱花结晶从虚移至此牌上。\n----\n【再起】至少1个区域中的樱花结晶的数目恰等于5。',
          textjp: '超克\n【常時】Xはこのカードの上の桜花結晶の数に等しい。\n【攻撃後】このカードの上にダストから1つ桜花結晶を置く。\n----\n【再起】桜花結晶がちょうど5つある領域が1つ以上ある。'
        },
        from: {
          cardwhojp: 'S6',
          id: '14-honoka-a1-s-1-ex3',
          name: '熠熠见繁樱',
          namejp: '桜花眩く輝かん',
          baseType: 'special',
          types: ['attack'],
          range: '1-9',
          damage: 'X/2',
          cost: '1',
          text: '超克\n【常时】X等于此牌上的樱花结晶的数目。\n【攻击后】将1个樱花结晶从虚移至此牌上。\n----\n【再起】至少1个区域中的樱花结晶的数目恰等于5。',
          textjp: '超克\n【常時】Xはこのカードの上の桜花結晶の数に等しい。\n【攻撃後】このカードの上にダストから1つ桜花結晶を置く。\n----\n【再起】桜花結晶がちょうど5つある領域が1つ以上ある。'
        }
      },
      {
        id: '16-yatsuha-o-s-2',
        to: {
          cardwhojp: 'S6-2',
          id: '16-yatsuha-o-s-2',
          name: '四叶镜的童谣',
          namejp: '四葉鏡のわらべ唄',
          baseType: 'special',
          types: ['action'],
          cost: '2',
          text: '选择1张展开中的非王牌的《付与》牌，将其上所有樱花结晶移至虚。\n若该《付与》牌因此置入弃牌区，则你可以使用该牌。若如此做，且该牌具有《全力》副类别，则此牌额外获得终端。',
          textjp: '切札でない付与札を1つ選び、その上から桜花結晶全てをダストに送る。\nその《付与》カードがいずれかの捨て札にあるならば、そのカードを消費を支払わずに使用してもよい。そうした場合、そのカードが《全力》ならばこのカードは終端を得る。'
        },
        from: {
          cardwhojp: 'S6',
          id: '16-yatsuha-o-s-2',
          name: '四叶镜的童谣',
          namejp: '四葉鏡のわらべ唄',
          baseType: 'special',
          types: ['action'],
          cost: '3',
          text: '选择1张展开中的《付与》牌，将其上所有樱花结晶移至虚。\n若该《付与》牌因此置入弃牌区或变为已使用状态的王牌，则你可以使用该牌，而不需支付其费用。若如此做，且该牌为《全力》，则此牌额外获得终端。',
          textjp: '付与札を1つ選び、その上から桜花結晶全てをダストに送る。\nその《付与》カードが捨て札または使用済で切札にあるならば、そのカードを消費を支払わずに使用してもよい。そうした場合、そのカードが《全力》ならばこのカードは終端を得る。'
        }
      },
      {
        id: '18-mizuki-o-t-3',
        to: {
          cardwhojp: 'S6-2',
          id: '18-mizuki-o-t-3',
          name: '骑兵',
          namejp: '騎兵',
          baseType: 'soldier',
          types: ['enhance'],
          capacity: '2',
          text: '终端\n【展开中】对手的《攻击》失去不可被对应。\n【破弃时】你获得1点集中力。',
          textjp: '終端\n【展開中】相手の《攻撃》は対応不可を失う。\n【破棄時】あなたは集中力を1得る。'
        },
        from: {
          cardwhojp: 'S6',
          id: '18-mizuki-o-t-3',
          name: '骑兵',
          namejp: '騎兵',
          baseType: 'soldier',
          types: ['enhance'],
          capacity: '2',
          text: '终端 破绽\n【破弃时】你获得1点集中力。',
          textjp: '終端　隙\n【破棄時】あなたは集中力を1得る。'
        }
      },
      {
        id: '20-kanawe-o-n-5',
        to: {
          cardwhojp: 'S6-2',
          id: '20-kanawe-o-n-5',
          name: '残光',
          namejp: '残光',
          baseType: 'normal',
          types: ['action'],
          text: '若当前剧幕的颜色为【紫】或【绿】，则查看对手手牌，从中选择1张置于对手的牌库底。对手获得1点集中力。',
          textjp: '現在の幕の色が紫または緑ならば、相手の手札を見てその中から1枚を選び、それを山札の底に置く。相手は集中力を1得る。'
        },
        from: {
          cardwhojp: 'S6',
          id: '20-kanawe-o-n-5',
          name: '残光',
          namejp: '残光',
          baseType: 'normal',
          types: ['action'],
          text: '查看对手手牌，从中选择1张置于对手的牌堆底。对手获得1点集中力。',
          textjp: '相手の手札を見てその中から1枚を選び、それを山札の底に置く。相手は集中力を1得る。'
        }
      },
      {
        id: '20-kanawe-o-s-1',
        to: {
          cardwhojp: 'S6-2',
          id: '20-kanawe-o-s-1',
          name: '疾书弗尽 尺璧寸阴',
          namejp: 'たまゆらふみ',
          baseType: 'special',
          cost: '1',
          types: ['action'],
          text: '你可以支付1点集中力。若如此做，则你可以从追加区或已达成区域准备1张构想牌。若以此法从已达成区域准备构想牌，则将此牌移出游戏。\n【使用后】对手的准备阶段开始时，若你上回合内构想牌上的樱花结晶没有前进，则将此牌变为未使用状态。',
          textjp: '集中力を1支払ってもよい。そうした場合、追加札または達成済から構想カードを1枚準備する。達成済から準備したらこのカードを取り除く。\n【使用済】相手の開始フェイズの開始時に、あなたが直前のターンに構想を進めていないならば、このカードを未使用に戻す。'
        },
        from: {
          cardwhojp: 'S6',
          id: '20-kanawe-o-s-1',
          name: '疾书弗尽 尺璧寸阴',
          namejp: 'たまゆらふみ',
          baseType: 'special',
          cost: '1',
          types: ['action'],
          text: '选择一项：\n1.从追加区准备1张构想牌。本回合的结束阶段开始时，将此牌变为未使用状态。\n2.从已达成区域准备1张构想牌。',
          textjp: '以下のどちらかを選ぶ。\n・追加札から構想カードを1枚準備する。このターンの終了フェイズにこのカードを未使用に戻す。\n・達成済から構想カードを1枚準備する。'
        }
      },
      {
        id: 'Story Board'
      }
    ]
  },
  {
    id: 'S6',
    name: 'S5 -> S6赛季更新',
    namejp: 'シーズン５→６カード更新',
    link: 'http://bfpblog.bakafire.main.jp/?eid=430',
    list: [
      {
        id: '07-shinra-o-s-1',
        from: {
          cardwhojp: 'S5',
          id: '07-shinra-o-s-1',
          name: '完全论破',
          namejp: '完全論破',
          baseType: 'special',
          types: ['action'],
          cost: '4',
          text: '从对手的弃牌中选择1张牌，封印于此牌下（本局游戏不再归还）。',
          textjp: '相手の捨て札にあるカード1枚を選び、このカードの下に封印する。 \n(ゲーム中に戻ることはない)'
        },
        to: {
          cardwhojp: 'S6',
          id: '07-shinra-o-s-1',
          name: '完全论破',
          namejp: '完全論破',
          baseType: 'special',
          types: ['action'],
          cost: '2',
          text: '从对手的弃牌中选择1张牌，封印于此牌下（本局游戏不再归还）。',
          textjp: '相手の捨て札にあるカード1枚を選び、このカードの下に封印する。 \n(ゲーム中に戻ることはない)'
        }
      },
      {
        id: '11-thallya-a1-tf-3',
        from: {
          cardwhojp: 'S5',
          id: '11-thallya-a1-tf-3',
          name: 'Form: ASURA',
          namejp: 'Form: ASURA',
          baseType: 'transform',
          types: ['transform'],
          text: '【变形时】对手弃置1张手牌和牌库顶的1张牌。\n----\n【追加基本动作】Sigma-Drive：进行一次“攻击距离1,3,5 伤害3/2 【攻击后】你畏缩”的攻击。此基本动作每回合至多执行一次。',
          textjp: '【変形時】相手は手札を1枚捨て札にし、相手の山札の上から1枚を捨て札にする。\n----\n【常時】Sigma-Drive：「適正距離1,3,5、3/2【攻撃後】あなたは畏縮する。」を行う。\nこの基本動作は一ターンに1回だけ行える。'
        },
        to: {
          cardwhojp: 'S6',
          id: '11-thallya-a1-tf-3',
          name: 'Form: ASURA',
          namejp: 'Form: ASURA',
          baseType: 'transform',
          types: ['transform'],
          text: '【变形时】对手从其盖牌中选择1张牌并弃置之。然后再结算上述效果1次。\n----\n【追加基本动作】Sigma-Drive：进行一次“攻击距离3,5 伤害3/2 【攻击后】你畏缩”的攻击。此基本动作每回合至多执行一次。',
          textjp: '【変形時】相手は伏せ札から１枚を選び、それを捨て札にする。これをもう１回繰り返す。\n----\n【常時】Sigma-Drive：「適正距離3,5、3/2【攻撃後】あなたは畏縮する。」を行う。\nこの基本動作は一ターンに1回だけ行える。'
        }
      },
      {
        id: '12-raira-a1-n-2',
        from: {
          cardwhojp: 'S5',
          id: '12-raira-a1-n-2',
          name: '暴风',
          namejp: '暴風',
          baseType: 'normal',
          types: ['attack'],
          range: '2-4',
          damage: '2/1',
          text: '【攻击后】风神槽的值增加1。然后你可以使用1次岚之力。',
          textjp: '【攻撃後】風神ゲージを1上げる。その後、嵐の力を1回使用してもよい。'
        },
        to: {
          cardwhojp: 'S6',
          id: '12-raira-a1-n-2',
          name: '暴风',
          namejp: '暴風',
          baseType: 'normal',
          types: ['attack'],
          range: '2-3',
          damage: '2/1',
          text: '【攻击后】你可以使用1次岚之力。',
          textjp: '【攻撃後】嵐の力を1回使用してもよい。'
        }
      },
      {
        id: '12-raira-a1-st',
        from: {
          cardwhojp: 'S5',
          id: '12-raira-a1-st',
          name: '【岚之力】',
          namejp: '【嵐の力】',
          baseType: '',
          types: ['extra'],
          text: '1风：距（1） ⇔ 虚\n2风：你获得1集中力，对手失去1点集中力。\n3风：抓一张牌。\n----\n1雷：本回合你的下一次《攻击》获得+1/+0。\n2雷：本回合内你的下一次对装伤害不为“-”的《攻击》获得+0/+1。\n3雷：进行一次“攻击距离0-4 伤害2/2”的攻击。',
          textjp: '1風,間合（1） ⇔ 虚。\n2風,あなたは集中力を1得て、相手は集中力を1失う。\n3風,カードを1枚引く。\n----\n1雷,このターンにあなたが次に行う《攻撃》は+1/+0となる。\n2雷,このターンにあなたが次に行うオーラへのダメージが「—」でない《攻撃》は+0/+1となる。\n3雷,攻撃「適正距離0-4、2/2」を行う。'
        },
        to: {
          cardwhojp: 'S6',
          id: '12-raira-a1-st',
          name: '【岚之力】',
          namejp: '【嵐の力】',
          baseType: '',
          types: ['extra'],
          text: '1风：虚（1）⇔ 距\n2风：抓1张牌，盖伏1张手牌。\n3风：你获得1点集中力，对手失去1点集中力。\n----\n1雷：本回合内你的下一次《攻击》获得+1/+0。\n2雷：进行一次“攻击距离0-4 伤害1/1”的攻击。\n3雷：本回合内你的下一次对装伤害不为“-”的《攻击》获得+0/+1。',
          textjp: '風1：ダスト（１）⇔間合。\n風2：カードを１枚引き、手札を１枚伏せ札にする。\n風3：あなたは集中力を１得て、相手は集中力を１失う。\n----\n雷1：このターンにあなたが次に行う《攻撃》は+1/+0となる。\n雷2：攻撃『適正距離0-4、1/1』を行う。\n雷3：このターンにあなたが次に行うオーラへのダメージが「-」でない《攻撃》は+0/+1となる。'
        }
      },
      {
        id: '15-korunu-o-n-7',
        from: {
          cardwhojp: 'S5',
          id: '15-korunu-o-n-7',
          name: '冻缚场',
          namejp: '凍縛場',
          baseType: 'normal',
          types: ['enhance'],
          capacity: '2',
          text: '【展开中】若对手被冻结，则对手的准备阶段开始时，对手选择2项。该准备阶段结算时跳过对手选择的步骤。\n1.获得1点集中力；\n2.从每张展开中的《付与》牌上移除1个樱花结晶；\n3.可以重铸牌库；\n4.抓2张牌。',
          textjp: '【展開中】相手が凍結しているならば、相手の開始フェイズに相手は以下から2つを選ぶ。\nその開始フェイズにおいて選ばれた2つの処理を飛ばす。\n・集中力を1得る。\n・付与札から桜花結晶を1つずつ取り除く。\n・山札を再構成してもよい\n・カードを2枚引く。'
        },
        to: {
          cardwhojp: 'S6',
          id: '15-korunu-o-n-7',
          name: '霜之棘',
          namejp: '霜の茨',
          baseType: 'normal',
          types: ['enhance'],
          capacity: '2',
          text: '【展开中】你的回合内，每当你进行第一次非王牌的《攻击》时，该《攻击》获得+1/+1。\n【展开中】若对手被冻结，则你的准备阶段从所有《付与》牌上移除樱花结晶时可以不移除此牌上的樱花结晶。',
          textjp: '【展開中】あなたのターンにおけるあなたの最初の切札でない《攻撃》は+1/+1となる。\n【展開中】相手が凍結しているならば、\nあなたの開始フェイズの処理でこのカードの上の桜花結晶を移動させなくてもよい。'
        }
      },
      {
        id: '15-korunu-o-s-4',
        from: {
          cardwhojp: 'S5',
          id: '15-korunu-o-s-4',
          name: '彼世深渊',
          namejp: 'ポルチャルトー',
          baseType: 'special',
          types: ['enhance'],
          capacity: '5',
          cost: '2',
          text: '终端\n【展开中】每当箭头效果将樱花结晶移入或移出距时，额外移动1个樱花结晶。',
          textjp: '終端\n【展開中】矢印効果による間合からの桜花結晶の移動と間合への桜花結晶の移動は1大きくなる'
        },
        to: {
          cardwhojp: 'S6',
          id: '15-korunu-o-s-4',
          name: '彼世深渊',
          namejp: 'ポルチャルトー',
          baseType: 'special',
          types: ['enhance'],
          capacity: '1',
          cost: '2',
          text: '【常时】此牌可以如《对应》牌一样对应《攻击》使用。若以此法使用，则此牌的费用视为4。\n【展开时】距（1） ⇔ 虚\n冻结对手1次。\n【破弃时】你可以再次使用此牌。若以此法使用，则此牌的纳视为4。（仍需支付费用）',
          textjp: '【常時】このカードを消費４で対応を持つかのように相手の《攻撃》に割り込んで使用してもよい。\n【展開時】間合⇔ダスト：1\n相手は１回凍結する。\n【破棄時】このカードを納４として使用してもよい。（消費は支払う）'
        }
      },
      {
        id: '18-mizuki-o-n-2',
        from: {
          cardwhojp: 'S5',
          id: '18-mizuki-o-n-2',
          namejp: '反攻',
          name: '反攻',
          baseType: 'normal',
          types: ['attack'],
          range: '2-3',
          damage: '1/1',
          text: '【常时】若上一回合内你进行过对应，则此《攻击》获得+2/+0。\n全力化（主要阶段，若你选择执行全力行动，则你可以如使用《全力》牌一样使用此牌。若如此做，则此牌额外获得以下效果）：【常时】此《攻击》获得+0/+2。',
          textjp: '【常時】あなたが直前のターンに対応しているならば、この《攻撃》は+2/+0となる。\n全力化：【常時】この《攻撃》は+0/+2となる。'
        },
        to: {
          cardwhojp: 'S6',
          id: '18-mizuki-o-n-2',
          namejp: '反攻',
          name: '反攻',
          baseType: 'normal',
          types: ['attack'],
          range: '2-3',
          damage: '1/1',
          text: '【常时】若上一回合内你进行过对应，则此《攻击》获得+2/+1。\n全力化（主要阶段，若你选择执行全力行动，则你可以如使用《全力》牌一样使用此牌。若如此做，则此牌额外获得以下效果）：【常时】此《攻击》获得+1/+1。',
          textjp: '【常時】あなたが直前のターンに対応しているならば、この《攻撃》は+2/+1となる。\n全力化：【常時】この《攻撃》は+1/+1となる。'
        }
      },
      {
        id: '18-mizuki-o-n-6',
        from: {
          cardwhojp: 'S5',
          id: '18-mizuki-o-n-6',
          namejp: '制圧前進',
          name: '压制前进',
          baseType: 'normal',
          types: ['action', 'fullpower'],
          text: '进行1次征兵，对手畏缩。\n若当前距离大于等于3，则距（1）→自装',
          textjp: '徴兵を1回行い、相手を畏縮させる。\n現在の間合は3以上ならば、\n間合→自オーラ：1'
        },
        to: {
          cardwhojp: 'S6',
          id: '18-mizuki-o-n-6',
          namejp: '制圧前進',
          name: '压制前进',
          baseType: 'normal',
          types: ['action', 'fullpower'],
          text: '选择3次。你可以多次选择同一个选项：\n1.进行1次征兵；\n2.执行1次基本动作《前进》；\n3.执行1次基本动作《装附》。',
          textjp: '以下を３回選ぶ。同じものを複数回選んでもよい。\n・徴兵を１回行う。\n・基本動作《前進》を行う。\n・基本動作《纏い》を行う。'
        }
      }
    ]
  },
  {
    id: 'S5',
    name: 'S4 -> S5赛季更新',
    namejp: 'シーズン４→５カード更新',
    link: 'http://bfpblog.bakafire.main.jp/?eid=336',
    list: [{
      id: '01-yurina-o-n-5',
      from: {
        cardwhojp: 'S4',
        id: '01-yurina-o-n-5',
        name: '疾跑',
        namejp: '足捌き',
        baseType: 'normal',
        types: ['action'],
        text: '若当前距离大于等于4，则距（2）→虚。 \n若当前距离小于等于1，则虚（2）→距。',
        textjp: '現在の間合が4以上ならば、間合→ダスト：2\n現在の間合が1以下ならば、ダスト→間合：2'
      },
      to: {
        cardwhojp: 'S5',
        id: '01-yurina-o-n-5',
        name: '气魄',
        namejp: '気迫',
        baseType: 'normal',
        types: ['action'],
        text: '你获得1点集中力。\n本回合内你的其他女神的下一次非王牌的《攻击》获得不可被对应（通常牌）和距离扩大（近1）。',
        textjp: 'あなたは集中力を1得る。\nこのターンにあなたが次に行う他のメガミによる切札でない《攻撃》は対応不可（通常札）と距離拡大（近1）を得る。'
      }
    }, {
      id: '01-yurina-o-s-2',
      from: {
        cardwhojp: 'S4',
        id: '01-yurina-o-s-2',
        name: '浦波岚',
        namejp: '浦波嵐',
        baseType: 'special',
        types: ['attack', 'reaction'],
        range: '0-10',
        damage: '2/-',
        cost: '3',
        text: '【攻击后】被对应的《攻击》获得-2/+0。',
        textjp: '【攻撃後】対応した《攻撃》は-2/+0となる。'
      },
      to: {
        cardwhojp: 'S5',
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
      }
    }, {
      id: '01-yurina-a1-s-2',
      from: {
        cardwhojp: 'S4',
        id: '01-yurina-a1-s-2',
        name: '不完全浦波岚',
        namejp: '不完全浦波嵐',
        baseType: 'special',
        types: ['attack', 'reaction'],
        range: '0-10',
        damage: '3/-',
        cost: '5',
        text: '【攻击后】被对应的《攻击》获得-3/+0。',
        textjp: '【攻撃後】対応した《攻撃》は-3/+0となる。'
      },
      to: {
        cardwhojp: 'S5',
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
      }
    }, {
      id: '02-saine-o-n-5',
      from: {
        cardwhojp: 'S4',
        id: '02-saine-o-n-5',
        name: '圈域',
        namejp: '圏域',
        baseType: 'normal',
        types: ['enhance'],
        capacity: '3',
        text: '【展开时】虚（1）→距 \n【展开中】达人距离增大2。',
        textjp: '【展開時】ダスト→間合：1\n【展開中】達人の間合は2大きくなる。'
      },
      to: {
        cardwhojp: 'S5',
        id: '02-saine-o-n-5',
        name: '圈域',
        namejp: '圏域',
        baseType: 'normal',
        types: ['enhance'],
        capacity: '2',
        text: '【展开中】若此牌上的樱花结晶将被移除，则不将其移至虚，而改为移至距。\n【展开中】达人距离增大1。',
        textjp: '【展開中】この付与札の上の桜花結晶がダストへと送られるならば、それは代わりに間合へと移動する。\n【展開中】達人の間合は1大きくなる。'
      }
    }, {
      id: '03-himika-o-n-6',
      from: {
        cardwhojp: 'S4',
        id: '03-himika-o-n-6',
        name: '回燃',
        namejp: 'バックドラフト',
        baseType: 'normal',
        types: ['action'],
        text: '对手畏缩。\n连火～若此牌为本回合内你使用的第3张或之后的牌，则本回合你的其他女神的下一次《攻击》获得+1/+1。',
        textjp: '相手を畏縮させる。\n連火-このカードがこのターンに使用した3枚目以降のカードならば、このターンにあなたが次に行う他のメガミによる《攻撃》を+1/+1する。'
      },
      to: {
        cardwhojp: 'S5',
        id: '03-himika-o-n-6',
        name: '回燃',
        namejp: 'バックドラフト',
        baseType: 'normal',
        types: ['action'],
        text: '对手畏缩。\n连火～若此牌为本回合内你使用的第3张或之后的牌，则本回合内你的其他女神的下一次对装伤害不为“-”的《攻击》获得+1/+1。',
        textjp: '相手を畏縮させる。\n連火-このカードがこのターンに使用した3枚目以降のカードならば、このターンにあなたが次に行う他のメガミによるオーラへのダメージが「-」でない《攻撃》を+1/+1する。'
      }
    }, {
      id: '05-oboro-a1-n-3',
      from: {
        cardwhojp: 'S4',
        id: '05-oboro-a1-n-3',
        name: '突袭',
        namejp: '不意打ち',
        baseType: 'normal',
        types: ['attack', 'fullpower'],
        range: '1-4',
        damage: '4/3',
        text: '不可被对应（通常牌）\n【常时】此《攻击》获得-X/+0，X等于对手盖牌区中的牌张数。',
        textjp: '対応不可（通常札） \n【常時】この《攻撃》は-X/+0となる。Xは相手の伏せ札の枚数に等しい。'
      },
      to: {
        cardwhojp: 'S5',
        id: '05-oboro-a1-n-3',
        name: '突袭',
        namejp: '不意打ち',
        baseType: 'normal',
        types: ['attack', 'fullpower'],
        range: '1-3',
        damage: '4/3',
        text: '不可被对应（通常牌）\n【常时】此《攻击》获得-X/-X，X等于对手盖牌区中的牌张数。',
        textjp: '対応不可（通常札） \n【常時】この《攻撃》は-X/-Xとなる。Xは相手の伏せ札の枚数に等しい。'
      }
    }, {
      id: '05-oboro-a1-s-4-ex1',
      from: {
        cardwhojp: 'S4',
        id: '05-oboro-a1-s-4-ex1',
        name: '最后的结晶',
        namejp: '最後の結晶',
        baseType: 'special',
        types: ['action'],
        cost: '2',
        text: '【常时】此牌不能以正常方法使用。仅当你将第一次输掉本局游戏时，可以防止此次失败，并立即使用此牌（仍需支付费用）。\n虚（1）→自命',
        textjp: '【常時】このカードは通常の方法では使用できない。あなたが初めて敗北するならば、代わりにこのカードを使用してもよい(消費は支払う)。 \nダスト→自ライフ：1'
      },
      to: {
        cardwhojp: 'S5',
        id: '05-oboro-a1-s-4-ex1',
        name: '最后的结晶',
        namejp: '最後の結晶',
        baseType: 'special',
        types: ['action'],
        cost: '3',
        text: '【常时】此牌不能以正常方法使用。仅当你将第一次输掉本局游戏时，可以防止此次失败，将自命中的所有樱花结晶移至虚，并立即使用此牌（仍需支付费用）。\n盖伏1张手牌，虚（1）→自命',
        textjp: '【常時】このカードはこの効果でのみ使用できる。あなたが初めて敗北するならば、代わりにあなたのライフ全てをダストに送り、このカードを使用してもよい(消費は支払う)。 \n手札を一枚伏せ札にし、ダスト→自ライフ：1'
      }
    }, {
      id: '08-hagane-o-s-1',
      from: {
        cardwhojp: 'S4',
        id: '08-hagane-o-s-1',
        name: '大天空·破限',
        namejp: '大天空クラッシュ',
        baseType: 'special',
        types: ['attack'],
        range: '0-10',
        damage: 'X/Y',
        cost: '5',
        text: '超克 \n【常时】X为当前距离与本回合开始时距离之差的绝对值，Y为X的一半（向上取整）。',
        textjp: '超克 \n【常時】Xは現在の間合がターン開始時の間合からどれだけ変化しているかに等しい。YはXの半分(切り上げ)に等しい。'
      },
      to: {
        cardwhojp: 'S5',
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
      }
    }, {
      id: '09-chikage-o-n-3',
      from: {
        cardwhojp: 'S4',
        id: '09-chikage-o-n-3',
        name: '遁术',
        namejp: '遁術',
        baseType: 'normal',
        types: ['attack', 'reaction'],
        range: '1-3',
        damage: '1/-',
        text: '【攻击后】自装（2）→距\n【攻击后】本回合内所有玩家都不能执行基本动作《前进》。',
        textjp: '【攻撃後】自オーラ→間合：2 \n【攻撃後】このターン中、全てのプレイヤーは基本動作《前進》を行えない。'
      },
      to: {
        cardwhojp: 'S5',
        id: '09-chikage-o-n-3',
        name: '遁术',
        namejp: '遁術',
        baseType: 'normal',
        types: ['attack', 'reaction'],
        range: '1-3',
        damage: '1/-',
        text: '【攻击后】自装（1）→距，虚（1）→距\n【攻击后】本回合内对手不能执行基本动作《前进》。',
        textjp: '【攻撃後】自オーラ→間合：1、ダスト→間合：1\n【攻撃後】このターン中、相手は基本動作《前進》を行えない。'
      }
    }, {
      id: '10-kururu-o-s-3',
      from: {
        cardwhojp: 'S4',
        id: '10-kururu-o-s-3',
        name: '复自黏贴',
        namejp: 'いんだすとりあ',
        baseType: 'special',
        types: ['action'],
        cost: '1',
        text: '若此牌没有封印牌，则你可以从你的手牌中选择1张非《付与》的牌，封印在此牌下。\n将1张『复制品齿轮』从追加牌区置于你的牌库底（最多3张）。\n【即再起】你重铸牌库后。',
        textjp: 'このカードにカードが封印されていないならば、あなたの手札から《付与》でないカードを1枚選び、そのカードをこのカードの下に表向きで封印してもよい。 \nあなたの追加札から「でゅーぷりぎあ」を山札の底に1枚置く(最大で合計3枚)。 \n----\n【即再起】あなたが山札を再構成する(再構成の後に未使用に戻る)。'
      },
      to: {
        cardwhojp: 'S5',
        id: '10-kururu-o-s-3',
        name: '复自黏贴',
        namejp: 'いんだすとりあ',
        baseType: 'special',
        types: ['action'],
        cost: '1',
        text: '若此牌为你的牌，且此牌没有封印牌，则你可以从你的手牌或弃牌中选择1张非《付与》的牌，封印于此牌下。\n将1张『复制品齿轮』从追加牌区置于你的牌库底（最多3张）。\n----\n【即再起】你重铸牌库后。',
        textjp: 'このカードがあなたのカードで、カードが封印されていないならば、手札または捨て札から《付与》でないカードを1枚選び、そのカードをこのカードの下に表向きで封印してもよい。 \nあなたの追加札から「でゅーぷりぎあ」を山札の底に1枚置く(最大で合計3枚)。 \n----\n【即再起】あなたが山札を再構成する(再構成の後に未使用に戻る)。'
      }
    }, {
      id: '12-raira-o-s-4',
      from: {
        cardwhojp: 'S4',
        id: '12-raira-o-s-4',
        name: '圆环轮回旋',
        namejp: '円環輪廻旋',
        baseType: 'special',
        types: ['enhance', 'fullpower'],
        capacity: '5',
        cost: '3',
        text: '【展开中】每当你使用非《付与》的通常牌时，该牌结算完毕后，不将该牌置入你的弃牌区，而改为将其置于你的牌库底。',
        textjp: '【展開中】あなたが《付与》でない通常札を使用した場合、それを捨て札にする代わりに山札の底に置く。'
      },
      to: {
        cardwhojp: 'S5',
        id: '12-raira-o-s-4',
        name: '圆环轮回旋',
        namejp: '円環輪廻旋',
        baseType: 'special',
        types: ['enhance', 'reaction'],
        capacity: '3',
        cost: '2',
        text: '【展开中】每当对手进行的《攻击》结算完毕时，你可以依次执行：\n距（1）⇔ 虚\n选择风神槽或雷神槽，其值增加1。',
        textjp: '【展開中】相手が《攻撃》を行なったならば、その解決後に以下を行ってもよい。\nダスト⇔間合：1 \n風神ゲージか雷神ゲージを1上げる。'
      }
    }, {
      id: '13-utsuro-o-s-4',
      from: {
        cardwhojp: 'S4',
        id: '13-utsuro-o-s-4',
        name: '魔食',
        namejp: '魔食',
        baseType: 'special',
        types: ['action'],
        cost: '5',
        text: '【使用后】每当你的准备阶段开始时，对手选择一项：\n1.敌装（1）→虚\n2.敌气（2）→虚',
        textjp: '【使用済】あなたの開始フェイズの開始時に相手は以下のどちらかを選ぶ。\n・相オーラ→ダスト：1\n・相フレア→ダスト：2'
      },
      to: {
        cardwhojp: 'S5',
        id: '13-utsuro-o-s-4',
        name: '魔食',
        namejp: '魔食',
        baseType: 'special',
        types: ['action'],
        cost: '4',
        text: '【使用后】每当你的准备阶段开始时，对手选择一项：\n1.敌装（1）→虚\n2.敌气（2）→虚',
        textjp: '【使用済】あなたの開始フェイズの開始時に相手は以下のどちらかを選ぶ。\n・相オーラ→ダスト：1\n・相フレア→ダスト：2'
      }
    }, {
      id: '14-honoka-o-n-2',
      from: {
        cardwhojp: 'S4',
        id: '14-honoka-o-n-2',
        name: '樱吹雪',
        namejp: '桜吹雪',
        baseType: 'normal',
        types: ['attack'],
        range: '1-5',
        damage: '2/1',
        text: '【攻击后】对手选择一项：\n1.距（1）→虚；\n2.虚（1）→距。',
        textjp: '【攻撃後】相手は以下のどちらかを選ぶ。\n・間合→ダスト：1\n・ダスト→間合：1'
      },
      to: {
        cardwhojp: 'S5',
        id: '14-honoka-o-n-2',
        name: '樱吹雪',
        namejp: '桜吹雪',
        baseType: 'normal',
        types: ['attack'],
        range: '3-5',
        damage: '2/1',
        text: '【攻击后】对手选择一项：\n1.距（1）→自装；\n2.敌装（1）→距。',
        textjp: '【攻撃後】相手は以下のどちらかを選ぶ。\n・間合→自オーラ：1\n・相オーラ→間合：1'
      }
    }, {
      id: '14-honoka-o-s-1-ex1',
      from: {
        cardwhojp: 'S4',
        id: '14-honoka-o-s-1-ex1',
        name: '结樱于手',
        namejp: '両手に華を',
        baseType: 'special',
        types: ['action', 'fullpower'],
        cost: '0',
        text: '【使用后】开花～你的结束阶段开始时，你可以将至多2个樱花结晶从自装移至此牌上。然后若此牌上的樱花结晶的数目恰好变为5，则将它们移至自气，将这张『结樱于手』与追加牌区中的『旋即旌招幕展』交换，将『旋即旌招幕展』变为未使用状态。',
        textjp: '【使用済】開花-あなたの終了フェイズにあなたのオーラにある桜花結晶を2つまでこのカードの上に置いてもよい。その結果、ちょうど5つになったならば、それらの桜花結晶をあなたのフレアへと移動させ、この「両手に華を」を追加札の「そして新たな幕開けを」に交換し、未使用に戻す。'
      },
      to: {
        cardwhojp: 'S5',
        id: '14-honoka-o-s-1-ex1',
        name: '结樱于手',
        namejp: '両手に華を',
        baseType: 'special',
        types: ['action', 'fullpower'],
        cost: '0',
        text: '执行1次基本动作《装附》。（此次《装附》不会触发此牌的替代效果）\n【使用后】你的结束阶段开始时，执行1次基本动作《装附》。\n【使用后】开花～你可以将你的基本动作《装附》的效果改为将1个樱花结晶从虚或自装移至此牌上。若此牌上的樱花结晶的数目因此恰好变为5，则将它们移至自气，将这张『结樱于手』与追加牌区中的『旋即旌招幕展』交换，将『旋即旌招幕展』变为未使用状态。',
        textjp: '基本動作《纏い》を1回行う。\n【使用済】あなたの終了フェイズに基本動作《纏い》を1回行う。\n【使用済】開花-あなたが基本動作《纏い》を行うならば、代わりにダストまたはあなたのオーラからこのカードの上に桜花結晶を1つ置いてもよい。その結果、ちょうど5つになったならば、それらの桜花結晶をあなたのフレアへと移動させ、この「両手に華を」を追加札の「そして新たな幕開けを」に交換し、未使用に戻す。'
      }
    }, {
      id: '16-yatsuha-o-n-1',
      from: {
        cardwhojp: 'S4',
        id: '16-yatsuha-o-n-1',
        name: '星之爪',
        namejp: '星の爪',
        baseType: 'normal',
        types: ['attack'],
        range: '3-4',
        damage: '3/2',
        text: '【攻击后】自装（1）→敌气',
        textjp: '【攻撃後】自オーラ→相フレア：1'
      },
      to: {
        cardwhojp: 'S5',
        id: '16-yatsuha-o-n-1',
        name: '星之爪',
        namejp: '星の爪',
        baseType: 'normal',
        types: ['attack'],
        range: '3-4',
        damage: '3/2',
        text: '不可被对应（通常牌）\n【攻击后】自装（1）→敌气',
        textjp: '対応不可（通常札）\n【攻撃後】自オーラ→相フレア：1'
      }
    }, {
      id: '16-yatsuha-o-n-2',
      from: {
        cardwhojp: 'S4',
        id: '16-yatsuha-o-n-2',
        name: '暗之颚',
        namejp: '昏い咢',
        baseType: 'normal',
        types: ['attack'],
        range: '4',
        damage: '3/1',
        text: '不可被闪避\n【常时】此《攻击》获得+0/+X。X等于镜映数。\n【攻击后】你畏缩。',
        textjp: '不可避 \n【常時】この《攻撃》は+0/+Xとなる。Xは鏡映数に等しい。\n【攻撃後】あなたは畏縮する。'
      },
      to: {
        cardwhojp: 'S5',
        id: '16-yatsuha-o-n-2',
        name: '暗之颚',
        namejp: '昏い咢',
        baseType: 'normal',
        types: ['attack'],
        range: '4',
        damage: '3/1',
        text: '不可被对应（通常牌）\n【常时】此《攻击》获得+0/+X。X等于镜映数。\n【攻击后】你畏缩。',
        textjp: '対応不可（通常札）\n【常時】この《攻撃》は+0/+Xとなる。Xは鏡映数に等しい。\n【攻撃後】あなたは畏縮する。'
      }
    }]
  },
  {
    id: 'S4',
    name: 'S3 -> S4赛季更新',
    namejp: 'シーズン３→４カード更新',
    link: 'http://bfpblog.bakafire.main.jp/?eid=270',
    list: [{
      id: '03-himika-o-n-2',
      from: {
        cardwhojp: 'S3',
        id: '03-himika-o-n-2',
        name: '速射',
        namejp: 'ラピッドファイア',
        baseType: 'normal',
        types: ['attack'],
        range: '7-8',
        damage: '2/1',
        text: '【常时】连火～若此牌为本回合内你使用的第3张或之后的牌，则此《攻击》获得+1/+1。',
        textjp: '【常時】連火-このカードがこのターンに使用した3枚目以降のカードならば、この《攻撃》は+1/+1となる。'
      },
      to: {
        cardwhojp: 'S4',
        id: '03-himika-o-n-2',
        name: '速射',
        namejp: 'ラピッドファイア',
        baseType: 'normal',
        types: ['attack'],
        range: '6-8',
        damage: '2/1',
        text: '【常时】连火～若此牌为本回合内你使用的第3张或之后的牌，则此《攻击》获得+1/+1。',
        textjp: '【常時】連火-このカードがこのターンに使用した3枚目以降のカードならば、この《攻撃》は+1/+1となる。'
      }
    }, {
      id: '12-raira-o-s-3',
      from: {
        cardwhojp: 'S3',
        id: '12-raira-o-s-3',
        name: '风魔招来孔',
        namejp: '風魔招来孔',
        baseType: 'special',
        types: ['action'],
        cost: '0',
        text: '根据现在的风神槽的值，将以下牌从追加牌区以未使用状态加入王牌，然后将此牌移出游戏。\n大于等于3……『风魔旋风』\n大于等于6……『风魔缠回』\n大于等于10……『风魔天狗道』',
        textjp: '現在の風神ゲージに応じて、以下の切札を追加札から未使用で得る(条件を満たしたものは全て得る)。その後、このカードを取り除く。 \n3以上……風魔旋風 \n6以上……風魔纏廻 \n10以上……風魔天狗道'
      },
      to: {
        cardwhojp: 'S4',
        id: '12-raira-o-s-3',
        name: '风魔招来孔',
        namejp: '風魔招来孔',
        baseType: 'special',
        types: ['action'],
        cost: '2',
        text: '根据现在的风神槽的值，将以下牌从追加牌区以未使用状态加入王牌，然后将此牌移出游戏。\n大于等于3……『风魔旋风』\n大于等于7……『风魔缠回』\n大于等于12……『风魔天狗道』',
        textjp: '現在の風神ゲージに応じて、以下の切札を追加札から未使用で得る(条件を満たしたものは全て得る)。その後、このカードを取り除く。 \n3以上……風魔旋風 \n7以上……風魔纏廻 \n12以上……風魔天狗道'
      }
    }, {
      id: '13-utsuro-a1-s-1',
      from: {
        cardwhojp: 'S3',
        id: '13-utsuro-a1-s-1',
        name: '残响装置：枢式',
        namejp: '残響装置:枢式',
        baseType: 'special',
        types: ['action'],
        cost: '2',
        text: '若敌命中的樱花结晶的数目大于等于8，则敌命（1）→虚\n【使用后】双方的结束阶段开始时，若虚中的樱花结晶的数目大于等于13，则终焉之影苏醒（将你手牌、牌库、盖牌区、弃牌区与付与区中的所有非王牌的牌移出游戏（不结算《付与》牌的破弃时效果），将『万象乖离残灭之影』『自灭往寂』『终焉将至』从追加牌区置入弃牌区并洗牌）。将『夙愿』从追加牌区以使用后状态加入王牌，抓1张牌，然后将此牌移出游戏。',
        textjp: '相手のライフが8以上ならば、相ライフ→ダスト：1 \n【使用済】あなたか相手の終了フェイズにダストが13以上ならば、終焉の影が蘇る。その後、このカードを取り除き、あなたの追加札から切札「望我」を使用済で得て、カードを1枚引く。'
      },
      to: {
        cardwhojp: 'S4',
        id: '13-utsuro-a1-s-1',
        name: '残响装置：枢式',
        namejp: '残響装置:枢式',
        baseType: 'special',
        types: ['enhance'],
        capacity: '2',
        cost: '2',
        text: '【展开中】仅当虚中的樱花结晶的数目大于等于13，且自命中的樱花结晶的数目小于等于6时可以移动此牌上的樱花结晶。\n【破弃时】若当前阶段为准备阶段，则终焉之影苏醒（将你手牌、牌库、盖牌区、弃牌区与付与区中的所有非王牌的牌移出游戏（不结算《付与》牌的破弃时效果），将因此移出游戏的樱花结晶移至虚，将『万象乖离残灭之影』『自灭往寂』『终焉将至』从追加牌区置入弃牌区并洗牌）。从追加牌区将『夙愿』以使用后状态加入王牌，抓1张牌，然后将此牌移出游戏。',
        textjp: '【展開中】ダストが13以上かつあなたのライフが6以下である場合のみ、このカードの上の桜花結晶は移動する。\n【破棄時】現在のフェイズが開始フェイズならば終焉の影が蘇る。その後、このカードを取り除き、あなたの追加札から「望我」を使用済で得て、カードを1枚引く。'
      }
    }, {
      id: '14-honoka-o-n-6',
      from: {
        cardwhojp: 'S3',
        id: '14-honoka-o-n-6',
        name: '微光结界',
        namejp: '微光結界',
        baseType: 'normal',
        types: ['enhance'],
        capacity: '4',
        text: '【展开中】对手的回合内，你的手牌与牌库中的牌不会被弃置或盖伏（使用的牌依然进入弃牌堆）。\n【展开中】你不会畏缩。\n【破弃时】你获得1点集中力。',
        textjp: '【展開中】相手のターンにあなたの手札と山札にあるカードは伏せ札、捨て札にならない。 \n(使用したカードは通常通り捨て札になる) \n【展開中】あなたは畏縮しない \n【破棄時】あなたは集中力を1得る。'
      },
      to: {
        cardwhojp: 'S4',
        id: '14-honoka-o-n-6',
        name: '指挥',
        namejp: '指揮',
        baseType: 'normal',
        types: ['enhance'],
        capacity: '3',
        text: '【展开中】你的结束阶段开始时，进行一次“攻击距离1-5 伤害1/1 不可被对应”的攻击。',
        textjp: '【展開中】あなたの終了フェイズに攻撃『適正距離1-5、1/1、対応不可』を行う。'
      }
    }, {
      id: '14-honoka-o-s-3',
      from: {
        cardwhojp: 'S3',
        id: '14-honoka-o-s-3',
        name: '四季轮回',
        namejp: '四季はまた廻り来る',
        baseType: 'special',
        types: ['action'],
        cost: '2',
        text: '盖伏你的牌库。从你的弃牌和/或盖牌中选择至多4张牌，以任意顺序置于你的牌库顶。',
        textjp: 'あなたの山札を全て伏せ札にする。伏せ札、捨て札からカードを4枚まで選び、それらを好きな順番で山札の上に置く。'
      },
      to: {
        cardwhojp: 'S4',
        id: '14-honoka-o-s-3',
        name: '四季轮回',
        namejp: '四季はまた廻り来る',
        baseType: 'special',
        types: ['action', 'reaction'],
        cost: '1',
        text: '你可以从你的盖牌中选择1张牌，将其置于你的牌库底。\n你可以抓1张牌。\n盖伏1张手牌。若如此做，执行1次基本动作《装附》。\n【使用后】每当你的牌从追加牌区移动至其他区域时，你可以将此牌置入追加牌区，若如此做，则将此牌从追加牌区以未使用状态加入王牌。',
        textjp: 'あなたの伏せ札からカードを1枚選び、山札の底に置いてもよい。\nカードを1枚引いてもよい。\n手札を1枚伏せ札にする。そうした場合、基本動作《纏い》を1回行う。\n【使用済】あなたのカードが追加札から别の領域へと移動した時、このカードを追加札に移してもよい。その後、このカードを未使用で追加札から得る。'
      }
    }]
  },
  {
    id: 'S3',
    name: 'S2 -> S3赛季更新',
    namejp: 'シーズン２→３カード更新',
    link: 'http://bfpblog.bakafire.main.jp/?eid=212',
    list: [{
      id: '02-saine-o-n-3',
      from: {
        cardwhojp: 'S2',
        id: '02-saine-o-n-3',
        name: '反身斩',
        namejp: '返し刃',
        baseType: 'normal',
        types: ['attack', 'reaction'],
        range: '3-5',
        damage: '1/1',
        text: '【攻击后】若此牌作为对应使用，则进行一次“攻击距离3-5 伤害2/1 不可被对应”的攻击。',
        textjp: '【攻撃後】このカードを対応で使用したならば、攻撃『適正距離3-5、2/1、対応不可』を行う。'
      },
      to: {
        cardwhojp: 'S3',
        id: '02-saine-o-n-3',
        name: '石突',
        namejp: '石突き',
        baseType: 'normal',
        types: ['attack', 'reaction'],
        range: '2-3',
        damage: '2/1',
        text: '【攻击后】八相～若自装中的樱花结晶的数目等于0，则虚（1）→距',
        textjp: '【攻撃後】八相-あなたのオーラが0ならば、ダスト→間合：1'
      }
    }, {
      id: '02-saine-o-n-6',
      from: {
        cardwhojp: 'S2',
        id: '02-saine-o-n-6',
        name: '冲音晶',
        namejp: '衝音晶',
        baseType: 'normal',
        types: ['enhance', 'reaction'],
        capacity: '1',
        text: '【展开时】被对应的《攻击》获得-1/+0。\n【破弃时】进行一次“攻击距离0-10 伤害1/- 不可被对应”的攻击。',
        textjp: '【展開時】対応した《攻撃》は-1/+0となる。\n【破棄時】攻撃『適正距離0-10、1/-、対応不可』を行う。'
      },
      to: {
        cardwhojp: 'S3',
        id: '02-saine-o-n-6',
        name: '冲音晶',
        namejp: '衝音晶',
        baseType: 'normal',
        types: ['enhance', 'reaction'],
        capacity: '1',
        text: '【展开时】被对应的《攻击》获得-1/+0。\n【破弃时】进行一次“攻击距离0-10 伤害1/- 不可被对应”的攻击。虚（1）→距',
        textjp: '【展開時】対応した《攻撃》は-1/+0となる。\n【破棄時】攻撃『適正距離0-10、1/-、対応不可』を行い、ダスト→間合：1'
      }
    }, {
      id: '04-tokoyo-a1-n-5',
      from: {
        cardwhojp: 'S2',
        id: '04-tokoyo-a1-n-7',
        name: '阳之音',
        namejp: '陽の音',
        baseType: 'normal',
        types: ['enhance'],
        capacity: '2',
        text: '【展开时】虚（1）→自装\n【展开中】每当你使用的具《对应》副类别的牌结算完毕时，虚（1）→自装\n【展开中】对手的回合内，此牌上的樱花结晶不会被移除。',
        textjp: '【展開時/展開中】展開時、およびあなたが《対応》カードを使用した時、その解決後にダスト→自オーラ：1 \n【展開中】相手のターンにこのカードの上の桜花結晶は移動しない。'
      },
      to: {
        cardwhojp: 'S3',
        id: '04-tokoyo-a1-n-5',
        name: '阳之音',
        namejp: '陽の音',
        baseType: 'normal',
        types: ['enhance'],
        capacity: '2',
        text: '【展开中】每当你使用具《对应》副类别的牌时，该牌结算完毕后虚（1）→自装\n【展开中】对手的回合内不能移除此牌上的樱花结晶。',
        textjp: '【展開中】あなたが《対応》カードを使用した時、その解決後にダスト→自オーラ：1 \n【展開中】相手のターンにこのカードの上の桜花結晶は移動しない。'
      }
    }, {
      id: '04-tokoyo-a1-s-2',
      from: {
        cardwhojp: 'S2',
        id: '04-tokoyo-a1-s-2',
        name: '二重奏：吹弹阳明',
        namejp: '二重奏：吹弾陽明',
        baseType: 'special',
        types: ['action'],
        cost: '1',
        text: '【使用后】每当你的准备阶段开始时，你可以从你的弃牌或盖牌中选择1张牌，将其置于你的牌库底。\n----\n【即再起】自命受到除重铸牌库以外的大于等于1点的伤害。',
        textjp: '【使用済】あなたの開始フェイズの開始時に捨て札または伏せ札からカード1枚を選び、それを山札の底に置いてもよい。 \n----\n【即再起】あなたが再構成以外でライフに1以上のダメージを受ける。'
      },
      to: {
        cardwhojp: 'S3',
        id: '04-tokoyo-a1-s-2',
        name: '二重奏：吹弹阳明',
        namejp: '二重奏：吹弾陽明',
        baseType: 'special',
        types: ['action'],
        cost: '1',
        text: '【使用后】你的准备阶段开始时，你可以选择一项：\n1.从你的盖牌中选择1张牌，将其置于你的牌库底；\n2.从你的弃牌中选择1张《行动》牌，将其置于你的牌库底。\n----\n【即再起】自命受到除重铸牌库以外的大于等于1点的伤害。',
        textjp: '【使用済】あなたの開始フェイズの開始時に以下のどちらかを行ってもよい。\n・あなたの伏せ札からカード1枚を選び、山札の底に置く。 \n・あなたの捨て札から《行動》カード1枚を選び、山札の底に置く。 \n----\n【即再起】あなたが再構成以外でライフに1以上のダメージを受ける。'
      }
    }, {
      id: '05-oboro-o-n-4',
      from: {
        cardwhojp: 'S2',
        id: '05-oboro-o-n-4',
        name: '忍步',
        namejp: '忍歩',
        baseType: 'normal',
        types: ['action'],
        text: '设置\n距(1)⇔ 虚\n若你从盖牌区中使用此牌，则你可以从盖牌区中额外使用1张具设置关键字的牌。',
        textjp: '設置 \n間合⇔ダスト：1 \nこのカードを伏せ札から使用したならば、伏せ札から設置を持つカードを1枚使用してもよい。'
      },
      to: {
        cardwhojp: 'S3',
        id: '05-oboro-o-n-4',
        name: '忍步',
        namejp: '忍歩',
        baseType: 'normal',
        types: ['action'],
        text: '设置\n虚 (1)→ 距\n若你从盖牌区中使用此牌，则你可以从盖牌区中额外使用1张具设置关键字的牌。',
        textjp: '設置 \n間合→ダスト：1 \nこのカードを伏せ札から使用したならば、伏せ札から設置を持つカードを1枚使用してもよい。'
      }
    }, {
      id: '05-oboro-o-s-2',
      from: {
        cardwhojp: 'S2',
        id: '05-oboro-o-s-2',
        name: '鸢影',
        namejp: '鳶影',
        baseType: 'special',
        types: ['action', 'reaction'],
        cost: '3',
        text: '你可以从盖牌中选择1张不具《全力》副类别的牌并使用之。若此牌对应了一个《攻击》，则视为所选择的牌也对应了该《攻击》。',
        textjp: '伏せ札から《全力》でないカードを1枚選び、そのカードを使用してもよい。この際、このカードが対応している《攻撃》があるならば、使用されたカードはそれに対応しているものと扱う。'
      },
      to: {
        cardwhojp: 'S3',
        id: '05-oboro-o-s-2',
        name: '鸢影',
        namejp: '鳶影',
        baseType: 'special',
        types: ['action', 'reaction'],
        cost: '4',
        text: '你可以从盖牌中选择1张不具《全力》副类别的牌并使用之。若此牌对应了一个《攻击》，则视为所选择的牌也对应了该《攻击》。',
        textjp: '伏せ札から《全力》でないカードを1枚選び、そのカードを使用してもよい。この際、このカードが対応している《攻撃》があるならば、使用されたカードはそれに対応しているものと扱う。'
      }
    }, {
      id: '05-oboro-o-s-4',
      from: {
        cardwhojp: 'S2',
        id: '05-oboro-o-s-4',
        name: '壬蔓',
        namejp: '壬蔓',
        baseType: 'special',
        types: ['action'],
        cost: '0',
        text: '敌装（1）→自气 \n----\n【再起】自气中的樱花结晶的数目等于0。',
        textjp: '相オー→自フレア：1 \n----\n【再起】あなたのフレアが0である。'
      },
      to: {
        cardwhojp: 'S3',
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
      }
    }, {
      id: '07-shinra-o-n-6',
      from: {
        cardwhojp: 'S2',
        id: '07-shinra-o-n-6',
        name: '壮语',
        namejp: '壮語',
        baseType: 'normal',
        types: ['enhance'],
        capacity: '2',
        text: '【破弃时】实行当前计略，准备下个计略。\n神算：你获得1点集中力，将此牌置于你的牌库顶。\n鬼谋：若对手的手牌张数大于等于2，则弃至只剩1张。对手的集中力变为0。',
        textjp: '【破棄時】計略を実行し、次の計略を準備する。 \n[神算] あなたの集中力は1増加し、このカードを山札の一番上に置く。 \n[鬼謀] 相手は手札が2枚以上ならば、手札を1枚になるまで捨て札にする。相手の集中力は0になる。'
      },
      to: {
        cardwhojp: 'S3',
        id: '07-shinra-o-n-6',
        name: '壮语',
        namejp: '壮語',
        baseType: 'normal',
        types: ['enhance'],
        capacity: '2',
        text: '【破弃时】实行当前计略，准备下个计略。\n神算：你获得1点集中力，将此牌置于你的牌库顶。\n鬼谋：若对手的手牌张数小于等于1，则对手畏缩，对手抓3张牌，然后弃2张牌。',
        textjp: '【破棄時】計略を実行し、次の計略を準備する。 \n[神算] あなたは集中力を1得て、このカードを山札の一番上に置く。 \n[鬼謀] 相手の手札が1枚以下ならば、相手を畏縮させ、相手はカードを3枚引き、相手は手札を2枚捨て札にする。'
      }
    }, {
      id: '11-thallya-o-s-3',
      from: {
        cardwhojp: 'S2',
        id: '11-thallya-o-s-3',
        name: 'Thallya\'s Masterpiece',
        namejp: 'Thallya\'s Masterpiece',
        baseType: 'special',
        types: ['action'],
        cost: '2',
        text: '【使用后】每当你进行骑动后，你可以进行\n虚（1）⇔ 距',
        textjp: '【使用済】あなたが騎動を行うたびに\nダスト⇔間合：1 \nを行ってもよい。'
      },
      to: {
        cardwhojp: 'S3',
        id: '11-thallya-o-s-3',
        name: 'Thallya\'s Masterpiece',
        namejp: 'Thallya\'s Masterpiece',
        baseType: 'special',
        types: ['action'],
        cost: '1',
        text: '【使用后】你的回合内，每当你由于除基本动作以外的效果进行骑动时，若此次骑动改变了距离，则你可以选择\n虚（1）⇔ 距',
        textjp: '【使用済】あなたのターンに、あなたが基本動作以外の方法で騎動を行い、間合を変化させるたびに\nダスト⇔間合：1 \nを行ってもよい。'
      }
    }, {
      id: '11-thallya-o-s-4',
      from: {
        cardwhojp: 'S2',
        id: '11-thallya-o-s-4',
        name: 'Julia\'s BlackBox',
        namejp: 'Julia\'s BlackBox',
        baseType: 'special',
        types: ['action', 'fullpower'],
        cost: '0',
        text: '若你的引擎中没有处于未燃烧状态的造花结晶，则TRANSFORM你的引擎，然后回复2个处于燃尽状态的造花结晶，否则将此牌变为未使用状态。',
        textjp: 'あなたのマシンに造花結晶がないならば、あなたのマシンはTransFormし、あなたの燃焼済の造花結晶を2つ回復する。そうでない場合、このカードを未使用に戻す。'
      },
      to: {
        cardwhojp: 'S3',
        id: '11-thallya-o-s-4',
        name: 'Julia\'s BlackBox',
        namejp: 'Julia\'s BlackBox',
        baseType: 'special',
        types: ['action', 'fullpower'],
        cost: '2',
        text: '若你的引擎中没有处于未燃烧状态的造花结晶，则TRANSFORM你的引擎，然后回复2个处于燃尽状态的造花结晶，否则将此牌变为未使用状态。',
        textjp: 'あなたのマシンに造花結晶がないならば、あなたのマシンはTransFormし、あなたの燃焼済の造花結晶を2つ回復する。そうでない場合、このカードを未使用に戻す。'
      }
    }]
  },
  {
    id: 'S2',
    name: 'S1 -> S2赛季更新',
    namejp: 'シーズン１→２カード更新',
    link: 'http://bfpblog.bakafire.main.jp/?eid=186',
    list: [{
      id: '01-yurina-o-n-4',
      from: {
        cardwhojp: 'S1',
        id: '01-yurina-o-n-4',
        name: '居合斩',
        namejp: '居合',
        baseType: 'normal',
        types: ['attack', 'fullpower'],
        range: '3-4',
        damage: '4/3',
        text: '',
        textjp: ''
      },
      to: {
        cardwhojp: 'S2',
        id: '01-yurina-o-n-4',
        name: '居合斩',
        namejp: '居合',
        baseType: 'normal',
        types: ['attack', 'fullpower'],
        range: '2-4',
        damage: '4/3',
        text: '【常时】若当前距离小于等于2，则此《攻击》获得-1/-1。',
        textjp: '【常時】現在の間合が2以下ならば、この攻撃は-1/-1となる。'
      }
    }, {
      id: '01-yurina-o-n-5',
      from: {
        cardwhojp: 'S1',
        id: '01-yurina-o-n-5',
        name: '疾跑',
        namejp: '足捌き',
        baseType: 'normal',
        types: ['action'],
        text: '若当前距离大于等于4，则距（2）→虚。',
        textjp: '現在の間合が4以上ならば、間合→ダスト：2'
      },
      to: {
        cardwhojp: 'S2',
        id: '01-yurina-o-n-5',
        name: '疾跑',
        namejp: '足捌き',
        baseType: 'normal',
        types: ['action'],
        text: '若当前距离大于等于4，则距（2）→虚。 \n若当前距离小于等于1，则虚（2）→距。',
        textjp: '現在の間合が4以上ならば、間合→ダスト：2\n現在の間合が1以下ならば、ダスト→間合：2'
      }
    }, {
      id: '01-yurina-o-s-3',
      from: {
        cardwhojp: 'S1',
        id: '01-yurina-o-s-3',
        name: '浮舟宿',
        namejp: '浮舟宿',
        baseType: 'special',
        types: ['action'],
        cost: '3',
        text: '虚（5）→自装 \n----\n【再起】决死～自命中的樱花结晶的数目小于等于3。',
        textjp: 'ダスト→自オーラ：5 \n----\n【再起】決死-あなたのライフが3以下である。'
      },
      to: {
        cardwhojp: 'S2',
        id: '01-yurina-o-s-3',
        name: '浮舟宿',
        namejp: '浮舟宿',
        baseType: 'special',
        types: ['action'],
        cost: '2',
        text: '虚（5）→自装 \n----\n【即再起】决死～自命中的樱花结晶的数目降至3及以下。',
        textjp: 'ダスト→自オーラ：5 \n----\n【即再起】決死-あなたのライフが3以下になる。'
      }
    }, {
      id: '02-saine-o-s-1',
      from: {
        cardwhojp: 'S1',
        id: '02-saine-o-s-1',
        name: '律动弧戟',
        namejp: '律動弧戟',
        baseType: 'special',
        types: ['action'],
        cost: '5',
        text: '进行一次“攻击距离3-4 伤害1/1”的攻击。\n进行一次“攻击距离4-5 伤害1/1”的攻击。\n进行一次“攻击距离3-5 伤害2/2”的攻击。',
        textjp: '攻撃『適正距離3-4、1/1』を行う。\n攻撃『適正距離4-5、1/1』を行う。\n攻撃『適正距離3-5、2/2』を行う。'
      },
      to: {
        cardwhojp: 'S2',
        id: '02-saine-o-s-1',
        name: '律动弧戟',
        namejp: '律動弧戟',
        baseType: 'special',
        types: ['action'],
        cost: '6',
        text: '进行一次“攻击距离3-4 伤害1/1”的攻击。\n进行一次“攻击距离4-5 伤害1/1”的攻击。\n进行一次“攻击距离3-5 伤害2/2”的攻击。',
        textjp: '攻撃『適正距離3-4、1/1』を行う。\n攻撃『適正距離4-5、1/1』を行う。\n攻撃『適正距離3-5、2/2』を行う。'
      }
    }, {
      id: '02-saine-o-s-2',
      from: {
        cardwhojp: 'S1',
        id: '02-saine-o-s-2',
        name: '响鸣共振',
        namejp: '響鳴共振',
        baseType: 'special',
        types: ['action'],
        cost: '1',
        text: '若敌装中的樱花结晶的数目大于等于5，\n则敌装（3）→距',
        textjp: '相手のオーラが5以上ならば、相オーラ→間合：３',
        textjp: '【常時】このカードの消費は相手のオーラの数だけ少なくなる。\n相オーラ→間合：3'
      },
      to: {
        cardwhojp: 'S2',
        id: '02-saine-o-s-2',
        name: '响鸣共振',
        namejp: '響鳴共振',
        baseType: 'special',
        types: ['action'],
        cost: '8',
        text: '【常时】此牌的费用减小X，X等于敌装中的樱花结晶的数目。 \n敌装（2）→距',
        textjp: '【常時】このカードの消費は相手のオーラの数だけ少なくなる。\n相オーラ→間合：2'
      }
    }, {
      id: '02-saine-o-s-3',
      from: {
        cardwhojp: 'S1',
        id: '02-saine-o-s-3',
        name: '音无碎冰',
        namejp: '音無砕氷',
        baseType: 'special',
        types: ['action', 'reaction'],
        cost: '1',
        text: '被对应的《攻击》获得-1/-1。\n----\n【再起】八相～自装中的樱花结晶的数目等于0。',
        textjp: '対応した《攻撃》は-1/-1となる。\n----\n【再起】八相-あなたのオーラが0である。'
      },
      to: {
        cardwhojp: 'S2',
        id: '02-saine-o-s-3',
        name: '音无碎冰',
        namejp: '音無砕氷',
        baseType: 'special',
        types: ['attack', 'reaction'],
        range: '0-10',
        damage: '1/1',
        cost: '2',
        text: '【攻击后】被对应的《攻击》获得-1/-1。\n----\n【再起】八相～自装中的樱花结晶的数目等于0。',
        textjp: '【攻撃後】対応した《攻撃》は-1/-1となる。\n----\n【再起】八相-あなたのオーラが0である。'
      }
    }, {
      id: '02-saine-o-s-4',
      from: {
        cardwhojp: 'S1',
        id: '02-saine-o-s-4',
        name: '冰雨细音的终焉',
        namejp: '氷雨細音の果ての果て',
        baseType: 'special',
        types: ['attack', 'reaction'],
        range: '1-5',
        damage: '5/5',
        cost: '4',
        text: '【常时】仅当你对应王牌时可以使用此牌。',
        textjp: '【常時】このカードは切札に対する対応でしか使用できない。'
      },
      to: {
        cardwhojp: 'S2',
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
      }
    }, {
      id: '04-tokoyo-o-n-1',
      from: {
        cardwhojp: 'S1',
        id: '04-tokoyo-o-n-1',
        name: '梳流',
        namejp: '梳流し',
        baseType: 'normal',
        types: ['attack'],
        range: '5',
        damage: '-/1',
        text: '【攻击后】境地～仅当你的集中力等于2时可以使用此牌。\n【攻击后】则将此牌置于你的牌库顶。',
        textjp: '【常時】境地—あなたの集中カが2でないならば、このカ一ドは使用できない。\n【攻撃後】このカ一ドを山札の上に戻す。'
      },
      to: {
        cardwhojp: 'S2',
        id: '04-tokoyo-o-n-1',
        name: '梳流',
        namejp: '梳流し',
        baseType: 'normal',
        types: ['attack'],
        range: '4',
        damage: '-/1',
        text: '【攻击后】境地～若你的集中力等于2，则将此牌置于你的牌库顶。',
        textjp: '【攻撃後】境地-あなたの集中力が2ならば、このカードを山札の上に戻す。'
      }
    }, {
      id: '04-tokoyo-o-n-7',
      from: {
        cardwhojp: 'S1',
        id: '04-tokoyo-o-n-7',
        name: '晴舞台',
        namejp: '晴舞台',
        baseType: 'normal',
        types: ['enhance'],
        capacity: '5',
        text: '【展开中】每当你使用的具《对应》副类别的牌结算完毕时，虚（1）→自装',
        textjp: '【展開中】あなたが《対応》カ一ドを使用した時、その解決後に、ダスト→自オーラ：1'
      },
      to: {
        cardwhojp: 'S2',
        id: '04-tokoyo-o-n-7',
        name: '晴舞台',
        namejp: '晴舞台',
        baseType: 'normal',
        types: ['enhance'],
        capacity: '1',
        text: '【破弃时】境地～若你的集中力等于2，则虚（2）→自装\n【破弃时】你获得1点集中力。',
        textjp: '【破棄時】境地-あなたの集中力が2ならば、ダスト→自オーラ：2 \n【破棄時】境地-あなたは集中力を1得る。'
      }
    }, {
      id: '04-tokoyo-o-s-3',
      from: {
        cardwhojp: 'S1',
        id: '04-tokoyo-o-s-3',
        name: '无穷之风',
        namejp: '無窮ノ風',
        baseType: 'special',
        types: ['attack'],
        range: '4-8',
        damage: '1/1',
        cost: '1',
        text: '【攻击后】对手弃1张非《攻击》的牌。若不能如此做，对手须展示其手牌。\n----\n【再起】境地～你的集中力等于2。',
        textjp: '【攻撃後】相手は手札から《攻撃》でないカード1枚を捨て札にする。それが行えない場合、相手は手札を公開する。 \n----\n【再起】境地-あなたの集中力が2である。'
      },
      to: {
        cardwhojp: 'S2',
        id: '04-tokoyo-o-s-3',
        name: '无穷之风',
        namejp: '無窮ノ風',
        baseType: 'special',
        types: ['attack'],
        range: '3-8',
        damage: '1/1',
        cost: '1',
        text: '不可被对应\n【攻击后】对手弃1张非《攻击》的牌。若不能如此做，对手须展示其手牌。\n----\n【再起】境地～你的集中力等于2。',
        textjp: '対応不可 \n【攻撃後】相手は手札から《攻撃》でないカード1枚を捨て札にする。それが行えない場合、相手は手札を公開する。 \n----\n【再起】境地-あなたの集中力が2である。'
      }
    }, {
      id: '05-oboro-o-n-2',
      from: {
        cardwhojp: 'S1',
        id: '05-oboro-o-n-2',
        name: '影菱',
        namejp: '影菱',
        baseType: 'normal',
        types: ['attack'],
        range: '2',
        damage: '2/1',
        text: '设置 不可被对应 \n【常时】若你从盖牌区使用此牌，则这张《攻击》获得+1/+1。',
        textjp: '設置　対応不可\n【常時】このカ一ドを伏せ札から使用したならば、この〈攻撃〉は+1/+1となる。'
      },
      to: {
        cardwhojp: 'S2',
        id: '05-oboro-o-n-2',
        name: '影菱',
        namejp: '影菱',
        baseType: 'normal',
        types: ['attack'],
        range: '2',
        damage: '2/1',
        text: '设置 不可被对应 \n【攻击后】若你从盖牌区使用此牌，则检视对手的手牌，从中选择1张并盖伏。',
        textjp: '設置　対応不可\n【攻撃後】このカードを伏せ札から使用したならば、相手の手札を見てその中から1枚を選び、それを伏せ札にする。'
      }
    }, {
      id: '07-shinra-o-s-2',
      from: {
        cardwhojp: 'S1',
        id: '07-shinra-o-s-2',
        name: '诸式理解',
        namejp: '皆式理解',
        baseType: 'special',
        types: ['action'],
        cost: '2',
        text: '实行当前计略，准备下个计略。\n神算：选择你的1张《付与》牌，从虚选择至多X个樱花结晶移至该牌，X为该《付与》牌的纳。\n鬼谋：从对手的非王牌的展开中的《付与》牌中选择1张，将其上所有樱花结晶移至虚。',
        textjp: '計略を実行し、次の計略を準備する。 \n[神算]あなたの付与札を1枚選ぶ。その上に桜花結晶をX個までダストから置く。Xは選ばれた付与札の納の値に等しい。\n[鬼謀]切札でない相手の付与札を1枚選ぶ。その上の桜花結晶全てをダストに置く。'
      },
      to: {
        cardwhojp: 'S2',
        id: '07-shinra-o-s-2',
        name: '诸式理解',
        namejp: '皆式理解',
        baseType: 'special',
        types: ['action'],
        cost: '2',
        text: '实行当前计略，准备下个计略。\n神算：从你的弃牌与处于使用后状态的王牌中选择1张《付与》牌使用，而不需支付其费用。若所选择的牌具有《全力》副类别，则结束当前阶段。\n鬼谋：从对手的非王牌的展开中的《付与》牌中选择1张，将其上所有樱花结晶移至虚。',
        textjp: '計略を実行し、次の計略を準備する。 \n[神算] あなたの捨て札または使用済の切札から、消費を支払わずに《付与》カード1枚を使用する。そのカードが《全力》ならば現在のフェイズを終了する。 \n[鬼謀] 切札でない相手の付与札を1枚選ぶ。その上の桜花結晶全てをダストに送る。'
      }
    }, {
      id: '08-hagane-o-n-1',
      from: {
        cardwhojp: 'S1',
        id: '08-hagane-o-n-1',
        name: '远心击',
        namejp: '遠心撃',
        baseType: 'normal',
        types: ['attack'],
        range: '2-6',
        damage: '5/3',
        text: '远心 \n【攻击后】盖伏你的所有手牌，结束当前阶段。',
        textjp: '遠心 \n【攻撃後】あなたの手札を全て伏せ札にし、このフェイズを終了する。'
      },
      to: {
        cardwhojp: 'S2',
        id: '08-hagane-o-n-1',
        name: '远心击',
        namejp: '遠心撃',
        baseType: 'normal',
        types: ['attack'],
        range: '2-6',
        damage: '5/3',
        text: '远心 \n【攻击后】若现在是你的回合，则盖伏你和对手的所有手牌，你的集中力变为0，结束当前阶段。',
        textjp: '遠心 \n【攻撃後】現在のターンがあなたのターンならば、あなたと相手の手札を全て伏せ札にし、あなたの集中力は0になり、現在のフェイズを終了する。'
      }
    }, {
      id: '10-kururu-o-s-2',
      from: {
        cardwhojp: 'S1',
        id: '10-kururu-o-s-2',
        name: '大魔像',
        namejp: 'びっぐごーれむ',
        baseType: 'special',
        types: ['action'],
        cost: '3',
        colors: ['黄黄紫'],
        text: '机巧：黄黄紫～\n【使用后】你的结束阶段开始时，你可以对敌命造成1点伤害。若如此做，则重铸你的牌库（你不会因此受到伤害）。\n【使用后】每当你使用具《全力》副类别的牌时，该牌结算完毕后你可以执行1次基本动作。',
        textjp: '<対全全> 【使用済】あなたの終了フェイズに相手のライフに1ダメージを与えてもよい。そうした場合、山札を再構成する。 \n----\n【使用済】あなたが《全力》カードを使用した時、その解決後に基本動作を1回行ってもよい。\n',
        textkururu: [{
          if: '<i class="i-bean i-bean--yellow"></i><i class="i-bean i-bean--yellow"></i><i class="i-bean i-bean--purple"></i>',
          ctn: '【使用后】你的结束阶段开始时，你可以对敌命造成1点伤害。若如此做，则重铸你的牌库（你不会因此受到伤害）。'
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
      to: {
        cardwhojp: 'S2',
        id: '10-kururu-o-s-2',
        name: '大魔像',
        namejp: 'びっぐごーれむ',
        baseType: 'special',
        types: ['action'],
        cost: '4',
        colors: ['黄黄紫'],
        text: '机巧：黄黄紫～\n【使用后】你的结束阶段开始时，你可以对敌命造成1点伤害。若如此做，则重铸你的牌库（你不会因此受到伤害）。\n【使用后】每当你使用具《全力》副类别的牌时，该牌结算完毕后你可以执行1次基本动作。',
        textjp: '<対全全> 【使用済】あなたの終了フェイズに相手のライフに1ダメージを与えてもよい。そうした場合、山札を再構成する。 \n----\n【使用済】あなたが《全力》カードを使用した時、その解決後に基本動作を1回行ってもよい。\n',
        textkururu: [{
          if: '<i class="i-bean i-bean--yellow"></i><i class="i-bean i-bean--yellow"></i><i class="i-bean i-bean--purple"></i>',
          ctn: '【使用后】你的结束阶段开始时，你可以对敌命造成1点伤害。若如此做，则重铸你的牌库（你不会因此受到伤害）。'
        }, {
          ctn: '【使用后】每当你使用具《全力》副类别的牌时，该牌结算完毕后你可以执行1次基本动作。'
        }],
        textkururujp: [{
          if: '<i class="i-bean i-bean--yellow"></i><i class="i-bean i-bean--yellow"></i><i class="i-bean i-bean--purple"></i>',
          ctn: '【使用済】あなたの終了フェイズに相手のライフに1ダメージを与えてもよい。そうした場合、山札を再構成する。'
        }, {
          ctn: '【使用済】あなたが《全力》カードを使用した時、その解決後に基本動作を1回行ってもよい。'
        }]
      }
    }, {
      id: '11-thallya-o-tf-1',
      from: {
        cardwhojp: 'S1',
        id: '11-thallya-o-tf-1',
        name: 'Form: YAKSHA',
        namejp: 'Form: YAKSHA',
        baseType: 'transform',
        types: ['transform'],
        text: '【变形时】盖伏对手的所有手牌，对手的集中力变为0，对手畏缩。\n【常时】若你的引擎中的造花结晶的数目等于0，则你不能执行基本动作。\n【追加基本动作】Beta-Edge：进行一次“攻击距离2,4,6,8 伤害2/1 【攻击后】进行一次骑动。”的攻击。',
        textjp: '【変形時】相手は手札を全て伏せ札にし相手の集中カは0になり、相手を畏縮させる。\n----\n【常時】あなたのマシンに造花結晶がないならば、あなたは基本動作を行えない。\n----\n【追加基本行動：Beta-Edge】『適正距離2,4,6,8、2/1 【攻撃後】騎動を行う』の《攻撃》を行う。'
      },
      to: {
        cardwhojp: 'S2',
        id: '11-thallya-o-tf-1',
        name: 'Form: YAKSHA',
        namejp: 'Form: YAKSHA',
        baseType: 'transform',
        types: ['transform'],
        text: '【变形时】对手下个准备阶段只抓1张牌，对手畏缩。\n【常时】若你的引擎中的造花结晶的数目等于0，则你不能执行基本动作。\n【追加基本动作】Beta-Edge：进行一次“攻击距离2,4,6,8 伤害2/1 【攻击后】进行一次骑动。”的攻击。',
        textjp: '【変形時】相手は次の開始フェイズにカードを1枚しか引けない。相手を畏縮させる。\n----\n【常時】あなたのマシンに造花結晶がないならば、あなたは基本動作を行えない。\n----\n【追加基本行動：Beta-Edge】『適正距離2,4,6,8、2/1 【攻撃後】騎動を行う』の《攻撃》を行う。'
      }
    }, {
      id: '12-raira-o-n-1',
      from: {
        cardwhojp: 'S1',
        id: '12-raira-o-n-1',
        name: '兽爪',
        namejp: '獣爪',
        baseType: 'normal',
        types: ['attack'],
        range: '0-2',
        damage: '2/2',
        text: '',
        textjp: ''
      },
      to: {
        cardwhojp: 'S2',
        id: '12-raira-o-n-1',
        name: '兽爪',
        namejp: '獣爪',
        baseType: 'normal',
        types: ['attack'],
        range: '1-2',
        damage: '3/1',
        text: '',
        textjp: ''
      }
    }]
  }
]