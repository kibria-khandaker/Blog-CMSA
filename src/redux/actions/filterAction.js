import { LATEST_CONTENT } from "../actionTypes/actionTypes"

export const latestContent = (date) =>{
    return{
        type: LATEST_CONTENT,
        payload:date,
    }
}