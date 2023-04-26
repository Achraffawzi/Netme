<template>
    <div v-if="posts.length === 0" class="mt-10 flex flex-col items-center justify-center">
        <p class="font-bold mb-5">You haven't posted any article yet.</p>
        <Button content="Create a post" />
    </div>
    <div v-else>
        {{ posts }}
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { usePosts } from '~/composables';
import { IUserResponse } from '~/types';
const {getPostsByUser} = usePosts();
const user = JSON.parse(localStorage.getItem('user') as string) as IUserResponse
const posts = ref();
posts.value = await getPostsByUser();
</script>