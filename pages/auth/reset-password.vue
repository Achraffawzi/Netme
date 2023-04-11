<template>
    <div>
        <Alert @on-click="handleCloseAlert" v-if="isAlertOpen" :content="alert!.content" :icon-class="alert!.iconClass" :dark="alert!.dark" :light="alert!.light" />
        <FormInput type="password" label="New Password" name="new password" :value="newPassword" />
        <FormInput type="password" label="Confirm new Password" name="new password confirm" :value="newPasswordConfirm" class="mb-3"/>
        <Button content="Reset" :full="true" @click="andleResetPassword" />
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { useAuth, useAlert } from '~/composables';
definePageMeta({
    layout: 'auth'
})

const { alert, setAlert, isAlertOpen, clearAlert } = useAlert()
const newPassword = ref<string>('')
const newPasswordConfirm = ref<string>('')

const andleResetPassword = () => {
    if(!newPassword.value || !newPasswordConfirm.value) {
        setAlert('Both passwords are required', 'ERROR');
        return;
    }

    if(newPassword.value !== newPasswordConfirm.value) {
        setAlert('Passwords don\'t match', 'ERROR');
        return;
    }
}

const handleCloseAlert =() => {
    clearAlert()
}
</script>