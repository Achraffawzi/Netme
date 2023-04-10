<template>
    <div  ref="otpCont">
        <div class="grid grid-cols-4">
            <input maxlength="1" class="max-[330px]:w-9 max-[330px]:h-14 w-12 h-16 rounded-md border-2 border-gray-400 text-center text-xl mr-5 last:mr-0 focus:outline-none focus:border-darkPurple my-4" :autofocus="index === 0" type="text" v-for="(_, index) in count" :key="index" @keydown="handleKeyDown($event, index)" v-model="digits[index]">
        </div>
        
    </div>
</template>

<script setup lang="ts">
import {ref, reactive } from 'vue'
const props = defineProps({
    count: {
        type: Number,
        required: true,
    },
    digits: {
        type: Array,
        default: []
    }
})

const emits = defineEmits(["onKeyPressed"])


const otpCont = ref();

const handleKeyDown = function (event: any, index: number) {
    if (event.key !== "Tab" &&
        event.key !== "ArrowRight" &&
        event.key !== "ArrowLeft"
    ) {
        event.preventDefault();
    }

    if (event.key === "Backspace") {
        props.digits.splice(index, 1)

        if (index != 0) {
            (otpCont.value.children[0].children)[index - 1].focus();
        }
    }

    if ((new RegExp('^([0-9])$')).test(event.key)) {
        props.digits[index] = +event.key;

        if (index != props.count - 1) {
            (otpCont.value.children[0].children)[index + 1].focus();
        }
    }

    emits("onKeyPressed", props.digits)
}
</script>