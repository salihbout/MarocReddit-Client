<template>
   <div id="HomePageWrapper">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16" :offset="1">
        <el-tabs v-model="activeName" >
        <el-tab-pane label="Popular" name="first">
          <HomePostsSection :posts="postsTrending"></HomePostsSection>
        </el-tab-pane>
        <el-tab-pane label="Trending" name="second">
          <HomePostsSection :posts="postsTrending"></HomePostsSection>
        </el-tab-pane>
        <el-tab-pane label="Latest" name="third">
          <HomePostsSection :posts="postsLastest"></HomePostsSection>
        </el-tab-pane>
      </el-tabs>
      </el-col>
      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6" >
          <HomeSideSection></HomeSideSection>
      </el-col>
    </el-row>
  </div> 
</template>
<script>
import HomePostsSection from '../posts/HomePostsSection.vue';
import HomeSideSection from './HomeSideSection.vue';
import axios from 'axios';
export default {
  
  name: 'Home',
  components : {
    HomePostsSection : HomePostsSection,
    HomeSideSection : HomeSideSection
  },
    data() {
      return {
        activeName: 'first',
        posts : '' ,
      postsPopular: [{
          _id: 1,
          title: "A post for our reddit demo starting at 15 votes",
          text:"",
          votes: [],
          _creator: "Salih",
          comments: 10,
          numViews: 100
        },
        {
          _id: 2,
          title: "Try out the upvoting, it works, I promise",
          votes: [],
          _creator: "Salih",
          comments: 10,
          numViews: 100
        },
        {
          _id: 3,
          title: "coligo is the bomb!",
          votes: [],
          _creator: "Salih",
          comments: 10,
          numViews: 100
        }],

        postsTrending: [{
          _id: 1,
          title: "A post for our reddit demo starting at 15 votes",
          votes: [],
          _creator: "Salih",
          comments: [],
          numViews: 100
        },
        {
          _id: 2,
          title: "Try out the upvoting, it works, I promise",
          votes: [],
          _creator: "Salih",
          comments: [],
          numViews: 100
        },
        {
          _id: 3,
          title: "coligo is the bomb!",
          votes: [],
          _creator: "Salih",
          comments: [],
          numViews: 100
        }],
        postsLastest: [{
          _id: 1,
          title: "A aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          votes:[],
          _creator: "Salih",
          comments: [],
          numViews: 100
        },
        {
          _id: 2,
          title: "Try out the upvoting, it works, I promise",
          votes: [],
          _creator: "Salih",
          comments: [],
          numViews: 100
        },
        {
          _id: 3,
          title: "coligo is the bomb!",
          votes: [],
          _creator: "Salih",
          comments: [],
          numViews: 100
        }],
        created: function() {
          console.log('loading ....')
          this.loadPosts();

        },
        methods: {
      
      loadPosts : function(){
        console.log("getting posts ....");
        axios.get('http://localhost:3000/api/posts')
          .then(function (response) {
            console.log(response.data);
           this.posts = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });

      }
    }


    }
}
}
</script>

<style scoped>
#HomePageWrapper {

  padding-top:  30px;

}
</style>
