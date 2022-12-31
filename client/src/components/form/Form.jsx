import React from "react"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import styles from './Form.module.css'
import { getCharacters, postActivity, filterByname } from "../../actions"
import setFormError from "./setError"
import axios from "axios";


function Form(){
    const dispatch= useDispatch()
    useEffect(()=>{dispatch(getCharacters())},[])
    const countries = useSelector((state)=>state.countries)
    dispatch(filterByname("nameAz"))

    const [form,setForm] = useState({
        name: '',
        img: '',
        difficulty: 0,
        duration: 0,
        season: '',
        description: '',
        country: [],
        
    })

    const [error, setError]= useState({
        name: '',
        img: '',
        difficulty: '',
        duration: '',
        season: '',
        description:'',
        country: ''
    })
   
    let sub = false
    let errors = Object.keys(error).length
    if(form.name && form.img && form.difficulty&& form.duration&& form.season&& form.description && form.country.length && !errors){
        sub = true
     }else{sub = false} 

    const handleForm = (event => {
       
        
        setForm({...form, [event.target.name]: event.target.value})
        setError(setFormError({
            ...form,[event.target.name]: event.target.value}))  
           setTimeout(() => {
            
           }, ); 
           
    })


    const handleButtonAgre = (event) => {
        const newArray = [...form.country]
        if(event.target.value !== 'false')newArray.push(event.target.value);
       setForm({...form, country : newArray}) 
    }

    const handleDelete = (event) => {
        event.preventDefault()
        const newContry = form.country.filter((e)=> e !== event.target.value )
        setForm({...form, country: newContry})
     }

     const handleSubmit = async (event) => {
        event.preventDefault();
        const sendForm = form;
        const activity = sendForm.country?.map(evento => {
          return {
            name: sendForm.name,
            img: sendForm.img,
            difficulty: sendForm.difficulty,
            duration: sendForm.duration,
            season: sendForm.season,
            description: sendForm.description,
            idCountry: evento
          };
        });
        for (let i = 0; i < activity.length; i++) {
          const element = activity[i];
          try {
            const response = await axios.post('http://localhost:3001/activities', element);
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
        }
      };
    
    return(
        <div>

            <form onSubmit={handleSubmit}className={styles.forma} >
                <div>
                <select name="" id=""onChange={  handleButtonAgre} onClick={handleForm} >
                        <option value="false">-----</option>
                        {
                            countries?.map(elemnt=>{
                                return(
                                    <option value={elemnt.id} key={elemnt.id} onChange={handleButtonAgre}>{elemnt.name} </option>
                                    )
                                })
                            }
                </select>
                </div>
            <div>
                {
                    form.country?.map(id=>{
                        return(
                            <button onClick={handleDelete} key={id} value={id}>{id}</button>
                        )
                    })
                }
            </div>
            <p>{!form.country.length && 'Select country '}</p>

               <div>
                <label htmlFor="">ActivityName:</label>
                <input 
                type="text" 
                placeholder="Write activity name" 
                name="name"
                onChange={handleForm}
                value={form.name}
                />
                <p>{error.name && error.name }</p>
               </div> 

                <div>
                <label htmlFor="">Image:</label>
                <input 
                type="text" 
                placeholder="Write image link" 
                name="img"
                onChange={handleForm}
                value={form.img}
                />
                <p>{error.img && error.img }</p>
                </div>

                <div>
                <label htmlFor="">Difficulty:</label>
                <select 
                type="text" 
                name="difficulty"
                onChange={handleForm}
                value={form.difficulty}
                > 
                  <option value="">-----</option>
                    <option itemType="number" value="1">1</option>
                    <option itemType="number" value="2">2</option>
                    <option itemType="number" value="3">3</option>
                    <option itemType="number" value="4">4</option>
                    <option itemType="number" value="5">5</option>
                </select>
                <p>{error.difficulty && error.difficulty }</p>
                </div>

                <div>
                <label htmlFor="">Duration:</label>
                <input 
                type="number" 
                placeholder="Write activity duration 'Hours'" 
                name="duration"
                onChange={handleForm}
                value={form.duration}
                />
                 <p>{error.duration && error.duration }</p>
                </div>

                <div>
                <label htmlFor="">Season:</label>
                <select 
                type="text" 
                name="season"
                onChange={handleForm}
                value={form.season}
                > 
                    <option value="">-----</option>
                    <option itemType="number" value="Summer">Summer</option>
                    <option itemType="number" value="Autumn">Autumn</option>
                    <option itemType="number" value="Winter">Winter</option>
                    <option itemType="number" value="Spring">Spring</option>
                </select>
                <p>{error.season && error.season }</p>
                </div>

                <div>
                <textarea onChange={handleForm} 
                name="description"
                placeholder="Write activity description"
                value={form.description}
                maxLength="300"
                 >hola</textarea>
                 <p>{error.description && error.description }</p>
                </div>


             
                <button type='submit' disabled={!sub}  >sumit</button>

            </form>
        </div>
  
     
    )
}
export default Form