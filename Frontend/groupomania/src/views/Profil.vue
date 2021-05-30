<template>
  <div class="container profil pt-3">
    <img src="../assets/logo-red1.png" alt="logo groupomania rouge" class="logo-groupo-red">
      
    <div class="row">
      <div class="col-1 col-lg-4"></div>

      <div class="col-10 col-lg-4 mt-3"> 
          
           
        <div class="card text-center card-a">
          <div class="card-header">
            <h3 class="text-light">Mon compte</h3>
          </div>
          <div class="card-body">
            <form class="mt-3" id="form" @submit="checkForm">
              <h3 class="supp mt-1">Supprimer mon profil</h3>
              <!--<Pseudo />-->
              <div class=" pseudo mt-3">
                <label for="pseudo" class="form-label"></label>
                <input type="text" class="form-control" id="pseudo" name="pseudo" autocomplete = "username" placeholder="Votre pseudo" required pattern="[a-zA-Z0-9éèîïÎÏéèêçàîïë]{3,30}" v-model="userDel">
              </div>

              <!--<Password />-->
              <div class="form-group mt-3">
                <label for="password" class="form-label passlabel">
                <input v-bind:type="inputType" id="password" autocomplete = "current-password" class="form-control" placeholder="Mot de passe" aria-describedby="passwordHelpBlock" required pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}" v-model="passDel">
  
              <div class="password-icon">
                <svg xmlns="http://www.w3.org/2000/svg" v-if="seen" v-on:click="lookPassword()" width="20" height="20" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" v-if="seenoff" v-on:click="lookOffPassword()" width="20" height="20" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                </svg>
              </div><!--fin de password-icon-->
                </label>
              </div>
       
            <input class="btn text-light btn-a mt-3 mb-1" type="submit" value="Supprimer" v-on:click.prevent="deleteUser()">
        
            </form>             
          </div><!--fin de card body-->
          <div class="card-footer">
          </div><!--fin de card-footer-->
        </div>
      </div><!--fin de la div formulaire-->

      <div class="col-1 col-lg-4"></div>
    </div><!--fin de row-->
  </div><!--fin de container-->
</template>


<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
  name: 'Profil',
  
  data(){
      return{
        seen: true,
        seenoff:false,
        inputType: "password",
        userDel: "",
        passDel: "",
        
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
      
      // Delete request
      deleteUser: function () {
        
        //récupération du token
        const token = JSON.parse(localStorage.getItem('user-token'))
          if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          } else {
          axios.defaults.headers.common['Authorization'] = null;
          }

        const deleteUser = {
          username : this.userDel,
          password : this.passDel
        }
        
        //https://stackoverflow.com/a/56210828
        axios.delete('http://localhost:3000/users', { data: deleteUser }, { 
          headers:{
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
              
          }})
            .then((response) => {
              console.log(response);
              localStorage.removeItem('user-token');
              this.$router.push('/');
                                  
              })
            .catch((error) => {
               console.log(error);
               return swal("Identifiants incorrects !", "Veuillez réessayer", "error");
               
        })//fin de axios
      },//fin de deleteUser
      
  },//fin de methods
  
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
  top: 55%;
  transform: translateY(-50%);
  transition: all 0.2s;
  right: 20px;
  
}

.passlabel .password-icon:hover{
  cursor: pointer;
  color: rgba(136, 10, 10, 0.76);

}

.profil{
  height: 100%;
  padding-bottom: 15rem;
  background-image: url("../assets/people-B.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat, repeat; /* Do not repeat the image */
  background-size: cover;

}

h2{
  color:rgb(75, 75, 224);
}

.logo-groupo-red{
  width: 30%;
}

.delete{
    color:red;
}

.card-header {
  border-radius: 15px 15px 0 0;
  background-color: rgb(18, 36, 66);
  border-bottom: 0.3rem solid rgb(186, 78, 85);
  border-image: linear-gradient(to right, rgb(186, 78, 85), rgb(226, 214, 214));
  border-image-slice: 1;
}

.card-a {
  border-radius: 15px;
}

.btn-a {
  background-color: rgb(18, 36, 66);
}

.btn-a:hover {
  box-shadow: 4px 4px 6px rgb(18, 36, 66);
}

.card-footer {
  background: linear-gradient(to right, rgb(186, 78, 85), rgb(226, 214, 214));
  border-radius: 0 0 15px 15px;
}

.card-body {
  background-color: rgb(226, 214, 214);
}

</style>