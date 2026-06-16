<template>
  <div>
    <ul
      v-if="item.type === 'subdesc' && item.sublist && item.sublist.length > 0"
    >
      <li v-for="(listitem, listkey) in item.sublist" v-bind:key="listkey">
        <p
          v-if="
            listitem.ajp &&
            ((lang[curlang].id === 'cn' && !listitem.a) ||
              lang[curlang].id !== 'cn')
          "
        >
          {{ listitem.ajp }}
        </p>
        <p
          v-if="
            (listitem.a && lang[curlang].id === 'cn') ||
            (lang[curlang].id !== 'cn' && !listitem.ajp)
          "
        >
          {{ toChzh(listitem.a) }}
        </p>
      </li>
    </ul>
    <blockquote v-if="item.a || item.ajp">
      <p
        v-if="
          item.qjp &&
          ((lang[curlang].id === 'cn' && !item.q) ||
            lang[curlang].id !== 'cn')
        "
      >
        <strong>Q：{{ item.qjp }}</strong
        ><span v-if="item.author">@{{ toChzh(item.author) }}</span>
      </p>
      <p
        v-if="
          (item.q && lang[curlang].id === 'cn') ||
          (lang[curlang].id !== 'cn' && !item.qjp)
        "
      >
        <template v-if="item.q || item.qjp">
          <strong>Q：{{ toChzh(item.q) }}</strong>
          <span v-if="item.author">@{{ toChzh(item.author) }}</span>
        </template>
      </p>
      <blockquote>
        <p
          v-if="
            item.ajp &&
            ((lang[curlang].id === 'cn' && !item.a) ||
              lang[curlang].id !== 'cn')
          "
        >
          <template v-if="item.q || item.qjp">A：</template>{{ item.ajp }}
        </p>
        <p
          v-if="
            (item.a && lang[curlang].id === 'cn') ||
            (lang[curlang].id !== 'cn' && !item.ajp)
          "
        >
          <template v-if="item.q || item.qjp">A：</template>{{ toChzh(item.a) }}
        </p>
      </blockquote>
    </blockquote>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import configLang from '../../config/lang.js'
import { toChzh } from '../../utils/lang.js'

export default defineComponent({
  name: 'faqItem',
  props: ['item', 'curlang'],
  setup(props, context) {
    return {
      lang: configLang,
      toChzh
    }
  }
})
</script>
