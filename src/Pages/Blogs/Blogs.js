import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";

import SingleBlogs from "./SingleBlogs";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://limitless-harbor-13956.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <Container className="text-center shadow p-3 mb-5 bg-body rounded container-fluid">
      <h2>Latest from Our Blog</h2>
      <p className="text-secondary">
        With the exception of Nietzsche, no other madman has contributed so much
        to human sanity as has.
      </p>
      {blogs.length === 0 ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Row>
          {blogs.map((blog) => (
            <SingleBlogs blog={blog} key={blog._key}></SingleBlogs>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Blogs;
