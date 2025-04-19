import { defineStore } from 'pinia'

export const useStore = defineStore(
    'main',
    () => {
        const user = ref({
            "_id": {
                "$oid": "67f54d9f6a649bae025dded2"
            }
        });
        const logIn = (data: any) => {
            user.value = data;
            isAuthed.value = true;
        }
        const isAuthed = ref(true);
        return { isAuthed, user, logIn }
    },
    {
        persist: true,
    }
)