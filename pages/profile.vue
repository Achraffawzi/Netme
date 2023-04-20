<template>
        <Avatar :src="user.picture" :alt="user.username" :size="70" />
        <h2>{{ user.username }}</h2>
        <div class="border-b border-b-gray-400">
            <span :class="['cursor-pointer pb-[2px]', isArticles && 'border-b border-b-slate-800 font-bold']" @click="toggleComponent">Articles</span>
            <span :class="['cursor-pointer ml-5 pb-[2px]', !isArticles && 'border-b border-b-slate-800 font-bold']" @click="toggleComponent">About</span>
        </div>
        <component :is="isArticles ? Articles : About" />
</template>

<script setup lang="ts">
import {ref} from 'vue'
const Articles = resolveComponent('Articles')
const About = resolveComponent('About')
definePageMeta({
    layout: 'profile'
})

const user = ref({
    username: "Alpha",
    email: "achrafawzi2000@gmail.com",
    picture: "https://images.unsplash.com/photo-1681459460158-1cdbff479191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    bio: "lorem sdfkljs dfkljsdl fljsdkl fkljskd fklsjdk fjklsd lfklsd fjkskdfjk sdkfjks dfjk sdjkfjsdf kskdjf sjdif jskld fsd",
    interests: [
        "Cats",
        "Food",
        "Football",
        "Science",
        "Books"
    ]
})
const isArticles = ref(true);
const toggleComponent = () => {
    isArticles.value = !isArticles.value;
}
</script>