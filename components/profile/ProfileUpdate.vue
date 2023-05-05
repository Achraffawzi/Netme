<template>
    <div class="bg-white rounded-md p-3 w-[700px] max-w-[90vw] mx-auto shadow-lg">
        <!-- profile picture -->
        <div class="flex items-center">
            <ImagePicker @set-original-src="setOriginalSrc($event)" :original-src="originalSrc" name="picture"  @input-changed="inputChanged($event)" />
            <div class="flex flex-col ml-5 flex-1">
                <div>
                    <span class="mr-3 text-darkPurple text-sm cursor-pointer">Update</span>
                    <!-- <span class="text-red-500 text-sm cursor-pointer">Remove</span> -->
                </div>
                <span class="text-xs text-lightTextColor">Only .PNG .JPG & .JPEG are acceptable</span>
            </div>
            <span class="text-2xl cursor-pointer text-lightTextColor" @click="handleCloseModal">&times;</span>
        </div>

        <!-- inputs -->
        <FormInput label="Username" type="text" :value="user.username" name="username" class="w-2/6 text-sm" @input-changed="inputChanged" />
        <FormTextArea label="Bio" :value="user.bio" name="bio" class="w-5/6 text-sm" @input-changed="inputChanged" />
        <TagInput label="Interests" :tags="interestsCopy" :max="5" class="w-5/6" @on-tag-added="handleAddTag($event)" @on-tag-deleted="handleDeleteTag($event)"/>

        <!-- action buttons -->
        <div class="flex items-center justify-end">
            <Button content="Discard" class="text-xs" :outline="true" @click="handleCloseModal"/>
            <Button content="Save" class="ml-4 text-xs" />
        </div>
    </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['onCloseModal'])

const user = JSON.parse(localStorage.getItem('user') as string);
const updatedUserProps = ref({});
let interestsCopy = ref<string[]>(user.interests)

const originalSrc = ref(user.picture)

const setOriginalSrc = (value: string | null) => {
    originalSrc.value = value;
}

const inputChanged = (payload: { name: string, value: string }): void => {
    updatedUserProps.value = { ...updatedUserProps.value, [payload.name]: payload.value };
}

const handleCloseModal = () => {
    emits('onCloseModal');
}

const handleAddTag = (interest: string) => {
    interestsCopy.value.push(interest)
    updatedUserProps.value = { ...updatedUserProps.value, interests: 'interests' in updatedUserProps.value ? [...[updatedUserProps.value.interests], interest] : [interest] };
}

const handleDeleteTag = (interests: string[]) => {
    interestsCopy.value = [...interests]
    updatedUserProps.value = { ...updatedUserProps.value, interests };
}

</script>