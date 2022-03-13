<template>
  <div class='register-view'>
<header>
    <router-link class='login-link' to='/'>Connexion</router-link>
    </header>
    <form class='form' @submit="register">
      <h1>Inscription</h1>

      <div>
        <label for='email'>E-mail</label>
        <input v-model='email' type='email' id='email' class='form-control' required />
        <p id='emailErrorMsg'> {{ emailErrorMsg }} </p>
        <p class='sameEmail'> {{ sameEmail }} </p>
      </div>

      <div>
        <label for='pseudo'>Pseudo</label>
        <input v-model='pseudo' type='text' id='pseudo' pattern="[a-zA-Z0-9]{4,12}" title="Merci de sélectionner 4 à 12 caractères" class='form-control' required />
        <p id='pseudoErrorMsg'> {{ pseudoErrorMsg }} </p>
        <p class='samePseudo'> {{ samePseudo }} </p>
      </div>

      <div>
        <label for='password'>Mot de passe</label>
        <input
          v-model='password'
          type='password'
          id='password'
          class='form-control'
           pattern=".{8,16}"
           title="8 à 16 caractères sont requis"
        required
        />
      </div>
      <input  type="submit" value="Envoyer" class='btn btn-primary'>
    </form>
  </div>
</template>

<script>
import authService from '../services/auth'

export default {
  name: 'Register',
  data () {
    return { email: '', pseudo: '', password: '', emailErrorMsg: '', pseudoErrorMsg: '', samePseudo: '', sameEmail: '' }
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
          this.sameEmail = err.response.data.emailMessage
          this.samePseudo = err.response.data.pseudoMessage
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

.samePseudo , .sameEmail {
  font-size: 1.2rem;
  color: red;
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
