import React, { useRef, useState } from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import Header from "../../components/Header";
import ContentSection from "../../components/ContentSection";
// import Footer from "../../components/Footer";
// import MyFooter from "../../components/Footer/MyFooter";
import Button from "../../components/Button";
import BlogEditor from "../../components/BlogEditor";

import { getPostBySlug, getAllPosts } from "../../utils/api";
import { useIsomorphicLayoutEffect } from "../../utils";

import { stagger } from "../../animations";
import Image from "next/image";




const BlogPost = ({ post }) => {
  const [showEditor, setShowEditor] = useState(false);
  const textOne = useRef();
  const textTwo = useRef();
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    stagger([textOne.current, textTwo.current], { y: 30 }, { y: 0 });
  }, []);

  return (
    <>
      <Head>
        <title>{"Blog - " + post.title}</title>
        <meta name="description" content={post.preview} />
      </Head>
      
      <div className="container mx-auto mt-10">
        <Header isBlog={true} />

        {/* img, title, and tagline */}
        <div className="mt-10 flex flex-col">
          <Image
            src={post.image}
            alt={post.title} 
            width="100%" height="24rem" layout="responsive" 
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
          {/* title */}
          <h1
            ref={textOne}
            className="mt-10 text-4xl mob:text-2xl laptop:text-6xl text-bold"
          >
            {post.title}
          </h1>
          {/* tagline */}
          <h2
            ref={textTwo}
            className="mt-2 text-xl max-w-4xl text-zinc-300 opacity-50"
          >
            {post.tagline}
          </h2>
        </div>

        {/* content */}
        <ContentSection content={post.content}></ContentSection>

        {/* Footer : Enable if I start business! */}
        {/* <Footer /> */}
      </div>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => setShowEditor(true)} type={"primary"}>
            Edit this blog
          </Button>
        </div>
      )}

      {showEditor && (
        <BlogEditor
          post={post}
          close={() => setShowEditor(false)}
          refresh={() => router.reload(window.location.pathname)}
        />
      )}
    </>
  );
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.blogSlug, [
    "date",
    "slug",
    "preview",
    "title",
    "tagline",
    "preview",
    "image",
    "content",
  ]);

  return {
    props: {
      post: {
        ...post,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          blogSlug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
export default BlogPost;