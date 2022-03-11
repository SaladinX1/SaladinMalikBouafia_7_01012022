<template>
    <div class="put-div" v-if='revealUser == true'>
             <h1>Modifie ton compte ici :</h1>
        <form method="form" @change="checkImputForm()">
            <div class="display-form-data">
              <label for="email">Email :</label>
              <p id="emailErrorMsg"></p>
        <input class="input-pseudo-mail" type="text" name="email" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-].+$" v-model="email">
              <label for="pseudo">Pseudo :</label>
        <input class="input-pseudo-mail" type="text" name="pseudo" pattern="^[a-zA-Z]+[^0-9]" v-model="pseudo">
        <p id="pseudoErrorMsg"></p>
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
      pseudo: '', email: ''
    }
  },
  mounted () {
  },
  methods: {
    checkImputForm () {
      document.querySelector('#pseudo').addEventListener('change', (e) => {
        const pseudo = e.target.value
        if (/^[a-zA-Z]+[^0-9]/.test(pseudo) === false) {
          document.querySelector('#pseudoErrorMsg').textContent = 'Veuillez sélectionnez un pseudo seulement par des lettres minuscules ou majuscules et/ou des chiffres'
          const error = document.querySelector('#pseudo')
          error.classList.add('border')
          error.style.border = ' 1px solid red'
        }
      })
      document.querySelector('#email').addEventListener('change', (e) => {
        const email = e.target.value
        if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-].+$/.test(email) === false) {
          document.querySelector('#emailErrorMsg').textContent = 'Veuillez inscrire une adresse éléctronique seulement avec un @ et des caractères alphanumériques et/ou spéciaux ( - , _ , .)'
          const error = document.querySelector('#email')
          error.classList.add('border')
          error.style.border = ' 1px solid red'
        }
      })
    },
    putUser () {
      userService.putUser(this.pseudo).then(post => {
        console.log(post)
        alert('Compte modifié ! bravo ! 😃')
        this.$router.push({ path: '/forum' })
      }
      ).catch(error => console.log(error))
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
  props: ['revealUser', 'togglePutUser']
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
  width: 50%;
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
