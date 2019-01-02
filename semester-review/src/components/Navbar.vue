<template>
  <div id="nav">
    <ul>
      <li>
        <router-link to="/home">
          <img src="@/assets/logo.png" alt="logo">
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <button class="navButton">Home</button>
        </router-link>
      </li>
      <li>
        <router-link to="/vaults">
          <button class="navButton">Vaults</button>
        </router-link>
      </li>
      <li>
        <router-link to="/rules">
          <button class="navButton">Rules</button>
        </router-link>
      </li>
       <li>
        <!-- On click, this button will make chat application slide out-->
        <button class="navButton" onclick="toggleChat">Chat</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Navbar"
};
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
  color: #029902;
  width: 150px;
  height: 50px;
  margin: 3px;
  font-size: 105%;
  cursor: pointer;
}
.navButton:hover {
  background-color: #303030;
}
img {
  height: 50px;
  float: left;
  margin-left: 10px;
}
</style>
