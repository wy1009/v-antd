<template>
    <div class="button">
        <v-button></v-button>
    </div>
</template>

<script>
// 正式打包测试时不需要引入，也不需要单独注册组件
import vAntd from 'vAntd'

export default {
    components: {
        VButton: vAntd.VButton
    }
}
</script>