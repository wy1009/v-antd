<template>
    <ul>
        <li><router-link :to="{ name: 'button' }">Button</router-link></li>
        <li><router-link :to="{ name: 'affix' }">Affix</router-link></li>
        <li><router-link :to="{ name: 'breadcrumb' }">Breadcrumb</router-link></li>
        <li><router-link :to="{ name: 'backTop' }">BackTop</router-link></li>
        <li><router-link :to="{ name: 'dropdown' }">Dropdown</router-link></li>
        <li><router-link :to="{ name: 'grid' }">Grid</router-link></li>
    </ul>
</template>