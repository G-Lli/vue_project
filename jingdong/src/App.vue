<template>
  <div id="app">
    <div id="nav">
<!--      <router-link to="/login">登录</router-link> |-->
<!--      <router-link to="/register">注册</router-link>-->
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus" scope>
#app{
  font-family :Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing :grayscale;
  text-align: center;
  color: #2c3e50;

  font-size: 15px;
}
#nav a{
  font-width: bold;
  color: #2c3e50;
  router-link-exact-active:'hover';
  color:#42b983

}
</style>
