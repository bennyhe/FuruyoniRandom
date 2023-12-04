<template>
  <div class="girls-range-wrap" v-if="item.girlExtra">
    <div
      class="girls-range"
      v-if="item.girlExtra.ranges && item.girlExtra.ranges.length > 0"
    >
      <span
        v-if="
          item.girlExtra.name.indexOf('伞') > -1 ||
          item.girlExtra.name.indexOf('社交') > -1
        "
        >閉</span
      >
      <i
        v-for="keys in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
        v-bind:key="keys"
        :class="`girls-range-item girls-range-item--${
          item.girlExtra.ranges.find((item) => item.name === keys)
            ? item.girlExtra.ranges.find((item) => item.name === keys).count
            : 'none'
        }`"
        >{{ keys
        }}{{
          keys === 10 && item.girlExtra.ranges.find((item) => item.name === 11)
            ? "+"
            : ""
        }}</i
      >
    </div>
    <div
      class="girls-range"
      v-if="item.girlExtra.rangeOpened && item.girlExtra.rangeOpened.length > 0"
    >
      <span
        v-if="
          item.girlExtra.name.indexOf('伞') > -1 ||
          item.girlExtra.name.indexOf('社交') > -1
        "
        >開</span
      >
      <i
        v-for="keys in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
        v-bind:key="keys"
        :class="`girls-range-item girls-range-item--${
          item.girlExtra.rangeOpened.find((item) => item.name === keys)
            ? item.girlExtra.rangeOpened.find((item) => item.name === keys)
                .count
            : 'none'
        }`"
        >{{ keys }}</i
      >
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'girlRange',
  props: ['item'],
  setup(props, context) {}
})
</script>
