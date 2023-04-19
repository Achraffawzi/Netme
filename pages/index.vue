<template>
    <Navbar />
    <Avatar src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg" :size="50" alt="tailwind logo" />
</template>

<script setup>
import {useUser} from '~/composables/useUser';
const {userStore} = useUser();
</script>