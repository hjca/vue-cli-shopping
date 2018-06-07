<!-- 搜索框 -->
<template>
    <div id='welfareSearchInp'>
      <div class="searchArea">
        <i class="icon icon-search"></i>
        <input type="text" v-model="searchVal" class="searchInp" placeholder="搜索" @keyup.enter="startSearchShop">
      </div>
    </div>
</template>

<style type="text/css" scope>
  #welfareSearchInp{
    width: 100%;
    height: auto;
    padding: .2rem 0;
    background: #f1f4f9;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .searchArea{
    display: flex;
    background: #ffffff;
    height:.6rem;
    width:7.1rem;
    border-radius: .3rem;
    justify-content: space-between;
    overflow: hidden;
  }
  .icon-search{
    display: inline-block;
    height: 100%;
    line-height: .1rem;
    margin-left: .2rem;
    margin-right: .2rem;
  }
  .icon-search:before{
    color: #cccccc;
    font-size: .4rem;
  }
  .searchInp{
    border: none;
    height: 100%;
    flex: 1;
    font-size: .36rem;
  }
</style>

<script type="text/javascript">
  export default{
      data(){
          return {
            searchVal:""
          }
      },
    methods:{
      startSearchShop(){
          alert(this.searchVal)
      }
    }
  }
</script>
