import React from 'react';
import Semua from '../../images/navbar/semua.jpg'
import Pizza from '../../images/navbar/pizza.jpg'
import Burger from '../../images/navbar/burger.jpg'

export default function Sidebar(props) {
    let data = [
        {
            Image: props.image,
            Jumlah: props.jumlah,
            Harga: props.harga,
            Nama: props.name
        }
    ]
    return(
        <React.Fragment>
            <div className="mt-5 items-center fixed">
                <p className="font-extrabold text-xl">Pesanan Saya</p>
                <div className="bg-purple-500 text-white w-64 mt-3 p-3 rounded-xl">
                    <p className="font-bold text-sm mb-5">Rizziq Ibrahim</p>
                    <p className="font-extrabold text-xl mb-10">Rp 1000.000,-</p>
                    <p className="font-light">375892*****9023</p>
                </div>

                <ul className="flex items-center justify-between w-full flex-wrap overflow-y-auto h-56 mt-20">
                    {data.map((dt,i)=>(
                        dt.Jumlah*dt.Harga === 0 ? "" :
                        <li key={i} className="flex p-3 mb-3">
                        <div className="w-20">
                            <img src={dt.Image} alt={dt.Image} className="w-20 rounded-xl"/>
                        </div>
                        <div className="w-10 mt-auto mb-auto">
                            <p className="text-sm font-extrabold mt-auto mb-auto ml-4">{dt.Jumlah}   x</p>    
                        </div>
                        <div className="w-28 mt-auto mb-auto">
                            <p className="text-sm font-extrabold mt-auto mb-auto ml-2">{props.name}</p>    
                        </div>
                        <div className="w-10 mt-auto mb-auto">
                            <p className="text-sm text-gray-500 font-bold mt-auto mb-auto ml-2">{dt.Jumlah * dt.Harga}</p>
                        </div>
                    </li>
                    ))}
                </ul>
                <div className="mt-10 flex">
                    <h1 className="ml-6  text-xl font-extrabold mb-5"> Total :</h1>
                    <h1 className="text-xl font-extrabold mb-5 ml-20">{props.jumlah * props.harga}</h1>
                </div>
                <div className="mt-auto pl-5">
                    <button className="btn bg-yellow-300 cursor-pointer w-64  pl-5 pr-5 pt-2 pb-2 rounded-xl  text-black font-bold ml-auto">Pesan</button>
                </div>
            </div>
        </React.Fragment>
    )
}