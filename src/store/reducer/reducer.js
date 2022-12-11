
export const name=(state = "",action)=>{
    switch(action.type){
        case "NAME":
            return action.payload
        default:
            return state
    }
}

export const lname=(state = "",action)=>{
    switch(action.type){
        case "LNAME":
            return action.payload
        default:
            return state
    }
}
export const age=(state = "",action)=>{
    switch(action.type){
        case "AGE":
            return action.payload
        default:
            return state
    }
}
export const gender=(state = "",action)=>{
    switch(action.type){
        case "GENDER":
            return action.payload
        default:
            return state
    }
}
export const pro=(state = "",action)=>{
    switch(action.type){
        case "PRO":
            return action.payload
        default:
            return state
    }
}