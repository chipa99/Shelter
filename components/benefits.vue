<template>
    <div
        class="bg-[#5a5451] dark:bg-[#232d46] dark rounded-b-3xl  shadow-2xl overflow-hidden h-[130vh] lg:h-[110vh] max-lg:flex flex-col  relative pt-6 md:pt-8 ">
        <h1
            class="font-bold smm:text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white text-center mb-8 dark:text-light">
            Почему же мы?
        </h1>
        <h3 class="text-lg lg:text-2xl text-gray-200 text-center text-pretty mb-24 dark:text-gray-300">Потому что наш
            приют – это место,
            где
            бездомные
            животные обретают вторую жизнь, а вы – верного друга.</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 max-lg:mb-20 max-lg:gap-y-12">
            <h2 v-for="benefit, index in benefits()" :key="index"
                class="lg:text-nowrap text-3xl z-10  text-white dark:text-darkLight" :class="benefit.place">{{
                    benefit.title }}</h2>
        </div>
        <div class="absolute bottom-0 xl:right-20 w-full h-fit z-0 ">
            <img src="/benefits.png" class="w-full lg:w-11/12 xl:w-8/12 z-0 md:mx-auto" alt="dog">
        </div>
        <NuxtLink
            class="lg:absolute lg:animate-bounce hover:animate-none  z-10 bottom-20 max-lg:w-fit self-center dark:ring-light dark:text-light dark:hover:bg-thirdary dark:hover:text-white dark:hover:ring-0 dark:hover:shadow-sm  dark:hover:shadow-darkSecondary ring-main ring-2 rounded-xl text-white text-2xl px-4 py-2 !hover:bg-main hover:text-black hover:shadow-md hover:ring-2   transition-all duration-500"
            to="/pets/1" v-for="item, index in 2" :key="index"
            :class="{ 'max-lg:hidden  left-20': index == 0, 'right-20': index == 1 }">
            Найти друга
        </NuxtLink>
        // <!-- <appButton label="Найти друга" color="white" variant="outline" 
    // :extra="'lg:absolute self-center lg:animate-bounce max-lg:w-fit' + index == 0 ? 'left-20 max-lg:hidden' : 'right-20'"
    // v-for="button, index in 2" :key="index" />-->
    </div>
</template>
