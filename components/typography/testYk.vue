<template>
    <div class="content-wrap">
        <div :class="['content', expande ? 'expande' : 'close']" ref="content">
            <slot></slot>
        </div>
        <div class="expande-button-wrap" v-if="needShowExpande">
            <div class="expande-button" @click="expandeClick" v-if="!expande">
                <span style="color: black">...</span> 展开
            </div>
            <div class="expande-button" @click="expandeClick" v-else>收起</div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: '1App',
    data() {
        return {
            expande: true,
            needShowExpande: false,
        }
    },
    props: {
        nr: {
            type: String,
            default: '',
        }
    },
    methods: {
        expandeClick() {
            console.log('expandeClick')
            this.expande = !this.expande
        },
        moreline(rows: number) {
            var boxid:any = this.$refs.content;
            // console.log(boxid)
            var computedStyle = getComputedStyle(boxid, null);
            var lineHeight = computedStyle.lineHeight;
            var top = (rows + 1) * parseInt(lineHeight);
            //获取原始数据
            let str =JSON.parse(JSON.stringify(boxid.innerHTML))
            let tempstr = str;

            var len = tempstr.length;
            var i = 0;
            if (boxid.offsetHeight > top) {
                var temp = "";
                boxid.innerHTML = temp;
                console.log(tempstr)
                while (boxid.offsetHeight <= top) {
                    temp = tempstr.substring(0, i + 1);
                    i++;
                    boxid.innerHTML = temp;
                }
                tempstr = temp.substring(0, temp.length - 1);
                len = tempstr.length;
                boxid.innerHTML = tempstr.substring(0, len - 3) + "..." + `<span class="a">展开</span>`;
                boxid.height = top + "rem";
                let en:any = document.querySelector(".a")
                en.onclick = function () {
                    boxid.innerHTML = str;
                }
            }
        }
    },
    mounted() {
        // this.$nextTick(() => {
        //     let lineHeight = 22
        //     if (this.$refs.content.offsetHeight > lineHeight * 3) {
        //         this.expande = false
        //         this.needShowExpande = true
        //     } else {
        //         this.expande = true
        //     }
        // })
        this.moreline(1)
    },
}
</script>
<style>
.expande {
    height: auto;
}

.close {
    height: 65px;
    overflow: hidden;
}

.expande-button-wrap {
    position: absolute;
    right: 0;
    bottom: 0;
}
</style>

