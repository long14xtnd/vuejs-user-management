<template>
  <h1>Child LifeCycle</h1>
</template>

<script>
export default {
  mounted() {
    this.helloVue=setInterval(() => {
      console.log("hello vuejs");
    }, 1000);
  },
  beforeUnmount() {
      clearInterval(this.helloVue);
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style>
</style>