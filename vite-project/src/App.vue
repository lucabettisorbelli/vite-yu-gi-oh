<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

import { store } from './data/store.js'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getApi() {
      axios.get(this.store.urlApi).then(r => {
        this.store.personaggi = r.data.results;
        console.log(this.store.personaggi)
      })
    }
  },
  mounted() {
    this.getApi()
  }
}




</script>


<template>
  <AppHeader />
  <AppMain />

  {{ store.personaggi }}
</template>

<style lang="scss" scoped></style>
