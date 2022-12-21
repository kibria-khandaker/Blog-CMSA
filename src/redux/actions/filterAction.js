import { DEFAULT_CONTENT, DELETE_CONTENT, LATEST_CONTENT, LOW_RATED_CONTENT, OLD_CONTENT, SET_BLOG_VALUE, TOP_RATED_CONTENT } from "../actionTypes/actionTypes"

export const setBlog = (data) => {
    return {
        type:SET_BLOG_VALUE,
        payload:data
    }
}


export const topRatedContent = () => {
    return {
        type:TOP_RATED_CONTENT,
    }
}
export const lowRatedContent = () => {
    return {
        type:LOW_RATED_CONTENT,
    }
}


export const latestContent = () => {
    return {
        type: LATEST_CONTENT,
    }
}
export const oldestContent = () => {
    return {
        type:OLD_CONTENT,
    }
}


// export const deleteContent = () => {
//     return {
//         type:DELETE_CONTENT,
//     }
// }

export const defaultContent = () => {
    return {
        type:DEFAULT_CONTENT,
    }
}

