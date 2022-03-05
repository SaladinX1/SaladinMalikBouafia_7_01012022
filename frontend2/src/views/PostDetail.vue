<template>
<div>
  <header>
    <div class="arrow-left" @click="backToForum()" > ⇦ </div>
    </header>
  <div v-if="post" class="post" >
             <img :src="post.picture"/>
             <span class="message"> {{ post.message }}</span>
             <div class="like-unlike" >
               <p class="like" @click="likeUnlike()" value="0" >👍 {{ likeValue }}</p>
               <p class="dislike" @click="likeUnlikeSend()" value="0">👎 {{ likeValue }}</p>
               </div>
             <div class="button-display">
               <button @click="togglePut()" class="put">Modifier</button>
               <button @click="deletePost()" class="delete">Supprimer</button>
             </div>
             <put-post-template v-bind:reveal='reveal' v-bind:togglePut='togglePut' :id="id" ></put-post-template>
         </div>
           <comments :id="id" ></comments>
</div>
</template>

<script>

import authServices from '../services/auth'
import postService from '../services/post'
import likeUnlikeService from '../services/likeDislike'
import putPostTemplate from '../components/putPostTemplate.vue'
import comments from '../components/comments.vue'

export default {
  components: { putPostTemplate, comments },
  name: 'PostDetail',
  data () {
    return {
      post: {},
      reveal: false,
      likeValue: 0
    }
  },
  mounted () {
    authServices.checkLogin()
    postService.getPostById(this.id).then(post => {
      this.post = post.data

      // const userId = localStorage.getItem('userId')
      // if (post.data.userId !== userId) {
      //   const buttonDisplay = document.querySelector('.button-display')
      //   buttonDisplay.style.display = 'none'
      // }
    }).catch(error => console.log(error))
  },
  methods: {
    backToForum () {
      this.$router.push({ path: '/forum' })
    },
    togglePut () {
      this.reveal = !this.reveal
    },
    deletePost () {
      if (window.confirm('Voulez-vous vraiment supprimer votre post ?')) {
        postService.deletePost(this.id).then(res => {
          this.$router.push({ path: '/forum' })
        })
      }
    },
    likeDislikeSend () {
      const userId = localStorage.getItem('userId')
      // const like = document.querySelector('.like').value
      // const dislike = document.querySelector('.dislike').value
      likeUnlikeService.likeUnlike(userId).then(res => {
        console.log('likeUnlike message:', res)
        const like = document.querySelector('like')
        like.setAttribute('style', 'background-color : green')
      }
      ).catch(error => console.log(error)
      )
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
  margin: 30px;
}

.put {
  background-color: aqua;
  color: rgb(0, 0, 0);
  margin-right: 50px;
}

.delete {
  background-color: rgb(255, 0, 34);
  color: rgb(255, 255, 255);
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
 margin: 10% auto 2%;
 width: 70%;
 height: auto;
 border-radius: 25px;
 background-color: rgb(215, 221, 219);
 border: 2px solid rgb(156, 255, 64);
}

.like-unlike {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.like {
  font-size: 2rem;
  margin: 0 20px;
  cursor: pointer
}

.dislike {
  font-size: 2rem;
  margin: 0 20px;
  cursor: pointer;
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
