import { useState, useRef, useEffect } from "react";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import Header from "../../components/Header";

import { ISOToDate, useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import MyFooter from "../../components/Footer/MyFooter";


export default function Videos() {
    const [mounted, setMounted] = useState(false);
    const text = useRef();
    

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
          <title>Videos</title>
        </Head>

        <div className="container mx-auto mb-10">
            <Header/>
            <div className="mt-10">
                <h1 ref={text} className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-flil">
                    Videos
                </h1>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <Image
                            src="/images/project1_img.png" alt="blog" 
                            width="100%" height="24rem" layout="responsive"
                            objectFit="cover"
                            className="lg:h-48 md:h-36 object-center" 
                            
                            />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                <div className="flex items-center flex-wrap ">
                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                    </svg>1.2K
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>6
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <Image
                            src="/images/project1_img.png" alt="blog" 
                            width="100%" height="24rem" layout="responsive"
                            objectFit="cover"
                            className="lg:h-48 md:h-36 object-center" 
                            
                            />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                <div className="flex items-center flex-wrap">
                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                    </svg>1.2K
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>6
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <Image
                            src="/images/project1_img.png" alt="blog" 
                            width="100%" height="24rem" layout="responsive"
                            objectFit="cover"
                            className="lg:h-48 md:h-36 object-center" 
                            
                            />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                <div className="flex items-center flex-wrap ">
                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                    </svg>1.2K
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>6
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                <MyFooter/>
            </div>
        </div>
    </>

    )
}