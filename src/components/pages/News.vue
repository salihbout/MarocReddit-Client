<template>
<el-container>
    <div class="NewsWrapper">
        <h2>Hand-picked News about AI for today </h2>
        <div v-show="loading" class="loader">
            <p>Loading ...</p>
            <i class="el-icon-loading"></i>
        </div>
        
        <div class="NewsSection">
            <el-row :gutter="20">
                <NewsCard v-for="(article, index) in NewsList" :article="article" :key="index" ></NewsCard>  
            </el-row>
          
        </div>
    </div>
</el-container>
</template>


<script>
import NewsCard from '../News/NewsCard.vue';
import axios from 'axios';
import moment from 'moment'

export default {
    components: {
        NewsCard : NewsCard
    }, 

    data (){
        return {

            NewsList :'',
            loading : '' 
        }
    },

    methods : {

        fetchNews(date){

         
        var query = '"AI"'
        var url = 'https://newsapi.org/v2/everything?' +
          'q='+query+'&' +
          'from='+date+'&' +
          'sortBy=popularity&' +
          'language=en&'+
          'apiKey=c0d833f56cd14a1a87ae92917947250b';

        console.log(url)

        axios.get(url)
          .then((response) => {
          this.loading  = false
          this.NewsList = response.data.articles;
          console.log(this.NewsList)
           
          })
          .catch((error) =>{
            console.log(error);
          });

        }
    },
    created(){
        this.loading  = true
        var today = moment().format("YYYY-MM-DD");
        console.log(today)
        this.fetchNews(today)
        if(this.NewsList.length === 0){
            var yesterday = moment().subtract(1, 'day').format("YYYY-MM-DD");
            console.log(yesterday)
            this.fetchNews(yesterday)
        }

    }
  
}
</script>

<style scoped>
.loader {
        text-align: center;
        padding-top: 20px;
}
.NewsWrapper {

    padding: 20px;
}
</style>
