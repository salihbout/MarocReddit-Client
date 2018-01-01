<template>

    <el-row :gutter="20" type="flex" >
      <el-col :span="16" :offset="2">
        <HomePostsSection :posts="posts"></HomePostsSection>
      </el-col>
      <el-col :span="8">
        <p>Side section</p>
      </el-col>
    </el-row>
</template>
<script>
import HomePostsSection from '../posts/HomePostsSection.vue';

export default {
  
  name: 'Home',
  components : {
    HomePostsSection : HomePostsSection,
  },
    data() {
      return {
      posts: [{
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
        }]
    }
}
}
</script>

