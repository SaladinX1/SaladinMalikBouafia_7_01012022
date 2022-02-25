<template>
    <header>
   <h1> Groupomonia </h1>
</header>
</template>

<script>
export default {
  name: 'header-top',
  data () {
    return {}
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0px;
  border-bottom: 2px solid rgb(165, 46, 3);
  background-color: rgb(209, 216, 218);
}

h1 {
    display: flex;
    align-content: center;
  display: inline;
  color: rgb(0, 0, 0);
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
}
</style>
