import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default {
    state() {
        return {
            list: [{
                "name": "Indonesian Rupiah",
                "code": "IDR",
                // "icon": "rupiah.png"
            },
            {
                "name": "Malaysian Ringgit",
                "code": "MYR",
                // "icon": "ringgit.png"
            },
            {
                "name": "New Zealand Dollar",
                "code": "NZD",
                // "icon": "nzd.png"
            },
            {
                "name": "Hongkong Dollar",
                "code": "HKD",
                // "icon": "hkd.png"
            }, {
                "name": "Great Britain Pound",
                "code": "GBP",
                // "icon": "gbp.png"
            }, {
                "name": "Euro",
                "code": "EUR",
                // "icon": "euro.png"
            }, {
                "name": "Thailand Baht",
                "code": "THB",
                // "icon": "baht.png"
            }, {
                "name": "Australian Dollar",
                "code": "AUD",
                // "icon": "aud.png"
            }, {
                "name": "Chinese Yuan Renminbi",
                "code": "CNY",
                // "icon": "yuan.png"
            }, {
                "name": "Japanese Yen",
                "code": "YEN",
                // "icon": "yen.png"
            },
            {
                "name": "US Dollar",
                "code": "USD",
                // "icon": "usd.png"
            }]
        }
    },
    mutations,
    getters,
    actions
}