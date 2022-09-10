<template>
  <div class="layout">
    <el-card class="card">
      <template #header>
      <div class="card-header">
        <span>Your Tasks</span>
        <el-button size="large" round 
        id="new-btn" type="success"
        @click="isDialogOpen = true" >
          New
          <el-icon size="medium"><EditPen /></el-icon>
        </el-button>
        <el-dialog
        id="dialog"
        v-model=" isDialogOpen "
        title="New Task"
        width=" 85% "
        >
          <div class="form">
            <el-input
            id="input"
            v-model="newTaskValue"
            placeholder="Write..."
            />
            <el-button
            type="success" @click="handleSubmit">Sumbit</el-button>
          </div>
        </el-dialog>
      </div>
    </template>
    <div v-if="tasks.length < 2">You have no tasks</div>
    <div v-else v-for=" task in tasks" :key="task.id" class="items">
      <Task @delete-task=" deleteTask " @check-done="checkTaskDone" :task="task" />
    </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { template } from 'lodash';
import { defineComponent } from 'vue';
import { ElMessage } from 'element-plus';

import Task from "../components/TaskComponent.vue";
import TaskInterface from '@/types/task.interface';

export default defineComponent({
  name: 'HomeView',
  components: {
    Task,
  },
  data() {
    return {
      isDialogOpen: false,
      newTaskValue: "",
      tasks: [{id: 0, description: "", isDone: false}]
    }
  },
  methods: {
    handleSubmit() {
      //submit it to data
      this.tasks.push({
        id: this.tasks.length +1,
        description: this.newTaskValue,
        isDone: false,
      })
      //submit the new task to store
      this.$store.commit('addTask', {
        id: this.tasks.length +1,
        description: this.newTaskValue,
        isDone: false,
      })

      //notifying the user that the task was added
      ElMessage({
        message: "Task Added.",
        type: "success"
      })

      //clear the input & exit the dialog
      this.newTaskValue= "";
      this.isDialogOpen = false;
    },
    checkTaskDone(id: number) {

      this.tasks.filter(task => task.id === id)[0].isDone = 
      !this.tasks.filter(task => task.id === id)[0].isDone ;
    },
    deleteTask(id: number) {

      //remove the task in store 
      this.$store.commit('removeTask', id)

      this.tasks = this.tasks.filter(task => task.id !== id);
    }
  }
});
</script>

<style lang="scss">
$text-clr : #2c3e50;
$green-clr : #42b983;
$bg-gray: #e7e7e7;

@media screen and (min-width: 1024px) {
  #dialog {
    width: 30%;
  }
  
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}
span {
  display: flex;
  flex-direction: row;
  gap: 0.8em;
  align-items: center;
  justify-content: space-between;
}
#new-btn {
  font-weight: bold;
}
.items {
  width: 100%;
  height: max-content;
}
.form {
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  align-items: center;
  &.button {
    height: auto;
  }
}
#input {
  padding: 1em;
}
</style>
