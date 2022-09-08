<template>
  <div>
    <el-card>
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
    <div class="items"></div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { template } from 'lodash';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {},
  data() {
    return {
      isDialogOpen: false,
      newTaskValue: ""
    }
  },
  methods: {
    handleSubmit() {
      //submit it to data

      //clear the input & exit the dialog
      this.newTaskValue= "";
      this.isDialogOpen = false;
    }
  }
});
</script>

<style lang="scss">
$text-clr : #2c3e50;
$green-clr : #42b983;
$bg-gray: #e7e7e7;

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
