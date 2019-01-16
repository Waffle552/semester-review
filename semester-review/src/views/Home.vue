<template>
  <div class="home">
    <div id="aboutMe">
      <h1>About Me</h1>
      <h2>Interests</h2>
      <p>I enjoy techology and programming.</p>
    </div>
    <div class="frames">
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vSCbqDEX0q4JjDipp-472Q-TNSxf36_4wsWCOvMeIhzIN0tZhLq39FcuATCOi-p5iaHyGFJEpZNYIqL/pub?embedded=true"
        height="569"
        width="960"
      ></iframe>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home"
};
</script>
<style>
.frames {
  text-align: center;
}
h1 {
  padding-left: 10px;
}
h2 {
  padding-left: 30px;
}
p {
  padding-left: 50px;
}
</style>
