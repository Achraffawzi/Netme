<template>
    <div class="flex flex-col justify-start items-center flex-wrap mx-auto max-w-xs w-11/12 pt-5">
        <Alert @on-click="handleClearAlert" v-if="isAlertOpen" :content="alert!.content" :icon-class="alert!.iconClass" :dark="alert!.dark" :light="alert!.light" />

        <ImagePicker name="picture" @input-changed="inputChanged($event)" />

        <FormInput label="Username" type="text" name="username" :value="user.username" @input-changed="inputChanged($event)" />

        <FormInput label="Email" type="email" name="email" :value="user.email" @input-changed="inputChanged($event)" />

        <FormInput label="Password" type="password" name="password" :value="user.password" @input-changed="inputChanged($event)" />

        <TagInput :max="5" :tags="user.interests" label="Interests" placeholder="Enter an interest" @on-tag-added="handleAddInterest($event)" @on-tag-deleted="handleDeleteInterest($event)" />

        <Button @click="handleLogin" content="Sign up" :full="true" class="mt-5" />
        <span class="text-sm self-start">Already have an account? <NuxtLink to="/auth/login" class="font-bold text-darkPurple">Log in</NuxtLink></span>
    </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import {IRegisterPayload} from "~/types"
import {useAlert, useAuth} from '~/composables';
import {validateForm} from "~/utils"

const config = useRuntimeConfig();
const { register } = useAuth();
const {alert, isAlertOpen, setAlert, clearAlert} = useAlert()

watch(isAlertOpen, () => console.log(isAlertOpen))

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

const handleClearAlert = () => {
    clearAlert()
}

const handleLogin = async () => {
    if(!validateForm(user.value, ["username", "email", "password"])) {
        setAlert("Username, Email and Password are required", 'ERROR')

        return;
    }
    try {
        const data = await register(user.value);
        setAlert(data.statusMessage as string, 'INFO')
        setTimeout(async () => await navigateTo(`/auth/verify/${user.value.email}`), 5000)
    } catch (error: any) {
        setAlert(error.response.data.statusMessage as string, 'ERROR')
    }
}
</script>