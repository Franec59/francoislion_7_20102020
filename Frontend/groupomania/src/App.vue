<template>
  
<div>

<nav class="navbar navbar-expand-lg navbar-dark sticky-top">
  <div class="container-fluid">

    <div class="col-3 col-md-3">
      <router-link to="/">
        <a class="navbar-brand" href="#">
          <img src="./assets/logo-blanc.png" alt="logo Groupomania avec nom" width="180" height="48" class="align-text-top d-none d-md-inline-block">
          <img src="./assets/logo-sphere.png" alt="logo Groupomania seul" width="28" height="28" class="align-text-top d-inline-block d-sm-none">
        </a>
      </router-link>
    </div>

    <div class="col-3 col-md-2 icons">
      <router-link to="/forum">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-house text-light" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
        </svg>
      </router-link>

    </div>

    <div class="col-3 col-md-2">
      <router-link to="/publier">
          <a class="nav-link active text-light" href="#" v-if="publier">Publier</a>
      </router-link>

    </div>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse col-3 col-md-5" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/">
          <a class="nav-link active" href="#">Se connecter</a>
        </router-link>
        <router-link to="/signup">
          <a class="nav-link active" href="#">S'inscrire</a>
        </router-link>        
        <router-link to="/profil">
          <a class="nav-link active" href="#">Voir le profil</a>
        </router-link>      
        <router-link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-power text-light mt-2" viewBox="0 0 16 16" v-on:click.prevent="logOut()">
            <path d="M7.5 1v7h1V1h-1z"/>
            <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/>
            </svg>
        </router-link>       
      </div>
    </div>

  </div><!--fin de container-->
</nav>

  <router-view/>
</div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      publier : false,
         
    }
  },// fin de data
  methods: {
    
    logOut: function () {
      localStorage.removeItem('current-user');
      localStorage.removeItem('user-token');
      this.$router.push('/');
      
    }
  },//fin de methods

mounted: function () {
      if(localStorage.getItem('current-user') !=undefined){
        this.publier = true;
      }
}//fin de created

}//fin de export default
</script>


<style>
#app {
  font-family: Georgia, 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*background-color:rgb(22,24,45);*/
}

a, a:hover, a:focus, a:active {
      text-decoration: none;
      font-size: 1.2rem;
 }

.icons{
  display: flex;
  justify-content: space-around;
}

.navbar {
  background-color:rgb(18,36,66);
  border-bottom: 1rem solid rgb(186,78,85);
  border-image: linear-gradient(to right, rgb(186,78,85), rgb(226, 214, 214));
  border-image-slice: 1;
}


</style>
