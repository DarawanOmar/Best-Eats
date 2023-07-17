import React from 'react'

 const Cards = () => {
  return (
    <div className='max-w-6xl mx-auto p-4 font-serif py-10 '>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {/* Overly */}
        <div className=' relative text-gray-200 '>
            <div className='absolute  bg-black/30 w-full h-full flex flex-col p-4 rounded-2xl'>
              <h1 className='font-bold text-2xl'> Sun's Out, BOGO's Out</h1>
              <p className='text-lg'> Throught 8/26</p>
              <p className=' bg-white text-black px-4 py-2 rounded-xl max-w-max mt-4 border-2 border-white hover:bg-transparent hover:text-gray-200 cursor-pointer duration-500 '> Order Now</p>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] lg:max-h-[160px] rounded-2xl w-full h-full object-cover' src="https://img.freepik.com/free-photo/mixed-fried-meat-with-pomegranate-sauce_140725-3461.jpg?size=626&ext=jpg&ga=GA1.1.656506428.1687210625&semt=sph" alt="/" />
        </div>
        <div className=' relative text-gray-200 '>
            <div className='absolute bg-black/50 w-full h-full flex flex-col p-4 rounded-2xl'>
              <h1 className='font-bold text-2xl'> Sun's Out, BOGO's Out</h1>
              <p className='text-lg'> Throught 8/26</p>
              <p className=' bg-white text-black px-4 py-2 rounded-xl max-w-max mt-4 border-2 border-white hover:bg-transparent hover:text-gray-200 cursor-pointer duration-500'> Order Now</p>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] lg:max-h-[160px] rounded-2xl w-full h-full object-cover' src="https://img.freepik.com/free-photo/baked-quails-pan-dark-surface_2829-5596.jpg?size=626&ext=jpg&ga=GA1.1.656506428.1687210625&semt=sph" alt="/" />
        </div>
        <div className=' relative text-gray-200 '>
            <div className='absolute bg-black/50 w-full h-full flex flex-col p-4 rounded-2xl'>
              <h1 className='font-bold text-2xl'> Sun's Out, BOGO's Out</h1>
              <p className='text-lg'> Throught 8/26</p>
              <p className=' bg-white text-black px-4 py-2 rounded-xl max-w-max mt-4 border-2 border-white hover:bg-transparent hover:text-gray-200 cursor-pointer duration-500 '> Order Now</p>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] lg:max-h-[160px] rounded-2xl w-full h-full object-cover' src="https://img.freepik.com/free-photo/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food_1150-26580.jpg?size=626&ext=jpg&ga=GA1.1.656506428.1687210625&semt=sph" alt="/" />
        </div>

      </div>
    </div>
  )
}

export default Cards