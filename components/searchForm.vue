<template>
    <header class="flex flex-row justify-between gap-5 ">
        <div
            class="relative basis-11/12 md:basis-10/12 rounded-2xl  group outline-0  flex items-center flex-row md:gap-2">
            <UIcon name="cuida:search-outline"
                class="text-gray-500 dark:text-gray-400 ml-[6px] pointer-events-none absolute transition duration-300 group-focus-within:text-black dark:group-focus-within:text-white"
                size="24px">
            </UIcon>
            <input
                class=" rounded-2xl pl-8 p-1 w-full h-full  placeholder-gray-500 hover:shadow-sm hover:shadow-light bg-secondary   border-light border-2 hover:border-thirdary dark:placeholder-gray-400 dark:bg-gray-800 dark:border-darkSecondary dark:hover:border-thirdary dark:hover:shadow-darkSecondary dark:hover:shadow-md transition-all duration-300  outline-0  text-xl   group-focus-within:placeholder-black dark:group-focus-within:placeholder-darkLight"
                placeholder="Поиск по кличке.." />
        </div>
        <button
            class="basis-1/12 md:basis-2/12 py-1.5 px-2.5  md:bg-light md:font-medium transition duration-500 md:text-nowrap max-md:hover:bg-gray-400 md:hover:bg-thirdary md:hover:text-secondary dark:md:bg-[#324064] dark:md:hover:bg-darkSecondary ease-in-out outline-0  rounded-lg md:text-xl">
            <span class="max-md:hidden">Расширенный поиск</span>
            <UIcon name="icon-park-outline:expand-down" class="md:hidden" size="24px" />
        </button>
    </header>
</template>
