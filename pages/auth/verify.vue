<template>
    <div>
        <Container class="text-center flex flex-col items-center">
            <h1 class="text-2xl font-bold mt-10">Insert the One Time Password sent to your Email</h1>
            <Otp :count="4" @on-key-pressed="handleKeyPressed($event)" :digits="digits" />
            <Button content="Verify"/>
        </Container>
    </div>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'
let digits = reactive<number[]>([]);

const handleKeyPressed = (value: number[]) => {
    digits = [...value]
}
</script>