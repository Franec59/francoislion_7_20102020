<template>

<div class="form-group mt-3">

  <label for="password" class="form-label">Mot de passe
  <input v-bind:type="inputType" id="password" class="form-control" placeholder="Mot de passe" aria-describedby="passwordHelpBlock" required pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}" v-model="password">
  
  <div class="password-icon">
    <svg xmlns="http://www.w3.org/2000/svg" v-if="seen" v-on:click="lookPassword()" width="20" height="20" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" v-if="seenoff" v-on:click="lookOffPassword()" width="20" height="20" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
      <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
      <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  </div>
  
  </label>
  
  
  
</div>

</template>


<script>

   export default {
    name: 'Password',
    data(){
      return{
        seen: true,
        seenoff:false,
        inputType: "password",
        
        
      }
    },
    
    methods : {
      lookPassword: function () {
        this.seen = false,
        this.seenoff = true,
        this.inputType = "text"
      },
      lookOffPassword: function () {
        this.seen = true,
        this.seenoff = false,
        this.inputType = "password"
      },
      
    },//fin de methods

    
    
}//fin de export default

</script>

<style scoped>

label{
  position: relative;
  width: 100%;
}

input{
  border-radius: 10px;
  transition: all 0.2s;
  font-style: italic;

}

label .password-icon{
  display:flex;
  align-items: center;
  position: absolute;
  top: 70%;
  transform: translateY(-50%);
  transition: all 0.2s;
  right: 20px;
  
}
/*
label .password-icon .bi-eye-slash-fill{
  display: none;
}
*/
label .password-icon:hover{
  cursor: pointer;
  color: rgba(136, 10, 10, 0.76);

}

</style>
