<template>
    <Navbar />
    <Container>
        <!-- interests -->
        <Interests :interests="interests" @interest-changed="handleInterestChanged($event)" />
        <!-- posts -->
        <div>
            <div v-if="posts.length > 0">
                <ArticleCard v-for="(post) in posts" :key="post._id" class="inline-block ml-0 mb-3" :_id="post._id" :is-owned="false" :author-id="post.authorId?._id" :title="post.title" :content="post.content" :thumbnail="post.thumbnail" :created-at="post.createdAt" :is-author="true" :username="post.authorId?.username" :picture="post.authorId?.picture" :reading-span="post.readingSpan" :tags="post.tags" />
            </div>
            <div v-else class="text-3xl">no posts for this tag</div>
        </div>
    </Container>
</template>

<script lang="ts" setup>
import {ref, onMounted} from 'vue';
import {usePosts} from '~/composables'
import { IPostResponse } from '~/types';

const {interests} = JSON.parse(localStorage.getItem('user')!);

const selectedInterest = ref<string>(interests[0]);

const handleInterestChanged = async (interest: string) => {
    selectedInterest.value = interest;
    const response = await handleGetPostsByTag([selectedInterest.value])
    posts.value = response;
}


const posts = ref<Awaited<ReturnType<typeof handleGetPostsByTag>>>([]);

const {getPostsByTags} = usePosts();

const handleGetPostsByTag = (tags: string[]): Promise<IPostResponse[]> => {
    return new Promise(async (resolve, reject) => {
        try {
            const posts: Awaited<ReturnType<typeof handleGetPostsByTag>> = await getPostsByTags(tags)
            resolve(posts)
        } catch (error) {
            reject(error)
        }
    })
}

onMounted(async () => {
    const response = await handleGetPostsByTag([selectedInterest.value])
    posts.value = response;
})
</script>