import { defineStore } from 'pinia'

export const useStore = defineStore(
    'auth',
    () => {
        const user = ref({

        });
        const logIn = (data: any) => {
            user.value = data;
            isAuthed.value = true;
        }
        const logOut = () => {
            user.value = null as any;
            isAuthed.value = false;
        }
        const isAuthed = ref(false);
        return { isAuthed, user, logIn, logOut }
    },
    {
        persist: true,
    }
)