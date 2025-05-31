<script setup>
const { place } = defineProps(['place']);
const isDark = useState('theme', () => useColorMode().preference === 'dark');
const icon = ref('line-md:sun-rising-loop');
const switcherClasses = computed(() => ({
    'bg-yellow-400 left-[3px]': !isDark.value,
    'bg-light translate-x-[32px]': isDark.value,
}));
watch(isDark, (newIsDark) => {
    useColorMode().preference = newIsDark ? 'dark' : 'light';
    icon.value = newIsDark ? 'line-md:moon-alt-loop' : 'line-md:sun-rising-loop';
}, { immediate: true });
</script>


<template>
    <div class="max-sm:pl-6 flex flex-row gap-2 items-center" >
        <span class="transition duration-300 max-lg:hidden" v-if="place == 'footer'"
            :class="{ 'text-white': !isDark, 'text-gray-400': isDark }">Светлая</span>
        <div class=" rounded-3xl mx-1 w-16 h-8 flex items-center bg-gray-400 relative switcher"
            :class="{ 'max-lg:hidden': place == 'header' }">
            <input type="checkbox" class="size-full z-20 cursor-pointer opacity-0 peer" v-model="isDark" />
            <span :class="switcherClasses"
                class="absolute size-7 top-0.5 z-10 rounded-3xl transition-all duration-[400ms]">
                <UIcon :name="icon" class="size-full z-50" />
            </span>
        </div>
        <span class="transition duration-300 max-lg:hidden" v-if="place == 'footer'"
            :class="{ 'text-white': isDark, 'text-gray-400': !isDark }">Темная</span>
    </div>
</template>
