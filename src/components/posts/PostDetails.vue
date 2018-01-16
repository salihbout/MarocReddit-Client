<template>
<div class="pageWrapper">
  <el-row :gutter="20">
      <el-col :offset="2" :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
      <div class="PostWrapper">
        <div class="PostHead">
            <el-row :gutter="20"  > 
              <el-col  :xs="24" :sm="3" :md="3" :lg="3" :xl="3" >
                  <div class="Upvoter">       
                  <el-button size="mini" round><i class="el-icon-arrow-up" @click="upvote"></i></el-button>
                  <p class="NumberVotes">2</p>
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
            
            <div class="PostBody"  > 
              <el-col :offset="3" :xs="24" :sm="18" :md="18" :lg="18" :xl="18"  >
                <div class="textBody">
                  <p>{{post.text}}</p>  
                </div>   
              </el-col>

            </div>

            <div class="CommentSection">
          <el-row>
            <el-col :offset="3" :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
              <h3>{{getCommentsCount()}}  Comments</h3>

              <div v-for="(comment, index) in post._comments" v-bind:key="index" class="SingleComment">
                <h5>{{comment._creator.username }}</h5>
                <p>{{comment.createdAt }}</p>
                <p>{{comment.text }}</p>
              </div>

              <el-form label-position="top" label-width="100px" ref="comment" :model="comment">
                <el-form-item>
                 <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="Leave a comment !"
                  v-model="comment.textcomment">
                </el-input>
                </el-form-item>
            <el-form-item>
                          <el-button type="primary" @click="submitForm()">Submit</el-button>
            </el-form-item>

      </el-form>
            </el-col>
          </el-row>
        </div>
      </div>
      
    </el-col>
  </el-row>
</div>
</template>

<script>
import axios from "axios";
import jwt from 'jwt-simple';
import utils from '../../config/utils'
export default {
  data() {
    return {
      id: this.$route.params.id,
      post: {},
      upvoted: false,
      downvoted: false,
      comment:{
        textcomment : ''
      }
    };
  },

  created() {
    this.fetchPost(this.id);
    //fetch the post from API
  },

  methods: {
    fetchPost(id) {
      console.log("fetching the post by ID ....");
      axios
        .get("http://localhost:3000/api/post/" + id)
        .then(response => {
          this.post = response.data.post;
          console.log(this.post);
        })
        .catch(error => {
          console.log(error);
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
            .then((response)=> {
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
    downvote: function() {
      this.downvoted = !this.downvoted;
      this.upvoted = false;
    },
    getUpvotesCount: function() {
      return 2;
    },
    getCommentsCount: function() {
      if(this.post._comments){
        return  Object.keys(this.post._comments).length;
      }else{
        return 0;
      }
      
    }
  }
};
</script>

<style scoped>
.pageWrapper {
  padding-top: 10px;
}
.PostWrapper {

  background-color: white;
  
  height: 1000px;
}


.Upvoter {
  padding-top: 30px;
  text-align: center;
}

h1 {
  font-size: 30px;
}


.postDetails span {
  padding-right: 50px;
  
}

.textBody {
  background-color: rgba(240, 240, 240, 0.308);
  padding: 5px;
  line-height:130%;
  text-align: justify;
  border-bottom: 1px solid rgba(204, 204, 204, 0.384);
  color: grey
}


.SingleComment{
  background-color: rgba(240, 248, 255, 0.082);
  padding: 5px;
  border-bottom: 1px solid rgba(236, 236, 236, 0.781);
}
.SingleComment h5 {
  color: rgb(87, 104, 104);
   margin: 0;
  
}

.SingleComment h5 span {
  font-size: 10px;
  color: rgb(134, 134, 134);
  font-weight: lighter;
  
}


</style>
