import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import {CgFacebook, CgInstagram , CgPhone , CgTwitter } from 'react-icons/cg'
import {FaGithub} from 'react-icons/fa'
import {TiMessage} from 'react-icons/ti'
import {FaHandPointDown} from 'react-icons/fa'

const Footer = () => {

    const darkValue = useSelector((state)=>state.dark.isDark);

  return (
    <div 
    className='max-w-6xl mx-auto p-4 font-serif bg-orange-500 text-white '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
            {/* Description */}
            <div className='space-y-4'>
                <h1 className={darkValue ? 'text-2xl md:text-3xl font-bold border-black my-2 border-b-2 w-36 text-black' : 'text-2xl md:text-3xl font-bold my-2 border-b-2 w-36'}> About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ipsam excepturi voluptates veritatis corporis ad, 
                    temporibus sunt ipsum recusandae placeat distinctio.
                </p>
                <div className='pb-2 '>
                    <h1 className={darkValue ? 'font-bold text-xl flex items-center  text-black pb-4 ': ' pb-4 font-bold text-xl flex items-center '}> Contact Us On <span><FaHandPointDown/></span></h1>
                    <p className='flex  space-x-4 text-3xl'>
                        <a href="https://www.facebook.com/darawan.omar.721" className='bg-blue-600  rounded-full w-10 h-10 flex justify-center items-center  hover:scale-110 duration-500'><CgFacebook/></a>
                        <a href="https://www.instagram.com/darawan_omar_/" className='bg-gradient-to-t from-red-600 to-yellow-600  rounded-full w-10 h-10 flex justify-center items-center  hover:scale-110 duration-500' ><CgInstagram/></a>
                        <a href="https://www.snapchat.com/add/darawan_omar" className='bg-emerald-600 rounded-full w-10 h-10 flex justify-center items-center  hover:scale-110 duration-500' ><CgPhone/></a>
                        <a href="https://github.com/DarawanOmar" className='bg-yellow-600 rounded-full w-10 h-10 flex justify-center items-center  hover:scale-110 duration-500' ><FaGithub/></a>
                        <a href="https://twitter.com/OmarDarawan" className='bg-sky-500  rounded-full w-10 h-10 flex justify-center items-center  hover:scale-110 duration-500' ><CgTwitter/></a>
                        <a href="https://github.com/DarawanOmar" className='bg-green-500  rounded-full w-10 h-10 flex justify-center items-center  hover:scale-110 duration-500' ><TiMessage/></a>
                    </p>
                </div>
            </div>
            {/* Links */}
            <div className="grid grid-cols-2 gap-4  lg:text-center">
                <div>
                    <h1 className={darkValue ? 'font-bold text-lg border-b-2 border-black w-36 lg:mx-auto text-black' : 'font-bold text-lg border-b-2 w-36 lg:mx-auto '}>Company</h1>
                    <ul className='flex flex-col space-y-1 mt-2'>
                        <Link className='underline' to={'/'}>Home</Link>
                        <Link className='underline' to={'/bagorder'}>Order</Link>
                        <Link className='underline' to={'/favoraite'}>Favorite</Link>
                        <Link className='underline' to={'/'}>Wallet</Link>
                        <Link className='underline' to={'/food'}>Promitions</Link>
                        <Link className='underline' to={'/about'}>Help</Link>
                        <Link className='underline' to={'/'}>invit Friend</Link>
                    </ul>
                </div>
                <div>
                    <h1 className={darkValue ? 'font-bold text-lg border-b-2 border-black w-36 lg:mx-auto text-black' : 'font-bold text-lg border-b-2 w-36 lg:mx-auto '}>Services</h1>
                    <ul className='space-y-1 mt-2'>
                        <li className='underline'>Employee</li>
                        <li className='underline'>Test</li>
                        <li className='underline'>Best One</li>
                        <li className='underline'>Wallet</li>
                        <li className='underline'>Promitions</li>
                        <li className='underline'>Help?</li>
                        <li className='underline'>Legel</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer