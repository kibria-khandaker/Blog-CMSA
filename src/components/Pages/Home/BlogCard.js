import React from 'react';

const BlogCard = ({ blog }) => {
    return (
        <div key={blog._id} className="card lg:card-side bg-base-100 shadow border">
            <figure className='p-3 mx-auto' ><img className=' w-full' src={blog.image} alt="Album" /></figure>
            <div className="card-body">
                <div>
                    <h2 className="card-title"> {blog.title} </h2>
                    {/* <p><b>Post Date :</b> {blog.date}</p>
                    <p> <b>Rating :</b> {blog.rate}</p> */}
                </div>
                <p>
                    {/* <b>About:</b> {blog.description.length < 50 ? blog.description.length : blog.description.slice(0, 50)} */}
                    <b>Details : </b> {blog.description}
                </p>
            </div>
        </div>
    );
};

export default BlogCard;