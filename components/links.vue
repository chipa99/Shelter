<script setup>
const links = [{
    link: 'https://t.me/WhoamI0071st',
    icon: 'line-md:telegram'
}, {
    link: 'https://github.com/chipa99/VKrepo',
    icon: 'line-md:github-loop'
}, {
    link: 'https://vk.com/chipchilinka9',
    icon: 'hugeicons:vk'
}, {
    link: 'https://www.youtube.com/@MMindflow',
    icon: 'line-md:youtube'
}];
const { place, isSticky } = defineProps(['place', 'isSticky']);
</script>

<template>
    <div class="flex flex-row  gap-6 justify-center items-center " :class="{
        'max-sm:hidden  lg:pl-48 md:pl-16 max-md:pr-16 ': place == 'footer',
        'lg:hidden': place == 'header'
    }">
        <NuxtLink v-for="link, index in links" :to="link.link" :key="index" class="flex items-center">
            <UIcon :name="link.icon"
                :class="{ 'size-7': place == 'footer', ' text-white  hover:text-gray-300': place == 'footer' || !isSticky, 'size-10 text-black hover:text-gray-500 ': place == 'header' }"
                class=" transition duration-300  " />
        </NuxtLink>
    </div>
</template>