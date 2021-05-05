<template>
  <v-app>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  mounted: () => {
    axios.get('http://localhost:9000/api')
        .then (response => {
          console.log('response : ' + response.data);
        })
  },

  data: () => ({
    //
  }),
}
</script>
