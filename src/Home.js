import { useState } from "react";
const Home = () => {
const [blogs, setBlog]= useState([
    {title:'My new Website', body:'lorem impsum....', author: 'Mario',id:1},
    {title:'Welcome Party!', body:'lorem impsum....', author: 'Luigi',id:2},
    {title:'Web dev app tips', body:'lorem impsum....', author: 'Mario',id:3},
])
    
    

    return (  
        <div className="home">
      
      
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>

            <h2>{blog.title} </h2>
            <p>Written by {blog.author}</p>

        </div>
      ) )}
    </div>
    );
}
 
export default Home;