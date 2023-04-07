<template>
    <div class="flex flex-col justify-start items-center flex-wrap mx-auto max-w-xs w-11/12 pt-5">
        <ImagePicker name="picture" @input-changed="inputChanged($event)" />
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
    interests: [''],
});

const inputChanged = (payload: {name: string, value: string}): void => {
    user.value = {...user.value, [payload.name]: payload.value};
}
</script>