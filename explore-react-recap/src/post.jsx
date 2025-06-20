import { useEffect, useState } from "react";

export default function Post() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="">
      <h3>Post: </h3>
    </div>
  );
}

/**
 * 1.  Create a state to store the data
 * 2 . create use effect with no dependancy
 * 3. Use fetch to load data
 */
