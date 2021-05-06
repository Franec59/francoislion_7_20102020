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

</script>



<style scoped>

</style>