<template>
    <div class="flex flex-col items-center justify-center w-[700px] max-w-[90vw] mx-auto ">
        <div class="my-5 flex items-center text-darkPurple font-bold ">
            <p class="mr-6">{{ follows[0] }} Followers</p>
            <p>{{ follows[1] }} Following</p>
        </div>

        <p v-if="user.bio" class="text-lightTextColor mb-3 text-center">{{ user.bio }}</p>
        <span class="text-sm font-bold text-lightTextColor">NetMe member since {{ user.createdAt }}</span>

        <p class="font-bold mt-5 mb-3">{{ user.username }}'s interests'</p>
        <div class="flex items-center gap-x-2">
            <Tag v-for="(interest, index) in user.interests" :key="index" :content="interest" />
        </div>

        <Button content="Edit profile" class="text-sm mt-4" />
    </div>
</template>

<script setup lang="ts">
import {useFollows} from '~/composables';
import {formatNumber} from '~/utils'

const {getFollowsByUser} = useFollows()
const follows = ref();
const user = JSON.parse(localStorage.getItem('user') as string)

follows.value = await getFollowsByUser();



follows.value = Object.values(follows.value).map((follow) => {
    return formatNumber(follow as number);
})

console.log(follows.value)
</script>