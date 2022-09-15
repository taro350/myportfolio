import Head from "next/head";
import Link from "next/link";

import { useRef, useState, useEffect } from "react";
import Header from "../../components/Header";

export default function Projects() {
    const [mounted, setMounted] = useState(false);
    const text = useRef();

    useEffect(() => {
        setMounted(true);
      }, []);
    
    
    return (
      <>
        <Head>
          <title>Project 1</title>
        </Head>
        <div className="container mx-auto mb-10">
          <Header></Header>
          <div className="mt-10">
            <h1
              ref={text}
              className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full"
            >
              <Link href="/" >Go home</Link>
            </h1>
            <li>
              <ul>
                <Link href="/projects/1" >Paper animation</Link>
              </ul>
              <ul>
                <Link href="/projects/2" >Map animation</Link>
              </ul>
              <ul>
                <Link href="/projects/3" >Magnifier</Link>
              </ul>
              <ul>
                <Link href="/projects/4" >Text animation</Link>
              </ul>
              <ul>
                <Link href="/projects/5" >Keyboard animation</Link>
              </ul>
              <ul>
                <Link href="/projects/6" >Meteor</Link>
              </ul>
              <ul>
                <Link href="/projects/7" >Urban city</Link>
              </ul>
              <ul>
                <Link href="/projects/8" >Cheering up</Link>
              </ul>
             
            </li>
          </div>
        </div>

      </>
    )
}