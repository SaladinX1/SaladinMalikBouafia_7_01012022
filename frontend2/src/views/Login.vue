<template>
  <div class="login-view">
<header>
    <router-link class="register-link"   to="/register">Register</router-link>
    </header>
    <form class="form">
      <h1>Connexion</h1>

      <div>
        <label for="email">E-mail</label>
        <input v-model="email" type="email" id="email" class="form-control" />
        <p id="emailErrorMsg"></p>
      </div>
      <div>  <label for="password">Mot de passe</label>
        <input
          v-model="password"
          type="password"
          id="password"
          class="form-control"
        />
      </div>

      <p class="errorMessage"> {{ errorMessage }}</p>

      <button @click.prevent="connexion()" class="btn btn-primary">Envoyer</button>
    </form>
  </div>
</template>

<script>
import authService from '../services/auth'

export default {
  name: 'Login',
  data () {
    return { email: '', password: '', errorMessage: '' }
  },
  methods: {
    mounted () {
      const email = document.querySelector('#email')
      email.setAttribute('pattern', '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-].+$')
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
    connexion () {
      authService
        .login(this.email, this.password)
        .then((res) => {
          console.log(res)
          const tokenUser = res.data.token
          document.cookie = `token=${tokenUser}; expires=${new Date(2022, 2, 3).toUTCString()}`
          localStorage.setItem('token', tokenUser)
          sessionStorage.setItem('token', tokenUser)
          this.$router.push({ path: '/forum' })
        })
        .catch((err) => {
          this.errorMessage = err.response.data.message
        })
    }
  }
}
</script>

<style>

.login-view {
  margin: 12% auto;
}

.errorMessage {
 color: red;
 text-align: right;
}

.register-link {
  color: rgb(255, 255, 255);
  text-decoration: none;
  position: absolute;
  top: 0px;
  cursor: pointer;
}

.register-link:hover {
color: white;
}

.form {
  color: white;
}

</style>
