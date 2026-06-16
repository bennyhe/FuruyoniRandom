<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="card-detail" :class="getCardClass(item)">
    <div class="hd">
      <span class="name">
        <i class="i-end" v-if="isShowStopIcon(item)"></i>
        <template v-if="getCardKeyValInLang(item)">{{
          getCardKeyValInLang(item)
        }}</template>
      </span>
      <span class="type">
        <span
          v-for="(typeItem, typeIndex) in item.types"
          v-bind:key="typeIndex"
        >
          <span v-if="typeIndex > 0">/</span>
          <span :class="'cardtype--' + typeItem">{{
            getTypeName(typeItem, 1)
          }}</span>
        </span>
      </span>
      <span
        class="cardwho"
        v-if="getCardKeyValInLang(item, 'cardwho')"
        >{{ getCardKeyValInLang(item, "cardwho") }}</span
      >
    </div>
    <div class="i-circle cost" v-if="item.cost">
      <span
        ><em class="laceration" v-if="item.isLacerationCost">{</em>{{ item.cost
        }}<em class="laceration" v-if="item.isLacerationCost">}</em></span
      >
    </div>
    <template v-if="item.rangeOpened">
      <div class="ra">
        <p v-if="item.range">
          {{ lang[curlang].cardClose }}
          {{ lang[curlang].cardRange
          }}<span class="r">{{
            getCanBeStrong(item) && item.beStrong > 0
              ? getNewRange(item)
              : item.range
          }}</span
          >， {{ lang[curlang].typeAttack
          }}<span class="a">{{
            getCanBeStrong(item) && item.beStrong > 0
              ? getNewDamage(item)
              : item.damage
          }}</span>
          <span
            v-if="
              getCanBeStrong(item) &&
              item.beStrong === 3 &&
              lang[curlang].id === 'cn'
            "
            >，不可被打消</span
          >
          <span v-else-if="getCanBeStrong(item) && item.beStrong === 3"
            >，打ち消されない</span
          >
        </p>
        <p v-if="item.rangeOpened">
          {{ lang[curlang].cardOpen }}
          {{ lang[curlang].cardRange
          }}<span class="r">{{
            getCanBeStrong(item) && item.beStrong > 0
              ? getNewRange(item, item.rangeOpened)
              : item.rangeOpened
          }}</span
          >， {{ lang[curlang].typeAttack
          }}<span class="a">{{
            getCanBeStrong(item) && item.beStrong > 0
              ? getNewDamage(item, item.damageOpened)
              : item.damageOpened
          }}</span>
          <span
            v-if="
              getCanBeStrong(item) &&
              item.beStrong === 3 &&
              lang[curlang].id === 'cn'
            "
            >，不可被打消</span
          >
          <span v-else-if="getCanBeStrong(item) && item.beStrong === 3"
            >，打ち消されない</span
          >
        </p>
      </div>
    </template>
    <template v-else-if="item.range">
      <div class="ra">
        {{ lang[curlang].cardRange
        }}<span class="r">{{
          item.baseType === "normal" &&
          item.types.includes("attack") &&
          item.beStrong > 0
            ? getNewRange(item)
            : item.range
        }}</span
        >， {{ lang[curlang].typeAttack
        }}<span class="a"
          ><em class="laceration" v-if="item.isLacerationDamage">{</em
          >{{
            item.baseType === "normal" &&
            item.types.includes("attack") &&
            item.beStrong > 0
              ? getNewDamage(item)
              : item.damage
          }}<em class="laceration" v-if="item.isLacerationDamage">}</em></span
        >
        <span
          v-if="
            item.baseType === 'normal' &&
            item.types.includes('attack') &&
            item.beStrong === 3 &&
            lang[curlang].id === 'cn'
          "
          >，不可被打消</span
        >
        <span
          v-else-if="
            item.baseType === 'normal' &&
            item.types.includes('attack') &&
            item.beStrong === 3
          "
          >，打ち消されない</span
        >
      </div>
    </template>
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
    <span class="i-circle capacity" v-if="item.capacity"
      >{{
        isNaChVer && +curlang === 0
          ? "献"
          : lang[curlang].cardCapacity
      }}{{ item.capacity }}</span
    >
    <span class="i-circle capacity capacity--growup" v-if="item.capacityGrowup"
      >{{
        isNaChVer && +curlang === 0
          ? "育"
          : lang[curlang].cardCapacityGrowup
      }}{{ item.capacityGrowup }}</span
    >
    <template
      v-if="
        lang[curlang].id === 'cn' &&
        item.textkururu &&
        item.textkururu.length > 0
      "
    >
      <template v-for="(subItem, subKey) in item.textkururu">
        <div class="kururu" v-if="subItem.if" v-bind:key="subKey">
          <p class="kururu__if" v-html="subItem.if"></p>
          <pre v-if="subItem.ctn" v-html="toChzh(subItem.ctn)"></pre>
        </div>
        <pre
          v-else
          v-html="toChzh(subItem.ctn)"
          v-bind:key="`${subKey}else`"
        ></pre>
      </template>
    </template>
    <template v-else-if="item.textkururujp && item.textkururujp.length > 0">
      <template v-for="(subItem, subKey) in item.textkururujp">
        <div class="kururu" v-if="subItem.if" v-bind:key="subKey">
          <p class="kururu__if" v-html="subItem.if"></p>
          <pre v-if="subItem.ctn" v-html="subItem.ctn"></pre>
        </div>
        <pre v-else v-html="subItem.ctn" v-bind:key="`${subKey}else`"></pre>
      </template>
    </template>
    <div
      v-else-if="getCardKeyValInLang(item, 'name') === 'Story Board'"
      v-html="getCardKeyValInLang(item, 'text')"
    ></div>
    <pre
      v-else-if="getCardKeyValInLang(item, 'text')"
      v-html="getCardKeyValInLang(item, 'text')"
    ></pre>
    <slot></slot>
    <div class="card-detail-ft">
      <template v-if="item.cardchange && item.cardchange !== ''">
        <p
          v-if="lang[curlang].id === 'cn' && item.cardchange"
          class="cardchange"
        >
          FROM: {{ toChzh(item.cardchange) }}
        </p>
        <p
          v-else-if="lang[curlang].id === 'kr' && item.cardchangekr"
          class="cardchange"
        >
          FROM: {{ item.cardchangekr }}
        </p>
        <p
          v-else-if="lang[curlang].id === 'en' && item.cardchangeen"
          class="cardchange"
        >
          FROM: {{ item.cardchangeen }}
        </p>
        <p v-else class="cardchange">FROM: {{ item.cardchangejp }}</p>
      </template>

      <p class="id">
        {{ item.id }}
        <template v-if="item.changeCardCount">
          <span v-for="(a, akey) in item.changeCardCount" v-bind:key="akey"
            >|</span
          >
        </template>
      </p>
    </div>
    <span
      class="select card-detail__strong"
      v-if="getCanBeStrong(item)"
    >
      {{
        item.beStrong === 0 || item.beStrong === undefined
          ? "無錬成"
          : "錬" + item.beStrong
      }}
      <select v-model="item.beStrong">
        <option value="0">無錬成</option>
        <option
          :value="index2 + 1"
          v-for="(item2, index2) in 3"
          v-bind:key="index2"
        >
          錬{{ index2 + 1 }}
        </option>
      </select>
    </span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import lang from '../../config/lang.js'
import { isShowStopIcon, getCardClass } from '../../utils/cards.js'
import { toChzh } from '../../utils/lang.js'

const props = defineProps({
  item: Object,
  curlang: [Number, String],
  isNaChVer: Boolean,
  getTypeName: Function,
  getCardKeyValInLang: Function,
  getCanBeStrong: Function
})

const getNewRange = (cardItem, range) => {
  // console.log(cardItem.range);
  const _rangeDefault = range !== undefined ? range : cardItem.range
  //带-距离
  if (_rangeDefault.indexOf('-') > -1) {
    const _range = _rangeDefault.split('-')
    _range[1] = parseInt(_range[1]) + cardItem.beStrong

    // _range[1] = _range[1] > 10 ? 10 : _range[1];

    // console.log(_range.join('-'));
    return _range.join('-')
  }
  //带,距离
  else if (_rangeDefault.indexOf(',') > -1) {
    return _rangeDefault
  }
  //单数字距离
  else if (!isNaN(+_rangeDefault)) {
    const _range = [parseInt(_rangeDefault), parseInt(_rangeDefault)]
    _range[1] = parseInt(_range[1]) + cardItem.beStrong
    // _range[1] = _range[1] > 10 ? 10 : _range[1];
    return _range.join('-')
  }

  return _rangeDefault
}
const getNewDamage = (cardItem, damage) => {
  const _damageDefault = damage !== undefined ? damage : cardItem.damage
  // console.log(cardItem.damage);
  if (_damageDefault.indexOf('/') > -1) {
    const _damage = _damageDefault.split('/')
    // console.log(!isNaN(+ _damage[0]), !isNaN(+ _damage[0]), !isNaN(+ _damage[1]));
    if (!isNaN(+_damage[0])) {
      // 打盾
      let afterStrong = cardItem.beStrong
      if (cardItem.id.indexOf('re-') > -1 && cardItem.beStrong > 1) {
        // 再演
        // 0以上……+1/+0となり、距離拡大（遠1）を得る。
        // 1以上……+0/+1となり、距離拡大（遠1）を得る。
        // 2以上……+1/+1となり、距離拡大（遠1）を得る、打ち消されない。
        afterStrong--
      }
      // 新幕
      // 大於等於0……+1/+0和距離擴大（遠1）
      // 大於等於1……+1/+1和距離擴大（遠1）
      // 大於等於2……+1/+1、距離擴大（遠1）和不可被打消。
      _damage[0] = parseInt(_damage[0]) + afterStrong
    }

    if (!isNaN(+_damage[1])) {
      // 打命
      _damage[1] = parseInt(_damage[1]) + (cardItem.beStrong - 1)
    }
    return _damage.join('/')
  }

  return _damageDefault
}
</script>

