<template>
    <div class="put-div" v-if='revealUser == true'>
             <h1>Modifie ton compte ici :</h1>
        <form method="form">
            <div class="display-form-data">
              <label for="email">Email :</label>
              <p id="emailErrorMsg"></p>
              <p class="emailMsg"> {{ emailMsg }} </p>
        <input class="input-pseudo-mail" type="text" name="email"  v-model="email">
              <label for="pseudo">Pseudo :</label>
               <p id="pseudoErrorMsg"></p>
              <p class="pseudoMsg"> {{ pseudoMsg }} </p>
        <input class="input-pseudo-mail" type="text" name="pseudo" pattern=".{8,16}" title="8 à 16 caractères sont requis" v-model="pseudo">
        </div>
        <div class="put-button-displaying">
        <button class="put-button-validation" @click="putUser()">Valider</button>
        <button class="canceled" @click='togglePutUser' >Annuler</button>
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
      pseudo: '', email: '', pseudoMsg: '', emailMsg: ''
    }
  },
  mounted () {
    this.pseudo = this.user.pseudo
    this.email = this.user.email
  },
  methods: {
    putUser () {
      const putUser = { email: this.email, pseudo: this.pseudo }
      userService.putUser(putUser).then(put => {
        alert('Pseudo et email modifié ! bravo ! 😃')
        this.$router.push({ path: '/forum' })
      }
      ).catch(err => {
        this.pseudoMsg = err.response.data.pseudoMsg
        this.emailMsg = err.response.data.emailMsg
      })
    },
    updatePicture (event) {
      this.picture = event.target.files[0]
    },
    backToForum () {
      this.$router.push({ path: '/forum' })
    }
  },
  props: ['revealUser', 'togglePutUser', 'user']
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
    line-height: 2.2;
}

label {
  color: white;
  font-size: 1.6rem;
}

.input-pseudo-mail {
  font-size: 1.3rem;
  font-weight: 500;
}

.area-put {
    display: block;
    max-width: 80%;
}
.put-button-displaying {
display: flex;
justify-content: flex-start;
}

.passwordButton {
  width: auto;
  border-radius: 5px;
  outline: none;
  font-size: 1.1rem;
}

.put-button-validation {
    margin: 10px;
    background-color : greenyellow;
    font-size: 1.1rem;
}

.canceled {
    margin: 10px;
    background-color : rgb(255, 47, 47);
    color: white;
    font-size: 1.1rem;
}

</style>
