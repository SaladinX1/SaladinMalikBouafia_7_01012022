<template>
    
     <div class="fil-posts">

          <div>
         <post v-bind:key="reveal" v-bind:togglePost="togglePost"> </post>
         <div @click="togglePost()" class="btn btn-succes">Je poste un message</div>
         </div>

        
         <ul>
             <li v-bind:key="postDisplay" v-for="post in postDisplay"> {{ post }} </li>
         </ul>

        

     </div>

</template>

<script>
import {bus} from '../main'
import Post from '../components/Post.vue'
import axios from 'axios'

export default {
    Data() {

        return {
            reveal: false
            }
     
    },
    components: { Post },
    name: Forum,
    components: Post,
     methods: {

    sendPost() {
           axios.post('http://localhost:3000/posts').then(post => {
               console.log(post);
                alert("Merci de t'être exprimé :)");
           })
           .catch(error => console.log(error))}},

    mounted() {
        axios.get('http://localhost:3000/posts').then(post => {
            console.log('message :', post)
            const postDisplay = post;
            return postDisplay;
        }).catch(error => console.log(error))},

    togglePost: function() {
            this.reveal = !this.reveal
        }} 
      
</script>

<style  scoped>

 .fil-posts {

  width: 950px;
  height: auto;
  color: gray;
  border: 1px solid black;
  border-radius: 10%;
 }

button {
    outline: none;
    border: none;
    color: lightblue;
    background-color: #333;
    padding: 15px;
    font-size: 25px;

}
</style>