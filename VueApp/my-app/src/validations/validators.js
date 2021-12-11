const required = (value,name,errors)=>{
       if(value) return errors
       !value && errors.push(name+' is required')
       return errors
}

const smallerThan = (val1,val2,msg,errors)=>{
      if(val1<=val2) return errors
      errors.push(msg)
      return errors
}

const graterThan = (val1,val2,msg,errors)=>{
      if(val1>=val2) return errors
      errors.push(msg)
      return errors
}

const checkInput = (errors)=>{
    if(errors.length==0){
        return true
    }
    else{
        return false
    }
}

export {
    required,
    smallerThan,
    graterThan,
    checkInput
}