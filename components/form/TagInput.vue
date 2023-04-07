<template>
    <div class="mt-8 w-full overflow-auto max-w-full">
        <label>{{label}}</label>
        <div class="bg-light border-2 border-gray-200 px-2 w-full rounded-md flex items-center flex-wrap">
            <div class="flex items-center rounded-md bg-darkPurple text-white p-1 pr-2 mr-3 my-1 border-darkPurple" v-for="(item, index) in tags" :key="item">
                <span class="cursor-pointer w-4 h-4 flex items-center justify-center bg-white text-slate-700 rounded-full mr-2 text-xs"><Icon name="ic:baseline-clear" /></span>
                <span class=" text-xs">{{ item }}</span>
            </div>
            <input class="p-1 outline-none text-sm flex-1 min-w-1/2  w-full pl-3 bg-transparent" type="text" :placeholder="placeholder" v-model="tag" @keypress.enter="handleAddTag" />
        </div>
        <span>Up to {{ max }} tags</span>
    </div>
</template>

<script setup lang="ts">
    import {ref, PropType} from 'vue'
    
    const emits = defineEmits(["onTagAdded"]);
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
    const tagsCopy = ref<typeof tags>(tags)

    const handleAddTag = (): void => {
        const trimmedValue: string = tag.value.trim();
        
        // check if tags is more than max
        if (tagsCopy.value!.length + 1 > max) {
            return;
        }

        // verify that input value does not exist in tags array and input is not empty
        if(tag.value.length > 0 && !tagsCopy.value?.includes(trimmedValue)) {
            emits('onTagAdded', tag.value);
            tagsCopy.value?.push(tag.value);

            tag.value = '';

        }
    }

</script>