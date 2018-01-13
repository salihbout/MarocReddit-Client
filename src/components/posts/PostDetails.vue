<template>
  
 <div class="PostWrapper">
   <div class="PostHead">
      <el-row :gutter="20"  > 
        <el-col :offset="2" :xs="24" :sm="2" :md="2" :lg="2" :xl="2" >
            <div class="Upvoter">       
            <el-button size="mini" round><i class="el-icon-arrow-up" @click="upvote"></i></el-button>
            <span class="NumberVotes">2</span>
            <el-button size="mini" round><i class="el-icon-arrow-down" @click="downvote"></i></el-button>
            </div>         
                
        </el-col>
        <div class="postDetails">
          <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18"  >
            <h1>{{post.title}}</h1> 
            
            <span><i class="el-icon-view"></i>  {{post.__v}} </span>
            
            <span> <i class="el-icon-edit" ></i> {{getCommentsCount()}}  comments</span>    
            <span> by : <router-link to="/">{{post._creator.username}}</router-link>  </span>
            
          </el-col>
        </div>
      </el-row>
    </div>
      <br>
    <div>
      <el-row :gutter="20"  > 

        <el-col  :offset="4" :xs="24" :sm="18" :md="18" :lg="18" :xl="18"  >
          <p>{{post.text}}</p>     
        </el-col>

      </el-row>

    </div>
</div>
</template>

<script>
import axios from 'axios';
export default  {
  
  data (){
    return {
      id : this.$route.params.id,
      post: {},
      upvoted: false,
      downvoted: false,
    }
    
  },

  created(){
    this.fetchPost(this.id)
    //fetch the post from API
  },

  methods : {
    
    fetchPost(id){
       console.log('fetching the post by ID ....');
          axios.get('http://localhost:3000/api/post/'+id )
          .then((response) => {
          this.post = response.data.post;
          console.log(this.post)
          
           
          })
          .catch((error) =>{
            console.log(error);
          });
    },

    upvote: function () {
      this.upvoted = !this.upvoted;
      this.downvoted = false;
    },
    downvote: function () {
      this.downvoted = !this.downvoted;
      this.upvoted = false;
    },
    getUpvotesCount : function(){
      return 2;
    },
    getCommentsCount : function(){
      return 3;
    },


    }
}
</script>

<style scoped>



.PostWrapper {

  padding-top:  30px;
  background-color: rgba(250, 250, 250, 0.986);
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  height: 1000px;

}

.Upvoter {
  padding-top: 30px;
}

h1 {
  font-size: 30px;
}

.postDetails span {

  padding-right: 50px;

}
</style>
