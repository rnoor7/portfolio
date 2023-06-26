import React from 'react'
import {TfiEmail} from 'react-icons/tfi'
const Contact = () => {
    return (
        <div id="contact">
            <section className="text-gray-950 body-font relative bg-gradient-to-r from-teal-100 to-purple-200 hover:from-purple-200 hover:to-teal-100 ...">
                <div className="container px-5 py-14 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameBorder={0}
                            title="map"
                            marginHeight={0}
                            marginWidth={0}
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13293.539924883966!2d73.04122019591289!3d33.5953142969608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df94834d87f5a3%3A0x506e17bedd22f2e7!2sSaddar%2C%20Rawalpindi%2C%20Punjab%2046000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1686937255308!5m2!1sen!2s"
                            style={{ filter: " contrast(1.2) opacity(0.4)" }}
                        />
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-950 tracking-widest text-xs">
                                    ADDRESS
                                </h2>
                                <p className="mt-1">
                                    Saddar, Rawalpindi cantt, Punjab, Pakistan
                                </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-950 tracking-widest text-xs">
                                <div className="inline-flex "><TfiEmail className="text xl, mr-2" />EMAIL</div>
                                </h2>
                                
                                <a className="text-indigo-500 leading-relaxed">raheelanoor72@gmail.com</a>
                                <h2 className="title-font font-semibold text-gray-950 tracking-widest text-xs mt-4">
                                    PHONE
                                </h2>
                                <p className="leading-relaxed">123-456-7890</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto p-4 w-full md:py-8 mt-8 md:mt-0 bg-fixed bg-cover bg-center custom-image1">
                        <h2 className="text-gray-950 sm:text-3xl text-2xl font-bold text- mb-1 title-font">
                            Contact
                        </h2>
                        <p className="leading-relaxed mb-5 text-gray-950">
                        If you want to learn more about me or are interested in hiring, feel free to contact me.
                        </p>
                        <form action="https://formspree.io/f/mvojpklg" method="POST">
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-950">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            required/>
                        </div>
                        <div className="relative mb-4">
                            
                            <label htmlFor="email" className="leading-7 text-sm text-gray-950">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            required/>
                        </div>
                        <div className="relative mb-4">
                            
                            <label htmlFor="subject" className="leading-7 text-sm text-gray-950">
                                Subject
                            </label>
                            <input
                                type="Text"
                                id="subject"
                                name="subject"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            required/>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-950">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                defaultValue={""}
                            required/>
                        </div>
                        
                        <button className=" text-white bg-gradient-to-r from-blue-950 to-indigo-500 hover:from-indigo-500 hover:to-blue-950 ... border-0 py-2 px-6 w-full focus:outline-none rounded text-lg shadow-lg shadow-blue-500/50">
                            Send Message
                        </button>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Contact
//"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13293.539924883966!2d73.04122019591289!3d33.5953142969608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df94834d87f5a3%3A0x506e17bedd22f2e7!2sSaddar%2C%20Rawalpindi%2C%20Punjab%2046000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1686937255308!5m2!1sen!2s"