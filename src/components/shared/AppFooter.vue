<template>
<el-footer>
    <div id="footer"> 
        <el-row :gutter="20">
            <el-col :span="12" :offset="6">
                <div>
                    <p>© 2018 MarocReddit, Inc.</p>
                </div>
            </el-col>
        </el-row>
    </div>
</el-footer>
</template>


<script>
export default {
  name : 'AppFooter'
}
</script>

<style scoped>
#footer {
   color: white; 
   background-color: #409EFF;
   width: 100%;
   margin-top: 500px;
}
</style>

