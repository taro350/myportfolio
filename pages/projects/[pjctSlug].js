import React, { useRef, useState } from "react";

// import { useRouter } from "next/router";
import Head from "next/head";

import Header from "../../components/Header";
import ContentSection from "../../components/ContentSection";
// import Footer from "../../components/Footer";
import MyFooter from "../../components/Footer/MyFooter";
// import Button from "../../components/Button";
// import BlogEditor from "../../components/BlogEditor";

import { getProjectBySlug, getAllProjects } from "../../utils/api";
import { ISOToDate, useIsomorphicLayoutEffect } from "../../utils";

import { stagger } from "../../animations";



const Project = ({ project }) => {
  const textOne = useRef();
  const textTwo = useRef();

  useIsomorphicLayoutEffect(() => {
    stagger([textOne.current, textTwo.current], { y: 30 }, { y: 0 });
  }, []);

  return (
    <>
      <Head>
        <title>{"Project - " + project.title}</title>
        <meta name="description" content={project.preview} />
      </Head>
      
      <div className="container mx-auto mt-10">
        <Header />
        <div className="container mx-auto">
              
            <h1
                ref={textOne}
                className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full"
            >
                {project.title}
            </h1>
            <span ref={textTwo} className="text-sm mt-5 opacity-25">
                      {ISOToDate(project.date)}
            </span>
            <div className="mt-10 flex justify-center content-center">
                <video muted autoPlay poster={project.poster} 
                    className="object-cover">
                    <source src={project.video} type="video/mp4" />
                    
                    <p> {project.preview} </p>
                </video>
            
            </div>
            <br></br>
            <h2 className="mob:p-2 text-4xl w-full">Motivation</h2>
                <p>
                    {project.motivation}
                </p>
            <br></br>
            <h2 className="mob:p-2 text-4xl w-full">Practice</h2>
                <p>
                    {project.practice}
                </p>
            
        </div>
        

        {/* content */}
        <ContentSection content={project.content}></ContentSection>

        <MyFooter/>
        {/* Footer : Enable if I start business! */}
        {/* <Footer /> */}
      </div>
      

    </>
  );
};

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.pjctSlug, [
    "slug",
    "date",
    "title",
    "poster",
    "preview",
    "video",
    "motivation",
    "practice",
    "content",
  ]);

  return {
    props: {
      project: {
        ...project,
      },
    },
  };
}

export async function getStaticPaths() {
  const projects = getAllProjects(["slug"]);

  return {
    paths: projects.map((project) => {
      return {
        params: {
          pjctSlug: project.slug,
        },
      };
    }),
    fallback: false,
  };
}
export default Project;
