<template>
    <div class="back-top">
        <h1>回到顶部</h1>
        <div class="placeholder"></div>
        <back-top :visibility-height="100"
            @on-click="clicked"></back-top>
        <back-top class="demo-custom">
            <div class="ant-back-top-inner">UP</div>
        </back-top>
    </div>
</template>

<script>
export default {
    methods: {
        clicked () {
            console.log('clicked')
        }
    }
}
</script>

<style lang="sass">
.back-top {
    .placeholder {
        width: 10px;
        height: 1000px;
        background: #000;
    }
    .ant-back-top-inner {
        width: 100%;
        height: 100%;
        background: #1088e9;
        text-align: center;
        font-size: 20px;
        border-radius: 4px;
        line-height: 40px;
        color: #fff;
    }
    .demo-custom {
        bottom: 100px;
    }
}
</style>