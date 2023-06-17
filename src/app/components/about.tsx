import Image from "next/image";
import React from "react";
const About = () => {
    return (
        <div id="about">
            <section className="text-gray-950 body-font bg-gradient-to-r from-teal-100 to-purple-200 hover:from-purple-200 hover:to-teal-100 ...">
                <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image
                            className="object-cover object-center rounded "
                            alt="hero"
                            width={400}
                            height= {400}
                            src={require("../../../public/image/about.jpg")}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-3xl text-2xl mb-4 font-bold text-gray-950">
                            ABOUT ME
                            <br className="hidden lg:inline-block" />

                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Hi, There! I am Raheela Noor based in Pakistan who has extensive experience developing modern applications.. My bio data is as under:<br />
                            Qualification: Master of computer Science with A+ Grade<br />
                            Certification in BlockChain Development<br />
                            Full Stack Development
                        </p>
                        <p className="mb-8 leading-relaxed">A full stack developer having specailization in Back-end & Front-end development. I have fully proficiency and command on such kind of software. I have 5 year experience in web development  with a diverse range of skills including NodeJS, React, Next, Tailwind with CSS, JavaScript, and TypeScript..</p>
                        <div className="flex justify-center">
                            <button className="inline-flex  text-white bg-gradient-to-r from-blue-950 to-indigo-500 hover:from-indigo-500 hover:to-blue-950 ... border-0 py-2 px-6 focus:outline-none rounded text-lg shadow-lg shadow-blue-500/50">
                                View CV
                            </button>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About