import { defineStore } from 'pinia'

export const useStore = defineStore(
    'auth',
    () => {
        const user = ref({
            "_id": {
                "$oid": "6808d3d6e76f829d591b6c11"
            },
            "firstname": "Savely",
            "surname": "Suslova",
            "mail": "savelij@gmail.com",
            "password": "lolkekda2002",
            "description": "Good one"
        });
        const logIn = (data: any) => {
            user.value = data;
            isAuthed.value = true;
        }
        const logOut = () => {
            user.value = null as any;
            isAuthed.value = false;
        }
        const isAuthed = ref(true);
        return { isAuthed, user, logIn, logOut }
    },
    {
        persist: true,
    }
)