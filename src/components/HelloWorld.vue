<template>
  <button v-on:click="clickHandler">Test button</button>

  <h1>{{getCount}}</h1>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: "HelloWorld",
    computed:{
      ...mapGetters(['getCount'])
    },
    methods:{
      clickHandler(){
        this.$socket.sendObj({route: 'echo/hello', name: 'yes it work!'});
      }
    },
  }
</script>

<style scoped>

</style>