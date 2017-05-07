<template>
    <div class="grid">
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
        <!-- 类名gutter和元素gutter-box不必须，仅为展示效果使用 -->
        <row :gutter="16" class="gutter">
            <v-col :span="8"><div class="gutter-box">col-8</div></v-col>
            <v-col :span="8"><div class="gutter-box">col-8</div></v-col>
            <v-col :span="8"><div class="gutter-box">col-8</div></v-col>
        </row>
    </div>
</template>

<style lang="sass">
.grid {
    .ant-row {
        margin-top: 10px;
        .ant-col {
            padding: 16px 0;
            background: #00a0e9;
            color: #fff;
            text-align: center;
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