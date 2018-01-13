<template>

 <div class="PostWrapper">
    <el-row :gutter="20" > 
      <el-col :offset="4" :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
        <el-radio-group  size="medium" v-model="ShowForm" >
                <el-radio label="Text" border>A Test Post </el-radio>
                <el-radio label="Link" border>A Link Post</el-radio>
        </el-radio-group>
        <div style="margin: 20px;"></div>
        <el-form label-position="top" label-width="100px" :model="formTextLabelAlign">
          
          
            <el-form-item label="Post Title">
              <el-input v-model="formTextLabelAlign.title"></el-input>
            </el-form-item>

            <el-form-item v-show="true" label="Post Link">
              <el-input
              label
                type="textarea"
                :rows="10"
                placeholder="Please input"
                v-model="formTextLabelAlign.text">
              </el-input>
            </el-form-item>

            <el-form-item v-show="false" label="Post Link">
                <el-input v-model="formTextLabelAlign.link"></el-input>
          </el-form-item>
          

      </el-form>


        

      </el-col>
      
    </el-row>
  </div> 

</template>

<script>
module.exports = {
  data: function() {
    return {
      ShowText: true,
      ShowLink:false,
      ShowForm : 'Text',
      formTextLabelAlign: {
          title: '',
          text: '',
          link:''
        },
     
              

    };

  },

  methods : {
    WhatToshow() {

    }
  }
};
</script>

<style scoped>
.PostWrapper {
  padding-top: 50px;
}
</style>
