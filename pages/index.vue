<template>
    <Navbar />
    <h3>{{ user.username }}</h3>
        <h3>{{ user.email }}</h3>
</template>

<script setup>
import {useUser} from '~/composables/useUser';
const {user} = useUser();

console.log(user)
</script>