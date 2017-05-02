<template>
    <div class="affix">
        <h1>固钉</h1>
        <div class="placeholder"></div>
        <affix>
            <v-button>affix top</v-button>
        </affix>
        <affix :offset-bottom="10"
            @on-change="printAffixStatus($event)">
            <v-button>10px to affix bottom</v-button>
        </affix>
        <div class="placeholder"></div>
    </div>
</template>

<script>
export default {
    methods: {
        printAffixStatus (affix) {
            console.log(`now affix is ${affix}`)
        }
    }
}
</script>

<style lang="sass">
.affix {
    .placeholder {
        width: 10px;
        height: 1000px;
        background: black;
    }
}
</style>