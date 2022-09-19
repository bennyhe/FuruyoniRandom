<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="card-detail" :class="$parent.getCardClass(item)">
    <div class="hd">
      <span class="name">
        <i
          class="i-end"
          v-if="item.textjp && item.textjp.substr(0, 2) === '終端'"
        ></i>
        <template v-if="$parent.getCardKeyValInLang(item)">{{
          $parent.getCardKeyValInLang(item)
        }}</template>
      </span>
      <span class="type">
        <span
          v-for="(typeItem, typeIndex) in item.types"
          v-bind:key="typeIndex"
        >
          <span v-if="typeIndex > 0">/</span>
          <span :class="'cardtype--' + typeItem">{{
            $parent.getTypeName(typeItem, 1)
          }}</span>
        </span>
      </span>
      <span
        class="cardwho"
        v-if="$parent.getCardKeyValInLang(item, 'cardwho')"
        >{{ $parent.getCardKeyValInLang(item, "cardwho") }}</span
      >
    </div>
    <div class="i-circle cost" v-if="item.cost">
      <span>{{ item.cost }}</span>
    </div>
    <template v-if="item.rangeOpened">
      <div class="ra">
        <p v-if="item.range">
          {{ lang[$parent.curlang].cardClose }}
          {{ lang[$parent.curlang].cardRange
          }}<span class="r">{{
            $parent.getCanBeStrong(item) && item.beStrong > 0
              ? $parent.getNewRange(item)
              : item.range
          }}</span
          >， {{ lang[$parent.curlang].typeAttack
          }}<span class="a">{{
            $parent.getCanBeStrong(item) && item.beStrong > 0
              ? $parent.getNewDamage(item)
              : item.damage
          }}</span>
          <span
            v-if="
              $parent.getCanBeStrong(item) &&
              item.beStrong === 3 &&
              lang[$parent.curlang].id === 'cn'
            "
            >，不可被打消</span
          >
          <span v-else-if="$parent.getCanBeStrong(item) && item.beStrong === 3"
            >，打ち消されない</span
          >
        </p>
        <p v-if="item.rangeOpened">
          {{ lang[$parent.curlang].cardOpen }}
          {{ lang[$parent.curlang].cardRange
          }}<span class="r">{{
            $parent.getCanBeStrong(item) && item.beStrong > 0
              ? $parent.getNewRange(item, item.rangeOpened)
              : item.rangeOpened
          }}</span
          >， {{ lang[$parent.curlang].typeAttack
          }}<span class="a">{{
            $parent.getCanBeStrong(item) && item.beStrong > 0
              ? $parent.getNewDamage(item, item.damageOpened)
              : item.damageOpened
          }}</span>
          <span
            v-if="
              $parent.getCanBeStrong(item) &&
              item.beStrong === 3 &&
              lang[$parent.curlang].id === 'cn'
            "
            >，不可被打消</span
          >
          <span v-else-if="$parent.getCanBeStrong(item) && item.beStrong === 3"
            >，打ち消されない</span
          >
        </p>
      </div>
    </template>
    <template v-else-if="item.range">
      <div class="ra">
        {{ lang[$parent.curlang].cardRange
        }}<span class="r">{{
          item.baseType === "normal" &&
          item.types.includes("attack") &&
          item.beStrong > 0
            ? $parent.getNewRange(item)
            : item.range
        }}</span
        >， {{ lang[$parent.curlang].typeAttack
        }}<span class="a">{{
          item.baseType === "normal" &&
          item.types.includes("attack") &&
          item.beStrong > 0
            ? $parent.getNewDamage(item)
            : item.damage
        }}</span>
        <span
          v-if="
            item.baseType === 'normal' &&
            item.types.includes('attack') &&
            item.beStrong === 3 &&
            lang[$parent.curlang].id === 'cn'
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
        <span>{{ item.damage.split("/")[0] }}</span>
        <span>/</span>
        <span>{{ item.damage.split("/")[1] }}</span>
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
    <template
      v-if="
        lang[$parent.curlang].id === 'cn' &&
        item.textkururu &&
        item.textkururu.length > 0
      "
    >
      <template v-for="(subItem, subKey) in item.textkururu">
        <div class="kururu" v-if="subItem.if" v-bind:key="subKey">
          <p class="kururu__if" v-html="subItem.if"></p>
          <pre v-if="subItem.ctn" v-html="$parent.toChzh(subItem.ctn)"></pre>
        </div>
        <pre
          v-else
          v-html="$parent.toChzh(subItem.ctn)"
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
      v-else-if="$parent.getCardKeyValInLang(item, 'name') === 'Story Board'"
      v-html="$parent.getCardKeyValInLang(item, 'text')"
    ></div>
    <pre
      v-else-if="$parent.getCardKeyValInLang(item, 'text')"
      v-html="$parent.getCardKeyValInLang(item, 'text')"
    ></pre>
    <div
      class="returngroup"
      v-if="item.returnloopGirls && item.returnloopGirls.length > 0"
    >
      <div
        class="avatar"
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
    <pre
      v-if="$parent.getCardKeyValInLang(item, 'returnloop')"
      v-html="$parent.getCardKeyValInLang(item, 'returnloop')"
    ></pre>
    <slot></slot>
    <div class="card-detail-ft">
      <template v-if="item.cardchange && item.cardchange !== ''">
        <p
          v-if="lang[$parent.curlang].id === 'cn' && item.cardchange"
          class="cardchange"
        >
          FROM: {{ $parent.toChzh(item.cardchange) }}
        </p>
        <p
          v-else-if="lang[$parent.curlang].id === 'kr' && item.cardchangekr"
          class="cardchange"
        >
          FROM: {{ item.cardchangekr }}
        </p>
        <p
          v-else-if="lang[$parent.curlang].id === 'en' && item.cardchangeen"
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
      v-if="$parent.getCanBeStrong(item)"
    >
      {{ item.beStrong === 0 ? "無錬成" : "錬" + item.beStrong }}
      <select v-model="item.beStrong" @change="$parent.onChangeBeStrong">
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

<script>
import { defineComponent } from 'vue'
import configLang from '../../config/lang.js'

export default defineComponent({
  name: 'cardDetail',
  props: ['item'],
  setup(props, context) {
    return {
      lang: configLang
    }
  }
})
</script>
