<template>
  <el-row :gutter="20" class="RoomsWrapper">
      
      <room-card v-for="(room, idx) in Rooms" :key="idx" :room ="room"></room-card>
    
</el-row>
</template>


<script>

import RoomCard from '../chat/RoomCard.vue';
import axios from 'axios'


export default {
    components:{
       
        RoomCard : RoomCard
    },

    data() {
        return {
            
            Rooms : ''
           
        }
    }, 
    methods : {
        fetchRooms(){
          console.log('fetching rooms ....');
          axios.get('http://localhost:3000/api/chat')
          .then((response) => {
          this.Rooms = response.data.rooms;
          })
          .catch((error) =>{
            console.log(error);
          });
        }
    },
    created() {

        this.fetchRooms();
    }
  
}
</script>


<style scoped>

.RoomsWrapper{
    padding-top: 20px;

}


</style>
