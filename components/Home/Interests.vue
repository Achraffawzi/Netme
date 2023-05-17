<template>
    <!-- <div class="  box-border inline-block"> -->
        <div class="inline-flex mt-8 border-b border-b-lighterTextColor box-border">
            <div v-for="(interest, index) in interests" :key="index" :class="['cursor-pointer mx-2 first:ml-0 last:mr-0 text-lighterTextColor text-sm pb-1 relative', {'!text-darkPurple font-bold before:absolute before:bg-darkPurple before:-bottom-[1px] before:left-0 before:w-full before:h-[1px] ' : selectedIndex == index}]" @click='handleInterestChanged(index)' >
                <span>{{ interest }}</span>
            </div>
        </div>
    <!-- </div> -->
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const emits = defineEmits(["interestChanged"])
const {interests} = defineProps({
    interests: {
        type: Array,
        required: true,
    }
})
const selectedIndex = ref(0);

const handleInterestChanged = (index: number) => {
    selectedIndex.value = index;
    emits('interestChanged', interests[selectedIndex.value])
}
</script>