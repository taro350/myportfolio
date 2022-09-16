import Head from "next/head";
import { useRef, useState, useEffect } from "react";

import Button from "../../components/Button";
import Header from "../../components/Header";

export default function Project1() {
    const [mounted, setMounted] = useState(false);
    const text = useRef();

    useEffect(() => {
        setMounted(true);
      }, []);
      
    return (
          <>
            <Head>
              <title>Project 8</title>
            </Head>
            <div className="container mx-auto mb-10">
              <Header></Header>
              <div className="mt-10">
                <h1
                  ref={text}
                  className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full"
                >
                  Cheering up
                </h1>
                <div className="mt-10 flex justify-center content-center">
                    <video controls>
                        <source src="../../videos/text-morphing.mp4" type="video/mp4" />
                        
                        <p> Cheering up </p>
                    </video>
                
                </div>
              </div>
            </div>

          </>
        )
}