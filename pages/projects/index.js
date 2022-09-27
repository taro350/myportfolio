/* eslint-disable @next/next/no-img-element */
import { useRef, useState, useEffect } from "react";

import Head from "next/head";
import Link from "next/link";

import Header from "../../components/Header";

import { ISOToDate, useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";

import Swup from 'swup';


export default function Projects() {
    const [mounted, setMounted] = useState(false);
    const text = useRef();
    
    
    // const swup = new Swup(); // only this line when included with script tag


    useIsomorphicLayoutEffect(() => {
      stagger(
        [text.current],
        { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
        { y: 0, x: 0, transform: "scale(1)" }
      );
      
    }, []);

    useEffect(() => {
        setMounted(true);
      }, []);
    
    
    return (
      <>
        <Head>
          <title>Projects</title>
        </Head>
        {
          mounted 
          ? <main id="swup" className="transition duration-4000 opacity-1"></main>
          : console.log("No swup")
        }
        
        <div className="container mx-auto mb-10">
          <Header/>
          <div className="mt-10">
            <h1
              ref={text}
              className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-flil"
            >
              Projects.
            </h1>
            <ul className="mt-4">
              <li className="transition transform hover:-translate-y-1">
                <Link href="/projects/1" >Paper animation</Link>
              </li>
              <li className="transition transform hover:-translate-y-1">
                <Link href="/projects/2" >Map animation</Link>
              </li>
              <li className="transition transform hover:-translate-y-1">
                <Link href="/projects/3" >Magnifier</Link>
              </li>
              <li className="transition transform hover:-translate-y-1">
                <Link href="/projects/4" >Text animation</Link>
              </li>
              <li className="transition transform hover:-translate-y-1">
                <Link href="/projects/5" >Keyboard animation</Link>
              </li>
              <li className="transition transform hover:-translate-y-1">
                <Link href="/projects/6" >Meteor</Link>
              </li>
              <li className="transition transform hover:-translate-y-1">
                <Link href="/projects/7" >Urban city</Link>
              </li>
              <li className="transition transform hover:-translate-y-1">
                <Link href="/projects/8" >Cheering up</Link>
              </li>
             
            </ul>
          </div>
          <img
            src="/images/tree.svg"
            alt="triangle with all three sides equal"
            className="mt-10"
            height="160"
            width="170" />

        </div>

      </>
    )
}