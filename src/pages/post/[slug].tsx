import React from "react";
import { useRouter } from "next/router";

const PostPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <h1>Post: {slug}</h1>;
};

export default PostPage;
