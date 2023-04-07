<template>
    <div class="flex min-h-screen">
        <!-- Dynamic content -->
        <Container class="basis-1/2 py-2">
            <Logo />
            <slot></slot>
        </Container>

        <!-- Full bg image -->
        <div class="basis-1/2">
            <img class="h-full" src="~/assets/images/futuristic.jpg" alt="futuristic">
        </div>
    </div>
</template>

<script setup>

</script>