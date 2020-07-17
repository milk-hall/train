import axios from "axios";

export default {
  namespace: "shop",

  state: {
    products: [],
  },

  subscriptions: {},

  effects: {
    *getData(action, { call, put }) {
      const { data } = yield call(() => axios.get("/products.json"));
      yield put({ type: "add", payload: data });
    },
  },

  reducers: {
    add(state, { payload: data }) {
      // 保存数据到 state
      return { ...state,...data };
    },
  },
};
