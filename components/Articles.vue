<template>
    <div v-if="posts.length === 0" class="mt-10 flex flex-col items-center justify-center">
        <p class="font-bold mb-5">You haven't posted any article yet.</p>
        <Button content="Create a post" />
    </div>
    <div v-else>
        <div v-for="(post) in posts" :key="post._id">
            <ArticleCard :_id="post._id" :is-owned="true"  :title="post.title" :content="post.content" :thumbnail="post.thumbnail" :created-at="post.createdAt" :is-author="true" :username="post.authorId.username" :picture="post.authorId.picture" :reading-span="post.readingSpan" :tags="post.tags" />
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { usePosts } from '~/composables';

const {getPostsByUser} = usePosts();
const posts = ref();
posts.value = await getPostsByUser();
</script>