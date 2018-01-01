<template>
<div class="loginCard">
    <el-row>
        <el-col :span="8"  :offset="8">
            <el-card class="box-card">
                <h2>Login to your acount</h2>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm" label-position="left">
                    <el-form-item label="Username" prop="username">
                        <el-input v-model="ruleForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="Password" prop="password">
                        <el-input  type="password" v-model="ruleForm.password"></el-input>
                    </el-form-item>
                    <el-form-item label="Remeber Me !" prop="remember">
                        <el-switch v-model="ruleForm.remember"></el-switch>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">Login</el-button>
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

form {
    padding-top: 25px;
    padding-bottom: 25px;
}
</style>
