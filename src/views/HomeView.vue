<template>
  <div>
    <el-card>
      <template #header>
      <div class="card-header">
        <span>Your Tasks</span>
        <el-button size="large" round id="new-btn" type="success" >
          New
          <el-icon size="medium"><EditPen /></el-icon>
        </el-button>
      </div>
    </template>
    <div class="items"></div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { template } from 'lodash';
import { defineComponent } from 'vue';

import {Edit} from "@element-plus/icons-vue";

export default defineComponent({
  name: 'HomeView',
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
</style>
