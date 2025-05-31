import { defineStore } from "pinia";

export const useStore = defineStore(
  "auth",
  () => {
    const user = ref(null);
    const logIn = (data) => {
      user.value = data;
      isAuthed.value = true;
    };
    const logOut = () => {
      user.value = null;
      isAuthed.value = false;
    };
    const isAuthed = ref(false);
    return { isAuthed, user, logIn, logOut };
  },
  {
    persist: true,
  }
);
