<template>
 <div class="display-form">
     <header>
    <div class="arrow-left" @click="backToProfile()" > ⇦ </div>
    </header>
     <form class="form" >
         <h1 class="password-title">Change ton mot de passe ici :</h1>
        <label for="old-password"> Ancien mot de passe :</label>
          <input class="input-pw" type="text" name="old-password" v-model="old_password" placeholder="ancien mot de passe" required>
        <label for="new-password" required >Nouveau mot de passe :</label>
          <input class="input-pw" type="text" name="new-password" v-model="new_password" placeholder="nouveau mot de passe" required>
     </form>
     <button class="put-password-validation" @click="putUser()">Valider</button>
    </div>
</template>

<script>

import userService from '../services/user'

export default {
  name: 'NewPasswordView',
  data () {
    return {
      old_password: '', new_password: ''
    }
  },
  methods: {
    putUser () {
      userService.putUser(this.old_password, this.new_password).then(pw => {
        console.log('this change:', pw)
        alert('Mot de passe modifié ! bravo ! 😃')
        this.$router.push({ path: '/profile' })
      }
      ).catch(error => console.log(error))
    },
    backToProfile () {
      this.$router.push({ path: '/profile' })
    }
  }
}
</script>

<style>

.arrow-left {
 position: absolute;
 top: 15px;
  color: rgb(255, 255, 255);
  font-size: 8rem;
  cursor: pointer;
}

.display-form {
    display: flex;
    margin: 10% auto;
    line-height: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.password-title {
    color: white;
}

.input-pw::placeholder {
    text-align: center;
}

.input-pw {
 font-size: 1.5rem;
 font-weight: 600;
}

.put-password-validation {
  outline: none;
  border-radius: 10px;
  background-color: rgb(80, 230, 80);
  font-size: 1.5rem;
  width: 15%;
}

</style>
