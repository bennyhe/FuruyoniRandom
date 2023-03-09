<template>
  <div class="main" id="play" :class="['main--' + lang[curlang].id]">
    <!-- S 页面tab -->
    <div class="page-nav">
      <div class="panel-tab__info">
        <div class="panel-tab panel-tab--page">
          <template v-for="(item, index) in panelTab">
            <span
              class="panel-tab__item"
              @click="tabChanged(index)"
              :class="{ cur: showPanelIndex === index }"
              v-if="
                item.show &&
                (!item.onlyCn || (item.onlyCn && lang[curlang].id === 'cn'))
              "
              v-bind:key="index"
            >
              <template v-if="lang[curlang].id === 'cn'">{{
                toChzh(item.name)
              }}</template>
              <template v-else>{{ item.namejp }}</template>
            </span>
          </template>
        </div>
      </div>
    </div>
    <!-- E 页面tab -->
    <!-- S topbar -->
    <div class="topbar">
      <div class="topbar-extra">
        <template
          v-if="isOldVer && (showPanelIndex == 0 || showPanelIndex == 1)"
          >第二幕</template
        >
        <span
          class="togroup-tips"
          v-if="
            groupCardData.length === 2 &&
            (lang[curlang].id === 'cn' || lang[curlang].id === 'jp') &&
            !isCompleteGroup &&
            showPanelIndex == 0
          "
        >
          <span
            >通常<i>{{ selectedNormalCount }}</i
            >/7</span
          >
          <span
            >切<i>{{ selectedSpecialCount }}</i
            >/3</span
          >
        </span>
      </div>
      <span class="select">
        Language:{{ lang[curlang].name }}
        <select v-model="curlang">
          <option
            :value="index"
            v-for="(item, index) in lang"
            v-bind:key="index"
          >
            {{ item.name }}
          </option>
        </select>
      </span>
      <!-- S 搜索 -->
      <div
        class="search"
        v-if="
          !isOldVer &&
          ((showPanelIndex === 0 &&
            !isGoToBeGroup &&
            !(resultGirls.length > 0)) ||
            showPanelIndex === 1)
        "
      >
        <div class="search-ipt">
          <span class="select search-select">
            {{ searchTypeShowWord[searchType] }}
            <select v-model="searchType">
              <option
                :value="item.value"
                v-for="(item, index) in searchTypeOptions"
                v-bind:key="index"
              >
                {{ item.label }}
              </option>
            </select>
          </span>
          <input
            class="ipt"
            type="text"
            v-model="inputKw"
            placeholder="Search Cards"
            @input="inputSearch()"
          />
          <button
            class="search-close"
            @click="clearSearch()"
            :class="{ hide: inputKw == '' }"
          >
            <i class="i-close"></i>
          </button>
        </div>
        <div class="search-result cgroup--old">
          <template v-if="searchResult.length > 0">
            <p class="search-tips">About {{ searchResult.length }} results.</p>
            <div class="card-list">
              <div
                class="card-list__item"
                :class="getCardClass(cardItem)"
                v-for="(cardItem, cardIndex) in searchResult"
                @click="getCardDetail(cardItem, '', cardIndex)"
                v-bind:key="cardIndex"
              >
                <CardItem :item="cardItem"></CardItem>
              </div>
            </div>
          </template>
          <div
            class="search-tips"
            v-else-if="inputKw != '' && searchResult.length === 0"
          >
            No Result.
          </div>
          <CardDetail
            :item="cardDetail"
            v-if="cardDetail && (cardDetail.name || cardDetail.namejp)"
          />
        </div>
      </div>
      <!-- E 搜索 -->
    </div>
    <!-- E topbar -->
    <div class="panel-wrap">
      <div
        class="panel-item panel-item--1"
        :class="{ cur: showPanelIndex === 0 }"
      >
        <!-- S 随机女神 -->
        <div :class="{ hide: isGoToBeGroup }">
          <!-- S 抽取结果 -->
          <div
            class="result"
            v-if="isShowResultGirls && resultGirls.length > 0"
          >
            <div
              class="result__list"
              :class="'result__list--' + resultGirls.length"
            >
              <div
                class="result__item"
                v-for="(item, index) in resultGirls"
                @click="goToGroupInResultArea(item)"
                v-bind:key="index"
              >
                <div class="result__pic">
                  <img
                    v-lazy="`../img/furuyoni/mini/${item.picq}`"
                    v-if="!isOldVer"
                  />
                  <img v-lazy="`../img/${item.picq}`" v-else />
                </div>
                <div
                  class="result__name"
                  :style="item.isResultSelect ? 'color: pink' : ''"
                >
                  <span v-if="getCardKeyValInLang(item)">{{
                    getCardKeyValInLang(item)
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- E 抽取结果 -->
          <div
            class="random-list"
            :class="{
              'random-list--old': isOldVer,
              'random-list--nota': !isShowA,
              hide: !(
                !isShowResultGirls &&
                showPanelGirls &&
                showPanelGirls.length > 0
              ),
            }"
          >
            <template v-for="item in showPanelGirls">
              <template v-for="(girlItem, girlIndex) in item.list">
                <span
                  class="random-item"
                  v-if="girlItem.isInArea"
                  @click="lockThis(girlItem)"
                  :class="{ 'random-item--nouse': !girlItem.isSelect }"
                  v-bind:key="girlIndex"
                >
                  <span class="random-item__pic" v-if="isShowPic">
                    <img v-lazy="`../img/avatar/${girlItem.pic}`" />
                  </span>
                  <span class="random-item__name">
                    <template v-if="getCardKeyValInLang(girlItem)">{{
                      getCardKeyValInLang(girlItem)
                    }}</template>
                  </span>
                </span>
              </template>
            </template>
          </div>
          <!-- S 选项 -->
          <div class="checkbox-wrap">
            <label
              class="checkbox"
              :class="{ cur: isOldVer }"
              v-if="+curlang === 0"
            >
              <input type="checkbox" v-model="isOldVer" />
              <span>第二幕</span>
            </label>
            <label
              class="checkbox"
              :class="{ cur: isChVer }"
              v-if="!isOldVer && +curlang === 0"
            >
              <input type="checkbox" v-model="isChVer" />
              <span>官方中文</span>
            </label>
            <!-- <label class="checkbox hide" :class="{'cur':isShowPic}" v-if="!isOldVer">
              <input type="checkbox" v-model="isShowPic" />
              <span>显示头像</span>
            </label> -->
            <label class="checkbox" :class="{ cur: isShowA }" v-if="!isOldVer">
              <input type="checkbox" v-model="isShowA" />
              <span>{{ lang[curlang].btnIsShowA }}</span>
            </label>
            <template v-if="!isPick2">
              <label class="checkbox" :class="{ cur: isQuick }">
                <input type="checkbox" v-model="isQuick" />
                <span>{{ lang[curlang].btnRandom }}</span>
              </label>
            </template>
            <label class="checkbox" :class="{ cur: isPick2 }">
              <input type="checkbox" v-model="isPick2" />
              <span>{{ lang[curlang].btn2Pick }}</span>
            </label>
          </div>
          <!-- E 选项 -->
          <!-- S 按钮 -->
          <div class="random-btn-wrap">
            <button class="btn" @click="randomWhoStart()">
              {{ lang[curlang].randomFirst
              }}<span class="lock">{{
                whoStart === "" ? "" : `(${whoStart})`
              }}</span>
            </button>
            <template v-if="!isPick2">
              <template v-if="!isStart">
                <button
                  class="btn"
                  @click="randomGet(btnItem)"
                  v-for="(btnItem, btnIndex) in randomSet"
                  v-bind:key="btnIndex"
                >
                  {{ lang[curlang].btnRandomItem + btnItem
                  }}<span class="lock">{{
                    lockName === "" ? "" : `(${lang[curlang].lock}${lockName})`
                  }}</span>
                </button>
              </template>
              <template v-else>
                <button
                  class="btn disabled"
                  v-for="(btnItem, btnIndex) in randomSet"
                  v-bind:key="btnIndex"
                >
                  {{ lang[curlang].btnRandomItem + btnItem
                  }}<span class="lock">{{
                    lockName === "" ? "" : `(${lang[curlang].lock}${lockName})`
                  }}</span>
                </button>
              </template>
            </template>
          </div>
          <div class="random-btn-wrap">
            <template v-if="!isStart">
              <button
                class="btn btn-small btn-main"
                @click="btnGoToBeGroup()"
                v-if="isShowBeGroupBtn"
              >
                {{ lang[curlang].toGroup }}
              </button>
              <button
                class="btn btn-small"
                @click="btnClearGroup()"
                v-if="isShowBeGroupBtn && isPick2"
              >
                {{ lang[curlang].cancel }}
              </button>
            </template>
            <template v-else>
              <button class="btn btn-small disabled" v-if="isShowBeGroupBtn">
                {{ lang[curlang].toGroup }}
              </button>
            </template>
            <button
              class="btn btn-small btn-cancel"
              @click="unLockBtn()"
              v-if="isLockName"
            >
              {{ lang[curlang].lockCancel }}
            </button>
            <button
              class="btn btn-small"
              @click="stopIt()"
              v-if="isQuick && isStart"
            >
              {{ lang[curlang].stop }}
            </button>
            <button
              class="btn btn-small btn-cancel"
              @click="returnRoll2()"
              v-if="isShowResultGirls"
            >
              {{ lang[curlang].btnReturn }}->
            </button>
          </div>
          <!-- E 按钮 -->
          <!-- S 指定范围选取 -->
          <div
            class="change-girl"
            :class="{
              'change-girl--show': isShowChangeGirl,
              hide: !(!isOldVer && !isShowResultGirls && !this.isQuick),
            }"
          >
            <div class="change-girl-ani">
              <div class="change-girl-ctn">
                <div class="random-list">
                  <template v-for="item in changePanelData">
                    <span
                      class="random-item"
                      v-for="(girlItem, girlIndex) in item.list"
                      @click="banThisGirl(girlItem)"
                      :class="{ 'random-item--nouse': !girlItem.isInArea }"
                      v-bind:key="girlIndex"
                    >
                      <span class="random-item__pic" v-if="isShowPic">
                        <img v-lazy="`../img/avatar/${girlItem.pic}`" />
                      </span>
                      <span class="random-item__name">
                        <template v-if="getCardKeyValInLang(girlItem)">{{
                          getCardKeyValInLang(girlItem)
                        }}</template>
                      </span>
                    </span>
                  </template>
                </div>
                <div class="change-girl-panel">
                  <div class="checkbox-wrap">
                    <label
                      class="checkbox"
                      :class="{ cur: isChVer }"
                      v-if="!isOldVer && +curlang === 0"
                    >
                      <input type="checkbox" v-model="isChVer" />
                      <span>官方中文</span>
                    </label>
                    <label
                      class="checkbox"
                      :class="{ cur: isShowA }"
                      v-if="!isOldVer"
                    >
                      <input type="checkbox" v-model="isShowA" />
                      <span>{{ lang[curlang].btnIsShowA }}</span>
                    </label>
                  </div>
                  <div class="btn-wrap">
                    <!-- <button class="btn btn-xs" @click="selectedInArea('verBasic')">{{lang[curlang].verBasic || lang[1].verBasic}}</button>
                    <button class="btn btn-xs" @click="selectedInArea('verPro')">{{lang[curlang].verPro || lang[1].verPro}}</button>
                    <button class="btn btn-xs" @click="selectedInArea('ver1')">{{lang[curlang].ver1 || lang[1].ver1}}</button>
                    <button class="btn btn-xs" @click="selectedInArea('ver2')">{{lang[curlang].ver2 || lang[1].ver2}}</button>
                    <button class="btn btn-xs" @click="selectedInArea('ver3')">{{lang[curlang].ver3 || lang[1].ver3}}</button>
                    <button class="btn btn-xs" @click="selectedInArea('ver4')">{{lang[curlang].ver4 || lang[1].ver4}}</button>
                    <button class="btn btn-xs" @click="selectedInArea('ver5')">{{lang[curlang].ver5 || lang[1].ver5}}</button>
                    <button class="btn btn-xs" @click="selectedInArea('ver6')">{{lang[curlang].ver6 || lang[1].ver6}}</button> -->
                    <button
                      class="btn btn-xs"
                      @click="selectedInArea('a')"
                      v-if="isShowA"
                    >
                      ALL A
                    </button>
                    <button class="btn btn-xs" @click="selectedInArea('ss2')">
                      起源
                    </button>
                    <button class="btn btn-xs" @click="resetArea()">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
              <div class="change-girl-btn" @click="handleClickChangeGirlBtn()">
                {{ lang[curlang].changeAreaText || lang[1].changeAreaText }}
                <svg
                  version="1.1"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M118.83 904.96a21.33 21.33 0 0 0 30.08 0l378.24-377.6a21.33 21.33 0 0 0 6.18-15.36 21.33 21.33 0 0 0-6.18-15.15l-377.82-377.81a21.33 21.33 0 0 0-30.08 0 21.33 21.33 0 0 0-0.42 30.29l362.66 362.67-362.66 362.67a21.33 21.33 0 0 0 0 30.29z m378.02-30.29a21.33 21.33 0 0 0 0 30.29 21.33 21.33 0 0 0 30.3 0l378.02-377.6a21.33 21.33 0 0 0 6.4-15.15 21.33 21.33 0 0 0-6.4-15.14l-378.02-378.03a21.33 21.33 0 0 0-30.3 30.29l362.67 362.67z"
                    fill="#000"
                    p-id="0"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <!-- E 指定范围选取 -->
        </div>
        <!-- E 随机女神 -->
        <!-- S 构筑卡组 -->
        <div :class="{ hide: !isGoToBeGroup }">
          <div
            class="cgroup"
            :class="
              groupCardData.length == 1 || isCompleteGroup || isGroupOldVer
                ? 'cgroup--old cgroup--old--2'
                : 'cgroup--new'
            "
          >
            <!-- S 头像 -->
            <div
              class="select-group"
              :class="'select-group--' + groupCardData.length"
            >
              <div
                class="select-group__item"
                v-for="(item, index) in groupCardData"
                v-bind:key="index"
              >
                <div class="random-item">
                  <span class="random-item__pic">
                    <img v-lazy="`../img/avatar/${item.pic}`" />
                  </span>
                  <p class="random-item__name" v-if="getCardKeyValInLang(item)">
                    {{ getCardKeyValInLang(item) }}
                  </p>
                  <p
                    class="realname"
                    v-if="getCardKeyValInLang(item, 'realname')"
                  >
                    {{ getCardKeyValInLang(item, "realname") }}
                  </p>
                  <GirlRange :item="item" />
                  <div class="spdesc-wrap">
                    <p
                      class="spdesc"
                      v-if="lang[curlang].id === 'cn' && item.desc"
                      v-html="toChzh(item.desc)"
                    ></p>
                    <p class="spdesc" v-else v-html="item.descjp"></p>
                  </div>
                </div>
              </div>
            </div>
            <!-- E 头像 -->
            <div
              class="cgroup__girlpic"
              :class="'cgroup__girlpic--' + groupCardData.length"
            >
              <img
                v-lazy="`../img/furuyoni/mini/${item.picq}`"
                v-for="(item, index) in groupCardData"
                v-bind:key="index"
              />
            </div>
            <div
              class="card-wrap card-wrap--basic"
              :class="{
                'card-wrap--select': !isCompleteGroup,
                'card-wrap--complete': isCompleteGroup,
                'card-wrap--2': groupCardData.length == 2,
              }"
            >
              <div
                class="card-list"
                v-for="(item, index) in groupCardData"
                v-bind:key="index"
              >
                <!-- <span class="card-list__name">{{item.name}}</span> -->
                <div
                  class="card-list__item normal"
                  :class="getCardClass(cardItem)"
                  v-for="(cardItem, cardIndex) in item.normal"
                  @click="selectCard(cardItem, 'normal', item, cardIndex)"
                  v-bind:key="cardIndex"
                >
                  <CardItem :item="cardItem"></CardItem>
                </div>
              </div>
              <!-- S 单人 切 -->
              <div
                class="card-list"
                v-for="(item, index) in groupCardData"
                v-bind:key="index"
              >
                <!-- <span class="card-list__name">{{item.name}}</span> -->
                <div
                  class="card-list__item special"
                  :class="getCardClass(cardItem)"
                  v-for="(cardItem, cardIndex) in item.special"
                  @click="selectCard(cardItem, 'special', item, cardIndex)"
                  v-bind:key="cardIndex"
                >
                  <CardItem :item="cardItem"></CardItem>
                </div>
              </div>
              <!-- E 单人 切 -->
              <div class="card-list pcsee" v-if="groupCardData.length == 2">
                <span class="card-list__name">切</span>
                <template v-for="item in groupCardData">
                  <div
                    class="card-list__item special"
                    :class="getCardClass(cardItem)"
                    v-for="(cardItem, cardIndex) in item.special"
                    @click="selectCard(cardItem, 'special', item, cardIndex)"
                    v-bind:key="cardIndex"
                  >
                    <CardItem :item="cardItem"></CardItem>
                  </div>
                </template>
              </div>
              <div
                class="msee"
                v-if="
                  groupCardData.length == 2 &&
                  (isCompleteGroup || isGroupOldVer)
                "
              >
                <template v-if="!isCompleteGroup">
                  <div
                    class="card-list"
                    v-for="(item, index) in groupCardData"
                    v-bind:key="index"
                  >
                    <span class="card-list__name">切</span>
                    <div
                      class="card-list__item special"
                      :class="getCardClass(cardItem)"
                      v-for="(cardItem, cardIndex) in item.special"
                      @click="selectCard(cardItem, 'special', item, cardIndex)"
                      v-bind:key="cardIndex"
                    >
                      <CardItem :item="cardItem"></CardItem>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <div class="card-list">
                    <span class="card-list__name">切</span>
                    <template v-for="item in groupCardData">
                      <div
                        class="card-list__item special"
                        :class="getCardClass(cardItem)"
                        v-for="(cardItem, cardIndex) in item.special"
                        @click="
                          selectCard(cardItem, 'special', item, cardIndex)
                        "
                        v-bind:key="cardIndex"
                      >
                        <CardItem :item="cardItem"></CardItem>
                      </div>
                    </template>
                  </div>
                </template>
              </div>
            </div>
            <!-- S 追加 -->
            <div
              class="card-wrap card-wrap--extra"
              :class="{
                'card-wrap--2': groupCardData.length == 2,
                'card-wrap--complete': isCompleteGroup,
              }"
            >
              <div class="card-list">
                <template v-for="item in groupCardData">
                  <div
                    class="card-list__item"
                    :class="getCardClass(cardItem, 1)"
                    v-for="(cardItem, cardIndex) in item.girlBoard"
                    @click="getCardDetail(cardItem, item, cardIndex)"
                    v-bind:key="cardIndex"
                  >
                    <CardItem :item="cardItem"></CardItem>
                  </div>
                  <div
                    class="card-list__item card-list__item--extra"
                    :class="getCardClass(cardItem, 1)"
                    :data-extrafrom="cardItem.extraFrom"
                    v-for="(cardItem, cardIndex) in item.extra"
                    @click="getCardDetail(cardItem, item, cardIndex)"
                    v-bind:key="cardIndex"
                  >
                    <CardItem :item="cardItem"></CardItem>
                  </div>
                  <div
                    class="card-list__item card-list__item--extra"
                    :data-extrafrom="cardItem.extraFrom"
                    :class="getCardClass(cardItem, 1)"
                    v-for="(cardItem, cardIndex) in item.changeExtra"
                    @click="getCardDetail(cardItem, item, cardIndex)"
                    v-bind:key="cardIndex"
                  >
                    <CardItem :item="cardItem"></CardItem>
                  </div>
                  <div
                    class="card-list__item"
                    :class="getCardClass(cardItem)"
                    v-for="(cardItem, cardIndex) in item.poison"
                    @click="getCardDetail(cardItem, item, cardIndex)"
                    v-bind:key="cardIndex"
                  >
                    <CardItem :item="cardItem"></CardItem>
                  </div>
                  <div
                    class="card-list__item"
                    :class="getCardClass(cardItem)"
                    v-for="(cardItem, cardIndex) in item.transform"
                    @click="getCardDetail(cardItem, item, cardIndex)"
                    v-bind:key="cardIndex"
                  >
                    <CardItem :item="cardItem"></CardItem>
                  </div>
                </template>
              </div>
            </div>
            <!-- E 追加 -->
            <!-- S 构筑提示 -->
            <template v-if="groupCardData.length === 2">
              <pre
                class="grouptips"
                v-html="lang[curlang].groupTips || lang[1].groupTips"
              ></pre>
            </template>
            <!-- E 构筑提示 -->
            <div class="random-btn-wrap" v-if="isCompleteGroup">
              <button class="btn btn-small" @click="returnGroup()">
                {{ lang[curlang].btnReturn }}->{{ lang[curlang].toGroup }}
              </button>
            </div>
            <div class="random-btn-wrap">
              <button
                class="btn btn-small msee msee--i"
                @click="changeGroupVer()"
                v-if="
                  groupCardData.length == 2 && isGoToBeGroup && !isCompleteGroup
                "
              >
                {{
                  lang[curlang].changeGroupTypeText ||
                  lang[1].changeGroupTypeText
                }}
              </button>
              <button
                class="btn btn-small btn-main"
                v-if="
                  !isCompleteGroup &&
                  selectedNormalCount === 7 &&
                  selectedSpecialCount === 3 &&
                  groupCardData.length == 2
                "
                @click="checkGroup()"
              >
                {{ lang[curlang].btnCheck }}
              </button>
              <button
                class="btn btn-small btn-main"
                v-if="isCompleteGroup"
                @click="shareGroup()"
              >
                {{ lang[curlang].btnShare }}
              </button>
              <button class="btn btn-small btn-cancel" @click="returnRoll()">
                {{ lang[curlang].btnReturn }}->{{ lang[curlang].btnRandomItem }}
              </button>
            </div>
            <!-- S 卡片详情 -->
            <template
              v-if="
                cardDetail &&
                (cardDetail.name || cardDetail.namejp) &&
                isGoToBeGroup
              "
            >
              <CardDetail :item="cardDetail">
                <template
                  v-if="
                    !isOldVer && getIsShowCardPic(cardDetail) && isShowCardPic
                  "
                >
                  <div
                    class="flip-container"
                    v-if="cardDetail.id.indexOf('20-kanawe-o-p-') > -1"
                  >
                    <div class="flipper">
                      <div class="front">
                        <img class="card-pic" v-lazy="getImgUrl()" />
                      </div>
                      <div class="back">
                        <img class="card-pic" v-lazy="getImgUrlWill()" />
                      </div>
                    </div>
                  </div>
                  <img class="card-pic" v-lazy="getImgUrl()" v-else />
                </template>
              </CardDetail>
              <template v-if="!isOldVer && getIsShowCardPic(cardDetail)">
                <label class="checkbox" :class="{ cur: isShowCardPic }"
                  ><input type="checkbox" v-model="isShowCardPic" />
                  <span>查看卡图</span></label
                >
              </template>
            </template>
            <!-- E 卡片详情 -->
          </div>
          <!-- S FAQ -->
          <div
            v-if="
              !isOldVer &&
              cardDetail &&
              (cardDetail.name || cardDetail.namejp) &&
              isGoToBeGroup &&
              cardDetail.faq &&
              cardDetail.faq[0]
            "
            style="
              max-width: 600px;
              margin: 0 auto;
              max-height: 300px;
              overflow-y: auto;
            "
          >
            <!-- <button class="btn" @click="searchFAQ()">
              <span>{{toChzh('查看FAQ')}}</span>
            </button> -->
            <div class="md">
              <FaqItem
                v-for="(item, key) in cardDetail.faq"
                :item="item"
                v-bind:key="key"
              ></FaqItem>
            </div>
          </div>
          <!-- E FAQ -->
          <!-- S 卡组推荐 -->
          <div
            class="panel-item--deck"
            v-if="
              !isOldVer && !isChVer && beGroupDeck && beGroupDeck.length > 0
            "
            style="max-width: 1024px; margin: 0 auto"
          >
            <DeckCount :deckcount="beGroupDeck.length"></DeckCount>
            <!-- <div style="max-height: 600px; overflow-y:auto;"> -->
            <div
              class="allcards-list__item"
              v-for="(item, index) in beGroupDeck"
              v-bind:key="index"
            >
              <div class="allcards-tab" @click="selectedDeckShowInGroup(index)">
                <div
                  class="allcards-tab__item allcards-item"
                  :class="{ show: item.isSelect }"
                >
                  <DeckTitle :item="item"></DeckTitle>
                </div>
              </div>
              <div class="allcards__content" :class="{ hide: !item.isSelect }">
                <DeckInfo :item="item"></DeckInfo>
                <div class="cgroup cgroup--old">
                  <div class="card-wrap">
                    <div class="card-list pcsee">
                      <div
                        class="card-list__item normal"
                        :class="getCardClass(cardItem)"
                        v-for="(cardItem, cardIndex) in item.deck.normal"
                        @click="getCardDetailInDeck(cardItem)"
                        v-bind:key="cardIndex"
                      >
                        <CardItem :item="cardItem"></CardItem>
                      </div>
                    </div>
                    <div class="card-list msee">
                      <template
                        v-for="(cardItem, cardIndex) in item.deck.normal"
                      >
                        <div
                          class="card-list__item normal"
                          :class="getCardClass(cardItem)"
                          @click="getCardDetailInDeck(cardItem)"
                          v-bind:key="cardIndex"
                          v-if="cardIndex < 3"
                        >
                          <CardItem :item="cardItem"></CardItem>
                        </div>
                      </template>
                    </div>
                    <div class="card-list msee">
                      <template
                        v-for="(cardItem, cardIndex) in item.deck.normal"
                      >
                        <div
                          class="card-list__item normal"
                          :class="getCardClass(cardItem)"
                          v-if="cardIndex >= 3"
                          v-bind:key="cardIndex"
                        >
                          <CardItem :item="cardItem"></CardItem>
                        </div>
                      </template>
                    </div>
                    <div class="card-list">
                      <span class="card-list__name">切</span>
                      <div
                        class="card-list__item special"
                        :class="getCardClass(cardItem)"
                        v-for="(cardItem, cardIndex) in item.deck.special"
                        @click="getCardDetailInDeck(cardItem)"
                        v-bind:key="cardIndex"
                      >
                        <CardItem :item="cardItem"></CardItem>
                      </div>
                    </div>
                    <!-- S 追加 -->
                    <div class="card-wrap card-wrap--extra card-wrap--2">
                      <div class="card-list">
                        <div
                          class="card-list__item"
                          :class="getCardClass(cardItem, 1)"
                          v-for="(cardItem, cardIndex) in item.deck.girlBoard"
                          @click="getCardDetailInDeck(cardItem)"
                          v-bind:key="cardIndex"
                        >
                          <CardItem :item="cardItem"></CardItem>
                        </div>
                        <div
                          class="card-list__item"
                          :class="getCardClass(cardItem, 1)"
                          :data-extrafrom="cardItem.extraFrom"
                          v-for="(cardItem, cardIndex) in item.deck.extra"
                          @click="getCardDetailInDeck(cardItem)"
                          v-bind:key="cardIndex"
                        >
                          <CardItem :item="cardItem"></CardItem>
                        </div>
                        <div
                          class="card-list__item"
                          :class="getCardClass(cardItem)"
                          v-for="(cardItem, cardIndex) in item.deck.poison"
                          @click="getCardDetailInDeck(cardItem)"
                          v-bind:key="cardIndex"
                        >
                          <CardItem :item="cardItem"></CardItem>
                        </div>
                        <div
                          class="card-list__item"
                          :class="getCardClass(cardItem)"
                          v-for="(cardItem, cardIndex) in item.deck.transform"
                          @click="getCardDetailInDeck(cardItem)"
                          v-bind:key="cardIndex"
                        >
                          <CardItem :item="cardItem"></CardItem>
                        </div>
                        <div
                          class="card-list__item"
                          :data-extrafrom="cardItem.extraFrom"
                          :class="getCardClass(cardItem, 1)"
                          v-for="(cardItem, cardIndex) in item.deck.changeExtra"
                          @click="getCardDetailInDeck(cardItem)"
                          v-bind:key="cardIndex"
                        >
                          <CardItem :item="cardItem"></CardItem>
                        </div>
                      </div>
                    </div>
                    <!-- E 追加 -->
                  </div>
                </div>
                <!-- S 卡片详情 -->
                <CardDetail
                  :item="cardDetailInDeck"
                  v-if="
                    cardDetailInDeck &&
                    (cardDetailInDeck.name || cardDetailInDeck.namejp)
                  "
                />
                <!-- E 卡片详情 -->
              </div>
            </div>
            <!-- </div> -->
          </div>
          <!-- E 卡组推荐 -->
          <textarea
            type="text"
            id="shareIpt"
            class="textarea textarea--share"
            v-model="shareLink"
            readonly
            v-if="isGoToBeGroup && shareLink != ''"
          ></textarea>
        </div>
        <!-- E 构筑卡组 -->
        <i
          class="backtop"
          :class="{
            hide: !(
              isGoToBeGroup &&
              !isOldVer &&
              !isChVer &&
              beGroupDeck &&
              beGroupDeck.length > 0
            ),
          }"
          @click="backtop()"
        ></i>
      </div>
      <!-- S 全卡表 -->
      <div
        class="panel-item panel-item--allcards"
        :class="{ cur: showPanelIndex === 1 }"
      >
        <div class="checkbox-wrap">
          <label
            class="checkbox"
            :class="{ cur: isChVer }"
            v-if="!isOldVer && +curlang === 0"
          >
            <input type="checkbox" v-model="isChVer" />
            <span>官方中文</span>
          </label>
          <label class="checkbox" :class="{ cur: isShowA }" v-if="!isOldVer">
            <input type="checkbox" v-model="isShowA" />
            <span>{{ lang[curlang].btnIsShowA }}</span>
          </label>
        </div>
        <div class="allcards-list pcsee">
          <div
            class="allcards-list__col"
            v-for="(item, key) in 2"
            v-bind:key="key"
          >
            <template v-for="(firstItem, fristIndex) in showPanelGirls">
              <div
                class="allcards-list__item"
                v-if="
                  (key == 0 && fristIndex % 2 === 0) ||
                  (key != 0 && fristIndex % 2 !== 0)
                "
                v-bind:key="fristIndex"
              >
                <div class="allcards__name">
                  <span v-if="getCardKeyValInLang(firstItem, 'name')">{{
                    getCardKeyValInLang(firstItem, "name")
                  }}</span>
                </div>
                <div class="allcards-tab">
                  <div
                    class="allcards-tab__item allcards-item"
                    :class="
                      firstItem.showAllCards &&
                      firstItem.showAllCardsIndex === index
                        ? 'show'
                        : ''
                    "
                    v-for="(item, index) in firstItem.list"
                    v-bind:key="index"
                    @click="
                      () => {
                        firstItem.showAllCards =
                          firstItem.showAllCardsIndex === index
                            ? !firstItem.showAllCards
                            : true;
                        firstItem.showAllCardsIndex = index;
                      }
                    "
                  >
                    <div class="allcards__title">
                      <span class="avatar">
                        <img v-lazy="`../img/avatar/${item.pic}`" />
                      </span>
                      <span class="name" v-if="getCardKeyValInLang(item)">{{
                        getCardKeyValInLang(item)
                      }}</span>
                      <template
                        v-if="
                          !isOldVer &&
                          isChVer &&
                          qiyuanGirls &&
                          qiyuanGirls.ch.length > 0
                        "
                      >
                        <span
                          class="i-tag i-tag--season"
                          v-if="qiyuanGirls.ch.includes(item.name)"
                          >{{
                            lang[curlang].id === "cn"
                              ? toChzh("起源可用")
                              : "起源戦OK"
                          }}</span
                        >
                      </template>
                      <template
                        v-else-if="
                          !isOldVer &&
                          !isChVer &&
                          qiyuanGirls &&
                          qiyuanGirls.default.length > 0
                        "
                      >
                        <span
                          class="i-tag i-tag--season"
                          v-if="qiyuanGirls.default.includes(item.name)"
                          >{{
                            lang[curlang].id === "cn"
                              ? toChzh("起源可用")
                              : "起源戦OK"
                          }}</span
                        >
                      </template>
                      <template
                        v-if="
                          !isOldVer &&
                          isChVer &&
                          seasonGirls &&
                          seasonGirls.ch.length > 0
                        "
                      >
                        <span
                          class="i-tag i-tag--season"
                          v-if="seasonGirls.ch.includes(item.name)"
                          >季节赛</span
                        >
                      </template>
                      <template
                        v-else-if="
                          !isOldVer &&
                          !isChVer &&
                          seasonGirls &&
                          seasonGirls.default.length > 0
                        "
                      >
                        <span
                          class="i-tag i-tag--season"
                          v-if="seasonGirls.default.includes(item.name)"
                          >季节赛</span
                        >
                      </template>
                      <template
                        v-if="
                          !isOldVer &&
                          isChVer &&
                          seasonGirls &&
                          seasonGirls.nextCh.length > 0
                        "
                      >
                        <span
                          class="allcards__nextseason"
                          v-if="seasonGirls.nextCh.includes(item.name)"
                          >下次季节赛</span
                        >
                      </template>
                    </div>
                    <GirlRange :item="item" />
                  </div>
                </div>
                <div
                  class="allcards__content"
                  :class="firstItem.showAllCards ? '' : 'hide'"
                >
                  <i
                    class="allcards__bg"
                    :class="{ hide: imgKey !== firstItem.showAllCardsIndex }"
                    v-for="(img, imgKey) in firstItem.list"
                    v-bind:key="imgKey"
                  >
                    <img
                      v-lazy="
                        `../img/furuyoni/mini/${firstItem.list[imgKey].picq}`
                      "
                    />
                  </i>
                  <!-- <pre class="allcards__spdesc allcards__spdesc--info" v-if="getCardKeyValInLang(firstItem, 'girlInfo')" v-html="getCardKeyValInLang(firstItem, 'girlInfo')"></pre> -->
                  <div
                    class="allcards__spdesc"
                    v-if="getCardKeyValInLang(firstItem, 'desc')"
                    v-html="getCardKeyValInLang(firstItem, 'desc')"
                  ></div>
                  <p class="allcards__type">NORMAL</p>
                  <CardDetail
                    v-for="(cardItem, cardIndex) in firstItem.list[
                      firstItem.showAllCardsIndex
                    ].normal"
                    :item="cardItem"
                    v-bind:key="cardIndex"
                  />
                  <div class="allcards__special">
                    <p class="allcards__type">SPECIAL</p>
                    <CardDetail
                      v-for="(cardItem, cardIndex) in firstItem.list[
                        firstItem.showAllCardsIndex
                      ].special"
                      :item="cardItem"
                      v-bind:key="cardIndex"
                    />
                  </div>
                  <!-- S 追加 -->
                  <p
                    class="allcards__type"
                    v-if="
                      firstItem.list[firstItem.showAllCardsIndex].extra ||
                      firstItem.list[firstItem.showAllCardsIndex].poison ||
                      firstItem.list[firstItem.showAllCardsIndex].transform ||
                      firstItem.list[firstItem.showAllCardsIndex].changeExtra ||
                      firstItem.list[firstItem.showAllCardsIndex].girlBoard
                    "
                  >
                    EXTRA
                  </p>
                  <CardDetail
                    v-for="(cardItem, cardIndex) in firstItem.list[
                      firstItem.showAllCardsIndex
                    ].extra"
                    :item="cardItem"
                    v-bind:key="cardIndex"
                  />
                  <CardDetail
                    v-for="(cardItem, cardIndex) in firstItem.list[
                      firstItem.showAllCardsIndex
                    ].poison"
                    :item="cardItem"
                    v-bind:key="cardIndex"
                  />
                  <CardDetail
                    v-for="(cardItem, cardIndex) in firstItem.list[
                      firstItem.showAllCardsIndex
                    ].transform"
                    :item="cardItem"
                    v-bind:key="cardIndex"
                  />
                  <CardDetail
                    v-for="(cardItem, cardIndex) in firstItem.list[
                      firstItem.showAllCardsIndex
                    ].changeExtra"
                    :item="cardItem"
                    v-bind:key="cardIndex"
                  />
                  <CardDetail
                    v-for="(cardItem, cardIndex) in firstItem.list[
                      firstItem.showAllCardsIndex
                    ].girlBoard"
                    :item="cardItem"
                    v-bind:key="cardIndex"
                  />
                  <!-- E 追加 -->
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="allcards-list msee">
          <div
            class="allcards-list__item"
            v-for="(firstItem, fristIndex) in showPanelGirls"
            v-bind:key="fristIndex"
          >
            <div class="allcards__name">
              <span v-if="getCardKeyValInLang(firstItem, 'name')">{{
                getCardKeyValInLang(firstItem, "name")
              }}</span>
            </div>
            <div class="allcards-tab">
              <div
                class="allcards-tab__item allcards-item"
                :class="
                  firstItem.showAllCards &&
                  firstItem.showAllCardsIndex === index
                    ? 'show'
                    : ''
                "
                v-for="(item, index) in firstItem.list"
                v-bind:key="index"
                @click="
                  () => {
                    firstItem.showAllCards =
                      firstItem.showAllCardsIndex === index
                        ? !firstItem.showAllCards
                        : true;
                    firstItem.showAllCardsIndex = index;
                  }
                "
              >
                <div class="allcards__title">
                  <span class="avatar">
                    <img v-lazy="`../img/avatar/${item.pic}`" />
                  </span>
                  <span class="name" v-if="getCardKeyValInLang(item)">{{
                    getCardKeyValInLang(item)
                  }}</span>
                  <template
                    v-if="isChVer && qiyuanGirls && qiyuanGirls.ch.length > 0"
                  >
                    <span
                      class="i-tag i-tag--season"
                      v-if="qiyuanGirls.ch.includes(item.name)"
                      >{{
                        lang[curlang].id === "cn"
                          ? toChzh("起源可用")
                          : "起源戦OK"
                      }}</span
                    >
                  </template>
                  <template
                    v-else-if="
                      !isChVer && qiyuanGirls && qiyuanGirls.default.length > 0
                    "
                  >
                    <span
                      class="i-tag i-tag--season"
                      v-if="qiyuanGirls.default.includes(item.name)"
                      >{{
                        lang[curlang].id === "cn"
                          ? toChzh("起源可用")
                          : "起源戦OK"
                      }}</span
                    >
                  </template>
                  <template
                    v-if="isChVer && seasonGirls && seasonGirls.ch.length > 0"
                  >
                    <span
                      class="i-tag i-tag--season"
                      v-if="seasonGirls.ch.includes(item.name)"
                      >季节赛</span
                    >
                  </template>
                  <template
                    v-else-if="
                      !isChVer && seasonGirls && seasonGirls.default.length > 0
                    "
                  >
                    <span
                      class="i-tag i-tag--season"
                      v-if="seasonGirls.default.includes(item.name)"
                      >季节赛</span
                    >
                  </template>
                  <template
                    v-if="
                      isChVer && seasonGirls && seasonGirls.nextCh.length > 0
                    "
                  >
                    <span
                      class="allcards__nextseason"
                      v-if="seasonGirls.nextCh.includes(item.name)"
                      >下次季节赛</span
                    >
                  </template>
                </div>
              </div>
            </div>
            <div
              class="allcards__content"
              :class="firstItem.showAllCards ? '' : 'hide'"
            >
              <i
                class="allcards__bg"
                :class="{ hide: imgKey !== firstItem.showAllCardsIndex }"
                v-for="(img, imgKey) in firstItem.list"
                v-bind:key="imgKey"
              >
                <img
                  v-lazy="`../img/furuyoni/mini/${firstItem.list[imgKey].picq}`"
                />
              </i>
              <div style="padding-left: 0.5em">
                <GirlRange
                  :item="firstItem.list[firstItem.showAllCardsIndex]"
                />
              </div>
              <!-- <pre class="allcards__spdesc allcards__spdesc--info" v-if="getCardKeyValInLang(firstItem, 'girlInfo')" v-html="getCardKeyValInLang(firstItem, 'girlInfo')"></pre> -->
              <div
                class="allcards__spdesc"
                v-if="getCardKeyValInLang(firstItem, 'desc')"
                v-html="getCardKeyValInLang(firstItem, 'desc')"
              ></div>
              <p class="allcards__type">NORMAL</p>
              <CardDetail
                v-for="(cardItem, cardIndex) in firstItem.list[
                  firstItem.showAllCardsIndex
                ].normal"
                :item="cardItem"
                v-bind:key="cardIndex"
              />
              <div class="allcards__special">
                <p class="allcards__type">SPECIAL</p>
                <CardDetail
                  v-for="(cardItem, cardIndex) in firstItem.list[
                    firstItem.showAllCardsIndex
                  ].special"
                  :item="cardItem"
                  v-bind:key="cardIndex"
                />
              </div>
              <!-- S 追加 -->
              <p
                class="allcards__type"
                v-if="
                  firstItem.list[firstItem.showAllCardsIndex].extra ||
                  firstItem.list[firstItem.showAllCardsIndex].poison ||
                  firstItem.list[firstItem.showAllCardsIndex].transform ||
                  firstItem.list[firstItem.showAllCardsIndex].changeExtra ||
                  firstItem.list[firstItem.showAllCardsIndex].girlBoard
                "
              >
                EXTRA
              </p>
              <CardDetail
                v-for="(cardItem, cardIndex) in firstItem.list[
                  firstItem.showAllCardsIndex
                ].extra"
                :item="cardItem"
                v-bind:key="cardIndex"
              />
              <CardDetail
                v-for="(cardItem, cardIndex) in firstItem.list[
                  firstItem.showAllCardsIndex
                ].poison"
                :item="cardItem"
                v-bind:key="cardIndex"
              />
              <CardDetail
                v-for="(cardItem, cardIndex) in firstItem.list[
                  firstItem.showAllCardsIndex
                ].transform"
                :item="cardItem"
                v-bind:key="cardIndex"
              />
              <CardDetail
                v-for="(cardItem, cardIndex) in firstItem.list[
                  firstItem.showAllCardsIndex
                ].changeExtra"
                :item="cardItem"
                v-bind:key="cardIndex"
              />
              <CardDetail
                v-for="(cardItem, cardIndex) in firstItem.list[
                  firstItem.showAllCardsIndex
                ].girlBoard"
                :item="cardItem"
                v-bind:key="cardIndex"
              />
              <!-- E 追加 -->
            </div>
          </div>
        </div>
      </div>
      <!-- E 全卡表 -->

      <!-- S 扩展玩法 -->
      <div
        class="panel-item panel-item--otherplay"
        :class="{ cur: showPanelIndex === 3 }"
      >
        <PageOtherPlay
          :curlang="curlang"
          :sakuraWithData="sakuraWithData"
          :storyCardData="storyCardData"
          :defaultData="defaultData"
          :sakuraOtherData="sakuraOtherData"
          :sakuraCMData="sakuraCMData"
          :panelTab="panelTab"
          :cardDetail="cardDetail"
        />
      </div>
      <!-- E 扩展玩法 -->
      <!-- S 官方FAQ -->
      <div
        class="panel-item panel-item--allcards panel-item--faq"
        :class="{ cur: showPanelIndex === 5 }"
      >
        <!-- S 悬浮导航 -->
        <div class="faq-nav faq-nav--faq">
          <div class="faq-nav__main">
            <template v-for="(qadataitem, qadataindex) in QADATA">
              <div
                class="faq-nav__item"
                v-if="qadataindex < 2"
                v-bind:key="qadataindex"
              >
                <a :href="`#${qadataitem.id}`"
                  ><span
                    :class="`faq-nav__point faq-nav__point--${qadataindex + 1}`"
                  >
                    <span>{{
                      getCardKeyValInLang(qadataitem, "navShort")
                    }}</span>
                  </span></a
                >
              </div>
            </template>
            <div class="faq-nav__list">
              <template v-for="(firstItem, fristIndex) in defaultData">
                <div
                  class="faq-nav__item"
                  v-if="firstItem.list[0].QADATA"
                  v-bind:key="fristIndex"
                >
                  <a :href="`#faq${fristIndex + 2}`">
                    <span class="avatar">
                      <img v-lazy="`../img/avatar/${firstItem.list[0].pic}`" />
                    </span>
                  </a>
                </div>
              </template>
            </div>
            <div class="faq-nav__item">
              <a href="javascript:;" @click="curlang = 0">
                <span class="faq-nav__point" :class="{ cur: curlang == 0 }"
                  ><span>CN</span></span
                >
              </a>
            </div>
            <div class="faq-nav__item">
              <a href="javascript:;" @click="curlang = 1"
                ><span class="faq-nav__point" :class="{ cur: curlang == 1 }"
                  ><span>JP</span></span
                ></a
              >
            </div>
            <div class="faq-nav__item">
              <i class="backtop" @click="backtop()"></i>
            </div>
          </div>
        </div>
        <!-- E 悬浮导航 -->
        <div class="allcards-list">
          <div class="allcards-list__item">
            <div class="allcards__content md faq-about">
              <blockquote>
                <p>
                  <a
                    href="https://main-bakafire.ssl-lolipop.jp//furuyoni/na/faq.html"
                    target="_blank"
                    >官方FAQ（纯日文）<span>(最后导入时间：2022-05-10)</span></a
                  >
                </p>
                <p>
                  <a
                    href="https://main-bakafire.ssl-lolipop.jp//furuyoni/na/dl/furuyoni_comprehensive_rule.pdf"
                    target="_blank"
                    >官方CR（纯日文）</a
                  >
                </p>
                <p>
                  <span class="faq-about__date">Last Updated: 2022-05-10</span>
                </p>
              </blockquote>
            </div>
          </div>
          <template v-for="(qadataitem, qadataindex) in QADATA">
            <div
              class="allcards-list__item"
              :id="qadataitem.id"
              v-if="qadataindex < 2"
              v-bind:key="qadataindex"
            >
              <div class="allcards__name">
                <h2>{{ getCardKeyValInLang(qadataitem, "name") }}</h2>
              </div>
              <div class="allcards__content md">
                <div v-for="(litem, lkey) in qadataitem.list" v-bind:key="lkey">
                  <h2>
                    <template v-if="litem.name">{{
                      toChzh(litem.name)
                    }}</template>
                    <template v-else-if="litem.namejp">{{
                      litem.namejp
                    }}</template>
                  </h2>
                  <FaqItem
                    v-for="(item, key) in litem.list"
                    :item="item"
                    v-bind:key="key"
                  ></FaqItem>
                </div>
              </div>
            </div>
          </template>
          <template v-for="(firstItem, fristIndex) in defaultData">
            <div
              class="allcards-list__item"
              :id="`faq${fristIndex + 2}`"
              v-if="firstItem.list[0].QADATA"
              v-bind:key="fristIndex"
            >
              <div class="allcards__name">
                <span class="avatar">
                  <img v-lazy="`../img/avatar/${firstItem.list[0].pic}`" />
                </span>
                <span v-if="getCardKeyValInLang(firstItem, 'name')">{{
                  getCardKeyValInLang(firstItem, "name")
                }}</span>
              </div>
              <div
                class="allcards__spdesc"
                v-if="getCardKeyValInLang(firstItem, 'desc')"
                v-html="getCardKeyValInLang(firstItem, 'desc')"
              ></div>
              <div class="allcards__content md">
                <div
                  v-for="(litem, lkey) in firstItem.list[0].QADATA"
                  v-bind:key="lkey"
                >
                  <h2>
                    <template
                      v-if="litem.namejp && lang[curlang].id !== 'cn'"
                      >{{ litem.namejp }}</template
                    >
                    <template v-else-if="litem.name">{{
                      toChzh(litem.name)
                    }}</template>
                    <template v-else-if="litem.namejp">{{
                      litem.namejp
                    }}</template>
                  </h2>
                  <div
                    style="
                      border: 1px solid #d3d3d3;
                      border-radius: 4px;
                      margin-bottom: 4px;
                    "
                    v-if="
                      litem.nameCard &&
                      litem.nameCard.namejp &&
                      litem.list[0].ajp !== 'このカードへのFAQはありません。'
                    "
                    v-bind:key="`${lkey}ajp`"
                  >
                    <CardDetail :item="litem.nameCard" />
                  </div>
                  <FaqItem
                    v-for="(item, key) in litem.list"
                    :item="item"
                    v-bind:key="key"
                  ></FaqItem>
                </div>
              </div>
            </div>
          </template>
        </div>
        <i class="backtop" @click="backtop()"></i>
      </div>
      <!-- E 官方FAQ -->
      <!-- S 卡组广场 -->
      <div
        class="panel-item panel-item--deck"
        :class="{ cur: showPanelIndex === 4 }"
        v-if="sakuraPlayerDeckData && sakuraPlayerDeckData.length > 0"
      >
        <PageDecks
          :curlang="curlang"
          :sakuraPlayerDeckData="sakuraPlayerDeckData"
          :deckAvatarList="deckAvatarList"
          :deckSortByType="deckSortByType"
          :panelTab="panelTab"
          :statisticsDeckCards="statisticsDeckCards"
          :deckAvatarListBackup="deckAvatarListBackup"
          :resDecks="resDecks"
          :cardDetailInDeck="cardDetailInDeck"
          :deckSum="deckSum"
        />
      </div>
      <!-- E 卡组广场 -->
      <!-- S 赛季更新卡 -->
      <div
        class="panel-item panel-item--scc"
        :class="{ cur: showPanelIndex === 2 }"
      >
        <PageScc
          :curlang="curlang"
          :sakuraChangeCardsData="sakuraChangeCardsData"
        />
      </div>
      <!-- E 赛季更新卡 -->
      <div class="panel-item" :class="{ cur: showPanelIndex === 99 }">
        <textarea id="exportfaqSub"></textarea>
        <textarea id="exportfaq"></textarea>
        <br />
        <textarea v-model="exportDeck"></textarea>
      </div>
    </div>
    <!-- S footer&copyright -->
    <PageFooter
      :isOldVer="isOldVer"
      :isChVer="isChVer"
      :curlang="curlang"
      :cardSum="cardSum"
      :seasonVersion="seasonVersion"
      :showPanelIndex="showPanelIndex"
      :defaultData="defaultData"
      :chData="chData"
    />
    <!-- E footer&copyright -->
    <!-- S 悬浮导航:带语言和返回顶部 -->
    <div
      class="faq-nav faq-nav--onlylang"
      :class="{ hide: !(showPanelIndex !== 0 && showPanelIndex !== 5) }"
    >
      <div class="faq-nav__main">
        <div class="faq-nav__item">
          <a href="javascript:;" @click="curlang = 0"
            ><span class="faq-nav__point" :class="{ cur: curlang == 0 }"
              ><span>CN</span></span
            ></a
          >
        </div>
        <div class="faq-nav__item">
          <a href="javascript:;" @click="curlang = 1"
            ><span class="faq-nav__point" :class="{ cur: curlang == 1 }"
              ><span>JP</span></span
            ></a
          >
        </div>
        <div class="faq-nav__item">
          <i class="backtop" @click="backtop()"></i>
        </div>
      </div>
    </div>
    <!-- E 悬浮导航:带语言和返回顶部 -->
  </div>
</template>

<script>
import {
  getCardSum,
  formatDefaultCardData,
  simpPYStr,
  ftPYStr,
  qqPYStr,
  getUrlQuery,
  paintRange,
  findAllRangeFromCards,
  sortInObjectOptions,
  getCounts,
  get
} from './utils/export.js'

import sakuraData from './js/sub/sakura/carddata/sakura-s8'
import sakuraDataCh from './js/sub/sakura/carddata/sakura-s7-2-ch'
import sakuraDataOldVer from './js/sub/sakura/carddata/sakura-old'

import PageFooter from './components/PageFooter/index.vue'
import CardItem from './components/CardItem/index.vue'
import CardDetail from './components/CardDetail/index.vue'
import GirlRange from './components/GirlRange/index.vue'
import FaqItem from './components/FaqItem/index.vue'
import DeckCount from './components/Deck/count.vue'
import DeckTitle from './components/Deck/title.vue'
import DeckInfo from './components/Deck/info.vue'
import PageDecks from './pages/Decks.vue'
import PageOtherPlay from './pages/OtherPlay.vue'
import PageScc from './pages/Scc.vue'
import configLang from './config/lang.js'
import configNav from './config/nav.js'
import {
  initBaseData,
  initChangeCardsData,
  initSakuraCMDATA,
  addSSTagInCards,
  getIsShowCardPicIn
} from './utils/index.js'
const {
  sakuraStoryData,
  sakuraWithData,
  sakuraOtherData,
  sakuraCMData,
  sakuraPlayerDeckData,
  sakuraChangeCardsData
} = window.sakuraOtherData
const seasonVersion = window.seasonVersion
let { defaultData, chData } = initBaseData(sakuraData, sakuraDataCh)

// 赛季修订卡相关
const SCCDATA = initChangeCardsData(sakuraChangeCardsData)
const nSakuraChangeCardsData = SCCDATA.sakuraChangeCardsData

// 标记赛季变更卡
const noMatchSSCards = addSSTagInCards(defaultData, seasonVersion['jp'])
const noMatchSSCardsCh = addSSTagInCards(chData, seasonVersion['cn'])
// console.log(noMatchSSCards, noMatchSSCardsCh)

//格式化新幕数据
chData = formatDefaultCardData(chData)
defaultData = formatDefaultCardData(
  defaultData,
  SCCDATA.allChangeCards.resultList
)

if (
  get('qiyuanGirls.default', window, 1) &&
  window.qiyuanGirls.setDefaultNeedChangeCn
) {
  for (let i = 0; i < defaultData.length; i++) {
    for (let si = 0; si < window.qiyuanGirls.default.length; si++) {
      const item = window.qiyuanGirls.default[si]
      if (item === defaultData[i].namejp) {
        window.qiyuanGirls.default[si] = defaultData[i].list[0].name
      }
    }
  }
}

//格式化旧幕数据
const oldData = formatDefaultCardData(sakuraDataOldVer)
// 旧幕的牌数
const oldDataSum = getCardSum(oldData)
oldDataSum.other += 3
console.log('旧幕牌数，other:伞面，5毒，3transform，2集中力', oldDataSum)
// 新幕的牌数
let cardSum = getCardSum(defaultData)
cardSum.other += 18
console.log(
  '新幕牌数，other:伞面，5毒，6transform，4兵牌，岚之力，2集中力，6幕任务，2潜水，5伪证，1镜aa1任务牌',
  cardSum
)
// 新幕中文的牌数
const chDataSum = getCardSum(chData)
chDataSum.other += 18
console.log(
  '新幕中文牌数，other:伞面，5毒，6transform，4兵牌，岚之力，2集中力，6幕任务，2潜水，5伪证，1镜aa1任务牌',
  chDataSum
)
cardSum = {
  jp: cardSum,
  ch: chDataSum
}

const fnCopyCards = wantData => {
  //a旗复制原来的卡
  wantData[13].list[1].changeExtra.unshift(wantData[13].list[0].extra[4])
  wantData[13].list[1].changeExtra.unshift(wantData[13].list[0].extra[3])

  // s7
  // a2krr如果存在复制粘贴
  if (
    wantData[9].list[2] &&
    wantData[9].list[2].special[2].namejp === 'いんだすとりあ'
  ) {
    wantData[9].list[2].extra = wantData[9].list[0].extra
  }

  // 衣 3张参考卡
  // if (wantData[21].list[0]) {
  //   wantData[21].list[0].extra = [
  //     ...wantData[21].list[0].extra,
  //     {...wantData[3].list[0].special[0]},
  //     {...wantData[6].list[0].special[0]},
  //     {...wantData[12].list[1].changeExtra[0]},
  //   ]
  // }

  // a1镜去掉s1-s3
  if (wantData[15].list[1]) {
    wantData[15].list[1].special = [wantData[15].list[1].special[3]]
  }
  // aa1镜去掉s1-s3 复制a1镜的n1-n6的ex
  if (wantData[15].list[2]) {
    wantData[15].list[2].special = [wantData[15].list[2].special[3]]
    wantData[15].list[2].changeExtra = [
      ...wantData[15].list[2].changeExtra,
      ...wantData[15].list[1].changeExtra.slice(0, 6)
    ]
  }
}
fnCopyCards(defaultData)
fnCopyCards(chData)

// 补充标记赛季变更卡
addSSTagInCards(
  defaultData,
  {
    changeCards: noMatchSSCards,
    vername: seasonVersion['jp'].vername
  },
  1
)
addSSTagInCards(
  chData,
  {
    changeCards: noMatchSSCardsCh,
    vername: seasonVersion['cn'].vername
  },
  1
)

// 开闭伞头像
const _yukihIsOpen = parseInt(Math.random() * 2, 10) === 0
oldData[5].list[0].pic = _yukihIsOpen
  ? 'twiicon_sa_05a.jpg'
  : 'twiicon_sa_05b.jpg'
oldData[5].list[0].picq = _yukihIsOpen ? 'sd_yukihi_a.png' : 'sd_yukihi_b.png'

// 禁卡
if (seasonVersion) {
  if (
    seasonVersion['cn'].forbidCards &&
    seasonVersion['cn'].forbidCards.length > 0
  ) {
    seasonVersion['cn'].forbidCards.forEach(item => {
      if (chData[item[0]] && chData[item[0]].list[item[1]]) {
        chData[item[0]].list[item[1]][item[2]][item[3]].isForbid = true
      }
    })
  }
  if (
    seasonVersion['jp'].forbidCards &&
    seasonVersion['jp'].forbidCards.length > 0
  ) {
    seasonVersion['jp'].forbidCards.forEach(item => {
      if (defaultData[item[0]] && defaultData[item[0]].list[item[1]]) {
        defaultData[item[0]].list[item[1]][item[2]][item[3]].isForbid = true
      }
    })
  }
}

// 获取人物攻击距离
chData = paintRange(chData)
defaultData = paintRange(defaultData)

export default {
  name: 'pageIndex',
  components: {
    PageFooter,
    CardItem,
    CardDetail,
    GirlRange,
    FaqItem,
    DeckCount,
    DeckTitle,
    DeckInfo,
    PageDecks,
    PageOtherPlay,
    PageScc
  },
  data() {
    return {
      QADATA: window.QADATA,
      inputKw: '',
      searchResult: [],
      cardSum: cardSum,
      shareUrl: 'https://sdrice.name/random/',
      isShowResultGirls: false,
      isGroupOldVer: true, //是否构筑界面老版本
      isFirstGetResult: true, //是否第一次使用
      resultGirls: [],
      isOldVer: false, //第二幕
      isChVer: false, //中文版本
      cardDetail: {},
      cardDetailInDeck: {},
      groupCardData: [],
      isPick2: false,
      isShowBeGroupBtn: false, //是否显示组卡按钮
      isGoToBeGroup: false, //是否去组卡界面
      isShowChangeGirl: false, //是否展开选择女神范围
      whoStart: '',
      lockName: '',
      lockCount: 0,
      isStart: false,
      isQuick: false,
      isShowA: true,
      isShowPic: true,
      isLockName: false,
      lockNameIndex: null,
      lockNameSubIndex: null,
      defaultData: defaultData,
      oldData: oldData,
      chData: chData,
      showPanelGirls: JSON.parse(JSON.stringify(defaultData)),
      randomUseData: [],
      changePanelData: JSON.parse(JSON.stringify(defaultData)),
      storyCardData: JSON.parse(JSON.stringify(sakuraStoryData)),
      sakuraWithData: JSON.parse(JSON.stringify(sakuraWithData)),
      sakuraOtherData: JSON.parse(JSON.stringify(sakuraOtherData)),
      sakuraCMData: JSON.parse(JSON.stringify(sakuraCMData)),
      sakuraChangeCardsData: JSON.parse(JSON.stringify(nSakuraChangeCardsData)),
      isCompleteGroup: false,
      selectedNormalCount: 0,
      selectedSpecialCount: 0,
      shareGirls: [],
      shareLink: '',
      randomSet: [2, 3, 4, 6],
      isShowCardPic: false,
      debug: 0, //默认0

      searchType: 'all',
      searchTypeShowWord: {},
      searchTypeOptions: [],

      seasonVersion,
      qiyuanGirls: window.qiyuanGirls || {},
      seasonGirls: window.seasonGirls || {},

      sakuraPlayerDeckData:
        sakuraPlayerDeckData && sakuraPlayerDeckData.length > 0
          ? JSON.parse(JSON.stringify(sakuraPlayerDeckData))
          : [],
      resDecks: [],
      deckSum: 0,
      deckAvatarList: [],
      exportDeck: '',
      deckSortByType: 'index',
      beGroupDeck: [],
      statisticsDeckCards: [
        {
          ss: 'all',
          all: [],
          normal: [],
          special: []
        },
        {
          ss: 'S8',
          all: [],
          normal: [],
          special: []
        }
      ],
      deckAvatarListBackup: [],

      showPanelIndex: 0,
      panelTab: configNav,

      curlang: 0,
      lang: configLang, //语言

      seasonTags: [],

      isDeckLoading: false
    }
  },
  watch: {
    searchType(val) {
      if (this.inputKw !== '') {
        this.searchCard(this.inputKw)
      }
    },
    curlang(val) {
      localStorage.setItem('sakuraLang', val)
      if (val !== 0) {
        this.isShowA = true
        // this.isChVer = this.isChVer;
        this.resetDefaultData()
      }

      this.searchTypeShowWord = {
        all: 'ALL',
        attack: this.lang[this.curlang].typeAttack,
        action: this.lang[this.curlang].typeAction,
        reaction: this.lang[this.curlang].typeReaction,
        fullpower: this.lang[this.curlang].typeFullpower,
        enhance: this.lang[this.curlang].typeEnhance
      }
      this.searchTypeOptions = [
        {
          value: 'all',
          label: 'ALL'
        },
        {
          value: 'attack',
          label: this.lang[this.curlang].typeAttack
        },
        {
          value: 'action',
          label: this.lang[this.curlang].typeAction
        },
        {
          value: 'reaction',
          label: this.lang[this.curlang].typeReaction
        },
        {
          value: 'fullpower',
          label: this.lang[this.curlang].typeFullpower
        },
        {
          value: 'enhance',
          label: this.lang[this.curlang].typeEnhance
        }
        // {
        //   value: 'variable',
        //   label: this.lang[this.curlang].typeVariable
        // }
      ]
    },
    isOldVer(val) {
      this.clearLock()
      if (val) {
        this.isShowA = true
      }
      this.resetDefaultData()
      this.isShowResultGirls = false
    },
    isChVer(val) {
      this.clearLock()
      this.resetDefaultData()
      this.isShowResultGirls = false
    },
    isShowPic(val) {
      this.isShowResultGirls = false
    },
    isShowA(val) {
      this.reset()
      this.clearLock()
      this.isShowResultGirls = false
    },
    isQuick(val) {
      this.isShowBeGroupBtn = false
      if (val) {
        this.isShowResultGirls = false
      }
    },
    isPick2(val) {
      this.reset()
      this.lockCount = 0
      this.cardDetail = {}
      if (val) {
        this.isQuick = false
        this.clearLock()
        this.isShowResultGirls = false
      }
    },
    exportDeck(val) {
      console.log(val)
      if (val) {
        const arr = val.split('\n')
        const arrNew = []
        if (arr && arr.length > 0) {
          arr.forEach(text => {
            const textSplit = text.split('\t')
            if (textSplit && textSplit.length > 0) {
              arrNew.push({
                date: this.formatTime(new Date(), 'YYYY-MM-DD'),
                author: textSplit[0],
                name: textSplit[1],
                desc: textSplit[3],
                decklink: textSplit[2]
              })
            }
          })
        }
        console.log('导入卡组', arrNew)
      }
    }
  },
  created() {
    if (localStorage.getItem('sakuraLang') !== null) {
      this.curlang = localStorage.getItem('sakuraLang')
    } else {
      localStorage.setItem('sakuraLang', 0)
    }
    if (localStorage.getItem('sakuraGroupVer22010802') !== null) {
      this.isGroupOldVer =
        localStorage.getItem('sakuraGroupVer22010802') === 'true'
    }

    this.initFilterFrom()
  },
  mounted() {
    // 指定跳转哪个页面
    if (getUrlQuery('p') && +getUrlQuery('p') >= 0) {
      this.showPanelIndex = +getUrlQuery('p')
    }

    this.initDecksPlaza()

    // this.isOldVer = true;//debug

    // debug 构筑界面
    // this.showPanelGirls[5].list[0].isSelect = true;
    // this.showPanelGirls[19].list[0].isSelect = true;
    // this.btnGoToBeGroup(); //测试
    // this.groupCardData[0].normal[0].selected = true;
    // this.groupCardData[0].normal[1].selected = true;
    // this.groupCardData[0].normal[2].selected = true;
    // this.groupCardData[0].normal[3].selected = true;
    // this.groupCardData[1].normal[1].selected = true;
    // this.groupCardData[1].normal[2].selected = true;
    // this.groupCardData[1].normal[3].selected = true;
    // this.groupCardData[1].special[1].selected = true;
    // this.groupCardData[1].special[2].selected = true;
    // this.groupCardData[1].special[3].selected = true;
    // this.isCompleteGroup = true;

    if (getUrlQuery('ver') !== null && getUrlQuery('ver').indexOf('ch') > -1) {
      this.isChVer = true
      this.resetDefaultData()
    }
    if (
      getUrlQuery('ver') !== null &&
      !(getUrlQuery('ver').indexOf('ch') > -1)
    ) {
      this.isChVer = false
      this.resetDefaultData()
    }

    //旧幕卡组分享链接
    //?isOlder=1&isShow=1&girls=0+0,11+0&girlscard1=1,2,3+0,1,2&girlscard2=0,1,2,3+
    if (+getUrlQuery('isOlder') === 1) {
      this.isOldVer = true
      this.resetDefaultData()
    }

    //新幕卡组分享链接
    //?isShow=1&girls=9+1,15+0&girlscard1=0,1,2,3+&girlscard2=1,2,3+1,2,3
    //  && getUrlQuery('girlscard1') !== null && getUrlQuery('girlscard2') !== null
    if (+getUrlQuery('isShow') === 1 && getUrlQuery('girls') !== null) {
      const _girls = getUrlQuery('girls').split(',')
      const _girlscard1 = getUrlQuery('girlscard1')
        ? getUrlQuery('girlscard1').split('+')
        : '0,1,2,3,4,5,6+0,1,2,3'.split('+')
      const _girlscard2 = getUrlQuery('girlscard2')
        ? getUrlQuery('girlscard2').split('+')
        : '0,1,2,3,4,5,6+0,1,2,3'.split('+')
      if (_girlscard1[0] !== '') {
        _girlscard1[0] = _girlscard1[0].split(',')
      }
      if (_girlscard1[1] !== '') {
        _girlscard1[1] = _girlscard1[1].split(',')
      }
      if (_girlscard2[0] !== '') {
        _girlscard2[0] = _girlscard2[0].split(',')
      }
      if (_girlscard2[1] !== '') {
        _girlscard2[1] = _girlscard2[1].split(',')
      }
      // console.log(_girls,_girlscard1,_girlscard2);
      // this.showResultIds = [];
      for (let i = 0; i < _girls.length; i++) {
        const _girlsSub = _girls[i].split('+')
        this.showPanelGirls[_girlsSub[0]].list[_girlsSub[1]].isSelect = true
      }
      this.btnGoToBeGroup()
      if (_girlscard1[0] !== '') {
        for (let i = 0; i < _girlscard1[0].length; i++) {
          // this.showResultIds.push(this.groupCardData[0].normal[_girlscard1[0][i]].id);
          this.groupCardData[0].normal[_girlscard1[0][i]].selected = true
        }
      }
      if (_girlscard1[1] !== '') {
        for (let i = 0; i < _girlscard1[1].length; i++) {
          // this.showResultIds.push(this.groupCardData[0].special[_girlscard1[1][i]].id);
          this.groupCardData[0].special[_girlscard1[1][i]].selected = true
        }
      }
      if (_girlscard2[0] !== '') {
        for (let i = 0; i < _girlscard2[0].length; i++) {
          // this.showResultIds.push(this.groupCardData[1].normal[_girlscard2[0][i]].id);
          this.groupCardData[1].normal[_girlscard2[0][i]].selected = true
        }
      }
      if (_girlscard2[1] !== '') {
        for (let i = 0; i < _girlscard2[1].length; i++) {
          // this.showResultIds.push(this.groupCardData[1].special[_girlscard2[1][i]].id);
          this.groupCardData[1].special[_girlscard2[1][i]].selected = true
        }
      }
      // console.log(this.showResultIds);
      this.completeGroupExtraFilter()
      this.isCompleteGroup = true
      this.shareLink = location.href
    }

    // this.searchCard('s7-2') //debug

    // window.localStorage.setItem('sakuraSaveFAQ', '')
    // window.localStorage.setItem('sakuraSaveFAQ201012', '')
    // window.localStorage.setItem('sakuraSaveFAQ201013', '')

    // this.lockThis(this.showPanelGirls[0].list[1]) // debug
    // this.randomGet(3) // debug

    // 原初复制原来的通常和切
    if (this.sakuraCMData && this.defaultData) {
      this.sakuraCMData = initSakuraCMDATA(this.sakuraCMData, this.defaultData)
      // console.log('sakuraCMData', this.sakuraCMData)

      // this.sakuraCMData.forEach(cmitem => {
      //   cmitem.list.forEach(deck => {
      //     //计算攻击距离
      //     let thisGirl = {
      //       cards: [],
      //       ranges: [],
      //       rangeOpened: []
      //     }
      //     findAllRangeFromCards(thisGirl, deck, 'normal')
      //     findAllRangeFromCards(thisGirl, deck, 'special')
      //     findAllRangeFromCards(thisGirl, deck, 'extra')
      //     findAllRangeFromCards(thisGirl, deck, 'changeExtra')

      //     deck.girlExtra = {
      //       name: cmitem.name,
      //       ranges: sortInObjectOptions(getCounts(thisGirl.ranges).resultList, ['name']),
      //       rangeOpened: sortInObjectOptions(getCounts(thisGirl.rangeOpened).resultList, ['name'])
      //     };
      //   })
      // });
    }
  },
  methods: {
    initFilterFrom() {
      // 获取所有来源卡，准备对卡组进行筛查
      // [
      //   "05-oboro-a1-s-4",
      //   "08-hagane-a1-s-1",
      //   "10-kururu-o-s-3",
      //   "10-kururu-a1-s-3",
      //   "12-raira-o-s-3",
      //   "13-utsuro-a1-s-1",
      //   "14-honoka-o-n-1",
      //   "14-honoka-o-n-4",
      //   "14-honoka-o-n-5",
      //   "14-honoka-o-s-1",
      //   "14-honoka-a1-n-1",
      //   "14-honoka-a1-s-1",
      //   "16-yatsuha-o-n-1",
      //   "16-yatsuha-o-n-2",
      //   "16-yatsuha-o-n-3",
      //   "16-yatsuha-o-n-4",
      //   "16-yatsuha-o-n-5",
      //   "16-yatsuha-o-n-6",
      //   "16-yatsuha-o-n-7",
      //   "18-mizuki-o-s-3",
      //   "21-kamuwi-o-s-1",
      //   "22-renri-o-s-4"
      // ]
      let filterCard = []
      this.defaultData.forEach(fitem => {
        fitem.list.forEach(gitem => {
          if (gitem.extra && gitem.extra) {
            filterCard = filterCard.concat(
              gitem.extra.filter(
                item => item.extraFrom && item.extraFrom.indexOf('-ex') === -1
              )
            )
          }
          if (gitem.changeExtra && gitem.changeExtra) {
            filterCard = filterCard.concat(
              gitem.changeExtra.filter(
                item => item.extraFrom && item.extraFrom.indexOf('-ex') === -1
              )
            )
          }
        })
      })
      filterCard = filterCard.map(item => item.extraFrom)
      filterCard = Array.from(new Set(filterCard))
      // console.log(filterCard)
      const temp = []
      filterCard.forEach(id => {
        const num = parseInt(id.split('-')[0], 10) - 1
        // console.log(id, num)
        if (!temp[num]) {
          temp[num] = []
        }
        temp[num].push({
          find: id.indexOf('-s-') > -1 ? 'special' : 'normal',
          findFrom: id
        })
      })
      // console.log(temp)
      this.deckfilterMap = temp
    },
    initDecksPlaza() {
      const seasonTags = []
      this.sakuraPlayerDeckData.forEach((item, index) => {
        const { deck, groupCardData, ver } = this.getDeckDetailForLink(
          item.decklink
        )

        item.deck = deck
        item.groupCardData = groupCardData
        item.isSelect = false
        item.id = index
        item.ver =
          ver.toUpperCase().indexOf('CH') > -1
            ? `官方中文${ver.toUpperCase().replace('CH', '')}`
            : ver.toUpperCase()
        item.shortVer = item.ver.replace('官方中文', '')
        item.isSeason =
          qiyuanGirls.default.includes(item.groupCardData[0].name) &&
          qiyuanGirls.default.includes(item.groupCardData[1].name)
        item.isTop1 =
          item.name.indexOf('上位') > -1 ||
          item.name.indexOf('冠軍') > -1 ||
          item.name.indexOf('冠军') > -1
        item.isSOldVer = !(
          ver.toUpperCase().indexOf(seasonVersion['jp'].vername.toUpperCase()) >
          -1
        )

        if (!seasonTags.includes(item.shortVer)) {
          seasonTags.push(item.shortVer)
        }

        //计算攻击距离
        const thisGirl = {
          cards: [],
          ranges: [],
          rangeOpened: []
        }
        findAllRangeFromCards(
          thisGirl,
          deck,
          'normal',
          item.groupCardData[0].index === 5 || item.groupCardData[1].index === 5
        )
        findAllRangeFromCards(
          thisGirl,
          deck,
          'special',
          item.groupCardData[0].index === 5 || item.groupCardData[1].index === 5
        )
        findAllRangeFromCards(
          thisGirl,
          deck,
          'extra',
          item.groupCardData[0].index === 5 || item.groupCardData[1].index === 5
        )
        findAllRangeFromCards(
          thisGirl,
          deck,
          'transform',
          item.groupCardData[0].index === 5 || item.groupCardData[1].index === 5
        )
        findAllRangeFromCards(
          thisGirl,
          deck,
          'changeExtra',
          item.groupCardData[0].index === 5 || item.groupCardData[1].index === 5
        )
        item.deckrange = {
          girlExtra: {
            name: item.groupCardData[0].name + item.groupCardData[1].name,
            ranges: sortInObjectOptions(getCounts(thisGirl.ranges).resultList, [
              'name'
            ]),
            rangeOpened: sortInObjectOptions(
              getCounts(thisGirl.rangeOpened).resultList,
              ['name']
            )
          }
        }
        // console.log(deck,item.deckrange)

        // 为了统计卡组构筑中的卡的使用频率
        item.deck.normal.forEach(carditem => {
          this.statisticsDeckCards[0].all.push(carditem)
          this.statisticsDeckCards[0].normal.push(carditem)

          if (item.shortVer === this.statisticsDeckCards[1].ss) {
            this.statisticsDeckCards[1].all.push(carditem)
            this.statisticsDeckCards[1].normal.push(carditem)
          }
        })
        item.deck.special.forEach(carditem => {
          this.statisticsDeckCards[0].all.push(carditem)
          this.statisticsDeckCards[0].special.push(carditem)

          if (item.shortVer === this.statisticsDeckCards[1].ss) {
            this.statisticsDeckCards[1].all.push(carditem)
            this.statisticsDeckCards[1].special.push(carditem)
          }
        })

        item.groupCardData.forEach(item2 => {
          const isAdd = this.deckAvatarList.filter(
            listitem => listitem.name === item2.name
          )
          if (isAdd && isAdd.length === 0) {
            this.deckAvatarList.push({
              name: item2.name || '',
              namejp: item2.namejp || '',
              pic: item2.pic || '',
              isSelect: true,
              index: item2.index,
              subIndex: item2.subIndex,
              useCards: [...item2.useCards]
            })
          } else {
            isAdd[0].useCards = isAdd[0].useCards.concat(item2.useCards)
          }
        })
      })

      this.seasonTags = seasonTags.map(xitem => {
        return {
          name: xitem,
          isSelect: true
        }
      })
      // console.log(this.seasonTags)

      this.deckAvatarList = sortInObjectOptions(
        this.deckAvatarList,
        ['index', 'subIndex'],
        'up'
      )
      this.deckAvatarList.forEach(item => {
        item.AllGroup = this.findDeck(item, true)
        item.GroupNum = item.AllGroup.length

        // 各女神使用的卡
        if (!item.giCards) {
          item.giCards = {
            normal: [],
            special: [],
            normalMostCard: [],
            specialMostCard: [],
            normalCardTypes: [],
            specialCardTypes: []
          }
        }
        item.useCards.forEach(carditem => {
          if (carditem.baseType === 'normal') {
            item.giCards.normal.push(carditem.id)
          }
          if (carditem.baseType === 'special') {
            item.giCards.special.push(carditem.id)
          }
        })
        item.giCards.normal = getCounts(item.giCards.normal)
        item.giCards.special = getCounts(item.giCards.special)
        if (item.giCards.normal.resultList.length > 0) {
          item.giCards.normal.resultList.forEach((qitem, qindex) => {
            item.giCards.normalMostCard[qindex] = {
              card: item.useCards.filter(citem => citem.id === qitem.name)[0],
              count: qitem.count
            }
            item.giCards.normalCardTypes[qindex] =
              item.giCards.normalMostCard[qindex].card.types[0]
          })
          item.giCards.normalCardTypes = getCounts(
            item.giCards.normalCardTypes
          )
        }
        if (item.giCards.special.resultList.length > 0) {
          item.giCards.special.resultList.forEach((qitem, qindex) => {
            item.giCards.specialMostCard[qindex] = {
              card: item.useCards.filter(citem => citem.id === qitem.name)[0],
              count: qitem.count
            }
            item.giCards.specialCardTypes[qindex] =
              item.giCards.specialMostCard[qindex].card.types[0]
          })
          item.giCards.specialCardTypes = getCounts(
            item.giCards.specialCardTypes
          )
        }
        // console.log(item.name, item.cardname)
      })
      this.deckAvatarListBackup = [...this.deckAvatarList]
      this.resDecks = [...this.sakuraPlayerDeckData]
      this.deckSum = this.resDecks.length
      // console.log(this.sakuraPlayerDeckData, this.deckAvatarList)
      console.log(
        '重复卡组',
        getCounts(
          this.sakuraPlayerDeckData.map(item => item.decklink)
        ).resultList.filter(item => item.count > 1)
      )

      // 统计使用卡的频率前5
      this.formatCardname(this.statisticsDeckCards[0]) // 所有赛季
      this.formatCardname(this.statisticsDeckCards[1]) // 当前赛季

      // console.log(this.statisticsDeckCards)

      // this.findDeck([{ name: '花' }]) // debug
      // this.resDecks = this.sakuraPlayerDeckData.filter(item=>item.isSOldVer) // debug
    },
    formatCardname(cardname) {
      cardname.ssall = getCounts(cardname.all.map(item => item.id))
      cardname.ssnormal = getCounts(cardname.normal.map(item => item.id))
      cardname.ssspecial = getCounts(cardname.special.map(item => item.id))
      cardname.afAll = []
      cardname.afNormal = []
      cardname.afSpecial = []
      cardname.ssall.resultList.forEach((item, key) => {
        if (key < 5) {
          cardname.afAll[key] = {
            card: cardname.all.filter(citem => item.name === citem.id)[0],
            count: item.count
          }
        }
      })
      cardname.ssnormal.resultList.forEach((item, key) => {
        if (key < 5) {
          cardname.afNormal[key] = {
            card: cardname.all.filter(citem => item.name === citem.id)[0],
            count: item.count
          }
        }
      })
      cardname.ssspecial.resultList.forEach((item, key) => {
        if (key < 5) {
          cardname.afSpecial[key] = {
            card: cardname.all.filter(citem => item.name === citem.id)[0],
            count: item.count
          }
        }
      })
      return cardname
    },
    selectedDeckShow(index) {
      const tempSelect = this.resDecks[index].isSelect
      this.resDecks.forEach(item => {
        item.isSelect = false
      })
      this.resDecks[index].isSelect = !tempSelect
      this.cardDetailInDeck = {}
      this.$forceUpdate()
    },
    selectedDeckShowInGroup(index) {
      const tempSelect = this.beGroupDeck[index].isSelect
      this.beGroupDeck.forEach(item => {
        item.isSelect = false
      })
      this.beGroupDeck[index].isSelect = !tempSelect
      this.cardDetailInDeck = {}
      this.$forceUpdate()
    },
    findDeck(data, noSetData, isAnd) {
      let result = [],
        resultPick2 = []
      let avatarList = this.deckAvatarList.filter(item2 => item2.isSelect)
      if (data && Array.isArray(data)) {
        // 如果是数组
        avatarList = data
      } else if (data) {
        avatarList = [data]
      }
      if (avatarList.length > 0) {
        this.sakuraPlayerDeckData.forEach(item => {
          item.isSelect = false
        })
        if (avatarList.length === 2) {
          // 2Pick是两个包含优先展示
          this.sakuraPlayerDeckData.forEach(item => {
            // console.log((item.groupCardData[0].name === avatarList[0].name) && (item.groupCardData[1].name === avatarList[1].name))
            if (
              item.groupCardData[0].name === avatarList[0].name &&
              item.groupCardData[1].name === avatarList[1].name
            ) {
              if (
                resultPick2.filter(item2 => item2.id === item.id).length === 0
              ) {
                resultPick2.push(item)
              }
            }
          })
          // console.log(resultPick2)
        }

        //包含女神的卡组
        if (!isAnd) {
          avatarList.forEach(aitem => {
            this.sakuraPlayerDeckData.forEach(item => {
              // console.log(item.id, result.filter(item2 => item2.id === item.id).length)
              if (
                item.groupCardData[0].name === aitem.name ||
                item.groupCardData[1].name === aitem.name
              ) {
                if (
                  result.filter(item2 => item2.id === item.id).length === 0 &&
                  resultPick2.filter(item2 => item2.id === item.id).length ===
                    0
                ) {
                  result.push(item)
                }
              }
            })
          })
        }
      }
      if (resultPick2.length > 0) {
        resultPick2 = [...sortInObjectOptions(resultPick2, ['id'], 'up')]
      }
      if (result.length > 0) {
        result = [...sortInObjectOptions(result, ['id'], 'up')]
      }
      // console.log(result, resultPick2)
      if (!noSetData) {
        this.resDecks = [...resultPick2, ...result]
      }
      return [...resultPick2, ...result]
    },
    selectedCancel(girlItem) {
      girlItem.isSelect = !girlItem.isSelect
      this.findDeck()
      this.panelTab[4].childTabIndex = 0
      this.$forceUpdate()
    },
    randomGetDeck(count) {
      const randomList = []
      this.deckAvatarList.forEach(item => {
        // 重置选择过的池子，全部复位不选
        item.isSelect = false
      })
      if (count === 'top1') {
        this.deckAvatarList.forEach(item => {
          // 重置选择过的池子，全部复位不选
          item.isSelect = true
        })
        this.resDecks = this.sakuraPlayerDeckData.filter(item => item.isTop1)
      } else if (count === 'allo' || count === 'alla') {
        if (count === 'allo') {
          this.deckAvatarList.forEach(item => {
            if (item.subIndex === 0) {
              item.isSelect = true
            }
          })
        } else if (count === 'alla') {
          this.deckAvatarList.forEach(item => {
            if (item.subIndex !== 0) {
              item.isSelect = true
            }
          })
        }
        const chizi = this.deckAvatarList
          .filter(item => item.isSelect)
          .map(item => item.name)
        this.resDecks = this.sakuraPlayerDeckData.filter(
          item =>
            chizi.includes(item.groupCardData[0].name) &&
            chizi.includes(item.groupCardData[1].name)
        )
      } else if (count === 'ss2') {
        this.deckAvatarList.forEach(item => {
          if (
            item.subIndex === 0 &&
            (this.qiyuanGirls.default.includes(item.name))
          ) {
            item.isSelect = true
          }
        })
        this.resDecks = this.sakuraPlayerDeckData.filter(
          item => item.isSeason
        )
      } else {
        let dataCopy = this.deckAvatarList.map(item => {
          return {
            name: item.name,
            index: item.index
          }
        })
        console.log(dataCopy)
        for (let i = 0; i < count; i++) {
          const _random = parseInt(Math.random() * dataCopy.length, 10)
          // console.log(_random, dataCopy.length)
          randomList.push(dataCopy[_random].name)
          dataCopy = dataCopy.filter(
            item => item.index !== dataCopy[_random].index
          )
        }
        this.deckAvatarList.forEach(item => {
          if (randomList.includes(item.name)) {
            item.isSelect = true
          }
        })
        this.findDeck()
      }
      this.panelTab[4].childTabIndex = 0
      this.$forceUpdate()
    },
    handleClickCancelDeckAvatar() {
      this.deckAvatarList.forEach(item => {
        item.isSelect = false
      })
      this.cardDetailInDeck = {}
      this.resDecks = []
      this.panelTab[4].childTabIndex = 0
    },
    handleClickResetDeckAvatar() {
      this.sakuraPlayerDeckData.forEach(item => {
        item.isSelect = false
      })
      this.deckAvatarList.forEach(item => {
        item.isSelect = true
      })
      this.cardDetailInDeck = {}
      this.resDecks = [...this.sakuraPlayerDeckData]
      this.panelTab[4].childTabIndex = 0
    },
    getDeckDetailForLink(link) {
      const _girls = getUrlQuery('girls', link).split(',')
      const _girlscard1 = getUrlQuery('girlscard1', link)
        ? getUrlQuery('girlscard1', link).split('+')
        : '0,1,2,3,4,5,6+0,1,2,3'.split('+')
      const _girlscard2 = getUrlQuery('girlscard2', link)
        ? getUrlQuery('girlscard2', link).split('+')
        : '0,1,2,3,4,5,6+0,1,2,3'.split('+')
      if (_girlscard1[0] !== '') {
        _girlscard1[0] = _girlscard1[0].split(',')
      }
      if (_girlscard1[1] !== '') {
        _girlscard1[1] = _girlscard1[1].split(',')
      }
      if (_girlscard2[0] !== '') {
        _girlscard2[0] = _girlscard2[0].split(',')
      }
      if (_girlscard2[1] !== '') {
        _girlscard2[1] = _girlscard2[1].split(',')
      }
      const groupCardData = [],
        girl1 = [],
        girl2 = [],
        deck = {
          normal: [],
          special: [],
          extra: [],
          changeExtra: []
        }
      // const orginData = link.indexOf('ch') > -1 ? this.chData : this.defaultData
      const orginData = this.defaultData
      for (let i = 0; i < _girls.length; i++) {
        const _girlsSub = _girls[i].split('+')
        groupCardData.push(orginData[_girlsSub[0]].list[_girlsSub[1]])
      }
      if (_girlscard1[0] !== '') {
        for (let i = 0; i < _girlscard1[0].length; i++) {
          deck.normal.push(groupCardData[0].normal[_girlscard1[0][i]])
          girl1.push(groupCardData[0].normal[_girlscard1[0][i]])
        }
      }
      if (_girlscard1[1] !== '') {
        for (let i = 0; i < _girlscard1[1].length; i++) {
          deck.special.push(groupCardData[0].special[_girlscard1[1][i]])
          girl1.push(groupCardData[0].special[_girlscard1[1][i]])
        }
      }
      if (_girlscard2[0] !== '') {
        for (let i = 0; i < _girlscard2[0].length; i++) {
          deck.normal.push(groupCardData[1].normal[_girlscard2[0][i]])
          girl2.push(groupCardData[1].normal[_girlscard2[0][i]])
        }
      }
      if (_girlscard2[1] !== '') {
        for (let i = 0; i < _girlscard2[1].length; i++) {
          deck.special.push(groupCardData[1].special[_girlscard2[1][i]])
          girl2.push(groupCardData[1].special[_girlscard2[1][i]])
        }
      }
      deck.extra = [
        ...(groupCardData[0].extra || []),
        ...(groupCardData[1].extra || [])
      ]
      deck.changeExtra = [
        ...(groupCardData[0].changeExtra || []),
        ...(groupCardData[1].changeExtra || [])
      ]
      deck.poison = [
        ...(groupCardData[0].poison || []),
        ...(groupCardData[1].poison || [])
      ]
      deck.transform = [
        ...(groupCardData[0].transform || []),
        ...(groupCardData[1].transform || [])
      ]
      deck.girlBoard = [
        ...(groupCardData[0].girlBoard || []),
        ...(groupCardData[1].girlBoard || [])
      ]
      for (const fitem in this.deckfilterMap) {
        // console.log(fitem, this.deckfilterMap[fitem])
        if (
          +groupCardData[0].index === +fitem ||
          +groupCardData[1].index === +fitem
        ) {
          if (deck.extra && deck.extra.length > 0) {
            this.deckfilterMap[fitem].forEach(oItem => {
              if (
                deck[oItem.find] &&
                deck[oItem.find].length > 0 &&
                deck[oItem.find].filter(item => item.id === oItem.findFrom)
                  .length === 0
              ) {
                deck.extra = deck.extra.filter(
                  item => item.id && item.id.indexOf(oItem.findFrom) === -1
                )
              }
            })
          }
          if (deck.changeExtra && deck.changeExtra.length > 0) {
            this.deckfilterMap[fitem].forEach(oItem => {
              if (
                deck[oItem.find] &&
                deck[oItem.find].length > 0 &&
                deck[oItem.find].filter(item => item.id === oItem.findFrom)
                  .length === 0
              ) {
                if (+fitem === 15) {
                  deck.changeExtra = deck.changeExtra.filter(
                    item =>
                      item.extraFrom &&
                      item.extraFrom.indexOf(oItem.findFrom) === -1
                  )
                } else {
                  deck.changeExtra = deck.changeExtra.filter(
                    item => item.id && item.id.indexOf(oItem.findFrom) === -1
                  )
                }
              }
            })
          }
        }
      }
      // console.log(groupCardData, deck)
      return {
        deck,
        groupCardData: [
          {
            ...groupCardData[0],
            useCards: girl1
          },
          {
            ...groupCardData[1],
            useCards: girl2
          }
        ],
        ver: getUrlQuery('ver', link)
      }
    },
    changeGroupVer() {
      this.isGroupOldVer = !this.isGroupOldVer
      localStorage.setItem('sakuraGroupVer22010802', this.isGroupOldVer)
    },
    deckSortBy(type, disabled) {
      if (
        disabled &&
        !this.deckAvatarListBackup &&
        this.deckAvatarListBackup.length === 0
      ) {
        return
      }
      this.deckSortByType = type
      if (type === 'index') {
        this.deckAvatarList = sortInObjectOptions(
          this.deckAvatarList,
          ['index', 'subIndex'],
          'up'
        )
      } else if (type === 'countdown') {
        this.deckAvatarList = sortInObjectOptions(
          this.deckAvatarList,
          ['GroupNum', 'index', 'subIndex'],
          'down'
        )
      } else if (type === 'countup') {
        this.deckAvatarList = sortInObjectOptions(
          this.deckAvatarList,
          ['GroupNum', 'index', 'subIndex'],
          'up'
        )
      }
    },
    // loadingImg(arrImgPath) {
    //   let newimages = [], loadedimages = 0
    //   let postaction = function () { }  //此处增加了一个postaction函数
    //   let arr = (typeof arrImgPath !== "object") ? [arrImgPath] : arrImgPath
    //   function imageloadpost() {
    //     loadedimages++
    //     if (loadedimages === arr.length) {
    //       postaction(newimages) //加载完成用我们调用postaction函数并将newimages数组做为参数传递进去
    //     }
    //   }
    //   for (let i = 0; i < arr.length; i++) {
    //     newimages[i] = new Image()
    //     newimages[i].src = arr[i]
    //     newimages[i].onload = function () {
    //       imageloadpost()
    //     }
    //     newimages[i].onerror = function () {
    //       imageloadpost()
    //     }
    //   }
    //   return { //此处返回一个空白对象的done方法
    //     done: function (f) {
    //       postaction = f || postaction
    //     }
    //   }
    // },
    toChzh(cc) {
      let str = ''
      if (cc) {
        for (let i = 0; i < cc.length; i++) {
          if (simpPYStr().indexOf(cc.charAt(i)) !== -1)
            str += ftPYStr().charAt(simpPYStr().indexOf(cc.charAt(i)))
          else if (qqPYStr().indexOf(cc.charAt(i)) !== -1)
            str += ftPYStr().charAt(qqPYStr().indexOf(cc.charAt(i)))
          else str += cc.charAt(i)
        }
      }
      // console.log(str);
      return str
    },
    toChsim(cc) {
      let str = ''
      if (cc) {
        for (let i = 0; i < cc.length; i++) {
          if (ftPYStr().indexOf(cc.charAt(i)) !== -1)
            str += simpPYStr().charAt(ftPYStr().indexOf(cc.charAt(i)))
          else if (qqPYStr().indexOf(cc.charAt(i)) !== -1)
            str += simpPYStr().charAt(qqPYStr().indexOf(cc.charAt(i)))
          else str += cc.charAt(i)
        }
      }
      // console.log(str);
      return str
    },
    /**
     * 将输入的任意对象转换成 Date，如果装换失败将返回当前时间
     * silly-datetime组件，https://github.com/csbun/silly-datetime/blob/master/src/index.js
     * @param  {any} datetime 需要被格式化的时间
     * @return {Date}         转换好的 Date
     */
    getDateObject(datetime) {
      let t = datetime instanceof Date ? datetime : new Date(datetime)
      if (!t.getDate()) {
        t = new Date()
      }
      return t
    },
    /**
     * 格式化时间
     * silly-datetime组件，https://github.com/csbun/silly-datetime/blob/master/src/index.js
     * @param  {Date}   datetime  需要被格式化的时间
     * @param  {string} formatStr 格式化字符串，默认为 'YYYY-MM-DD HH:mm:ss'
     * @return {string}           格式化后的时间字符串
     */
    formatTime(datetime, formatStr) {
      const t = this.getDateObject(datetime)
      let i = 0
      formatStr = formatStr || 'YYYY-MM-DD HH:mm:ss'
      const hours = t.getHours()
      const o = [
        ['M+', t.getMonth() + 1],
        ['D+', t.getDate()],
        // H 24小时制
        ['H+', hours],
        // h 12小时制
        ['h+', hours > 12 ? hours - 12 : hours],
        ['m+', t.getMinutes()],
        ['s+', t.getSeconds()]
      ]
      // 替换 Y
      if (/(Y+)/.test(formatStr)) {
        formatStr = formatStr.replace(
          RegExp.$1,
          (t.getFullYear() + '').substr(4 - RegExp.$1.length)
        )
      }
      // 替换 M, D, H, h, m, s
      for (; i < o.length; i++) {
        if (new RegExp('(' + o[i][0] + ')').test(formatStr)) {
          formatStr = formatStr.replace(
            RegExp.$1,
            RegExp.$1.length === 1
              ? o[i][1]
              : ('00' + o[i][1]).substr(('' + o[i][1]).length)
          )
        }
      }
      // 替换 a/A 为 am, pm
      return formatStr.replace(/a/gi, hours > 11 ? 'pm' : 'am')
    },
    tabChanged(index) {
      this.showPanelIndex = index
      this.cardDetail = {}
      this.cardDetailInDeck = {}
      this.clearSearch()
    },
    tabChangedInChild(fatherIndex, index) {
      this.panelTab[fatherIndex].childTabIndex = index
      this.cardDetail = {}
      this.cardDetailInDeck = {}
    },
    clearSearch() {
      (this.inputKw = ''), (this.searchResult = [])
      this.cardDetail = {}
    },
    /**
     * inputSearch 输入框搜索
     */
    inputSearch() {
      this.cardDetail = {}
      if (this.inputKw !== '') {
        let keywords = this.inputKw.toLowerCase()
        keywords = this.filterKeywords(this.inputKw)
        this.searchResult = []
        this.searchCard(keywords)
      } else {
        this.searchResult = []
      }
    },
    /**
     * searchSub 从数据搜索
     * @param  {Array} girlItemData      女神数据
     * @param  {String} keywords      关键词
     * @param  {Array} resultArr        搜索前的结果list
     * @param  {Array} carListKey    卡牌类型数据列表Key
     * @param  {Array} keywordsBroke 拆字匹配
     * @param  {String} searchKeyType 搜索类型
     * @return {Array}               [description]
     */
    searchSub(
      girlItemData,
      keywords,
      resultArr,
      carListKey,
      keywordsBroke,
      searchKeyType
    ) {
      if (girlItemData[carListKey] && girlItemData[carListKey].length > 0) {
        girlItemData[carListKey].forEach(item => {
          const filterType =
            this.searchType === 'all' ||
            (this.searchType !== 'all' &&
              item.types !== undefined &&
              item.types.length > 0 &&
              item.types.includes(this.searchType))

          // 拆字查询
          if (keywordsBroke !== undefined && keywordsBroke !== '') {
            keywordsBroke.forEach(keywrodItem => {
              const _target = {
                name:
                  item.name && item.name !== '' ? item.name.toLowerCase() : '',
                namejp: item.namejp.toLowerCase()
              }
              if (
                (_target.name.indexOf(this.toChsim(keywrodItem)) > -1 ||
                  _target.namejp.indexOf(keywrodItem) > -1) &&
                filterType
              ) {
                resultArr.push(item)
              }
            })
          } else {
            const _target = {
              name:
                item.name && item.name !== '' ? item.name.toLowerCase() : '',
              namejp: item.namejp.toLowerCase(),
              text:
                item.text && item.text !== '' ? item.text.toLowerCase() : '',
              textjp:
                item.textjp && item.textjp !== ''
                  ? item.textjp.toLowerCase()
                  : '',
              id: item.id.toLowerCase()
            }
            if (searchKeyType === 'id' && _target.id.indexOf(keywords) > -1) {
              resultArr.push(item)
            } else {
              // if (_target.name === '阵风祭天式') {
              //   console.log(_target.text.indexOf(this.keywords))
              //   console.log(_target.text.indexOf(this.toChsim(keywords)))
              //   console.log(_target.textjp.indexOf(keywords))
              //   console.log(_target.text, keywords, this.toChsim(keywords))
              // }
              if (
                (_target.name === keywords ||
                  _target.namejp === keywords ||
                  _target.name.indexOf(keywords) > -1 ||
                  _target.name.indexOf(this.toChsim(keywords)) > -1 ||
                  _target.namejp.indexOf(keywords) > -1 ||
                  _target.text.indexOf(keywords) > -1 ||
                  _target.text.indexOf(this.toChsim(keywords)) > -1 ||
                  _target.textjp.indexOf(keywords) > -1) &&
                filterType
              ) {
                resultArr.push(item)
              }
            }
          }
        })
      }
      return resultArr
    },
    /**
     * searchCard 搜索一张卡名
     * @param  {[type]} keywords 关键词
     * @return {[type]}          [description]
     */
    searchCard(keywords, noSetData) {
      keywords = keywords.toLowerCase() //统一转换小写
      let result = []
      const orginData = this.isChVer ? this.chData : this.defaultData
      // console.log(keywords)
      if (
        !this.isChVer &&
        keywords ===
          this.seasonVersion['jp'].vername
            .toLowerCase()
            .replace(' preview', '') &&
        this.seasonVersion['jp'].changeCards.length > 0
      ) {
        //修正卡特别显示
        this.seasonVersion['jp'].changeCards.forEach(item => {
          result.push(orginData[item[0]].list[item[1]][item[2]][item[3]])
        })
        this.searchResult = result
        return result
      } else if (
        this.isChVer &&
        keywords ===
          this.seasonVersion['cn'].vername
            .toLowerCase()
            .replace(' preview', '') &&
        this.seasonVersion['cn'].changeCards.length > 0
      ) {
        //修正卡特别显示
        this.seasonVersion['cn'].changeCards.forEach(item => {
          result.push(orginData[item[0]].list[item[1]][item[2]][item[3]])
        })
        this.searchResult = result
        return result
      }
      // 搜索优先级
      // 卡id>全名匹配/词语匹配>拆字匹配
      // 卡id
      orginData.forEach(item => {
        item.list.forEach(girlItem => {
          result = this.searchSub(
            girlItem,
            keywords,
            result,
            'normal',
            '',
            'id'
          )
          result = this.searchSub(
            girlItem,
            keywords,
            result,
            'special',
            '',
            'id'
          )
          result = this.searchSub(
            girlItem,
            keywords,
            result,
            'extra',
            '',
            'id'
          )
          result = this.searchSub(
            girlItem,
            keywords,
            result,
            'poison',
            '',
            'id'
          )
          result = this.searchSub(
            girlItem,
            keywords,
            result,
            'transform',
            '',
            'id'
          )
          result = this.searchSub(
            girlItem,
            keywords,
            result,
            'changeExtra',
            '',
            'id'
          )
          result = this.searchSub(
            girlItem,
            keywords,
            result,
            'girlBoard',
            '',
            'id'
          )
        })
      })
      // 全名匹配或者词语匹配
      orginData.forEach(item => {
        item.list.forEach(girlItem => {
          result = this.searchSub(girlItem, keywords, result, 'normal')
          result = this.searchSub(girlItem, keywords, result, 'special')
          result = this.searchSub(girlItem, keywords, result, 'extra')
          result = this.searchSub(girlItem, keywords, result, 'poison')
          result = this.searchSub(girlItem, keywords, result, 'transform')
          result = this.searchSub(girlItem, keywords, result, 'changeExtra')
          result = this.searchSub(girlItem, keywords, result, 'girlBoard')
        })
      })
      if (result.length > 0) {
        result = this.unique(result) // 根据id去重
      }
      const keywordsBroke = keywords.split('')
      // 如果没有单词和全名匹配才去做拆散匹配
      if (result.length === 0) {
        orginData.forEach(item => {
          item.list.forEach(girlItem => {
            result = this.searchSub(
              girlItem,
              keywords,
              result,
              'normal',
              keywordsBroke
            )
            result = this.searchSub(
              girlItem,
              keywords,
              result,
              'special',
              keywordsBroke
            )
          })
        })
      }
      if (result.length > 0) {
        result = this.unique(result) // 根据id去重

        // kk = []
        // result.forEach((aa)=>{
        //   kk.push(aa.name)
        // });
        // console.log('关键词：'+keywords+'，结果：',kk)
      }
      if (result.length === 0) {
        this.cardDetail = {}
      }
      if (!noSetData) {
        this.searchResult = result
      }
      return result
      // console.log(result);
    },
    unique(arr, findKeyName) {
      findKeyName = findKeyName === undefined ? 'id' : findKeyName
      const obj = {}
      arr = arr.reduce((cur, next) => {
        obj[next[findKeyName]]
          ? ''
          : (obj[next[findKeyName]] = true && cur.push(next))
        return cur
      }, [])
      return arr
    },
    filterKeywords(keywords) {
      // console.log('过滤前',keywords)
      const _pattern = new RegExp(
        '[`~!@#$^&*()=|{}\':;\',\\[\\]<>/?~！@#￥……&*（）——|{}‘；：\'，。、！？：；﹑•＂…‘’“”〝〞∕¦‖—　〈〉﹞﹝「」‹›〖〗】【»«』『〕〔》《﹐¸﹕︰﹔！¡？¿﹖﹌﹏﹋＇´ˊˋ―﹫︳︴¯＿￣﹢﹦﹤‐­˜﹟﹩﹠﹪﹡﹨﹍﹉﹎﹊ˇ︵︶︷︸︹︿﹀︺︽︾ˉ﹁﹂﹃﹄︻︼（）]'
      )
      let _newKeywords = ''
      for (let i = 0; i < keywords.length; i++) {
        _newKeywords =
          _newKeywords + keywords.substr(i, 1).replace(_pattern, '')
      }
      _newKeywords = this.filterEmoji(_newKeywords)
      // console.log('过滤后',_newKeywords)
      return _newKeywords
    },
    filterEmoji(keywords) {
      keywords = keywords.replace(
        /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ''
      )
      return keywords
    },
    clearLock() {
      if (this.isLockName) {
        this.isLockName = false
        this.lockName = ''
        this.lockCount = 0
      }
    },
    lockThis(curGirlItem) {
      this.isShowChangeGirl = false
      if (this.lockCount <= 1 && !curGirlItem.isSelect) {
        curGirlItem.isSelect = true
        this.lockCount++
        this.isShowBeGroupBtn = true

        // 首次才可以lock
        if (!this.isLockName) {
          this.isLockName = true
          this.lockName = this.getCardKeyValInLang(curGirlItem, 'name')
          this.lockNameIndex = curGirlItem.index
          this.lockNameSubIndex = curGirlItem.subIndex
        }
      }
    },
    randomGet(count) {
      const _this = this
      _this.isFirstGetResult = false
      _this.isShowResultGirls = false
      _this.isShowBeGroupBtn = count === 2 ? true : false
      this.groupCardData = []
      this.shareGirls = []
      if (!_this.isStart) {
        //开始抽奖
        _this.isStart = true
        _this.getCount = count
        if (!_this.isQuick) {
          _this.isShowResultGirls = true
        }
        if (_this.isQuick) {
          window.intA = setInterval(function () {
            _this.startRandom(count)
          }, 100)
        } else {
          _this.startRandom(count)
          _this.afterStopShowResult()
        }
      }
    },
    stopIt() {
      clearInterval(window.intA)
      this.afterStopShowResult()
      this.isShowResultGirls = true
    },
    afterStopShowResult() {
      this.isStart = false
      if (this.getCount < 6 && !this.isOldVer) {
        //记录抽取结果
        const _arr = []
        for (let i = 0; i < this.resultGirls.length; i++) {
          _arr.push(this.resultGirls[i].name)
        }
      }
    },
    /**
     * 随机先后手
     * @return {[type]} [description]
     */
    randomWhoStart() {
      const _random = parseInt(Math.random() * 2, 10)
      // console.log(_random);
      this.whoStart =
        _random === 0
          ? this.lang[this.curlang].first
          : this.lang[this.curlang].second
    },
    startRandom(count) {
      const _startRandomCount = count
      // this.reset();

      // reset
      for (let i = 0; i < this.showPanelGirls.length; i++) {
        for (let k = 0; k < this.showPanelGirls[i].list.length; k++) {
          this.showPanelGirls[i].list[k].isSelect = false
        }
      }
      this.resultGirls = []
      this.randomUseData = JSON.parse(JSON.stringify(this.showPanelGirls))

      let temp = {}
      if (this.isLockName) {
        temp = {
          ...this.showPanelGirls[this.lockNameIndex].list[
            this.lockNameSubIndex
          ]
        }
        this.showPanelGirls[this.lockNameIndex].list[
          this.lockNameSubIndex
        ].isSelect = true
        this.randomUseData.splice(this.lockNameIndex, 1)
        count--
      }
      for (let i = 0; i < count; i++) {
        this.getRandomGirlItem()
      }
      if (this.isLockName && temp) {
        this.resultGirls.unshift(temp)
      }
      if (!this.isOldVer && !this.isQuick && _startRandomCount <= 2) {
        //显示组卡按钮（不能是第二幕选项，不能是老虎机选项，并且随机女神数量为2）
        this.isShowBeGroupBtn = true
      }
    },
    getRandomGirlItem() {
      const newRandomList = []
      for (let i = 0; i < this.randomUseData.length; i++) {
        for (let k = 0; k < this.randomUseData[i].list.length; k++) {
          if (this.randomUseData[i].list[k].isInArea) {
            newRandomList.push(this.randomUseData[i].list[k])
          }
        }
      }

      const _random = parseInt(Math.random() * newRandomList.length, 10)
      // let _random = this.rand(newRandomList.length) - 1;
      const _data = newRandomList[_random]
      // console.log(_random, _data.name)
      for (let i = 0; i < this.randomUseData.length; i++) {
        const index = this.randomUseData[i].list[0].index
        if (index === _data.index) {
          this.showPanelGirls[index].list[_data.subIndex].isSelect = true
          this.resultGirls.push(
            this.showPanelGirls[index].list[_data.subIndex]
          )
          this.randomUseData.splice(i, 1)
          break
        }
      }
      return _data
    },
    /**
     * 解除锁定
     * @return {[type]} [description]
     */
    unLockBtn() {
      this.clearLock()
      this.showPanelGirls.map(item =>
        item.list.map(item2 => (item2.isSelect = false))
      )
      if (!this.isOldVer) {
        this.changePanelData.map(item =>
          item.list.map(item2 => (item2.isSelect = false))
        )
      }
      this.isShowResultGirls = false
      this.isShowBeGroupBtn = false
    },
    goToGroupInResultArea(item) {
      if (
        this.resultGirls.length > 2 &&
        this.shareGirls.length < 2 &&
        item.isResultSelect !== true
      ) {
        this.shareGirls.push(item.index + '+' + item.subIndex)
        this.groupCardData.push(
          this.showPanelGirls[item.index].list[item.subIndex]
        )
        item.isResultSelect = true

        if (this.shareGirls.length === 2) {
          this.groupCardData[0].isResultSelect = false
          this.groupCardData[1].isResultSelect = false
          this.isGoToBeGroup = true
        }
      }
    },
    /**
     * 去构筑
     * @return {[type]} [description]
     */
    btnGoToBeGroup() {
      this.isGoToBeGroup = true
      this.cardDetail = {}
      this.cardDetailInDeck = {}
      this.beGroupDeck = []

      const _groupCardData = []
      this.shareGirls = []

      this.groupCardData = this.showPanelGirls.forEach((item, index) => {
        item.list.forEach((item2, index2) => {
          if (item2.isSelect) {
            // console.log(item2)
            this.shareGirls.push(index + '+' + index2)
            item2.normal.map(item3 => (item3.selected = false))
            item2.special.map(item3 => (item3.selected = false))
            _groupCardData.push(JSON.parse(JSON.stringify(item2)))
          }
        })
      })
      this.groupCardData = _groupCardData

      // 赛季组合禁卡
      if (this.groupCardData.length === 2) {
        if (
          this.isChVer &&
          this.seasonVersion['cn'].forbidGroupCards &&
          this.seasonVersion['cn'].forbidGroupCards.length > 0
        ) {
          this.seasonVersion['cn'].forbidGroupCards.forEach(gitem => {
            if (
              +this.groupCardData[0].index === gitem.f1[0] &&
              +this.groupCardData[0].subIndex === gitem.f1[1] &&
              +this.groupCardData[1].index === gitem.f2[0] &&
              +this.groupCardData[1].subIndex === gitem.f2[1]
            ) {
              gitem.cards.forEach(citem => {
                this.groupCardData[citem[0]][citem[1]][
                  citem[2]
                ].isForbid = true
              })
            }
          })
        } else if (
          !this.isChVer &&
          this.seasonVersion['jp'].forbidGroupCards &&
          this.seasonVersion['jp'].forbidGroupCards.length > 0
        ) {
          this.seasonVersion['jp'].forbidGroupCards.forEach(gitem => {
            if (
              +this.groupCardData[0].index === gitem.f1[0] &&
              +this.groupCardData[0].subIndex === gitem.f1[1] &&
              +this.groupCardData[1].index === gitem.f2[0] &&
              +this.groupCardData[1].subIndex === gitem.f2[1]
            ) {
              gitem.cards.forEach(citem => {
                this.groupCardData[citem[0]][citem[1]][
                  citem[2]
                ].isForbid = true
              })
            }
          })
        }
      }

      // 中文版下的预加载卡图
      // if (this.lang[this.curlang].id === 'cn') {
      //   let loadImg = []
      //   this.groupCardData.forEach(el => {
      //     if (el.normal && el.normal.length > 0) {
      //       el.normal.forEach(cardItem => {
      //         loadImg.push(this.getImgUrl(cardItem))
      //       })
      //     }
      //     if (el.special && el.special.length > 0) {
      //       el.special.forEach(cardItem => {
      //         loadImg.push(this.getImgUrl(cardItem))
      //       })
      //     }
      //     if (el.extra && el.extra.length > 0) {
      //       el.extra.forEach(cardItem => {
      //         loadImg.push(this.getImgUrl(cardItem))
      //       })
      //     }
      //     if (el.changeExtra && el.changeExtra.length > 0) {
      //       el.changeExtra.forEach(cardItem => {
      //         loadImg.push(this.getImgUrl(cardItem))
      //       })
      //     }
      //   });
      //   console.log(loadImg)
      //   this.loadingImg(loadImg).done((postaction) => {
      //     console.log('done', postaction)
      //   })
      // }

      if (!this.isOldVer && !this.isChVer) {
        this.beGroupDeck = this.findDeck(
          this.groupCardData,
          1,
          this.groupCardData.length === 2
        )
      }
      // console.log(this.beGroupDeck)

      this.$forceUpdate()
      // console.log(this.groupCardData);
    },
    /**
     * 设置第二幕
     * @return {[type]} [description]
     */
    resetDefaultData() {
      if (this.isOldVer) {
        //第二幕
        this.showPanelGirls = JSON.parse(JSON.stringify(this.oldData))
      } else if (this.isChVer) {
        //中文新幕
        this.showPanelGirls = JSON.parse(JSON.stringify(this.chData))
        this.changePanelData = JSON.parse(JSON.stringify(this.chData))
      } else {
        this.showPanelGirls = JSON.parse(JSON.stringify(this.defaultData))
        this.changePanelData = JSON.parse(JSON.stringify(this.defaultData))
      }
    },
    /**
     * 重置
     * @return {[type]} [description]
     */
    reset() {
      this.isShowChangeGirl = false
      this.resetDefaultData()
      this.resultGirls = []

      if (!this.isShowA) {
        for (let i = 0; i < this.showPanelGirls.length; i++) {
          if (this.showPanelGirls[i].list.length > 1) {
            this.showPanelGirls[i].list.splice(
              1,
              this.showPanelGirls[i].list.length
            )
          }
        }
        for (let i = 0; i < this.changePanelData.length; i++) {
          if (this.changePanelData[i].list.length > 1) {
            this.changePanelData[i].list.splice(
              1,
              this.changePanelData[i].list.length
            )
          }
        }
      }
    },
    /**
     * 返回构筑界面（女神不变）按钮
     * @return {[type]} [description]
     */
    returnGroup() {
      this.cardDetail = {}
      this.cardDetailInDeck = {}
      this.isGoToBeGroup = true
      this.shareLink = ''
      this.isShowBeGroupBtn = true
      this.isShowResultGirls = true
      this.isCompleteGroup = false
      this.selectedNormalCount = 7
      this.selectedSpecialCount = 3
    },
    /**
     * 返回roll女神界面按钮
     * @return {[type]} [description]
     */
    btnClearGroup() {
      this.returnRoll()
    },
    /**
     * 返回roll女神界面
     * @return {[type]} [description]
     */
    returnRoll() {
      this.isGoToBeGroup = false
      this.reset()
      this.groupCardData = []
      this.cardDetail = {}
      this.lockCount = 0
      this.clearLock()
      this.isShowBeGroupBtn = false
      this.isShowResultGirls = false

      this.shareGirls = []
      this.isCompleteGroup = false
      this.selectedNormalCount = 0
      this.selectedSpecialCount = 0
      this.shareLink = ''
    },
    returnRoll2() {
      this.groupCardData = []
      this.resultGirls = []
      this.isShowBeGroupBtn = false
      this.isShowResultGirls = false
      this.showPanelGirls.map(item =>
        item.list.map(item2 => (item2.isSelect = false))
      )
      if (!this.isOldVer) {
        this.changePanelData.map(item =>
          item.list.map(item2 => (item2.isSelect = false))
        )
      }
    },
    getCardDetail(item, girlItem, cardIndex) {
      if (item.baseType === 'normal' && item.types.includes('attack')) {
        item.beStrong = 0
      }
      this.cardDetail = item
      console.log(
        '当前女神序号',
        `${(girlItem && girlItem.index) || 'null'}|${
          (girlItem && girlItem.subIndex) || 'null'
        }|${cardIndex || 'null'}`
      )
    },
    getCardDetailInDeck(item) {
      this.cardDetailInDeck = item
    },
    selectCard(item, cardtype, girlItem, cardIndex) {
      // console.log(this.shareGirls.length);
      if (!this.isCompleteGroup && this.shareGirls.length === 2) {
        if (
          cardtype === 'normal' &&
          item.selected &&
          this.selectedNormalCount >= 0
        ) {
          //已选中
          item.selected = false
          this.selectedNormalCount--
        } else if (cardtype === 'normal' && this.selectedNormalCount < 7) {
          item.selected = true
          this.selectedNormalCount++
        }
        if (
          cardtype === 'special' &&
          item.selected &&
          this.selectedSpecialCount >= 0
        ) {
          //已选中
          item.selected = false
          this.selectedSpecialCount--
        } else if (cardtype === 'special' && this.selectedSpecialCount < 3) {
          item.selected = true
          this.selectedSpecialCount++
        }
      }
      this.getCardDetail(item, girlItem, cardIndex)
    },
    /**
     * 卡组构筑追加校验
     */
    completeGroupExtraFilter() {
      if (!this.isOldVer) {
        for (const fitem in this.deckfilterMap) {
          // console.log(fitem, this.deckfilterMap[fitem])
          this.groupCardData.forEach(deck => {
            if (+deck.index === +fitem) {
              if (deck.extra && deck.extra.length > 0) {
                deck.extra.map(item => (item.selected = true))

                this.deckfilterMap[fitem].forEach(oItem => {
                  if (
                    deck[oItem.find] &&
                    deck[oItem.find].length > 0 &&
                    deck[oItem.find].filter(
                      item => item.selected && item.id === oItem.findFrom
                    ).length === 0
                  ) {
                    deck.extra
                      .filter(
                        item =>
                          item.id && item.id.indexOf(oItem.findFrom) > -1
                      )
                      .map(item => (item.selected = false))
                  }
                })
              }
              if (deck.changeExtra && deck.changeExtra.length > 0) {
                deck.changeExtra.map(item => (item.selected = true))

                this.deckfilterMap[fitem].forEach(oItem => {
                  if (
                    deck[oItem.find] &&
                    deck[oItem.find].length > 0 &&
                    deck[oItem.find].filter(
                      item => item.selected && item.id === oItem.findFrom
                    ).length === 0
                  ) {
                    console.log(oItem.findFrom)
                    if (+fitem === 15) {
                      deck.changeExtra
                        .filter(
                          item =>
                            item.extraFrom &&
                            item.extraFrom.indexOf(oItem.findFrom) > -1
                        )
                        .map(item => (item.selected = false))
                    } else {
                      deck.changeExtra
                        .filter(
                          item =>
                            item.id && item.id.indexOf(oItem.findFrom) > -1
                        )
                        .map(item => (item.selected = false))
                    }
                  }
                })
              }
              console.log(deck.extra, deck.changeExtra)
            }
          })
        }
      } else {
        this.groupCardData.forEach(deck => {
          if (deck.extra && deck.extra.length > 0) {
            deck.extra.map(item => (item.selected = true))
          }
          if (deck.changeExtra && deck.changeExtra.length > 0) {
            deck.changeExtra.map(item => (item.selected = true))
          }
        })
      }
    },
    checkGroup() {
      this.completeGroupExtraFilter()
      this.isCompleteGroup = true

      let _arr1 = []
      let _arr2 = []
      const _arr3 = []
      for (let i = 0; i < this.groupCardData.length; i++) {
        _arr1 = []
        _arr2 = []
        for (let j = 0; j < this.groupCardData[i].normal.length; j++) {
          if (
            this.groupCardData[i].normal[j].selected !== undefined &&
            this.groupCardData[i].normal[j].selected
          ) {
            _arr1.push(j)
          }
        }
        for (let j = 0; j < this.groupCardData[i].special.length; j++) {
          if (
            this.groupCardData[i].special[j].selected !== undefined &&
            this.groupCardData[i].special[j].selected
          ) {
            _arr2.push(j)
          }
        }
        _arr3.push(_arr1 + '+' + _arr2)
      }
      if (this.isOldVer) {
        //旧幕
        this.shareLink = `${this.shareUrl}?isOlder=1&lang=${
          this.lang[this.curlang].id
        }&isShow=1&girls=${this.shareGirls}&girlscard1=${_arr3[0]}&girlscard2=${
          _arr3[1]
        }`
      } else {
        //新幕
        this.shareLink = `${this.shareUrl}?ver=${
          this.isChVer
            ? `ch${seasonVersion['cn'].vername.replace(' Preview', '')}`
            : seasonVersion['jp'].vername.replace(' Preview', '')
        }&lang=${this.lang[this.curlang].id}&isShow=1&girls=${
          this.shareGirls
        }&girlscard1=${_arr3[0]}&girlscard2=${_arr3[1]}`
      }
    },
    /**
     * 分享卡组
     * @return {[type]} [description]
     */
    shareGroup() {
      const input = document.getElementById('shareIpt') // 获取隐藏input的dom
      input.select() // 选中文本
      document.execCommand('copy') // 执行浏览器复制命令
    },
    /**
     * 获取牌类型
     * @param  {[type]} item [description]
     * @return {[type]}      [description]
     */
    getCardClass(item, isCheckExtra) {
      let _classname = ''
      if (item.types && item.types.length > 0) {
        _classname += item.types.join(' ')
      }
      if (item.isForbid !== undefined && item.isForbid) {
        _classname += ' forbid'
      }
      if (item.selected !== undefined && item.selected) {
        _classname += ' cur'
      }
      if (this.debug) {
        _classname += ' haspic'
      }
      return _classname
    },
    /**
     * 长短card type
     * @param  {[type]}  typeItem [description]
     * @param  {Boolean} isAll    [description]
     * @return {[type]}           [description]
     */
    getTypeName(typeItem, isAll) {
      isAll = isAll === undefined ? false : isAll
      /**
        攻撃  attack
        行動  action
        不定  variable
        対応  reaction
        全力  fullpower
        付与  enhance
       */
      const qstr = isAll ? 'type' : 'typeShort'
      const word = typeItem.charAt(0).toUpperCase() + typeItem.slice(1) //转换成首字母大写
      return this.lang[this.curlang][`${qstr}${word}`]
    },
    getImgUrl(item) {
      if (item !== undefined) {
        let _id = item.id
        _id = _id.replace(/\-/g, '_')
        return `../img/card/na_${_id}.png`
      }
      if (this.cardDetail && this.cardDetail.namejp) {
        let _id = this.cardDetail.id
        _id = _id.replace(/\-/g, '_')
        return `../img/card/na_${_id}.png`
      }
    },
    getImgUrlWill(item) {
      if (this.cardDetail && this.cardDetail.namejp) {
        let _id = this.cardDetail.id
        _id = _id.replace(/\-/g, '_')
        return `../img/card/na_${_id}_w.png`
      }
    },
    getIsShowCardPic(cardData) {
      return getIsShowCardPicIn(cardData, this.lang, this.curlang)
    },
    getCardKeyValInLang(item, val) {
      val = val === undefined ? 'name' : val
      if (this.isOldVer || (this.lang[this.curlang].id === 'cn' && item[val])) {
        return this.toChzh(item[val])
      } else if (this.lang[this.curlang].id === 'kr' && item[val + 'kr']) {
        return item[val + 'kr']
      } else if (this.lang[this.curlang].id === 'en' && item[val + 'en']) {
        return item[val + 'en']
      } else {
        return item[val + 'jp']
      }
    },
    onChangeBeStrong() {
      this.$forceUpdate()
    },
    getCanBeStrong(item) {
      if (this.isGoToBeGroup) {
        let showStrong = false
        if (this.groupCardData && this.groupCardData.length > 1) {
          showStrong = this.groupCardData.find(
            subItem => subItem.namejp === '金床'
          )
          // console.log(showStrong)
        }
        return (
          item &&
          showStrong &&
          item.baseType === 'normal' && // 是通常牌
          item.types.includes('attack') && // 是攻击牌
          !(item.id.indexOf('hagane') > -1) && // 不能是锤子
          !(item.id.indexOf('story') > -1) && // 不能是故事模式
          !(item.id.indexOf('na-c') > -1) && // 不能是连携卡
          !this.isOldVer // 不能是旧幕
        )
      }
      return false
    },
    getNewRange(cardItem, range) {
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
    },
    getNewDamage(cardItem, damage) {
      const _damageDefault = damage !== undefined ? damage : cardItem.damage
      // console.log(cardItem.damage);
      if (_damageDefault.indexOf('/') > -1) {
        const _damage = _damageDefault.split('/')
        // console.log(!isNaN(+ _damage[0]), !isNaN(+ _damage[0]), !isNaN(+ _damage[1]));

        if (!isNaN(+_damage[0])) {
          _damage[0] = parseInt(_damage[0]) + cardItem.beStrong
        }

        if (!isNaN(+_damage[1])) {
          _damage[1] = parseInt(_damage[1]) + (cardItem.beStrong - 1)
        }
        return _damage.join('/')
      }

      return _damageDefault
    },
    handleClickChangeGirlBtn() {
      this.isShowChangeGirl = !this.isShowChangeGirl
    },
    banThisGirl(curGirlItem) {
      this.showPanelGirls.forEach((aItem, aKey) => {
        aItem.list.forEach((item, key) => {
          item.isSelect = false
        })
      })
      this.clearLock()
      curGirlItem.isInArea = !curGirlItem.isInArea
      this.setChangeArea()
    },
    setChangeArea() {
      this.showPanelGirls = [...this.changePanelData]
      this.randomUseData = [...this.changePanelData]
    },
    resetArea() {
      this.reset()
    },
    selectedInArea(type) {
      this.clearLock()
      if (type === 'a') {
        this.changePanelData.forEach((aItem, aKey) => {
          aItem.list.forEach((item, key) => {
            if (key === 0) {
              item.isInArea = false
            } else {
              item.isInArea = true
            }
          })
        })
      } else if (type === 'a1') {
        this.changePanelData.forEach(aItem => {
          if (aItem.list[0] && aItem.list[0].name) {
            aItem.list[0].isInArea = false
          }
          if (aItem.list[1] && aItem.list[1].name) {
            aItem.list[1].isInArea = true
          }
          if (aItem.list[2] && aItem.list[2].name) {
            aItem.list[2].isInArea = false
          }
        })
      } else if (type === 'ss2') {
        if (this.isChVer) {
          this.changePanelData.forEach((aItem, aKey) => {
            aItem.list.forEach((item, key) => {
              if (key === 0 && aKey <= 17) {
                item.isInArea = true
              } else {
                item.isInArea = false
              }
            })
          })
        } else {
          this.changePanelData.forEach((aItem, aKey) => {
            aItem.list.forEach((item, key) => {
              if ((key === 0 && aKey <= 11) || aKey === 18 || aKey === 21) {
                item.isInArea = true
              } else {
                item.isInArea = false
              }
            })
          })
        }
      }
      this.$forceUpdate()
      this.setChangeArea()
      this.isShowChangeGirl = false
    },
    backtop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>


<style lang="scss">
@import "@/style/random.scss";
</style>
