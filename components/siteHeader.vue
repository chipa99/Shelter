<script setup>
const { isMain } = defineProps({
    isMain: {
        type: Boolean,
        default: true,
    },
});
const { isOpened, isSticky, handleScroll, headerClasses, logoClasses, navClasses, linkClasses, burgerButtonClasses, isAuthed, getOut } = useHeaderData(isMain);
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
    <header :class="headerClasses" class="shadow-md w-full transition-all duration-500 z-40">
        <div class="w-full py-4 px-5  md:px-20 flex items-center max-lg:flex-wrap"
            :class="{ 'max-2xl:container max-2xl:mx-auto max-xl:!px-3.5 xl:max-2xl:px-16 min-[1800px]:pl-[7.5rem] min-[1800px]:pr-[4.5rem] md:px-36 2xl:max-[1800px]:px-6': isMain, ' min-[1800px]:!px-[7.5rem] min-[1800px]:!pr-[8.5rem]': !isAuthed && isMain }">
            <NuxtLink to="/" class="text-2xl font-extrabold flex items-center lg:mr-5 xl:mr-10 gap-4 text-white"
                :class="logoClasses">
                <UIcon name="cil:animal" size="36px" class="min-[300px]:max-sm:hidden text-nowrap" />
                <span class="max-[300px]:hidden text-nowrap">Лапа Помощи</span>
            </NuxtLink>

            <nav :class="navClasses"
                class="gap-4 text-2xl lg:text-lg flex items-center transition-all duration-[500ms] max-lg:basis-full lg:items-end max-lg:flex-col lg:flex-row max-lg:order-last">
                <NuxtLink v-for="(item, index) in headerLinks()" :key="index" :to="item.to"
                    class="text-nowrap transition-all duration-300 hover:cursor-pointer" :class="linkClasses(index)">
                    {{ item.label }}
                </NuxtLink>
                <Links :class="{ 'max-lg:hidden': !isOpened }" place="header" :isSticky="isSticky" :isMain="true" />
            </nav>

            <div class="flex items-center gap-3 max-lg:ml-auto lg:basis-full justify-end h-8">
                <appButton :label="isAuthed ? 'В профиль' : 'Войти'" :to="isAuthed ? '/profile' : '/login'"
                    variant="primaryOutline"
                    :extra="`${isMain ? 'text-gray-700 dark:text-white' : 'text-white hover:text-black'} ${isAuthed ? 'px-4' : ' px-8'}`" />
                <AppSwitcher place="header" />
                <div class="flex lg:hidden h-full flex-col cursor-pointer items-center justify-center"
                    @click="isOpened = !isOpened">
                    <button :class="burgerButtonClasses" class="burger-button">
                    </button>
                </div>
                <UIcon name="line-md:logout" @click="getOut" class="hover:cursor-pointer"
                    :class="{ 'text-white': !isMain }" size="32px" v-if="isAuthed" />
            </div>
        </div>
    </header>
</template>



<style scoped>
.burger-button,
.burger-button::before,
.burger-button::after {
    display: block;
    height: 4px;
    width: 35px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
}
</style>