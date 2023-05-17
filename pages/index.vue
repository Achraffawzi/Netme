<template>
    <Navbar />
    <Container>
        <!-- interests -->
        <Interests :interests="interests" @interest-changed="handleInterestChanged($event)" />
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
    const postsresponse = await handleGetPostsByTag(selectedInterest.value)
    posts.value = postsresponse;
    console.log(posts.value);
}


const posts = ref<Awaited<ReturnType<typeof handleGetPostsByTag>>>();

const {getPostsByTag} = usePosts();

const handleGetPostsByTag = (tag: string): Promise<IPostResponse[]> => {
    return new Promise(async (resolve, reject) => {
        try {
            const posts: Awaited<ReturnType<typeof handleGetPostsByTag>> = await getPostsByTag(tag)
            resolve(posts)
        } catch (error) {
            reject(error)
        }
    })
}

onMounted(async () => {
    console.log("onMounted ran!")
    const postsresponse = await handleGetPostsByTag(selectedInterest.value)
    posts.value = postsresponse;
    console.log(posts.value)
})
</script>