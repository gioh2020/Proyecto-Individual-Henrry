import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { searchClocks, getCharacters} from "../../actions";


function Clocks(){
    const dispatch = useDispatch()
     
    const clocks = useSelector((state)=>state.clocks)
    const country = useSelector((state)=> state.countries)
    
    let value = ''
    const [infoClocks, setInfoClocks ]= useState([])
    const [countryName, setCountryName] = useState('')
    const [refre, setRefre] = useState(false)
    // dispatch(searchClocks(countryName))

    const hour = Object.values(clocks)
    const h = hour[0]
    let l = []
    if(typeof clocks.datetime === 'string'){
       l =  h.split(' ')

    }
    // useEffect(()=>{dispatch(searchClocks(countryName))},[])
 
    const region = country?.find((region)=>region.name === refre)
    // if(countryName.length>0){
    //     dispatch(searchClocks(countryName))
    // }
   
   
    const allClocks =
        {
            clock: l[1],
            name: region?region.name:'',
            flag: region?region.flag:''
        }
    
        

console.log("===",clocks ,'***',allClocks, '--',infoClocks)


    const handleClick = (event) => {  
        
        
        setInfoClocks([...infoClocks, allClocks])
    }

    const handleInput = (event) =>{ 
        dispatch(searchClocks(event.target.value))
        setRefre(event.target.value)
    }
     

        return(
            <div>
                <div>
                    
                    <select name="" id=""onChange={handleInput}>
                        <option value="false">-----</option>
                        {
                            country?.map(elemnt=>{
                                return(
                                    <option value={elemnt.name}>{elemnt.name}</option>
                                    )
                                })
                            }
                    </select>
                            <button onClick={handleClick} >Serach</button>
                </div>
                <div>
                    {infoClocks?.map(hour =>{
                        return(
                            <div>

                                <h1>{hour.name}</h1>
                                <img src={hour.flag} alt="" width='400px' />
                                <h1>{hour.clock}</h1>
                            </div>

                        )
                    })}
                    
                </div>
            </div>
        )

    }

export default Clocks