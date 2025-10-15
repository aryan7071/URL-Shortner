import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-14 bg-purple-700 flex justify-between px-3 items-center text-white' >
        <div className="logo font-bold text-2xl ">
            
            <Link href="/" ><li>BitLinks</li></Link>
        </div>
        <ul className='flex text-lg gap-20 justify-center items-center' >
            <Link href="/" ><li>Home</li></Link>
            <Link href="/about" ><li>About</li></Link>
            <Link href="/shorten" ><li>Shorten</li></Link>
            <Link href="/contact" ><li>Contact Us</li></Link>
            <li className='flex gap-3' >
                <Link href="/shorten" ><button className='bg-purple-500 shadow-lg p-2 py-1 rounded-lg font-bold' >Try Now</button></Link>
                <Link href="/github" ><button className='bg-purple-500 shadow-lg p-2 py-1 rounded-lg font-bold' >Github</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
