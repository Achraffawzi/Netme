<template>
    <div class="flex flex-col justify-start items-start flex-wrap mt-8 w-full">
        <label>{{ label }}</label>
        <input
          class="bg-light p-2.5  border-2 border-gray-200 outline-none mt-1 w-full rounded-sm"
          :type="type"
          @input="onInputChanged"
          :value="value"
          :name="name"
        />
      </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const emits = defineEmits(["inputChanged"])
defineProps({
    label: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        default: "text",
        validator(value: string) {
            return ["text", "password", "email"].includes(value);
        },
    },
    name: {
        type: String,
        required: true,
    },
    value: {
        type: String,
    },
})

const onInputChanged = (e: {target: {name: string, value: any}}) => {
    emits("inputChanged", { name: e.target.name, value: e.target.value });
};
</script>