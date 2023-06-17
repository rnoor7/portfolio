import Image from "next/image";
import React from "react";
const Project = () => {
    return (
        <div id="project">
            <section className="text-gray-950 body-font bg-gradient-to-r from-teal-100 to-purple-200 hover:from-purple-200 hover:to-teal-100 ...">
                <div className="container px-5 py-14 mx-auto my-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
                            My Projects
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-5 -mt-[5rem]">

                        <div className="lg:w-1/3 sm:w-1/2 p-2">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full  object-cover object-center"
                                    src={require("../../../public/image/todo.jpg")}
                                />
                                <div className="px-8 py-20 relative z-10 h-full w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-lg title-font font-medium text-indigo-500 mb-1">
                                        To Do App
                                    </h2>
                                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                                        To Do List
                                    </h1>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full  object-cover object-center"
                                    src={require("../../../public/image/expense_tracker.png")}
                                />
                                <div className="px-8 py-20 relative z-10 h-full w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-lg title-font font-medium text-indigo-500 mb-1">
                                        EXPENSE TRACKER APP
                                    </h2>
                                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                                        Budget Tracking
                                    </h1>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full  object-cover object-center"
                                    src={require("../../../public/image/prtflio.jpg")}
                                />
                                <div className="px-8 py-20 relative z-10 h-full w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-lg title-font font-medium text-indigo-500 mb-1">
                                        MY PORTFOLIO
                                    </h2>
                                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                                        Portfolio
                                    </h1>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}
export default Project