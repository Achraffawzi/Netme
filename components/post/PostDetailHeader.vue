<template>
    <div class="flex items-center justify-between">
        <div>
            <NuxtLink :to="`/users/${_id}`" class="flex items-center">
                <Avatar :src="picture" :alt="username" :size="40" />
                <span class="text-sm mx-2 font-bold truncate">{{ username }}</span>
            </NuxtLink>
        </div>
        <div>
            <span class="text-[12px] text-lighterTextColor mr-4">{{ readingSpan }} min read</span>
            <Icon name="ic:baseline-bookmark-border" class="text-2xl text-lighterTextColor cursor-pointer" />
        </div>
    </div>
</template>

<script setup lang="ts">
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
</script>