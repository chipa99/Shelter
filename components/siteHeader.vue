<script setup>
const isOpened = ref(false);
const { isScrolling, isVisible, isSticky } = defineProps(['isScrolling', 'isVisible', 'isSticky']);
const items = [
    {
        label: 'Войти',
        to: '/login'
    }, {
        label: 'О нас',
        to: '/'
    }, {
        label: 'Наши животные',
        to: '/pets/1'
    }, {
        label: 'Помочь приюту',
        to: '/'
    }, {
        label: 'Контакты',
        to: '/'
    }];
</script>

<template>
    <header :class="{
        'fixed top-0 left-0  z-20 bg-opacity-50 backdrop-blur-md backdrop-brightness-[0.65]': isSticky,
        '-translate-y-full': !isVisible && isScrolling,
        'bg-transparent absolute': !isSticky,
        'backdrop-blur-md ': isOpened
    }" class=" shadow-md w-full transition-all duration-500">
        <div class="w-full py-4 px-5 md:px-20 flex items-center max-lg:flex-wrap">

            <NuxtLink to="/" class="text-2xl font-extrabold mr-10 flex items-center  gap-4 text-white">
                <UIcon name="cil:animal" size="36px" />
                <span class="max-smm:hidden text-nowrap">Лапа Помощи</span>
            </NuxtLink>
            <nav class="gap-4 text-2xl lg:text-lg flex items-center transition-all  duration-[400ms] max-lg:basis-full  lg:items-end max-lg:flex-col lg:flex-row max-lg:order-last"
                :class="{ 'max-lg:size-0 ': !isOpened, 'size-80 py-8': isOpened }">
                <NuxtLink v-for="item, index in items" :key="index" :to="item.to"
                    class=" text-nowrap transition-all font-thin duration-300 hover:cursor-pointer"
                    :class="{ 'hidden': index == 0 && !isOpened, 'max-lg:opacity-0': !isOpened, 'hover:text-white text-gray-300 ': !isSticky, 'hover:text-gray-300 text-white lg:text-gray-300 lg:hover:text-white': isSticky }">
                    {{ item.label }}
                </NuxtLink>
                <Links :class="{ 'max-lg:hidden': !isOpened }" place="header" :isSticky="isSticky" />
            </nav>

            <div class="flex items-center max-lg:ml-auto lg:basis-full justify-end h-8">
                <NuxtLink to="/login"
                    class="border-light max-lg:hidden border-2 rounded-lg px-8 py-1 text-2xl hover:bg-light text-white shadow-xl shadow-light/20 hover:shadow-none hover:text-black  transition-all duration-300 ">
                    Войти
                </NuxtLink>
                <div class="flex lg:hidden h-full flex-col cursor-pointer items-center justify-center"
                    @click="isOpened = !isOpened">
                    <button class="burger-button   after:bg-white before:bg-white"
                        :class="{ 'before:rotate-45 before:mt-0 after:-mt-1 after:rotate-[135deg] bg-transparent ': isOpened, ' before:-mt-[8px] after:mt-[12px] bg-white': !isOpened, }"></button>
                </div>
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