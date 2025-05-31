import { useStore } from "~/stores/auth";
export const useHeaderData = (isMain) => {
  const { isAuthed, logOut } = useStore();
  const isOpened = ref(false);
  const isSticky = ref(false);
  const isVisible = ref(true);
  const isScrolling = ref(false);
  let lastScrollTop = 0;

  const handleScroll = () => {
    isScrolling.value = true;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      isVisible.value = false;
    } else {
      isVisible.value = true;
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    isSticky.value = scrollTop > 50;
    isVisible.value = !scrollTop > 50 ? true : isVisible.value;
  };
  const getOut = async () => {
    logOut();
    useRoute().path == "/profile"
      ? await navigateTo("/pets/1")
      : await navigateTo(useRoute().path, useRoute().params);
    reloadNuxtApp();
  };
  const headerClasses = computed(() => {
    return {
      "fixed top-0 left-0 bg-opacity-50 backdrop-blur-md backdrop-brightness-[0.65]":
        isSticky.value,
      "-translate-y-full": !isVisible.value && isScrolling.value,
      "bg-transparent absolute": !isSticky.value,
      "backdrop-blur-md": isOpened.value,
      "!bg-main dark:!bg-[#232d46] dark:!border-b-2 dark:!border-b-thirdary":
        isMain,
    };
  });
  const logoClasses = computed(() => ({
    "!text-black dark:!text-white": isMain,
  }));
  const navClasses = computed(() => ({
    "max-lg:size-0": !isOpened.value,
    "size-[17rem] py-8": isOpened.value,
  }));
  const linkClasses = (index) => ({
    hidden: index === 0 && !isOpened.value,
    "max-lg:opacity-0": !isOpened.value,
    "!font-light !text-gray-600 hover:!text-black dark:!text-gray-300 dark:hover:!text-white":
      isMain,
    "hover:text-white text-gray-300": !isSticky.value,
    "hover:text-gray-300 text-white lg:text-gray-300 lg:hover:text-white":
      isSticky.value,
  });
  const burgerButtonClasses = computed(() => ({
    "before:rotate-45 before:mt-0 after:-mt-1 after:rotate-[135deg] !bg-transparent":
      isOpened.value,
    "before:-mt-[8px] after:mt-[12px]": !isOpened.value,
    "bg-gray-700 after:bg-gray-700 before:bg-gray-700 dark:bg-white dark:after:bg-white dark:before:bg-white":
      isMain,
    "after:bg-white before:bg-white": !isMain,
    "bg-white": !isMain && !isOpened.value,
  }));

  return {
    isAuthed,
    isOpened,
    isSticky,
    handleScroll,
    headerClasses,
    logoClasses,
    navClasses,
    linkClasses,
    burgerButtonClasses,
    getOut,
  };
};
