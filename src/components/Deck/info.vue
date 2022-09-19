<template>
  <div class="md faq-about deck-info">
    <blockquote>
      <p>
        <span class="deck-info__title"
          >{{ $parent.toChzh("提交时间：")
          }}{{ $parent.formatTime(item.date, "YYYY-MM-DD") }}</span
        >
      </p>
      <p>
        <span class="deck-info__title">{{ $parent.toChzh("卡组贡献：") }}</span
        >@{{ item.author }}
      </p>
      <p v-if="item.desc">
        <span class="deck-info__title">{{ $parent.toChzh("卡组说明：") }}</span
        >{{ item.desc }}
      </p>
      <p>
        <span class="deck-info__title">{{ $parent.toChzh("卡组距离：") }}</span>
        <GirlRange :item="item.deckrange"></GirlRange>
      </p>
      <p>
        <span class="deck-info__title">{{ $parent.toChzh("赛季版本：") }}</span
        ><span class="i-tag i-tag--verson">{{ item.ver }}</span>
      </p>
      <p style="color: #bb0000; font-weight: 700" v-if="item.isSOldVer">
        {{
          lang[$parent.curlang].id === "cn"
            ? $parent.toChzh("请注意该卡组可能因为赛季变更导致卡牌效果不符。")
            : "注意：このデッキは、シーズン変更によるカード効果の改変の可能性があります。"
        }}
      </p>
    </blockquote>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import configLang from '../../config/lang.js'
import GirlRange from '../GirlRange/index.vue'

export default defineComponent({
  name: 'deckInfo',
  props: ['item'],
  components: {
    GirlRange
  },
  setup(props, context) {
    return {
      lang: configLang
    }
  }
})
</script>
