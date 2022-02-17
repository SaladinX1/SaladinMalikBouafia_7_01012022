<template>
      <div v-if="post" class="post" >
             <img :src="post.picture"/>
             <span class="message"> {{ post.message }}</span>
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
  props: ['id']
}
</script>

<style>

.post {
 margin: 10% auto;
 width: 60%;
 height: 800px;
 background-color: rgb(255, 163, 16);
}
</style>
