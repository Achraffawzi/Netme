<template>
    <div>
        <Navbar />
        <Container class="mt-5">
            <div class="flex gap-16">
                <!-- post details wrapper -->
                <div class=" w-3/5 border border-lightestTextColor p-3">
                    <PostDetailHeader :_id="user._id" :username="user.username" :picture="user.picture" :reading-span="3" />
                </div>
                <div class="bg-green-600 flex-grow">rightside</div>
            </div>
        </Container>
    </div>
</template>

<script setup lang="ts">
const user = JSON.parse(localStorage.getItem('user')!);
</script>