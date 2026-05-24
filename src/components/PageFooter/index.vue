<template>
  <div class="copyright">
    <p
      class="copyright__version"
      v-if="!isOldVer && (showPanelIndex === 0 || showPanelIndex === 1)"
    >
      Ver:
      <template v-if="isNaChVer"
        >官方中文{{ seasonVersion["cn"].vername }}</template
      >
      <template v-else>{{ seasonVersion["jp"].vername }}</template>
    </p>
    <template
      v-if="!isOldVer && !isNaChVer && seasonVersion['jp'].vername === 'S10-2'"
    >
      <p v-if="lang[curlang].id === 'cn'">
        <!-- {{
          `${new Date().getFullYear()}年${
            new Date().getMonth() + 1
          }月禁卡表:${getCardKeyValInLang(
            naData[17].list[0].normal[0]
          )}、${getCardKeyValInLang(
            naData[25].list[1].normal[4]
          )}(${getCardKeyValInLang(
            naData[25].list[1]
          )})（全员禁止）`}}， -->
          {{`${$parent.getCardKeyValInLang(
            naData[2].list[0].special[0]
          )}（${$parent.getCardKeyValInLang(
            naData[2].list[0]
          )}/${$parent.getCardKeyValInLang(naData[12].list[0])}组合禁止）`
        }}
      </p>
      <p v-else>
        <!-- {{
          `全体で禁止:${getCardKeyValInLang(
            naData[17].list[0].normal[0]
          )}、${getCardKeyValInLang(
            naData[25].list[1].normal[4]
          )}(${getCardKeyValInLang(
            naData[25].list[1]
          )})、${$parent.getCardKeyValInLang(
            naData[2].list[0].special[0]
          )}（${$parent.getCardKeyValInLang(
            naData[2].list[0]
          )}
        }}/ -->
          {{`${$parent.getCardKeyValInLang(naData[12].list[0])}组合禁止）——${new Date().getFullYear()}年${
            new Date().getMonth() + 1
          }月禁止カード`
        }}
      </p>
    </template>
    <template v-if="!isOldVer && !isNaChVer">
      <p>
        牌数: {{ cardSum.jp.normal }}通常 / {{ cardSum.jp.special }}切 /
        {{ cardSum.jp.other }}其它
      </p>
    </template>
    <template v-if="!isOldVer && isNaChVer">
      <p>
        牌数: {{ cardSum.ch.normal }}通常 / {{ cardSum.ch.special }}切 /
        {{ cardSum.ch.other }}其它
      </p>
    </template>
    <pre>{{ lang[curlang].copyright }}</pre>
    <p>
      Tips: If you have any question. Please email to
      <span>sakuratool@qq.com</span>
    </p>
    <p>
      <a href="https://github.com/bennyhe/FuruyoniRandom" target="_blank"
        >Github-FuruyoniRandom
      </a>
    </p>
    <p>
      <a href="//sdrice.name/random-update.html"
        >SakuraTool(2019-{{ new Date().getFullYear() }})
        {{ lang[curlang].changeLog }}
      </a>
    </p>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import configLang from '../../config/lang.js'

export default defineComponent({
  name: 'PageFooter',
  props: [
    'defaultData',
    'naChData',
    'naData',
    'isOldVer',
    'isNaChVer',
    'curlang',
    'cardSum',
    'seasonVersion',
    'showPanelIndex',
    'getCardKeyValInLang'
  ],
  setup(props, context) {
    console.log(props.naData)
    return {
      lang: configLang
    }
  }
})
</script>