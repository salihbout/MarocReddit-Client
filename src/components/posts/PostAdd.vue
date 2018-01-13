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
import axios from 'axios';
export default {
  
  data: function() {
    return {
      UserToken: "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YTU5ZDlhOGExZTAwYTA4NTAwNWE0ODUiLCJ1c2VybmFtZSI6IlphaHJhIiwicGFzc3dvcmQiOiIkMmEkMTAkMWZqSEtjV0dBVTcwaXRIaTMwaThXT1UzNWhFU1pzRWs5VjJQUmVibnlWZ3k0S3lZQmNsV3kiLCJlbWFpbCI6InNhbGloQHNhLmNvbSIsIl9fdiI6MCwiY3JlYXRlZEF0IjoiMjAxOC0wMS0xM1QxMDowNDoyNC44NDdaIiwiaXNEZWxldGVkIjpmYWxzZSwiaXNTdWJzY3JpYmVkIjp0cnVlfQ.uV90F-XdQGdIsDUWmtA_sVK_JvYTSHZYkwtZ3D7VUAA",
      ShowForm : 'Text',
      ShowLink : 'false',
      Post: {
          title: '',
          text: '',
          link:''
        },

        rules: {
          title: [
            { required: true, message: 'Please enter a title for your post', trigger: 'blur' },
          ],
        }
     
              

    };

  },

  methods : {
    submitForm() {
        this.$refs['Post'].validate((valid) => {
          if(this.ShowForm === 'Text'){
            this.link =''
          }

          if(this.ShowForm === 'Link'){
            this.text =''
          }

          if (valid) {

          axios.post('http://localhost:3000/api/post',{
                title : this.Post.title,
                text : this.Post.text,
                link : this.Post.link,
                userId: '5a59d9a8a1e00a085005a485'

            },{

              headers: {Authorization : this.UserToken }

            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                 console.log(error);
            });


          } else {
            console.log("Not valid !");
            return false;
          }
        });
      },
      onChange(){
        this.text =  '',
        this.link = ''
      }
  }
};
</script>

<style scoped>
.PostWrapper {
  padding-top: 50px;
}
</style>
