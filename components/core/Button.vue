<template>
    <div :class="[full ? 'w-full': 'w-fit']">
        <button :class="['py-2 px-3 rounded-md w-full', outline ? 'text-darkPurple border border-darkPurple bg-transparent' : 'text-white bg-darkPurple']">{{ content }}</button>
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
    },
    outline: {
        type:  Boolean,
        default: false,
    }
})
</script>