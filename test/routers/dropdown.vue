<template>
    <div class="dropdown">
        <dropdown>
            <a href="javascript:;">Hover me <i class="anticon icon-down"></i></a>
            <dropdown-menu slot="list">
                <dropdown-menu-item>1st menu item</dropdown-menu-item>
                <dropdown-menu-item>2nd menu item</dropdown-menu-item>
                <dropdown-menu-item>3d menu item</dropdown-menu-item>
            </dropdown-menu>
        </dropdown>
    </div>
</template>

<style lang="sass">
.dropdown {
    i {
        font-size: 12px;
    }
}
</style>