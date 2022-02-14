<template>
     <div class="fil-posts">
         <h1> Liste des posts </h1>
         <button  @click="directPost()">Je crée mon Post !</button>
         <hr>
         <div class='available-posts'>
         <div class="displaying-post" v-bind:key="post.id" v-for="post in posts" >
             <img  :src="post.picture" />
             <span class="message"> {{ post.message }}</span>
         </div>
         </div>
      </div>

</template>

<script>
import forumService from '../services/forum'

export default {
  name: 'Forum',
  data () {
    return {
      reveal: false,
      posts: []
    }
  },
  mounted () {
    forumService.forum().then(posts => {
      console.log('message :', posts.data)
      this.posts = posts.data
    })
      .catch(error => console.log(error))
  },
  methods: {
    directPost () {
      this.$router.push({ path: '/addpost' })
    }
  }
}
</script>

<style  scoped>

 .fil-posts {
  width: 100%;
  height: auto;
  border: 1px solid black;
  margin: 2% auto ;
 }

.available-posts {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.displaying-post {
width: 25%;
height: auto;
margin: 20px;
padding: 15px;
border: 1px solid rgb(15, 161, 219);
margin-bottom: 10px;
cursor: pointer;
}

img {
    width:100%;
    height: 80%;
    object-fit: cover;
}
.message {
    display: inline-block;
    align-self: flex-end;
    margin-top: 30px;
    font-weight: 600;
}

button {
    display: block;
    margin-left: auto;
    outline: none;
    padding: 10px;
    font-size: 1.1rem;
    border-radius: 10px;
    border: 2px outset orangered;
    color: rgb(0, 0, 0);
    background-color: rgb(0, 255, 42) ;
}

</style>
