<template>
    <div id="app">

        <p>
            <!--<router-link to="/apple">Apple</router-link>
            <router-link to="/banner">Banner</router-link>-->
            <router-link :to="{path:'apple'}">Apple</router-link>
            <router-link :to="{path:'banner'}">Banner</router-link>

        </p>
        <router-view></router-view>
    </div>
</template>

<script>

</script>

<style scoped="">
    #app {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>
