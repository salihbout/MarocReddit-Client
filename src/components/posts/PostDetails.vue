<template>
  <div class="postDiv">
      <h3>Post Title</Title></h3>
      <div class="SinglePostPage" >
        <el-row>
            <p>ID : {{id}}</p>
         </el-row>
    </div>
  </div>
</template>

<script>
module.exports =  {
  
  data (){
    return {
      id : this.$route.params.id
    }
  },
}
</script>

<style scoped>

.postDiv{
  background-color: red;
  height: 500px;
}
</style>
