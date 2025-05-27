export const usePaginationData = (
  totalItems,
  itemsPerPage,
  maxVisiblePages
) => {
  const { push } = useRouter();
  const { page: RoutePage } = useRoute().params;

  const currentPage = ref(Number(RoutePage));

  watch(
    () => RoutePage,
    (newInitialPage) => {
      currentPage.value = newInitialPage;
    },
    { immediate: true }
  );

  const totalPages = computed(() => {
    return Math.ceil(totalItems / itemsPerPage);
  });

  const pages = computed(() => {
    const pages = [];
    if (totalPages.value <= maxVisiblePages) {
      for (let i = 1; i <= totalPages.value; i++) {
        pages.push(i);
      }
    } else {
      const visiblePages = maxVisiblePages - 2;
      let startPage;
      let endPage;
      if (currentPage.value <= Math.ceil(visiblePages / 2)) {
        startPage = 1;
        endPage = visiblePages;
      } else if (
        currentPage.value + Math.floor(visiblePages / 2) >=
        totalPages.value
      ) {
        startPage = totalPages.value - visiblePages + 1;
        endPage = totalPages.value;
      } else {
        startPage = currentPage.value - Math.floor(visiblePages / 2);
        endPage = currentPage.value + Math.ceil(visiblePages / 2) - 1;
      }
      pages.push(1);
      if (startPage > 2) {
        pages.push("...");
      }
      for (let i = startPage; i <= endPage; i++) {
        if (i !== 1 && i !== totalPages.value) {
          pages.push(i);
        }
      }
      if (endPage < totalPages.value - 1) {
        pages.push("...");
      }
      if (totalPages.value > 1) {
        pages.push(totalPages.value);
      }
    }
    return pages;
  });

  const goToPage = (page) => {
    if (
      typeof page === "number" &&
      page >= 1 &&
      page <= totalPages.value &&
      page !== currentPage.value
    ) {
      currentPage.value = page;
      push(`/pets/${page}`);
    }
  };

  return { pages, goToPage, currentPage, totalPages };
};
