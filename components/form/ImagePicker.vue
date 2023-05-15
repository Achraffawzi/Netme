<template>
    <div class="relative inline-block imagePickeWrapper">
        <div
            class="w-20 h-20 rounded-full border border-solid border-gray-200 overflow-hidden imagePickerWrapper__imagePlaceholder">
            <img :src="originalSrc || setImage" alt="profile picture" class="w-full h-full object-cover" />
        </div>
        <div class="cursor-pointer absolute bottom-1 -right-1 text-xl  imagePickerWrapper__selectIcon">
            <Icon v-if="!src && !originalSrc" name="ic:baseline-camera-alt" class="text-2xl text-gray-400" @click="openFileExplorer" />
            <Icon v-else name="ic:outline-close" class="text-2xl text-gray-400" @click="handleRemoveImage" />
            <input :name="name" type="file" hidden="true" ref="imagePickerFileRef" accept="image/*" @change="onFileChanged">
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import noProfilePicture from '~/assets/images/noProfilePicture.jpg'

const emits = defineEmits(["fileChangedEvent", "setOriginalSrc"])
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    originalSrc: {
        type: String,
    }
})

// watch(src.value, () => {
//     console.log("watch effect fired!")
//     console.log(props.originalSrc)
// })

const src = ref(null)
const imagePickerFileRef = ref(null)

const setImage = computed(() => {
    console.log("computed property fired!")
    console.log("props.originalSrc = ", props.originalSrc)
    console.log("src.value = ", src.value)
    return src.value || noProfilePicture
});

const openFileExplorer = () => {
    imagePickerFileRef?.value.click();
}
const onFileChanged = (e) => {
    // revoke the previous BLOB for memory free
    if (src) URL.revokeObjectURL(src);

    const file = e.target.files[0];
    src.value = URL.createObjectURL(file);

    emits("fileChangedEvent", file)
}

const handleRemoveImage = () => {
    src.value = null;
    emits('fileChangedEvent', null);
}
</script>