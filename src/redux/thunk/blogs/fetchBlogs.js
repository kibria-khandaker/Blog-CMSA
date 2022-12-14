import { loadBlog } from '../../actions/blogAction';

const fetchBlogs =()=>{
    return async(dispatch, getState)=>{
        
        const res = await fetch("https://blog-cmsa-server.vercel.app/blogs");
        const data = await res.json();

        if (data.data.length) {
            dispatch(loadBlog(data.data));
        }
    };
};

export default fetchBlogs;