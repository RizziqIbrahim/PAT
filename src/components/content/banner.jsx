import React from 'react';
import bannerImage from "../../images/content/banner.png"

export default function Banner(params) {
    return(
        <React.Fragment>
            <div style={{ background:"#FFF7ED"}}className="flex items-center justify-center px-24 py-4 rounded-xl">
                <div className="w-5-12 h-full">
                    <img className="w-44 h-24"src={bannerImage} alt={bannerImage} />
                </div>
                <div style={{color:"#FB6D3A"}}className="ml-8 w-7/12 h-full font-bold">
                    <h1 className="text-2xl  font-extrablack">Promo Hari Ini</h1>
                    <h2 className="text-lg  font-bold">Perut Kenyang, hati senang</h2>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <ul className="flex w-1/12 items-center  justify-between mt-4">
                    <li>
                        <div className="w-2 h-2 rounded-full border"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full border"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full border"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full border"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full border"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full bg-red-200"></div>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}