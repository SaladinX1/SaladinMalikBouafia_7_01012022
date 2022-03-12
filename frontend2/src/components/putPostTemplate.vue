<template>
    <div class="put-section" v-if='reveal'>
        <div class="put-form">
             <h1>Modifie ton post ici 😁 !</h1>
        <form action="javascript:void(0);">
            <div class="display-form-data">
        <input type="file" class="file" v-on:change="updatePicture" >
        <textarea v-model="message" class="area" name="message" id="message" cols="20" rows="10" ></textarea>
        </div>
        <div class="put-button-displaying">
        <button class="put-button-validation" @click="putPost()">Valider</button>
        <button class="canceled" @click='togglePut'>Annuler</button>
        </div>
        </form>
        </div>
    </div>
</template>

<script>

import postService from '../services/post'

export default {
  name: 'putPostTemplate',
  data () {
    return {
      message: '',
      picture: ''
    }
  },
  methods: {
    putPost () {
      const data = new FormData()
      data.append('message', this.message)
      data.append('file', this.picture)
      postService.putPost(this.id, data).then(res => {
        console.log('message put :', res)
        alert('Post modifié 😃 !')
        location.reload()
      }).catch(error => console.log(error))
    },
    updatePicture (event) {
      console.log(event)
      this.picture = event.target.files[0]
    },
    backToForum () {
      this.$router.push({ path: '/forum' })
    }
  },
  props: ['reveal', 'togglePut', 'id']
}
</script>

<style>

.put-section {
    display: flex;
    justify-content: center;
    margin: 5% auto;
    width: auto;
    height: auto;
}

.put-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.put-form h1 {
    text-align: center;
}

.display-form-data {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.area-put {
    display: block;
    max-width: 80%;
}
.put-button-displaying {
display: flex;
justify-content: flex-start;
}

.put-button-validation {
    margin: 10px;
    background-color : greenyellow;
}

.canceled {
    margin: 10px;
    background-color : rgb(255, 47, 47);
    color: white;
}

</style>
