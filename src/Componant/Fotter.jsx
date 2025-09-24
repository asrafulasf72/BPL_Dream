import React from 'react';
import fotterBgImg from '../assets/bg-shadow.png'
import fotterlogo from '../assets/logo-footer.png'

const Fotter = () => {
    return (
        <div className='bg-[#06091a] relative'>
             <div className='newlatter p-2 border-2 border-white rounded-[0.8rem] max-w-[1200px] mx-auto -translate-y-20'>
                   <div style={{ backgroundImage: `url(${fotterBgImg})` }} className=' bg-white rounded-[0.8rem] p-12 flex justify-center items-center'>
                       <div>
                         <h2 className='text-[2rem] font-medium text-center'>Subscribe to our Newsletter</h2>
                         <p className='text-[1rem] font-normal text-center mt-1.5'>Get the latest updates and news right in your inbox!</p>
                        <div className='mx-auto flex gap-2 mt-2.5'>
                              <input className='w-80 border-1 border-gray-200 text-black p-2 rounded-[.4rem]' type="email" placeholder='Enter your Email'/>
                             <button className='bg-amber-400 p-2 rounded-[.4rem]'>Subscribe</button>
                        </div>
                       </div>
                   </div>
             </div>
             <div className='max-w-[1200px] mx-auto -translate-y-10'>
                   <img className='mx-auto w-30' src={fotterlogo} alt="" />

                   <div className='flex flex-col gap-2 md:flex-row justify-between items-center mt-8'>
                       <div className='flex-1 text-white'>
                          <h2 className='text-[1.2rem] font-semibold'>About us</h2>
                          <p className='text-[.8rem] text-gray-200'>We are a passionate team <br></br> dedicated to providing the best <br></br>services to our customers.</p>
                       </div>
                       <div className='flex-1 text-white'>
                            <h2 className='text-[1.2rem] font-semibold'>Quick Link</h2>
                            <ul className='pl-4'>
                                <li><a className='text-[.8rem] text-gray-200' href="#">Home</a></li>
                                <li><a className='text-[.8rem] text-gray-200' href="#">Service</a></li>
                                <li><a className='text-[.8rem] text-gray-200' href="#">About</a></li>
                                <li><a className='text-[.8rem] text-gray-200' href="#">Contact</a></li>
                            </ul>
                       </div>
                       <div className='flex-1 text-white'>
                         <h2 className='text-[1.2rem] font-semibold'>Subscribe</h2>
                         <p className='text-[.8rem] text-gray-200'>Subscribe to our newsletter for the latest updates.</p>
                        <div className='mt-2'>
                             <input className='border-2 border-gray-200 p-2 rounded-l-[.8rem] border-r-0' type="email" name="" id="" placeholder='Enter Email'/>
                         <button className='bg-yellow-300 rounded-r-[.8rem] p-2.5 text-black font-semibold border-l-0'>Subscribe</button>
                        </div>
                       </div>
                   </div>
             </div>
             <div className='flex justify-center items-center border-2 border-t-[#ffffff26]'>
                <p className='text-[.8rem] text-gray-200 m-2.5'>@2024 Your Company All Rights Reserved.</p>
             </div>
        </div>
    );
};

export default Fotter;