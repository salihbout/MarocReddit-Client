

<template>
    <div class="">
        <el-col :span="12">
            <el-card class="box-card" >
                <h3>{{room.title}}</h3>
                <p>{{room.description}}</p>
                <router-link :to="{ name: 'ChatRoom', params: { id: room._id }}" ><el-button type="success">Join Chat</el-button></router-link>
            </el-card>
        </el-col>

    </div>
  
</template>

<script>
export default {
    props : ['room']

}
</script>


<style scoped>

.box-card {

    height: 200px;
    margin: 10px;
}
</style>

