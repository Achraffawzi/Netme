<template>
    <div class="flex items-center gap-x-2">
        <Tag v-for="(item, index) in tags" :key="index" :content="item" />
    </div>
</template>

<script setup lang="ts">
defineProps({
    tags: {
        type: Array,
        required: true,
    }
})
</script>