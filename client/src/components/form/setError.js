const regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/


function setFormError(data){
    let errors = {}
    if(!data.name) errors.name ='You must write a name';
    else if(data.name.length< 3) errors.name = 'Must contain more than 2 characters'
    else if(!regex.test(data.img)) errors.img = 'You must write a valid link';
    else if(!data.season) errors.season ='You must selct a state';
    else if(!data.difficulty) errors.difficulty = 'Your must enter a value'
    else if(!data.duration) errors.duration = 'Your must enter a value'
    else if(data.duration === '0') errors.duration = 'You must enter a value equal to or greater than 1h'
    else if(data.description.length< 20) errors.description = 'Must contain more than 20 characters'
    return errors
}

export default setFormError