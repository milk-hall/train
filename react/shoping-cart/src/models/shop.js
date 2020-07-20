import request from "../utils/request";
export default {
  namespace: "shop",

  state: {
    products: [],
  },

  subscriptions: {},

  effects: {
    *getData(action, { call, put }) {
      const data = yield call(() => request.get("/products.json"));
      yield put({ type: "save", payload: data });
    },
    *filter({ payload }, { call, put }) {
      const data = yield call(() => request.get("/products.json"));
      const filterData = data.products.filter((item) =>
        item.availableSizes.includes(payload)
      );
      yield put({ type: "save", payload: { products: filterData } });
    },
  },

  reducers: {
    save(state, { payload: data }) {
      // 保存数据到 state
      return { ...state, ...data };
    },
  },
};
