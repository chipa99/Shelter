<script setup>
const isOpened = ref(false);
const isDropDownOpened = ref(false);
const isActive = ref(false);
const list = ref([]);
const types = [{ label: 'Good one', color: 'green-400' }, { label: 'Bad one', color: 'red-400' }, { label: 'Calm one', color: 'cyan-400' }, { label: 'Calm one', color: 'cyan-400' }, { label: 'Calm one', color: 'cyan-400' }];
const listAct = (item) => !list.value.includes(item) ? list.value.push(item) : list.value.splice(list.value.indexOf(item), 1);
</script>

<template>
    <div>
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
            <button @click="isOpened = !isOpened"
                class="basis-1/12 md:basis-2/12 py-1.5 px-2.5  md:bg-light md:font-medium transition duration-500 md:text-nowrap max-md:hover:bg-gray-400 md:hover:bg-thirdary md:hover:text-secondary dark:md:bg-[#324064] dark:md:hover:bg-darkSecondary ease-in-out outline-0  rounded-lg md:text-xl">
                <span class="max-md:hidden">Расширенный поиск</span>
                <UIcon name="icon-park-outline:expand-down" class="md:hidden" size="24px" />
            </button>
        </header>
        <div :class="{ 'h-fit mt-4 pt-5 placeholder-blue-400 pb-40': isOpened, 'h-0 *:hidden': !isOpened }"
            class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 transition-all gap-8">
            <div class="flex items-center px-2 py-1.5 border-light border-2 justify-between rounded-xl  hover:cursor-pointer text-thirdary relative transition"
                :class="{ 'bg-[#7290c9] text-white !border-[#7290c9]': isActive }">
                <h1 class="-top-8 absolute text-gray-800 text-xl font-extrabold">Type</h1>
                <span class="size-full absolute z-20" @click="isDropDownOpened = !isDropDownOpened"
                    @mousedown="isActive = true" @mouseup="isActive = false"></span>
                <span class=" text-lg font-bold before:content-[''] before:w-full before:h-full"
                    v-if="list.length == 0">Choose..</span>
                <div v-else class="flex flex-nowrap gap-2 truncate">
                    <div v-for="item, index in list" :key="index" @click="listAct(item)"
                        class="text-white p-1 z-20 px-1.5 flex items-center gap-2 text-sm rounded-md text-nowrap "
                        :class="[`bg-${item.color}`, { 'hidden': index >= 3 }]">
                        {{
                            item.label
                        }}
                        <UIcon name=" gg:close-o" />
                    </div>
                    <div v-if="index >= 3" class="text-black">+{{ list.length - 3 }} more..</div>
                </div>
                <UIcon name="iconamoon:arrow-down-2" size="32px" />
                <div class="absolute flex gap-2 pointer-events-none flex-wrap -bottom-28 rounded-xl p-4 shadow-md z-20 bg-white w-[97%]"
                    v-if="isDropDownOpened">
                    <div v-for="item, index in types" :key="index" @click="listAct(item)"
                        :class="{ 'invisible': list.includes(item) }"
                        class="rounded-lg p-1.5 shadow flex items-center pointer-events-auto active:cursor-pointer  active:text-white transition group">
                        <span class="text-sm group-active:text-white"
                            :class="[`text-${item.color}  group-active:bg-${item.color}`]">{{ item.label
                            }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
