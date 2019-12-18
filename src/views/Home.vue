<template>
  <div id="home">
    <div class='page_body'>
      <h1>Semester Review</h1>
    </div>
    <div class='page_footer'>
      <a href="https://unity.com" target="_blank"><font-awesome-icon style="margin: 0px 5px;" :icon="icons.unity" :size="iconSize"/></a>
      <a href="https://vuejs.org/" target="_blank"><font-awesome-icon style="margin: 0px 5px;" :icon="icons.vue" :size="iconSize"/></a>
      <a href="https://www.digitalocean.com/" target="_blank"><font-awesome-icon style="margin: 0px 5px;" :icon="icons.digitalOcean" :size="iconSize"/></a>
      <a href="https://bitbucket.org/Waffle552" target="_blank"><font-awesome-icon style="margin: 0px 5px;" :icon="icons.bitbucket" :size="iconSize"/></a>
      <a href="https://github.com/Waffle552/" target="_blank"><font-awesome-icon style="margin: 0px 5px;" :icon="icons.github" :size="iconSize"/></a>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUnity, faGithub, faBitbucket, faVuejs, faDigitalOcean } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'Home',

  data () {
    return {
      iconSize: '2x',
      icons: {
        unity: faUnity,
        github: faGithub,
        bitbucket: faBitbucket,
        vue: faVuejs,
        digitalOcean: faDigitalOcean
      }
    }
  },

  components: {
    FontAwesomeIcon
  }
}
</script>
<style>
#home {
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
}
#home .page_footer {
  height: 1in;
  margin-bottom: 30px;
  padding-left: 1cm;
  display: flex;
  align-items: center;
  background: rgba(40,40,40,.25);
}
#home .page_body {
  flex: 1;
  display: flex;
  align-items: center;
  width: 100vw;
}
#home .page_body h1 {
  margin: auto;
  font-size: 15vw
}
#home .page_footer a {
  color: rgb(60,60,60);
}
#home .page_footer a:hover{
  color: grey;
}
</style>
