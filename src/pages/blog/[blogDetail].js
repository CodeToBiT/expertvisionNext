import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";


const blogDetail = () => {
  const router = useRouter();
  const blogDetail = router.query.blogDetail;
  const [blogs, setBlogs] = useState();
  const fetchBlogs = async () => {
    const response = await fetch(
      [`https://admin.evc.edu.np/api/`, `blog/${blogDetail}`].join(""),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();

    setBlogs(json.data);
  };

  useEffect(() => {
    fetchBlogs();
  });


  return (
    <>

    </>
  );
};

export default blogDetail;
