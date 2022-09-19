<template>
  <div>
    <!-- S 页面tab -->
    <div class="panel-tab panel-tab--sub">
      <template v-for="(item, index) in panelTab[3].child">
        <span
          @click="tabChangedInChild(3, index)"
          :class="{ cur: panelTab[3].childTabIndex === index }"
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
    <!-- S 连携 -->
    <div
      class="panel-item__child"
      v-if="sakuraWithData && sakuraWithData.length > 0"
      :class="{ cur: panelTab[3].childTabIndex === 3 }"
    >
      <div class="story">
        <div class="story__item">
          <div class="card-wrap card-wrap--noscrollinm">
            <div class="cgroup cgroup--old">
              <div class="card-list">
                <div
                  class="card-list__item normal"
                  :class="getCardClass(cardItem)"
                  v-for="(cardItem, cardIndex) in sakuraWithData[0].list"
                  @click="getCardDetail(cardItem)"
                  v-bind:key="cardIndex"
                >
                  <CardItem :item="cardItem"></CardItem>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- S 选项 -->
      <div class="checkbox-wrap">
        <label class="checkbox" :class="{ cur: isLXVs }">
          <input type="checkbox" v-model="isLXVs" />
          <template v-if="lang[curlang].id === 'cn'">{{
            toChzh("重复")
          }}</template>
          <template v-else>Repeat</template>
        </label>
      </div>
      <!-- E 选项 -->
      <!-- S 按钮 -->
      <div class="random-btn-wrap">
        <button class="btn btn-small" @click="randomGetLx(1)">
          {{ lang[curlang].btnRandomItem }}1
        </button>
        <button class="btn btn-small" @click="randomGetLx(2)">
          {{ lang[curlang].btnRandomItem }}2
        </button>
        <button class="btn btn-small" @click="randomGetLx(6)">
          {{ lang[curlang].btnRandomItem }}6
        </button>
      </div>
      <!-- E 按钮 -->
      <div v-if="lxVsResultList.length > 0">
        <div>--Result--</div>
        <div class="card-wrap">
          <div class="cgroup cgroup--old">
            <div class="card-list">
              <div
                class="card-list__item normal"
                :class="getCardClass(cardItem)"
                v-for="(cardItem, cardIndex) in lxVsResultList"
                @click="getCardDetail(cardItem)"
                v-bind:key="cardIndex"
              >
                <CardItem :item="cardItem"></CardItem>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- S 卡片详情 -->
      <CardDetail
        :item="cardDetail"
        v-if="cardDetail && (cardDetail.name || cardDetail.namejp)"
      />
      <!-- E 卡片详情 -->
    </div>
    <!-- E 连携 -->
    <!-- S 故事模式 -->
    <div
      class="panel-item__child"
      v-if="storyCardData && storyCardData.length > 0"
      :class="{ cur: panelTab[3].childTabIndex === 1 }"
    >
      <div class="story">
        <div class="story__hd">
          <span class="select">
            <template
              v-if="getCardKeyValInLang(storyCardData[curStoryIndex])"
              >{{ getCardKeyValInLang(storyCardData[curStoryIndex]) }}</template
            >
            <select v-model="curStoryIndex">
              <option
                :value="storyIndex"
                v-for="(storyItem, storyIndex) in storyCardData"
                v-bind:key="storyIndex"
              >
                {{ getCardKeyValInLang(storyItem) }}
              </option>
            </select>
          </span>
        </div>
        <div class="story__item">
          <div class="card-wrap card-wrap--noscrollinm">
            <!-- <p>{{getCardKeyValInLang(storyCardData[curStoryIndex])}}</p> -->
            <div
              v-for="(item, index) in storyCardData[curStoryIndex].list"
              v-bind:key="index"
            >
              <div class="card-list__name">
                <span>{{ getCardKeyValInLang(item) }}</span>
              </div>
              <div class="cgroup cgroup--old">
                <div class="card-list">
                  <template v-for="(cardItem, cardIndex) in item.normal">
                    <div
                      class="card-list__item normal"
                      :class="getCardClass(cardItem)"
                      v-if="item.normal && item.normal.length > 0"
                      @click="getCardDetail(cardItem)"
                      v-bind:key="cardIndex"
                    >
                      <CardItem :item="cardItem"></CardItem>
                    </div>
                  </template>
                </div>
                <div class="card-list">
                  <template v-for="(cardItem, cardIndex) in item.special">
                    <div
                      class="card-list__item special"
                      :class="getCardClass(cardItem)"
                      v-if="item.special && item.special.length > 0"
                      @click="getCardDetail(cardItem)"
                      v-bind:key="cardIndex"
                    >
                      <CardItem :item="cardItem"></CardItem>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- S 卡片详情 -->
        <CardDetail
          :item="cardDetail"
          v-if="cardDetail && (cardDetail.name || cardDetail.namejp)"
        />
        <!-- E 卡片详情 -->
      </div>
    </div>
    <!-- E 故事模式 -->
    <!-- S 祭札2019 -->
    <div
      class="panel-item__child"
      v-if="sakuraOtherData && sakuraOtherData.length > 0"
      :class="{ cur: panelTab[3].childTabIndex === 2 }"
    >
      <div class="story">
        <div class="story__item">
          <div class="card-wrap card-wrap--noscrollinm">
            <div class="cgroup cgroup--old">
              <div class="card-list">
                <div
                  class="card-list__item normal"
                  :class="getCardClass(cardItem)"
                  v-for="(cardItem, cardIndex) in sakuraOtherData[0].list"
                  @click="getCardDetail(cardItem)"
                  v-bind:key="cardIndex"
                >
                  <CardItem :item="cardItem"></CardItem>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="random-btn-wrap" style="text-align: center">
        <a href="//sdrice.name/random-card.html" target="_blank">
          <button class="btn btn-small">Random Decks</button>
        </a>
      </div>
      <!-- S 卡片详情 -->
      <CardDetail
        :item="cardDetail"
        v-if="cardDetail && (cardDetail.name || cardDetail.namejp)"
      />
      <!-- E 卡片详情 -->
    </div>
    <!-- E 祭札2019 -->
    <!-- S 原初挑战 -->
    <div
      class="panel-item__child"
      v-if="sakuraCMData && sakuraCMData.length > 0"
      :class="{ cur: panelTab[3].childTabIndex === 0 }"
    >
      <div class="story">
        <div class="story__hd">
          <div class="samod-tab">
            <div
              class="samod-tab__item"
              v-for="(storyItem, storyIndex) in sakuraCMData"
              :class="{ cur: storyIndex === curCMIndex }"
              @click="handleClickSA(storyIndex)"
              v-bind:key="storyIndex"
            >
              <span class="avatar">
                <img v-lazy="`../img/avatar/${storyItem.pic}`" />
              </span>
              <span class="name">{{ getCardKeyValInLang(storyItem) }}</span>
            </div>
          </div>
        </div>
        <div class="story__item">
          <div class="card-wrap card-wrap--noscrollinm">
            <!-- <p>{{getCardKeyValInLang(sakuraCMData[curCMIndex])}}</p> -->
            <div
              v-for="(item, index) in sakuraCMData[curCMIndex].list"
              v-bind:key="index"
            >
              <div class="card-list__name">
                <span>{{ getCardKeyValInLang(item) }}</span>
              </div>
              <!-- <GirlRange :item="item"/> -->
              <div class="cgroup cgroup--old">
                <div class="card-list">
                  <template v-for="(cardItem, cardIndex) in item.normal">
                    <div
                      class="card-list__item normal"
                      :class="getCardClass(cardItem)"
                      v-bind:key="cardIndex"
                      v-if="item.normal && item.normal.length > 0"
                      @click="getCardDetail(cardItem)"
                    >
                      <CardItem :item="cardItem"></CardItem>
                    </div>
                  </template>
                </div>
                <div class="card-list">
                  <template v-for="(cardItem, cardIndex) in item.special">
                    <div
                      class="card-list__item special"
                      :class="getCardClass(cardItem)"
                      v-bind:key="cardIndex"
                      v-if="item.special && item.special.length > 0"
                      @click="getCardDetail(cardItem)"
                    >
                      <CardItem :item="cardItem"></CardItem>
                    </div>
                  </template>
                </div>
                <div class="card-list">
                  <template v-for="(cardItem, cardIndex) in item.extra">
                    <div
                      class="card-list__item"
                      :class="getCardClass(cardItem)"
                      v-bind:key="cardIndex"
                      v-if="item.extra && item.extra.length > 0"
                      @click="getCardDetail(cardItem)"
                    >
                      <CardItem :item="cardItem"></CardItem>
                    </div>
                  </template>
                  <template v-for="(cardItem, cardIndex) in item.poison">
                    <div
                      class="card-list__item"
                      :class="getCardClass(cardItem)"
                      v-bind:key="cardIndex"
                      v-if="item.poison && item.poison.length > 0"
                      @click="getCardDetail(cardItem)"
                    >
                      <CardItem :item="cardItem"></CardItem>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- S 卡片详情 -->
        <CardDetail
          :item="cardDetail"
          v-if="cardDetail && (cardDetail.name || cardDetail.namejp)"
        />
        <!-- E 卡片详情 -->
      </div>
    </div>
    <!-- E 原初挑战 -->
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import configLang from '../config/lang.js'
import CardItem from '../components/CardItem/index.vue'
import CardDetail from '../components/CardDetail/index.vue'
// import GirlRange from '../components/GirlRange/index.vue';

export default defineComponent({
  name: 'PageOtherPlay',
  components: {
    CardItem,
    CardDetail
    // GirlRange
  },
  props: [
    'curlang',
    'panelTab',
    'sakuraWithData',
    'defaultData',
    'storyCardData',
    'sakuraOtherData',
    'sakuraCMData',
    'cardDetail'
  ],
  data() {
    return {
      isLXVs: 0,
      lxVsResultList: [],
      curStoryIndex: 0, //故事模式
      curCMIndex: 0 //原初模式
    }
  },
  setup(props, context) {
    function toChzh(cc) {
      return this.$parent.toChzh(cc)
    }
    function getCardKeyValInLang(item, val) {
      return this.$parent.getCardKeyValInLang(item, val)
    }
    function tabChangedInChild(fatherIndex, index) {
      return this.$parent.tabChangedInChild(fatherIndex, index)
    }
    function getCardClass(item, isCheckExtra) {
      return this.$parent.getCardClass(item, isCheckExtra)
    }
    function getTypeName(typeItem, isAll) {
      return this.$parent.getTypeName(typeItem, isAll)
    }
    function getCardDetail(item, girlItem, cardIndex) {
      return this.$parent.getCardDetail(item, girlItem, cardIndex)
    }
    function getCanBeStrong(item) {
      return this.$parent.getCanBeStrong(item)
    }
    function randomGetLx(count) {
      const dataCopy = JSON.parse(JSON.stringify(this.sakuraWithData[0].list))
      this.lxVsResultList = []
      const randomList = []
      for (let i = 0; i < count; i++) {
        const _random = parseInt(Math.random() * dataCopy.length, 10)
        // console.log(_random, dataCopy.length)
        randomList.push(dataCopy[_random])

        if (!this.isLXVs) {
          dataCopy.splice(_random, 1)
        }
      }
      this.lxVsResultList = randomList
    }
    function handleClickSA(index) {
      this.curCMIndex = index
    }

    return {
      lang: configLang,
      toChzh,
      getCardKeyValInLang,
      tabChangedInChild,
      getCardClass,
      getTypeName,
      getCardDetail,
      getCanBeStrong,
      randomGetLx,
      handleClickSA
    }
  }
})
</script>