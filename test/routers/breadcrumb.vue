<template>
    <div class="breadcrumb">
        <h1>面包屑导航</h1>
        <h2>默认分隔符</h2>
        <breadcrumb>
            <breadcrumb-item href="/#/home">Home</breadcrumb-item>
            <breadcrumb-item href="/#/breadcrumb">Breadcrumb</breadcrumb-item>
        </breadcrumb>
        <h2>自定义分隔符</h2>
        <breadcrumb>
            <breadcrumb-item href="/#/home" separator=">">Home</breadcrumb-item>
            <breadcrumb-item href="/#/breadcrumb" separator=">">Breadcrumb</breadcrumb-item>
        </breadcrumb>
    </div>
</template>