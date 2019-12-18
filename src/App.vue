<template>
  <div id="app">
    <navbar/>
    <div id="view">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  color: #2c3e50;
  overflow: hidden;
}
#view {
  overflow-y: auto;
  height: 100vh;
}
#view > div {
  overflow: inherit;
}
body {
  margin: 0px;
  overflow: hidden;
  background-image: linear-gradient(45deg, #FCFC39, #FF5733)
}
.content {
  flex: 1;
}
</style>
