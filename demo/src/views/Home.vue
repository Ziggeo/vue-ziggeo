<template>
  <h1>{{ title }}</h1>
  <ul>
    <li v-for="route in allRoutes" :key="route.title">
      <router-link :to="route.path"> {{ route.title }} </router-link>
    </li>
  </ul>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Home',
  setup() {
    let title = ref("Ziggeo Examples: ");
    let allRoutes = ref([
      {
        path: "/",
        title: "Home"
      },
      {
        path: "/recorder",
        title: "Recorder Page"
      },
      {
        path: "/player",
        title: "Player Page"
      }
    ])

    return {
      title,
      allRoutes
    };
  }

}
</script>
