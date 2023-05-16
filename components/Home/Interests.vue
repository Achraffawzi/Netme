<template>
    <!-- <div class="  box-border inline-block"> -->
        <div class="inline-flex mt-8 border-b border-b-lighterTextColor box-border">
            <div v-for="(interest, index) in interests" :key="index" :class="['cursor-pointer mx-2 first:ml-0 last:mr-0 text-lighterTextColor text-sm pb-1 relative', {'!text-darkPurple font-bold before:absolute before:bg-darkPurple before:-bottom-[1px] before:left-0 before:w-full before:h-[1px] ' : selectedIndex == index}]" @click='handleInterestClicked(index)' >
                <span>{{ interest }}</span>
            </div>
        </div>
    <!-- </div> -->
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const {interests} = JSON.parse(localStorage.getItem('user')!);
const selectedIndex = ref(0);

const handleInterestClicked = (index: number) => {
    selectedIndex.value = index;
}
</script>