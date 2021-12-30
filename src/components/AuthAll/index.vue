<!--
 * @Description:
 * @Author: wsy
 * @Date: 2021-11-30 10:34:48
 * @LastEditTime: 2021-12-15 17:24:29
 * @LastEditors: wsy
-->
<template>
  <div>
    <slot v-if="check()" />
    <slot v-else name="no-auth" />
  </div>
</template>

<script setup>
  import { authAll } from '@/util'

  const props = defineProps({
    value: {
      type: Array,
      default: () => []
    }
  })

  function check() {
    return authAll(props.value)
  }
</script>
