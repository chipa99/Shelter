import { defineStore } from 'pinia'

export const useStore = defineStore(
    'auth',
    () => {
        const user = ref(null);
        // {
        // "_id": {
        //     "$oid": "67f54d9f6a649bae025dded2"
        // }
        // }
        function logIn(data: any) {
            user.value = data;
            isAuthed.value = true;
        }
        const isAuthed = ref(false);
        return { isAuthed, user, logIn }
    },
    {
        persist: true,
    }
)