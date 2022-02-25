<template>
    <div class="put-div" v-if='reveal'>
        <div class="put-form">
             <h1>Modifie ton post ici 😁 !</h1>
        <form method="Post">
            <div class="display-form-data">
        <input type="file" class="file">
        <textarea class="area" name="post" id="post" cols="20" rows="10" ></textarea>
        </div>
        <div class="put-button-displaying">
        <button class="put-button-validation" @click="putPost(id)">Valider</button>
        <button class="canceled" @click='togglePut'>Annuler</button>
        </div>
        </form>
        </div>
    </div>
</template>

<script>

import putService from '../services/putPost'

export default {
  name: 'putPostTemplate',
  data () {
    return {
    }
  },
  methods: {
    putPost () {
      putService.putPost(this.id).then(res => {
        console.log('message put :', res)
      }).catch(error => console.log(error))
    }
  },
  props: ['reveal', 'togglePut']
}
</script>

<style>

.put-div {
    display: flex;
    justify-content: center;
    margin: 5% auto;
    width: auto;
    height: auto;
}

.put-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.put-form h1 {
    text-align: center;
}

.display-form-data {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.area-put {
    display: block;
    max-width: 80%;
}
.put-button-displaying {
display: flex;
justify-content: flex-start;
}

.put-button-validation {
    margin: 10px;
    background-color : greenyellow;
}

.canceled {
    margin: 10px;
    background-color : rgb(255, 47, 47);
    color: white;
}

</style>
