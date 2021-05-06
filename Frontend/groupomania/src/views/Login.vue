<template>
    <div class="container signup pt-3">
        <h1>Se connecter</h1>
        
    <div class="row">
      <div class="col-2 col-lg-4"></div>

      <div class="col-8 col-lg-4 mt-3 contact"> 

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
      </div><!--fin de la div formulaire-->

        <!--<p class="mt-5">{{ userTest }}</p>-->
        <p class="mt-3">test :{{ userLogin }}</p>
        <br>
        <h3>{{ login }}</h3>

      <div class="col-2 col-lg-4"></div>
    </div><!--fin de row-->
  </div><!--fin de container-->
</template>


<script>
import axios from 'axios';

export default {
  name: 'Login',
  
  data(){
      return{
        seen: true,
        seenoff:false,
        inputType: "password",
        userLog: "",
        mailLog: "",
        passLog: "",
        userLogin: "",
        //userTest: null,
        login : ""
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
      
      // POST login request
      sendLogin: function () {
        const user = {
          username : this.userLog,
          email : this.mailLog,
          password : this.passLog
        }
        axios.post('http://localhost:3000/users/login', user)
            .then(response => {
              console.log(response.data)
      
              this.userLogin = response.data.data
              this.login = "vous etes connecté !"
              
              const tokenRep = response.data.token;
              const token = JSON.stringify(tokenRep);
              localStorage.setItem('user-token', token); // store the token in localstorage
              const usernameResp = response.data.data;
              const userId = JSON.stringify(usernameResp);
              localStorage.setItem('user-name', userId );


              })
            .catch(error => {
               console.log(error)
               localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
               localStorage.removeItem('user-name')

        })//fin de axios
      },//fin de sendLogin
      
  },//fin de methods
  
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

}//fin de export default
</script>

<style scoped>

.contact{
  border: 1px solid#5bc0de;
  background: linear-gradient(#5bc0de, #a3d3e2);
  border-radius: 10px;
  box-shadow: 2px 2px 10px  #012340;
}

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
  top: 55%;
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
  background-image: linear-gradient(rgba(91, 192, 222, 0.4), rgba(255, 255, 0, 0.4)),
    url("../assets/icon.png");
  background-position: center; /* Center the image */
  
  background-repeat: no-repeat, repeat; /* Do not repeat the image */
  background-size: cover;

}

</style>