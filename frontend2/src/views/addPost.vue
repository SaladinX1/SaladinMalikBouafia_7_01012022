<template>
<body>
  <div class="arrow-left" @click="backToForum()" > ⇦ </div>
<div class="create-post">
    <h1>Crée ton post ici 😁 !</h1>
    <div class="display-post">
      <input type="file" class="file">
      <textarea v-model="message" class="area" name="post" id="post" cols="20" rows="10" ></textarea>
      <button @click="sendPost()" >J'envoie mon message !</button>
    </div>
</div>
</body>

</template>

<script>

import addPostService from '../services/addPpost'

export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    sendPost () {
      const post = { message: this.message }
      addPostService.addPost(post).then(post => {
        console.log(post)
        alert('Post envoyé, bravo ! 😃')
        this.$router.push({ path: '/forum' })
      }
      ).catch(error => console.log(error))
    },
    backToForum () {
      this.$router.push({ path: '/forum' })
    }
  }
}
</script>

<style>

body {
 background-image: linear-gradient(45deg, rgb(24, 159, 172) , rgb(39, 34, 32));
}

.arrow-left {
  position: absolute;
  top: -50px;
  left: 20px;
  color: rgb(255, 255, 255);
  font-size: 8rem;
  cursor: pointer;
}

.create-post h1 {
  text-align: center;
  color: rgb(0, 0, 0);
}

.create-post {
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

.display-post {
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
