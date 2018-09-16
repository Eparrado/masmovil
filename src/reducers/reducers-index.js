import { FETCH_DATA } from '../actions/actions-index'

const initialState = {
    mobilesCatalog: []
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                mobilesCatalog: action.payload
            }
        default:
            return state
    }
}

export default mainReducer