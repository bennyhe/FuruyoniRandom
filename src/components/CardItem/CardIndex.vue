<template>
  <div class="card-item">
    <div
      class="item-pic"
      v-if="
        !isOldVer && getIsShowCardPicIn(item, lang, curlang) && isShowCardPic
      "
    >
      <img class="item-pic" v-lazy="getImgUrl(item)" />
    </div>
    <p class="name">
      <i class="i-end" v-if="isShowStopIcon(item)"></i>
      <template v-if="getCardKeyValInLang(item)">{{
        getCardKeyValInLang(item)
      }}</template>
    </p>
    <div class="i-circle cost" v-if="item.cost">
      <em class="laceration" v-if="item.isLacerationCost">{</em>{{ item.cost
      }}<em class="laceration" v-if="item.isLacerationCost">}</em>
    </div>
    <div class="type">
      <span v-for="(typeItem, typeIndex) in item.types" v-bind:key="typeIndex">
        <template v-if="typeIndex > 0">/</template>
        <span :class="'cardtype--' + typeItem">{{
          getTypeName(typeItem)
        }}</span>
      </span>
    </div>
    <div
      class="color"
      v-if="
        item.cardchange || getCardKeyValInLang(item, 'cardwho') || item.colors
      "
    >
      <p class="cardwho" v-if="getCardKeyValInLang(item, 'cardwho')">
        {{ getCardKeyValInLang(item, "cardwho") }}
      </p>

      <p class="cardchange" v-if="getCardKeyValInLang(item, 'cardchange')">
        {{ getCardKeyValInLang(item, "cardchange") }}
      </p>

      <p v-if="item.colors">
        <template v-for="(ColorMainItem, ColorMainIndex) in item.colors">
          <i
            class="i-bean"
            v-if="ColorMainIndex > 0"
            v-bind:key="ColorMainIndex"
            >/</i
          ><i
            :class="'i-bean i-bean--' + getColorClass(ColorItem)"
            v-for="(ColorItem, ColorIndex) in ColorMainItem"
            v-bind:key="ColorIndex"
          ></i>
        </template>
      </p>
    </div>
    <span class="i-circle capacity" v-if="item.capacity"
      >{{ isNaChVer && +curlang === 0 ? "献" : lang[curlang].cardCapacity
      }}{{ item.capacity }}</span
    >
    <span class="i-circle capacity capacity--growup" v-if="item.capacityGrowup"
      >{{ isNaChVer && +curlang === 0 ? "育" : lang[curlang].cardCapacityGrowup
      }}{{ item.capacityGrowup }}</span
    >
    <span class="i-circle range" v-if="item.range">{{ item.range }}</span>
    <span class="i-circle range range--open" v-if="item.rangeOpened">{{
      item.rangeOpened
    }}</span>
    <span class="i-circle cardattack" v-if="item.damage">
      <i>
        <span
          ><em class="laceration" v-if="item.isLacerationDamage">{</em
          >{{ item.damage.split("/")[0] }}</span
        >
        <span>/</span>
        <span
          >{{ item.damage.split("/")[1]
          }}<em class="laceration" v-if="item.isLacerationDamage">}</em></span
        >
      </i>
    </span>
    <span class="i-circle cardattack cardattack--open" v-if="item.damageOpened">
      <i>
        <span>{{ item.damageOpened.split("/")[0] }}</span>
        <span>/</span>
        <span>{{ item.damageOpened.split("/")[1] }}</span>
      </i>
    </span>
    <slot />
    <div
      v-if="item.id === 'Story Board'"
      v-html="getCardKeyValInLang(item, 'text')"
    ></div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import lang from '../../config/lang.js'
import { isShowStopIcon, getIsShowCardPicIn } from '../../utils/cards.js'

const props = defineProps({
  item: Object,
  curlang: [String, Number],
  isOldVer: Boolean,
  isNaChVer: Boolean,
  isShowCardPic: Boolean,
  getCardKeyValInLang: Function,
  getImgUrl: Function,
  getTypeName: Function
})

/**
 * 豆子颜色
 * @param  {[type]} colorItem [description]
 * @return {[type]}           [description]
 */
const getColorClass = colorItem => {
  const colorClass = {
    绿: 'green',
    红: 'red',
    紫: 'purple',
    蓝: 'blue',
    黄: 'yellow',
    X: 'x',
    Y: 'y'
  }
  return colorClass[colorItem]
}
</script>
