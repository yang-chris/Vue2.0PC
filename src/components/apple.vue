<template>
    <div class="apple">
        <h1>{{msg}}</h1>
        <button @click="getParam">get param</button>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data(){
            return{
                msg:'I am an apple'
            }
        },
        methods:{
            getParam(){
                console.log(this.$route.params)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus"></style>
