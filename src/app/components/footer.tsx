import React from "react";
import Image from 'next/image'
const Footer = ()=>{
    return(
        <div><footer className="text-gray-950 body-font bg-sky-50 hover:bg-zinc-100">
        <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-950">
          <Image src={require("../../../public/image/logo1.png")} alt="NOOR" width={70} height={70}/>
            <span className="ml-3 text-xl">FULL STACK DEVELOPER</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 Raheela Noor
            
          </p>
          
        </div>
      </footer></div>
    )
}
export default Footer