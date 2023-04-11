<template>
    <div>
        <Alert @on-click="handleCloseAlert" v-if="isAlertOpen" :content="alert!.content" :icon-class="alert!.iconClass" :dark="alert!.dark" :light="alert!.light" />
        <FormInput type="password" label="New Password" name="new password" :value="newPassword"  @input-changed="handleInputChanged($event)" />
        <FormInput type="password" label="Confirm new Password" name="new password confirm" :value="newPasswordConfirm" class="mb-3" @input-changed="handleInputChanged($event)" />
        <Button content="Reset" :full="true" @click="andleResetPassword" />
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { useAuth, useAlert } from '~/composables';
import { IInputChangePayload } from '~/types';
definePageMeta({
    layout: 'auth'
})
const {resetPassword} = useAuth();
const { alert, setAlert, isAlertOpen, clearAlert } = useAlert()
const newPassword = ref<string>('')
const newPasswordConfirm = ref<string>('')

const handleInputChanged = (payload: IInputChangePayload) => {
    if(payload.name === "new password") {
        newPassword.value = payload.value;
        return;
    }
    newPasswordConfirm.value = payload.value;
}

const andleResetPassword = async () => {
    if(!newPassword.value || !newPasswordConfirm.value) {
        setAlert('Both passwords are required', 'ERROR');
        return;
    }

    if(newPassword.value !== newPasswordConfirm.value) {
        setAlert('Passwords don\'t match', 'ERROR');
        return;
    }

    const data = await resetPassword(newPassword.value, newPasswordConfirm.value, useRoute().query._id as string);
    setAlert(data.statusMessage as string, 'SUCCESS');
    setTimeout(async () => {await navigateTo('/')}, 5000);
}

const handleCloseAlert =() => {
    clearAlert()
}
</script>