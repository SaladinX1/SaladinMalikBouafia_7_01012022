<template>
<div>
  <header>
    <div class="arrow-left" @click="backToForum()" > ⇦ </div>
    </header>
  <div v-if="post" class="post" >
             <img :src="post.picture"/>
             <span class="message"> {{ post.message }}</span>
             <div class="like-unlike" >
               <p class="like" @click="likeUnlike()">👍</p>
               <p class="unlike">👎</p>
               </div>
             <div class="button-display">
               <button @click="displayPut()" class="put">Modifier</button>
               <button @click="deletePost()" class="delete">Supprimer</button>
             </div>
             <put-post-template v-bind='putPostTemplate' ></put-post-template>
         </div>
</div>
</template>

<script>

import postService from '../services/post'
import deletePostService from '../services/deletePost'
import likeUnlikeService from '../services/likeUnlike'
import putPostTemplate from '../components/putPostTemplate.vue'

export default {
  components: { putPostTemplate },
  name: 'PostDetail',
  data () {
    return {
      post: {},
      PutPostTemplate: false
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
    },
    putDisplay () {
      this.putPostTemplate = !putPostTemplate
    },
    deletePost () {
      if (window.confirm('Voulez-vous vraiment supprimer votre post ?')) {
        deletePostService.deletePost(this.id).then(res => {
          console.log('message post detruit :', res)
          alert('Votre post a été suprimé !')
          this.$router.push({ path: '/forum' })
        })
      }
    },
    likeUnlike () {
      likeUnlikeService.likeUnlike(this.id).then(res => {
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
  margin-top: 70px;
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
 margin: 10% auto;
 width: 70%;
 height: auto;
 border-radius: 25px;
 background-color: rgb(255, 202, 117);
}

.like-unlike {
  display: flex;
  justify-content: center;
}

.like {
  font-size: 2rem;
  margin: 0 20px;
  cursor: pointer
}

.unlike {
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
