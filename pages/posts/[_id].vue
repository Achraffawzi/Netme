<template>
    <div>
        <Navbar />
        <Container class="mt-5">
            <div class="flex gap-16">
                <!-- post details wrapper -->
                <div class=" w-3/5 border border-lightestTextColor p-3">
                    <PostDetailHeader :_id="user._id" :username="user.username" :picture="user.picture" :reading-span="3" />
                    <h3 class="font-bold text-2xl mt-4 mb-3">{{ post?.title }}</h3>
                    <img :src="post?.thumbnail" :alt="post?.title" class="w-full h-96 object-fit">
                    <p class="mt-3 mb-4">{{ post?.content }}</p>
                    <Tags :tags="post?.tags"/>

                    <!-- likes & dislikes -->
                    <div class="flex items-center gap-x-4 mt-5 text-md select-none">
                        <div class="flex items-center gap-1 text-lighterTextColor cursor-pointer" @click="isLiked = !isLiked">
                            <Icon v-if="isLiked" name="ic:baseline-thumb-up"  />

                            <icon v-else name="ic:baseline-thumb-up-off-alt" />

                            <span class="">{{ likes }}</span>
                        </div>
                        <div class="flex items-center gap-1 text-lighterTextColor cursor-pointer" @click="isDisliked = !isDisliked">
                            <Icon v-if="isDisliked"  name="ic:baseline-thumb-down" />
                            <Icon v-else name="ic:outline-thumb-down-off-alt" @click="" />
                            <span class="">{{ likes }}</span>
                        </div>
                        <div class="flex items-center gap-1 text-lighterTextColor cursor-pointer">
                                <Icon class="text-2xl" name="ic:baseline-attach-money" />
                                <!-- <span>Thanks</span> -->
                            </div>
                    </div>
                </div>
                <div class="bg-green-600 flex-grow">rightside</div>
            </div>
        </Container>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {usePosts, useLikes} from '~/composables'
import { IPostResponse } from '~/types';
import {formatNumber} from '~/utils'

const user = JSON.parse(localStorage.getItem('user')!);
const {params} = useRoute();
const {getPostById} = usePosts()
const post = ref<IPostResponse>();

const {getTotalLikesByPostId} = useLikes();
const likes = ref<string>("")
const isLiked = ref<boolean>(false);
const isDisliked = ref<boolean>(false);

onMounted(async () => {
    Promise.all([getPostById(params._id as string), getTotalLikesByPostId(params._id as string)]).then((values: any) => {
        post.value = values[0];
        likes.value = formatNumber(values[1].data) as string
    })
})
</script>