<template>
    <Alert icon-class="ic:baseline-error-outline" content="testing alert" dark='alertDarkError' light='alertLightError' />
    <Alert icon-class="ic:baseline-error-outline" content="testing alert" dark='alertDarkWarning' light='alertLightWarning' />
        <Alert icon-class="ic:baseline-error-outline" content="testing alert" dark='alertDarkSuccess' light='alertLightSuccess' />
    <Alert icon-class="ic:baseline-error-outline" content="testing alert" dark='alertDarkInfo' light='alertLightInfo' />
</template>

<script setup>
import {useUser} from '~/composables/useUser';
const {userStore} = useUser();

const change = () => {
    userStore.setUser({email: "aaa@aaa.com"});
    console.log(userStore.user);
}
</script>