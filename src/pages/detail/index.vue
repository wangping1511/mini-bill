<script setup lang="ts">
import Taro from '@tarojs/taro'

definePageConfig({
  navigationBarTitleText: '',
  navigationBarBackgroundColor: '#eaecef',
  backgroundColor: '#eaecef',
  backgroundColorBottom: '#eaecef',
})

function delConfirmVisible() {
  Taro.showModal({ content: '删除后无法恢复，是否删除？', confirmColor: '#ef4444' }).then((res) => {
    if (res.confirm)
      Taro.navigateBack()
  })
}
</script>

<template>
  <div class="h-100vh px-20px pt-10px" style="background-color: #eaecef;">
    <div class="bg-white text-center px-20px rounded-md pt-40px text-14px shadow-light-900">
      <div class="flex items-center justify-center">
        <div class="bg-blue-600 rounded-full p-3px mr-8px">
          <div class="i-fluent-bowl-chopsticks-16-filled text-15px text-white" />
        </div>
        <p>购物</p>
      </div>
      <p class="text-30px mt-20px font-500">
        -99.00
      </p>
      <div class="mt-20px flex text-left pb-40px border-b-1 border-gray-200">
        <div class="text-gray-500">
          <p>记录时间</p>
          <p class="my-10px">
            来源
          </p>
          <p>备注</p>
        </div>
        <div class="ml-20px">
          <p>2022年11月11日 07:20</p>
          <p class="my-10px">
            来源
          </p>
          <p>xxxxxxxxxxxx</p>
        </div>
      </div>
      <div class="py-20px flex justify-evenly">
        <div class="flex-1 flex items-center justify-center text-red-500" @click="delConfirmVisible">
          <div class="i-mdi-delete-outline text-16px mr-5px" />
          <p>删除</p>
        </div>
        <div class="border-l-1 border-gray-200" />
        <div class="flex-1 flex items-center justify-center text-gray-500">
          <div class="i-mdi-square-edit-outline text-16px mr-5px" />
          编辑
        </div>
      </div>
    </div>
  </div>
</template>
