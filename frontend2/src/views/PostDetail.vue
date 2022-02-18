<template>
<div>
  <header>
    <div class="arrow-left" @click="backToForum()" > ⇦ </div>
    </header>
  <div v-if="post" class="post" >
             <img :src="post.picture"/>
             <span class="message"> {{ post.message }}</span>
             <div class="button-display">
               <button class="put">Modifier</button>
               <button class="delete">Supprimer</button>
             </div>
         </div>
</div>
</template>

<script>
import postService from '../services/post'

export default {
  name: 'PostDetail',
  data () {
    return {
      post: {}
    }
  },
  mounted () {
    postService.getPostById(this.id).then(post => {
      console.log('message post retour :', post)
      this.post = post.data
    }).catch(error => console.log(error))
  },
  methods: {
    backToForum () {
      this.$router.push({ path: '/forum' })
    }
  },
  props: ['id']
}
</script>

<style>

.button-display {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 70px;
}

.put {
  background-color: aqua;
  color: rgb(0, 0, 0);
  margin-right: 50px;
}

.delete {
  background-color: rgb(255, 0, 34);
  color: rgb(0, 0, 0);
  margin-left: 50px;
}

.arrow-left {
  position: absolute;
  top: -50px;
  left: 20px;
  color: rgb(255, 255, 255);
  font-size: 8rem;
  cursor: pointer;
}

.post {
  display: flex;
  flex-direction: column;
 margin: 10% auto;
 width: 70%;
 height: 900px;
 border-radius: 25px;
 background-color: rgb(255, 202, 117);
}

img {
  width: 90%;
  height: 350px;
  border-radius: 25px;
  object-fit: cover;
  margin: 10% auto;
}

.message {
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
}

</style>
