import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmark, handleMarkAsRead}) => {
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='w-2/3'>
            <div>
                {
                    blogs.map(blog => <Blog 
                        key={blog.id}
                        blog={blog}
                        handleBookmark={handleBookmark}
                        handleMarkAsRead={handleMarkAsRead}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
};

export default Blogs;