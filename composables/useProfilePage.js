import { useStore } from "~/stores/auth";

export const useProfilePage = () => {
  const { user } = useStore();
  const navs = ref([
    {
      label: "Профиль",
      icon: "iconamoon:profile-light",
      isActive: false,
    },
    {
      label: "Понравившиеся",
      icon: "hugeicons:folder-favourite",
      isActive: false,
    },
    {
      label: "Встречи",
      icon: "healthicons:group-discussion-meeting-outline",
      isActive: true,
    },
  ]);
  const handle = (index) => {
    navs.value.forEach((value, indexFunc) => {
      indexFunc == index ? (value.isActive = true) : (value.isActive = false);
    });
  };
  const getPets = async () => {
    const { data } = await useFetch("/api", { query: { skip: 0, query: {} } });
    const favorite = ref([]);
    data.value.pets.forEach((pet) => {
      user.favorite.includes(pet._id) ? favorite.value.push(pet) : false;
    });
    return favorite.value;
  };
  return { info: user, getPets, navs, handle };
};
