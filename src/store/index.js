import { createStore } from 'vuex'

import CurrModules from './modules/curr/index'

const store = createStore({
    modules: {
        curr: CurrModules
    }
})

export default store