<template>
  <div>
    <router-link to="/login">Login</router-link>

    <form class="form">
      <h1>Inscription</h1>

      <div>
        <label for="email">E-mail</label>
        <input v-model="email" type="email" id="email" class="form-control" />
      </div>

      <div>
        <label for="pseudo">Pseudo</label>
        <input v-model="pseudo" type="text" id="pseudo" class="form-control" />
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

      <button @click="register()" class="btn btn-primary">Envoyer</button>
    </form>
  </div>
</template>



<script>
//import axios from "axios";
//import registerService from "../services/register";
//import router from "vue-router";
export default {
  name: "Register",
  data() {
    return { email: "", pseudo: "", password: "" };
  },
  methods: {
    register() {
      const user = {
        email: this.email,
        pseudo: this.pseudo,
        password: this.password,
      };
      this.axios
        .post(
          "http://localhost:3000/auth/signup",

          user
        )
        .then((res) => {
          console.log(res);
          alert("User created");
        })
        .catch((err) => {
          alert(" une erreur est survenue :( : " + err);
        });
    },
  },
};
</script>



<style>
*,
::before,
::after {
  padding: 0;
  margin: 0;
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