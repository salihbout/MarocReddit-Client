<template>
<div class="loginCard">
    <el-row>
        <el-col :span="8"  :offset="8">
            <el-card class="box-card">
                <h2>Create your account</h2>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm" label-position="left">
                    <el-form-item label="Username" prop="username">
                        <el-input v-model="ruleForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="Password" prop="password">
                        <el-input  type="password" v-model="ruleForm.password"></el-input>
                    </el-form-item>
                    <el-form-item label="Confirm Password" prop="CheckPassword">
                        <el-input  type="password" v-model="ruleForm.CheckPassword"></el-input>
                    </el-form-item>
                    <el-form-item label="Email address" prop="email">
                        <el-input  type="email" v-model="ruleForm.email"></el-input>
                    </el-form-item>
                    
                        <el-checkbox  v-model="ruleForm.SubsChecked">Susbcribe to MarocReddit Newsletter</el-checkbox>
                    
                    <el-form-item class="formAction">
                        <el-button type="primary" @click="submitForm('ruleForm')">Sign Up</el-button>
                        <el-button @click="resetForm('ruleForm')">Reset</el-button>
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
        ruleForm: {
          username: '',
          password: '', 
          email: '',
          SubsChecked:true
        },
         rules: {
          username: [
            { required: true, message: 'Please enter your valid Username', trigger: 'blur' },
          ],
          password: [
            { required: true, message: 'Please enter your password', trigger: 'blur' },
          ],
           CheckPassword: [
            { required: true, message: 'Please confirm your password', trigger: 'blur' },
          ],
          email: [
            { required: true, message: 'Please enter your email', trigger: 'blur' },
          ]
        }
     }
},
methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {

            const user = {

                username : this.ruleForm.username,
                password : this.ruleForm.password,
                email : this.ruleForm.email,
                isSubscribed :this.ruleForm.SubsChecked

            }
            console.log(user)
          if (valid) {
             axios.post('http://localhost:3000/api/signup',user).then( response => {
                console.log(response);
            })
            .catch( error => {
                 console.log(error);
            });
            
          } else {
            console.log(this.ruleForm.username);
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
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

.formAction{
    padding-top: 25px;
}

form {
    padding-top: 25px;
    padding-bottom: 25px;
}
</style>
