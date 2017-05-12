<template>
    <div class="grid">
        <h2>基础栅格</h2>
        <row>
            <v-col :span="8">col-8</v-col>
            <v-col :span="8">col-8</v-col>
            <v-col :span="8">col-8</v-col>
        </row>
        <row>
            <v-col :span="6">col-6</v-col>
            <v-col :span="6">col-6</v-col>
            <v-col :span="12">col-12</v-col>
        </row>
        <h2>区块间隔-gutter</h2>
        <!-- 类名gutter和元素gutter-box不必须，仅为展示效果使用 -->
        <row :gutter="16" class="gutter">
            <v-col :span="8"><div class="gutter-box">col-8</div></v-col>
            <v-col :span="8"><div class="gutter-box">col-8</div></v-col>
            <v-col :span="8"><div class="gutter-box">col-8</div></v-col>
        </row>
        <h2>左右偏移-offset</h2>
        <row>
            <v-col :span="8">col-8</v-col>
            <v-col :span="8" :offset="8">col-8 col-offset-8</v-col>
            <v-col :span="6" :offset="6">col-6 col-offset-6</v-col>
            <v-col :span="6" :offset="6">col-6 col-offset-6</v-col>
            <v-col :span="12" :offset="6">col-12 col-offset-6</v-col>
        </row>
        <h2>栅格排序-push/pull</h2>
        <row>
            <v-col :span="18" :push="6">col-18 col-push-6</v-col>
            <v-col :span="6" :pull="18">col-6 col-pull-18</v-col>
        </row>
    </div>
</template>

<style lang="sass">
.grid {
    .ant-row {
        .ant-col {
            padding: 16px 0;
            background: #00a0e9;
            color: #fff;
            text-align: center;
            margin: 10px 0;
            &:nth-child(odd) {
                background: rgba(0,160,233,.7);
            }
        }
        &.gutter {
            .ant-col {
                background: transparent;
                padding: 0;
                .gutter-box {
                    padding: 16px 0;
                    background: #00a0e9;
                    &:nth-child(odd) {
                        background: rgba(0,160,233,.7);
                    }
                }
            }
        }
    }
}
</style>