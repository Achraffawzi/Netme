<template>
    <div class="flex min-h-screen">
        <!-- Dynamic content -->
        <Container class=" py-2 flex flex-col w-4/5 md:basis-1/2">
            <Logo />
            <div class="flex flex-col items-center justify-center flex-1">
                <slot></slot>
            </div>
        </Container>

        <!-- Full bg image -->
        <div class="hidden lg:flex basis-1/2">
            <img class="h-full" src="~/assets/images/futuristic.jpg" alt="futuristic">
        </div>
    </div>
</template>

<script setup>

</script>