export const validarEmail = (email) => {
    const length = email.length
    if(length >= 8 && length < 50 && email.includes('@')){
        console.log('valido')
    }else{
        console.log('nop')
    }
}

export function validarPassword(password){
    const length = password.length
    if(length >= 8 && length < 20){
        console.log('valido')
    }else{
        console.log('nop')
    }
}