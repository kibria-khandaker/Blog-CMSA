import React, { useEffect, useState } from 'react';

const AllBlogList = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("https://blog-cmsa-server.vercel.app/blogs")
            .then((res) => res.json())
            .then((data) => setBlogs(data.data))
    }, []);
    return (
        <div>
            <h2> All Blog List </h2>
            <ul>
                {
                    blogs.map((blog, index) => (

                        <li key={blog._id} className='flex justify-between items-center p-3 border-solid rounded-lg border border-slate-300 hover:border-indigo-300'>
                            <div className='flex gap-4 justify-start items-center '>
                                <p className=' font-bold'> {index + 1} : </p>
                                <img className=' w-10 rounded-lg' src={blog.image} alt={blog.title} />
                                <h3>   {blog.title}  </h3>
                                <p>{blog._id}</p>
                            </div>
                            <div className='flex gap-4 justify-end items-center '>
                                <button className="btn btn-xs btn-info text-white">Edit</button>
                                <button className="btn btn-xs btn-error text-white">Delete</button>
                            </div>
                        </li>

                    ))
                }

            </ul>
        </div>
    );
};

export default AllBlogList;