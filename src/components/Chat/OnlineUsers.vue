<template>
  
            <div class="box-card OnlineUsers">
                <div slot="header" class="clearfix OnlineUsersCounter">
                    Online Users<span> {{OnlineUsers.length}}</span>
                </div>
                <el-row :gutter="20" v-for="(user, idx) in OnlineUsers" v-bind:key="idx" class="UserOnline">
                    <el-col :span="6"><img class="ChatAvatar" v-bind:src="user.avatar" alt="avatar"></el-col>
                    <el-col :span="18">
                        <h5>{{user.username }}</h5>
                    </el-col>
                    
                </el-row>
            </div>
    
</template>


<script>
export default {
        props:  ['OnlineUsers'],
        data (){

            return {
                areTyping : []

            }
        }

  
}
</script>


<style scoped>
.OnlineUsersCounter {

    padding: 5px;
    font-weight: bold;

}

.OnlineUsersCounter span {
    color: blue;
}
.OnlineUsers {
    border: rgb(192, 192, 192) solid 1px;
    padding: 5px;
    height: 810px;
    min-height: 100%;
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
</style>
