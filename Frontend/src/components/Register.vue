<template>
  <form class="form">
    <h1>Inscription</h1>

    <div>
      <label for="email">E-mail</label>
      <input type="email" id="email" class="form-control" />
    </div>

    <div>
      <label for="pseudo">Pseudo</label>
      <input type="text" id="pseudo" class="form-control" />
    </div>

    <div>
      <label for="password">Mot de passe</label>
      <input type="password" id="password" class="form-control" />
    </div>

    <button class="btn btn-primary">Envoyer</button>
  </form>
</template>



<script>
export default {
  name: "Register",
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
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.btn {
  margin-top: 50px;
}
</style>