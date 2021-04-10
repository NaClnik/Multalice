<template>
  <button v-on:click="clickHandler"></button>

  <h1>{{getCount}}</h1>
</template>

<script>
  import { mapGetters } from 'vuex';
  import * as mns from '../store/mutation-types';
  export default {
    name: "HelloWorld",
    computed:{
      ...mapGetters(['getCount'])
    },
    methods:{
      clickHandler(){
        this.$store.commit(mns.INCREMENT);
      }
    },
  }
</script>

<style scoped>

</style>