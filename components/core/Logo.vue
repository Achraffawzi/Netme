<template>
    <div class="flex items-center w-9">
        <img src="~/assets/svg/logo.svg" :alt='`${appName} Logo`' />
        <h5 class="ml-2">{{ appName }}</h5>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    const config = useRuntimeConfig();

    const appName = ref(config?.public?.APP_NAME)
</script>