<template>
    
  <div class="container signup pt-3">
    <img src="../assets/logo-red1.png" alt="logo-groupomania-rouge" class="logo-groupo-red mb-3">
    <div class="row">
      <div class="col-1 col-lg-4"></div>

      <div class="col-10 col-lg-4 mt-3">    
          <div class="card text-center card-a">
            <div class="card-header">
              <h3 class="text-light">Créer votre compte</h3>
            </div><!--fin de card-header-->
          
            <div class="card-body">
              <form class="mt-3" id="form" @submit="checkForm">
   
              <!--<Pseudo />-->
              <div class=" pseudo mt-3">
                <label for="pseudo" class="form-label">Votre pseudo</label>
                <input type="text" class="form-control" id="pseudo" name="pseudo" placeholder="Votre pseudo" required pattern="[a-zA-Z0-9éèîïÎÏéèêçàîïë]{3,30}" v-model="username">
              </div>
        
              <!--<Email />-->
              <div class="mt-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email" v-model="email" placeholder="Email" requiredpattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" aria-describedby="emailHelp">
              </div>

              <!--<Password />-->
              <div class="form-group mt-3">
                <label for="password" class="form-label passlabel">Mot de passe
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
              <input class="btn text-light btn-a mt-1 mb-1" type="submit" value="Créer votre compte" v-on:click="createUser()">
          </form>
            </div><!--fin de card-body-->
            <div class="card-footer">
              
            </div><!--fin de card-footer-->
        
          </div><!--fin de card-->
        
      </div><!--fin de la div formulaire-->
      <div class="col-1 col-lg-4"></div>
    </div><!--fin de row-->
  </div><!--fin de container-->
</template>

<script>

import axios from 'axios';
import swal from 'sweetalert';

export default {
  name: 'Signup',
  
  data(){
      return{
        seenInfo: false,
        seen: true,
        seenoff:false,
        inputType: "password",
        username: "",
        email: "",
        password: ""
      }
    
  },
  methods : {
      lookPasswordRules: function () {
        this.seenInfo = true;
      },
      passwordRulesOff: function (){
        this.seenInfo = false;
      },
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
      
      // Send a POST request
      createUser () {
        const newUser = {
          username : this.username,
          email : this.email,
          password : this.password

        }
        
        axios.post('http://localhost:3000/users', newUser )
          
            .then(response => {
              console.log(response)
              this.$router.push('/'); 
          })
            .catch(error => {
              console.log(error);
              return swal("Votre saisie est inccorect !", "Veuillez réessayer", "warning");
        })//fin de axios 
    }//fin de createUser

  }//fin de methods
}//fin de export default
</script>



<style scoped>

.bi-info-circle-fill:hover{
  cursor: pointer;
  color:green;
}

/*password*/

.passlabel{
  position: relative;
  width: 100%;
}

input{
  border-radius: 10px;
  transition: all 0.2s;
  font-style: italic;

}

.passlabel .password-icon {
  display:flex;
  align-items: center;
  position: absolute;
  top: 70%;
  transform: translateY(-50%);
  transition: all 0.2s;
  right: 20px;
  
}

.passlabel .password-icon:hover{
  cursor: pointer;
  color: rgba(136, 10, 10, 0.76);

}

.signup{
  height: 100%;
  padding-bottom: 15rem;
  background-image:url("../assets/people-B.png"); 
  background-position: center; /* Center the image */
  background-repeat: no-repeat, repeat; /* Do not repeat the image */
  background-size: cover;
  
}

#info{
  display:flex;
  align-items: flex-start;
  padding-left: 0.5rem;
}

.card-header{
  border-radius: 15px 15px 0 0;
  background-color:rgb(18,36,66);
  border-bottom: 0.3rem solid rgb(186,78,85);
  border-image: linear-gradient(to right, rgb(186,78,85), rgb(226, 214, 214));
  border-image-slice: 1;
}

.card-a {
  border-radius: 15px ;
}

.btn-a {
  background-color:rgb(18,36,66);
}

.btn-a:hover {
      box-shadow: 4px 4px 6px rgb(18,36,66);
    
}

.card-footer {
  background: linear-gradient(to right, rgb(186,78,85), rgb(226, 214, 214));
  border-radius: 0 0 15px 15px
}

.card-body{
  background-color: rgb(226, 214, 214);
}

.logo-groupo-red {
  width: 30%;
}

</style>