<script setup>
const { navs } = defineProps(['navs']);
</script>

<template>
    <aside class="rounded-lg bg-thirdary p-2 max-lg:hidden w-[320px] h-fit">
        <nav class="w-full">
            <button v-for="nav, index in navs" :key="index" @click="$emit('NavClick', index)"
                class="pl-4   text-white text-xl rounded-md hover:cursor-pointer w-full py-3.5 focus-visible:ring-2  ring-[#cedfff] outline-0 flex flex-row items-center gap-4 hover:bg-[#6e90d1] transition delay-75 duration-200">
                <UIcon :name="nav.icon" size="26" />
                <span>{{ nav.label }}</span>
                <UIcon name="hugeicons:tick-01" class="ml-auto mr-4 -mt-1 transition-opacity delay-[25ms]" size="30px"
                    :class="{ 'opacity-0': !nav.isActive }">
                </UIcon>
            </button>
        </nav>
    </aside>
</template>
