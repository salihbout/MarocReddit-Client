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
                  <span class="NumberVotes">8</span>
                  <el-button  v-bind:type="upvoteStyle" size="mini" round><i class="el-icon-arrow-up" @click="upvote" v-bind:disabled="isDownDisabled"></i></el-button>
               
                  </div>         
                      
              </el-col>
              <div class="postDetails">
                <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18"  >
                  <h1>{{SinglePost.title}}</h1> 
                  
                  <span><i class="el-icon-view"></i>  {{SinglePost.__v}} </span>
                  
                  <span> <i class="el-icon-edit" ></i> {{SinglePost._comments.length}}  comments</span>    
                  <span> by : <router-link to="/">{{SinglePost._creator.username}}</router-link>  </span>
                  <span> <i class="el-icon-time" ></i> {{getTimeNow(SinglePost.createdAt)}}  </span>  
                  
                </el-col>
              </div>
            </el-row>
          </div>
            
            <div class="PostBody"  > 
              <el-col :offset="3" :xs="24" :sm="18" :md="18" :lg="18" :xl="18"  >
                <div class="textBody">
                  <p>{{SinglePost.text}}</p>  
                </div>   
              </el-col>

            </div>

            <div class="CommentSection">
          <el-row>
            <el-col :offset="3" :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
              <h3>{{SinglePost._comments.length}}  Comments</h3>

              <div v-for="(comment, index) in SinglePost._comments" v-bind:key="index" class="SingleComment">
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
import axios from 'axios';
import moment from 'moment';
import jwt from 'jwt-simple';
import utils from '../../config/utils';
export default  {
  
  data (){
    return {
      
      SinglePost: {},
      comment:{
        textcomment : ''
      },
      upvoted: false,
      downvoted: false,
      upvoteStyle : '',
      downvoteStyle : '',
      isUpDisabled : false,
      isDownDisabled : false,
      rules: {
          textcomment: [
            { required: true, message: 'Please input a valid comment', trigger: 'blur' },
            { min: 5, max: 140, message: 'Length should be 5 to 140 character', trigger: 'blur' }
          ]

      }
    }
  },

  created() {
    
    this.getPost(this.$route.params.id);
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



    getPost (id) {
      console.log("fetching the post by ID .... " + id);
      axios.get("http://localhost:3000/api/post/" + id)
        .then(response => {
          
          this.SinglePost = response.data.post;
          console.log(this.SinglePost);
          
        })
        .catch(e => {
          console.log(e);
        });
    },

    
    submitForm() {

      if(this.$store.getters.isLoggedIn){

      
        this.$refs['comment'].validate((valid) => {

          if (valid) {

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
        
        var comment = {
          text : this.comment.textcomment,
          postId : this.$route.params.id,
          userId: decoded._id,
        }

          axios.post('http://localhost:3000/api/comment',comment,{

              headers: {Authorization : localStorage.getItem("token") }

            })
            .then((response) => {
                console.log(response);
                this.SinglePost._comments.push(comment);
            })
            .catch( (error) => {
                 console.log(error);
            });
          

          } else {

            console.log("Not valid !");
            return false;
          }
        });

    }else{
      this.$router.push("/");
    }
      },
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
        this.upvotePost(-1)
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

    getTimeNow(time){
      return moment(time).fromNow();
    }, 
    Totalupvotes(upvotes){

    },


    }
}
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

.PostBody{

  margin-top:20px;
}
.textBody {
  background-color: rgba(240, 240, 240, 0.075);
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
.SingleComment span {
  font-size: 14px;
  color: rgb(134, 134, 134);
  
  float: right;
  
}


</style>