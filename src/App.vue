<template>
  <div id="app">
    <el-container direction="vertical">
      <AppHeader></AppHeader>
        <router-view></router-view>
      <AppFooter>AppFooter</AppFooter>
    </el-container>
  </div>
</template>


<script>
import AppHeader from './components/shared/AppHeader.vue';
import AppFooter from './components/shared/AppFooter.vue';
export default {

  components : {
    'AppHeader' : AppHeader,
    'AppFooter' : AppFooter,
  }
  
}
</script>

<style scoped>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  
}
</style>
