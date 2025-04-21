<script setup>
import { useStore } from '~/stores/auth';
const { isAuthed } = useStore();
const links = ref([{
    label: 'Наши лапули',
    to: '/pets/1'
}, {
    label: 'О приюте',
    to: '/'
}, {
    label: 'Уход',
    to: '/'
}]);
const isOpened = ref(false);
onMounted(() => {
    const width = ref(window.innerWidth);
    (width.value < 992) && !isAuthed ? links.value.unshift({ label: 'Войти в аккаунт', to: '/login' }) : true;
});
</script>

<template>
    <div>
        <header class="bg-main ">
            <nav class="container mx-auto py-2 flex flex-row justify-around  items-center flex-wrap">
                <div class="order-1 xl:basis-2/12 w-1/2"><img src="../public/logo.png"
                        class="w-35 h-[70px] hover:cursor-pointer" alt="brand_image">
                </div>
                <div :class="{ 'max-xl:h-0 max-xl:opacity-0 max-xl:*:pointer-events-none': !isOpened, ' max-xl:py-2.5 max-xl:flex max-lg:h-[9.5rem] max-xl:h-[8.5rem] ': isOpened }"
                    class=" order-3 xl:order-2 xl:basis-4/12 flex basis-full max-xl:flex-col gap-x-10 gap-y-2 justify-center transition-all duration-[400ms] ease-[cubic-bezier(0.455, 0.030, 0.515, 0.955)]">
                    <NuxtLink
                        class="text-xl hover:text-gray-500 text-black transition duration-300 outline-0 text-nowrap text-center"
                        v-for="link, index in links" :key="index" :to="link.to">
                        {{ link.label }}
                    </NuxtLink>
                </div>
                <div class="xl:order-3 order-2 xl:basis-3/12 w-1/2 flex justify-end gap-4 ">
                    <NuxtLink
                        class="text-xl rounded-3xl text-nowrap shadow-lg hover:shadow-gray-400 px-4 max-lg:hidden py-[0.6rem] flex items-center outline-0 bg-thirdary text-white transition-shadow duration-500"
                        :to="isAuthed ? '/login' : '/profile'">{{ !isAuthed ? "Вход и регистрация" : "Перейти в профиль"
                        }}
                    </NuxtLink>
                    <div class="flex lg:hidden items-center hover:cursor-pointer max-lg:pr-3"
                        @click="isOpened = !isOpened">
                        <button class="burger after:bg-gray-500 before:bg-gray-500"
                            :class="{ 'bg-transparent  after:rotate-[45deg] before:rotate-[-45deg] before:m-0 after:-mt-[5px] ': isOpened, 'before:-mt-2 after:mt-3 bg-gray-500': !isOpened }"></button>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<style scoped>
.burger,
.burger::before,
.burger::after {
    display: block;
    width: 35px;
    height: 4.5px;
    border-radius: 4px;
    transition: all 0.17s;
}
</style>