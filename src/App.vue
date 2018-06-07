<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
//  import $ from 'jquery'
  export default {
    name: 'App'
}
</script>

<style>
#app {
  width:100%;
  height:100%;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  background: #f1f4f9;
}
</style>
