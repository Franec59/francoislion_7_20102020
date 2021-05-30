<template>
    <div class="container publier pt-5">
        <div class="row">
            <div class="col-1 col-lg-3"></div>

            <div class="col-10 col-lg-6 mt-3">
                <div class="card text-center card-a">
                    <div class="card-header">
                        <h3 class="text-light">Publier</h3>
                        <p class="card-text"><small class="text-light">Partager une anecdote, une info, un texte ou une photo avec vos collègues</small></p>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="mt-3">
                                <input class="form-control mt-3" type="text" v-model="titleP" placeholder="Titre de la publication*" aria-label="default input example">
                            </div>
                                <p class="text-info text-dark">* Saisie obligatoire</p>
                            <div class="mt-3">
                                <textarea class="form-control" id="Textarea1" v-model="textP" rows="3" placeholder="Saississez votre texte ici"></textarea>
                            </div>
                            <div class="photo mt-3">
                                <p class="text-info text-dark">Sélectionner une image</p>
                                <input type="file" id="file" ref="file" v-on:change="onSelect" class="form-control" accept=".png, .jpg, .jpeg">
                            </div>
                    
                            <button type="submit" class="btn btn-a mt-3 mb-1 btn-select text-light" v-on:click.prevent="publier()">Publier</button>
                        </form>
                    </div><!--fin de card body-->
                    <div class="card-footer">
                    </div><!--fin de card-footer-->
                </div>
            </div><!--fin de col 10-->

            <div class="col-1 col-lg-3"></div>

        </div><!--fin de row-->
    </div><!--fin de container-->
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
    name : "Publier",
    data() {
        return{
            titleP:"",
            textP:null,
            file: ""
        }
    },//fin de data

  created: function () {
      this.user = this.$store.state.username;
    
  },

methods : {

    onSelect(){
        this.file = this.$refs.file.files[0];
        console.log(this.file)
    },
    // POST Send message
      publier () {
        // Création d'un formData obligatoire pour envoi de l'image
        const formData = new FormData()
          formData.append('image', this.file );

        //récupération du token
        const token = JSON.parse(localStorage.getItem('user-token'))
        if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
         axios.defaults.headers.common['Authorization'] = null;
         swal("Connectez vous pour publier !", "Ou créez votre compte", "warning");
        }
       
        axios.post('http://localhost:3000/message', formData , { params:{
            user_mess : this.user,
            titre : this.titleP,
            contenu : this.textP,
          },
          headers:{
              'content-type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`  
          }}
          )
            .then((response) => {
              console.log(response);
              this.$router.push("/Forum");
                     
          })
            .catch((error) => {
              console.log(error);
              return swal("Oups, une erreur s'est produite !", "Veuillez réessayer", "error");
        });//fin de axios 
    }//fin de createUser
},//fin de methods
 
}

</script>

<style scoped>

.publier{
  height: 100%;
  background-image:url("../assets/people-B.png"); 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 10rem;
  
}

.text-info {
    text-align: left;
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
  border-radius: 10px;
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
