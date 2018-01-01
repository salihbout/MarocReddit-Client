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
                        <el-input  type="password" v-model="ruleForm.password"></el-input>
                    </el-form-item>
                    <el-form-item label="Email address" prop="email">
                        <el-input  type="email" v-model="ruleForm.password"></el-input>
                    </el-form-item>
                    <el-checkbox-group v-model="ruleForm.type">
                        <el-checkbox label="Susbcribe to MarocReddit Newsletter" name="type"></el-checkbox>
                    </el-checkbox-group>
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
export default {
    
     data() {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
         rules: {
          username: [
            { required: true, message: 'Please enter your valid email', trigger: 'blur' },
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
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log(this.username);
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
