<template>
  <el-row :gutter="20"  class="ChatWrapper">
      
    <el-col :span="3">
            <OnlineUsers :OnlineUsers="OnlineUsers"></OnlineUsers>
    </el-col> 
    
    <el-col :span="21">

        <Messages :Messages="Messages"></Messages>    

    </el-col>
</el-row>
</template>


<script>
import Messages from '../Chat/Messages.vue';
import OnlineUsers from '../Chat/OnlineUsers.vue';
import axios from 'axios'

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
            RoomData : '', 
           
                /* {
                    type:"",
                    action: "", 
                    user : {

                            username : "salih",
                            avatar : "https://static.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                    },
                    text : "Hello lorem upsooom ! ", 
                    timestamp : new Date()
            },
             {
                    type:"",
                    action: "", 
                    user : {
                        
                            username : "salih",
                            avatar : "https://static.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                    },
                    text : "Hello other ! ", 
                    timestamp : new Date()
            }, */

            
            Message : {
                type:"",
                action: "", 
                user : "",
                text : "", 
                timestamp : ""
            }
        }
    }, 

    methods : {
        fetchMessages(RoomId){

            console.log("fetching the message by room ID .... " + RoomId);
            axios.get("http://localhost:3000/api/chat/" + RoomId)
            .then(response => {
          
            this.RoomData = response.data.room;
            console.log(this.RoomData);
          
        })
        .catch(e => {
          console.log(e);
        });
        }
    },

    created() {
        this.fetchMessages(this.$route.params.id)
    }
  
}
</script>


<style scoped>


.ChatWrapper {
    margin-top: 15px;
    position: relative;
}



</style>
