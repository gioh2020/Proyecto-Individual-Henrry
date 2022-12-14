
const initialState = {
    countries: [],
    allcountries: [],
    countriesById: [],
    clocks: []
}

function rootReducer (state = initialState, action){
    switch(action.type){
        case "GET_COUNTRIES":
            
            return{
                ...state,
                countries: action.payload,
                allcountries: action.payload   
            }
            case "GET_COUNTRY_ID":
            return{
                ...state,
                countriesById:action.payload,
                
            }
                case "GET_COUNTRY":
                    return {
                        ...state,
                        countries: action.payload                
                }
                
                    case 'FILTER_BY_CONTINENT':
                      
                        const copyCountries = state.allcountries
                        const continentFilter = action.payload === "All"? state.allcountries :
                        copyCountries.filter(continent => continent.continent === action.payload)
                        return{
                            ...state,
                            countries: continentFilter
                        }
                        case 'FILTER_BY_NAME':
                            let  sortCountries = []
                            if(action.payload === 'nameAz'){
                                sortCountries =  state.countries.sort(function(a, b){
                                    if (a.name > b.name) {
                                        return 1
                                    }
                                    if (a.name < b.name) {
                                        return -1
                                    }
                                    return 0
                                })
                            }
                            if(action.payload === 'nameZa'){
                                sortCountries =  state.countries.sort(function(a, b){
                                    if (a.name > b.name) {
                                        return -1
                                    }
                                    if (a.name < b.name) {
                                        return +1
                                    }
                                    return 0
                                })
                            }
                            if(action.payload === 'populationMin'){
                                sortCountries =  state.countries.sort(function(a, b){
                                    if (a.population > b.population) {
                                        return 1
                                    }
                                    if (a.population < b.population) {
                                        return -1
                                    }
                                    return 0
                                })
                            }
                            if(action.payload === 'populationMax'){
                                sortCountries =  state.countries.sort(function(a, b){
                                    if (a.population > b.population) {
                                        return -1
                                    }
                                    if (a.population < b.population) {
                                        return +1
                                    }
                                    return 0
                                })
                            }
                            if(action.payload === 'reset'){
                                sortCountries = state.countries
                            }
                            return {
                                ...state,
                                countries: sortCountries
                            }
                            case "GET_CLOCKS":
                                return {
                                    ...state,
                                    clocks: action.payload                
                                }
                                case 'FILTER_BY_ACTIVITY':
                                    const copyActivity = state.allcountries
                                    const activityFilter = []
                                    if(action.payload){
                                        copyActivity.forEach(activity => {
                                            activity.activities?.forEach(element => {    
                                              if(element.name === action.payload){
                                                activityFilter.push(activity)
                                              }  
                                          });
                                         
                                        })
                                    }
                                    return{
                                        ...state,
                                        countries: activityFilter
                                    }        
                        
            default:
                return {...state}   

    }
}


 export default rootReducer