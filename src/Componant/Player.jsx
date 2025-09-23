import React from 'react';

const Player = ({player}) => {
    const {name,image_url,country,role,rating,price,batting_style}=player
    return (
        <div>
         <div className='border-1 border-gray-200 rounded-[8px] p-4'>
               <div>
                 <img className='mx-auto w-full h-80 rounded-[8px]' src={image_url} alt="" />
               </div>
                <h1 className='text-[1.5rem] font-medium'>Name: {name}</h1>
                <div className='flex justify-between mt-3'>
                    <h2 className='text-[1rem] font-normal'>Country Name: {country}</h2>
                    <button className='border-1 border-gray-200 rounded-[8px] p-2 mb-2'>{batting_style}</button>
                </div>
                <div className='border-b-2 border-gray-200 mt-2'></div>
                <h1 className='mt-2.5'>Rating: {rating}</h1>
                <h3 className='mt-2.5'>Role: {role}</h3>
                <div className='flex justify-between mt-2.5'>
                    <h4>Price: {price}</h4>
                    <button className='border-1 border-gray-200 rounded-[8px] p-2'>Choose Player</button>
                </div>
             </div>
        </div>
    );
};

export default Player;