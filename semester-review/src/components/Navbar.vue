<template>
  <div id="nav">
    <ul>
      <li>
        <router-link to="/">
          <img src="@/assets/logo.png" alt="logo">
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <button class="navButton">Home</button>
        </router-link>
      </li>
      <li>
        <router-link to="/math">
          <button class="navButton">Math</button>
        </router-link>
      </li>
      <li>
        <router-link to="/ela">
          <button class="navButton">ELA</button>
        </router-link>
      </li>
      <li>
        <router-link to="/science">
          <button class="navButton">Science</button>
        </router-link>
      </li>
      <li>
        <router-link to="/ss">
          <button class="navButton">SS</button>
        </router-link>
      </li>
      <li>
        <router-link to="/dev">
          <button class="navButton">Dev</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Navbar'
}
</script>
<style>
li {
  list-style: none;
  display: inline;
}
ul {
  padding: 0%;
  margin: 0%;
}
#nav {
  margin: 0%;
  padding: 0%;
  background-color: #1a1a1a;
  text-align: right;
}
.navButton {
  background-color: #262626;
  border: 0px;
  color: #ffd700;
  width: 150px;
  height: 50px;
  margin: 3px;
  font-size: 105%;
  cursor: pointer;
}
.navButton:hover {
  background-color: #303030;
}
a > img {
  height: 50px;
  float: left;
  margin-left: 10px;
  margin-top: 3px;
}
</style>
