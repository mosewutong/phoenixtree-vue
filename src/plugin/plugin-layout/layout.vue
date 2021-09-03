<template>
    <div :class="noPadding ? 'Frame nopadding' : 'Frame'" :style="`minWidth: ${minWidth}`">
        <div :class="noContentPadding ? 'Frame_content nocontentpadding' : 'Frame_content'">
            <slot name="Frame-content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'phoenixtree-layout',
    props: {
        'noPadding': {
            type: Boolean,
            default: false,
        },
        'noContentPadding': {
            type: Boolean,
            default: false,
        },
        'minWidth': {
            type: String,
            default: '900px',
        }
    },
    mounted(){
        console.log(this.noPadding)
    }
}
</script>

<style lang="less" scoped>
.Frame{
    width: 100%;
    height: 100%;
    background: #f7f7f7;
    box-sizing: border-box;
    padding: 8px;
    .Frame_content{
        width: 100%;
        height: 100%;
        background: #fff;
        box-sizing: border-box;
        padding: 8px;
        border-radius: 8px;
    }
    .nocontentpadding{
        padding: 0px;
    }
}
.nopadding{
    padding: 0;
    .Frame_content{
        border-radius: 0px;
    }
}
</style>
