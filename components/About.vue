<template>
    <Modal v-if="isEdit">
        <ProfileUpdate @on-close-modal="onCloseModal" />
    </Modal>
    <div class="flex flex-col items-center justify-center w-[700px] max-w-[90vw] mx-auto ">
        <div class="my-5 flex items-center text-darkPurple font-bold ">
            <p class="mr-6">{{ follows[0] }} Followers</p>
            <p>{{ follows[1] }} Following</p>
        </div>

        <p v-if="user.bio" class="text-lightTextColor mb-3 text-center">{{ user.bio }}</p>
        <span class="text-sm font-bold text-lightTextColor">NetMe member since {{ formattedDate }}</span>

        <p class="font-bold mt-5 mb-3">{{ user.username }}'s interests'</p>
        <Tags :tags="user.interests" />

        <Button content="Edit profile" class="text-sm mt-4" @click="openModal" />
    </div>
</template>

<script setup lang="ts">
import {useFollows, useDate} from '~/composables';
import {formatNumber} from '~/utils'

const user = JSON.parse(localStorage.getItem('user') as string)
const { formattedDate } = useDate(user.createdAt, "MMMM YYYY");

const {getFollowsByUser} = useFollows()
const follows = ref();
follows.value = await getFollowsByUser();
follows.value = Object.values(follows.value).map((follow) => {
    return formatNumber(follow as number);
})

const isEdit = ref(false);
const openModal = () => {
    isEdit.value= true;
}
const onCloseModal = () => {
    isEdit.value = false;
}
</script>