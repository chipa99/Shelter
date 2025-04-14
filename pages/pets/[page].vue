<script setup>
const skip = (Number(useRoute().params.page) - 1) * 9
const getPets = async () => {
    const { data } = await useFetch('/api', {
        query: {
            skip,
            query: {}
        }
    });
    return data.value
}
const all = await getPets();
</script>

<template>
    <div class="container mx-auto xl:px-12 2xl:px-32">
        <header class="flex flex-row justify-between gap-5 ">
            <div
                class="relative basis-11/12 md:basis-10/12 rounded-2xl   outline-0  flex items-center flex-row md:gap-2">
                <UIcon name="cuida:search-outline"
                    class="text-gray-500 ml-[6px] pointer-events-none absolute peer-hover:text-black" size="24px">
                </UIcon>
                <input
                    class=" rounded-2xl pl-8 p-1 w-full h-full  placeholder-gray-500 hover:shadow-sm hover:shadow-light bg-secondary  border-light border-2 hover:border-thirdary transition duration-300  outline-0  text-xl  peer focus:placeholder-black"
                    placeholder="Поиск по кличке.." />
            </div>
            <button
                class="basis-1/12 md:basis-2/12 py-1.5 px-2.5  md:bg-light md:font-medium transition duration-500 md:text-nowrap max-md:hover:bg-gray-400 md:hover:bg-thirdary md:hover:text-secondary ease-in-out outline-0  rounded-lg md:text-xl">
                <span class="max-md:hidden">Расширенный поиск</span>
                <UIcon name="icon-park-outline:expand-down" class="md:hidden" size="24px" />
            </button>
        </header>
        <PetCards :pets="all.pets" place="main" />
        <footer class="mt-4 flex justify-center">
            <AppPagination :totalItems="all.total" />
        </footer>
    </div>
</template>

