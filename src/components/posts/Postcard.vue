<template>
<div class="PostCardsWrapper">
 <div class="SinglePostCard" >
        <el-row>
            <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" >
                    
                    <el-button size="mini" round><i class="el-icon-arrow-up" @click="upvote"></i></el-button>
                    <span class="NumberVotes">{{ post.votes }}</span>
                    <el-button size="mini" round><i class="el-icon-arrow-down" @click="downvote"></i></el-button>
                    
                
            </el-col>
            <el-col :xs="21" :sm="21" :md="21" :lg="21" :xl="21">
                <a>{{ post.title }}</a>
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
</style>
