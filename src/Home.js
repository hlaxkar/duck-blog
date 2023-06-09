import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlog] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    console.log('useEffect ran');
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
            if(!res.ok){
                throw Error('could not fetch data');
            }

          return res.json();
        })
        .then((data) => {
          setBlog(data);
          setIsPending(false);
        })
        .catch(err => {
            console.log(err.message);
        });
    }, 1000);
  },[isPending]);

  return (
    <div className="home">
      {isPending && <div>Loading....</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
