<template>
  <div class="allcards-list">
    <div class="md faq-about">
      <blockquote>
        <p v-if="lang[curlang].id === 'cn'">
          <a href="https://docs.qq.com/sheet/DYWJ6Qkp4WWlnVXp3" target="_blank"
            >{{
              lang[curlang].id === "cn"
                ? toChzh("去投稿卡组（腾讯文档）")
                : "Add Deck With Tencent Docs"
            }}&gt;&gt;<span></span
          ></a>
        </p>
        <p>
          <a
            href="https://docs.google.com/spreadsheets/d/1v8ARJkQjLUo5MIQyZ8XqT7-HSDTnHF4ClDdf99B5A0Q/edit?usp=sharing"
            target="_blank"
            >{{
              lang[curlang].id === "cn"
                ? toChzh("去投稿卡组（Google Docs）")
                : "Add Deck With Google Docs"
            }}&gt;&gt;<span></span
          ></a>
        </p>
        <p>
          <span class="faq-about__date"
            >Last Updated:
            {{ formatTime(sakuraPlayerDeckData[0].date, "YYYY-MM-DD") }}</span
          >
        </p>
        <p><span class="faq-about__date">投稿的卡组将会用于steam版散樱乱武的AI训练</span></p>
      </blockquote>
    </div>
    <div class="random-btn-wrap" style="text-align: left; padding-left: 10px">
      <button
        class="btn btn-xs btn-main-brd"
        @click="deckSortBy('index', deckSortByType === 'index')"
        :class="{ disabled: deckSortByType === 'index' }"
      >
        {{ lang[curlang].id === "cn" ? toChzh("女神序号") : "メガミNO." }}↓
      </button>
      <button
        class="btn btn-xs btn-main-brd"
        @click="deckSortBy('countdown', deckSortByType === 'countdown')"
        :class="{ disabled: deckSortByType === 'countdown' }"
      >
        {{ lang[curlang].id === "cn" ? toChzh("卡组数量") : "デッキ数" }}↓
      </button>
      <button
        class="btn btn-xs btn-main-brd"
        @click="deckSortBy('countup', deckSortByType === 'countup')"
        :class="{ disabled: deckSortByType === 'countup' }"
      >
        {{ lang[curlang].id === "cn" ? toChzh("卡组数量") : "デッキ数" }}↑
      </button>
    </div>
    <div
      class="random-list"
      :class="{ hide: !(deckAvatarList && deckAvatarList.length > 0) }"
    >
      <span
        class="random-item"
        v-for="(girlItem, girlIndex) in deckAvatarList"
        :class="{ 'random-item--nouse': !girlItem.isSelect }"
        @click="selectedCancel(girlItem)"
        v-bind:key="girlIndex"
      >
        <span class="random-item__pic">
          <img v-lazy="`../img/avatar/${girlItem.pic}`" />
        </span>
        <span class="random-item__name">
          <template v-if="getCardKeyValInLang(girlItem)">{{
            getCardKeyValInLang(girlItem)
          }}</template>
        </span>
        <span style="color: #646464; font-size: 12px; white-space: nowrap"
          >{{ girlItem.GroupNum
          }}{{ lang[curlang].id === "cn" ? toChzh("个") : "" }}</span
        >
      </span>
    </div>
    <div class="random-btn-wrap">
      <button class="btn btn-small" @click="randomGetDeck(1)">
        {{ lang[curlang].btnRandomItem }}1
      </button>
      <button class="btn btn-small" @click="randomGetDeck(2)">
        {{ lang[curlang].btnRandomItem }}2
      </button>
      <button class="btn btn-small" @click="randomGetDeck(3)">
        {{ lang[curlang].btnRandomItem }}3
      </button>
      <button class="btn btn-small" @click="randomGetDeck('allo')">
        Only O
      </button>
      <button class="btn btn-small" @click="randomGetDeck('alla')">
        Only A
      </button>
      <button class="btn btn-small" @click="randomGetDeck('ss2')">起源</button>
      <button class="btn btn-small" @click="randomGetDeck('top1')">上位</button>
      <button
        class="btn btn-small btn-cancel"
        @click="handleClickCancelDeckAvatar()"
      >
        {{ lang[curlang].id === "cn" ? toChzh("清空全选") : "Clear" }}
      </button>
      <button
        class="btn btn-small btn-main"
        @click="handleClickResetDeckAvatar()"
      >
        Reset
      </button>
    </div>
    <!-- S 页面tab -->
    <div class="panel-tab panel-tab--sub">
      <template v-for="(item, index) in panelTab[4].child">
        <span
          @click="tabChangedInChild(4, index)"
          :class="{ cur: panelTab[4].childTabIndex === index }"
          v-if="
            item.show &&
            (!item.onlyCn || (item.onlyCn && lang[curlang].id === 'cn'))
          "
          v-bind:key="index"
        >
          <template v-if="lang[curlang].id === 'cn'">{{
            toChzh(item.name)
          }}</template>
          <template v-else>{{ item.namejp }}</template>
        </span>
      </template>
    </div>
    <!-- E 页面tab -->
    <!-- S 页面tab：卡组分析 -->
    <div
      v-if="statisticsDeckCards"
      class="deck-anal cgroup cgroup--old"
      :class="{ hide: panelTab[4].childTabIndex !== 1 }"
    >
      <!-- S 投稿卡组中使用数前五的卡牌 -->
      <div
        class="deck-anal__item"
        v-for="(statisticesItem, key) in statisticsDeckCards"
        v-bind:key="key"
      >
        <h3>
          {{
            lang[curlang].id === "cn"
              ? toChzh(
                  `${
                    statisticesItem.ss !== "all" ? statisticesItem.ss : ""
                  } 投稿卡组中使用数前五的卡牌`
                )
              : `${
                  statisticesItem.ss !== "all" ? statisticesItem.ss : ""
                } Some of the most used cards`
          }}
        </h3>
        <p class="allcards__type">NORMAL</p>
        <div class="card-wrap">
          <div class="card-list">
            <span
              style="display: inline-block"
              v-for="(cardItem, cardIndex) in statisticesItem.afNormal"
              v-bind:key="cardIndex"
            >
              <div class="card-list__item" :class="getCardClass(cardItem.card)">
                <CardItem :item="cardItem.card"></CardItem>
              </div>
              <p style="color: #646464; font-size: 12px; white-space: nowrap">
                {{ cardItem.count
                }}{{ lang[curlang].id === "cn" ? toChzh("个") : "" }}
              </p>
            </span>
          </div>
        </div>
        <p class="allcards__type">SPECIAL</p>
        <div class="card-wrap">
          <div class="card-list">
            <span
              style="display: inline-block"
              v-for="(cardItem, cardIndex) in statisticesItem.afSpecial"
              v-bind:key="cardIndex"
            >
              <div class="card-list__item" :class="getCardClass(cardItem.card)">
                <CardItem :item="cardItem.card"></CardItem>
              </div>
              <p style="color: #646464; font-size: 12px; white-space: nowrap">
                {{ cardItem.count
                }}{{ lang[curlang].id === "cn" ? toChzh("个") : "" }}
              </p>
            </span>
          </div>
        </div>
        <p class="allcards__type">ALL</p>
        <div class="card-wrap">
          <div class="card-list">
            <span
              style="display: inline-block"
              v-for="(cardItem, cardIndex) in statisticesItem.afAll"
              v-bind:key="cardIndex"
            >
              <div class="card-list__item" :class="getCardClass(cardItem.card)">
                <CardItem :item="cardItem.card"></CardItem>
              </div>
              <p style="color: #646464; font-size: 12px; white-space: nowrap">
                {{ cardItem.count
                }}{{ lang[curlang].id === "cn" ? toChzh("个") : "" }}
              </p>
            </span>
          </div>
        </div>
      </div>
      <!-- E 投稿卡组中使用数前五的卡牌 -->
      <div
        class="anycard-data"
        v-if="deckAvatarListBackup && deckAvatarListBackup.length > 0"
      >
        <div
          v-for="(girlItem, girlIndex) in deckAvatarListBackup"
          class="allcards-list__item"
          v-bind:key="girlIndex"
        >
          <div class="allcards-tab">
            <div class="allcards-tab__item allcards-item">
              <div class="allcards__title">
                <span class="avatar">
                  <img v-lazy="`../img/avatar/${girlItem.pic}`" />
                </span>
                <span class="name" v-if="getCardKeyValInLang(girlItem)">{{
                  getCardKeyValInLang(girlItem)
                }}</span>
                <span
                  style="color: #646464; font-size: 12px; white-space: nowrap"
                  >({{ girlItem.GroupNum
                  }}{{ lang[curlang].id === "cn" ? toChzh("个") : "" }})</span
                >
              </div>
            </div>
          </div>
          <div class="allcards__content">
            <div class="card-wrap">
              <template
                v-if="
                  girlItem.giCards.normalMostCard &&
                  girlItem.giCards.normalMostCard.length > 0
                "
              >
                <p class="deck-type">NORMAL</p>
                <p style="font-size: 12px">
                  {{
                    lang[curlang].id === "cn" ? toChzh("优先类型构筑推荐") : ""
                  }}
                </p>
                <div class="cgroup-procss">
                  <div
                    :class="`cgroup-procss-item cgroup-procss-item--${pitem.name}`"
                    :style="`width: ${
                      (pitem.count /
                        girlItem.giCards.normalCardTypes.sumCount) *
                      100
                    }%`"
                    v-for="(pitem, pkey) in girlItem.giCards.normalCardTypes
                      .resultList"
                    v-bind:key="pkey"
                  >
                    {{ pitem.count }}
                  </div>
                </div>
                <div class="card-list">
                  <!-- <span class="card-list__name">通常</span> -->
                  <span
                    style="display: inline-block; vertical-align: middle"
                    v-for="(
                      cardItem, cardIndex
                    ) in girlItem.giCards.normalMostCard.slice(0, 2)"
                    v-bind:key="cardIndex"
                  >
                    <div
                      class="card-list__item"
                      :class="getCardClass(cardItem.card)"
                    >
                      <CardItem :item="cardItem.card"></CardItem>
                    </div>
                    <p
                      style="
                        color: #646464;
                        font-size: 12px;
                        white-space: nowrap;
                      "
                    >
                      {{ cardItem.count
                      }}{{ lang[curlang].id === "cn" ? toChzh("个") : "" }}
                    </p>
                  </span>
                </div>
              </template>
              <template
                v-if="
                  girlItem.giCards.specialMostCard &&
                  girlItem.giCards.specialMostCard.length > 0
                "
              >
                <p class="deck-type">SPECIAL</p>
                <p style="font-size: 12px">
                  {{
                    lang[curlang].id === "cn" ? toChzh("优先类型构筑推荐") : ""
                  }}
                </p>
                <div class="cgroup-procss">
                  <div
                    :class="`cgroup-procss-item cgroup-procss-item--${pitem.name}`"
                    :style="`width: ${
                      (pitem.count /
                        girlItem.giCards.specialCardTypes.sumCount) *
                      100
                    }%`"
                    v-for="(pitem, pkey) in girlItem.giCards.specialCardTypes
                      .resultList"
                    v-bind:key="pkey"
                  >
                    {{ pitem.count }}
                  </div>
                </div>
                <div class="card-list">
                  <!-- <span class="card-list__name">&nbsp;&nbsp;切</span> -->
                  <span
                    style="display: inline-block; vertical-align: middle"
                    v-for="(
                      cardItem, cardIndex
                    ) in girlItem.giCards.specialMostCard.slice(0, 2)"
                    v-bind:key="cardIndex"
                  >
                    <div
                      class="card-list__item"
                      :class="getCardClass(cardItem.card)"
                    >
                      <CardItem :item="cardItem.card"></CardItem>
                    </div>
                    <p
                      style="
                        color: #646464;
                        font-size: 12px;
                        white-space: nowrap;
                      "
                    >
                      {{ cardItem.count
                      }}{{ lang[curlang].id === "cn" ? toChzh("个") : "" }}
                    </p>
                  </span>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- E 页面tab：卡组分析 -->
    <div :class="{ hide: panelTab[4].childTabIndex !== 0 }">
      <DeckCount
        :curlang="curlang"
        :toChzh="toChzh"
        :deckSum="deckSum"
        :deckcount="resDecks.length"
      ></DeckCount>
      <div
        class="allcards-list__item"
        v-for="(item, index) in resDecks"
        v-bind:key="index"
      >
        <div class="allcards-tab" @click="selectedDeckShow(index)">
          <div
            class="allcards-tab__item allcards-item"
            :class="{ show: item.isSelect }"
          >
            <DeckTitle :item="item"></DeckTitle>
          </div>
        </div>
        <div class="allcards__content" :class="{ hide: !item.isSelect }">
          <DeckInfo :item="item"></DeckInfo>
          <div class="cgroup cgroup--old">
            <!-- S 头像 -->
            <div
              class="select-group"
              :class="'select-group--' + item.groupCardData.length"
            >
              <div
                class="select-group__item"
                v-for="(item, index) in item.groupCardData"
                v-bind:key="index"
              >
                <div class="random-item">
                  <span class="random-item__pic">
                    <img :src="`../img/avatar/${item.pic}`" />
                  </span>
                  <p class="random-item__name" v-if="getCardKeyValInLang(item)">
                    {{ getCardKeyValInLang(item) }}
                  </p>
                  <p
                    class="realname"
                    v-if="getCardKeyValInLang(item, 'realname')"
                  >
                    {{ getCardKeyValInLang(item, "realname") }}
                  </p>
                  <!-- <GirlRange :item="item"></GirlRange> -->
                  <div class="spdesc-wrap">
                    <p
                      class="spdesc"
                      v-if="lang[curlang].id === 'cn' && item.desc"
                      v-html="toChzh(item.desc)"
                    ></p>
                    <p class="spdesc" v-else v-html="item.descjp"></p>
                  </div>
                </div>
              </div>
            </div>
            <!-- E 头像 -->
            <div class="cgroup__girlpic cgroup__girlpic--2">
              <img
                v-lazy="`../img/furuyoni/mini/${item.picq}`"
                v-for="(item, index) in item.groupCardData"
                v-bind:key="index"
              />
            </div>
            <div class="card-wrap">
              <div class="card-list pcsee">
                <div
                  class="card-list__item normal"
                  :class="getCardClass(cardItem)"
                  v-for="(cardItem, cardIndex) in item.deck.normal"
                  @click="getCardDetailInDeck(cardItem)"
                  v-bind:key="cardIndex"
                >
                  <CardItem :item="cardItem"></CardItem>
                </div>
              </div>
              <div class="card-list msee">
                <template v-for="(cardItem, cardIndex) in item.deck.normal">
                  <div
                    class="card-list__item normal"
                    :class="getCardClass(cardItem)"
                    v-bind:key="cardIndex"
                    @click="getCardDetailInDeck(cardItem)"
                    v-if="cardIndex < 3"
                  >
                    <CardItem :item="cardItem"></CardItem>
                  </div>
                </template>
              </div>
              <div class="card-list msee">
                <template v-for="(cardItem, cardIndex) in item.deck.normal">
                  <div
                    class="card-list__item normal"
                    :class="getCardClass(cardItem)"
                    v-bind:key="cardIndex"
                    @click="getCardDetailInDeck(cardItem)"
                    v-if="cardIndex >= 3"
                  >
                    <CardItem :item="cardItem"></CardItem>
                  </div>
                </template>
              </div>
              <div class="card-list">
                <span class="card-list__name">切</span>
                <div
                  class="card-list__item special"
                  :class="getCardClass(cardItem)"
                  v-for="(cardItem, cardIndex) in item.deck.special"
                  v-bind:key="cardIndex"
                  @click="getCardDetailInDeck(cardItem)"
                >
                  <CardItem :item="cardItem"></CardItem>
                </div>
              </div>
              <!-- S 追加 -->
              <div class="card-wrap card-wrap--extra card-wrap--2">
                <div class="card-list">
                  <div
                    class="card-list__item"
                    :class="getCardClass(cardItem, 1)"
                    v-for="(cardItem, cardIndex) in item.deck.girlBoard"
                    v-bind:key="cardIndex"
                    @click="getCardDetailInDeck(cardItem)"
                  >
                    <CardItem :item="cardItem"></CardItem>
                  </div>
                  <div
                    class="card-list__item"
                    :class="getCardClass(cardItem, 1)"
                    :data-extrafrom="cardItem.extraFrom"
                    v-bind:key="cardIndex"
                    v-for="(cardItem, cardIndex) in item.deck.extra"
                    @click="getCardDetailInDeck(cardItem)"
                  >
                    <CardItem :item="cardItem"></CardItem>
                  </div>
                  <div
                    class="card-list__item"
                    :class="getCardClass(cardItem)"
                    v-for="(cardItem, cardIndex) in item.deck.poison"
                    v-bind:key="cardIndex"
                    @click="getCardDetailInDeck(cardItem)"
                  >
                    <CardItem :item="cardItem"></CardItem>
                  </div>
                  <div
                    class="card-list__item"
                    :class="getCardClass(cardItem)"
                    v-for="(cardItem, cardIndex) in item.deck.transform"
                    v-bind:key="cardIndex"
                    @click="getCardDetailInDeck(cardItem)"
                  >
                    <CardItem :item="cardItem"></CardItem>
                  </div>
                  <div
                    class="card-list__item"
                    :data-extrafrom="cardItem.extraFrom"
                    :class="getCardClass(cardItem, 1)"
                    v-bind:key="cardIndex"
                    v-for="(cardItem, cardIndex) in item.deck.changeExtra"
                    @click="getCardDetailInDeck(cardItem)"
                  >
                    <CardItem :item="cardItem"></CardItem>
                  </div>
                </div>
              </div>
              <!-- E 追加 -->
            </div>
          </div>
          <!-- S 卡片详情 -->
          <CardDetail
            :item="cardDetailInDeck"
            v-if="
              cardDetailInDeck &&
              (cardDetailInDeck.name || cardDetailInDeck.namejp)
            "
          />
          <!-- E 卡片详情 -->
        </div>
      </div>
      <div :class="{ hide: resDecks.length !== 0 }">No Result.</div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import configLang from '../config/lang.js'
import CardItem from '../components/CardItem/index.vue'
import CardDetail from '../components/CardDetail/index.vue'
import DeckCount from '../components/Deck/DeckCount.vue'
import DeckTitle from '../components/Deck/title.vue'
import DeckInfo from '../components/Deck/info.vue'

export default defineComponent({
  name: 'PageDecks',
  components: {
    CardItem,
    CardDetail,
    DeckCount,
    DeckTitle,
    DeckInfo
  },
  props: [
    'curlang',
    'sakuraPlayerDeckData',
    'deckAvatarList',
    'deckSortByType',
    'panelTab',
    'statisticsDeckCards',
    'deckAvatarListBackup',
    'resDecks',
    'cardDetailInDeck',
    'deckSum',
    'toChzh',
    'randomGetDeck',
    'getCardKeyValInLang',
    'handleClickCancelDeckAvatar',
    'handleClickResetDeckAvatar',
    'tabChangedInChild',
    'getCardClass',
    'getTypeName',
    'selectedCancel',
    'deckSortBy',
    'getCardDetailInDeck',
    'formatTime',
    'selectedDeckShow',
    'getCanBeStrong'
  ],
  setup(props, context) {
    return {
      lang: configLang
    }
  }
})
</script>