<template>
    <div class="ProfileWrapper">
    <div v-show="loading" class="loader">
        <p>Loading ...</p>
        <i class="el-icon-loading"></i>
    </div>
    
        <el-row>
            <el-col :span="16" >
                <h3>{{userData.username}}</h3>
            <p>{{userData.email}}</p>
                           
            <el-tabs v-model="activeName">

                <el-tab-pane :label="userData._postss.length + ' Posts'" name="posts">
                    <postCard v-for="(post,index) in userData._postss"  v-bind:key="index" :post="post"></postCard>
                </el-tab-pane>
                <el-tab-pane :label="userData._comments.length + ' Comments'" name="comments">
                    <postCard v-for="(post,index) in userData._comments"  v-bind:key="index" :post="post._post"></postCard>
                </el-tab-pane>
                <el-tab-pane :label="userData._upvotes.length + ' Upvotes'" name="upvotes">
                    <postCard v-for="(post,index) in userData._upvotes"  v-bind:key="index" :post="post._post"></postCard>
                </el-tab-pane>
                                        
            </el-tabs>
            </el-col>
        </el-row>
            

    </div>

</template>

<script>
import axios from "axios";
import Postcard from "./../posts/Postcard.vue";
export default {
  components: {
    postCard: Postcard
  },
  data() {
    return {
      activeName: "posts",
      loading: "",
      userData: ""
    };
  },

  methods: {
    fetchProfileData(profileID) {
      axios
        .get("http://localhost:3000/api/user/" + profileID)
        .then(response => {
          console.log(response);
          if (response.data.success) {
            this.userData = response.data.user;
          } else {
            this.$message({
              showClose: true,
              message: response.data.message
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.loading = true;
    this.fetchProfileData(this.$route.params.id);
    this.loading = false;
  }
};
</script>


<style scoped>
.loader {
  text-align: center;
  padding-top: 20px;
}
.ProfileWrapper {
  padding: 20px;
}
</style>
