<template>
  <div class="md faq-about" v-if="deckcount">
    <p>
      {{
        lang[$parent.curlang].id === "cn"
          ? $parent.toChzh(`共${deckcount}个卡组`)
          : `About
      ${deckcount} decks.`
      }}
      <span v-if="$parent.deckSum && deckcount !== $parent.deckSum"
        >({{
          parseFloat(
            parseFloat((deckcount / $parent.deckSum) * 100).toFixed(2)
          )
        }}%)</span
      >
    </p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import configLang from '../../config/lang.js'

export default defineComponent({
  name: 'deckCount',
  props: ['deckcount'],
  setup(props, context) {
    return {
      lang: configLang
    }
  }
})
</script>
