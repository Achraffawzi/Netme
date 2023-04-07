<template>
    <div :class="['bg-red-400', full ? 'w-full': '']">
        <button class="text-white bg-darkPurple py-2 px-3 rounded-md w-full">{{ content }}</button>
    </div>
</template>

<script setup>
defineProps({
    content: {
        type: String,
        required: true
    },
    full: {
        type: Boolean,
        default: false,
    }
})
</script>