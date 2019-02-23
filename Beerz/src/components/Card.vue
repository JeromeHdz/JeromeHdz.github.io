<template id="card-template">
        <div class="column is-3 is-offset-2" >
            <div class="card" v-bind:class="friendsColor"> 
                    <div class="card-content ">
                        <figure class="image is-128x128 has-image-centered is-spaced">
                            <img class="is-rounded is-spaced" v-bind:src="friendsImage">
                        </figure> 
                      <p class="title" v-bind:class="friendsColor">
                        {{friendsName}}
                      </p>
                      <p class="subtitle is-5">
                        doit
                      </p>
                      <p class="subtitle is-1" v-bind:class="friendsColor">
                        {{friendsValue}} <i class="fas fa-beer fas"></i>
                      </p>
                      
                    </div>
                    <footer class="card-footer footer-height">
                      <p class="card-footer-item" @click="add(friendsName)" style="cursor:pointer">
                          <span class="icon">
                            <i class="fas fa-plus fas fa-lg"></i>
                          </span> 
                      </p>
                      
                    </footer>
              </div>
          </div>
    </template>

<script>


    export default {
        name:'Card',
        props: ['friends','friendsName','friendsValue','friendsImage','friendsColor'],
        methods: {
          add: function(friendName){
            if(friendName == "Julie"){
              this.friends[0].value++;
              this.friends[1].value--;
            }else{
              this.friends[1].value++;
              this.friends[0].value--;
            }
            this.$emit('update-database');
          }
        }
    }
</script>