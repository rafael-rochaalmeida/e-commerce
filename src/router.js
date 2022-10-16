import Vue from "vue";
import Router from "vue-router";

import TheHome from "@/views/TheHome.vue";

Vue.use(Router);

export default new Router({

    routes: [
        {
            path: "/", 
            component: TheHome
        }
    ]

});