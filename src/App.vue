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
          >第二幕&nbsp;</template
        >
        <template v-if="!isOldVer && !isReVer && showPanelIndex == 0"
          >新幕&nbsp;</template
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
          >,
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
                <CardItem
                  :isOldVer="isOldVer"
                  :curlang="curlang"
                  :isNaChVer="isNaChVer"
                  :isShowCardPic="isShowCardPic"
                  :getCardKeyValInLang="getCardKeyValInLang"
                  :getImgUrl="getImgUrl"
                  :getTypeName="getTypeName"
                  :item="cardItem"
                ></CardItem>
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
              :class="{ cur: isNaChVer }"
              v-if="!isOldVer && +curlang === 0"
            >
              <input type="checkbox" v-model="isNaChVer" />
              <span>新幕官中S8</span>
            </label>
            <label class="checkbox" :class="{ cur: isNaVer }" v-if="!isOldVer">
              <input type="checkbox" v-model="isNaVer" />
              <span>新幕S10-2</span>
            </label>
            <label class="checkbox" :class="{ cur: isReVer }" v-if="!isOldVer">
              <input type="checkbox" v-model="isReVer" />
              <span>再演</span>
            </label>
            <div class="msee"></div>
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
              @click="handleClickUnlockBtn()"
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
              @click="handleClickCancelRandom()"
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
                      :class="{ cur: isNaChVer }"
                      v-if="!isOldVer && +curlang === 0"
                    >
                      <input type="checkbox" v-model="isNaChVer" />
                      <span>新幕官中S8</span>
                    </label>
                    <label
                      class="checkbox"
                      :class="{ cur: isNaVer }"
                      v-if="!isOldVer"
                    >
                      <input type="checkbox" v-model="isNaVer" />
                      <span>新幕S10-2</span>
                    </label>
                    <label
                      class="checkbox"
                      :class="{ cur: isReVer }"
                      v-if="!isOldVer"
                    >
                      <input type="checkbox" v-model="isReVer" />
                      <span>再演</span>
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
                    <button
                      class="btn btn-xs"
                      @click="selectedInArea('a')"
                      v-if="isShowA"
                    >
                      ALL A
                    </button>
                    <button
                      class="btn btn-xs"
                      v-if="isReVer"
                      @click="selectedInArea('ss2')"
                    >
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
                  <CardItem
                    :isOldVer="isOldVer"
                    :curlang="curlang"
                    :isNaChVer="isNaChVer"
                    :isShowCardPic="isShowCardPic"
                    :getCardKeyValInLang="getCardKeyValInLang"
                    :getImgUrl="getImgUrl"
                    :getTypeName="getTypeName"
                    :item="cardItem"
                  ></CardItem>
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
                  <CardItem
                    :isOldVer="isOldVer"
                    :curlang="curlang"
                    :isNaChVer="isNaChVer"
                    :isShowCardPic="isShowCardPic"
                    :getCardKeyValInLang="getCardKeyValInLang"
                    :getImgUrl="getImgUrl"
                    :getTypeName="getTypeName"
                    :item="cardItem"
                  ></CardItem>
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
                    <CardItem
                      :isOldVer="isOldVer"
                      :curlang="curlang"
                      :isNaChVer="isNaChVer"
                      :isShowCardPic="isShowCardPic"
                      :getCardKeyValInLang="getCardKeyValInLang"
                      :getImgUrl="getImgUrl"
                      :getTypeName="getTypeName"
                      :item="cardItem"
                    ></CardItem>
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
                      <CardItem
                        :isOldVer="isOldVer"
                        :curlang="curlang"
                        :isNaChVer="isNaChVer"
                        :isShowCardPic="isShowCardPic"
                        :getCardKeyValInLang="getCardKeyValInLang"
                        :getImgUrl="getImgUrl"
                        :getTypeName="getTypeName"
                        :item="cardItem"
                      ></CardItem>
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
                        <CardItem
                          :isOldVer="isOldVer"
                          :curlang="curlang"
                          :isNaChVer="isNaChVer"
                          :isShowCardPic="isShowCardPic"
                          :getCardKeyValInLang="getCardKeyValInLang"
                          :getImgUrl="getImgUrl"
                          :getTypeName="getTypeName"
                          :item="cardItem"
                        ></CardItem>
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
                    <CardItem
                      :isOldVer="isOldVer"
                      :curlang="curlang"
                      :isNaChVer="isNaChVer"
                      :isShowCardPic="isShowCardPic"
                      :getCardKeyValInLang="getCardKeyValInLang"
                      :getImgUrl="getImgUrl"
                      :getTypeName="getTypeName"
                      :item="cardItem"
                    ></CardItem>
                  </div>
                  <div
                    class="card-list__item card-list__item--extra"
                    :class="getCardClass(cardItem, 1)"
                    :data-extrafrom="cardItem.extraFrom"
                    v-for="(cardItem, cardIndex) in item.extra"
                    @click="getCardDetail(cardItem, item, cardIndex)"
                    v-bind:key="cardIndex"
                  >
                    <CardItem
                      :isOldVer="isOldVer"
                      :curlang="curlang"
                      :isNaChVer="isNaChVer"
                      :isShowCardPic="isShowCardPic"
                      :getCardKeyValInLang="getCardKeyValInLang"
                      :getImgUrl="getImgUrl"
                      :getTypeName="getTypeName"
                      :item="cardItem"
                    ></CardItem>
                  </div>
                  <div
                    class="card-list__item card-list__item--extra"
                    :data-extrafrom="cardItem.extraFrom"
                    :class="getCardClass(cardItem, 1)"
                    v-for="(cardItem, cardIndex) in item.changeExtra"
                    @click="getCardDetail(cardItem, item, cardIndex)"
                    v-bind:key="cardIndex"
                  >
                    <CardItem
                      :isOldVer="isOldVer"
                      :curlang="curlang"
                      :isNaChVer="isNaChVer"
                      :isShowCardPic="isShowCardPic"
                      :getCardKeyValInLang="getCardKeyValInLang"
                      :getImgUrl="getImgUrl"
                      :getTypeName="getTypeName"
                      :item="cardItem"
                    ></CardItem>
                  </div>
                  <div
                    class="card-list__item"
                    :class="getCardClass(cardItem)"
                    v-for="(cardItem, cardIndex) in item.poison"
                    @click="getCardDetail(cardItem, item, cardIndex)"
                    v-bind:key="cardIndex"
                  >
                    <CardItem
                      :isOldVer="isOldVer"
                      :curlang="curlang"
                      :isNaChVer="isNaChVer"
                      :isShowCardPic="isShowCardPic"
                      :getCardKeyValInLang="getCardKeyValInLang"
                      :getImgUrl="getImgUrl"
                      :getTypeName="getTypeName"
                      :item="cardItem"
                    ></CardItem>
                  </div>
                  <div
                    class="card-list__item"
                    :class="getCardClass(cardItem)"
                    v-for="(cardItem, cardIndex) in item.transform"
                    @click="getCardDetail(cardItem, item, cardIndex)"
                    v-bind:key="cardIndex"
                  >
                    <CardItem
                      :isOldVer="isOldVer"
                      :curlang="curlang"
                      :isNaChVer="isNaChVer"
                      :isShowCardPic="isShowCardPic"
                      :getCardKeyValInLang="getCardKeyValInLang"
                      :getImgUrl="getImgUrl"
                      :getTypeName="getTypeName"
                      :item="cardItem"
                    ></CardItem>
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
              <button class="btn btn-small" @click="handleClickReturnGroup()">
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
              <button
                class="btn btn-small btn-cancel"
                @click="handleClickReturnRoll()"
              >
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
                    !isOldVer &&
                    !isReVer &&
                    getIsShowCardPic(cardDetail) &&
                    isShowCardPic
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
              <template
                v-if="!isOldVer && !isReVer && getIsShowCardPic(cardDetail)"
              >
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
                :curlang="curlang"
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
              !isOldVer && !isNaChVer && beGroupDeck && beGroupDeck.length > 0
            "
            style="max-width: 1024px; margin: 0 auto"
          >
            <DeckCount
              :curlang="curlang"
              :deckSum="deckSum"
              :deckcount="beGroupDeck.length"
            ></DeckCount>
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
                  <DeckTitle :item="item" :curlang="curlang"></DeckTitle>
                </div>
              </div>
              <div class="allcards__content" :class="{ hide: !item.isSelect }">
                <DeckInfo :item="item" :curlang="curlang"></DeckInfo>
                <div class="cgroup cgroup--old">
                  <div class="card-wrap">
                    <div class="card-list">
                      <template
                        v-for="(cardItem, cardIndex) in item.deck.normal"
                        v-bind:key="cardIndex"
                      >
                        <div
                          class="card-list__item normal"
                          :class="getCardClass(cardItem)"
                          @click="getCardDetailInDeck(cardItem)"
                        >
                          <CardItem
                            :isOldVer="isOldVer"
                            :curlang="curlang"
                            :isNaChVer="isNaChVer"
                            :isShowCardPic="isShowCardPic"
                            :getCardKeyValInLang="getCardKeyValInLang"
                            :getImgUrl="getImgUrl"
                            :getTypeName="getTypeName"
                            :item="cardItem"
                          ></CardItem>
                        </div>
                        <div v-if="cardIndex === 2" class="msee"></div>
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
                        <CardItem
                          :isOldVer="isOldVer"
                          :curlang="curlang"
                          :isNaChVer="isNaChVer"
                          :isShowCardPic="isShowCardPic"
                          :getCardKeyValInLang="getCardKeyValInLang"
                          :getImgUrl="getImgUrl"
                          :getTypeName="getTypeName"
                          :item="cardItem"
                        ></CardItem>
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
                          <CardItem
                            :isOldVer="isOldVer"
                            :curlang="curlang"
                            :isNaChVer="isNaChVer"
                            :isShowCardPic="isShowCardPic"
                            :getCardKeyValInLang="getCardKeyValInLang"
                            :getImgUrl="getImgUrl"
                            :getTypeName="getTypeName"
                            :item="cardItem"
                          ></CardItem>
                        </div>
                        <div
                          class="card-list__item"
                          :class="getCardClass(cardItem, 1)"
                          :data-extrafrom="cardItem.extraFrom"
                          v-for="(cardItem, cardIndex) in item.deck.extra"
                          @click="getCardDetailInDeck(cardItem)"
                          v-bind:key="cardIndex"
                        >
                          <CardItem
                            :isOldVer="isOldVer"
                            :curlang="curlang"
                            :isNaChVer="isNaChVer"
                            :isShowCardPic="isShowCardPic"
                            :getCardKeyValInLang="getCardKeyValInLang"
                            :getImgUrl="getImgUrl"
                            :getTypeName="getTypeName"
                            :item="cardItem"
                          ></CardItem>
                        </div>
                        <div
                          class="card-list__item"
                          :class="getCardClass(cardItem)"
                          v-for="(cardItem, cardIndex) in item.deck.poison"
                          @click="getCardDetailInDeck(cardItem)"
                          v-bind:key="cardIndex"
                        >
                          <CardItem
                            :isOldVer="isOldVer"
                            :curlang="curlang"
                            :isNaChVer="isNaChVer"
                            :isShowCardPic="isShowCardPic"
                            :getCardKeyValInLang="getCardKeyValInLang"
                            :getImgUrl="getImgUrl"
                            :getTypeName="getTypeName"
                            :item="cardItem"
                          ></CardItem>
                        </div>
                        <div
                          class="card-list__item"
                          :class="getCardClass(cardItem)"
                          v-for="(cardItem, cardIndex) in item.deck.transform"
                          @click="getCardDetailInDeck(cardItem)"
                          v-bind:key="cardIndex"
                        >
                          <CardItem
                            :isOldVer="isOldVer"
                            :curlang="curlang"
                            :isNaChVer="isNaChVer"
                            :isShowCardPic="isShowCardPic"
                            :getCardKeyValInLang="getCardKeyValInLang"
                            :getImgUrl="getImgUrl"
                            :getTypeName="getTypeName"
                            :item="cardItem"
                          ></CardItem>
                        </div>
                        <div
                          class="card-list__item"
                          :data-extrafrom="cardItem.extraFrom"
                          :class="getCardClass(cardItem, 1)"
                          v-for="(cardItem, cardIndex) in item.deck.changeExtra"
                          @click="getCardDetailInDeck(cardItem)"
                          v-bind:key="cardIndex"
                        >
                          <CardItem
                            :isOldVer="isOldVer"
                            :curlang="curlang"
                            :isNaChVer="isNaChVer"
                            :isShowCardPic="isShowCardPic"
                            :getCardKeyValInLang="getCardKeyValInLang"
                            :getImgUrl="getImgUrl"
                            :getTypeName="getTypeName"
                            :item="cardItem"
                          ></CardItem>
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
              !isNaChVer &&
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
        <PageCardList
          :curlang="curlang"
          :isOldVer="isOldVer"
          v-model:isNaChVer="isNaChVer"
          v-model:isNaVer="isNaVer"
          v-model:isReVer="isReVer"
          v-model:isShowA="isShowA"
          :showPanelGirls="showPanelGirls"
          :getCardKeyValInLang="getCardKeyValInLang"
          :qiyuanGirls="qiyuanGirls"
          :seasonGirls="seasonGirls"
          :getTypeName="getTypeName"
          :getCanBeStrong="getCanBeStrong"
        />
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
          :getCardKeyValInLang="getCardKeyValInLang"
          :tabChangedInChild="tabChangedInChild"
          :getTypeName="getTypeName"
          :getCardDetail="getCardDetail"
          :getCanBeStrong="getCanBeStrong"
          :isOldVer="isOldVer"
          :isNaChVer="isNaChVer"
          :isShowCardPic="isShowCardPic"
          :getImgUrl="getImgUrl"
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
              <template v-for="(firstItem, fristIndex) in naData">
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
                    >官方FAQ（纯日文）<span>(最后导入时间：2026-02-18)</span></a
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
                  <span class="faq-about__date">Last Updated: 2026-02-18</span>
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
                    :curlang="curlang"
                    v-for="(item, key) in litem.list"
                    :item="item"
                    v-bind:key="key"
                  ></FaqItem>
                </div>
              </div>
            </div>
          </template>
          <template v-for="(firstItem, fristIndex) in naData">
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
                    :curlang="curlang"
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
          :randomGetDeck="randomGetDeck"
          :getCardKeyValInLang="getCardKeyValInLang"
          :handleClickCancelDeckAvatar="handleClickCancelDeckAvatar"
          :handleClickResetDeckAvatar="handleClickResetDeckAvatar"
          :tabChangedInChild="tabChangedInChild"
          :getTypeName="getTypeName"
          :selectedCancel="selectedCancel"
          :deckSortBy="deckSortBy"
          :getCardDetailInDeck="getCardDetailInDeck"
          :selectedDeckShow="selectedDeckShow"
          :getCanBeStrong="getCanBeStrong"
          :isOldVer="isOldVer"
          :isNaChVer="isNaChVer"
          :isShowCardPic="isShowCardPic"
          :getImgUrl="getImgUrl"
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
          :getCardKeyValInLang="getCardKeyValInLang"
          :getTypeName="getTypeName"
          :getCanBeStrong="getCanBeStrong"
          :isOldVer="isOldVer"
          :isNaChVer="isNaChVer"
          :isShowCardPic="isShowCardPic"
          :getImgUrl="getImgUrl"
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
      :isNaChVer="isNaChVer"
      :isNaVer="isNaVer"
      :isReVer="isReVer"
      :curlang="curlang"
      :cardSum="cardSum"
      :seasonVersion="seasonVersion"
      :showPanelIndex="showPanelIndex"
      :defaultData="defaultData"
      :naChData="naChData"
      :naData="naData"
      :getCardKeyValInLang="getCardKeyValInLang"
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
  getUrlQuery,
  paintRange,
  findAllRangeFromCards,
  sortInObjectOptions,
  getCounts,
  get,
  formatTime,
  unique,
  filterKeywords
} from './utils/export.js'

import sakuraDataNa from './js/sub/sakura/carddata/sakura-s10-2'
import sakuraData from './js/sub/sakura/carddata/re/sakura-s1'
import sakuraDataCh from './js/sub/sakura/carddata/sakura-s8-ch'
import sakuraDataOldVer from './js/sub/sakura/carddata/sakura-old'

import PageFooter from './components/PageFooter/index.vue'
import CardItem from './components/CardItem/CardIndex.vue'
import CardDetail from './components/CardDetail/index.vue'
import GirlRange from './components/GirlRange/index.vue'
import FaqItem from './components/FaqItem/index.vue'
import DeckCount from './components/Deck/DeckCount.vue'
import DeckTitle from './components/Deck/DeckTitle.vue'
import DeckInfo from './components/Deck/DeckInfo.vue'
import PageDecks from './pages/Decks.vue'
import PageOtherPlay from './pages/OtherPlay.vue'
import PageCardList from './pages/CardList.vue'
import PageScc from './pages/Scc.vue'
import configLang from './config/lang.js'
import configNav from './config/nav.js'
import {
  initBaseData,
  initChangeCardsData,
  initSakuraCMDATA,
  addSSTagInCards,
  mergeMissingGirls
} from './utils/index.js'
import { toChzh, toChsim } from './utils/lang.js'
import {
  getIsShowCardPicIn,
  getCardClass,
  getImgUrl,
  getImgUrlWill,
  getDeckDetailForLink
} from './utils/cards.js'
const {
  sakuraStoryData,
  sakuraWithData,
  sakuraOtherData,
  sakuraCMData,
  sakuraPlayerDeckData,
  sakuraChangeCardsData
} = window.sakuraOtherData
const seasonVersion = window.seasonVersion
let { defaultData, naChData, naData } = initBaseData(
  sakuraData,
  sakuraDataCh,
  sakuraDataNa
)

// 赛季修订卡相关
const SCCDATA = initChangeCardsData(sakuraChangeCardsData)
const nSakuraChangeCardsData = SCCDATA.sakuraChangeCardsData

// 标记赛季变更卡
// const noMatchSSCards = addSSTagInCards(defaultData, seasonVersion['jp'])
const noMatchSSCards = addSSTagInCards(naData, seasonVersion['jp'])
const noMatchSSCardsCh = addSSTagInCards(naChData, seasonVersion['cn'])
// console.log(noMatchSSCards, noMatchSSCardsCh)

//格式化新幕数据
naChData = formatDefaultCardData(naChData)
naData = formatDefaultCardData(naData, SCCDATA.allChangeCards.resultList)
defaultData = formatDefaultCardData(defaultData)
//格式化旧幕数据
const oldData = formatDefaultCardData(sakuraDataOldVer)

if (
  // 起源标注
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

// 旧幕的牌数
const oldDataSum = getCardSum(oldData)
oldDataSum.other += 3
console.log('旧幕牌数，other:伞面，5毒，3transform，2集中力', oldDataSum)
// 再演的牌数
let cardSum = getCardSum(defaultData)
cardSum.normal-- // 合奏减1
cardSum.other += 12
console.log(
  '再演牌数，other:伞面，5毒，6transform，岚之力，2集中力，7张电子追加，1张空想树',
  cardSum
)

const naChDataSum = getCardSum(naChData) // 新幕中文的牌数
naChDataSum.other += 18
console.log(
  '新幕中文牌数，other:伞面，5毒，6transform，4兵牌，岚之力，2集中力，6幕任务，2潜水，5伪证，1镜aa1任务牌',
  naChDataSum
)
const naDataSum = getCardSum(naData) // 新幕的牌数
naDataSum.normal-- // 合奏减1
naDataSum.other += 25
console.log(
  '新幕牌数，other:伞面，5毒，6transform，4兵牌，岚之力，2集中力，6幕任务，2潜水，5伪证，1镜aa1任务牌，7张电子追加',
  naDataSum
)
cardSum = {
  rejp: cardSum,
  ch: naChDataSum,
  jp: naDataSum
}

const fnCopyCards = wantData => {
  //a旗复制原来的卡
  if (wantData[13] && wantData[13].namejp === '旗' && wantData[13].list[1]) {
    wantData[13].list[1].changeExtra.unshift(wantData[13].list[0].extra[4])
    wantData[13].list[1].changeExtra.unshift(wantData[13].list[0].extra[3])
  }
  //a衣复制原来的extra
  if (wantData[21] && wantData[21].list[1]) {
    wantData[21].list[1].changeExtra.unshift(wantData[21].list[0].extra[0])
    wantData[21].list[1].changeExtra.unshift(wantData[21].list[0].extra[1])
  }

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
  if (
    wantData[15] &&
    wantData[15].namejp === 'ヤツハ' &&
    wantData[15].list[1]
  ) {
    wantData[15].list[1].special = [wantData[15].list[1].special[3]]
  }
  // aa1镜去掉s1-s3 复制a1镜的n1-n6的ex
  if (
    wantData[15] &&
    wantData[15].namejp === 'ヤツハ' &&
    wantData[15].list[2]
  ) {
    wantData[15].list[2].special = [wantData[15].list[2].special[3]]
    wantData[15].list[2].changeExtra = [
      ...wantData[15].list[2].changeExtra,
      ...wantData[15].list[1].changeExtra.slice(0, 6)
    ]
  }
}
fnCopyCards(naData)
fnCopyCards(naChData)
fnCopyCards(defaultData)

// 补充标记赛季变更卡
addSSTagInCards(
  naData,
  {
    changeCards: noMatchSSCards,
    vername: seasonVersion['jp'].vername
  },
  1
)
addSSTagInCards(
  naChData,
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
      if (naChData[item[0]] && naChData[item[0]].list[item[1]]) {
        naChData[item[0]].list[item[1]][item[2]][item[3]].isForbid = true
      }
    })
  }
  if (
    seasonVersion['jp'].forbidCards &&
    seasonVersion['jp'].forbidCards.length > 0
  ) {
    seasonVersion['jp'].forbidCards.forEach(item => {
      if (naData[item[0]] && naData[item[0]].list[item[1]]) {
        naData[item[0]].list[item[1]][item[2]][item[3]].isForbid = true
      }
    })
  }
}

// 获取人物攻击距离
naChData = paintRange(naChData)
naData = paintRange(naData)
defaultData = paintRange(defaultData)

defaultData = mergeMissingGirls(defaultData, naData)

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
    PageCardList,
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
      isNaChVer: false, //中文版本
      isNaVer: false,
      isReVer: true,
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
      naData: naData,
      oldData: oldData,
      naChData: naChData,
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
          ss: window.sakuraOtherData.sakuraPlayerDeckDataAnySeason,
          all: [],
          normal: [],
          special: []
        }
      ],
      deckAvatarListBackup: [],

      showPanelIndex: 0,
      panelTab: configNav,

      lang: configLang,
      curlang: 0,

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
        // this.isNaChVer = this.isNaChVer;
        this.resetDefaultData()
      }

      this.searchTypeShowWord = {
        all: 'ALL',
        attack: configLang[this.curlang].typeAttack,
        action: configLang[this.curlang].typeAction,
        reaction: configLang[this.curlang].typeReaction,
        fullpower: configLang[this.curlang].typeFullpower,
        enhance: configLang[this.curlang].typeEnhance
      }
      this.searchTypeOptions = [
        {
          value: 'all',
          label: 'ALL'
        },
        {
          value: 'attack',
          label: configLang[this.curlang].typeAttack
        },
        {
          value: 'action',
          label: configLang[this.curlang].typeAction
        },
        {
          value: 'reaction',
          label: configLang[this.curlang].typeReaction
        },
        {
          value: 'fullpower',
          label: configLang[this.curlang].typeFullpower
        },
        {
          value: 'enhance',
          label: configLang[this.curlang].typeEnhance
        }
        // {
        //   value: 'variable',
        //   label: configLang[this.curlang].typeVariable
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
    isNaChVer(val) {
      if (val) {
        this.isOldVer = false
        this.isNaVer = false
        this.isReVer = false
      }
      this.clearLock()
      this.resetDefaultData()
      this.isShowResultGirls = false
    },
    isNaVer(val) {
      if (val) {
        this.isOldVer = false
        this.isNaChVer = false
        this.isReVer = false
      }
      this.clearLock()
      this.resetDefaultData()
      this.isShowResultGirls = false
    },
    isReVer(val) {
      if (val) {
        this.isOldVer = false
        this.isNaChVer = false
        this.isNaVer = false
      }
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
                date: formatTime(new Date(), 'YYYY-MM-DD'),
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

    if (getUrlQuery('ver') !== null && getUrlQuery('ver') !== '') {
      console.log('...share link ver', getUrlQuery('ver'))
      if (getUrlQuery('ver').indexOf('ch') > -1) {
        this.isNaChVer = true
        this.isReVer = false
        this.resetDefaultData()
      }
      if (
        getUrlQuery('ver').indexOf('ch') < 0 &&
        getUrlQuery('ver').indexOf('re') < 0
      ) {
        this.isNaVer = true
        this.isReVer = false
        this.resetDefaultData()
      }
    }

    //旧幕卡组分享链接
    //?isOlder=1&isShow=1&girls=0+0,11+0&girlscard1=1,2,3+0,1,2&girlscard2=0,1,2,3+
    if (+getUrlQuery('isOlder') === 1) {
      this.isOldVer = true
      this.isReVer = false
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
    if (this.sakuraCMData && this.naData) {
      this.sakuraCMData = initSakuraCMDATA(this.sakuraCMData, this.naData)
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
        const { deck, newGroupCardData, ver } = getDeckDetailForLink(
          item.decklink,
          this.naData,
          this.defaultData,
          this.deckfilterMap
        )

        item.deck = deck
        item.groupCardData = newGroupCardData
        item.isSelect = false
        item.id = index
        item.isSOldVer = true
        if (
          ver.toUpperCase().indexOf('RE') > -1 &&
          ver.toUpperCase().indexOf('PRE') < 0
        ) {
          item.ver = `再演${ver.toUpperCase().replace('RE', '')}`
          item.isSOldVer = !(
            ver
              .toUpperCase()
              .indexOf(
                seasonVersion['rejp'].verlink.toUpperCase().replace('RE', '')
              ) > -1
          )
        } else {
          item.ver =
            ver.toUpperCase().indexOf('CH') > -1
              ? `新幕官中${ver.toUpperCase().replace('CH', '')}`
              : `新幕${ver.toUpperCase()}`
        }
        item.shortVer = item.ver.replace('官方中文', '')
        item.isSeason =
          !item.isSOldVer &&
          qiyuanGirls.default.includes(item.groupCardData[0].name) &&
          qiyuanGirls.default.includes(item.groupCardData[1].name)
        item.isTop1 =
          item.name.indexOf('上位') > -1 ||
          item.name.indexOf('冠軍') > -1 ||
          item.name.indexOf('冠军') > -1

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

          // console.log(item.shortVer, this.statisticsDeckCards[1].ss)
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
    },
    selectedDeckShowInGroup(index) {
      const tempSelect = this.beGroupDeck[index].isSelect
      this.beGroupDeck.forEach(item => {
        item.isSelect = false
      })
      this.beGroupDeck[index].isSelect = !tempSelect
      this.cardDetailInDeck = {}
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
            if (item.namejp.indexOf('槍') < 0 && item.subIndex === 0) {
              item.isSelect = true
            } else if (item.namejp.indexOf('槍') > -1) {
              item.isSelect = true
            }
          })
        } else if (count === 'alla') {
          this.deckAvatarList.forEach(item => {
            if (item.namejp.indexOf('槍') < 0 && item.subIndex !== 0) {
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
            this.qiyuanGirls.default.includes(item.name)
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
      return toChzh(cc)
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
      this.inputKw = ''
      this.searchResult = []
      this.cardDetail = {}
    },
    /**
     * inputSearch 输入框搜索
     */
    inputSearch() {
      this.cardDetail = {}
      if (this.inputKw !== '') {
        let keywords = this.inputKw.toLowerCase()
        keywords = filterKeywords(this.inputKw)
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
                (_target.name.indexOf(toChsim(keywrodItem)) > -1 ||
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
              //   console.log(_target.text.indexOf(toChsim(keywords)))
              //   console.log(_target.textjp.indexOf(keywords))
              //   console.log(_target.text, keywords, toChsim(keywords))
              // }
              if (
                (_target.name === keywords ||
                  _target.namejp === keywords ||
                  _target.name.indexOf(keywords) > -1 ||
                  _target.name.indexOf(toChsim(keywords)) > -1 ||
                  _target.namejp.indexOf(keywords) > -1 ||
                  _target.text.indexOf(keywords) > -1 ||
                  _target.text.indexOf(toChsim(keywords)) > -1 ||
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
      let orginData = this.defaultData
      if (this.isNaChVer) {
        orginData = this.naChData
      } else if (this.isNaVer) {
        orginData = this.naData
      }
      // console.log(keywords)
      if (
        !this.isNaChVer &&
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
        this.isNaChVer &&
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
        result = unique(result) // 根据id去重
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
        result = unique(result) // 根据id去重

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
      this.isFirstGetResult = false
      this.isShowResultGirls = false
      this.isShowBeGroupBtn = count === 2 ? true : false
      this.groupCardData = []
      this.shareGirls = []
      if (!this.isStart) {
        //开始抽奖
        this.isStart = true
        this.getCount = count
        if (!this.isQuick) {
          this.isShowResultGirls = true
        }
        if (this.isQuick) {
          window.intA = setInterval(function () {
            this.startRandom(count)
          }, 100)
        } else {
          this.startRandom(count)
          this.afterStopShowResult()
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
          ? configLang[this.curlang].first
          : configLang[this.curlang].second
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
      const _data = newRandomList[_random]
      // console.log(newRandomList, _random, _data.name)
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
    handleClickUnlockBtn() {
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
          this.isNaChVer &&
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
          this.isNaVer &&
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
      // if (configLang[this.curlang].id === 'cn') {
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

      // 琵琶&笛组合时，《合奏》只显示1张
      if (!this.isOldVer && this.groupCardData.length > 1) {
        if (
          this.groupCardData[0].index === 1 &&
          this.groupCardData[0].subIndex === 1 &&
          this.groupCardData[1].index === 3 &&
          this.groupCardData[1].subIndex === 1 &&
          this.groupCardData[1].normal[3].id.indexOf(
            '02/04-saine/tokoyo-a1-n-1/4'
          ) > -1
        ) {
          this.groupCardData[1].normal.splice(3, 1)
        }
      }

      if (!this.isOldVer && !this.isNaChVer) {
        this.beGroupDeck = this.findDeck(
          this.groupCardData,
          1,
          this.groupCardData.length === 2
        )
      }
      // console.log(this.beGroupDeck)

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
      } else if (this.isNaChVer) {
        //中文新幕
        this.showPanelGirls = JSON.parse(JSON.stringify(this.naChData))
        this.changePanelData = JSON.parse(JSON.stringify(this.naChData))
      } else if (this.isNaVer) {
        //新幕
        this.showPanelGirls = JSON.parse(JSON.stringify(this.naData))
        this.changePanelData = JSON.parse(JSON.stringify(this.naData))
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
          if (
            this.showPanelGirls[i].namejp !== 'イヌル' &&
            this.showPanelGirls[i].list.length > 1
          ) {
            this.showPanelGirls[i].list.splice(
              1,
              this.showPanelGirls[i].list.length
            )
          }
        }
        for (let i = 0; i < this.changePanelData.length; i++) {
          if (
            this.showPanelGirls[i].namejp !== 'イヌル' &&
            this.changePanelData[i].list.length > 1
          ) {
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
    handleClickReturnGroup() {
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
      this.handleClickReturnRoll()
    },
    /**
     * 返回roll女神界面
     * @return {[type]} [description]
     */
    handleClickReturnRoll() {
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
    handleClickCancelRandom() {
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
        `[${girlItem.index}, ${girlItem.subIndex}, '${item.baseType}', ${cardIndex}]`
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
          configLang[this.curlang].id
        }&isShow=1&girls=${this.shareGirls}&girlscard1=${_arr3[0]}&girlscard2=${
          _arr3[1]
        }`
      } else {
        //新幕
        let ver = seasonVersion['rejp'].verlink.replace(' Preview', 'pre')
        if (!this.isReVer) {
          ver = this.isNaChVer
            ? `ch${seasonVersion['cn'].vername.replace(' Preview', 'pre')}`
            : seasonVersion['jp'].vername.replace(' Preview', 'pre')
        }
        this.shareLink = `${this.shareUrl}?ver=${ver}&lang=${
          configLang[this.curlang].id
        }&isShow=1&girls=${this.shareGirls}&girlscard1=${_arr3[0]}&girlscard2=${
          _arr3[1]
        }`
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
     */
    getCardClass(item) {
      return getCardClass(item)
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
      return configLang[this.curlang][`${qstr}${word}`]
    },
    getImgUrl(cardItem) {
      return getImgUrl(cardItem, this.cardDetail)
    },
    getImgUrlWill() {
      return getImgUrlWill(this.cardDetail)
    },
    getIsShowCardPic(cardData) {
      return getIsShowCardPicIn(cardData, configLang, this.curlang)
    },
    getCardKeyValInLang(item, val) {
      val = val === undefined ? 'name' : val
      if (
        this.isOldVer ||
        (configLang[this.curlang].id === 'cn' && item[val])
      ) {
        return this.toChzh(item[val])
      } else if (configLang[this.curlang].id === 'kr' && item[val + 'kr']) {
        return item[val + 'kr']
      } else if (configLang[this.curlang].id === 'en' && item[val + 'en']) {
        return item[val + 'en']
      } else {
        return item[val + 'jp']
      }
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
            if (key === 0 || aItem.namejp === 'イヌル') {
              item.isInArea = false
            } else {
              item.isInArea = true
            }
          })
        })
      } else if (type === 'ss2') {
        if (this.isNaChVer) {
          this.changePanelData.forEach((aItem, aKey) => {
            aItem.list.forEach((item, key) => {
              if (key === 0 && this.qiyuanGirls.ch.includes(item.name)) {
                item.isInArea = true
              } else {
                item.isInArea = false
              }
            })
          })
        } else {
          this.changePanelData.forEach((aItem, aKey) => {
            aItem.list.forEach((item, key) => {
              if (key === 0 && this.qiyuanGirls.default.includes(item.name)) {
                item.isInArea = true
              } else {
                item.isInArea = false
              }
            })
          })
        }
      }
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