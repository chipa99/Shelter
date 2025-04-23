import { useStore } from "~/stores/auth";

export const useProfilePage = () => {
  const { user } = useStore();
  const navs = ref([
    {
      label: "Профиль",
      icon: "iconamoon:profile-light",
      isActive: true,
    },
    {
      label: "Понравившиеся",
      icon: "hugeicons:folder-favourite",
      isActive: false,
    },
    {
      label: "Встречи",
      icon: "healthicons:group-discussion-meeting-outline",
      isActive: false,
    },
  ]);
  const NavClick = (index) => {
    navs.value.forEach((value, indexFunc) =>
      indexFunc == index ? (value.isActive = true) : (value.isActive = false)
    );
  };
  const pets = ref([]);
  const getPets = async () => {
    const { data } = await useFetch("/api", { query: { skip: 0, query: {} } });
    pets.value = data.value;
  };
  getPets();
  return { navs, NavClick, info: user, pets: pets.pets };
};
