<template>
    <div>
        <Alert @on-click="handleClearAlert" v-if="isAlertOpen" :content="alert!.content" :icon-class="alert!.iconClass" :dark="alert!.dark" :light="alert!.light" />

        <FormInput label="Email" :value="loginData?.email" type="email" name="email" @input-changed="handleInputChanged($event)" />
        <FormInput label="Password" :value="loginData?.password" type="password" name="password" @input-changed="handleInputChanged($event)" />
        <Button content="Log in" :full="true" class="mt-3" @click="handleLogin" />
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { IInputChangePayload, ILoginPayload } from '~/types';
import {useAuth, useAlert} from '~/composables'
definePageMeta({
    layout: 'auth'
})

const {login} = useAuth();
const { alert, setAlert, isAlertOpen, clearAlert } = useAlert();
const loginData = ref<any>({
    email: '',
    password: '',
});

const handleInputChanged = (payload: IInputChangePayload) => {
    const {name, value} = payload;
    loginData.value = { ...loginData.value, [name]: value };
}

const handleLogin = async () => {
    if(!loginData.value.email || !loginData.value.password) {
        setAlert('Email and password are required', 'ERROR')
        return;
    }
    try {
        const isSuccess = await login(loginData.value);
        if(isSuccess) {
            await navigateTo('/');
        }
    } catch (error: any) {
        setAlert(error?.response.data.statusMessage, 'ERROR')
    }
}

const handleClearAlert = () => {
    clearAlert()
}
</script>