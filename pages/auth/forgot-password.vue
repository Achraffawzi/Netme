<template>
    <div>
        <Alert  @on-click="handleCloseAlert" v-if="isAlertOpen" :content="alert!.content" :icon-class="alert!.iconClass" :dark="alert!.dark" :light="alert!.light" />
        <FormInput label="Email" type="email" :value="email" name="email" @input-changed="handleEmailChanged($event)" class="mb-3" />
        <Button content="Submit" @click="handleSubmit" :full="true" />
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { IInputChangePayload } from '~/types'
import {useAuth, useAlert} from '~/composables'

definePageMeta({
    layout: 'auth'
})

const {forgotPassword} = useAuth();
const {alert, setAlert, isAlertOpen, clearAlert } = useAlert()

const email = ref<string>('')

const handleEmailChanged = (payload: IInputChangePayload) => {
    email.value = payload.value;
}

const handleSubmit = async () => {
    try {
        if(!email.value) {
            console.log("no email")
            setAlert('Email is required', 'ERROR')
            return
        }
        const data = await forgotPassword(email.value);
        setAlert(data.statusMessage as string, 'INFO')
    } catch (error: any) {
        setAlert(error?.response.data.statusMessage, 'ERROR')
    }
}

const handleCloseAlert = () => clearAlert()
</script>
