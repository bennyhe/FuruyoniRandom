<template>
  <div>
    <ul
      v-if="item.type === 'subdesc' && item.sublist && item.sublist.length > 0"
    >
      <li v-for="(listitem, listkey) in item.sublist" v-bind:key="listkey">
        <p
          v-if="
            listitem.ajp &&
            ((lang[$parent.curlang].id === 'cn' && !listitem.a) ||
              lang[$parent.curlang].id !== 'cn')
          "
        >
          {{ listitem.ajp }}
        </p>
        <p
          v-if="
            (listitem.a && lang[$parent.curlang].id === 'cn') ||
            (lang[$parent.curlang].id !== 'cn' && !listitem.ajp)
          "
        >
          {{ $parent.toChzh(listitem.a) }}
        </p>
      </li>
    </ul>
    <blockquote v-if="item.a || item.ajp">
      <p
        v-if="
          item.qjp &&
          ((lang[$parent.curlang].id === 'cn' && !item.q) ||
            lang[$parent.curlang].id !== 'cn')
        "
      >
        <strong>Q：{{ item.qjp }}</strong
        ><span v-if="item.author">@{{ $parent.toChzh(item.author) }}</span>
      </p>
      <p
        v-if="
          (item.q && lang[$parent.curlang].id === 'cn') ||
          (lang[$parent.curlang].id !== 'cn' && !item.qjp)
        "
      >
        <template v-if="item.q || item.qjp">
          <strong>Q：{{ $parent.toChzh(item.q) }}</strong>
          <span v-if="item.author">@{{ $parent.toChzh(item.author) }}</span>
        </template>
      </p>
      <blockquote>
        <p
          v-if="
            item.ajp &&
            ((lang[$parent.curlang].id === 'cn' && !item.a) ||
              lang[$parent.curlang].id !== 'cn')
          "
        >
          <template v-if="item.q || item.qjp">A：</template>{{ item.ajp }}
        </p>
        <p
          v-if="
            (item.a && lang[$parent.curlang].id === 'cn') ||
            (lang[$parent.curlang].id !== 'cn' && !item.ajp)
          "
        >
          <template v-if="item.q || item.qjp">A：</template
          >{{ $parent.toChzh(item.a) }}
        </p>
      </blockquote>
    </blockquote>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import configLang from '../../config/lang.js'

export default defineComponent({
  name: 'faqItem',
  props: ['item'],
  setup(props, context) {
    return {
      lang: configLang
    }
  }
})
</script>
