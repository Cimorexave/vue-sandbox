<template>
  <NavComponent  />
  <router-view class="routes"/>
</template>
<script lang="ts">
  import NavComponent from './layout/NavComponent.vue';
  export default {
    name: "App",
    components: {
      NavComponent,
    }
  }
</script>
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
}

.routes {
  padding: 1em;
}
</style>
