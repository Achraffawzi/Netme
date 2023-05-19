<template>
    <div class="flex items-center justify-between">
        <div>
            <NuxtLink :to="`/users/${_id}`" class="flex items-center">
                <Avatar :src="picture" :alt="username" :size="40" />
                <span class="text-sm mx-2 font-bold truncate">{{ username }}</span>
            </NuxtLink>
        </div>
        <div>
            <span class="text-[12px] text-lighterTextColor mr- select-none mr-3">{{ readingSpan }} min read</span>
            <Icon v-if="!isSaved" name="ic:baseline-bookmark-border" class="text-2xl text-lighterTextColor cursor-pointer" @click="isSaved = true" />
            <Icon v-else name="ic:baseline-bookmark" class="text-2xl text-lighterTextColor cursor-pointer" @click="isSaved = false"  />
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

defineProps({
    _id: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
    },
    readingSpan: {
        type: Number,
        requierd: true,
    }
})

const isSaved = ref<boolean>(false)
const toggleSave = () => {
    isSaved.value = !isSaved
}
</script>