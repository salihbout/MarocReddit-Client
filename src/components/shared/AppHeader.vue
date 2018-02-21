<template>
<el-container>
<el-header>
    <el-row>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                <el-col  :xs="4" :sm="4" :md="4" :lg="4" :xl="4" >   
                    <el-menu-item index="0" >
                        <div class="logoSection">
                            <div id="logo">AI Maroc</div>
                        </div>
                    </el-menu-item>
                </el-col>
                <el-col  :xs="14" :sm="14" :md="14" :lg="14" :xl="14" >
                    <router-link to="/" active-class="active" exact><el-menu-item index="1">Home</el-menu-item></router-link>
                    <router-link :to="{name: 'Topics'}">
                        <el-submenu index="2">
                          <template slot="title">Topics</template>
                          <el-menu-item index="2-1">item one</el-menu-item>
                        </el-submenu>
                    </router-link>
                    <router-link :to="{name: 'News'}" exact><el-menu-item index="3">News</el-menu-item></router-link>
                    <router-link :to="{name: 'Chat'}" exact><el-menu-item index="4">Chat</el-menu-item></router-link>
                </el-col>
                <el-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4" class="loggedIn" v-if="isLoggedIn">
                    <el-popover
                        ref="popover"
                        placement="bottom"
                        width="200"
                        trigger="hover"
                        content="Click to add a text or a link !">
                    </el-popover>
                     <router-link :to="{name: 'PostAdd'}"  ><el-button icon="el-icon-edit" type="primary" v-popover:popover>Add a Post</el-button></router-link>
                    <span></span>
                    


                </el-col>
                <el-col v-if="!isLoggedIn" :xs="4" :sm="4" :md="4" :lg="4" :xl="4" >
                    <div  class="login">
                        <router-link :to="{name: 'signup'}"  exact><el-button type="primary" round>Sign Up</el-button></router-link>
                        <router-link :to="{name: 'login'}"  exact><el-button round>Login</el-button></router-link>
                        
                    </div>
                
                </el-col>
                
                <el-col v-if="isLoggedIn" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                   <div  class="UserDropDown">

                        <el-dropdown>
                    <span class="el-dropdown-link">
                        Hello {{Username}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <router-link :to="{name: 'Profile', params: {id : UserID}}"  exact><el-dropdown-item>Profile</el-dropdown-item></router-link>
                        <el-dropdown-item>Settings</el-dropdown-item>
                        <el-dropdown-item>Help</el-dropdown-item>
                        <el-dropdown-item  divided><el-button @click="logout">Logout</el-button></el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>

                   </div>
                    
                </el-col>
            </el-menu>
       
    </el-row>
    
</el-header>
</el-container>
</template>


<script>
import jwt from "jwt-simple";
import utils from "../../config/utils";
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    getUserInfoFromStorage() {
      var username = "";
      var token = utils.getToken(localStorage.getItem("token"));
      if (token && typeof token !== "undefined") {
        var decoded = jwt.decode(token, utils.Secret);
        return decoded;
      }
    }
  },
  created() {
    console.log("token : " + localStorage.getItem("token"));
    console.log("isLoggedIn : " + this.isLoggedIn);
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    Username() {
      var user = this.getUserInfoFromStorage();
      return user.username;
    },

    UserID() {
      var user = this.getUserInfoFromStorage();
      return user._id;
    }
  }
};
</script>
<style scoped>
#logo {
  color: #409eff;

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

.UserDropDown {
  padding-top: 15px;
}
</style>
