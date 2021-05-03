<template>

  <div class="about">
    <br>
    <h1>test axios</h1>
    <br>
    <p>{{ posts }}</p>
  <br>
  <div v-for="data in posts" :key="data">
            <h3>{{ data.comments }}</h3>
        </div>
  
  <div class=" pseudo mt-3">
    <label for="pseudo" class="form-label">Votre pseudo</label>
    <input type="text" class="form-control" id="pseudo" name="pseudo" placeholder="Votre pseudo" required pattern="[a-zA-Z0-9éèîïÎÏéèêçàîïë]{3,30}" v-model="username">
    
  </div>
  <button type="button" class="btn btn-primary" v-on:click="test()">Primary</button>
  <p>{{ username }}</p>

  <h1>{{ toto }}</h1>
  <h1>test : {{ testbt }}</h1>

</div>

</template>

<script>

import axios from 'axios';

export default {
    name: 'About',
    data(){
      return{
        posts: null,
        username: " ",
        toto: "toto",
        testbt: ""    
      }
    },
    
    mounted () {
    axios
      .get('http://localhost:3000/API/comments')
      .then(response => (this.posts = response.data.data))
      .catch(error => console.log(error))
  },
  
  methods : {
    test() {
      this.toto = this.username,
      this.testbt = "test ok !"

    },
    //test localstorage
    saveCats() {
      //const parsed = JSON.stringify("testcat");
      localStorage.setItem('cats', "test");
    }
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