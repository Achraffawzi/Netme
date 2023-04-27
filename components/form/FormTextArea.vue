<template>
    <div class="flex flex-col justify-start items-start flex-wrap mt-5 w-full">
        <label>{{ label }}</label>
        <textarea class="bg-light p-1  border-2 border-gray-200 outline-none mt-1 w-full rounded-md" rows="6"
            @input="onInputChanged" :value="value" :name="name" />
    </div>
</template>

<script setup lang="ts">
import { IInputChangePayload } from '~/types'
const emits = defineEmits(["inputChanged"])
defineProps({
    label: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    value: {
        type: String,
    },
})

const onInputChanged = (e: { target: IInputChangePayload }) => {
    emits("inputChanged", { name: e.target.name, value: e.target.value });
};
</script>