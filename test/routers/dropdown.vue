<template>
    <div class="dropdown">
        <dropdown>
            <a href="javascript:;">Hover Left <i class="anticon icon-down"></i></a>
            <dropdown-menu slot="list">
                <dropdown-menu-item>1st menu item</dropdown-menu-item>
                <dropdown-menu-item>2nd menu item</dropdown-menu-item>
                <dropdown-menu-item>3d menu item</dropdown-menu-item>
            </dropdown-menu>
        </dropdown>
        <dropdown :visible="true">
            <a href="javascript:;">Hover Visible Left <i class="anticon icon-down"></i></a>
            <dropdown-menu slot="list">
                <dropdown-menu-item>1st menu item 2</dropdown-menu-item>
                <dropdown-menu-item>2nd menu item 2</dropdown-menu-item>
                <dropdown-menu-item>3d menu item 2</dropdown-menu-item>
            </dropdown-menu>
        </dropdown>
        <dropdown trigger="click" :visible="true">
            <a href="javascript:;">Click Left <i class="anticon icon-down"></i></a>
            <dropdown-menu slot="list">
                <dropdown-menu-item>1st menu item 2</dropdown-menu-item>
                <dropdown-menu-item>2nd menu item 2</dropdown-menu-item>
                <dropdown-menu-item>3d menu item 2</dropdown-menu-item>
            </dropdown-menu>
        </dropdown>
    </div>
</template>

<style lang="sass">
.dropdown {
    .ant-dropdown {
        margin-right: 100px;
    }
    i {
        font-size: 12px;
    }
}
</style>