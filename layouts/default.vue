<template>
    <div class="scroll overflow-x-hidden">
        <site-header />
        <main class="bg-secondary dark:bg-darkMain py-4">
            <slot />
        </main>
        <AppFooter class="" />
    </div>
</template>