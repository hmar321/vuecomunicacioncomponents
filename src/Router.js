import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/Home.vue";
import PadreNumerosComponent from "./components/PadreNumeros.vue";
import PadreDeportesComponent from "./components/PadreDeportes.vue";
import ComicsComponent from "./components/Comics.vue";
import SeleccionMultipleComponent from "./components/SeleccionMultiple.vue";
import CheckBoxComponent from "./components/CheckBox.vue";
import NumeroDobleComponent from "./components/NumeroDoble.vue";
import TablaMultiplicarComponent from "./components/TablaMultiplicar.vue";

const routes = [
    { path: "/", component: HomeComponent },
    { path: "/numeros", component: PadreNumerosComponent },
    { path: "/deportes", component: PadreDeportesComponent },
    { path: "/comics", component: ComicsComponent },
    { path: "/multiple", component: SeleccionMultipleComponent },
    { path: "/checkbox", component: CheckBoxComponent },
    { path: "/doble/:numero?", component: NumeroDobleComponent },
    { path: "/tabla/:numero?", component: TablaMultiplicarComponent },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;