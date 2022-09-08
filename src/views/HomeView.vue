<template>
  <div>
    <el-card>
      <template #header>
      <div class="card-header">
        <span>Your Tasks</span>
        <el-button round class="button" type="success" >
          New
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
.items {
  width: 100%;
  height: max-content;
}
</style>
