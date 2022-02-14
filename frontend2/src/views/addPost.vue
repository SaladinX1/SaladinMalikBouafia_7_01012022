<template>
<body>
<div class="create-post">
    <h1>Crée ton post ici 😁 !</h1>
    <div class="display-post">
      <input type="file" class="file">
      <textarea class="area" name="post" id="post" cols="20" rows="10" ></textarea>
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
    }
  },
  methods: {
    sendPost () {
      addPostService.addPost().then(post => {
        console.log(post)
        alert('Post envoyé, bravo !')
        this.$router.push({ path: '/forum' })
      }
      ).catch(error => console.log(error))
    }
  }
}
</script>

<style>

body {
 background-image: linear-gradient(45deg, rgb(24, 159, 172) , rgb(39, 34, 32));
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
  background-color: rgb(197, 228, 20);
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
 width: 50%;
  padding: 10px;
    margin: 10px;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 20px;
    border: 2px outset orangered;
    color: rgb(0, 0, 0);
    background-color: rgb(24, 180, 228) ;
}

</style>
