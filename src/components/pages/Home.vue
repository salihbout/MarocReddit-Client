<template>
   <div id="HomePageWrapper">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16" :offset="1">
        <el-tabs v-model="activeName" >
        <el-tab-pane label="Popular" name="first">
          <HomePostsSection :posts="postsFetched"></HomePostsSection>
        </el-tab-pane>
        <el-tab-pane label="Trending" name="second">
          <HomePostsSection :posts="postsFetched"></HomePostsSection>
        </el-tab-pane>
        <el-tab-pane label="Latest" name="third">
          <HomePostsSection :posts="postsFetched"></HomePostsSection>
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
        postsFetched :  {} ,
        
    }


    },
      created() {

          console.log('fetching posts ....');
          axios.get('http://localhost:3000/api/posts')
          .then((response) => {
          this.postsFetched = response.data.posts;
          
           
          })
          .catch((error) =>{
            console.log(error);
          });

        },
      methods: {

}
}
</script>

<style scoped>
#HomePageWrapper {

  padding-top:  30px;

}
</style>
