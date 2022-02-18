<template>
<div>
<header>
   <h1> Groupomonia  </h1>
   <button  @click="directPost()">Je crée mon Post !</button>
</header>
     <div class="fil-posts">
         <div class='available-posts'>
         <div class="displaying-post" @click="selectPost(post.id)" v-bind:key="post.id" v-for="post in posts">
             <img  :src="post.picture"/>
             <span class="message"> {{ post.message }}</span>
         </div>
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
    },
    selectPost (id) {
      this.$router.push({ path: '/post/' + id })
    }
  }
}
</script>

<style scoped>

header {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0px;
  border-bottom: 2px solid orangered;
  background-color: rgb(62, 154, 170);
}

h1 {
  color: white;
  font-weight: 600;
}

 .fil-posts {
  width: 100%;
  height: auto;
  margin: 5% auto ;
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
border: 2px solid rgb(255, 81, 0);
margin-bottom: 10px;
cursor: pointer;
}

img {
    width:100%;
    height: 70%;
    object-fit: cover;
}

.message {
    display: inline-block;
    align-self: flex-end;
    color: white;
    font-weight: 600;
    font-size: 1.6rem;
    text-align: center;
}

button {
    display: block;
    margin-left: auto;
    margin-right: 15px;
    outline: none;
    width: 10%;
    padding: 10px ;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 20px;
    border: 2px outset orangered;
    color: rgb(0, 0, 0);
    background-color: rgb(227, 239, 240);
}

</style>
