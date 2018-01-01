<template>
    <div>
        <div class="HomeSide">
                <div>
                <p>Popular Tags</p>
                <el-tag class="SingleTag" v-for="(tag, index) in tags" v-bind:key="index">{{tag}}</el-tag>
                </div>
                
        </div>
        <div class="HomeSide">
                <p>Active Users</p>
                 <router-link to="/"><el-tag class="SingleTag" v-for="(tag, index) in tags" v-bind:key="index">{{tag}}</el-tag></router-link>
                </div>
      
    </div>
</template>



<script>
export default {
    data : function(){

        return {
            tags : ['Tag One', 'Tag Two', 'Tag Three', 'Tag for', 'Tag five',
            'Tag One', 'Tag Two', 'Tag Three', 'Tag for', 'Tag five',
            'Tag One', 'Tag Two', 'Tag Three', 'Tag for', 'Tag five',
            'Tag One', 'Tag Two', 'Tag Three', 'Tag for', 'Tag five',
            'Tag One', 'Tag Two', 'Tag Three', 'Tag for', 'Tag five',]
        }
    }
  
}
</script>


<style scoped>
.HomeSide{

   background-color: white;
    border: 1px solid #F5F5F5;
    border-radius: 4px;
    padding-left: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
}

.SingleTag {
    margin: 2px;
}
</style>
