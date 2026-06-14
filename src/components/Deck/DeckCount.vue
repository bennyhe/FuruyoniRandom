<script setup>
import { defineProps } from 'vue'
import configLang from '../../config/lang.js'
import { toChzh } from '../../utils/lang.js'
const props = defineProps({
  curlang: String,
  deckSum: Number,
  deckcount: Number
})
const lang = configLang
</script>
<template>
  <div class="md faq-about" v-if="deckcount">
    <p>
      {{
        lang[curlang].id === "cn"
          ? toChzh(`共${deckcount}个卡组`)
          : `About
      ${deckcount} decks.`
      }}
      <span v-if="deckSum && deckcount !== deckSum"
        >({{
          parseFloat(parseFloat((deckcount / deckSum) * 100).toFixed(2))
        }}%)</span
      >
    </p>
  </div>
</template>
