<template>
    <el-row :gutter="20">
      <el-col :span="16">
        <PostCard  v-for="post in posts" :post="post"></PostCard>
      </el-col>
      <el-col :span="8">
        <p>Side section</p>
      </el-col>
    </el-row>
</template>
<script>
import PostCard from '../posts/PostCard.vue';
export default {
  
  name: 'Home',
  components: {
    'PostCard' : PostCard
  },
    data() {
      return {
      posts: [{
          title: "A post for our reddit demo starting at 15 votes",
          votes: 15
        },
        {
          title: "Try out the upvoting, it works, I promise",
          votes: 53
        },
        {
          title: "coligo is the bomb!",
          votes: 10
        }]
    }
}
}
</script>
