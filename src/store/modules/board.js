const state = {
  playerName: null,
  rows: null,
  cols: null,
  minRows: 2,
  minCols: 5,
};

const getters = {
  getCurrentName: (state) => {
    return state.playerName;
  },
  getCurrentRows: (state) => {
    return state.rows;
  },
  getCurrentCols: (state) => {
    return state.cols;
  },
  getMinRows: (state) => {
    return state.minRows;
  },
  getMinCols: (state) => {
    return state.minCols;
  },
};

const mutations = {
  SET_NAME: (state, name) => (state.playerName = name),
  SET_ROWS: (state, rows) => {
    rows >= state.minRows ? (state.rows = rows) : (state.rows = state.minRows);
  },
  SET_COLS: (state, cols) => {
    cols >= state.minCols ? (state.cols = cols) : (state.cols = state.minCols);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
