<template>

  <div class="about">
    <br>
    <h1>test axios</h1>
    <br>
    <p>{{ info }}</p>
  </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'About',
    data(){
      return{
        info: null,
        
      }
    },
    
    mounted () {
    axios
      .get('http://localhost:3000/API/comments')
      .then(response => (this.info = response.data))
      .catch(error => console.log(error))
  }
    
}//fin de export default


</script>



<style scoped>

</style>