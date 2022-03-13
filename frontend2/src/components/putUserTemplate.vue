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
        <input class="input-pseudo-mail" type="text" name="pseudo"  v-model="pseudo">
              <button class="passwordButton" @click="newPasswordView()">Changer le mot de passe</button>
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
    // checkImputForm () {
    //   document.querySelector('#pseudo').addEventListener('change', (e) => {
    //     const pseudo = e.target.value
    //     if (/^[a-zA-Z]+[^0-9]/.test(pseudo) === false) {
    //       document.querySelector('#pseudoErrorMsg').textContent = 'Veuillez sélectionnez un pseudo seulement par des lettres minuscules ou majuscules et/ou des chiffres'
    //       const error = document.querySelector('#pseudo')
    //       error.classList.add('border')
    //       error.style.border = ' 1px solid red'
    //     }
    //   })
    //   document.querySelector('#email').addEventListener('change', (e) => {
    //     const email = e.target.value
    //     if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-].+$/.test(email) === false) {
    //       document.querySelector('#emailErrorMsg').textContent = 'Veuillez inscrire une adresse éléctronique seulement avec un @ et des caractères alphanumériques et/ou spéciaux ( - , _ , .)'
    //       const error = document.querySelector('#email')
    //       error.classList.add('border')
    //       error.style.border = ' 1px solid red'
    //     }
    //   })
    // },
    putUser () {
      const putUser = { email: this.email, pseudo: this.pseudo }
      userService.putUser(putUser).then(put => {
        console.log('this put changed:', put)
        alert('Pseudo et email modifié ! bravo ! 😃')
        this.$router.push({ path: '/forum' })
      }
      ).catch(err => {
        console.log(err)
        this.pseudoMsg = err.response.data.pseudoMsg
        this.emailMsg = err.response.data.emailMsg
      })
    },
    updatePicture (event) {
      this.picture = event.target.files[0]
    },
    newPasswordView () {
      this.$router.push({ path: '/new_password' })
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
