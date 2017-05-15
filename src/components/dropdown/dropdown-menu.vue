<template>
    <ul class="ant-dropdown-menu" v-show="currentVisible">
        <slot></slot>
    </ul>
</template>

<script>
import Popup from '../../assets/js/popup.js'

export default {
    mixins: [Popup]
}
</script>