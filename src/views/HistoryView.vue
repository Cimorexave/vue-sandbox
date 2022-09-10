<template>
  <div class="layout">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>This is the list of all your tasks</span>
        </div>
      </template>
      <div v-for="task in tasks" :key="task.id" class="task-component">
        <TaskComponent :task="task" />
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskComponent from '@/components/TaskComponent.vue';

  export default defineComponent({
    name: "HistoryView",
    mounted() {
        this.tasks = this.$store.state.tasks;
    },
    data() {
        return {
            tasks: this.$store.getters.getStateFromStore,
        };
    },
    components: { TaskComponent }
});
</script>

<style lang="scss">

</style>
