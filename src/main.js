/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue';
import App from './App.vue';
import router from './Router';
import PrimeVue from 'primevue/config';
import MultiSelect from 'primevue/multiselect';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row'; 

var app =createApp(App);

app.use(PrimeVue);
app.use(router);

app.component('MultiSelect', MultiSelect);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);

app.mount('#app')
