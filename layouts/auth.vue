<template>
    <div class="flex min-h-screen">
        <!-- Dynamic content -->
        <Container class="md:basis-1/2 py-2 flex flex-col">
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