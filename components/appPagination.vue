<script setup>
const props = defineProps({
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
        default: 7, // increased to accommodate the "..."
    }
});

const { push } = useRouter();
const { page: RoutePage } = useRoute().params;

const currentPage = ref(Number(RoutePage));

watch(
    () => RoutePage,
    (newInitialPage) => {
        currentPage.value = newInitialPage;
    }
);

const totalPages = computed(() => {
    return Math.ceil(props.totalItems / props.itemsPerPage);
});

const pages = computed(() => {
    const pages = [];

    if (totalPages.value <= props.maxVisiblePages) {
        // Show all pages if total is within limit
        for (let i = 1; i <= totalPages.value; i++) {
            pages.push(i);
        }
    } else {
        const visiblePages = props.maxVisiblePages - 2; // Subtract 2 for ellipsis placeholders

        let startPage;
        let endPage;

        if (currentPage.value <= Math.ceil(visiblePages / 2)) {
            // Near the beginning
            startPage = 1;
            endPage = visiblePages;
        } else if (currentPage.value + Math.floor(visiblePages / 2) >= totalPages.value) {
            // Near the end
            startPage = totalPages.value - visiblePages + 1;
            endPage = totalPages.value;
        } else {
            // In the middle
            startPage = currentPage.value - Math.floor(visiblePages / 2);
            endPage = currentPage.value + Math.ceil(visiblePages / 2) - 1;
        }

        // Add first page
        pages.push(1);

        // Add ellipsis if needed
        if (startPage > 2) {
            pages.push('...');
        }

        // Add middle pages
        for (let i = startPage; i <= endPage; i++) {
            if (i !== 1 && i !== totalPages.value) {
                pages.push(i);
            }
        }

        // Add ellipsis if needed
        if (endPage < totalPages.value - 1) {
            pages.push('...');
        }

        // Add last page
        if (totalPages.value > 1) {
            pages.push(totalPages.value);
        }
    }

    return pages;
});

const goToPage = (page) => {
    if (page !== currentPage.value && page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
        push('/pets/' + page)
    } else if (typeof page === 'number') { //make sure the value is a number and between 1 and totalPages.
        if (page >= 1 && page <= totalPages.value) {
            currentPage.value = page;
            push('/pets/' + page)
        }
    }
};
</script>

<template>
    <div class="flex items-center justify-center mt-4 gap-1">
        <button :disabled="currentPage === 1" @click="goToPage(1)"
            class="rounded-full size-[36px]  flex items-center justify-center text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
            <UIcon name="iconamoon:arrow-left-2" size="26px" />
        </button>
        <div class="flex flex-row px-2 bg-gray-200 rounded-full">
            <button @click="goToPage(page)" v-for="page in pages" :key="page" :class="{
                'bg-blue-500 text-white shadow-[-1px_2px_19px_2px_rgba(92,122,179,0.6);] shadow-thirdary': currentPage === page,
                'text-gray-700 hover:text-thirdary': currentPage !== page,
            }" class="rounded-md size-[36px] flex items-center text-lg justify-center mx-0.5">
                {{ page }}
            </button>
        </div>
        <button :disabled="currentPage === totalPages" @click="goToPage(totalPages)"
            class="rounded-full size-[36px]  flex items-center justify-center text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
            <UIcon name="iconamoon:arrow-right-2" size="26px" />
        </button>
    </div>
</template>
