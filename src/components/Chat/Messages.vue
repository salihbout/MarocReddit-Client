<template>
<div>
  <div class="Messages">
                    <el-row v-for="(msg, index) in Messages" :key="index">
                        <div class="Message">
                           <!--  <el-col :span="1">
                                <img class="ChatAvatar" v-bind:src="msg.user.avatar" alt="avatar">
                            
                            </el-col> -->
                                <el-col :span="24" class="MessageBody">
                                    <span><i class="el-icon-time" ></i>{{getTimeNow(msg.createdAt)}}  </span>
                                    <h5>{{msg._creator.username}} </h5>
                                    <p>{{ msg.text}}</p>
                                </el-col>
                                
                        </div>
                    </el-row>
                </div>


                <div class="SendMessage">
                 <el-form ref="messageForm" :rules="rules"  class="demo-ruleForm">
                     <el-row :gutter="20">
                            <el-col :span="22">
                                <el-form-item prop="messageField">
                                    <el-input type="textarea" v-model="MessageInputForm.message" class="MessageInput"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="2">
                                <el-form-item >
                                    <el-button @click="submitForm()" type="primary">Send</el-button>
                                </el-form-item>
                            </el-col>
                            
                        </el-row>
                    </el-form>
                </div>
    </div>        
</template>


<script>
import moment from "moment";
import axios from "axios";
export default {
  props: ["Messages", "RoomId"],
  data() {
    return {
      MessageInputForm : {
          message: ""
          
          },

      rules: {
        messageField: [
          {
            required: true,
            message: "Please enter a message",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm() {
     
      if (this.$store.getters.isLoggedIn) {
        this.$refs['messageForm'].validate((valid) => {
          if (valid) {
            var token = utils.getToken(localStorage.getItem("token"));

            if (token) {
              const decoded = jwt.decode(token, utils.Secret);
               console.log(this.MessageInputForm.message);
              axios
                .post("http://localhost:3000/api/message", {
                  message: this.messageInputField,
                  userId: decoded._id,
                  roomId: this.RoomId
                })
                .then(response => {
                  if (response.data.success) {
                    this.Messages.push({
                      text: this.message,
                      _creator: {
                        username: decoded.username
                      },
                      createdAt: Date()
                    });
                    console.log('message sent !')    
                    this.message = "";
                  }else{
                      console.log('Error sending your message...')
                  }
                })
                .catch(function(error) {
                  console.log(error);
                });
            }
          }
        });
      } else {
        this.$router.push("/login");
      }
    },

    getTimeNow(time) {
      return moment(time).fromNow();
    }
  }
};
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
  border: rgb(226, 226, 226) solid 1px;
  padding: 10px;
  overflow: auto;
  overflow-y: scroll;
  height: 700px;
  min-height: 100%;
}

.MessageBody span {
  float: right;
  font-weight: lighter;
  font-size: 10px;
  color: #666;
  padding-top: 15px;
}

.SendMessage {
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

