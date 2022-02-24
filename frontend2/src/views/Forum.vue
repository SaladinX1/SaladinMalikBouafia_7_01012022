<template>
<div>
<header-top>
</header-top>
     <div class="fil-posts">
         <div class="displaying-post" @click="selectPost(post.id)" v-bind:key="post.id" v-for="post in posts">
             <img  :src="post.picture"/>
             <span class="message"> {{ post.message }}</span>
         </div>
         <button-add-post v-bind:directPost='directPost'></button-add-post>
      </div>
    </div>
</template>

<script>

import forumService from '../services/forum'
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

 .fil-posts {
  width: 100%;
  margin: 5% auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
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
