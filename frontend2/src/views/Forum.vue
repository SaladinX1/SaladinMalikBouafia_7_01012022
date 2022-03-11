<template>
<div>
<header-top>
</header-top>
   <h1> Partages tes sensations . . . </h1>
     <div v-if="posts.length > 0" class="fil-posts">
         <div class="displaying-post" @click="selectPost(post.id)" v-bind:key="post.id" v-for="post in posts">
             <img :src="post.picture"/>
             <span class="message"> {{ post.message }}</span>
         </div>
      </div>
      <div v-else>
 <h2 class="announce" > Sois le premier à t'exprimer 😃 !</h2>
 </div>
  <button-add-post></button-add-post>
    </div>
</template>

<script>

import authServices from '../services/auth'
import postService from '../services/post'
import headerTop from '../components/header-top.vue'
import buttonAddPost from '../components/button-add-post.vue'

export default {
  components: { headerTop, buttonAddPost },
  name: 'Forum',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    authServices.checkLogin()
    postService.getAllPost().then(posts => {
      console.log('message :', posts.data)
      this.posts = posts.data
    })
      .catch(error => console.log(error))
  },
  methods: {
    selectPost (id) {
      this.$router.push({ path: '/post/' + id })
    }
  }
}
</script>

<style scoped>

h1 {
  margin: 9% auto 0;
  padding: 50px 0 10px;
  font-style:italic;
  font-weight: lighter;
  font-size: 3rem;
  color: white;
  text-align: center;
}

 .announce {
   display: flex;
   justify-content: center;
   align-content: center;
   margin: 0 auto;
   font-size: 4rem;
   color: white;
 }

 .fil-posts {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
 }

.displaying-post {
width: 40%;
height: auto;
margin: 5% auto;
padding: 10px;
border-radius: 20px;
border: 2px solid rgb(255, 255, 255);
margin-bottom: 10px;
cursor: pointer;
}

img {
    width:100%;
    margin: 0;
    object-fit: cover;
}

.message {
    display: inline-block;
    align-self: flex-end;
    padding: 10px 5px;
    color: white;
    font-weight: 600;
    font-size: 1.8rem;
    text-align: center;
}

@media (max-width: 1600px) {

.fil-posts {
  margin: 0;
  flex-direction: column;
  justify-content: flex-start;
 }

 .displaying-post {
width: 80%;
height: auto;
margin: 5% auto;
padding: 10px;
border-radius: 20px;
border: 3px solid rgb(255, 255, 255);
margin-bottom: 10px;
cursor: pointer;
}

img {
    width:100%;
    margin: 0;
    object-fit: cover;
}

}

</style>
