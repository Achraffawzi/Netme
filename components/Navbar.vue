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
        <Avatar :src="user.picture" :size="30" alt="profile" />
    </Container>
</template>

<script setup lang="ts">
const user = JSON.parse(localStorage.getItem('user')!);
</script>