<template>
    <div class="flex items-center gap-x-2">
        <Tag v-for="(item, index) in tags" :key="index" :content="item" />
    </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
defineProps({
    tags: {
        type: Array as PropType<any>,
        required: true,
    }
})
</script>