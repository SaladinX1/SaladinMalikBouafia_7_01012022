<template>
<div>
    <div class="arrow-left" @click="back()" > ⇦ </div>
<div class="create-comment">
    <h1>Envoies ton commentaire ici 😁 !</h1>
    <div class="display-comment">
      <textarea v-model="comment" class="area" name="comment" id="comment" cols="20" rows="10" ></textarea>
      <button @click="sendComment()" >Je commente !</button>
    </div>
</div>
</div>
</template>

<script>

import authServices from '../services/auth'
import postCommentServices from '../services/postComment'

export default {
  name: 'addPost',
  data () {
    return {
      comment: ''
    }
  },
  mounted () {
    authServices.checkLogin()
  },
  methods: {
    sendComment () {
      const userId = localStorage.getItem('userId')
      const comment = { message: this.comment, userId }
      postCommentServices.addComment(comment, this.id).then(comment => {
        console.log('commentaire unique : ', comment)
        alert('Commentaire posté, bravo 😃 !')
        this.$router.push({ path: '/post/' + this.id })
      }
      ).catch(error => console.log(error))
    },
    back () {
      this.$router.push({ path: '/forum' })
    }
  },
  props: ['id']
}
</script>

<style>

.arrow-left {
  position: absolute;
  top: -50px;
  left: 20px;
  color: rgb(255, 255, 255);
  font-size: 8rem;
  cursor: pointer;
}

.create-comment h1 {
  text-align: center;
  color: rgb(0, 0, 0);
}

.create-comment {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1000px;
  height: 500px;
  background-color: rgb(215, 221, 219);
  margin: 200px auto 0;
  border-radius: 15px;
  border: 2px solid rgb(156, 255, 64);
  box-shadow: 5px 2px 2px rgba(66, 65, 65, 0.424);
}

.display-comment {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 10px;
}

.area {
  resize: none;
  font-size: 1.5rem;
  font-weight: 600;
  height: 200px;
}

button {
    align-self: center;
    outline: none;
    width: 30%;
    padding: 10px;
    margin: 20px 20px;
    font-size: 1.5rem;
    font-weight: 600;
    border: 2px outset rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    background-color: rgb(236, 255, 66) ;
}

</style>
