import React from 'react';
import Ellipse1 from '../../images/header/Ellipse 1.png'
import Ellipse3 from '../../images/header/Ellipse 3.png'
import Vector1 from '../../images/header/Vector (1).png'
import Vector from '../../images/header/Vector.png'
import logo from '../../images/header/logo.png'

export default function header() {
    return(
        <React.Fragment>
            <section className="w-5/6 flex items-center">
                <div className="w-1/3">
                    <img src={logo} alt={logo}/>
                </div>
                <div className="w-2/3 flex relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 absolute top-3.5 left-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>

                    <input className="w-4/6 text-lg pl-14 py-3 rounded-lg bg-gray-100" placeholder="Cari makan bang?" type="text"/>
                </div>
            </section>
            <section style={{background: 'rgba(252, 252, 252, 0.9)'}} className="w-1/6 h-full pl-10 pr-5 flex items-center justify-between ">
                <div><img className="w-1/2"  src={Vector} alt="" /></div>
                <div><img className="w-1/2"  src={Vector1} alt="" /></div>
                <div><img className="w-1/2"  src={Ellipse3} alt="" /></div>
                <div><img className="w-1/2"  src={Ellipse1} alt="" /></div>
             </section>
        </React.Fragment>
    )
    
}