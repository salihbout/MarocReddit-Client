<template>
<div class="PostCardsWrapper">
 <div class="SinglePostCard" >
        <el-row>
            <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" >
                    
                    <el-button size="mini" round><i class="el-icon-arrow-up" @click="upvote"></i></el-button>
                    <span class="NumberVotes">{{ getUpvotesCount() }}</span>
                    <el-button size="mini" round><i class="el-icon-arrow-down" @click="downvote"></i></el-button>
                    
                
            </el-col>
            <el-col :xs="17" :sm="17" :md="17" :lg="17" :xl="17" >
               <el-tag size="small">{{printType(post)}}</el-tag>
               <router-link  :to="'/posts/'+ post._id">{{ post.title }}</router-link> 
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="PostStats">
       
                 <i class="el-icon-view"></i>
                 <span>{{post.__v}}</span>
      
              
              <span></span>

               <router-link to="#" class="postCardLinks" > 
                <i class="el-icon-edit" ></i>
                <span>{{getCommentsCount()}} </span>
               </router-link>
               <span> |  By :</span>
               <router-link to="#" class="postCardLinks">
                 <span>  {{post._creator.username}} </span>
               </router-link>
            </el-col>
        </el-row>
    </div>
    
</div>
   
</template>

<script>
export default {
props: ['post'],
 data: function () {
    return {
      upvoted: false,
      downvoted: false,
      
    }
  },
  watch : {
    '$router'(to, from){
      thi
    }
  },
  methods: {
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

    printType : function(post){
      if(post.text =="" || typeof post.text =='undefined'){
        return 'Article';
      }else {}
        return 'Link';
      }
    },
  computed: {
    votes: function () {
      if (this.upvoted) {
        return this.post.votes + 1;
      } else if (this.downvoted) {
        return this.post.votes - 1;
      } else {
        return this.post.votes;
      }
    }
  }

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
    padding-left: 10px;
    border-radius: 4px;
    
}

.NumberVotes{
    color: #409EFF;
    font-size: 18px;
    font-weight: bold;
    padding : 5px;
}

.PostStats{
  color: gray;
}
.PostStats i{
  padding-right: 2px;
}

.PostStats span {
  padding-right: 3px;
}

.postCardLinks {
  color: #409EFF;
  font-weight: bold;
  padding-right: 2px;
  text-decoration-style: none;
}
</style>
