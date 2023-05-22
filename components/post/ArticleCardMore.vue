<template>
    <nuxt-link :to="`/posts/${_id}`">
        <div class="p-2 border border-lightestTextColor bg-white rounded-md flex items-center">
            <div class=" w-fit">
                <h2 class="text-xl font-bold mb-2">{{ title }}</h2>
                <p class="text-[10px]">{{ cutString(content) }}...</p>
            </div>
            <div>
                <img :src="picture" :alt="title" class="w-24 h-24 rounded-lg object-cover" />
            </div>
        </div>
    </nuxt-link>
</template>

<script setup lang="ts">
import { cutString } from '~/utils'

defineProps({
    _id: {
        type: String,
        required: true,
    },
    picture: {
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
})
</script>