<template>
    <div>
        {{follows}}
    </div>
</template>

<script setup lang="ts">
import {useFollows} from '~/composables';
import {formatNumber} from '~/utils'

const {getFollowsByUser} = useFollows()
const follows = ref();

follows.value = await getFollowsByUser();

console.log(formatNumber(3400));
</script>