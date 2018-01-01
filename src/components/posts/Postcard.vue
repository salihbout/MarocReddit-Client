<template>
<div class="PostCardsWrapper">
 <div class="SinglePostCard" >
        <el-row>
            <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" >
                    
                    <el-button size="mini" round><i class="el-icon-arrow-up" @click="upvote"></i></el-button>
                    <span class="NumberVotes">{{ post.votes }}</span>
                    <el-button size="mini" round><i class="el-icon-arrow-down" @click="downvote"></i></el-button>
                    
                
            </el-col>
            <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18" >
                <a href="#">{{ post.title }}</a>

            </el-col>
            <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" class="PostStats">
              <i class="el-icon-view"></i>
              <span>{{post.numViews}}</span>
              
              <i class="el-icon-edit"></i>
              <span>{{post.numComments}}</span>
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
      downvoted: false
    };
  },
  methods: {
    upvote: function () {
      this.upvoted = !this.upvoted;
      this.downvoted = false;
    },
    downvote: function () {
      this.downvoted = !this.downvoted;
      this.upvoted = false;
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
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    border-radius: 4px;
    margin-left: 10px;
}

.NumberVotes{
    color: #409EFF;
    font-size: 16px;
    font-weight: bold;
    padding : 5px;
}

.PostStats{
  color: gray;
}
.PostStats i{
  padding-right: 5px;
}

.PostStats span {
  padding-right: 5px;
}
</style>
