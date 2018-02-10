<template>
<div class="loginCard">
    <el-row>
        <el-col :span="8"  :offset="8">
            <el-card class="box-card">
                <h2>Login to your acount</h2>
                <el-form :model="User" :rules="rules" ref="User" label-width="120px" class="demo-User" label-position="left">
                    <el-form-item label="Username" prop="username">
                        <el-input v-model="User.username"></el-input>
                    </el-form-item>
                    <el-form-item label="Password" prop="password">
                        <el-input  type="password" v-model="User.password"></el-input>
                    </el-form-item>
                    <el-form-item label="Remeber Me !" prop="remember">
                        <el-switch v-model="User.remember"></el-switch>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('User')">Login</el-button>
                        <el-button @click="resetForm('User')">Reset</el-button>
                    </el-form-item>
                    
                </el-form>

                        
            </el-card>
        </el-col> 
    </el-row>
</div>
</template>


<script>
import axios from 'axios';
export default {
    
     data() {
      return {
          
        User: {
          username: '',
          password: ''
        },
         rules: {
          username: [
            { required: true, message: 'Please enter your valid email', trigger: 'blur' },
          ],
          password: [
            { required: true, message: 'Please enter your password', trigger: 'blur' },
          ]
        }
     }
},
methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

            console.log("Username : " + this.User.username);
            console.log("password : " +this.User.password);

            axios.post('http://localhost:3000/api/authenticate',{
                username : this.User.username,
                password : this.User.password
            })
            .then( (response) => {
                console.log(response.data.token);
                if(response.data.token && typeof response.data.token ==! 'undefined'){
                    this.updateStore(response.data.token);
                    this.$router.push("/");
                }
                
                

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
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }, 
      updateStore(token){
        
        this.$store.dispatch("login",token);

      }
    }, 
    created(){
        console.log(this.$store)
    }
}
</script>

<style scoped>
.loginCard {
    padding-top: 50px;
    padding-bottom: 60px;
}

h2 {
    text-align: center;
    color: #409EFF;
}

form {
    padding-top: 25px;
    padding-bottom: 25px;
}
</style>
