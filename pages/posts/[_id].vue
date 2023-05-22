<template>
    <div>
        <Navbar />
        <Container class="mt-5">
            <div class="flex gap-16 relative">
                <!-- post details wrapper -->
                <div class=" w-3/5 border border-lightestTextColor p-3">
                    <PostDetailHeader :_id="post?.authorId?._id" :username="post?.authorId?.username" :picture="post?.authorId?.picture" :reading-span="post?.readingSpan" />
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

                    <!-- more from author -->
                    <div class="mt-5 xl:w-2/3" v-if="morePosts?.length > 0">  
                        <h3 class="font-bold text-xl">More from {{ post?.authorId?.username }}</h3>
                        <div v-for="item in morePosts" :key="item._id">
                            <ArticleCardMore :_id="item?._id" :picture="item.thumbnail" :title="item?.title" :content="item?.content" />
                        </div>
                    </div>
                </div>
                <div class="w-2/5 border border-lightestTextColor p-3">
                    <h3 class="font-bold text-xl mb-3">More articles like this</h3>
                    <div>
                        <NuxtLink v-for="item in postsAlike" :key="item._id" :to="`/posts/${item._id}`">
                            <ArticleCardMoreRightside class="mb-5"  :_id="item._id" :picture="item.authorId?.picture" :username="item?.authorId?.username" :title="item.title" :content="item.content" :thumbnail="item.thumbnail" />
                        </NuxtLink>
                    </div>
                    <NuxtLink class="text-xs text-darkPurple">See even more posts like this</NuxtLink>
                </div>
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
const {getPostById, getPostsByAuthor, getPostsByTags} = usePosts()
const post = ref<IPostResponse>();

const {getTotalLikesByPostId} = useLikes();
const likes = ref<string>("")
const isLiked = ref<boolean>(false);
const isDisliked = ref<boolean>(false);

const morePosts = ref<IPostResponse[]>([])
const postsAlike = ref<IPostResponse[]>([])

onMounted(async () => {
    Promise.all([getPostById(params._id as string), getTotalLikesByPostId(params._id as string)]).then((values: any) => {
        post.value = values[0];
        likes.value = formatNumber(values[1].data) as string
        console.log(post.value);
    }).then(async () => {
        const postsResponce = await getPostsByTags([...(post.value?.tags as string[])])
        const response = await getPostsByAuthor(post.value?.authorId as string)
        postsAlike.value = postsResponce;
        morePosts.value = response.filter(p => p._id !== params._id);
    })
})
</script>