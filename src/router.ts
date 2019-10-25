import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Broker from "./views/Broker.vue";
import Brokeraevel from "./views/Brokeraevel.vue";
import Invitation from "./views/Invitation.vue";
import Register from "./views/Register.vue";
import Payment from "./views/Payment.vue";

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
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/payment",
      name: "payment",
      component: Payment
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
