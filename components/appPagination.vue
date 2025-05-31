<script setup>
const { totalItems, itemsPerPage, maxVisiblePages } = defineProps({
    totalItems: {
        type: Number,
        required: true,
    },
    itemsPerPage: {
        type: Number,
        default: 9,
    },
    maxVisiblePages: {
        type: Number,
        default: 7,
    }
});
const { pages, goToPage, currentPage, totalPages } = usePaginationData(totalItems, itemsPerPage, maxVisiblePages);
</script>

<template>
    <div class="flex items-center justify-center mt-4 gap-1" v-if="itemsPerPage < totalItems">
        <button :disabled="currentPage == 1" @click="goToPage(1)"
            class="rounded-full size-[42px]  flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#26304b]  transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
            <UIcon name="iconamoon:arrow-left-2" size="26px" />
        </button>
        <div class="flex flex-row px-2 bg-gray-200 dark:bg-gray-400 rounded-full">
            <button @click="goToPage(page)" v-for="page in pages" :key="page" :class="{
                'bg-blue-500 text-white shadow-[-1px_2px_19px_2px_rgba(92,122,179,0.6);] shadow-thirdary': currentPage == page,
                'text-gray-700 hover:text-thirdary': currentPage != page,
            }" class="rounded-md size-[42px] flex items-center text-lg justify-center mx-0.5">
                {{ page }}
            </button>
        </div>
        <button :disabled="currentPage == totalPages" @click="goToPage(totalPages)"
            class="rounded-full size-[42px]  flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#26304b] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
            <UIcon name="iconamoon:arrow-right-2" size="26px" />
        </button>
    </div>
</template>
