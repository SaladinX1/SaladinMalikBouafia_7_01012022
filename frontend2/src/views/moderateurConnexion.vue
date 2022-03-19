<template>
      <div class="login-moderateur-view">
<header>
    <router-link class="register-link"   to="/register">Inscription</router-link>
    </header>
    <form class="form">
      <h1>Connexion Modérateur</h1>

      <div>
        <label for="email">E-mail</label>
        <input v-model="email" type="email" id="moderateurEmail" value="groupomaniaMaster@gmail.com" class="form-control" placeholder="Entrer l'adresse e-mail du modérateur"/>
      </div>

      <div>  <label for="password">Mot de passe</label>
        <input
          v-model="password"
          type="password"
          name="moderateurPassword"
          id="moderateurPassword"
          class="form-control"
          pattern=".{8,16}"
          placeholder="Entrer le mot de passe du modérateur"
        />
      </div>

      <button @click.prevent="connexionModerateur()" class="btn btn-primary">Envoyer</button>
    </form>
     </div>
</template>

<script>

import userAuth from '../services/auth'

export default {

  name: 'moderateurConnexion',
  data () {
    return {
      email: '', password: ''
    }
  },
  methods: {
    connexionModerateur () {
      userAuth.login(this.email, this.password).then(master => {
        const token = master.data.token
        const userId = master.data.userId
        localStorage.setItem('token', token)
        localStorage.setItem('userId', userId)
        alert('Bienvenue modérateur !')
        this.$router.push({ path: '/forum' })
      }).catch()
    }
  }
}
</script>

<style>

.login-moderateur-view {
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
