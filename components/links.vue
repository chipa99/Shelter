<script setup>
const { place, isSticky } = defineProps(['place', 'isSticky']);
</script>

<template>
    <div class="flex flex-row  gap-6 justify-center items-center " :class="{
        'max-sm:hidden  lg:pl-48 md:pl-16 max-md:pr-16 ': place == 'footer',
        'lg:hidden': place == 'header'
    }">
        <NuxtLink v-for="link, index in links()" :to="link.link" :key="index" class="flex items-center ">
            <UIcon :name="link.icon"
                :class="{ 'size-7': place == 'footer', 'size-10 ': place == 'header', 'text-gray-300  hover:text-white': (place == 'header' && !isSticky) || place == 'footer', 'text-white hover:text-gray-300': place == 'header' && isSticky }"
                class=" transition duration-300  " />
        </NuxtLink>
    </div>
</template>