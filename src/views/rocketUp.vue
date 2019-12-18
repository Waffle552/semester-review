<template>
    <unity
    src="./Build/Web.json"
    width="900"
    height="200"
    unityLoader ="./Build/UnityLoader.js"
    ref="myInstance"
    hideFooter="false"
    >
      </unity>
</template>

<script>
import Unity from '@/components/Unity.vue'
export default {
  name: 'RocketUp',
  data () {
    return {
      gameInstance: null,
      loaded: false,
      progress: 0,
      error: null
    }
  },
  components: { Unity },
  methods: {
  },
  mounted () {
    console.log(this.$refs.myInstance)
  }
}
</script>
