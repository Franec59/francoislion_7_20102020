<template>
    <div class="container comments mt-1 mb-1">
        <form class="row">
            <div class="col-md-9 mt-1 mb-1">
                <input type="text" class="form-control text-truncate" placeholder="Commentez cette publication ..." v-model="myComment">
                
            </div>
            <div class="col-md-3 mt-1 mb-1">
                <button type="submit" class="btn btn-comment" v-on:click="addComment()">Publier</button>
            </div>
            
        </form>
    </div>

</template>


<script>
import axios from 'axios';
import swal from 'sweetalert';

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

created: function () {
      this.user = this.$store.state.username;
    
  },
methods: {
// POST Send comment
      addComment : function () {
        
        //objet post
          const comment = {
          user_name : this.user,
          message_id : this.messageId,
          comment : this.myComment,
        
        }

        //récupération du token
        const token = JSON.parse(localStorage.getItem('user-token'))
        if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
         axios.defaults.headers.common['Authorization'] = null;
         swal("Connectez vous pour laisser un commentaire !", "Ou créez votre compte", "warning");
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
              return swal("Oups, une erreur s'est produite !", "Veuillez réessayer", "warning");
              
        });//fin de axios

    }//fin de addcomment

},//fin de methods

}//fin de export default
</script>


<style scoped>

.btn-comment {
    background-color: rgb(18, 36, 66);
    border-radius: 10px;
    color:rgb(226, 214, 214);

}

.btn-comment:hover {
  box-shadow: 4px 4px 6px rgb(18, 36, 66);
  color: rgb(186, 78, 85);
}

</style>