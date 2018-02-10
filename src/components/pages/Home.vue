<template>
  <el-container>
   <div id="HomePageWrapper">
    <el-row :gutter="20">
      <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18" >
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
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" >
          <HomeSideSection></HomeSideSection>
      </el-col>
    </el-row>
  </div> 
  </el-container>
</template>
<script>
import HomePostsSection from '../posts/HomePostsSection.vue';
import HomeSideSection from '../various/HomeSideSection.vue';
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
