<template>
<div class="pageWrapper">
  <el-row :gutter="20">
      <el-col :offset="2" :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
      <div class="PostWrapper">
        <div class="PostHead">
            <el-row :gutter="20"  > 
              <el-col  :xs="24" :sm="3" :md="3" :lg="3" :xl="3" >
                  <div class="Upvoter">   

                    <el-button v-bind:type="downvoteStyle" size="mini" round><i class="el-icon-arrow-down" @click="downvote"  v-bind:disabled="isUpDisabled"></i></el-button>
                          <span class="NumberVotes">{{totalAmountUpvotes}}</span>
                    <el-button  v-bind:type="upvoteStyle" size="mini" round><i class="el-icon-arrow-up" @click="upvote" v-bind:disabled="isDownDisabled"></i></el-button>
               
                  </div>         
                      
              </el-col>
              <div class="postDetails">
                <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18"  >
                  <h1>{{post.title}}</h1> 
                  
                  <span><i class="el-icon-view"></i>  {{post.__v}} </span>
                  
                  <span> <i class="el-icon-edit" ></i> {{post._comments.length}}  comments</span>    
                  <span> by : <router-link to="/">{{post._creator.username}}</router-link>  </span>
                  <span> <i class="el-icon-time" ></i> {{getTimeNow(post.createdAt)}}  </span>  
                  
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
              <h3>{{post._comments.length}}  Comments</h3>

              <div v-for="(comment, index) in post._comments" v-bind:key="index" class="SingleComment">
                <h5>{{comment._creator.username }}</h5><span>{{getTimeNow(comment.createdAt)}}</span>
                
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
import moment from "moment";
import jwt from "jwt-simple";
import utils from "../../config/utils";
import { upvoteMixin } from "../../mixins/upvoteMixin";
export default {
  mixins: [upvoteMixin],
  data() {
    return {
      post: {},
      comment: {
        textcomment: ""
      },

      rules: {
        textcomment: [
          {
            required: true,
            message: "Please input a valid comment",
            trigger: "blur"
          },
          {
            min: 5,
            max: 140,
            message: "Length should be 5 to 140 character",
            trigger: "blur"
          }
        ]
      }
    };
  },

  created() {
    this.getPost(this.$route.params.id);
  },

  methods: {
    getPost(id) {
      console.log("fetching the post by ID .... " + id);
      axios
        .get("http://localhost:3000/api/post/" + id)
        .then(response => {
          this.post = response.data.post;
        })
        .catch(e => {
          console.log(e);
        });
    },

    submitForm() {
      if (this.$store.getters.isLoggedIn) {
        this.$refs["comment"].validate(valid => {
          if (valid) {
            var tokenStore = localStorage.getItem("token");

            if (tokenStore) {
              var token = utils.getToken(tokenStore);
              console.log("Token from adding post : " + token);
              console.log(utils.Secret);
              var decoded = jwt.decode(token, utils.Secret);
            } else {
              console.log("user not logged in ");
              this.$router.push("/login");
            }

            var commentToStore = {
              text: this.comment.textcomment,
              postId: this.$route.params.id,
              userId: decoded._id
            };
            
            axios
              .post("http://localhost:3000/api/comment", commentToStore, {
                headers: { Authorization: localStorage.getItem("token") }
              })
              .then(response => {
                console.log(response);
/*                 let commentToShow = {
                        text: this.comment.textcomment,
                        _creator: {
                              _id: decoded._id,
                              username: decoded.username
                          },
                        createdAt: Date()
                      }, */

                this.post._comments.push({
                
                 text: this.comment.textcomment,
                _creator: {
                   
                    username:  decoded.username
                },
                createdAt: Date()
            });


                this.comment.textcomment = '';
              })
              .catch(error => {
                console.log(error);
              });
          } else {
            console.log("Not valid !");
            return false;
          }
        });
      } else {
        this.$router.push("/");
      }
    },

    getTimeNow(time) {
      return moment(time).fromNow();
    },
    
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

.NumberVotes{
    color: #409EFF;
    font-size: 18px;

    padding : 5px;
}

h1 {
  font-size: 30px;
}
.postDetails span {
  padding-right: 50px;
}

.PostBody {
  margin-top: 20px;
}
.textBody {
  background-color: rgba(240, 240, 240, 0.075);
  padding: 5px;
  line-height: 130%;
  text-align: justify;
  border-bottom: 1px solid rgba(204, 204, 204, 0.384);
  color: grey;
}
.SingleComment {
  background-color: rgba(240, 248, 255, 0.082);
  padding: 5px;
  border-bottom: 1px solid rgba(236, 236, 236, 0.781);
}
.SingleComment h5 {
  color: rgb(87, 104, 104);
  margin: 0;
}
.SingleComment span {
  font-size: 14px;
  color: rgb(134, 134, 134);

  float: right;
}
</style>