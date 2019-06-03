<template>
      <unity 
    src="/Build/Web.json" 
    width="1000" 
    height="600" 
    unityLoader ="/Build/UnityLoader.js"
    ref="myInstance"
    hideFooter="false"
    >
      </unity>
</template>

<script>
  import Unity from 'vue-unity-webgl'
  export default {
  name: "RocketUp",
  data(){
    return{
        gameInstance: null,
        loaded: false,
        progress: 0,
        error: null
    }
  },
  components: {Unity
  },
  methods:{
  },
  mounted(){
    console.log(this.$refs.myInstance)
  }
};
</script>
<style>
  
  .bar {
    height: 10px;
    width: 1000px;
    display: block;
    background-color: grey;
  }
  .fill {
    height: 100%;
    background-color: red;
    display: block;
  }
  .fullscreen {
    display: block;
    height: 100px;
    width: 100px;
    background-color: green;
    text-align: left
    }
</style>
