<template>
    <Container class="flex items-center py-2">
        <NuxtLink to="/">
            <Logo />
        </NuxtLink>
        <div class="flex-1">
            <SearchInput class="ml-4 w-fit" />
        </div>
        <Button content="Create Post" class="text-xs" />
        <Icon name="ic:baseline-notifications" class="text-2xl text-gray-400 mx-3" />
        <div @click="isHovered = !isHovered" class="relative">
            <Avatar :src="user.picture" :size="30" alt="profile" class="cursor-pointer"/>
            <!-- dropdown -->
            <div v-if="isHovered" class="bg-creemy w-48 mt-2 border border-lightestTextColor rounded-md p-3 absolute top-full right-0 text-xs flex flex-col">
                    <div class="flex flex-col pb-3 mb-3 border-b border-b-lightestTextColor pointer-events-none">
                        <span class="cursor-default mb-2">Signed in as</span>
                        <div class="flex items-center">
                            <Avatar :src="user.picture" :size="30" alt="profile" class="cursor-pointer mr-2"/>
                            <span class="truncate">{{ user.username }}</span>
                        </div>
                    </div>
                <NuxtLink to="/profile" class="flex items-center mb-2">
                    <Icon name="ic:baseline-person" class="mr-2 text-xl text-lighterTextColor"/>
                    <span>Profile</span>
                </NuxtLink>
                <div class="flex items-center mb-2  text-alertDarkError">
                    <Icon name="ic:baseline-logout" class="mr-2 text-xl"/>
                    <span class="mt-2 cursor-pointer">Logout</span>
                </div>
            </div>
        </div>
    </Container>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const isHovered = ref<boolean>(false);
const user = JSON.parse(localStorage.getItem('user')!);
</script>