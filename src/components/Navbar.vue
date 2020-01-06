<template>
  <div class="mainNav">
    <router-link class="menuItem" exact to="/"><p>Home</p></router-link>
    <router-link class="menuItem" to="/smartgoals"><p>Smart Goals</p></router-link>
    <router-link class="menuItem" to="/math"><p>Math</p></router-link>
    <router-link class="menuItem" to="/ela"><p>ELA</p></router-link>
    <router-link class="menuItem" to="/ss"><p>Social Studies</p></router-link>
    <router-link class="menuItem" to="/science"><p>Science</p></router-link>
    <div class="filler"></div>
    <a href="https://www.denmark.k12.wi.us/schools/dcs/" class="menuImg">
      <img class="navLogo-desktop" src="../assets/logo.png">
      <img class="navLogo-mobile" src="../assets/logo.png">
    </a>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      current: ['about_us']
    }
  },
  mounted () {
    this.current = [this.$router.history.current.name]
  },
  methods: {
    log: function (log) {
      window.console.log(log)
    }
  }
}
</script>

<style>
  .mainNav {
  height: auto;
  display: flex;
  line-height: normal;
  align-items: center;
  width: 100vw;
  line-height: 10px;
}
.navLogo-desktop {
  height: 35px;
}
.navLogo-mobile {
  width: 50px;
  display: none;
}
.mainNav .menuImg {
  background: rgb(50, 50, 50);
  margin-left: auto;
  padding-right: 10px;
  height: 35px;
  align-items: center;
  display: flex;
  font-size: 100%;
}
.mainNav .filler {
  background: rgb(50, 50, 50);
  flex: 1;
  height: 35px;
  color: rgba(0,0,0,0)
}
.mainNav .menuItem {
  background: rgb(50, 50, 50);
  height: 35px;
  align-content: center;
  display: flex;
  padding: 0px 10px;
}
.mainNav .menuItem > p {
  color: lightgrey;
  margin: auto;
  padding: 0px;
  text-decoration: none;

}
.mainNav .menuItem > * {
  display: inline-block;
}
.mainNav .router-link-active{
  background-color: rgba(0,0,0,0);
  color: white;
  text-decoration: none;
}
.mainNav .router-link-active > p{
  color: white;
  text-decoration: none;
}
.mainNav .menuItem:hover > * {
  color: white;
}

@media only screen and (max-width: 600px) {
.mainNav {

}
.navLogo-desktop {
  display: none;
}
.navLogo-mobile {
  width: 50px;
  display: flex;
}
.mainNav .filler {
  height: 50px;
  display: none;
}
.mainNav .menuItem {
  height: 50px;
  display: flex;
  flex: 1 1 0;
}
.mainNav .menuItem p {
  font-size: 70%;
}
.mainNav .menuImg {
  height: 50px;
  padding: 0px;
}
mainNav .router-link-active{
  background-color: rgba(0,0,0,0);
  color: white;
  text-decoration: none;
}
.mainNav .router-link-active > p{
  color: white;
  text-decoration: none;
}
.mainNav .menuItem:hover > * {
  color: white;
}
}

</style>
