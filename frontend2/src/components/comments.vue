<template>
<div class="comment-area">
    <h2>Commentaires :</h2>
    <div class="comment-display" v-bind:key='comment.id' v-for="comment in comments ">
      <div class="comment-pseudo"> {{ comment.User.pseudo }} </div> <div class="comment-message"> {{ comment.message }} </div>
      <button @click="deleteComment()" class="delete-comment-button">Supprimer</button>
    </div>
    <button class="add-comment-button" @click="sendComment()">✚</button>
</div>
</template>

<script>

import getCommentsServices from '../services/getComments'
import postCommentServices from '../services/postComment'
import deleteCommentServices from '../services/deleteComment'

export default {
  name: 'comments',
  data () {
    return {
      comments: []
    }
  },
  mounted () {
    console.log('message recuperation :', this.id)
    getCommentsServices.comments(this.id).then(
      comments => {
        console.log('comment : ', comments.data)
        this.comments = comments.data
      }
    ).catch(error => console.log(error))
  },
  methods: {
    sendComment () {
      const comment = { comment: this.comment }
      postCommentServices.addComment(comment).then(comment => {
        console.log('commentaire unique : ', comment)
        alert('Commentaire posté, bravo 😃 !')
      }
      ).catch(error => console.log(error))
    },
    deletePost () {
      if (window.confirm('Voulez-vous vraiment supprimer votre commentaire ?')) {
        deleteCommentServices.deleteComment(this.id).then(res => {
          console.log('message post detruit :', res)
        })
      }
    }
  },
  props: ['id', 'reveal', 'toggle']
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
    outline: none;
    height: 50px;
    width: 200px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 15px;
}

.add-comment-button {
    display: block;
    display: flex;
    justify-content: center;
    align-content: center;
    position:fixed;
    bottom: 60px;
    right: 60px;
    padding: 10px;
    outline: none;
    height: 100px;
    width: 100px;
    font-size: 3rem;
    font-weight: 600;
    border-radius: 50%;
    border: 2px outset orangered;
    color: orangered;
    background-color: rgb(227, 239, 240);
}
</style>
