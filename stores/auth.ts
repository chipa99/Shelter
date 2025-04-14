import { defineStore } from 'pinia'

export const useStore = defineStore(
    'main',
    () => {
        const user = ref({
            "_id": {
                "$oid": "67f54d9f6a649bae025dded2"
            }
        });
        const isAuthed = ref(false);
        return { isAuthed, user }
    },
    {
        persist: true,
    }
)