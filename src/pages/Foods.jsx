import React from 'react'

const Foods = ({id,image,price,username}) => {
  return (
    <div>
        <div className="p-10 shadow-xl space-y-4">
            <img src={image} alt="food" />
            <div className="flex justify-between items-center">
                <h1>{username}</h1>
                <h1>{price}</h1>
            </div>
            <div className="text-center">
                <button className='btn-action btn-hover'>Order</button>
            </div>
        </div>
    </div>
  )
}

export default Foods