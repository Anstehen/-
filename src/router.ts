import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Broker from "./views/Broker.vue";
import Brokeraevel from "./views/Brokeraevel.vue";
import Invitation from "./views/Invitation.vue";
import R from "./views/R.vue";
import Payment from "./views/Payment.vue";
import Aggreement from "./views/Aggreement.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/broker",
      name: "broker",
      component: Broker
    },
    {
      path: "/brokeraevel",
      name: "brokeraevel",
      component: Brokeraevel
    },
    {
      path: "/invitation",
      name: "invitation",
      component: Invitation
    },
    {
      path: "/r",
      name: "r",
      component: R
    },
    {
      path: "/payment",
      name: "payment",
      component: Payment
    },
    {
      path: "/aggreement",
      name: "aggreement",
      component: Aggreement
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
