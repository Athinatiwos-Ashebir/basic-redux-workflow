import { combineReducers } from "redux";
import { lname, name,age, gender, pro } from "./reducer";

export const reducers = combineReducers({
    firstName: name,
    lastName : lname,
    myage: age,
    gen: gender,
    prof: pro
   
})

