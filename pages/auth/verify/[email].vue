<template>
    <div>
        <Container class="text-center flex flex-col items-center">
            <Alert v-if="isAlertOpen" class="mt-10" :content="alert!.content" :dark="alert!.dark" :light="alert!.light" :icon-class="alert!.iconClass" />
            <h1 class="text-2xl font-bold mt-10">Insert the One Time Password sent to {{ obscureEmail }}</h1>
            <Otp :count="4" @on-key-pressed="handleKeyPressed($event)" :digits="digits" />
            <Button content="Verify" @click="handleVerifyOtp"/>
        </Container>
    </div>
</template>

<script setup lang="ts">
import {reactive, computed} from 'vue'
import {useAuth, useAlert} from '~/composables'
const {params} = useRoute();
const email: string = params.email as string;

const {verify} = useAuth()
const {setAlert, alert, isAlertOpen} = useAlert()
const config = useRuntimeConfig();

let digits = reactive<number[]>([]);

const handleKeyPressed = (value: number[]) => {
    digits = [...value]
}

const obscureEmail = computed(() => {
    const [name, domaine] = email.split('@')

    return `${name[0]}${name[1]}${new Array(name.length).join('*')}@${domaine}`
})

const handleVerifyOtp = async (): Promise<void> => {
    try {
        const digitsArrayToNumber: number = parseInt(digits.join(''));
        const data = await verify(digitsArrayToNumber, email);

        setAlert({
            content: data.statusMessage as string,
            dark: config.public.COLORS.ALERT_DARK_SUCCESS,
            light: config.public.COLORS.ALERT_LIGHT_SUCCESS,
            iconClass: config.public.ICONS.SUCCESS
        })

        setTimeout(async () => {
            await navigateTo('/')
        }, 5000);
    } catch (error: any) {
        console.log(error)
        setAlert({
            content: error.response.data.statusMessage as string,
            dark: config.public.COLORS.ALERT_DARK_ERROR,
            light: config.public.COLORS.ALERT_LIGHT_ERROR,
            iconClass: config.public.ICONS.ERROR
        })
    }
}
</script>