<template>
    <div class="flex items-center justify-between">
        <div class="flex flex-col">
            <div class="flex items-center">
                <Avatar :src="picture" :size="30" />
                <span class="text-xs ml-3">{{ username }}</span>
            </div>
            <p class="font-bold truncate">{{ title }}</p>
        </div>
        <div class="w-[70px] h-[70px]">
            <img :src="thumbnail" :alt="title" class="w-full h-full rounded-md" />
        </div>
    </div>
</template>

<script setup lang="ts">
import {cutString} from '~/utils'

defineProps({
    _id: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
})
</script>