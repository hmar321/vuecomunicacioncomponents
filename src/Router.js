import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/Home.vue";
import PadreNumerosComponent from "./components/PadreNumeros.vue";
import PadreDeportesComponent from "./components/PadreDeportes.vue";
import ComicsComponent from "./components/Comics.vue";
const routes = [
    { path: "/", component: HomeComponent },
    { path: "/numeros", component: PadreNumerosComponent },
    { path: "/deportes", component: PadreDeportesComponent },
    { path: "/comics", component: ComicsComponent },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;