<template>
    <div class="w-[700px] max-w-[90vw] mx-auto rounded-md py-2 px-3 my-8 bg-white border border-slate-100">
        <div class="flex items-center mb-3">
            <NuxtLink :to="`/users/${authorId}`" class="flex items-center">
                <Avatar :src="picture" :alt="username" :size="30" />
                <span class="text-sm mx-2">{{ username }}</span>
            </NuxtLink>
            <span class="text-[10px] text-lightTextColor">{{ formattedDate }}</span>
        </div>
        <NuxtLink :to="`/posts/${_id}`">
            <div class="flex items-center">
                <div class="w-[604px]">
                    <h3 class="font-bold text-2xl my-2">{{ title }}</h3>
                    <p class="text-lightTextColor text-sm">{{ cutString(content) }}...</p>
                </div>
                <img :src="thumbnail" :alt="title" class="w-24 h-24 rounded-lg object-fill">
            </div>
        </NuxtLink>
        
        <div class="flex items-center mt-3">
            <Tags :tags="tags" />
            <span class="text-xs text-lightTextColor mx-2">{{ readingSpan }} mins read</span>

            <span v-if="isOwned === false" class="text-xs text-lightTextColor flex-1">Selected for you</span>
            <Icon v-if="isOwned === false" name="ic:baseline-bookmark-border" class="text-2xl text-lighterTextColor cursor-pointer" />
        </div>
    </div>
</template>

<script setup>
import {useDate} from '~/composables'
import {cutString} from '~/utils'

const {createdAt} = defineProps({
    _id: {
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
    thumbnail: String,
    createdAt: {
        type: Date,
        required: true,
    },
    authorId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
    readingSpan: {
        type: Number,
        required: true,
    },
    tags: {
        type: Array,
    },
    isOwned: {
        type: Boolean,
        default: false,
    }
})

const {formattedDate} = useDate(createdAt, "LL");
</script>