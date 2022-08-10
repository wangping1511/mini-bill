<script setup lang="ts">
import Taro from '@tarojs/taro'
import { ref } from 'vue'

definePageConfig({
  navigationStyle: 'custom',
  navigationBarBackgroundColor: '#2563eb',
  enablePullDownRefresh: true,
  backgroundColor: '#2563eb',
  backgroundColorBottom: '#eaecef',
})
const list = ref(5)

/**
 * 自定义顶部导航栏
 */
const navbarHeight = ref(0)
const menuButtonHeight = ref(0)
const titlePaddingTop = ref(0)
Taro.getSystemInfo().then((res) => {
  const statusBarHeight = res.statusBarHeight || 0
  const { height, top } = Taro.getMenuButtonBoundingClientRect()
  navbarHeight.value = statusBarHeight + height + (top - statusBarHeight) * 2
  titlePaddingTop.value = top
  menuButtonHeight.value = height
})

Taro.usePullDownRefresh(() => {
  Taro.showLoading({
    title: '刷新中',
  })
  setTimeout(() => {
    Taro.hideLoading()
    Taro.stopPullDownRefresh()
  }, 500)
})

Taro.useReachBottom(() => {
  setTimeout(() => {
    list.value += 5
  }, 500)
})

const visible = ref(false)
function openPopup() {
  visible.value = true
}

function onClickOverlay() {
  visible.value = false
}

function goDetail() {
  Taro.navigateTo({ url: '/pages/detail/index' })
}
</script>

<template>
  <div>
    <div>
      <div class="w-full bg-blue-600 fixed top-0 z-100" :style="`height:${navbarHeight}px`">
        <div class="flex items-center justify-center" :style="`height:${menuButtonHeight}px; padding-top: ${titlePaddingTop}px`">
          <p class="text-center text-15px text-white font-500">
            记账本
          </p>
        </div>
      </div>
    </div>
    <div class="bg-gray-200_80" :style="`height: ${navbarHeight + 80}px`" />
    <div class="bg-blue-600 pl-15px text-white fixed z-99 w-full h-80px pt-10px box-border" :style="`top: ${navbarHeight}px`">
      <div class="flex justify-center items-center bg-blue-500 w-110px font-600 text-center rounded-3px p-5px text-14px" hover-class="bg-blue-700" @click="openPopup">
        <p>
          全部类型
        </p>
        <div class="border-l-2 border-blue-300 h-13px mx-10px" />
        <div class="i-material-symbols-widgets-outline-rounded" />
      </div>
      <div class="mt-10px ml-10px text-14px flex">
        <p>2022年8月</p>
        <p class="ml-10px text-white_80">
          总支出￥999.00
        </p>
        <p class="ml-10px text-white_80">
          总入账￥0.00
        </p>
      </div>
    </div>
    <div class="bg-gray-200_80 pt-10px">
      <div v-for="item in list" :key="item" class="mx-10px rounded-md mb-10px overflow-hidden">
        <div v-if="item % 5 === 0" class="mb-10px ml-10px text-14px flex">
          <p class="text-gray-500">
            2022年8月
          </p>
          <p class="ml-10px text-gray-400_80">
            总支出￥999.00
          </p>
          <p class="ml-10px text-gray-400_80">
            总入账￥0.00
          </p>
        </div>
        <div class="bg-light-100 px-15px py-20px flex items-center justify-between">
          <div class="text-15px font-600">
            <text>8月5日</text>
            <text class="ml-5px">
              昨天
            </text>
          </div>
          <div class="flex items-center font-500">
            <div class="flex items-center mr-10px">
              <div class="bg-gray-100 text-gray-500 text-center text-12px mr-3px px-2px">
                出
              </div>
              <span class="text-13px">5.00</span>
            </div>
            <div class="flex items-center">
              <div class="bg-gray-100 text-gray-500 text-center text-12px mr-3px px-2px">
                入
              </div>
              <span class="text-13px">0.00</span>
            </div>
          </div>
        </div>
        <div class="bg-white">
          <div v-for="item2 in 2" :key="item2" class="h-65px px-15px flex items-center justify-between" hover-class="bg-gray-200" @click="goDetail">
            <div class="bg-blue-600 rounded-full p-5px">
              <div class="i-fluent-bowl-chopsticks-16-filled text-20px text-white" />
            </div>
            <div class="flex items-center h-full w-full ml-15px border-b-1 border-gray-100">
              <div class="flex-1">
                <p class="text-14px">
                  购物
                </p>
                <p class="mt-5px text-12px text-gray-400_80">
                  15:00 | 扫码付款xxx商户
                </p>
              </div>
              <p class="text-15px font-600">
                -2.5
              </p>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center text-14px text-gray-500" style="padding-bottom: env(safe-area-inset-bottom);">
        上滑加载更多
      </p>
    </div>
  </div>

  <page-container
    :show="visible"
    :round="true"
    overlay-style="background-color: rgba(0, 0, 0, 0.5);"
    custom-style="height: 70%;background-color: #f3f4f6;"
    @clickoverlay="onClickOverlay"
  >
    <div class="overflow-y-scroll pb-20px box-border h-full">
      <div class="fixed w-full h-40px pt-20px border-b-1 border-gray-200 rounded-xl" style="background-color: #f3f4f6;">
        <p class="text-center text-15px font-600">
          请选择类型
        </p>
      </div>
      <div class="h-60px" />
      <div class="px-20px pt-30px text-16px">
        <div class="grid grid-cols-3 gap-2 text-center text-16px">
          <p class="bg-white py-10px rounded">
            全部类型
          </p>
        </div>
        <div class="mt-15px">
          <text class="text-15px text-gray-500">
            支出
          </text>
          <div class="grid grid-cols-3 gap-2 text-center text-16px mt-10px">
            <p class="bg-white py-10px rounded">
              餐饮
            </p>
            <p class="bg-white py-10px rounded">
              交通
            </p>
            <p class="bg-white py-10px rounded">
              服饰
            </p>
            <p class="bg-white py-10px rounded">
              购物
            </p>
            <p class="bg-white py-10px rounded">
              生活缴费
            </p>
          </div>
        </div>
        <div class="mt-15px">
          <text class="text-15px text-gray-500">
            入账
          </text>
          <div class="grid grid-cols-3 gap-2 text-center text-16px mt-10px">
            <p class="bg-white py-10px rounded">
              餐饮
            </p>
            <p class="bg-white py-10px rounded">
              交通
            </p>
            <p class="bg-white py-10px rounded">
              服饰
            </p>
            <p class="bg-white py-10px rounded">
              购物
            </p>
            <p class="bg-white py-10px rounded">
              生活缴费
            </p>
          </div>
        </div>
        <div class="mt-15px" style="padding-bottom: env(safe-area-inset-bottom);">
          <text class="text-15px text-gray-500">
            支出
          </text>
          <div class="grid grid-cols-3 gap-2 text-center text-16px mt-10px">
            <p class="bg-white py-10px rounded">
              餐饮
            </p>
            <p class="bg-white py-10px rounded">
              交通
            </p>
            <p class="bg-white py-10px rounded">
              服饰
            </p>
            <p class="bg-white py-10px rounded">
              购物
            </p>
            <p class="bg-white py-10px rounded">
              生活缴费
            </p>
          </div>
        </div>
      </div>
    </div>
  </page-container>
</template>

<style>
.scroll-view-item_H{
  display: inline-block;
  width: 100%;
  height: 300rpx;
}
</style>
