<template>
    <div class="task-item" v-if="task !== undefined ">
        <div class="is-done-bar" v-if="task.isDone">!</div>
        {{ task.description }}
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
    .task-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 1em;
        height: 3em;
        border-bottom:  1px solid darkseagreen;
    }
</style>