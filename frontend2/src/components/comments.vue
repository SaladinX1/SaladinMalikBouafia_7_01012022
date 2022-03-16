<template>
<div class="comment-area">
    <h2>Commentaires :</h2>
    <div class="comment-display" v-bind:key='comment.id' v-for="comment in comments ">
      <div class="comment-pseudo" v-if="comment.User">
        {{ comment.User.pseudo }}
      </div>
      <div class="comment-pseudo  comment-pseudo-delete " v-else>
        Utlisateur supprimé
      </div>

      <div class="comment-message">
         {{ comment.message }}
      </div>
      <div v-if="userId == comment.UserId"  class="delete-comment-button">
      <div @click="deleteComment()" >Supprimer</div>
      </div>
    </div>
    <button-add-comment :id="id"></button-add-comment>
</div>
</template>

<script>

import CommentServices from '../services/Comment'
import buttonAddComment from '../components/button-add-comment.vue'

export default {
  components: { buttonAddComment },
  name: 'comments',
  data () {
    return {
      comments: [],
      userId: ''
    }
  },
  mounted () {
    this.userId = localStorage.getItem('userId')
    CommentServices.comments(this.id).then(
      comments => {
        console.log('comment : ', comments.data)
        this.comments = comments.data
      }
    ).catch(error => console.log(error))
  },
  methods: {
    deleteComment () {
      if (window.confirm('Voulez-vous vraiment supprimer votre commentaire ?')) {
        CommentServices.deleteComment(this.id).then(res => {
          console.log('message comment detruit :', res)
          location.reload()
        })
      }
    }
  },
  props: ['id']
}
</script>

<style>

h2 {
    text-align: center;
    color: rgb(255, 255, 255);
}

.comment-display {
    display: flex;
    flex-direction: column;
    text-align:center;
    margin: 2% auto;
    padding: 10px;
    background-color: rgb(215, 221, 219);
    border: 2px solid rgb(156, 255, 64);
}

.comment-pseudo {
    margin-right: 65%;
    font-weight: 900;
    font-size: 2rem;
    color: rgb(0, 0, 0);
}

.comment-pseudo-delete {
  color: rgb(82, 69, 69);
}

.comment-message {
    color: rgb(0, 0, 0);
    font-size: 1.5rem;
    font-weight: 500;
}

.delete-comment-button {
   background-color: rgb(255, 0, 34);
  color: rgb(255, 255, 255);
  margin-left: 70% ;
  padding: 10px;
  cursor: pointer;
    outline: none;
    height: 50px;
    width: 200px;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 15px;
}

</style>
