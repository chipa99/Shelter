<script setup>
const props = defineProps({
    label:
        String,
    variant: {
        type: String,
        default: 'primary'
    },
    href: {
        type: String,
        default: null,
    },
    extra: String
});
const buttonClasses = computed(() => {
    const base = ` transition-all z-10 hover:cursor-pointer inline-block text-center duration-300`
    const variantClasses = {
        primary: ' py-3 px-5 text-2xl text-white bg-[#74a5ff] hover:bg-[#6590e0] text-nowrap rounded-2xl drop-shadow-xl font-extrabold  hover:text-gray-200 dark:hover:bg-thirdary',
        primaryOutline: 'ring-light max-lg:hidden ring-2 rounded-lg  py-1 text-2xl hover:ring-0 hover:bg-light dark:hover:bg-thirdary  hover:shadow-none   dark:hover:text-white  shadow-xl shadow-light/20 ',
        lightOutline: 'ring-main  dark:ring-light ring-2 rounded-xl text-white dark:text-light  text-2xl px-4 py-2 hover:bg-main dark:hover:bg-thirdary hover:text-black dark:hover:text-white hover:shadow-md dark:hover:shadow-sm hover:ring-0 dark:hover:shadow-darkSecondary'
    }

    const variantClass = variantClasses[props.variant]

    return `${base} ${variantClass}  ${props.extra} `;
});
</script>

<template>
    <NuxtLink :to="href" @click="$emit('click')" :class="buttonClasses">{{ label }}</NuxtLink>
</template>