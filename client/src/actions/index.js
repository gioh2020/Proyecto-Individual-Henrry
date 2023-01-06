import axios from "axios";

export function getCountries(){
    return async function(dispatch){
        var json = await axios.get("/countries");
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: json.data
        })
    }
}

export function filterByContinent(payload){
    return{
        type: 'FILTER_BY_CONTINENT',
        payload
    }
}

export function filterByname(payload){
    return{
        type: 'FILTER_BY_NAME',
        payload
    }
}
export function searchByname(payload){
    return async function(dispatch){
        var json = await axios.get(`/countries?name=${payload}`);
        return dispatch({
            type: 'GET_COUNTRY',
            payload: json.data
        })
    }
    
}
export function searchById(payload){
    return async function(dispatch){
        var json = await axios.get(`/countries/${payload}`);
        return dispatch({
            type: 'GET_COUNTRY_ID',
            payload: json.data
        })
    }
}    
export function searchClocks(payload){
    return async function(dispatch){
        var json = await axios.get(`https://timezone.abstractapi.com/v1/current_time/?api_key=9ff9fd32c2814e88ba0096936697b8c3&location=${payload}`);
        return dispatch({
            type: 'GET_CLOCKS',
            payload: json.data
        })
    }
}   

export function postActivity(payload){
    console.log(payload)
    return async function(dispatch){
        var response = await axios.post('/activities', payload)
        return response
    }
}

export function filterByActivity(payload){
    return{
        type: 'FILTER_BY_ACTIVITY',
        payload
    }
}
