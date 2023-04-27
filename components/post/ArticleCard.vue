<template>
    <div>
        
    </div>
</template>

<script setup>
defineProps({
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
    isAuthor: {
        type: Boolean,
        required: true,
    }
})
</script>