import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import { useDispatch } from 'react-redux';
import { latestContent } from '../../../redux/actions/filterAction';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then((res) => res.json())
            .then((data) => setBlogs(data.data))
    }, []);

    return (
        <div className='max-w-7xl gap-14 mx-auto my-10'>
            <div className='mb-10 flex justify-start gap-2'>
                <p className='font-semibold px-3 py-2 '>Sort by : </p>
                <button
                    className={`border px-3 py-2 rounded-full `} >
                    Default
                </button>
                <button
                    onClick={() => dispatch(latestContent())}
                    className={`border px-3 py-2 rounded-full  `} >
                    last upload
                </button>
                <button
                    className={`border px-3 py-2 rounded-full  `} >
                    the first upload
                </button>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 md:px-10 lg:px-20 mx-auto'>
                {
                    blogs.map(blog => (
                        <BlogCard key={blog._id} blog={blog} ></BlogCard>
                    )).reverse()
                }
            </div>
        </div>
    );
};

export default Home;