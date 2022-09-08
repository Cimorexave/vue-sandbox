<template>
    <nav>
      <div class="routes">
        <router-link to="/">Home</router-link> |
        <router-link to="/history">History</router-link>
      </div>
      <img src="@/assets/logo.png" alt="vue logo" id="logo" />
      <img src="@/assets/logo.png" alt="vue logo" id="shadow-logo" />
    </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "NavComponent",
    
})
</script>
<style lang="scss">
$text-clr : #2c3e50;
$green-clr : #42b983;
$bg-gray: #e7e7e7;
@keyframes glowingVueLogo {
  from {} 
  to {
    scale: 1.1;
    opacity: 0;
  }
}
img {
  width: 10%;
  aspect-ratio: auto;
}
#shadow-logo {
  width: 10%;
  position: absolute;
  right: 1em;
  animation: glowingVueLogo infinite alternate 2000ms ease-out;
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
    &:hover {
      opacity: 0.5;
      transition: 500ms;
    }

    &.router-link-exact-active {
      color: $green-clr;
    }
  }
}
</style>