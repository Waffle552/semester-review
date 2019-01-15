<template>
  <div id="math">
    <button
      v-on:click="year1 = !year1"
      :class="{buttonNotHide: year1}"
      class="sectionToggle"
    >Semester 1 2017-18</button>
    <div v-show="year1">
      <img class="mathImg" src="@/assets/ALEKS1.png">
      <img class="mathImg" src="@/assets/ALEKS2.png">
    </div>
    <button
      v-on:click="year2 = !year2"
      class="sectionToggle"
      :class="{buttonNotHide: year2}"
    >Semester 2 2017-18</button>
    <div v-show="year2">
      <img class="mathImg" src="@/assets/ALEKS4.png">
      <img class="mathImg" src="@/assets/ALEKS5.png">
    </div>
    <button
      v-on:click="year3 = !year3"
      class="sectionToggle"
      :class="{buttonNotHide: year3}"
    >Semester 1 2018-19</button>
    <div v-show="year3"></div>
  </div>
</template>
<script>
export default {
  name: 'math',
  methods: {},
  data: function () {
    return {
      // tells the function whether or not it is hidden
      year1: false,
      year2: false,
      year3: false
    }
  }
}
</script>

<style>
.mathImg {
  text-align: center;
  width: 100%;
  display: inline-block;
}
#math {
  padding: 0;
  margin-bottom:100px;
}
</style>
