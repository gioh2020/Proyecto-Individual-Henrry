import React from "react"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import styles from './Form.module.css'
import { getCountries, filterByname } from "../../actions"
import setFormError from "./setError"
import axios from "axios";
import activities from "./activities.png"


function Form(){
    const dispatch= useDispatch()
    useEffect(()=>{dispatch(getCountries())},[])
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
        console.log(event.target.value)
        const newArray = [...form.country]
        if(event.target.value === 'false'){return}
        if(!newArray.includes(event.target.value)){ newArray.push(event.target.value)}
        else{alert("This country is already on the list")}
        setForm({...form, country : newArray}) 
    }

    const handleDelete = (event) => {
        event.preventDefault()
        const newContry = form.country.filter((e)=> e !== event.target.value )
        setForm({...form, country: newContry})
     }

    const handleSubmit = async (event) => {
        event.preventDefault()
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
            const response = await axios.post('/activities', element);
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
        } 

        setForm({
            name: '',
            img: '',
            difficulty: 0,
            duration: 0,
            season: '',
            description: '',
            country: [], 
        }) 
    };

    
    return(
        <div className={styles.principalDiv}>
            <form onSubmit={handleSubmit}className={styles.forma} >
                <div className={styles.countryDiv}>
                    <p>{!form.country.length && 'Select countries '}</p>
                    <select onChange={handleButtonAgre} onClick={handleForm} className={styles.select1}>
                        <option value="false">-----</option>
                        {countries?.map(elemnt=>{
                            return(
                                <option value={elemnt.id} key={elemnt.id} onChange={handleButtonAgre}>{elemnt.name} </option>
                            )
                         })}
                    </select>
                </div>

                <div>
                    {form.country?.map(id=>{
                        return(
                            <button onClick={handleDelete} key={id} value={id}>{id}</button>
                        )
                    })}
                </div>

                <div className={styles.activityDiv}>
                    <label className={styles.labels} htmlFor="">Activity Name: </label>
                    <input 
                    className={styles.inputName}
                    type="text" 
                    placeholder="Write activity name" 
                    name="name"
                    onChange={handleForm}
                    value={form.name}
                    />
                </div> 
                    <p>{error.name && error.name }</p>
                    <div className={styles.imageDiv}>
                        <label className={styles.labels} htmlFor="">Image Link: </label>
                        <input 
                        className={styles.inputImage}
                        type="text" 
                        placeholder="Write image link" 
                        name="img"
                        onChange={handleForm}
                        value={form.img}
                        />
                    </div>
                    <p>{error.img && error.img }</p>

                <div className={styles.seasonDiv}>
                    <label className={styles.labels} htmlFor="">Season: </label>
                    <select 
                    className={styles.select3}
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
                </div>

                    <p>{error.season && error.season }</p>
                    <div className={styles.divDificulty}>
                        <label className={styles.labels} htmlFor="">Difficulty: </label>
                        <select 
                        className={styles.select2}
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
                </div>
                    <p>{error.difficulty && error.difficulty }</p>
                    <div className={styles.divDuration}>
                    <label className={styles.labels} htmlFor="">Duration: </label>
                    <input 
                    className={styles.inputDuration}
                    type="number" 
                    placeholder="Write activity duration 'Hours'" 
                    name="duration"
                    onChange={handleForm}
                    value={form.duration}
                    />
                </div>
                    <p>{error.duration && error.duration }</p>
                    <textarea onChange={handleForm} 
                    className={styles.textarea}
                    name="description"
                    placeholder="Write activity description"
                    value={form.description}
                    maxLength="295"
                    >
                    </textarea>
                    <p>{error.description && error.description }</p>
                    <button type='submit' disabled={!sub} onClick={handleSubmit}>submit</button>
                    <img className={styles.image} src={activities} alt="" /> 

            </form>
        </div>
    )
}
export default Form