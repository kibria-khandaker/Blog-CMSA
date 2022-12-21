import { DEFAULT_CONTENT, DELETE_CONTENT, LATEST_CONTENT, LOW_RATED_CONTENT, OLD_CONTENT, SET_BLOG_VALUE, TOP_RATED_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    // rate: 0,
    // date: 0,
    blogs: [],
    mainBlogs: [],
    // topRated: [],
    // lowRated: [],
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_BLOG_VALUE:
            return {
                ...state,
                blogs: [...action.payload],
                mainBlogs: [...action.payload],
            }

        case TOP_RATED_CONTENT:
            // blogs.sort((a, b) => a.name > b.name ? 1 : -1); 
            const copyBlogs = [...state.blogs]
            copyBlogs.sort((a, b) => a.rate > b.rate ? 1 : -1)
            return {
                ...state,
                // topRated: [...copyBlogs],
                blogs: [...copyBlogs]

            };
        case LOW_RATED_CONTENT:
            const copyBlogs2 = [...state.blogs]
            copyBlogs2.sort((a, b) => a.rate < b.rate ? 1 : -1)
            return {
                ...state,
                // lowRated: [...copyBlogs2],
                blogs: [...copyBlogs2]

            };

        case LATEST_CONTENT:
            const copyBlogs3 = [...state.blogs]
            // const copyBlogs3b = parseInt(copyBlogs3.date)

            // const copyBlogs3b = copyBlogs3.map(aa => aa.date);
            // const copyBlogs3c =  copyBlogs3b.sort()
            // console.log("bbbbb "+ copyBlogs3c.sort());

            const copyBlogs3a = copyBlogs3.sort((a, b) => a.date < b.rate ? 1 : -1)

            return {
                ...state,
                // lowRated: [...copyBlogs2],
                blogs: [...copyBlogs3a],

            };
        case OLD_CONTENT:
            const copyBlogs4 = [...state.blogs]
            const copyBlogs4a = copyBlogs4.sort((a, b) => a.date < b.rate ? 1 : -1)
            return {
                ...state,
                // lowRated: [...copyBlogs2],
                blogs: [...copyBlogs4a]
            };


        case DELETE_CONTENT:
            return {

            };

        case DEFAULT_CONTENT:
            return {
                ...state,
                blogs: [...state.mainBlogs]
            };

        default:
            return state;
    }
};
