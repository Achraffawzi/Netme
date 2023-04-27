<template>
    <div class="py-1 px-2  bg-gray-200 rounded-3xl text-xs">
        {{ content }}
    </div>
</template>

<script setup>
defineProps({
    content: {
        type: String,
        required: true
    }
})
</script>