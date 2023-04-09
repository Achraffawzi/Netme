<template>
    <div :class="['flex items-center w-[300px] max-w-[90vw] px-1 py-2 rounded-md text-white', `bg-${light}`]">
        <div :class="['p-2 mr-2 rounded-md w-10 h-10 text-2xl flex items-center justify-center', `bg-${dark}`]">
            <Icon :name="iconClass" />
        </div>
        <p class="flex-1 text-sm">{{ content }}</p>
        <div @click="handleCloseAlert" class="rounded-md w-10 h-10 text-2xl flex items-center justify-center p-2 cursor-pointer hover:bg-white/20">
            <Icon name="ic:round-close" />
        </div>
    </div>
</template>

<script setup>

defineProps({
    iconClass: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    dark: String,
    light: String,
})

const emits = defineEmits(["onClick"])

const handleCloseAlert = () => {
    emits("onClick");
}
</script>