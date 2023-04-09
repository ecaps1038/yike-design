<template>
  <p :class="['lv'+level,type]" class="yk-title">
    <slot>
    </slot>
  </p>
</template>
<script setup lang="ts">
import {ref} from "vue";
  const props =defineProps({
    level:{
      type:Number,
      default:1,
    },
    type:{
      type:String,
      default:'',
    }
  })


</script>
<style lang="less" scoped>
@import '../../assets/style/yk-index.less';
.yk-title{
  font-weight: 600;
  margin-bottom:0.5em;
  margin-top:1em;
}
.lv1{
  font-size: 40px;
  line-height: 1.24;
}
.lv2{
  font-size: 32px;
  line-height: 1.28;
}
.lv3{
  font-size: 24px;
  line-height: 1.34;
}
.lv4{
  font-size: 18px;
  line-height: 1.4;
}
.lv5{
  font-size: 16px;
  line-height:1.5;
}
.pcolor{
  color:@pcolor;
}
.primary{
  color:@font-color-l;
}
.secondary{
  color:@font-color-s;
}
.success{
  color:@scolor;
}
.warning{
  color:@wcolor;
}
.danger{
  color:@ecolor;
}

</style>