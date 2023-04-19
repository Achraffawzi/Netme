<template>
    <div>
        <img :style="getAvatarSize" :src="src" :alt="alt || 'Avatar'" loading="lazy">
    </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
const {size} = defineProps({
    src: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
    },
    size: {
        type: Number,
    }
})

const getAvatarSize = computed(() => ({
    width: `${size}px`,
    height: `${size}px`,
}))
</script>