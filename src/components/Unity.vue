<template>
  <div class='webgl-content'>
    <a class='fullscreen' @click.prevent='fullscreen'><div>Fullscreen</div></a>
    <div id='unity-container' v-bind:style='{width: width + "px", height: height + "px"}'></div>
    <div class='bar' v-if='loaded == false' v-bind:style='{ width: width + "px"}'>
      <div class='fill' v-bind:style='{ width: progress * 100 + "%"}'></div>
    </div>
  </div>
</template>

<style>
.bar {
  height: 10px;
  width: 60%;
  display: block;
  background-color: grey;
  margin-left: auto !important;
  margin-right: auto !important;
}
.fill {
  height: 100%;
  background-color: green;
  display: block;
}
.fullscreen {
  display: block;
  background-color: blue;
  float: left;
  padding: 10px;
}
.fullscreen div{
  padding: 0;
  color: white;
  display: block;

}
#unity-container {
  margin: 0px;
  margin-left: auto !important;
  margin-right: auto !important;
}
</style>

<script>
import Vue from 'vue'
export default {
  props: [
    'src',
    'module',
    'width',
    'externalProgress',
    'unityLoader',
    'hideFooter'
  ],
  name: 'UnityWebGL',
  data () {
    return {
      gameInstance: null,
      height: 0,
      loaded: false,
      progress: 0,
      error: null,
      leftMargin: 0
    }
  },
  methods: {
    fullscreen () {
      this.gameInstance.SetFullscreen(1)
    },
    message (gameObject, method, param) {
      if (param === null) {
        param = ''
      }
      if (this.gameInstance !== null) {
        this.gameInstance.SendMessage(gameObject, method, param)
      } else {
        console.warn(
          "vue-unity-webgl: you've sent a message to the Unity content, but it wasn\t instantiated yet."
        )
      }
    }
  },
  beforeMount () {
    this.leftMargin = screen.width / 2 - this.width / 2
    this.height = (9 / 16) * this.width
    if (!this.eventBus) {
      this.eventBus = new Vue({
        data: {
          ready: false,
          load: false
        }
      })
    }
    if (
      typeof UnityLoader === 'undefined' &&
      this.unityLoader &&
      !this.eventBus.load
    ) {
      const script = document.createElement('SCRIPT')
      script.setAttribute('src', this.unityLoader)
      script.setAttribute('async', '')
      script.setAttribute('defer', '')
      document.body.appendChild(script)
      this.eventBus.load = true
      script.onload = () => {
        this.eventBus.ready = true
        this.eventBus.$emit('onload')
      }
    } else {
      this.eventBus.ready = true
      this.eventBus.load = true
    }
  },
  mounted () {
    const instantiate = () => {
      if (typeof UnityLoader === 'undefined') {
        let error =
          'The UnityLoader was not defined, please add the script tag ' +
          "to the base html and embed the UnityLoader.js file Unity exported or use 'unityLoader' attribute for path to UnityLoader.js."
        console.error(error)
        this.error = error
        return
      }
      if (this.src === null) {
        let error =
          "Please provice a path to a valid JSON in the 'src' attribute."
        console.error(error)
        this.error = error
        return
      }
      let params = {}
      if (this.externalProgress) {
        params.onProgress = this.UnityProgress
      } else {
        params.onProgress = (gameInstance, progress) => {
          this.loaded = progress === 1
          this.progress = progress
        }
      }
      if (this.module) {
        params.Module = this.module
      }
      this.gameInstance = this.UnityLoader.instantiate(
        'unity-container',
        this.src,
        params
      )
    }
    if (this.eventBus.ready) {
      instantiate()
    } else {
      this.eventBus.$on('onload', () => {
        instantiate()
      })
    }
  }
}
</script>
