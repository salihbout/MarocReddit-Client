<template>
  <el-row :gutter="20"  class="ChatWrapper">
      
    <el-col :span="3">
            <OnlineUsers :OnlineUsers="OnlineUsers"></OnlineUsers>
    </el-col>
    
    <el-col :span="21">

        <Messages></Messages>    

    </el-col>
</el-row>
</template>


<script>
import Messages from './Messages.vue';
import OnlineUsers from './OnlineUsers.vue';

export default {
    components:{
        Messages : Messages,
        OnlineUsers : OnlineUsers
    },

    data() {
        return {
            OnlineUsers : [
                {
                    username : "salih",
                    avatar : "https://static.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                },
                {
                    username : "Booout",
                    avatar : "https://static.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                }
            ],
            Messages : [],
            Message : {
                type:"",
                action: "", 
                user : "",
                text : "", 
                timestamp : ""
            }
        }
    }, 

    created() {

    }
  
}
</script>


<style scoped>


.ChatWrapper {
    margin-top: 15px;
    position: relative;
}



</style>
