<template>
    
  
    <el-col :span="8" class="article" >
        <el-card>
            <el-row :gutter="20">
                <el-col :span="8" >
                    <img v-bind:src="article.urlToImage" class="image">
                </el-col>
                <el-col :span="16">
                    <a :href="article.url" target="_blank" ><h4>{{article.title}}</h4></a>
                    <span> <i class="el-icon-time" ></i> {{getTimeNow(article.publishedAt)}}  </span>
                    
                </el-col>
            </el-row>

        </el-card>
    </el-col>
    
    
</template>


<script>
import moment from 'moment'
export default {
    props : ['article'],
   data() {
    return {
      currentDate: new Date()
    };
  },
  methods: {
      
    getTimeNow(time){
      return moment(time).fromNow();
    }, 




  }
}
</script>


<style scoped>

.image {

    width: 150px;
    height: 150px;

}

.article {
    padding: 5px;
}
</style>
