<template>
  <div class="form__container">
    <label for="name"
      >Nombre<input class="form__name" type="text" name="name" v-model="name"
    /></label>
    <label for="name"
      >Filas<input
        class="form__numberRows"
        type="number"
        name="rows"
        v-model.number="rows"
    /></label>
    <label for="name"
      >Columnas<input
        class="form__numberCols"
        type="number"
        name="columns"
        v-model.number="cols"
    /></label>
    <button class="form__play" @click="start">Jugar</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Form",
  data() {
    return {
      name: null,
      rows: null,
      cols: null,
    };
  },
  computed: {},
  methods: {
    ...mapMutations("board", ["SET_NAME", "SET_ROWS", "SET_COLS"]),
    start() {
      this.SET_NAME(this.name);
      this.SET_ROWS(this.rows);
      this.SET_COLS(this.cols);
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  margin-left: 0.75em;
  margin-right: 2em;
  padding: 0.5em 1em;
}

button {
  padding: 0.5em 2em;
}
</style>
