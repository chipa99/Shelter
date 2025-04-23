// import { useStore } from "~/stores/auth";

// export default defineNuxtRouteMiddleware((to) => {
//   const { isAuthed } = useStore();
//   if (process.client) {
//     const targetRoute = isAuthed ? "/profile" : "/login";
//     if (to.path !== targetRoute) {
//       return navigateTo(targetRoute);
//     }
//   }
// });
