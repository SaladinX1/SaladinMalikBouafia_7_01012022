<template>
<body>
<div class="create-post">
    <h1>Crée ton post ici 😁 !</h1>
    <div class="display-post">
      <input type="file" class="file">
      <textarea class="area" name="post" id="post" cols="20" rows="10" ></textarea>
    </div>
</div>
</body>

</template>

<script>
export default {
  data () {

  }
}
</script>

<style>

body {
 background-image: linear-gradient(45deg, rgb(28, 164, 176) , orangered);
}

.create-post h1 {
  text-align: center;
}

.create-post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1000px;
  height: 500px;
  background-color: rgb(197, 228, 20);
  margin: 200px auto 0;
  border-radius: 10%;
  border: 2px solid rgb(156, 255, 64);
  box-shadow: 5px 2px 2px rgba(66, 65, 65, 0.424);
}

.display-post {
display: flex;
  flex-direction: column;
  justify-content: center;
}

.file {
}

.area {
  resize: none;
  font-size: 1.5rem;
  font-weight: 600;
}

</style>
