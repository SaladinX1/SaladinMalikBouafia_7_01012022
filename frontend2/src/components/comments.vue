<template>
<div class="bloc-comment-area">
    <h2>Commentaires :</h2>
    <textarea class="edit-comment" cols="30" rows="10" v-model="comment"></textarea>
    <button @click="sendComment()" class="comment-button">Envoyer</button>
    <div class="bloc-comment" v-bind:key='comment' v-for="comment in comments ">
        {{ comment }}
    </div>
    </div>
</template>

<script>

import commentsServices from '../services/getComments'
import postCommentServices from '../services/postComment'

export default {
  name: 'comments',
  data () {
    return {
      comments: [],
      comment: ''
    }
  },
  Mounted () {
    commentsServices.comments(this.id).then(
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
    }
  }
}
</script>

<style>

.bloc-comment_area {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 15px;
}

.bloc-comments {
 padding: 15px;
 margin: 0;
 border: 2px solid rgb(156, 255, 64);
 color: white;
 background-color: rgb(53, 51, 51);
}

</style>
