import { DEFAULT_CONTENT, LATEST_CONTENT, OLD_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    title:"",
    status:"",
    vote:"",
    date: [],  
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case LATEST_CONTENT:
            return {
                ...state,
                date:[...state.date, action.payload],
                
            };
        case OLD_CONTENT:
            return {};
        case DEFAULT_CONTENT:
            return {};

        default:
            return state;
    }
};
