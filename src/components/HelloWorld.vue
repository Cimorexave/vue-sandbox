<template>
  <h1>
    {{ msg }}
  </h1>
</template>

<script lang="ts">

export default {
  name: "HelloWorld",
  components: {},
  props: {
    msg: String,
  }
}

</script>

<style scoped lang="scss">

</style>
