<template>
  <div class="form__container">
    <label for="name"
      >Nombre<input
        class="form__name"
        type="text"
        name="name"
        v-model="playerName"
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
    <h2>Matriz con coordenadas de las minas</h2>
    <p>Debo evitar que se repitan las coordenadas de las minas aun.</p>
    <pre>{{ mines }}</pre>
    <h2>Matriz</h2>
    <p>
      Los ceros representan celdas sin minas y los 1 representan celdas con
      minas.
    </p>
    <pre>{{ matrix }}</pre>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Form",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      mines: (state) => state.board.mines,
      amountMines: (state) => state.board.amountMines,
      matrix: (state) => state.board.matrix,
    }),
    // Si vamos a trabajar una variable del state con v-model, hay que llamarla así.
    playerName: {
      get() {
        return this.$store.state.board.playerName;
      },
      set(value) {
        this.SET_NAME(value);
      },
    },
    rows: {
      get() {
        return this.$store.state.board.rows;
      },
      set(value) {
        this.SET_ROWS(value);
      },
    },
    cols: {
      get() {
        return this.$store.state.board.cols;
      },
      set(value) {
        this.SET_COLS(value);
      },
    },
  },
  methods: {
    ...mapMutations("board", [
      "SET_NAME",
      "SET_ROWS",
      "SET_COLS",
      "SET_AMOUNT_MINES",
      "SET_MINES",
      "SET_MATRIX",
    ]),
    start() {
      this.SET_ROWS(this.rows);
      this.SET_COLS(this.cols);
      this.SET_AMOUNT_MINES();
      this.createAllMines();
      this.createMatrix();
    },

    createAllMines() {
      for (let index = 0; index < this.amountMines; index++) {
        let mine = this.createMine();
        this.SET_MINES(mine);
      }
    },
    createMine() {
      return {
        row: this.set_random(0, this.rows),
        col: this.set_random(0, this.cols),
      };
    },
    set_random(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    createMatrix() {
      let matrix = [];
      for (let currRow = 0; currRow < this.rows; currRow++) {
        let matrixRow = [];
        for (let currCol = 0; currCol < this.cols; currCol++) {
          const resultMine = this.mines.filter(
            (mine) => mine.row == currRow && mine.col == currCol
          );
          resultMine.length > 0 ? matrixRow.push(1) : matrixRow.push(0);
        }
        matrix.push(matrixRow);
      }
      this.SET_MATRIX(matrix);
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
