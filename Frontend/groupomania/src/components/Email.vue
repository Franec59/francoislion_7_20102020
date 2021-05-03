<template>
    
  <div class="mt-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" name="email" v-model="email" placeholder="Email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" aria-describedby="emailHelp">
      
  </div>
        
</template>


<script>

export default {
    name: 'Pseudo',
    

  };//fin defaut

</script>


<style scoped>

input{
  border-radius: 10px;
  font-style: italic;

}
</style>