<!-- 头部组件 -->
<template>
    <div id='welfareHead'>
      <div class="head">
        <i class="icon-leftarrow" @click.stop="gobacks"></i>
        <span>{{headTitle}}</span>
      </div>
    </div>
</template>

<style type='text/css' scoped>
  .head{
    width: 100%;
    height:1rem;
    background: #ffffff;
    position: relative;
  }
  .head i{
    display: inline-block;
    height: 100%;
    width: 1rem;
    text-align: center;
    line-height: .5rem;
    position: absolute;
    left:0;
    top:0;
    z-index: 20;
  }
  .head span{
    display: inline-block;
    width:100%;
    height:100%;
    font-size: .3rem;
    line-height: 1rem;
    padding-left: .9rem;
    padding-right: .9rem;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    position: absolute;
    left:0;
    top:0;
  }
</style>

<script type="text/javascript">
    export default {
        name: "welfareHead",
        props:["headTitle"],
        data(){
            return {}
        },
        mounted(){
        },
        methods: {
          gobacks(){
            window.history.go(-1)
          }
        }
    }
</script>
