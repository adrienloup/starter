<template>
  <div>
	  <nav>
      <router-link to="/">
        <img width="200" src="../../src/images/webpack.svg" alt="Webpack">
      </router-link>&nbsp;&nbsp;
      <div>
        <router-link to="/">Home</router-link>&nbsp;&nbsp;
        <router-link to="/about">About</router-link>&nbsp;&nbsp;
        <router-link to="/users">Web API</router-link>&nbsp;&nbsp;
      </div>
    </nav>
    <router-view />
    <div>
      <p>A demo of a Single-page application made in Vue.js.</p>
    </div>
  </div>
</template>
