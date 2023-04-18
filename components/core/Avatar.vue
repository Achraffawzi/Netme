<template>
    <div>
        <img :class="[`w-${size} h-${size}`]" :src="src" :alt="alt || 'Avatar'" loading="lazy">
    </div>
</template>

<script setup lang="ts">
defineProps({
    src: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
    },
    size: {
        type: String as PropType<"sm" | "md" | "lg">,
        default: "md",
    }
})
</script>