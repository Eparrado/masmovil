import axios from 'axios';


export const FETCH_DATA = 'FETCH_DATA';

export function fetchMobilesData() {
    return (dispatch) => {
        axios.get('http://localhost:9000/phones')
            .then(response => {
                dispatch({ type: FETCH_DATA, payload: response.data })
            })
    }
}


export const SHOW_PHONE_DETAILS = 'SHOW_PHONE_DETAILS'

export function showPhoneDetails(event) {
    return (dispatch => {
        event.querySelector('.item--details').classList.toggle('hidden');
        dispatch({ type: SHOW_PHONE_DETAILS })
    })
}