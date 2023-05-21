<template>
  <div class="yk-bt-group">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">

</script>

<style lang="less">
@import '../../assets/style/yk-index.less';
.yk-bt-group {
  display: inline-block;
  border-radius: 8px;
  overflow: hidden;
  .yk-button {
    margin-left: 1px;
    .yk-button-bg {
      border-radius: 0px;
    }
  }
  .outline{
    margin-left: -1px;
  } 
  &:first-child{
    margin-left:12px;
  }

}
</style>