<template>
    <div class="flex flex-col justify-start items-center flex-wrap mx-auto max-w-xs w-11/12 pt-5">
        <ImagePicker name="picture" @input-changed="inputChanged($event)" />

        <FormInput label="Username" type="text" name="username" :value="user.username" @input-changed="inputChanged($event)" />

        <FormInput label="Email" type="email" name="email" :value="user.email" @input-changed="inputChanged($event)" />

        <FormInput label="Password" type="password" name="password" :value="user.password" @input-changed="inputChanged($event)" />

        <TagInput :max="5" :tags="user.interests" label="Interests" placeholder="Enter an interest" @on-tag-added="handleAddInterest($event)" @on-tag-deleted="handleDeleteInterest($event)" />
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {IRegisterPayload} from "~/types"

definePageMeta({
    layout: "auth",
})

const user = ref<IRegisterPayload>({
    picture: '',
    username: '',
    email: '',
    password: '',
    interests: [],
});

const handleAddInterest = (payload: string): void => {
    user.value.interests = [...user.value.interests, payload];
}

const handleDeleteInterest = (payload: string[]): void => {
    user.value.interests = [...payload];
}

const inputChanged = (payload: {name: string, value: string}): void => {
    user.value = {...user.value, [payload.name]: payload.value};
}
</script>