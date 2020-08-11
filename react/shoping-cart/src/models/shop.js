import request from "../utils/request";
export default {
  namespace: "shop",

  state: {
    products: [],
  },

  subscriptions: {},

  effects: {
    *getData(action, { call, put }) {
      yield new Promise((resolve) => { setTimeout(resolve,2000); });
      const data = yield call(() => request.get("./products.json"));
      yield put({ type: "save", payload: data });
    },
    *filter({ payload }, { call, put }) {
      const data = yield call(() => request.get("./products.json"));
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
    sort(state, { payload }) {
      const products = [...state.products];
      switch (payload.key) {
        case "up":
          products.sort((a, b) => a.price - b.price)
          break;
        case "down":
          products.sort((a, b) => b.price - a.price)
          break;
      }
      return { ...state, products };
    }
  },
};
