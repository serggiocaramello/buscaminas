<template>
  <div id="app">
    <h1>Bucaminas</h1>
    <Form />
  </div>
</template>

<script>
import Form from "@/components/Form";
export default {
  name: "App",
  components: { Form },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
