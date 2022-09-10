<template>
  <div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

  export default defineComponent({
    name: "HistoryView",
    mounted ()  {
      this.tasks = this.$store.state.tasks;
    },
    data () {
      return {
        tasks: this.$store.getters.getStateFromStore,
      }
    },

  });
</script>
