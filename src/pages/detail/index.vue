<script setup lang="ts">
definePageConfig({
  navigationBarTitleText: '',
  navigationBarBackgroundColor: '#eaecef',
  backgroundColor: '#eaecef',
  backgroundColorBottom: '#eaecef',
})
</script>

<template>
  <div class="h-100vh px-20px pt-10px" style="background-color: #eaecef;">
    <div class="bg-white text-center px-20px rounded-md pt-40px text-14px font-500 shadow-light-900">
      <div>
        购物
      </div>
      <p class="text-30px mt-20px">
        -99.00
      </p>
      <div class="mt-20px flex text-left pb-40px border-b-2 border-gray-200">
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
        <div class="text-red-500">
          删除
        </div>
        <div class="border-l-2 border-gray-200" />
        <div class="text-gray-500">
          编辑
        </div>
      </div>
    </div>
  </div>
</template>
