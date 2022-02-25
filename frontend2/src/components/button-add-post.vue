<template>
        <div>
      <button class="add-post-button" @click="directPost()">✚</button>
      </div>
</template>

<script>
export default {
  name: 'button-add-post',
  data () {
    return {}
  },
  methods: {
    directPost () {
      this.$router.push({ path: '/addpost' })
    }
  }
}
</script>

<style>

.add-post-button {
    display: block;
    display: flex;
    justify-content: center;
    align-content: center;
    position:fixed;
    bottom: 60px;
    right: 60px;
    padding: 10px;
    outline: none;
    height: 100px;
    width: 100px;
    font-size: 3rem;
    font-weight: 600;
    border-radius: 50%;
    border: 2px outset orangered;
    color: orangered;
    background-color: rgb(227, 239, 240);
}
</style>
