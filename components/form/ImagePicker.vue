<template>
    <div class="relative inline-block imagePickeWrapper">
        <div
            class="w-20 h-20 rounded-full border border-solid border-gray-200 overflow-hidden imagePickerWrapper__imagePlaceholder">
            <img ref="testref" :src="originalSrcCopy || setImage" alt="profile picture" class="w-full h-full object-cover" />
        </div>
        <div class="cursor-pointer absolute bottom-1 -right-1 text-xl  imagePickerWrapper__selectIcon">
            <Icon v-if="!src && !originalSrcCopy" name="ic:baseline-camera-alt" class="text-2xl text-gray-400" @click="openFileExplorer" />
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
const originalSrcCopy = ref(props.originalSrc)
const imagePickerFileRef = ref(null)

const setImage = computed(() => {
    // if(originalSrcCopy) return originalSrcCopy;
    // if(src.value) return src.value;
    // else {
    //     console.log("default pic");
    //     return noProfilePicture
    // };
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

const testref = ref('testref');
const handleRemoveImage = () => {
    src.value = null;
    originalSrcCopy.value = null;
    emits('fileChangedEvent', null);
    console.log(testref)
}
</script>