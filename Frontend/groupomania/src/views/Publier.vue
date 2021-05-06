<template>
    <div class="container publier pt-3">
        <h1>Publier</h1>
        <h4>Partager une anecdote, une info, un texte ou une photo avec vos collègues </h4>
        <div class="row">
            <div class="col-2 col-lg-4"></div>

            <div class="col-8 col-lg-4 mt-3 publish">
                <form>
                    <div class="mt-3">
                        <input class="form-control mt-3" type="text" v-model="titleP" placeholder="Titre de la publication*" aria-label="default input example">
                    </div>
                    <p class="text-info text-dark">* Saisie obligatoire</p>
                    <div class="mt-3">
                        <!--<label for="Textarea1" class="form-label">Saississez votre texte ici :</label>-->
                        <textarea class="form-control" id="Textarea1" v-model="textP" rows="3" placeholder="Saississez votre texte ici"></textarea>
                    </div>
                    <div class="photo mt-3">
                        <!--<label for="picture" class="form-label text-dark">Sélectionner une image</label>-->
                        <p class="text-info text-dark">Sélectionner une image</p>
                        <input type="file" @change="onSelect" class="form-control" id="picture" name="picture" accept=".png, .jpg, .jpeg">
                    </div>
                    
                    <button type="submit" class="btn btn-success mt-5 mb-3 btn-select" v-on:click="publier()">Publier</button>
                </form>

            </div><!--fin de col 8-->

            <div class="col-2 col-lg-4"></div>

        </div><!--fin de row-->
    </div><!--fin de container-->
</template>


<script>
import axios from 'axios';

export default {
    name : "Publier",
    data() {
        return{
            titleP:"",
            textP:null,
            file: ""
        }
    },//fin de data
methods : {

    onSelect(event){
        this.file = event.target.files[0];
        console.log(event);
    },
    // POST Send message
      publier () {

        // Création d'un formData obligatoire pour envoi de l'image
        const formData = new FormData()
        formData.append('image' ,this.file );
        
        axios.post('http://localhost:3000/message', formData, {params:{
            user_mess : "toto",
            titre : this.titleP,
            contenu : this.textP,
        }},
          {headers:{
              'content-type': 'multipart/form-data'
          }}
          )
            .then(function (response) {
              console.log(response);
          })
            .catch(function (error) {
              console.log(error);
        });//fin de axios 
    }//fin de createUser



},//fin de methods
 
}
/*
axios.post('http://localhost:3000/message', null, { params : {
          user_mess : "toto",
          titre : this.titleP,
          contenu : this.textP,
          image : this.file
          }})
            .then(function (response) {
              console.log(response);
          })
            .catch(function (error) {
              console.log(error);
        });//fin de axios 
*/
</script>

<style scoped>

.publier{
  height: 100%;
  background-image: linear-gradient(rgba(91, 192, 222, 0.4), rgba(255, 255, 0, 0.4)),
    url("../assets/icon.png");
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
  background-attachment: fixed;
  padding-bottom: 15rem;
}

.publish{
  border: 1px solid#5bc0de;
  background: linear-gradient(#5bc0de, #a3d3e2);
  border-radius: 10px;
  box-shadow: 2px 2px 10px  #012340;
}

.text-info{
    text-align: left;
}

</style>
