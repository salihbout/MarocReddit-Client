<template>
   <el-row >

        <div >
                <postCard v-for="(post,index) in posts"  v-bind:key="index" :post="post">
                </postCard>
        </div>
   </el-row>
    
</template>

<script>
import Postcard from './Postcard.vue';
export default {
    props : ['posts'],
    components:{
        postCard : Postcard,
    }
  
}
</script>

<style scoped>


</style>
