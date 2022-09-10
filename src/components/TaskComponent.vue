<template>
    <div class="task-item" v-if=" task.description !== '' " >
        <div class="is-done-bar" v-if="task.isDone"></div>
        {{ task.description }}
        <div class="actions">
            <el-button class="done-btn" circle type="success"
            @click="$emit('check-done', task.id)" >
                <el-icon><Check  /></el-icon>
            </el-button>
            <el-button class="delete-btn" circle type="danger"
            @click="$emit('delete-task', task.id)" >
                <el-icon><Close /></el-icon>
            </el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent, PropType} from "vue";
    import TaskInterface from "@/types/task.interface";
    
    export default defineComponent({
        name: "TaskComponent",
        props: {
            task: {
                type: Object as PropType<TaskInterface>,
                required: true,
            }
        }
    })
</script>

<style lang="scss">
    $text-clr : #2c3e50;
    $green-clr : #42b983;
    $bg-gray: #e7e7e7;

    .task-item {
        display: flex;
        gap: 0.5em;
        position: relative;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0.5em 1em;
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
    .actions {
        display: flex;
        gap: 3px;
    }
</style>