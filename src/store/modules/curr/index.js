import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default {
  state() {
    return {
      list: [
        {
          name: "Indonesian Rupiah",
          code: "IDR",
          rate: "-",
          // "icon": "rupiah.png"
        },
        {
          name: "Malaysian Ringgit",
          code: "MYR",
          rate: "-",
          // "icon": "ringgit.png"
        },
        {
          name: "New Zealand Dollar",
          code: "NZD",
          rate: "-",
          // "icon": "nzd.png"
        },
        {
          name: "Hongkong Dollar",
          code: "HKD",
          rate: "-",
          // "icon": "hkd.png"
        },
        {
          name: "Great Britain Pound",
          code: "GBP",
          rate: "-",
          // "icon": "gbp.png"
        },
        {
          name: "Euro",
          code: "EUR",
          rate: "-",
          // "icon": "euro.png"
        },
        {
          name: "Thailand Baht",
          code: "THB",
          rate: "-",
          // "icon": "baht.png"
        },
        {
          name: "Australian Dollar",
          code: "AUD",
          rate: "-",
          // "icon": "aud.png"
        },
        {
          name: "Chinese Yuan Renminbi",
          code: "CNY",
          rate: "-",
          // "icon": "yuan.png"
        },
        {
          name: "Japanese Yen",
          code: "JPY",
          rate: "-",
          // "icon": "yen.png"
        },
        {
          name: "US Dollar",
          code: "USD",
          rate: "-",
          // "icon": "usd.png"
        },
      ],
    };
  },
  mutations,
  getters,
  actions,
};
