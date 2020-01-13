<template>
  <div id="math">
    <div class="side">
    <!-- Menu for images-->
      <!-- Year 1 menu buttons -->
      <button
        v-on:click="dropdown0 = !dropdown0"
        :class="{buttonNotHide: dropdown0}"
        class="math-year-toggle math-menu-style"
      >Year 1 2017-18</button>

      <button
        v-on:click="switch_img('y1_sem1')"
        :class="{buttonNotHide: active === 'y1_sem1'}"
        class="math-toggler math-menu-style"
        v-if="dropdown0"
        >Semester 1</button>
      <button
        v-on:click="switch_img('y1_sem2')"
        class="math-toggler math-menu-style"
        :class="{buttonNotHide: active === 'y1_sem2'}"
        v-if="dropdown0"
        >Semester 2</button>

    <!-- Year 2 menu buttons -->
      <button
        v-on:click="dropdown1 = !dropdown1"
        :class="{buttonNotHide: dropdown1}"
        class="math-year-toggle math-menu-style"
        >Year 2 2018-19</button>

      <button
        v-on:click="switch_img('y2_sem1')"
        class="math-toggler math-menu-style"
        :class="{buttonNotHide: active === 'y2_sem1'}"
        v-if="dropdown1"
        >Semester 1</button>
      <button
        v-on:click="switch_img('y2_sem2')"
        class="math-toggler math-menu-style"
        :class="{buttonNotHide: active === 'y2_sem2'}"
        v-if="dropdown1"
        >Semester 2</button>

    <!-- Year 3 -->
      <button
        v-on:click="dropdown2 = !dropdown2"
        :class="{buttonNotHide: dropdown2}"
        class="math-year-toggle math-menu-style"
        >Year 3 2019-20</button>

        <button
        v-on:click="switch_img('y3_sem1')"
        class="math-toggler math-menu-style"
        :class="{buttonNotHide: active === 'y3_sem1'}"
        v-if="dropdown2"
        >Semester 2</button>
    </div>

    <div class="content">
    <!-- Images -->
      <!-- Year 1 -->
      <div v-if="active === 'y1_sem1'">
        <img class="mathImg" src="@/assets/mathScreenshots/year1/semester1/percent.png" v-on:click="percent = !percent" v-if="percent">
        <img class="mathImg" src="@/assets/mathScreenshots/year1/semester1/number.png" v-on:click="percent = !percent" v-if="!percent">
      </div>
      <div v-show="active === 'y1_sem2'">
        <img class="mathImg" src="@/assets/mathScreenshots/year1/semester2/percent.png" v-on:click="percent = !percent" v-if="percent">
        <img class="mathImg" src="@/assets/mathScreenshots/year1/semester2/number.png" v-on:click="percent = !percent" v-if="!percent">
      </div>

      <!-- Year 2 -->
      <div v-if="active === 'y2_sem1'">
        <img src="@/assets/mathScreenshots/year2/semester1/percent.png" alt="aleks" class="mathImg" v-on:click="percent = !percent" v-if="percent">
        <img src="@/assets/mathScreenshots/year2/semester1/number.png" alt="aleks" class="mathImg" v-on:click="percent = !percent" v-if="!percent">
      </div>
      <div v-if="active === 'y2_sem2'">
        <img src="@/assets/mathScreenshots/year2/semester2/percent.png" alt="aleks" class="mathImg" v-on:click="percent = !percent" v-if="percent">
        <img src="@/assets/mathScreenshots/year2/semester2/number.png" alt="aleks" class="mathImg" v-on:click="percent = !percent" v-if="!percent">
      </div>

      <!-- Year 3 -->
      <div v-if="active === 'y3_sem1'">
        <img src="@/assets/mathScreenshots/year3/semester1/percent.png" alt="aleks" class="mathImg" v-on:click="percent = !percent" v-if="percent">
        <img src="@/assets/mathScreenshots/year3/semester1/number.png" alt="aleks" class="mathImg" v-on:click="percent = !percent" v-if="!percent">
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'math',
  methods: {
    switch_img: function (id) {
      if (this.active === id) {
        this.active = 'none'
      } else {
        this.active = id
      }
      this.percent = true
    }
  },
  data: function () {
    return {
      active: 'y3_sem1',
      // year[year number]_sem[semester number]
      percent: true,
      // year 1
      dropdown0: false,

      // year 2
      dropdown1: false,

      // year 3
      dropdown2: true
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
  height: 100%;
  width: 100vw;
  display: flex;
}
#math .side {
  width: 10%;
  padding-top: 5%;
  display: flex;
  flex-direction: column;
}
#math .content {
  margin-right: 10%;
}
.math-menu-style {
  background: rgba(0,0,0,0);
  border: 0px;
  color: grey;
  text-align: left;
}
.math-year-toggle {
  padding-left: 20px;
}
.math-toggler {
  padding-left: 30px;
}
.math-menu-style:hover {
  color: #9C9999;
}
.math-menu-style.buttonNotHide {
  color: white;
  box-shadow: none;
}
</style>
