import React from 'react';

const BlogCard = ({ blog }) => {
    return (
        <div key={blog._id} className="card lg:card-side bg-base-100 shadow border">
            <figure className='lg:w-48  p-3 mx-auto' ><img src={blog.image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title"> {blog.title} </h2>
                <p>
                    <b>About:</b> {blog.description.length < 50 ? blog.description.length : blog.description.slice(0, 50)}
                </p>
            </div>
        </div>
    );
};

export default BlogCard;