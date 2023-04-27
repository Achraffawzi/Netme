<template>
    <div class="bg-white rounded-md p-3 w-[700px] max-w-[90vw] mx-auto shadow-lg">
        <!-- profile picture -->
        <div class="flex items-center">
            <ImagePicker name="picture"  @input-changed="inputChanged($event)" />
            <div class="flex flex-col ml-5 flex-1">
                <div>
                    <span class="mr-3 text-darkPurple text-sm">Update</span>
                    <span class="text-red-500 text-sm">Remove</span>
                </div>
                <span class="text-xs text-lightTextColor">Only .PNG .JPG & .JPEG are acceptable</span>
            </div>
            <span class="text-2xl cursor-pointer text-lightTextColor">&times;</span>
        </div>

        <!-- inputs -->
        <FormInput label="Username" :value="user.username" name="username" class="w-2/6 text-sm" />
        <FormTextArea label="Bio" :value="user.bio" name="bio" class="w-5/6 text-sm" />
        <TagInput label="Interests" :tags="user.interests" :max="5" class="w-5/6"/>

        <!-- action buttons -->
        <div class="flex items-center justify-end">
            <Button content="Discard" class="text-xs" :outline="true"/>
            <Button content="Save" class="ml-4 text-xs" />
        </div>
    </div>
</template>

<script setup lang="ts">
const user = JSON.parse(localStorage.getItem('user') as string);

const inputChanged = (payload: { name: string, value: string }): void => {
    user.value = { ...user.value, [payload.name]: payload.value };
}

</script>