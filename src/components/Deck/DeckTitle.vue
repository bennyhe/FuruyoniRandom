<script setup>
import { defineProps } from 'vue'
import lang from '../../config/lang.js'
import { toChzh } from '../../utils/lang.js'
import { formatTime } from '../../utils/export.js'

const props = defineProps({
  item: Object,
  curlang: [String, Number]
})
</script>
<template>
  <div class="allcards__title">
    <span class="deck-date">{{
      formatTime(item.date, "YY-MM-DD")
    }}</span>
    <span
      class="avatar"
      v-for="(item2, index2) in item.groupCardData"
      v-bind:key="index2"
    >
      <img v-lazy="`../img/avatar/${item2.pic}`" />
    </span>
    <span class="i-tag i-tag--verson" v-if="item.ver">{{ item.ver }}</span>
    <span class="i-tag i-tag--top1" v-if="item.isTop1">優勝</span>
    <span class="name">{{ item.name }}</span>
    <span class="i-tag i-tag--season" v-if="item.isSeason">{{
      lang[curlang].id === "cn" ? toChzh("起源可用") : "起源戦OK"
    }}</span>
    <span class="deck-author">@{{ item.author }}</span>
  </div>
</template>