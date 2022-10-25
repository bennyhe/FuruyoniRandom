<template>
  <div class="card-item">
    <div
      class="item-pic"
      v-if="
        !$parent.isOldVer && getIsShowCardPic(item) && $parent.isShowCardPic
      "
    >
      <img class="item-pic" v-lazy="$parent.getImgUrl(item)" />
    </div>
    <p class="name">
      <i
        class="i-end"
        v-if="item.textjp && item.textjp.substr(0, 2) === '終端'"
      ></i>
      <template v-if="$parent.getCardKeyValInLang(item)">{{
        $parent.getCardKeyValInLang(item)
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
          $parent.getTypeName(typeItem)
        }}</span>
      </span>
    </div>
    <div
      class="color"
      v-if="
        item.cardchange ||
        $parent.getCardKeyValInLang(item, 'cardwho') ||
        item.colors
      "
    >
      <p class="cardwho" v-if="$parent.getCardKeyValInLang(item, 'cardwho')">
        {{ $parent.getCardKeyValInLang(item, "cardwho") }}
      </p>

      <p
        class="cardchange"
        v-if="$parent.getCardKeyValInLang(item, 'cardchange')"
      >
        {{ $parent.getCardKeyValInLang(item, "cardchange") }}
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
      >{{
        $parent.isChVer && +$parent.curlang === 0
          ? "献"
          : lang[$parent.curlang].cardCapacity
      }}{{ item.capacity }}</span
    >
    <span class="i-circle capacity capacity--growup" v-if="item.capacityGrowup"
      >{{
        $parent.isChVer && +$parent.curlang === 0
          ? "育"
          : lang[$parent.curlang].cardCapacityGrowup
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
    <div
      class="returngroup"
      v-if="item.returnloopGirls && item.returnloopGirls.length > 0"
    >
      <div
        class="avatar avatar--small"
        v-for="(gitem, gkey) in item.returnloopGirls"
        v-bind:key="gkey"
      >
        <img
          v-lazy="
            `../img/avatar/${$parent.defaultData[gitem[0]].list[gitem[1]].pic}`
          "
        />
      </div>
    </div>
    <div
      v-if="item.id === 'Story Board'"
      v-html="$parent.getCardKeyValInLang(item, 'text')"
    ></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import configLang from '../../config/lang.js'
import { getIsShowCardPicIn } from '../../utils/index.js'

export default defineComponent({
  name: 'cardItem',
  props: ['item'],
  setup(props, context) {
    function getIsShowCardPic(cardData) {
      return getIsShowCardPicIn(cardData, configLang, this.$parent.curlang)
    }
    /**
     * 豆子颜色
     * @param  {[type]} colorItem [description]
     * @return {[type]}           [description]
     */
    function getColorClass(colorItem) {
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
    return {
      lang: configLang,
      getIsShowCardPic,
      getColorClass
    }
  }
})
</script>
