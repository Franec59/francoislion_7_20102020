<template>
  
<div>


<nav class="navbar navbar-expand-lg navbar-dark bg-info">
  <div class="container-fluid">

    <div class="col-3 col-md-3">
      <router-link to="/">
        <a class="navbar-brand" href="#">
          <img src="./assets/logo-blanc.png" alt="logo Groupomania avec nom" width="180" height="48" class="align-text-top d-none d-md-inline-block">
          <img src="./assets/logo-sphere.png" alt="logo Groupomania seul" width="28" height="28" class="align-text-top d-inline-block d-sm-none">
        </a>
      </router-link>
    </div>

    <div class="col-3 col-md-2">
      <router-link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-house text-light" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
        </svg>
      </router-link>
    </div>

    <div class="col-3 col-md-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-bell text-light" viewBox="0 0 16 16">
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
        </svg>  
    </div>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse col-3 col-md-5" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/login">
          <a class="nav-link active" href="#">Login</a>
        </router-link>
        <router-link to="/signup">
          <a class="nav-link active" href="#">Sign Up</a>
        </router-link>        
        <router-link to="/profil">
          <a class="nav-link active" href="#">Voir le profil</a>
        </router-link>        
        <router-link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-power text-light mt-2" viewBox="0 0 16 16">
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
      font-size: 1.2rem;
 }

</style>
