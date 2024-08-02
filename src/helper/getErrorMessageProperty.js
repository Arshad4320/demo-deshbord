export const getErrorMassageByProperty = (error, name) => {
    let message = error
if(message[name]){
    message = message[name]
}else{
   return message = undefined
}
return message?.message
}