<template>
    <Alert :icon-class="config.public.ICONS.ERROR" content="testing alert" dark='alertDarkError' light='alertLightError' />
    <Alert :icon-class="config.public.ICONS.WARNING" content="testing alert" dark='alertDarkWarning' light='alertLightWarning' />
        <Alert :icon-class="config.public.ICONS.SUCCESS" content="testing alert" dark='alertDarkSuccess' light='alertLightSuccess' />
    <Alert :icon-class="config.public.ICONS.INFO" content="testing alert" dark='alertDarkInfo' light='alertLightInfo' />
</template>

<script setup>
import {useUser} from '~/composables/useUser';
const {userStore} = useUser();
const config = useRuntimeConfig();

const change = () => {
    userStore.setUser({email: "aaa@aaa.com"});
    console.log(userStore.user);
}
</script>