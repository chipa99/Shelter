<template>
    <div class="bg-main dark:bg-darkMain  overflow-hidden py-40 shadow-2xl">
        <h2 class="text-xl font-bold text-thirdary dark:text-thirdary text-center">Лапа Помощи</h2>
        <h1 class="text-4xl smm:text-5xl font-bold  dark:text-light text-gray-800 mb-32 text-center">
            Что же нужно сделать?
        </h1>
        <div
            class="max-md:container max-md:mx-auto lg:container lg:mx-auto max-lg:w-full  grid grid-cols-1 md:grid-cols-3 gap-y-6 lg:gap-6">
            <div class="flex flex-col items-center text-center h-fit smm:h-[27rem] md:h-[31rem] lg:h-[28rem] bg-[#f3e1d5] dark:bg-[#354768] max-md:rounded-xl lg:rounded-xl max-lg:w-full p-4 pb-8"
                v-for="advantage, index in stepsAdvantages()" :key="index">
                <div class="w-full mb-6">
                    <UIcon :name="advantage.icon" class="size-36 text-thirdary dark:text-light" />
                </div>
                <h2 class="text-3xl font-semibold text-nowrap mb-6 dark:text-darkLight">{{ advantage.title }}</h2>
                <h3 class="text-lg text-gray-500 text-pretty mb-10 smm:mb-auto dark:text-gray-400">{{
                    advantage.description }}</h3>
                <appButton :label="advantage.button" :href="advantage.link" extra=" dark:hover:bg-thirdary" />
            </div>
        </div>
    </div>
</template>
