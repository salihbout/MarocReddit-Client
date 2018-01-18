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
      id: this.$route.params.id,
      SinglePost: null,
      upvoted: false,
      downvoted: false,
      comment:{
        textcomment : ''
      }
    },
       {
        rules: {
          textcomment: [
            { required: true, message: 'Please input a valid comment', trigger: 'blur' },
            { min: 5, max: 140, message: 'Length should be 5 to 140 character', trigger: 'blur' }
          ]

      }
    };
  },

  created() {
    
    this.getPost();
    
  },
  watch: {
  // call again the method if the route changes
  '$route': 'getPost'
},

  methods: {

    getPost () {
      console.log("fetching the post by ID .... " + this.$route.params.id);
      axios.get("http://localhost:3000/api/post/" + this.$route.params.id)
        .then(response => {
          console.log(response.data.post);
          this.SinglePost = response.data.post;
          
        })
        .catch(e => {
          console.log(e);
        });
    },
    submitForm() {
        this.$refs['comment'].validate((valid) => {

          if (valid) {

        var token = utils.getToken(localStorage.getItem("token"));
        console.log("Token from adding post : " + token);
        console.log(utils.Secret);
        var decoded = jwt.decode(token, utils.Secret);
        
        var comment = {
          text : this.comment,
          postId : this.id,
          userId: decoded._id,
        }

          axios.post('http://localhost:3000/api/comment',comment,{

              headers: {Authorization : localStorage.getItem("token") }

            })
            .then((response) => {
                console.log(response);
                this.$router.push("/posts/"+this.id);
            })
            .catch( (error) => {
                 console.log(error);
            });
          this.post._comments.push(comment);

          } else {
            console.log("Not valid !");
            return false;
          }
        });
      },

    upvote: function() {
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
