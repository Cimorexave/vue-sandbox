<template>
  <div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/history">History</router-link>
  </nav>
    <router-view  />
  </div>
</template>

<style lang="scss">


@font-face {
    font-family: SourceCodePro;
    src: url('./assets/SourceCodePro-VariableFont_wght.ttf') format('truetype');
  }
#app {
  font-family: SourceCodePro, Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

nav {
  padding: 2em;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
