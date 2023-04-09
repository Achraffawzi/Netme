<template>
    <div class="flex flex-col justify-start items-center flex-wrap mx-auto max-w-xs w-11/12 pt-5">
        <Alert v-on:on-click="handleCloseAlert"  v-if="isAlertOpen" :content="alert!.content" :icon-class="alert!.iconClass" :dark="alert!.dark" :light="alert!.light" />

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
import {ref} from 'vue'
import {IRegisterPayload} from "~/types"
import {useAlert, useAuth} from '~/composables';
import {validateForm} from "~/utils"

const config = useRuntimeConfig();
const { register } = useAuth();
const {alert, isAlertOpen, setAlert} = useAlert()

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

const handleLogin = async () => {
    if(!validateForm(user.value, ["username", "email", "password"])) {
        setAlert({
            content: "Username, Email and Password are required",
            iconClass: config.public.ICONS.ERROR,
            dark: config.public.COLORS.ALERT_DARK_ERROR,
            light: config.public.COLORS.ALERT_LIGHT_ERROR,
        })

        return;
    }
    try {
        const data = await register(user.value);
        setAlert({
            content: data.statusMessage as string,
            iconClass: config.public.ICONS.INFO,
            dark: config.public.COLORS.ALERT_DARK_INFO,
            light: config.public.COLORS.ALERT_LIGHT_INFO,
        })
    } catch (error: any) {
        setAlert({
            content: error.response.data.statusMessage as string,
            iconClass: config.public.ICONS.ERROR,
            dark: config.public.COLORS.ALERT_DARK_ERROR,
            light: config.public.COLORS.ALERT_LIGHT_ERROR,
        })
    }
}

const handleCloseAlert = (): void => {
    setAlert(null);
}
</script>