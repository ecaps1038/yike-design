<template>
    <span :class="[type, { 'strong': b, 'mark': mark, 'underline': underline,'delete':del }]" class="yk-text">
        <slot>
        </slot>
    </span>
</template>
<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
    b: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        default: '',
    },
    mark: {
        type: Boolean,
        default: false,
    },
    underline: {
        type: Boolean,
        default: false,
    },
    del: {
        type: Boolean,
        default: false,
    }
})


</script>
<style lang="less" scoped>
@import '../../assets/style/yk-index.less';
.pcolor{
    color: @pcolor;
}
.primary{
  color:@font-color-l;
}
.secondary {
    color: @font-color-m;
}

.disabled {
    color: @font-color-s;
}

.success {
    color: @scolor;
}

.warning {
    color: @wcolor;
}

.danger {
    color: @ecolor;
}

.strong {
    font-weight: bold;
}

.mark {
    background-color: rgba(255,214,28,0.48);
}

.underline {
    text-decoration: underline;
}

.delete {
    text-decoration:line-through;
}

</style>