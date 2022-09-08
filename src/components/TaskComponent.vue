<template>
    <div class="task-item" v-if="task !== undefined ">
        <div class="is-done-bar" v-if="task.isDone"></div>
        {{ task.description }}
        <el-button class="done-btn" circle type="success"
        @click=" task.isDone = !task.isDone " v-if="task !== undefined ">
            <el-icon><Check  /></el-icon>
        </el-button>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from "vue";
    
    export default defineComponent({
        name: "TaskComponent",
        props: {
            task: Object,
        }
    })
</script>

<style lang="scss">
    $text-clr : #2c3e50;
    $green-clr : #42b983;
    $bg-gray: #e7e7e7;

    .task-item {
        display: flex;
        position: relative;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 1em;
        min-height: 3em;
        border-bottom:  1px solid darkseagreen;
    }
    .is-done-bar {
        position: absolute;
        left: 0;
        height: 100%;
        width: 5px;
        background-color: $green-clr;
    }
</style>