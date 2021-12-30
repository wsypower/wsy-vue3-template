<!--
 * @Description:
 * @Author: wsy
 * @Date: 2021-11-30 10:34:48
 * @LastEditTime: 2021-12-15 21:10:15
 * @LastEditors: wsy
-->
<template>
  <div :class="`trend ${isUp ? 'up' : 'down'}`">
    <span v-if="prefix" class="prefix">{{ prefix }}</span>
    <span class="text">{{ value }}</span>
    <span v-if="suffix" class="suffix">{{ suffix }}</span>
    <svg-icon :name="`${isUp ? 'el-icon-caret-top' : 'el-icon-caret-bottom'}`" />
  </div>
</template>

<script setup>
  const props = defineProps({
    value: {
      type: String,
      required: true
    },
    type: {
      type: String,
      validator: (val) => ['up', 'down'].includes(val),
      default: 'up'
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    reverse: {
      type: Boolean,
      default: false
    }
  })

  const isUp = computed(() => {
    let isUp = props.type === 'up'
    if (props.reverse) {
      isUp = !isUp
    }
    return isUp
  })
</script>

<style lang="scss" scoped>
  .trend {
    display: inline-block;

    &.up {
      color: #67c23a;
    }

    &.down {
      color: #f56c6c;
    }

    i {
      margin-left: 5px;
    }
  }
</style>
