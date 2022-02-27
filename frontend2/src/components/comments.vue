<template>
<div class="bloc-comment-area">
    <h2>Commentaires :</h2>
    <hr>
    <div class="bloc-comment" v-bind:key='comment.id' v-for="comment in comments ">
      <div> {{ comment.User.pseudo }} </div> <div> {{ comment.message }} </div>
    </div>
    </div>
</template>

<script>

import commentsServices from '../services/getComments'

export default {
  name: 'comments',
  data () {
    return {
      comments: []
    }
  },
  mounted () {
    console.log('message recuperation :', this.id)
    commentsServices.comments(this.id).then(
      comments => {
        console.log('comment : ', comments.data)
        this.comments = comments.data
      }
    ).catch(error => console.log(error))
  },
  props: ['id']
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
