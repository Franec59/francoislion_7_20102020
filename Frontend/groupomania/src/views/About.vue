<template>

  <div class="about">
    <br>
    <h1>test axios requete login</h1>
    <br>

    <form action="">
      <input type="text" v-model="userLogin">
      <input type="email" v-model="mailLogin">
      <input type="password" v-model="passLogin">
      <input type="submit" v-on:click="loginSend()">envoyer
    </form>
    

    <p class="mt-3">test :{{ responseLog }}</p>
        <br>
        <h3>{{ loginMess }}</h3>



<div class="header">
          <h3 class="text-light mt-3">Créer votre compte</h3>
        </div>
        
        <form class="mt-3"
            id="form"
            @submit="checkForm"  
        >
  
        <!--<Pseudo />-->
        <div class=" pseudo mt-3">
          <label for="pseudo" class="form-label">Votre pseudo</label>
          <input type="text" class="form-control" id="pseudo" name="pseudo" placeholder="Votre pseudo" required pattern="[a-zA-Z0-9éèîïÎÏéèêçàîïë]{3,30}" v-model="username">
        </div>
        
        <!--<Email />-->
        <div class="mt-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" name="email" v-model="email" placeholder="Email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" aria-describedby="emailHelp">
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
       
        <input class="btn btn-light btn-outline-success mt-3 mb-3" type="submit" value="Créer votre compte" v-on:click.prevent="createUser()">
        
        </form>
    

<div class="card text-center card-a">
          <div class="card-header">
            <h3 class="text-light">Créer votre compte</h3>
          </div><!--fin de card-header-->
          
          <div class="card-body">
            <form class="mt-3 needs-validation" id="form" @submit="checkForm" novalidate="true"> 
          <!--<Pseudo />-->
            <div class=" pseudo mt-3">
              <label for="pseudo" class="form-label">Votre pseudo</label>
              <input type="text" class="form-control" id="pseudo" name="pseudo" placeholder="Votre pseudo" required="required" pattern="[a-zA-Z0-9éèîïÎÏéèêçàîïë]{3,30}" v-model="username">
            </div>
        
          <!--<Email />-->
            <div class="mt-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" name="email" v-model="email" placeholder="Email" required="required" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" aria-describedby="emailHelp">
            </div>

          <!--<Password />-->
            <div class="form-group mt-3">
              <label for="password" class="form-label passlabel">Mot de passe
              <input v-bind:type="inputType" id="password" class="form-control" placeholder="Mot de passe" aria-describedby="passwordHelpBlock" required="required" pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}" v-model="password">
  
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
              <input class="btn text-light btn-a mt-1 mb-1" type="submit" value="Créer votre compte" v-on:click.prevent="createUser()">
          </form>
        </div><!--fin de card-body-->
            <div class="card-footer">
              
            </div><!--fin de card-footer-->
        
      </div><!--fin de card-->


        <!-- =================== ancien code ============================= -->

          <h3 class="text-light mt-3">Se connecter</h3>
          
            <h6>Sinon créez votre compte ici : <router-link to="/signup" class="signlink">S'inscrire</router-link></h6>
            
        <form class="mt-3" id="form" @submit="checkForm">
            
        <!--<Pseudo />-->
        <div class=" pseudo mt-3">
          <label for="pseudo" class="form-label"></label>
          <input type="text" class="form-control" id="pseudo" name="pseudo" placeholder="Votre pseudo" required pattern="[a-zA-Z0-9éèîïÎÏéèêçàîïë]{3,30}" v-model="userLog">
        </div>
        
        <!--<Email />-->
        <div class="mt-1">
          <label for="email" class="form-label"></label>
          <input type="email" class="form-control" id="email" name="email" v-model="mailLog" placeholder="Email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" aria-describedby="emailHelp">
        </div>

        <!--<Password />-->
        <div class="form-group mt-3">

        <label for="password" class="form-label passlabel">
          <input v-bind:type="inputType" id="password" class="form-control" placeholder="Mot de passe" aria-describedby="passwordHelpBlock" required pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}" v-model="passLog">
  
          <div class="password-icon">
            <svg xmlns="http://www.w3.org/2000/svg" v-if="seen" v-on:click="lookPassword()" width="20" height="20" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" v-if="seenoff" v-on:click="lookOffPassword()" width="20" height="20" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
              <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
              <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
            </svg>
          </div><!--fin de password-con-->
        </label>
      </div>
       
        <input class="btn btn-light btn-outline-success mt-3 mb-3" type="submit" value="Se connecter" v-on:click.prevent="sendLogin()">
        
        </form>
      

        



</div>




</template>

<script>

import axios from 'axios';

export default {
    name: 'About',
    data(){
      return{
        userLogin : "",
        mailLogin : "",
        passLogin : "",
        responseLog :"",
        loginMess : ""
      }
    },
  
  methods : {
    // POST login request
      loginSend: function () {
        const user = {
          username : this.userLogin,
          email : this.mailLogin,
          password : this.passLogin
        }
        axios.post('http://localhost:3000/users/login', user)
            .then(response => {
              console.log(response.data),
              this.responseLog = response.data,
              this.loginMess = "vous etes connecté !"

              })
            .catch(error => {
               console.log(error)
        })//fin de axios
      },//fin de sendLogin



  },//fin de methods
  
    
}//fin de export default

/*
LOG_USER: function (state, user) {
      instance.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
      localStorage.setItem('user', JSON.stringify(user));
      state.user = user;
      console.log(user)
    },
    USER_INFOS: function (state, userInfos) {
      state.userInfos = userInfos;
    },
    USER_PROFILE: function (state, userProfile) {
      state.userProfile = userProfile;
    },
    SET_USER: function (state, newInfos) {
      state.userInfos = newInfos;
    },
    LOG_OUT: function (state) {
      state.user = {
        userId: -1,
        token: '',
      }
      localStorage.removeItem('user');
    },
*/

/*
// autre code pour le local storage
const myLoginRoutine = user => new Promise ((resolve, reject) => {
  axios({url: 'auth', data: user, method: 'POST' })
    .then(resp => {
      const token = resp.data.token
      localStorage.setItem('user-token', token) // store the token in localstorage
      resolve(resp)
    })
  .catch(err => {
    localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
    reject(err)
  })
})
*/

/*
  mounted () {
    // GET test users  
        axios.get('http://localhost:3000/users')
            .then(response => {
              console.log(response),
              this.userTest = response.data.data         
              })
            .catch(error => { console.log(error)
        })//fin de axios

  }//fin de mounted
*/

// sauvegarde GET login request
 /*     sendLogin() {    
        axios.post('http://localhost:3000/users/login', { params : {
          username : this.userLog,
          email : this.mailLog,
          password : this.passLog
          }})
            .then(response => {
              console.log(response),
              this.userLogin = response.data  
              })
            .catch(error => {
               console.log(error)
        })//fin de axios
      },//fin de sendLogin
*/
/*
const token = localStorage.getItem('user-token')
if (token) {
  axios.defaults.headers.common['Authorization'] = token
}

const token = '..your token..'

axios.post(url, {
  //...data
}, {
  headers: {
    'Authorization': `Basic ${token}` 
  }
})
*/
</script>



<style scoped>

</style>