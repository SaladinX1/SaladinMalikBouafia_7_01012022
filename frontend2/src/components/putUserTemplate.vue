<template>
    <div class="put-div" v-if='revealUser == true'>
             <h1>Modifie ton compte ici :</h1>
        <form method="form">
            <div class="display-form-data">
              <label for="email">Email :</label>
        <input type="text" name="email" v-model="email" >
              <label for="pseudo">Pseudo :</label>
        <input type="text" name="pseudo" v-model="pseudo" >
              <label for="old-password"> Ancien mot de passe :</label>
        <input type="text" name="old-password" v-model="old_password" required >
              <label for="new-password">Nouveau mot de passe :</label>
        <input type="text" name="new-password" v-model="new_password" required>
        </div>
        <div class="put-button-displaying">
        <button class="put-button-validation" @click="putUser()">Valider</button>
        <button class="canceled" @click='togglePutUser()'>Annuler</button>
        </div>
        </form>
    </div>
</template>

<script>

import userService from '../services/user'

export default {
  name: 'putUserTemplate',
  data () {
    return {
      pseudo: '', email: ''
    }
  },
  mounted () {
    console.log(this.revealUser)
  },
  methods: {
    putUser () {
      const userId = localStorage.getItem('userId')
      userService.putUser(this.pseudo, userId).then(post => {
        console.log(post)
        alert('Compte modifié ! bravo ! 😃')
        this.$router.push({ path: '/forum' })
      }
      ).catch(error => console.log(error))
    },
    updatePicture (event) {
      this.picture = event.target.files[0]
    },
    backToForum () {
      this.$router.push({ path: '/forum' })
    }
  },
  props: ['revealUser']
}
</script>

<style>

.put-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5% auto;
    width: auto;
    height: auto;
    padding: 15px;
    border-radius: 10px;
    border: 2px solid rgb(255, 255, 255);
}

.put-div h1 {
    text-align: center;
    padding: 10px;
    color: white;
}

.display-form-data {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

label {
  color: white;
  font-size: 1.6rem;
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
