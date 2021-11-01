import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("https://limitless-harbor-13956.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlog(data[id]));
  }, [id]);
  console.log(blog);
  return (
    <Container className="my-5 text-center shadow p-3 mb-5 bg-body rounded">
      <img className="rounded my-2 img-fluid" src={blog.image} alt="" />
      <h5 className="text-primary my-2">{blog.name}</h5>
      <p>{blog.details}</p>
    </Container>
  );
};

export default BlogDetails;
