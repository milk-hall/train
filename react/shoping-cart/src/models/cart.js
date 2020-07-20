export default {
  namespace: "cart",

  state: {
    carts: null,
  },

  subscriptions: {},

  effects: {
    // *getData(action, { call, put }) {
    //   const data = localStorage.getItem("cart");
    //   yield put({ type: "save", payload: data });
    // },
  },

  reducers: {
    getData(state, { payload }) {
      // 保存数据到 state
      const data = localStorage.getItem("cart");
      if (data) {
        return { carts: JSON.parse(localStorage.getItem("cart")) };
      }
      return { carts: null };
    },
    add(state, { payload: data }) {
      const { carts } = state;
      if (!carts && data) {
        const newData = { ...data, count: 1 };
        const json = JSON.stringify([newData]);
        localStorage.setItem("cart", json);
        return { carts: [newData] };
      }
      const findIndex = carts.findIndex((value) => {
        return value.id === data.id && value.size === data.size;
      });
      if (findIndex !== -1) {
        let newArr = [...carts];
        newArr[findIndex] = {
          ...newArr[findIndex],
          count: newArr[findIndex].count + 1,
        };
        const json = JSON.stringify(newArr);
        localStorage.setItem("cart", json);
        return { carts: newArr };
      }
      const newData = { ...data, count: 1 };
      const json = JSON.stringify([...carts, newData]);
      localStorage.setItem("cart", json);
      return { carts: [...carts, newData] };
    },
    changeCount(state, { payload }) {
      const { carts } = state;
      const { count, data } = payload;
      const findIndex = carts.findIndex((value) => {
        return value.id === data.id && value.size === data.size;
      });
      let newArr = [...carts];
      newArr[findIndex] = {
        ...newArr[findIndex],
        count: count,
      };
      const json = JSON.stringify(newArr);
      localStorage.setItem("cart", json);
      return { carts: newArr };
    },
    clear(state, { payload: data }) {
      localStorage.setItem("cart", []);
      return { ...state, carts: null };
    },
  },
};
