<template>
    <el-card class="box-card">
        <el-row>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                <li class="list-group-item">
                    <i class="glyphicon glyphicon-chevron-up" @click="upvote"></i>
                    <span class="label label-primary">{{ post.votes }}</span>
                    <i class="glyphicon glyphicon-chevron-down" @click="downvote"></i>
                    
                </li>
            </el-col>
            <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
                <a>{{ post.title }}</a>
            </el-col>
        </el-row>
    </el-card>
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

</style>
