
const initialState = {
    countries: [],
    allcountries: []
}

function rootReducer (state = initialState, action){
    switch(action.type){
        case "GET_COUNTRIES":
            
            return{
                ...state,
                countries: action.payload,
                allcountries: action.payload   
            }
            case 'FILTER_BY_CONTINENT':
                console.log(action.payload, state.countries)
                const copyCountries = state.allcountries
                const continentFilter = action.payload === "All"? copyCountries : copyCountries.filter(continent => continent.continent === action.payload)
                return{
                    ...state,
                    countries: continentFilter


                }
            default:
                return {...state}   

    }
}


 export default rootReducer