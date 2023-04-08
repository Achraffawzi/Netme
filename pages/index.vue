<template>
    <div class="bg-red-800">
        <h1 class="text-9xl text-white" @click="change">test</h1>
    </div>
</template>

<script setup>
import {useUser} from '~/composables/useUser';
const {userStore} = useUser();

const change = () => {
    userStore.setUser({email: "aaa@aaa.com"});
    console.log(userStore.user);
}
</script>