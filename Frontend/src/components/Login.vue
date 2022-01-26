<template>
  <div>
    <router-link to="/register">Register</router-link>

    <form class="form">
      <h1>Connexion</h1>

      <div>
        <label for="email">E-mail</label>
        <input v-model="email" type="email" id="email" class="form-control" />
        <p>{{ email }}</p>
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

      <button @click="connexion()" class="btn btn-primary">Envoyer</button>
    </form>
  </div>
</template>





<script>
import loginService from "../services/login";

export default {
  name: "Login",
  data() {
    return { email: "", password: "" };
  },
  methods: {
    connexion(email, password) {
      loginService
        .login(email, password)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          alert(" une erreur est survenue :( : " + err);
        });
    },
  },
};
</script>


<style>
</style>