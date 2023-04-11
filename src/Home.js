import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
const [blogs, setBlog]= useState([
    {title:'My new Website', body:'lorem impsum....', author: 'Mario',id:1},
    {title:'Welcome Party!', body:'lorem impsum....', author: 'Luigi',id:2},
    {title:'Web dev app tips', body:'lorem impsum....', author: 'Mario',id:3},
])
    
    

    return (  
        <div className="home">
      <BlogList blogs={blogs} title='All Blogs'/>
      <BlogList blogs={blogs} title='Duck Blogs'/>
      <BlogList blogs={blogs} title='Akira Blogs'/>
      
      
    </div>
    );
}
 
export default Home;