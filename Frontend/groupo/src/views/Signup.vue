<template>
    
  <div class="container signup mt-3">
        <h1>Créer votre compte</h1>
    <div class="row">
      <div class="col-2 col-lg-4"></div>

      <div class="col-8 col-lg-4 contact"> 

        <form class="mt-3"
            id="form"
            @submit="checkForm"
            action="./views/Home.vue"
            method="post"
            
        >
        <Pseudo />
        
        <Email />

        <Password />
        <div>
          <div id="info" >      
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16" v-on:mouseover="lookPasswordRules()" v-on:mouseleave="passwordRulesOff()">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
            </svg>
          </div>
          
          <div id="passwordrules" class="form-text" v-if="seenInfo">
            <p>
              Votre mot de passe doit comporter entre 8 et 20 caractères, contenir des lettres et des chiffres, et ne doit pas contenir d'espaces, de caractères spéciaux ou d'emoji.
            </p>
          </div>
        </div>
       
        <input class="btn btn-light btn-outline-success mt-3 mb-3" type="submit" value="Créer votre compte">
        
        </form>

      </div><!--fin de la div formulaire-->
      <div class="col-2 col-lg-4"></div>
    </div><!--fin de row-->
  </div><!--fin de container-->
</template>

<script>

import Email from '@/components/Email.vue'
import Pseudo from '@/components/Pseudo.vue'
import Password from '@/components/Password.vue'



export default {
  name: 'Signup',
  components: {
    Email, Pseudo, Password
  },
  data(){
      return{
        seenInfo: false,
      }
    },
  methods : {
      lookPasswordRules: function () {
        this.seenInfo = true;
      },
      passwordRulesOff: function (){
        this.seenInfo = false;
      }
    }//fin de methods
}
</script>

<style scoped>

.contact{
  border: 1px solid#5bc0de;
  /*background-color: #5bc0de;*/
  background: linear-gradient(#5bc0de, #a3d3e2);
  border-radius: 10px;
  box-shadow: 2px 2px 10px  #012340;
}

input{
  border-radius: 10px;
  
}

#info{
  display: flex;
  justify-content: start;
  margin-left: 0.5rem;
}

.bi-info-circle-fill:hover{
  cursor: pointer;
  color:green;
}



</style>