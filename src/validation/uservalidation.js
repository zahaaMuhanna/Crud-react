export const validationUserdata = (values)=>{
    let errors={}

    if(values.name.trim()==""){
        errors.name="name is required"
    }else if(values.name.trim().length < 3){
        errors.name="name must be at least 3 char"
    }

    if(values.email.trim()==""){
        errors.email="email is required"
    }else if(values.email.trim().length < 10){
        errors.email="email must be at least 10 char"
    }

    if(values.password.trim()==""){
        errors.password="password is required"
    }else if(values.password.trim().length < 3){
        errors.password="password must be at least 3 char"
    }

    return errors
}