import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import addBlogData from './../../../redux/thunk/blogs/addBlogData';


const AddBlog = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        const blog = {
            title: data.title,
            image: data.image,
            categories: data.categories,
            tag: data.tag,
            writer: data.writer,
            date: data.date,
            rate: data.rate,
            description: data.description,
            spec: [],
        };

        // console.log(blog);
        // dispatch(addBlog(blog));
        dispatch(addBlogData(blog));
    };

    return (

        <div className='flex justify-center items-center h-full '>
            <form
                className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                onSubmit={handleSubmit(submit)}
            >
                <div className='flex w-full'>
                    <label className='px-2 font-semibold' htmlFor='title'>
                        Title
                    </label>
                    <input className=' w-full border p-2' type='text' id='title' {...register("title")} />
                </div>

                <div className='flex w-full'>
                    <label className='px-2 font-semibold' htmlFor='image'>
                        Image
                    </label>
                    <input className=' w-full border p-2' type='text' name='image' id='image' {...register("image")} />
                </div>

                <div className='flex w-full'>
                    <label className='px-2 font-semibold' htmlFor='categories'>
                        Categories
                    </label>
                    <select name='categories' id='categories' {...register("categories")}>
                        <option value='business '>Business   </option>
                        <option value='personal'>Personal  </option>
                        <option value='travel'>Travel  </option>
                        <option value='fashion'>Fashion   </option>
                    </select>
                </div>
                <div className='flex w-full'>
                    <label className='px-2 font-semibold' htmlFor='tag'>
                        Tag
                    </label>
                    <input className=' w-full border p-2' type='text' id='tag' {...register("tag")}  />
                </div>
                <div className='flex w-full'>
                    <label className='px-2 font-semibold' htmlFor='writer'>
                        Writer
                    </label>
                    <input className=' w-full border p-2' type='text' id='writer' {...register("writer")} />
                </div>
                <div className='flex w-full'>
                    <label className='px-2 font-semibold' htmlFor='date'>
                        Date
                    </label>
                    <input className=' w-full border p-2' type='text' id='date' {...register("date")} placeholder="25.10.2099" />
                </div>

                <div className='flex w-full'>
                    <label className='px-2 font-semibold' htmlFor='rate'>
                        Rate
                    </label>
                    <input className=' w-full border p-2' type='text' name='rate' id='rate' {...register("rate")} />
                </div>
                <div className='flex w-full'>
                    <label className='px-2 font-semibold' htmlFor='description'>
                        Description
                    </label>
                    <input className=' w-full border p-2' type='text' id='description' {...register("description")} />
                </div>


                <div className='flex justify-between items-center w-full'>
                    <button
                        className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>

            </form>

        </div>
    );
};

export default AddBlog;