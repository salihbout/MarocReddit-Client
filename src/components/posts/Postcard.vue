<template>
<div class="PostCardsWrapper">
 <div class="SinglePostCard" >
        <el-row>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" >
                    
                    <el-button v-bind:type="downvoteStyle" size="mini" round><i class="el-icon-arrow-down" @click="downvote"  v-bind:disabled="isUpDisabled"></i></el-button>
                          <span class="NumberVotes">2</span>
                    <el-button  v-bind:type="upvoteStyle" size="mini" round><i class="el-icon-arrow-up" @click="upvote" v-bind:disabled="isDownDisabled"></i></el-button>
                    
                
            </el-col>
            <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16" >
               <el-tag size="small">{{typePost}}</el-tag>
               <router-link  :to="PostLink">{{ post.title }}</router-link> 
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="PostStats">
       
                 <i class="el-icon-view"></i>
                 <span>{{post.__v}}</span>
      
              
              <span></span>

               <router-link to="#" class="postCardLinks" > 
                <i class="el-icon-edit" ></i>
                <span>2 </span>
               </router-link>
                 | By :
               <router-link to="#" class="postCardLinks">
                 <span>  {{post._creator.username}} </span>
               </router-link>
            </el-col>
        </el-row>
    </div>
    
</div>
   
</template>

<script>
import axios from 'axios';
import jwt from 'jwt-simple';
import utils from '../../config/utils'
export default {
props: ['post'],
 data: function () {
    return {
      upvoted: false,
      downvoted: false,
      upvoteStyle : '',
      downvoteStyle : '',
      isUpDisabled : false,
      isDownDisabled : false,
      isLink : false,
      PostLink : '',
      typePost : 'Post'
      
    }
  },
  created(){

    if(this.post.text ==="" || typeof this.post.text ==='undefined'){
        this.typePost = 'Link'
        thisisLink : true
        this.PostLink = this.post.link
      }
      
    if(this.post.link ==="" || typeof this.post.link ==='undefined') {
        this.typePost = 'Post'
        this.PostLink = '/posts/'+ this.post._id
      }

      
       
    
  },
  methods: {
    upvote: function () {
  
      if(!this.upvoted){
        
        this.upvoted = true
        this.upvoteStyle = 'success';
        this.upvotePost(1)
      }else{
        this.upvoteStyle = '';
        this.upvoted = false
      }
      

    },
    downvote: function () {

     if(!this.downvoted){
        
        this.downvoted = true
        this.downvoteStyle = 'danger';
        this.upvotePost(1)
      }else{
        this.downvoteStyle = '';
        this.downvoted = false
      }
    },

    upvotePost : function(voteAmount){
        if(voteAmount == 1){
          this.isUpDisabled =true;
        }else if(voteAmount == -1){
          this.isDownDisabled =true;
        }
        
        var tokenStore = localStorage.getItem("token");
        
        if(tokenStore){
          var token = utils.getToken(tokenStore);
          console.log("Token from adding post : " + token);
          console.log(utils.Secret);
          var decoded = jwt.decode(token, utils.Secret);
        }else{
          console.log("user not logged in ");
          this.$router.push('/login');
        }
          

        var upvoteToSave = {

          userId : decoded._id,
          postId : this.post._id,
          amount : voteAmount

        }

        axios.post("http://localhost:3000/api/vote/", upvoteToSave).then((response)=>{
          console.log(response);
        }).catch((error) => {
          console.log(error)
        });

        this.btnAble = '';
    },

    getUpvotesCount : function(){
      return 2;
    },


    printType : function(post){
      
      }
    },


}
</script>


<style scoped>

.PostCardsWrapper {

    padding-top: 10px;
}

.SinglePostCard{

    background-color: white;
    border: 1px solid #F5F5F5;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    border-radius: 4px;
    
}

.NumberVotes{
    color: #409EFF;
    font-size: 18px;

    padding : 5px;
}

.PostStats{
  color: gray;
}
.PostStats i{
  padding-right: 2px;
}

.PostStats span {
  padding-right: 2px;
}

.postCardLinks {
  color: #409EFF;
  font-weight: bold;
  padding-right: 2px;
  text-decoration-style: none;
}
</style>
