import Image from 'next/image'
import Link from 'next/link'
import react from 'react'
import { ImDownload2 } from 'react-icons/im'
const Navbar = () => {
  return (
    <div className='  z-50 sticky top-0 bg-sky-50 hover:bg-zinc-100'>
      <header className="text-gray-950 body-font bg">
        <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={require("../../../public/image/logo1.png")} alt="NOOR" width={70} height={70} />
            <span className="ml-3 text-3xl font-extrabold ">RAHEELA NOOR</span>
            
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-blue-700">Home</Link>
            <Link href={"#about"} className="mr-5 hover:text-blue-700">About</Link>
            <Link href={"#skills"} className="mr-5 hover:text-blue-700">Skills</Link>
            <Link href={"#project"} className="mr-5 hover:text-blue-700">Project</Link>
            <Link href={"#contact"} className="mr-5 hover:text-blue-700">Contact</Link>
          </nav>
          <button className="inline-flex text-white bg-gradient-to-r from-blue-950 to-indigo-500 hover:from-indigo-500 hover:to-blue-950 ... border-0 py-2 px-6 focus:outline-none rounded text-lg shadow-lg shadow-blue-500/50">Download CV
            <ImDownload2 className="text xl, ml-2" />
          </button>
        </div>
      </header>
    </div>
  )
}
export default Navbar