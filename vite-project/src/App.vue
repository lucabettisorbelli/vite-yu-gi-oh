<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
  components: {
    AppHeader,
    AppMain
  }
}
</script>


<template>
  <div class="conta">
    <span>bau</span>
  </div>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use "../src/partials/variables.scss" as *;

.conta {
  max-width: 1000px;
  margin: 0 auto;

  span {
    color: $color,
  }
}
</style>
