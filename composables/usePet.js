import { useStore } from "~/stores/auth";
export const usePet = () => {
  const { id } = useRoute().params;
  const store = useStore();
  const isFavorite = ref(store.user ? store.user.favorite.includes(id) : false);
  const getPet = async () => (await useFetch(`/api/${id}`)).data.value;
  const addToFavorite = async () => {
    if (store.isAuthed === false || !store.user) {
      await navigateTo("/login");
      return;
    }
    const action = isFavorite.value === true ? "delete" : "add";
    const { data } = await useFetch("/api/favorite", {
      method: "PATCH",
      body: {
        _id: id,
        action,
        userId: store.user._id,
      },
    });
    isFavorite.value = !isFavorite.value;
    store.logIn(data.value);
  };
  return { isFavorite, getPet, addToFavorite };
};
