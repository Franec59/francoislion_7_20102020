<template>
    <div class="container comments mt-1 mb-1">
        <form class="row">
            <div class="col-md-9 mt-1 mb-1">
                <input type="text" class="form-control text-truncate" placeholder="Commentez cette publication ..." v-model="myComment">
                
            </div>
            <div class="col-md-3 mt-1 mb-1">
                <button type="submit" class="btn btn-success" v-on:click.prevent="addComment()">Publier</button>
            </div>
            
        </form>
    </div>

</template>


<script>
import axios from 'axios';

export default{
name:"Comment",
props:{
    messageId: String
},
data(){
    return{
        myComment:"",
        
    }

},
methods: {
// POST Send comment
      addComment : function () {
        
        //récupération du nom de l'auteur du message
        const currentUser = localStorage.getItem('current-user');
        const currentUser2 = JSON.parse(currentUser);
        const currentUser3 = currentUser2[0].username

        //objet post
          const comment = {
          user_name : currentUser3,
          message_id : this.messageId,
          comment : this.myComment,
        
        }

        //récupération du token
        const token = JSON.parse(localStorage.getItem('user-token'))
        if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
         axios.defaults.headers.common['Authorization'] = null;
        }

        axios.post('http://localhost:3000/comments', comment, 
          {headers:{
              'Authorization': `Bearer ${token}`
              
          }}
          )
            .then(function (response) {
              console.log(response);
              location.reload();
          })
            .catch(function (error) {
              console.log(error);
        });//fin de axios 
    }//fin de addcomment

},//fin de methods

}//fin de export default
</script>


<style scoped>

</style>