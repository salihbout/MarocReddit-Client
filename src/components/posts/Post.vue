<template>
  <div class="postDiv">
      <h3>Title</h3>
      <div class="SinglePostPage" >
        <el-row>
            <p>{{$router.params.id}}</p>
         </el-row>
    </div>
  </div>
</template>


<style scoped>

.postDiv{
  background-color: red;
  height: 500px;
}
</style>
