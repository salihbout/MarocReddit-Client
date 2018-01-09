<template>
   <div id="HomePageWrapper">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16" :offset="1">
        <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Popular" name="first">
          <HomePostsSection :posts="posts"></HomePostsSection>
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
          id: 1,
          title: "A post for our reddit demo starting at 15 votes",
          votes: 100,
          user: "Salih",
          numComments: 10,
          numViews: 100
        },
        {
          id: 2,
          title: "Try out the upvoting, it works, I promise",
          votes: 200,
          user: "Salih",
          numComments: 10,
          numViews: 100
        },
        {
          id: 3,
          title: "coligo is the bomb!",
          votes: 100,
          user: "Salih",
          numComments: 10,
          numViews: 100
        }],

        postsTrending: [{
          id: 1,
          title: "A post for our reddit demo starting at 15 votes",
          votes: 15,
          user: "Salih",
          numComments: 10,
          numViews: 100
        },
        {
          id: 2,
          title: "Try out the upvoting, it works, I promise",
          votes: 53,
          user: "Salih",
          numComments: 10,
          numViews: 100
        },
        {
          id: 3,
          title: "coligo is the bomb!",
          votes: 10,
          user: "Salih",
          numComments: 10,
          numViews: 100
        }],
        postsLastest: [{
          id: 1,
          title: "A post for our reddit demo starting at 15 votes",
          votes:1,
          user: "Salih",
          numComments: 10,
          numViews: 100
        },
        {
          id: 2,
          title: "Try out the upvoting, it works, I promise",
          votes: 1,
          user: "Salih",
          numComments: 10,
          numViews: 100
        },
        {
          id: 3,
          title: "coligo is the bomb!",
          votes: 2,
          user: "Salih",
          numComments: 10,
          numViews: 100
        }],
        created: function() {
          this.loadPosts();

        },
        methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
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
