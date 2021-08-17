<template>
    <div class="Frame">
        <div class="Frame_content">
            <slot name="Frame-content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'phoenixtree-layout'
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
}
</style>
