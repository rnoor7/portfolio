"use client";
import React from "react";
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Link from "next/link";
const Hero = () => {
    return (

        <section className="text-gray-950 body-font bg-gradient-to-r from-teal-100 to-purple-200 hover:from-purple-200 hover:to-teal-100 ...">
            <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-950">
                        Hi, I am
                        <br className="hidden lg:inline-block" />
                        <Typewriter
                            options={{
                                strings: ['Full Stack Developer', 'Front End Developer', 'Back End Developer', 'UI/UX Designer', 'Certified BlockChain Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I am a Full Stack Web Developer with a passion for learning new languages and problem solving techniques. I found myself enjoying the technical and computer driven aspects which lead me to follow my true passion for front-end and back-end development.My legal and management positions bring a fresh prospective to techincal and leaderships roles as it showcases my detailed oriented and organizational skills in any job I perform.
                    </p>
                    <div className="flex justify-center">
                     <Link href={"#contact"}>
                        <button  className=" inline-flex text-white bg-gradient-to-r from-blue-950 to-indigo-500 hover:from-indigo-500 hover:to-blue-950 ... border-0 py-2 px-6 focus:outline-none rounded text-lg shadow-lg shadow-blue-500/50">
                            Contact
                        </button>
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image
                        className="object-cover object-center rounded"
                        alt="hero"
                        width={500}
                        height={500}
                        src={require("../../../public/image/prtflio.jpg")}
                    />
                </div>
            </div>
        </section>

    )
}
export default Hero