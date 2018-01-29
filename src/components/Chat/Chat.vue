<template>
  <el-container style="height: 1080px; border: 1px solid #eee">
    <el-aside width="300px">
            <el-card class="box-card">
                <div slot="header" class="clearfix OnlineUsersHeader">
                    <span>Online Users (8)</span>
                </div>
                <el-row v-for="o in 8" :key="o" class="UserOnline">
                    <el-col :span="6"><img  src="https://static.pexels.com/users/avatars/7344/stefan-stefancik-817-medium.jpeg" alt="avatar"></el-col>
                    <el-col :span="18"><div class="UserOnlineInfo " >
                        <h5>{{'Username ' + o }}</h5>
                        <small>hello</small>
                    </div>
                    </el-col>
                    
                </el-row>
            </el-card>
    </el-aside>
    
    <el-container>
            

    </el-container>
</el-container>
</template>


<script>
export default {
  
}
</script>


<style scoped>


.UserOnline{

    padding:2px;
    border-bottom:1px solid #ddd;
    margin:0;
}

.UserOnline img {
    height: 64px;
    width: 64px;
    
}

</style>
