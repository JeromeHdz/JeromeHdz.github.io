<template>
  <div id="app">
    <div class="wrapper has-text-centered">
      <section class="hero is-medium is-warning is-bold">
          <div class="hero-body">
            <div class="container">
                <h1 class="title is-1 main-title ">BEERZ</h1>
            </div>

            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="columns">
                        <card @update-database="updateDatabase"
                        :friends="friends"
                        :friends-name="friends[index].name" 
                        :friends-value="friends[index].value" 
                        :friends-image="friends[index].imageUrl"
                        :friends-color="friends[index].color"
                        v-for="(value, index) in friends" :key="value.id"></card>                
                    </div>
                </div>
            </div>
          </div>
      </section>
      </div>
  </div>
</template>

<script>

import Card from './components/Card'
import Firebase from 'firebase'

// Initialize Firebase
 var database = Firebase.initializeApp({
    apiKey: "AIzaSyAJX-Q4i2oYrmvapCUv-QsskjO2W8ISUsM",
    authDomain: "beerz-de3f8.firebaseapp.com",
    databaseURL: "https://beerz-de3f8.firebaseio.com",
    projectId: "beerz-de3f8",
    storageBucket: "beerz-de3f8.appspot.com",
    messagingSenderId: "33960436390"
  }).database().ref();

export default {
  name: 'App',
  components: {
    Card,
  },
  data: () => ({
          friends: [
          ],
        }),
  methods:{
    updateDatabase(){
      this.friends[0].ref.update({
        value:this.friends[0].value,
      })
      this.friends[1].ref.update({
        value:this.friends[1].value,
      })
    },
  },
  mounted() {
    database.once('value', (persons) => {
        persons.forEach((person) => {
          this.friends.push({
            ref: person.ref,
            color: person.child('color').val(),
            imageUrl: person.child('imageUrl').val(),
            name: person.child('name').val(),
            value: person.child('value').val(),
          })
        })
      });
      // this.$watch('friends', function () {
      //   this.friends[0].ref.update({
      //     value: 15,
      //   })
      //   }, {deep:true})
    },

    
}
</script>

<style>

@font-face {
      font-family: 'kieloregular';
      src: url('./assets/fonts/kielo-regular-webfont.woff2') format('woff2'),
          url('./assets/fonts/kielo-regular-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;

      }

</style>
