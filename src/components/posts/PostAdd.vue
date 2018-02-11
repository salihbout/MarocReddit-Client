<template>

 <div class="PostWrapper">
    <el-row :gutter="20" > 
      <el-col :offset="4" :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
        <el-radio-group  size="medium" v-model="ShowForm"  v-on:change="onChange">
                <el-radio label="Text" border>A Text Post </el-radio>
                <el-radio label="Link" border>A Link Post</el-radio>
        </el-radio-group>
        <div style="margin: 20px;"></div>
        <el-form label-position="top" label-width="100px" ref="Post" :model="Post">
          
          
            <el-form-item label="Post Title" prop="title">
              <el-input v-model="Post.title"></el-input>
            </el-form-item>

            <el-form-item v-if="ShowForm ==='Text'" label="Post Text">
              <el-input
              label
                type="textarea"
                :rows="10"
                placeholder="Please input"
                v-model="Post.text">
              </el-input>
            </el-form-item>

            <el-form-item v-if="ShowForm === 'Link'" label="Post Link">
                <el-input v-model="Post.link"></el-input>
          </el-form-item>

          <el-form-item>
                        <el-button type="primary" @click="submitForm()">Submit Post</el-button>
          </el-form-item>

      </el-form>
      </el-col>
      
    </el-row>
  </div> 

</template>

<script>
import axios from "axios";
import jwt from "jwt-simple";
import utils from "../../config/utils";
export default {
  data: function() {
    return {
      ShowForm: "Text",
      ShowLink: false,
      Post: {
        title: "",
        text: "",
        link: ""
      },

      rules: {
        title: [
          {
            required: true,
            message: "Please enter a title for your post",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/");
    }
  },

  methods: {
    submitForm() {
      if (this.$store.getters.isLoggedIn) {
        this.$refs["Post"].validate(valid => {
          if (this.ShowForm === "Text") {
            this.link = "";
          }

          if (this.ShowForm === "Link") {
            this.text = "";
          }

          if (valid) {
            var token = utils.getToken(localStorage.getItem("token"));

            if (token) {
              var decoded = jwt.decode(token, utils.Secret);

              var post = {
                title: this.Post.title,
                text: this.Post.text,
                link: this.Post.link,
                userId: decoded._id
              };
            }

            
            axios
              .post("http://localhost:3000/api/post", post, {
                headers: { Authorization: localStorage.getItem("token") }
              })
              .then(response => {

                console.log(response);
                if (response.data.success) {
                  
                  const newPostId = response.data.Postdata._id;
                  this.$router.push({
                    name: "PostShow",
                    params: { id: newPostId }
                  });
                }else{
                  this.router.push('/');
                }
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

    onChange() {
      (this.text = ""), (this.link = "");
    }
  }
};
</script>

<style scoped>
.PostWrapper {
  padding-top: 50px;
}
</style>
