<template>
<el-header>
    <el-row>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-col  :xs="8" :sm="6" :md="4" :lg="4" :xl="4" >   
                    <el-menu-item >
                        <div class="logoSection">
                            <div id="logo">MarocReddit</div>
                        </div>
                    </el-menu-item>
                </el-col>
                <el-col  :xs="8" :sm="6" :md="14" :lg="14" :xl="14" >
                    <router-link to="/"><el-menu-item index="1">Home</el-menu-item></router-link>
                    <el-submenu index="2">
                        <template slot="title">Categories</template>
                        <el-menu-item index="2-1">Technology</el-menu-item>
                        <el-menu-item index="2-2">Gags</el-menu-item>
                        <el-menu-item index="2-3">Sport</el-menu-item>
                        <el-menu-item index="2-3">Politics</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">Discover Posts</template>
                        <el-menu-item index="3-1">Newest</el-menu-item>
                        <el-menu-item index="3-2">Popular</el-menu-item>
                        <el-menu-item index="3-3">Trending</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="4">Chat</el-menu-item>
                    <el-menu-item index="5">Become a Moderator</el-menu-item>
                </el-col>
                <el-col :xs="8" :sm="2" :md="2" :lg="2" :xl="2" class="login">
                    <el-popover
                        ref="popover"
                        placement="bottom"
                        title="Title"
                        width="200"
                        trigger="hover"
                        content="this is content, this is content, this is content">
                    </el-popover>
                    <el-button v-popover:popover>Search</el-button>

                </el-col>
                <el-col  :xs="8" :sm="4" :md="4" :lg="4" :xl="4" >
                    <div class="login">
                        <router-link to="/signup"><el-button type="primary" round>Sign Up</el-button></router-link>
                        <router-link to="/login"><el-button round>Login</el-button></router-link>
                    </div>
                </el-col>
            </el-menu>
       
    </el-row>
    
</el-header>
</template>


<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
#logo {
  color: #409EFF;

  font-family: "Franklin Gothic Medium";
  font-weight: bold;
  font-size: 26px;
}

.login {
  padding-top: 5px;
}
</style>
