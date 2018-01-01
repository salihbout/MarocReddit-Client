<template>
   <el-row class="HomePostsSectionWrapper" :gutter="20">
        <h2>Popular Posts</h2>
        <div class="HomePostsListingWrapper" >
                <postCard v-for="post in posts" v-bind:key="post.id" :post="post">
                </postCard>
        </div>
   </el-row>
    
</template>

<script>
import Postcard from './Postcard.vue';
export default {
    props : ['posts'],
    components:{
        postCard : Postcard,
    }
  
}
</script>

<style scoped>
.HomePostsListingWrapper{

    padding-top: 5px;
}


</style>
