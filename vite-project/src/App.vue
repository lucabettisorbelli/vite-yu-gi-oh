<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

import { store } from './data/store.js'

export default {
  name: App,
  components: {
    AppHeader,
    AppMain
  },
  data() {
    store
  }

}

axios.get(this.store.urlApi).then(r => {
  this.store.personaggi = r.data.results;
</script>


<template>
  <h1>ciao</h1>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss" scoped></style>
