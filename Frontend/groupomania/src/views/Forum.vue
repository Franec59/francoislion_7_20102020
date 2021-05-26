<template>
  <div class="container home pt-3">
    <img src="../assets/logo-red2.png" alt="logo groupomania rouge" class="logo-groupo-red">
    <h3 class="user">Bonjour  <span class="badge">{{ pseudo }}</span>  bienvenue sur le forum !</h3>
    
    <div class="row">
      <div class="col-1 col-lg-3"></div>
      
      <div class="col-10 col-lg-6 mt-3">
        <div v-for="message in messages" :key="message">
          <div class="card mt-5 post">
          
            <div class="card-body">
              <h3 class="card-title">{{ message.title }}</h3>
              <p class="card-text post-text article" v-if="message.content != null">{{ message.content }}</p>
              <p class="card-text post-text" v-else-if="off"></p>
            
            </div>
            <div class="post-image">
              <img :src="message.image" class="card-img-bottom rounded" alt="..." v-if="message.image != null">
              <img :src="message.image" class="card-img-bottom rounded" alt="..." v-else-if="imgoff">
            </div>
            <p class="card-text"><small class="text-muted">De {{ message.username }} le {{ message.date }}</small></p>
            
            <div class="card-footer" v-if="footer">
              <!--icons prêtes pour une version plus aboutit de l'appli-->
              <!--<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
              </svg>-->

              <!--<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-emoji-angry" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zm6.991-8.38a.5.5 0 1 1 .448.894l-1.009.504c.176.27.285.64.285 1.049 0 .828-.448 1.5-1 1.5s-1-.672-1-1.5c0-.247.04-.48.11-.686a.502.502 0 0 1 .166-.761l2-1zm-6.552 0a.5.5 0 0 0-.448.894l1.009.504A1.94 1.94 0 0 0 5 6.5C5 7.328 5.448 8 6 8s1-.672 1-1.5c0-.247-.04-.48-.11-.686a.502.502 0 0 0-.166-.761l-2-1z"/>
              </svg>-->

              <!--icon tchat-->
              <!--<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-chat-text ico-post" viewBox="0 0 16 16" v-on:click="postComment()">
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                  <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
              </svg>-->
                  
              <!--<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
              </svg>-->

              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-trash ico-post" viewBox="0 0 16 16" v-on:click.prevent="deletePost(message.id, message.username)">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </div><!--fin de footer-->
            <div v-if="commentsoff">
            <Comment v-bind:messageId="message.id" />
          </div>
            
          <div class="container mt-1" v-for="comment in message.comments" :key="comment">
            <div class="row" v-if="comment.id != null">
              <div class="card comment-top">
                <div class="card-header comment-header">
                  <img src="../assets/favicon-32x32.png" class="rounded me-2" alt="icon groupomania">
                  <strong class="me-auto postname">{{ comment.username }}</strong>
                  <small class="postdate">{{ comment.date }}</small>
                  <!--<button type="button" class="btn-close croix" aria-label="Close"></button>-->
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-trash ico-post" id="bin" viewBox="0 0 16 16" v-on:click.prevent="deleteComment(comment.id, comment.username)" v-if="bin">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg>
                </div>
                <div class="card-body comment-body">
                  {{ comment.comment }}
                </div>     
              </div>
            </div>
          </div>
          </div><!--fin de card-->
        </div><!--fin de v-for-->
      </div><!--fin de col-10-->

      <div class="col-1 col-lg-3"></div>
    </div><!--fin de row-->
    
  </div><!--fin de home-->
</template>

<script>

import axios from 'axios';
import Comment from "@/components/Comment.vue";
import swal from 'sweetalert';

export default {
    name: 'Forum',
    components: {
      Comment
    },
    
    data(){
        
      return{
        messages: "",
        off: false,
        imgoff: false,
        commentsoff : false,
        pseudo : "",
        footer: false,
        bin: false
      
      }
    },   
    mounted () {
     
    axios
      .get('http://localhost:3000/message')
      .then(response => {
        this.messages = response.data
        
        })
      .catch(error => console.log(error))
    
    },
    created: function () {
      
      if(localStorage.getItem('current-user') !=null){
        const currentUser = localStorage.getItem('current-user');
        const currentUser2 = JSON.parse(currentUser);
        const currentUser3 = currentUser2[0].username

          if(currentUser3 != null){
            this.pseudo = currentUser3,
            this.commentsoff = true
            this.footer = true
            this.bin = true
          }
      }
  },
  methods :{
  
  deletePost:function(id, username) {
    
    //récupération du token
    const token = JSON.parse(localStorage.getItem('user-token'))
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } else {
        axios.defaults.headers.common['Authorization'] = null;
      }

    const currentAdmin = localStorage.getItem('current-user');
    const currentAdmin2 = JSON.parse(currentAdmin);
    const currentAdmin3 = currentAdmin2[0].isAdmin

    const currentUser = localStorage.getItem('current-user');
    const currentUser2 = JSON.parse(currentUser);
    const currentUser3 = currentUser2[0].username
    
    if (currentAdmin3 == 0 && currentUser3 == username ){
      
        axios.delete('http://localhost:3000/message', {
          params : { id : id},
          headers:{
              'Authorization': `Bearer ${token}`
              
          }})
            .then(response => {
              console.log(response)
              location.reload();
              
              })
            .catch(error => {
               console.log(error);
               return swal("Désolé, vous n'avez pas les droits pour supprimer ce message !", "warning");     
        })//fin de axios

    //delete with moderator
    } else if (currentAdmin3 == 1){
        axios.delete('http://localhost:3000/message', {
          params : { id : id },
          headers:{
              'Authorization': `Bearer ${token}`
              
          }})
            .then(response => {
              console.log(response)
              location.reload();

              })
            .catch(error => {
               console.log(error);
               return swal("Oups, une erreur s'est produite !", "warning");            
        })//fin de axios
    } else if (currentAdmin3 == 0 && currentUser3 != username ) {
      return swal("Vous n'avez pas les droits pour supprimer ce message !", "désolé ...", "warning"); 

    }
  },//fin de deletePost

  deleteComment:function(id, username) {
    
    //récupération du token
    const token = JSON.parse(localStorage.getItem('user-token'))
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } else {
        axios.defaults.headers.common['Authorization'] = null;
      }

    const currentAdmin = localStorage.getItem('current-user');
    const currentAdmin2 = JSON.parse(currentAdmin);
    const currentAdmin3 = currentAdmin2[0].isAdmin

    const currentUser = localStorage.getItem('current-user');
    const currentUser2 = JSON.parse(currentUser);
    const currentUser3 = currentUser2[0].username
    
    if (currentAdmin3 == 0 && currentUser3 == username ){
      
        axios.delete('http://localhost:3000/comments', {
          params : { comment_id : id},
          headers:{
              'Authorization': `Bearer ${token}`
              
          }})
            .then(response => {
              console.log(response)
              location.reload();
              
              })
            .catch(error => {
               console.log(error);
               return swal("Oups, une erreur s'est produite !", "warning");

        })//fin de axios

    //delete with moderator
    } else if (currentAdmin3 == 1){
        axios.delete('http://localhost:3000/comments', {
          params : { comment_id : id },
          headers:{
              'Authorization': `Bearer ${token}`
              
          }})
            .then(response => {
              console.log(response)
              location.reload();

              })
            .catch(error => {
               console.log(error);
               return swal("Oups, une erreur s'est produite !", "warning");           
        })//fin de axios
      } else if (currentAdmin3 == 0 && currentUser3 != username ) {
          return swal("Vous n'avez pas les droits pour supprimer ce commentaire !", "désolé ...", "warning");
      }
  },//fin de deletecomment

  }//fin de methods
}//fin de export default

</script>

<style scoped>

.home{
  height: 100%;
  background-image: url("../assets/people-B.png");
  background-position: center;
  /*background-repeat: no-repeat, repeat;*/
  background-size: contain;
  background-attachment: fixed;
  padding-bottom: 15rem;
}

.post {
  border: 1px solid rgb(18, 36, 66);
  border-top: 0.8rem solid rgb(18, 36, 66);
  border-image: linear-gradient(to right, rgb(18, 36, 66), rgb(226, 214, 214));
  border-image-slice: 1;
  background-color: white;
  box-shadow: 2px 2px 10px  rgb(18, 36, 66);
}

.post-image{
  /*background-color:#FFFFFF;*/
  margin: 1rem;
  
}

.card-title{
  border-bottom: 0.3rem solid rgb(186, 78, 85);
  border-image: linear-gradient(to right, rgb(186, 78, 85), rgb(226, 214, 214));
  border-image-slice: 1;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  padding-bottom: 1rem;
  
}

.post-text{
  border-bottom: 0.3rem solid rgb(186, 78, 85);
  border-image: linear-gradient(to right, rgb(186, 78, 85), rgb(226, 214, 214));
  border-image-slice: 1;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

}

.card-footer{
  display: flex;
  justify-content: space-around;
  border-top: 0.3rem solid rgb(18, 36, 66);
  /*border-bottom: 0.1rem solid rgb(18, 36, 66);*/
  border-image: linear-gradient(to right, rgb(18, 36, 66), rgb(226, 214, 214));
  border-image-slice: 1;
  height: 3rem;
}

.post-image{
  border-radius: 15px;
}

.ico-post{
  color: rgb(18, 36, 66);

}

.ico-post:hover{
  cursor: pointer;
  color: rgb(186, 78, 85);
  width: 32px;
  height: 32px;
}

.badge{
  background-color: rgb(186, 78, 85);
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.user {
  color: rgb(226, 214, 214);
  background:rgb(18, 36, 66);
}


.logo-groupo-red{
  width: 50%;
}
.comments{
  width: 85%;
  /*border: 1px solid rgb(18, 36, 66);*/
  border-top: 0.3rem solid rgb(18, 36, 66);
  border-image: linear-gradient(to right, rgb(186, 78, 85), rgb(226, 214, 214));
  border-image-slice: 1;
  background: rgb(231, 227, 227);
  border-radius: 0 0 10px 10px;
  box-shadow: 2px 2px 10px  rgb(18, 36, 66);
}

.text-comment {
  text-align: left;
}

.text-id {
  text-decoration: underline;
}

.comment-header {
  display:flex;
  justify-content: space-around;
  border-bottom: 0.3rem solid rgb(186, 78, 85);
  border-image: linear-gradient(to right, rgb(186, 78, 85), rgb(226, 214, 214));
  border-image-slice: 1;

}

#bin {
  padding-left: 0.5rem;
  position: relative;
  top :0.2rem;
}

.comment-body {
  text-align: left;
}

.comment-top {
  border-top: 0.3rem solid rgb(18, 36, 66);
  border-image: linear-gradient(to right, rgb(18, 36, 66), rgb(226, 214, 214));
  border-image-slice: 1;
  background: rgb(226, 214, 214);
  margin-bottom: 0.5rem;
}

.postname {
  position: relative;
  top :0.3rem;
}

.postdate {
  position: relative;
  top :0.4rem;
}

.article {
  text-align: left;
}

</style>
