<template>
<div>
<header-top>
</header-top>
     <div class="fil-posts">
         <div class="displaying-post" @click="selectPost(post.id)" v-bind:key="post.id" v-for="post in posts">
             <img  :src="post.picture"/>
             <span class="message"> {{ post.message }}</span>
         </div>
      </div>
    </div>
</template>

<script>
import forumService from '../services/forum'
import headerTop from '../components/header-top.vue'

export default {
  components: { headerTop },
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
  border-bottom: 2px solid rgb(165, 46, 3);
  background-color: rgb(209, 216, 218);
}

h1 {
  color: rgb(0, 0, 0);
  font-weight: 600;
}

 .fil-posts {
  width: 100%;
  margin: 10% auto;
  flex-direction: column-reverse;
  justify-content: center;
 }

.displaying-post {
width: 40%;
height: 500px;
margin: 5% auto;
padding: 10px;
border-radius: 20px;
border: 2px solid rgb(255, 81, 0);
margin-bottom: 10px;
cursor: pointer;
}

img {
    width:100%;
    height: 90%;
    margin: 0;
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

</style>
