<template>
   <div id="HomePageWrapper">
    <el-row :gutter="20">
      <el-col :span="16" :offset="1" >
        <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Popular" name="first">
          <HomePostsSection :posts="postsPopular"></HomePostsSection>
        </el-tab-pane>
        <el-tab-pane label="Trending" name="second">
          <HomePostsSection :posts="postsTrending"></HomePostsSection>
        </el-tab-pane>
        <el-tab-pane label="Latest" name="third">
          <HomePostsSection :posts="postsLastest"></HomePostsSection>
        </el-tab-pane>
      </el-tabs>
      </el-col>
      <el-col :span="6">
                <HomeSideSection></HomeSideSection>

      </el-col>
    </el-row>
  </div>
</template>
<script>
import HomePostsSection from '../posts/HomePostsSection.vue';
import HomeSideSection from './HomeSideSection.vue';

export default {
  
  name: 'Home',
  components : {
    HomePostsSection : HomePostsSection,
    HomeSideSection : HomeSideSection
  },
    data() {
      return {
        activeName: 'first',
      postsPopular: [{
          id: 1,
          title: "A post for our reddit demo starting at 15 votes",
          votes: 100
        },
        {
          id: 2,
          title: "Try out the upvoting, it works, I promise",
          votes: 200
        },
        {
          id: 3,
          title: "coligo is the bomb!",
          votes: 100
        }],

        postsTrending: [{
          id: 1,
          title: "A post for our reddit demo starting at 15 votes",
          votes: 15
        },
        {
          id: 2,
          title: "Try out the upvoting, it works, I promise",
          votes: 53
        },
        {
          id: 3,
          title: "coligo is the bomb!",
          votes: 10
        }],
        postsLastest: [{
          id: 1,
          title: "A post for our reddit demo starting at 15 votes",
          votes:1
        },
        {
          id: 2,
          title: "Try out the upvoting, it works, I promise",
          votes: 1
        },
        {
          id: 3,
          title: "coligo is the bomb!",
          votes: 2
        }],

        methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }


    }
}
}
</script>

<style scoped>
#HomePageWrapper {
padding-top:  30px;;

}
</style>
