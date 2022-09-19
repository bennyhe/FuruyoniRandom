<template>
  <div class="story">
    <div class="story__hd">
      <span class="select">
        <template v-if="getCardKeyValInLang(sakuraChangeCardsData[curSCCIndex])"
          >{{ getCardKeyValInLang(sakuraChangeCardsData[curSCCIndex]) }}({{
            sakuraChangeCardsData[curSCCIndex].list.filter(
              (sitem) => sitem.clist
            ).length
          }})</template
        >
        <select v-model="curSCCIndex">
          <option
            :value="storyIndex"
            v-for="(item, storyIndex) in sakuraChangeCardsData"
            v-bind:key="storyIndex"
          >
            {{ getCardKeyValInLang(item) }}({{
              item.list.filter((sitem) => sitem.clist).length
            }})
          </option>
        </select>
      </span>
    </div>
    <div class="story__item">
      <div class="card-list__name">
        <span>{{
          getCardKeyValInLang(sakuraChangeCardsData[curSCCIndex])
        }}</span>
        ({{
          sakuraChangeCardsData[curSCCIndex].list.filter((sitem) => sitem.clist)
            .length
        }})
        <a
          v-if="sakuraChangeCardsData[curSCCIndex].link"
          class="scc-linkmore"
          :href="sakuraChangeCardsData[curSCCIndex].link"
          target="_blank"
          >More>></a
        >
      </div>
      <div class="card-wrap">
        <div class="cgroup cgroup--old">
          <template
            v-for="(cardItem, cardIndex) in sakuraChangeCardsData[
              curSCCIndex
            ].list.filter((sitem) => sitem.clist)"
          >
            <div
              class="card-list scc-list__item"
              v-if="cardItem.clist && cardItem.clist.length > 0"
              v-bind:key="cardIndex"
            >
              <div
                v-for="(citem, ckey) in cardItem.clist"
                v-bind:key="ckey"
                style="display: inline-block; vertical-align: top"
              >
                <div
                  class="card-list__item"
                  :class="getCardClass(citem)"
                  @click="getCardDetail(citem)"
                >
                  <CardItem :item="citem"></CardItem>
                </div>
                <span
                  class="scc-arrow"
                  v-if="ckey !== cardItem.clist.length - 1"
                  >-></span
                >
              </div>
              <div class="scc-cardid">{{ cardItem.id }}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <!-- S 卡片详情 -->
    <CardDetail
      :item="cardDetail"
      v-if="cardDetail && (cardDetail.name || cardDetail.namejp)"
    />
    <div
      class="change-girl change-girl--scc"
      :class="{
        'change-girl--show': isShowChangeGirl,
        hide: !(cardDetail && (cardDetail.name || cardDetail.namejp)),
      }"
    >
      <div class="change-girl-ani">
        <div class="change-girl-ctn">
          <CardDetail
            :item="cardDetail"
            v-if="cardDetail && (cardDetail.name || cardDetail.namejp)"
          />
        </div>
        <div class="change-girl-btn" @click="handleClickChangeGirlBtn()">
          {{ lang[curlang].id === "cn" ? toChzh("卡牌详情") : "カード詳細" }}
          |
          {{ getCardKeyValInLang(cardDetail) }}
          <svg
            version="1.1"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M118.83 904.96a21.33 21.33 0 0 0 30.08 0l378.24-377.6a21.33 21.33 0 0 0 6.18-15.36 21.33 21.33 0 0 0-6.18-15.15l-377.82-377.81a21.33 21.33 0 0 0-30.08 0 21.33 21.33 0 0 0-0.42 30.29l362.66 362.67-362.66 362.67a21.33 21.33 0 0 0 0 30.29z m378.02-30.29a21.33 21.33 0 0 0 0 30.29 21.33 21.33 0 0 0 30.3 0l378.02-377.6a21.33 21.33 0 0 0 6.4-15.15 21.33 21.33 0 0 0-6.4-15.14l-378.02-378.03a21.33 21.33 0 0 0-30.3 30.29l362.67 362.67z"
              fill="#000"
              p-id="0"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <!-- E 卡片详情 -->
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import configLang from '../config/lang.js'
import CardItem from '../components/CardItem/index.vue'
import CardDetail from '../components/CardDetail/index.vue'

export default defineComponent({
  name: 'PageScc',
  components: {
    CardItem,
    CardDetail
  },
  props: ['curlang', 'sakuraChangeCardsData'],
  data() {
    return {
      isShowChangeGirl: 0,
      curSCCIndex: 0, // 当前赛季
      cardDetail: {}
    }
  },
  setup(props, context) {
    function toChzh(cc) {
      return this.$parent.toChzh(cc)
    }
    function getCardKeyValInLang(item, val) {
      return this.$parent.getCardKeyValInLang(item, val)
    }
    function getCardClass(item, isCheckExtra) {
      return this.$parent.getCardClass(item, isCheckExtra)
    }
    function getTypeName(typeItem, isAll) {
      return this.$parent.getTypeName(typeItem, isAll)
    }
    function getCanBeStrong(item) {
      return this.$parent.getCanBeStrong(item)
    }
    function getNewRange(cardItem, range) {
      return this.$parent.getNewRange(cardItem, range)
    }
    function getCardDetail(item) {
      this.cardDetail = item
    }
    function handleClickChangeGirlBtn() {
      this.isShowChangeGirl = !this.isShowChangeGirl
    }

    return {
      lang: configLang,
      toChzh,
      getCardKeyValInLang,
      getCardClass,
      getTypeName,
      getCardDetail,
      getCanBeStrong,
      getNewRange,
      handleClickChangeGirlBtn
    }
  }
})
</script>
<style scoped lang="scss">
.change-girl--scc {
  z-index: 100;
  .change-girl-ctn {
    padding: 5px;
  }
  .card-detail {
    width: auto;
  }
  .change-girl-ctn {
    width: 310px;
    height: auto;
    overflow-y: auto;
    max-height: 330px;
    min-height: 100px;
  }
  .change-girl-btn {
    word-break: break-all;
  }
}
</style>