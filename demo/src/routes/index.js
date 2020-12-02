import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home';
import Player from '../views/Player';
import Recorder from '../views/Recorder';

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/player",
      component: Player
    },
    {
      path: "/recorder",
      component: Recorder
    }
  ]
});

export default router;
