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
                <el-col  :xs="8" :sm="6" :md="12" :lg="12" :xl="12" >
                    <router-link to="/" active-class="active" exact><el-menu-item index="1">Home</el-menu-item></router-link>
                    <el-submenu index="2">
                        <template slot="title">Categories</template>
                        <el-menu-item index="2-1" v-for="(catItem, index) in CategoriesMenuItems" :key="index">{{catItem.name}}</el-menu-item>
                        
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
                <el-col :xs="8" :sm="3" :md="4" :lg="4" :xl="4" class="loggedIn">
                    <el-popover
                        ref="popover"
                        placement="bottom"
                        width="200"
                        trigger="hover"
                        content="Click to add a text or a link !">
                    </el-popover>
                     <router-link :to="{name: 'PostAdd'}"  ><el-button icon="el-icon-edit" type="primary" v-popover:popover>Add a Post</el-button></router-link>
                    <span></span>
                    <el-badge :value="15" is-dot class="item">
                        <i id="NotificationsBell"  class="el-icon-bell"></i>
                    </el-badge>


                </el-col>
                <el-col  :xs="8" :sm="4" :md="4" :lg="4" :xl="4" >
                    <div class="login">
                        <router-link :to="{name: 'signup'}"  exact><el-button type="primary" round>Sign Up</el-button></router-link>
                        <router-link :to="{name: 'login'}"  exact><el-button round>Login</el-button></router-link>
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
      CategoriesMenuItems : [
          {name : "Technology", 
            link: "#"
          },
           {name : "Gags", 
            link: "#"
          },
           {name : "Politics", 
            link: "#"
          },
           {name : "Sport", 
            link: "#"
          },
          {name : "Fashion", 
            link: "#"
          }
           
           ]
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

.loggedIn {
  padding-top: 3px;
}

#NotificationsBell {
    font-size: 20px;
}
</style>
