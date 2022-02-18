<template>
<div>
  <div v-if="post" class="post" >
             <img :src="post.picture"/>
             <span class="message"> {{ post.message }}</span>
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
  props: ['id']
}
</script>

<style>

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
