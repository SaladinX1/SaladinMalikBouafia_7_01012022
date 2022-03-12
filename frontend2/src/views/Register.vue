<template>
  <div class='register-view'>
<header>
    <router-link class='login-link' to='/'>Connexion</router-link>
    </header>
    <form class='form'>
      <h1>Inscription</h1>

      <div>
        <label for='email'>E-mail</label>
        <input v-model='email' type='email' id='email' class='form-control' />
        <p id='emailErrorMsg'> {{ emailErrorMsg }} </p>
      </div>

      <div>
        <label for='pseudo'>Pseudo</label>
        <input v-model='pseudo' type='text' id='pseudo' class='form-control' />
        <p id='pseudoErrorMsg'> {{ pseudoErrorMsg }} </p>
      </div>

      <div>
        <label for='password'>Mot de passe</label>
        <input
          v-model='password'
          type='password'
          id='password'
          class='form-control'
        />
      </div>
      <button @click='register()' class='btn btn-primary'>Envoyer</button>
    </form>
  </div>
</template>

<script>
import authService from '../services/auth'

export default {
  name: 'Register',
  data () {
    return { email: '', pseudo: '', password: '', emailErrorMsg: '', pseudoErrorMsg: '' }
  },
  mounted () {
    const pseudo = document.querySelector('#pseudo')
    pseudo.setAttribute('pattern', '^[a-zA-Z]+[^0-9]')
    document.querySelector('#pseudo').addEventListener('change', (e) => {
      const pseudo = e.target.value
      if (/^[a-zA-Z]+[^0-9]/.test(pseudo) === false) {
        document.querySelector('#pseudoErrorMsg').textContent = 'Veuillez sélectionnez un pseudo seulement par des lettres minuscules ou majuscules et/ou des chiffres'
        const error = document.querySelector('#pseudo')
        error.classList.add('border')
        error.style.border = ' 1px solid red'
      } else {
        document.querySelector('#pseudoErrorMsg').textContent = ''
      }
    })
    const email = document.querySelector('#email')
    email.setAttribute('pattern', '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-].+$')
    document.querySelector('#email').addEventListener('change', (e) => {
      const email = e.target.value
      if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-].+$/.test(email) === false) {
        document.querySelector('#emailErrorMsg').textContent = 'Veuillez inscrire une adresse éléctronique seulement avec un @ et des caractères alphanumériques et/ou spéciaux ( - , _ , .)'
        const error = document.querySelector('#email')
        error.classList.add('border')
        error.style.border = ' 1px solid red'
      } else {
        document.querySelector('#emailErrorMsg').textContent = ''
      }
    })
  },
  methods: {
    register () {
      const user = {
        email: this.email,
        pseudo: this.pseudo,
        password: this.password
      }
      authService
        .register(user)
        .then((res) => {
          console.log(res)
          alert('Vous êtes maintenant inscrit ! Bravo 😃 !')
          this.$router.push({ path: '/' })
        })
        .catch((err) => {
          alert(' une erreur est survenue :( : ' + err)
        })
    }
  }
}
</script>

<style>
*,
::before,
::after {
  padding: 0;
  margin: 0;
}

.register-view {
  margin: 12% auto;
}

.login-link {
  color: rgb(255, 255, 255);
  text-decoration: none;
  position: absolute;
  top: 0px;
  cursor: pointer;
}

.login-link:hover {
  color: white;
}

.form {
  padding: 50px;
  max-width: 1000px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.btn {
  margin-top: 50px;
}

a {
  text-decoration: none;
  margin: 100px;
  font-size: 30px;
  color: #333;
}

</style>
