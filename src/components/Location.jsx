import React from 'react'
import { useSelector } from 'react-redux';

const Location = () => {
    const darkValue = useSelector((state)=>state.dark.isDark);
  return (
    <div className={darkValue ? "max-w-6xl mx-auto bg-black md:h-screen duration-300 pt-4 md:pt-16" : "max-w-6xl mx-auto bg-white duration-300 pt-4 md:pt-16"}>
      <div className=' grid grid-rows-2 md:grid-cols-2 gap-6 p-4'>
          <div>
            <h1 className='text-center text-xl font-bold'> Mount Your Locations</h1>
            <p className='text-center'> choose current location for find you and fastly giving your delivery and Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga culpa, architecto magnam asperiores distinctio est enim earum numquam in molestias!</p>
          </div>
          <div className='w-2 h-2 ml-2 pt-6 md:pt-0'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103859.79833836804!2d45.377655!3d35.56311815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40002c0536d143b1%3A0xf791750d4e215dea!2sSulaymaniyah!5e0!3m2!1sen!2siq!4v1692268598032!5m2!1sen!2siq"
                width="330"
                height="350"
                style={{border: "0"}}
                allowFullScreen=""
                loading="lazy"
                title='map'
                referrerPolicy="no-referrer-when-downgrade"
              >
              </iframe>
          </div>    
      </div>
        <div className='p-6 flex justify-end'>
            <h1 className='btn-order btn-hover mt-64 md:mt-14 lg:mt-44 mb-14 text-center text-xl max-w-max'> Order </h1>
        </div>
    </div>
  );
}

export default Location