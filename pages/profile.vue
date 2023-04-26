<template>
        <Avatar :src="user?.picture" :alt="user?.username" :size="70" />
        <h2 class="font-bold text-3xl mb-8">{{ user?.username }}</h2>
        <div class="border-b border-b-gray-400">
            <span :class="['cursor-pointer pb-[2px]', isArticles && 'border-b border-b-slate-800 font-bold']" @click="toggleComponent">Articles</span>
            <span :class="['cursor-pointer ml-5 pb-[2px]', !isArticles && 'border-b border-b-slate-800 font-bold']" @click="toggleComponent">About</span>
        </div>
        <component :is="isArticles ? Articles : About" />
</template>

<script setup>
import {ref, onMounted } from 'vue'
import {storeToRefs} from 'pinia'
import {useUser} from '~/composables'
import { useUserStore } from "~/store/user";
// const {userStore} = useUser()
const user = ref(null);
onMounted(() => {
    user.value = JSON.parse(localStorage.getItem('user'));
})
// const {user} = storeToRefs(userStore);
const Articles = resolveComponent('Articles')
const About = resolveComponent('About')
definePageMeta({
    layout: 'profile'
})

// asyncData({ $pinia }) {
//     const store = useUserStore($pinia)
//     console.log(store);
// }


const isArticles = ref(true);
const toggleComponent = () => {
    isArticles.value = !isArticles.value;
}
</script>