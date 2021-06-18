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
      <div class="moderator" v-if="admin">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
          <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
          <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg> -isAdmin
      </div>
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
          <a class="nav-link active" href="#" v-if="login">Se connecter</a>
        </router-link>
        <router-link to="/signup">
          <a class="nav-link active" href="#" v-if="signup">S'inscrire</a>
        </router-link>        
        <router-link to="/profil">
          <!--<a class="nav-link active" href="#">Voir le profil</a>-->
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-circle text-light mt-2" viewBox="0 0 16 16" v-if="profil">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg>
        </router-link>      
        <router-link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-power text-light mt-2" viewBox="0 0 16 16" v-on:click.prevent="logOut()" v-if="deconnecter">
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
      publier: false,
      profil: false,
      deconnecter: false,
      login: true,
      signup: true,
      admin: false
         
    }
  },// fin de data
  
  created: function () {
      this.adminUser = this.$store.state.isAdmin; //note modif this.admin en this.adminUser + ligne 95 et 122
    //récupération du token
        const token = JSON.parse(localStorage.getItem('user-token'));  
        const currentAdmin = this.adminUser;
          if(token){
              if(token && currentAdmin == 0){
                this.publier = true,
                this.profil = true,
                this.deconnecter = true,
                this.login = false,
                this.signup = false
          
              } else if (token && currentAdmin == 1){
                this.publier = true,
                this.profil = true,
                this.deconnecter = true,
                this.login = false,
                this.signup = false,
                this.admin = true
              }
          }
  },
  
  watch: {
    '$route':'refreshData',
    
  },
  methods: {
    refreshData: function () {
      const token = JSON.parse(localStorage.getItem('user-token'));
      const currentAdmin = this.adminUser;
      if(token){
          if(token && currentAdmin == 0){
            this.publier = true,
            this.profil = true,
            this.deconnecter = true,
            this.login = false,
            this.signup = false
          
          } else if (token && currentAdmin == 1){
            this.publier = true,
            this.profil = true,
            this.deconnecter = true,
            this.login = false,
            this.signup = false,
            this.admin = true
          }
      } 
    },
    
    logOut: function () {
      localStorage.removeItem('user-token');
      this.$store.commit('SET_USER', null);
      this.$store.commit('SET_ADMIN', null);
      location.reload();
      
    }
  },//fin de methods

}//fin de export default
</script>


<style>
#app {
  font-family: Georgia, 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
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

.bi-power, .bi-person-circle {
  margin-left : 1rem;
}

.moderator {
  color: rgb(186,78,85);
}

</style>
