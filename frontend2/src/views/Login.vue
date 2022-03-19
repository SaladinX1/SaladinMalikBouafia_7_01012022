<template>
  <div class="login-view">
<header>
    <router-link class="register-link"   to="/register">Inscription</router-link>
    </header>
    <form class="form">
      <h1>Connexion</h1>

      <div>
        <label for="email">E-mail</label>
        <input v-model="email" type="email" id="email" class="form-control" required/>
        <p id="emailErrorMsg"></p>
      </div>

      <div>  <label for="password">Mot de passe</label>
        <input
          v-model="password"
          type="password"
          id="password"
          class="form-control"
          pattern=".{8,16}"
          required
        />
      </div>

      <button @click.prevent="connexion()" class="btn btn-primary">Envoyer</button>
    </form>
    <div class="moderateur-connexion-button" >
    <button @click="moderateurViewConnexion()" > Se connecter en tant que Modérateur </button>
    </div>
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
    },
    moderateurViewConnexion () {
      this.$router.push({ path: '/moderateurconnexion' })
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

.moderateur-connexion-button {
  display: flex;
  justify-content: center;
}

.moderateur-connexion-button button {
  background-color: rgb(250, 244, 242);
  outline: none;
  border-radius: 15px;
  font-size: 1.2rem;
  white-space: normal;
}

.moderateur-connexion-button button:hover {
  background-color: rgb(245, 70, 70);
  color: rgb(255, 255, 255);
}

</style>
