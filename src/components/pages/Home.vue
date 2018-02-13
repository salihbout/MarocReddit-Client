<template>
  <el-container>
   <div id="HomePageWrapper">
    <el-row :gutter="20">
      
      <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18" >
        <div class="Search">
        <el-form :model="searchField" label-width="120px">
          <el-form-item label="Search">
          <el-input v-model="searchField.search"></el-input>
        </el-form-item>
        </el-form>
      </div>

       <Postcard v-for="(post,index) in postsToDisplay"  v-bind:key="index" :post="post"></Postcard>
    
        <!-- <el-tabs v-model="activeName" >
        <el-tab-pane label="Popular" name="first">
          <HomePostsSection :posts="postsToDisplay"></HomePostsSection>
        </el-tab-pane>
        <el-tab-pane label="Trending" name="second"> 
          <HomePostsSection :posts="postsTrend"></HomePostsSection>
        </el-tab-pane>
        <el-tab-pane label="Latest" name="third">
          <HomePostsSection :posts="postsFetched"></HomePostsSection>
        </el-tab-pane>
      </el-tabs> -->
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" >
          <HomeSideSection></HomeSideSection>
      </el-col>
    </el-row>
  </div> 
  </el-container>
</template>
<script>
import Postcard from '../posts/Postcard.vue';
import HomeSideSection from "../various/HomeSideSection.vue";
import axios from "axios";
import _ from 'lodash'


export default {
  name: "Home",
  components: {
    Postcard: Postcard,
    HomeSideSection: HomeSideSection
  },
  data() {
    return {
      activeName: "first",
      postsFetched: {},
      poststrend: {},
      searchField :{
        search: ''
          }
  }
  },
  computed: {
    postsToDisplay() {

      let filteredPosts = _.toArray(this.postsFetched);
      return filteredPosts.filter( (post) =>{
        return post.title.match(this.searchField.search);
      });
    }
  },

  created() {
    axios
      .get("http://localhost:3000/api/posts")
      .then(response => {
        let posts = response.data.posts;

        console.log(posts);
        this.postsFetched = posts;

        this.postsTrend = posts.sort((a, b) => b.title > a.title);
        console.log(this.postsTrend);
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {}
};
</script>

<style scoped>
#HomePageWrapper {
  padding-top: 30px;
}
</style>
