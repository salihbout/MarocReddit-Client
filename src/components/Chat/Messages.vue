<template>
<div>
  <div class="Messages">
                    <el-row v-for="o in 10" :key="o">
                        <div class="Message">
                            <el-col :span="1">
                                <img class="ChatAvatar" src="https://static.pexels.com/users/avatars/7344/stefan-stefancik-817-medium.jpeg" alt="avatar">
                            
                            </el-col>
                                <el-col :span="23" class="MessageBody">
                                    <span><i class="el-icon-time" ></i> 1d ago  </span>
                                    <h5>{{'Username ' + o }} </h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum et accusamus labore maxime nobis iusto vero recusandae, architecto minima dolores ducimus autem dolore sequi facilis perferendis, debitis ea facere.</p>
                                </el-col>
                                
                        </div>
                    </el-row>
                </div>
                <div class="SendMessage">
                 <el-form :model="MessageForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
                     <el-row :gutter="20">
                            <el-col :span="22">
                                <el-form-item prop="desc">
                                    <el-input type="textarea" v-model="message" class="MessageInput"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="2">
                                <el-form-item prop="desc">
                                    <el-button type="primary">Send</el-button>
                                </el-form-item>
                            </el-col>
                            
                        </el-row>
                    </el-form>
                </div>
    </div>        
</template>


<script>
export default {
    props:  ['Messages'],
  
}
</script>

<style scoped>

.ChatAvatar {
    height: 40px;
    width: 40px;
    border-radius: 50px;
    margin-top: 10px;
    border: 3px solid rgb(19, 107, 221);
    
}

.Messages {
    border: rgb(192, 192, 192) solid 1px;
    padding: 10px;
    overflow: auto;
    overflow-y: scroll;
    height: 775px;
    min-height: 100%;
}



.MessageBody span {
    float: right;
    font-weight: lighter;
    font-size: 10px;
    color: #666;
    padding-top: 15px;
}

.SendMessage{
    position: absolute fixed;
    bottom: 0px;
    border: rgb(192, 192, 192) solid 1px;
    padding: 10px;

}
.MessageInput {
   
  
    height: 40px;
    z-index: 99;
    background: #fafafa;
    border: none;
    outline: none;
    color: #666;
    font-weight: 400;
}
</style>

