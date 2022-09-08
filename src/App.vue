<template>
  <nav>
    <img src="@/assets/logo.png" alt="vue logo" id="logo">
    <div class="routes">
      <router-link to="/history">History</router-link> |
      <router-link to="/">Home</router-link> 
    </div>
  </nav>
  <router-view/>
</template>

<style lang="scss">
@font-face {
  font-family: SourceCodePro;
  src: url("./assets/SourceCodePro-VariableFont_wght.ttf") format("truetype");
}
$text-clr : #2c3e50;
$green-clr : #42b983;
$bg-gray: #e7e7e7;
html, body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: SourceCodePro ,Avenir, Helvetica, Arial, sans-serif;
  color: $text-clr;
  background-color: $bg-gray;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}
img {
  width: 10%;
  aspect-ratio: 1;
}

nav {
  background-color: white;
  padding: 1em;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: $green-clr;
  box-shadow: 3px 2px 2px;
  border-radius: 0.2em;


  a {
    font-weight: bold;
    color: $text-clr;

    &.router-link-exact-active {
      color: $green-clr;
    }
  }
}
</style>
