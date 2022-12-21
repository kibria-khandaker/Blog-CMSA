import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import { useDispatch, useSelector } from 'react-redux';
import { defaultContent, latestContent, lowRatedContent, oldestContent, setBlog, topRatedContent } from '../../../redux/actions/filterAction';

const Home = () => {

    const dispatch = useDispatch();

    // const { blogs, topRated, lowRated } = useSelector(state => state.filter);
    const { blogs } = useSelector(state => state.filter);

    // console.log( {blogs,topRated,lowRated});

    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then((res) => res.json())
            .then((data) => {
                dispatch((setBlog(data.data)))
            })
    }, [dispatch]);

    return (
        <div className='max-w-7xl gap-14 mx-auto my-10'>
            <div className='mb-10  px-2 flex justify-start gap-2'>
                <p className='font-semibold px-3 py-2 '>Sort by : </p>
                <button
                    onClick={() => dispatch(defaultContent())}
                    className={`border px-3 py-2 rounded-full `} >
                    Default
                </button>
                {/* <button
                    onClick={() => dispatch(topRatedContent())}
                    className={`border px-3 py-2 rounded-full  `} >
                    Top Rate
                </button>
                <button
                    onClick={() => dispatch(lowRatedContent())}
                    className={`border px-3 py-2 rounded-full  `} >
                    Low Rate
                </button> */}
                <button
                    onClick={() => dispatch(latestContent())}
                    className={`border px-3 py-2 rounded-full  `} >
                    Latest Post
                </button>
                <button
                    onClick={() => dispatch(oldestContent())}
                    className={`border px-3 py-2 rounded-full  `} >
                    Old Post
                </button>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 mx-auto'>
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