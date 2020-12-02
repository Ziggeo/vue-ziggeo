
<template>
  <div id='nav'>
    <router-link to='/'> Home </router-link>
    &nbsp; / &nbsp;
    <router-link to='/player'> Player </router-link>
    &nbsp; / &nbsp;
  <router-link to='/recorder'> Recorder </router-link>
  </div>

  <router-view></router-view>
</template>

<script>

export default {
  name: 'Ziggeo Vue3 Demo',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
