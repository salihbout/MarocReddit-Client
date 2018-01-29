<template>
  <el-row :gutter="20"  class="ChatWrapper">
      
    <el-col :span="3">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>Online Users (8)</span>
                </div>
                <el-row :gutter="20" v-for="o in 10" :key="o" class="UserOnline">
                    <el-col :span="6"><img class="ChatAvatar" src="https://static.pexels.com/users/avatars/7344/stefan-stefancik-817-medium.jpeg" alt="avatar"></el-col>
                    <el-col :span="18">
                        <h5>{{'Username ' + o }}</h5>
                    </el-col>
                    
                </el-row>
            </el-card>
    </el-col>
    
    <el-col :span="21" class="MessagesWrapper">
            <el-card class="messages">
               
                    <el-row v-for="o in 4" :key="o">
                   
                   <el-col :span="1"><img class="ChatAvatar" src="https://static.pexels.com/users/avatars/7344/stefan-stefancik-817-medium.jpeg" alt="avatar"></el-col>
                    <el-col :span="23">
                        <h5>{{'Username ' + o }}</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum et accusamus labore maxime nobis iusto vero recusandae, architecto minima dolores ducimus autem dolore sequi facilis perferendis, debitis ea facere.</p>
                    </el-col>
                   
                </el-row>
                
                
                 <el-form :model="MessageForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
                        <el-form-item prop="desc">
                            <el-input type="textarea" v-model="message" class="MessageInput"></el-input>
                        </el-form-item>
                    </el-form>
            </el-card>

    </el-col>
</el-row>
</template>


<script>
export default {
  
}
</script>


<style scoped>


.ChatWrapper {
    margin-top: 15px;


}
.UserOnline{
    width: 100%;
    margin-bottom: 2px;
    padding-bottom: 10px;
}

.UserOnline h5{
    margin-left: 10px;
}

.ChatAvatar {
    height: 40px;
    width: 40px;
    border-radius: 50px;
    margin-top: 10px;
    border: 3px solid rgb(19, 107, 221);
    
}

.MessagesWrapper {
    overflow: auto;
    max-height: 100vh; 
}

.messages {
    height: 850px;
}

.MessageInput {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 50px;
    z-index: 99;
    background: #fafafa;
    border: none;
    outline: none;

    color: #666;
    font-weight: 400;
}

</style>
