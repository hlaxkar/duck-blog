import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
const [blogs, setBlog]= useState([
    {title:'My new Website', body:'lorem impsum....', author: 'Duck',id:1},
    {title:'Welcome Party!', body:'lorem impsum....', author: 'Akira',id:2},
    {title:'Web dev app tips', body:'lorem impsum....', author: 'Duck',id:3},
])
    
    
function handleDelete(id){ 
    setBlog(blogs.filter((blog) => blog.id !== id)) }
    return (  
        <div className="home">
      <BlogList blogs={blogs} title='All Blogs'/>
      <BlogList blogs={blogs.filter((blog) =>  {return blog.author==='Duck'} )} title='Duck Blogs' handleDelete={handleDelete} />
      <BlogList blogs={blogs.filter((blog) => {return blog.author==='Akira' })} title='Akira Blogs' handleDelete={handleDelete} />
      
      
    </div>
    );
}
 
export default Home;