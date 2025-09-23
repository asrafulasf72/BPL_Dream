import React from 'react';
import navImg from '../assets/logo.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar max-w-[1200px] mx-auto p-3 my-5">
                
                   <div className="navbar-start">
                    <a className="btn btn-ghost text-xl"> <img className='w-12' src={navImg} alt="" /></a>
                  </div>
                  <div className="navbar-end">
                    <a className="btn"> <span>6000000000</span> <span>Coin</span> </a>
                  </div>
               
            </div>
        </div>
    );
};

export default Navbar;