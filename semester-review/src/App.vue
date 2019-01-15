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
.sectionToggle {
  /* this is the default closed css properties for our hidding function*/
  width: 100%;
  font-size: 200%;
  background-color: rgb(114, 114, 114);
  border: 0px;
  color: rgb(180, 180, 180);
  border-bottom: 2px solid black;
  display: inline-block;
  overflow: inherit;
  text-align: center
}
.buttonNotHide {
  background-color: rgb(139, 139, 139);
  box-shadow: 10px 10px 5px grey;
}
</style>
