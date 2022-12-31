const regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/

              


function setFormError(data){
  
    
        
    let errors = {}
    if(!data.name) errors.name ='Debes escribir un nombre';
    else if(data.name.length< 3) errors.name = 'Debe contener mas de 2 caracters'
    else if(!regex.test(data.img)) errors.img = 'Ingresa una url valido';
    else if(!data.difficulty) errors.difficulty = 'Ingresa un valor'
    else if(!data.duration) errors.duration = 'Ingresa un valor'
    else if(data.duration === '0') errors.duration = 'Ingresa un valor igual o mayor a 1h'
    else if(!data.season) errors.season ='Debes selecionar un estado';
    else if(data.description.length< 20) errors.description = 'Debe contener mas de 20 caracters'
    

    

    return errors

}

export default setFormError