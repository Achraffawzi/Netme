<template>
    <div class="relative inline-block imagePickeWrapper">
        <div
            class="w-20 h-20 rounded-full border border-solid border-gray-200 overflow-hidden imagePickerWrapper__imagePlaceholder">
            <img :src="setImage" alt="profile picture" class="w-full h-full object-cover" />
        </div>
        <div class="cursor-pointer absolute bottom-1 -right-1 text-xl  imagePickerWrapper__selectIcon">
            <Icon name="ic:baseline-camera-alt" class="text-2xl text-gray-400" @click="openFileExplorer" />
            <input :name="name" type="file" hidden="true" ref="imagePickerFileRef" accept="image/*" @change="onFileChanged">
        </div>
    </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import noProfilePicture from '~/assets/images/noProfilePicture.jpg'

const emits = defineEmits(["inputChanged"])
const props = defineProps({
    name: {
        type: String,
        required: true,
    }
})

const src = ref(null)
const imagePickerFileRef = ref(null)

const setImage = computed(() => src.value || noProfilePicture)

const openFileExplorer = () => {
    imagePickerFileRef?.value.click();
}
const onFileChanged = (e) => {
    // revoke the previous BLOB for memory free
    if (src) URL.revokeObjectURL(src);
    const file = e.target.files[0];
    src.value = URL.createObjectURL(file);

    emits("inputChanged", {name: e.target.name, value: file})
}
</script>