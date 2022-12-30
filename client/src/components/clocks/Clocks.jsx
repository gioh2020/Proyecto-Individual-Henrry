import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { searchClocks, getCharacters, filterByname} from "../../actions";
import styles from './Clocks.module.css'
import clock from './images/pngeggg.png'


function Clocks(){

    const dispatch = useDispatch()
    const clocks = useSelector((state)=>state.clocks)
    const country = useSelector((state)=> state.countries)

    useEffect(()=>{dispatch(getCharacters())},[])
    dispatch(filterByname("nameAz"))

    
    const [infoClocks, setInfoClocks ]= useState([])
    const [refre, setRefre] = useState("")
     

    let countryClock = clocks.datetime?.split(' ')


   
 
    const region = country?.find((region)=>region.name === refre)

    const allClocks =
        {
            clock: countryClock? countryClock[1]: null ,
            name: region?region.name:'',
            flag: region?region.flag:''
        }
    
    const handleClick = (event) => {  
        setTimeout(() => {
            if(event.target.value !== "")setInfoClocks([...infoClocks, allClocks]);
        },1500);
        
    }

    const handleInput = (event) =>{ 
        if(event.target.value !== ""){
            dispatch(searchClocks(event.target.value))
            setRefre(event.target.value)
        };
    }
     

        return(
            <div>
                <div>  
                    <select name="" id=""onChange={handleInput}>
                        <option value="">-----</option>
                        {
                            country?.map(elemnt=>{
                                return(
                                    <option value={elemnt.name} key={elemnt.id}>{elemnt.name}</option>
                                    )
                                })
                            }
                    </select>
                    <button onClick={handleClick} value = {refre}>Serach</button>
                </div>

                <div className={styles.infoClock}>
                     {infoClocks?.map(hour =>{
                         return(
                            <div className={styles.card} key={hour.name}>

                                <img src={hour.flag} alt="" width='400px' />
                                <h1 className={styles.world}>{hour.name}</h1>
                                <img src={clock} className={styles.imgClock} alt="" />

                                <div className={styles.element} >
                                    {hour.clock?.slice(0,2)} 
                                    <h4 className={styles.elemento}>:</h4> 
                                    {hour.clock?.slice(3,5)}
                                    {hour.clock?.slice(0,2) > 12? <h6>PM</h6> :<h6> AM</h6>} 
                                </div> 
                            </div>
                        )
                     })}
                </div>
             </div>
        )

    }

export default Clocks