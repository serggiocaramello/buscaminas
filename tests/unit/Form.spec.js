import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import createStoreConfig from "./__mocks__/storeConfig";
import Form from "@/components/Form.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Form.vue", () => {
  let store;

  beforeEach(() => {
    const storeConfig = createStoreConfig();
    store = new Vuex.Store(storeConfig);
  });

  it("Verify default values", () => {
    expect(store.getters["board/getCurrentName"]).toStrictEqual(null);
    expect(store.getters["board/getCurrentRows"]).toStrictEqual(null);
    expect(store.getters["board/getCurrentCols"]).toStrictEqual(null);
    expect(store.getters["board/getMinRows"]).toStrictEqual(2);
    expect(store.getters["board/getMinCols"]).toStrictEqual(5);
  });

  it("Verify setting name", () => {
    const wrapper = mount(Form, { store, localVue });
    wrapper.find(".form__name").setValue("John");
    wrapper.find(".form__play").trigger("click");
    console.log(store.state.board);
    expect(store.state.board.playerName).toBe("John");
  });

  it("Verify setting min rows value", () => {
    const wrapper = mount(Form, { store, localVue });
    wrapper.find(".form__numberRows").setValue(0);
    wrapper.find(".form__play").trigger("click");
    expect(store.getters["board/getCurrentRows"]).toBe(2);
  });

  it("Verify setting rows", () => {
    const wrapper = mount(Form, { store, localVue });
    wrapper.find(".form__numberRows").setValue(10);
    wrapper.find(".form__play").trigger("click");
    expect(store.getters["board/getCurrentRows"]).toBe(10);
  });

  it("Verify setting min cols value", () => {
    const wrapper = mount(Form, { store, localVue });
    wrapper.find(".form__numberCols").setValue(0);
    wrapper.find(".form__play").trigger("click");
    expect(store.getters["board/getCurrentCols"]).toBe(5);
  });

  it("Verify setting cols", () => {
    const wrapper = mount(Form, { store, localVue });
    wrapper.find(".form__numberCols").setValue(8);
    wrapper.find(".form__play").trigger("click");
    expect(store.getters["board/getCurrentCols"]).toBe(8);
  });
});
