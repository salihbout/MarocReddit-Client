<template>
<div class="PostCardsWrapper">
 <div class="SinglePostCard" >
        <el-row>
            <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" >
                    
                    <el-button v-bind:type="downvoteStyle" size="mini" round><i class="el-icon-arrow-down" @click="downvote"  v-bind:disabled="isUpDisabled"></i></el-button>
                          <span class="NumberVotes">{{totalAmountUpvotes}}</span>
                    <el-button  v-bind:type="upvoteStyle" size="mini" round><i class="el-icon-arrow-up" @click="upvote" v-bind:disabled="isDownDisabled"></i></el-button>
                    
                
            </el-col>
            <el-col :xs="17" :sm="17" :md="17" :lg="17" :xl="17" >
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
import {upvoteMixin} from '../../mixins/upvoteMixin';
export default {
props: ['post'],
mixins : [upvoteMixin],
 data: function () {
   
    return {
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
