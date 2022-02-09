<template>
  <div>
    <router-link to="/register">Register</router-link>

    <form class="form">
      <h1>Connexion</h1>

      <div>
        <label for="email">E-mail</label>
        <input v-model="email" type="email" id="email" class="form-control" />
      </div>

      <div>
        <label for="password">Mot de passe</label>
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
import loginService from '../services/login'

export default {
  name: 'Login',
  data () {
    return { email: '', password: '', errorMessage: '' }
  },
  methods: {
    connexion () {
      loginService
        .login(this.email, this.password)
        .then((res) => {
          // 1. stocker le token dans le sessionStorage
          // 2. rediriger l'utilisateur sur la page forum
          console.log(res.data)
        })
        .catch((err) => {
          this.errorMessage = err.response.data.message
        })
    }
  }
}
</script>

<style>
.errorMessage {
 color: red;
 text-align: right;

}

</style>
