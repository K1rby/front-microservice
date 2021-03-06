import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Accueil from "../views/Accueil.vue";
import Inscription from "../views/Inscription";
import axios from 'axios'
import VueAxios from 'vue-axios'
import HistoriqueCommande from "../views/HistoriqueCommande";
import Commande from "../views/Commande";
import vuex from 'vuex'
import DetailProduct from "../views/DetailProduct";
import moment from "vue-moment"

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(vuex);
Vue.use(moment);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: Inscription
  },
  {
    path: '/historique_commande',
    name: 'HistoriqueCommande',
    component: HistoriqueCommande
  },
  {
    path: '/accueil',
    name: 'accueil',
    component: Accueil
  },
  {
    path: '/commande/:idProduit',
    props: true,
    name: 'commande',
    component: Commande
  },
  {
    path: '/detail/:idProduit',
    props: true,
    name: 'detailProduct',
    component: DetailProduct
  },
];

const router = new VueRouter({
  routes
})

export default router
