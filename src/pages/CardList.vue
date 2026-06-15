<script setup>
import { defineProps, defineEmits, computed, defineExpose} from 'vue'
import configLang from '../config/lang.js'
import { toChzh } from '../utils/lang.js'
import CardDetail from '../components/CardDetail/index.vue'
const lang = configLang
const props = defineProps({
  curlang: {
    type: [String, Number]
  },
  showPanelGirls: {
    type: Array
  },
  showPanelGirls: {
    type: Object
  },
  isOldVer: {
    type: Boolean
  },
  isNaChVer: {
    type: Boolean
  },
  isNaVer: {
    type: Boolean
  },
  isReVer: {
    type: Boolean
  },
  isShowA: {
    type: Boolean
  },
  getCardKeyValInLang: {
    type: Function
  },
  getTypeName: {
    type: Function
  },
  getCanBeStrong: {
    type: Function
  }
})
defineExpose({
  getCardKeyValInLang: props.getCardKeyValInLang,
  getTypeName: props.getTypeName,
  curlang: props.curlang,
  getCanBeStrong: props.getCanBeStrong
})
defineEmits([
  'update:isNaChVer',
  'update:isNaVer',
  'update:isReVer',
  'update:isShowA'
])
const localNaChVer = computed({
  get: () => props.isNaChVer,
  set: val => emit('update:isNaChVer', val)
})
const localNaVer = computed({
  get: () => props.isNaVer,
  set: val => emit('update:isNaVer', val)
})
const localReVer = computed({
  get: () => props.isReVer,
  set: val => emit('update:isReVer', val)
})
const localShowA = computed({
  get: () => props.isShowA,
  set: val => emit('update:isShowA', val)
})
</script>
<template>
  <div>
    <div class="checkbox-wrap">
      <label
        class="checkbox"
        :class="{ cur: isNaChVer }"
        v-if="!isOldVer && +curlang === 0"
      >
        <input type="checkbox" v-model="localNaChVer" />
        <span>新幕官中S8</span>
      </label>
      <label class="checkbox" :class="{ cur: isNaVer }" v-if="!isOldVer">
        <input type="checkbox" v-model="localNaVer" />
        <span>新幕S10-2</span>
      </label>
      <label class="checkbox" :class="{ cur: isReVer }" v-if="!isOldVer">
        <input type="checkbox" v-model="localReVer" />
        <span>再演</span>
      </label>
      <label class="checkbox" :class="{ cur: isShowA }" v-if="!isOldVer">
        <input type="checkbox" v-model="localShowA" />
        <span>{{ lang[curlang].btnIsShowA }}</span>
      </label>
    </div>
    <div class="allcards-list pcsee">
      <div class="allcards-list__col" v-for="(item, key) in 2" v-bind:key="key">
        <template v-for="(firstItem, fristIndex) in showPanelGirls">
          <div
            class="allcards-list__item"
            v-if="
              (key == 0 && fristIndex % 2 === 0) ||
              (key != 0 && fristIndex % 2 !== 0)
            "
            v-bind:key="fristIndex"
          >
            <div class="allcards__name">
              <span v-if="getCardKeyValInLang(firstItem, 'name')"
                >{{ getCardKeyValInLang(firstItem, "name") }} </span
              ><span
                class="i-tag i-tag--season"
                v-if="firstItem.isClassicBattle"
                >{{
                  lang[curlang].id === "cn" ? toChzh("古典战") : "古典戦"
                }}</span
              >
            </div>
            <div class="allcards-tab">
              <div
                class="allcards-tab__item allcards-item"
                :class="
                  firstItem.showAllCards &&
                  firstItem.showAllCardsIndex === index
                    ? 'show'
                    : ''
                "
                v-for="(item, index) in firstItem.list"
                v-bind:key="index"
                @click="
                  () => {
                    firstItem.showAllCards =
                      firstItem.showAllCardsIndex === index
                        ? !firstItem.showAllCards
                        : true;
                    firstItem.showAllCardsIndex = index;
                  }
                "
              >
                <div class="allcards__title">
                  <span class="avatar">
                    <img v-lazy="`../img/avatar/${item.pic}`" />
                  </span>
                  <span class="name" v-if="getCardKeyValInLang(item)">{{
                    getCardKeyValInLang(item)
                  }}</span>
                  <template
                    v-if="
                      !isOldVer &&
                      isNaChVer &&
                      qiyuanGirls &&
                      qiyuanGirls.ch.length > 0
                    "
                  >
                    <span
                      class="i-tag i-tag--season"
                      v-if="qiyuanGirls.ch.includes(item.name)"
                      >{{
                        lang[curlang].id === "cn"
                          ? toChzh("起源可用")
                          : "起源戦OK"
                      }}</span
                    >
                  </template>
                  <template
                    v-else-if="
                      isReVer && qiyuanGirls && qiyuanGirls.default.length > 0
                    "
                  >
                    <span
                      class="i-tag i-tag--season"
                      v-if="qiyuanGirls.default.includes(item.name)"
                      >{{
                        lang[curlang].id === "cn"
                          ? toChzh("起源可用")
                          : "起源戦OK"
                      }}</span
                    >
                  </template>
                  <template
                    v-if="
                      !isOldVer &&
                      isNaChVer &&
                      seasonGirls &&
                      seasonGirls.ch.length > 0
                    "
                  >
                    <span
                      class="i-tag i-tag--season"
                      v-if="seasonGirls.ch.includes(item.name)"
                      >季节赛</span
                    >
                  </template>
                  <template
                    v-else-if="
                      !isOldVer &&
                      !isNaChVer &&
                      seasonGirls &&
                      seasonGirls.default.length > 0
                    "
                  >
                    <span
                      class="i-tag i-tag--season"
                      v-if="seasonGirls.default.includes(item.name)"
                      >季节赛</span
                    >
                  </template>
                  <template
                    v-if="
                      !isOldVer &&
                      isNaChVer &&
                      seasonGirls &&
                      seasonGirls.nextCh.length > 0
                    "
                  >
                    <span
                      class="allcards__nextseason"
                      v-if="seasonGirls.nextCh.includes(item.name)"
                      >下次季节赛</span
                    >
                  </template>
                </div>
                <GirlRange :item="item" />
              </div>
            </div>
            <div
              class="allcards__content"
              :class="firstItem.showAllCards ? '' : 'hide'"
            >
              <i
                class="allcards__bg"
                :class="{ hide: imgKey !== firstItem.showAllCardsIndex }"
                v-for="(img, imgKey) in firstItem.list"
                v-bind:key="imgKey"
              >
                <img
                  v-lazy="`../img/furuyoni/mini/${firstItem.list[imgKey].picq}`"
                />
              </i>
              <!-- <pre class="allcards__spdesc allcards__spdesc--info" v-if="getCardKeyValInLang(firstItem, 'girlInfo')" v-html="getCardKeyValInLang(firstItem, 'girlInfo')"></pre> -->
              <div
                class="allcards__spdesc"
                v-if="getCardKeyValInLang(firstItem, 'desc')"
                v-html="getCardKeyValInLang(firstItem, 'desc')"
              ></div>
              <p class="allcards__type">NORMAL</p>
              <CardDetail
                v-for="(cardItem, cardIndex) in firstItem.list[
                  firstItem.showAllCardsIndex
                ].normal"
                :item="cardItem"
                v-bind:key="cardIndex"
              />
              <div class="allcards__special">
                <p class="allcards__type">SPECIAL</p>
                <CardDetail
                  v-for="(cardItem, cardIndex) in firstItem.list[
                    firstItem.showAllCardsIndex
                  ].special"
                  :item="cardItem"
                  v-bind:key="cardIndex"
                />
              </div>
              <!-- S 追加 -->
              <p
                class="allcards__type"
                v-if="
                  firstItem.list[firstItem.showAllCardsIndex].extra ||
                  firstItem.list[firstItem.showAllCardsIndex].poison ||
                  firstItem.list[firstItem.showAllCardsIndex].transform ||
                  firstItem.list[firstItem.showAllCardsIndex].changeExtra ||
                  firstItem.list[firstItem.showAllCardsIndex].girlBoard
                "
              >
                EXTRA
              </p>
              <CardDetail
                v-for="(cardItem, cardIndex) in firstItem.list[
                  firstItem.showAllCardsIndex
                ].extra"
                :item="cardItem"
                v-bind:key="cardIndex"
              />
              <CardDetail
                v-for="(cardItem, cardIndex) in firstItem.list[
                  firstItem.showAllCardsIndex
                ].poison"
                :item="cardItem"
                v-bind:key="cardIndex"
              />
              <CardDetail
                v-for="(cardItem, cardIndex) in firstItem.list[
                  firstItem.showAllCardsIndex
                ].transform"
                :item="cardItem"
                v-bind:key="cardIndex"
              />
              <CardDetail
                v-for="(cardItem, cardIndex) in firstItem.list[
                  firstItem.showAllCardsIndex
                ].changeExtra"
                :item="cardItem"
                v-bind:key="cardIndex"
              />
              <CardDetail
                v-for="(cardItem, cardIndex) in firstItem.list[
                  firstItem.showAllCardsIndex
                ].girlBoard"
                :item="cardItem"
                v-bind:key="cardIndex"
              />
              <!-- E 追加 -->
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="allcards-list msee">
      <div
        class="allcards-list__item"
        v-for="(firstItem, fristIndex) in showPanelGirls"
        v-bind:key="fristIndex"
      >
        <div class="allcards__name">
          <span v-if="getCardKeyValInLang(firstItem, 'name')"
            >{{ getCardKeyValInLang(firstItem, "name") }}
          </span>
          <span class="i-tag i-tag--season" v-if="firstItem.isClassicBattle">{{
            lang[curlang].id === "cn" ? toChzh("古典战") : "古典戦"
          }}</span>
        </div>
        <div class="allcards-tab">
          <div
            class="allcards-tab__item allcards-item"
            :class="
              firstItem.showAllCards && firstItem.showAllCardsIndex === index
                ? 'show'
                : ''
            "
            v-for="(item, index) in firstItem.list"
            v-bind:key="index"
            @click="
              () => {
                firstItem.showAllCards =
                  firstItem.showAllCardsIndex === index
                    ? !firstItem.showAllCards
                    : true;
                firstItem.showAllCardsIndex = index;
              }
            "
          >
            <div class="allcards__title">
              <span class="avatar">
                <img v-lazy="`../img/avatar/${item.pic}`" />
              </span>
              <span class="name" v-if="getCardKeyValInLang(item)">{{
                getCardKeyValInLang(item)
              }}</span>
              <template
                v-if="isNaChVer && qiyuanGirls && qiyuanGirls.ch.length > 0"
              >
                <span
                  class="i-tag i-tag--season"
                  v-if="qiyuanGirls.ch.includes(item.name)"
                  >{{
                    lang[curlang].id === "cn" ? toChzh("起源可用") : "起源戦OK"
                  }}</span
                >
              </template>
              <template
                v-else-if="
                  isReVer && qiyuanGirls && qiyuanGirls.default.length > 0
                "
              >
                <span
                  class="i-tag i-tag--season"
                  v-if="qiyuanGirls.default.includes(item.name)"
                  >{{
                    lang[curlang].id === "cn" ? toChzh("起源可用") : "起源戦OK"
                  }}</span
                >
              </template>
              <template
                v-if="isNaChVer && seasonGirls && seasonGirls.ch.length > 0"
              >
                <span
                  class="i-tag i-tag--season"
                  v-if="seasonGirls.ch.includes(item.name)"
                  >季节赛</span
                >
              </template>
              <template
                v-else-if="
                  !isNaChVer && seasonGirls && seasonGirls.default.length > 0
                "
              >
                <span
                  class="i-tag i-tag--season"
                  v-if="seasonGirls.default.includes(item.name)"
                  >季节赛</span
                >
              </template>
              <template
                v-if="isNaChVer && seasonGirls && seasonGirls.nextCh.length > 0"
              >
                <span
                  class="allcards__nextseason"
                  v-if="seasonGirls.nextCh.includes(item.name)"
                  >下次季节赛</span
                >
              </template>
            </div>
          </div>
        </div>
        <div
          class="allcards__content"
          :class="firstItem.showAllCards ? '' : 'hide'"
        >
          <i
            class="allcards__bg"
            :class="{ hide: imgKey !== firstItem.showAllCardsIndex }"
            v-for="(img, imgKey) in firstItem.list"
            v-bind:key="imgKey"
          >
            <img
              v-lazy="`../img/furuyoni/mini/${firstItem.list[imgKey].picq}`"
            />
          </i>
          <div style="padding-left: 0.5em">
            <GirlRange :item="firstItem.list[firstItem.showAllCardsIndex]" />
          </div>
          <!-- <pre class="allcards__spdesc allcards__spdesc--info" v-if="getCardKeyValInLang(firstItem, 'girlInfo')" v-html="getCardKeyValInLang(firstItem, 'girlInfo')"></pre> -->
          <div
            class="allcards__spdesc"
            v-if="getCardKeyValInLang(firstItem, 'desc')"
            v-html="getCardKeyValInLang(firstItem, 'desc')"
          ></div>
          <p class="allcards__type">NORMAL</p>
          <CardDetail
            v-for="(cardItem, cardIndex) in firstItem.list[
              firstItem.showAllCardsIndex
            ].normal"
            :item="cardItem"
            v-bind:key="cardIndex"
          />
          <div class="allcards__special">
            <p class="allcards__type">SPECIAL</p>
            <CardDetail
              v-for="(cardItem, cardIndex) in firstItem.list[
                firstItem.showAllCardsIndex
              ].special"
              :item="cardItem"
              v-bind:key="cardIndex"
            />
          </div>
          <!-- S 追加 -->
          <p
            class="allcards__type"
            v-if="
              firstItem.list[firstItem.showAllCardsIndex].extra ||
              firstItem.list[firstItem.showAllCardsIndex].poison ||
              firstItem.list[firstItem.showAllCardsIndex].transform ||
              firstItem.list[firstItem.showAllCardsIndex].changeExtra ||
              firstItem.list[firstItem.showAllCardsIndex].girlBoard
            "
          >
            EXTRA
          </p>
          <CardDetail
            v-for="(cardItem, cardIndex) in firstItem.list[
              firstItem.showAllCardsIndex
            ].extra"
            :item="cardItem"
            v-bind:key="cardIndex"
          />
          <CardDetail
            v-for="(cardItem, cardIndex) in firstItem.list[
              firstItem.showAllCardsIndex
            ].poison"
            :item="cardItem"
            v-bind:key="cardIndex"
          />
          <CardDetail
            v-for="(cardItem, cardIndex) in firstItem.list[
              firstItem.showAllCardsIndex
            ].transform"
            :item="cardItem"
            v-bind:key="cardIndex"
          />
          <CardDetail
            v-for="(cardItem, cardIndex) in firstItem.list[
              firstItem.showAllCardsIndex
            ].changeExtra"
            :item="cardItem"
            v-bind:key="cardIndex"
          />
          <CardDetail
            v-for="(cardItem, cardIndex) in firstItem.list[
              firstItem.showAllCardsIndex
            ].girlBoard"
            :item="cardItem"
            v-bind:key="cardIndex"
          />
          <!-- E 追加 -->
        </div>
      </div>
    </div>
  </div>
</template>