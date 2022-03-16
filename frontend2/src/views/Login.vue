<template>
  <div class="login-view">
<header>
    <router-link class="register-link"   to="/register">Register</router-link>
    </header>
    <form class="form">
      <h1>Connexion</h1>

      <div>
        <label for="email">E-mail</label>
        <input v-model="email" type="email" id="email" class="form-control"/>
        <p id="emailErrorMsg"></p>
      </div>

      <div>  <label for="password">Mot de passe</label>
        <input
          v-model="password"
          type="password"
          id="password"
          class="form-control"
          pattern=".{8,16}"
        />
      </div>

      <button @click.prevent="connexion()" class="btn btn-primary">Envoyer</button>
    </form>
  </div>
</template>

<script>
import authService from '../services/auth'

export default {
  name: 'Login',
  data () {
    return { email: '', password: '' }
  },
  methods: {
    connexion () {
      authService
        .login(this.email, this.password)
        .then((res) => {
          const tokenUser = res.data.token
          const userId = res.data.userId
          localStorage.setItem('token', tokenUser)
          localStorage.setItem('userId', userId)
          this.$router.push({ path: '/forum' })
        })
        .catch((err) => {
          console.log(err)
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
