<template>
    <div class="scroll overflow-x-hidden">
        <AppHeader />
        <main class="bg-secondary dark:bg-darkMain py-4">
            <slot />
        </main>
        <AppFooter class="" />
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped></style>