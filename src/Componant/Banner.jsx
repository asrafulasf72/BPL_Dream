import React from 'react';
import bgImg from '../assets/bg-shadow.png'
import logoPng from '../assets/banner-main.png'


const Banner = () => {
    return (
        <div>
            <div className='max-w-[1200px] mx-auto'>
                <div style={{ backgroundImage: `url(${bgImg})` }} className='bg-[#131313] p-12 rounded-[24px] my-5 flex flex-col justify-center items-center'>
                       <img className='w-50' src={logoPng} alt="This is banner logo"/>
                       <h1 className='text-white text-[2.5rem] font-bold text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                       <p className='text-white text-[1.5rem] text-center'>Beyond Boundaries Beyond Limits</p>
                       <button className='border-1 border-amber-300 p-1 rounded-[8px] mt-2.5'>
                          <button className='bg-[#e7fe29] p-2 rounded-[8px]'>Claim Free Credit</button>
                       </button>
                </div>

            </div>
        </div>
    );
};

export default Banner;