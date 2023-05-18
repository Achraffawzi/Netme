<template>
    <div class="rounded-full">
        <img class="rounded-full object-cover" :style="getAvatarSize" :src="src ?? NoPicPlaceholder" :alt="alt || 'Avatar'" loading="lazy">
    </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import NoPicPlaceholder from '~/assets/images/noPicPlaceholder.jpg';


const {size, src} = defineProps({
    src: {
        type: String,
    },
    alt: {
        type: String,
    },
    size: {
        type: Number,
    }
})

// const setAvatarImage = computed(() => src ?? import.meta.glob('~/assets/images/noPicPlaceholder.jpg'))

const getAvatarSize = computed(() => ({
    width: `${size}px`,
    height: `${size}px`,
}))
</script>