<script setup>
const props = defineProps({
    // Text label for the button
    label: {
        type: String,
        default: 'Click me',
    },
    border: {
        type: String,
        default: 'base'
    },
    color: {
        type: String,
        default: 'primary', // or "secondary", "outlined", "danger" etc.
    },
    variant: {
        type: String,
        default: 'solid'
    },
    // Button size (e.g., small, medium, large)
    size: {
        type: String,
        default: 'medium',
    },
    // Href for link (if element is a)
    href: {
        type: String,
        default: null,
    },
    extra: {
        type: String,
        default: "",
        required: false
    }
});
const buttonClasses = computed(() => {
    const baseClasses = 'inline-flex drop-shadow-xl z-10 text-nowrap items-center justify-center font-extrabold  transition-all duration-300 hover:animate-none outline-0';
    const colorClasses = {
        primary: 'bg-[#74a5ff] hover:bg-[#6590e0] text-white ring-[#74a5ff] ring-2 hover:ring-0',
        white: 'bg-current hover:text-black text-black ring-current ring-2 hover:ring-0',
        dark: 'bg-thirdary text-white hover:shadow-current shadow-sm ring-thirdary ring-2 hover:ring-0',
    };
    const variantClasses = {
        solid: '!ring-0',
        outline: '!bg-transparent text-current'
    }
    const borderClasses = {
        xl: 'rounded-3xl',
        base: 'rounded-2xl',
        sm: 'rounded-sm'
    }
    const sizeClasses = {
        small: 'px-2 py-1.5 text-base',
        medium: 'px-5 py-3 text-2xl',
        large: 'px-6 py-4 text-3xl',
    };

    const variantClass = variantClasses[props.variant] || variantClasses.solid;
    const sizeClass = sizeClasses[props.size] || sizeClasses.medium;
    const borderClass = borderClasses[props.border] || sizeClasses.base;
    const colorClass = colorClasses[props.color] || colorClasses.primary

    return `${baseClasses} ${colorClass} ${sizeClass} ${borderClass} ${variantClass} ${props.extra} `;
});
</script>

<template>
    <NuxtLink :to="href" @click="$emit('click')" :class="buttonClasses">{{ label }}</NuxtLink>
</template>