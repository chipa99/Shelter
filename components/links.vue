<script setup>
const { place, isSticky, isMain } = defineProps(['place', 'isSticky', 'isMain']);
</script>

<template>
    <div class="flex flex-row  gap-6 justify-center items-center " :class="{
        'max-sm:hidden  lg:pl-[5.5rem] md:pl-16 max-md:pr-16 ': place == 'footer',
        'lg:hidden': place == 'header'
    }">
        <NuxtLink v-for="link, index in links()" :to="link.link" :key="index" class="flex items-center ">
            <UIcon :name="link.icon"
                :class="{ 'size-7': place == 'footer', 'size-10 ': place == 'header', 'text-gray-300  hover:text-white': (place == 'header' && !isSticky) || place == 'footer' && isMain, 'text-white hover:text-gray-300': (place == 'header' && !isMain && isSticky), 'text-gray-700 hover:text-gray-500': (isMain && place == 'header') }"
                class=" transition duration-300  " />
        </NuxtLink>
    </div>
</template>