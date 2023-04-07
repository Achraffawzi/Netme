<template>
    <div class="mt-8 w-full overflow-auto max-w-full">
        <label>{{label}}</label>
        <div class="bg-light border-2 border-gray-200 px-2 w-full rounded-md flex items-center flex-wrap">
            <div class="flex items-center rounded-md bg-darkPurple text-white p-1 pr-2 mr-3 my-1 border-darkPurple" v-for="(item, index) in tags" :key="item">
                <span class="cursor-pointer w-4 h-4 flex items-center justify-center bg-white text-slate-700 rounded-full mr-2 text-xs" @click="handleDeleteTag(item)"><Icon name="ic:baseline-clear" /></span>
                <span class=" text-xs">{{ item }}</span>
            </div>
            <input v-if="!isTagsLimit" class="p-1 outline-none text-sm flex-1 min-w-1/2  w-full pl-3 bg-transparent" type="text" :placeholder="placeholder" v-model="tag" @keypress.enter="handleAddTag" />
        </div>
        <span class="text-xs font-bold text-darkPurple">Up to {{ max }} tags</span>
    </div>
</template>

<script setup lang="ts">
    import {ref, PropType, watchEffect} from 'vue'
    
    const emits = defineEmits(["onTagAdded", "onTagDeleted"]);
    const {tags, max} = defineProps({
        tags: {
            type: Array as PropType<string[]>
        },
        label: String,
        placeholder: String,
        max: {
            type: Number,
            required: true
        }
    })
    const tag = ref<string>('')
    const isTagsLimit = ref<boolean>(false)
    const tagsCopy = ref<typeof tags>(tags)

    const handleAddTag = (): void => {
        const trimmedValue: string = tag.value.trim();
    
        // verify that input value does not exist in tags array and input is not empty
        if(tag.value.length > 0 && !tagsCopy.value?.includes(trimmedValue)) {
            // check if tags is more than max
            if (tagsCopy.value!.length > max) {
                return;
            }

            emits('onTagAdded', tag.value);
            tagsCopy.value?.push(tag.value);

            if (tagsCopy.value!.length == max) {
                isTagsLimit.value = true;
                return;
            }

            tag.value = '';

        }
    }

    const handleDeleteTag = (payload: string): void => {
        isTagsLimit.value = false;
        tag.value = '';
        tagsCopy.value = tagsCopy.value?.filter(item => item !== payload)
        emits('onTagDeleted', tagsCopy.value);
    }

</script>