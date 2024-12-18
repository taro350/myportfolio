/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { stagger } from "../../animations";
import Button from "../../components/Button";
import Header from "../../components/Header";
import dataConfig from "../../data/portfolio_config.json";
import { ISOToDate, useIsomorphicLayoutEffect } from "../../utils";
import { getAllPosts } from "../../utils/api";


const Blog = ({ posts }) => {
  const showBlog = useRef(dataConfig.showBlog);
  const text = useRef();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useIsomorphicLayoutEffect(() => {
    stagger(
      [text.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
    if (showBlog.current) stagger([text.current], { y: 30 }, { y: 0 });
    else router.push("/");
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const createBlog = () => {
    if (process.env.NODE_ENV === "development") {
      fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        router.reload(window.location.pathname);
      });
    } else {
      alert("This thing only works in development mode.");
    }
  };

  
  
  return (
    showBlog.current && (
      <>
        
        <Head>
          <title>Blog</title>
        </Head>
        <div className="container mx-auto mb-10">
          <Header isBlog={true}></Header>
          <div className="mt-10">
            <h1
              ref={text}
              className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full"
            >
              Blog.
            </h1>
            <div className="mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-10">
              {
              posts &&
                posts.map((post) => (
                  <BlogCard 
                    slug={post.slug} 
                    key={post.blogId}
                    
                    image={post.image}
                    title={post.title}
                    preview={post.preview}
                    date={post.date} 
                    mounted={post.mounted}
                    />
                ))
              }
            </div>
          </div>
        </div>
        {/* Add button */}
        {
          process.env.NODE_ENV === "development" && mounted && (
            <div className="fixed bottom-6 right-6">
              <Button onClick={createBlog} type={"primary"}>
                Add New Post +{" "}
              </Button>
            </div>
          )
        }
      </>
    )
  );
};

export function BlogCard({slug, blogId, image, title, preview, date, mounted}) {

  const deleteBlog = (slug) => {
    if (process.env.NODE_ENV === "development") {
      fetch("/api/blog", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug,
        }),
      }).then(() => {
        router.reload(window.location.pathname);
      });
    } else {
      alert("This thing only works in development mode.");
    }
  };

  return (

    <div
      className="cursor-pointer relative"
      key={slug}
      onClick={() => Router.push(`/blog/${slug}`)}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-24 rounded-lg shadow-lg object-cover"
      />
      <h2 className="mt-5 text-4xl">{title}</h2>
      <p className="mt-2 opacity-50 text-lg">{preview}</p>
      <span className="text-sm mt-5 opacity-25">
        {ISOToDate(date)}
      </span>
      

      {/* Delete button */}
      {
        process.env.NODE_ENV === "development" && mounted && (
          <div className="absolute top-0 right-0">
            <Button
              onClick={(e) => {
                deleteBlog(slug);
                e.stopPropagation();
              }}
              type={"primary"}
            >
              Delete
            </Button>
          </div>
        )
      }
    </div>
    )
  
}

export async function getStaticProps() {
  const posts = getAllPosts([
    "slug",
    "blogId",
    "title",
    "image",
    "preview",
    "author",
    "date",
  ]);

  return {
    props: {
      posts: [...posts],
    },
  };
}

export default Blog;
