import { FETCH_DATA } from '../actions/actions-index'
import { SHOW_PHONE_DETAILS } from '../actions/actions-index'

const initialState = {
    mobilesCatalog: [],
    loading: true,
    hidden: true
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                mobilesCatalog: action.payload,
                loading: !state.loading

            }
        case SHOW_PHONE_DETAILS:
            return {
                ...state,
                hidden: action.payload
            }
        default:
            return state
    }
}

export default mainReducer
