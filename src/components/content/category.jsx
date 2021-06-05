import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Bintang from '../../images/content/Vector (2).png'
import { NavLink, useParams } from "react-router-dom";
import Popup from 'reactjs-popup';

const Category = props => {
    const [category, setcategory] = React.useState([])
    let {id} = useParams();

    const [counter, setCounter] = React.useState(0);
    
    const getcategory = async(id) => {
        try{
            const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/8?page=${id}`;
            const response = await axios.get(url);
            console.log(response);
            setcategory(response.data.data);
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getcategory(id);
    }, [id]);

        const [image,setImage] = React.useState([])
        const [jumlah,setJumlah] = React.useState([])
        const [harga,setHarga] = React.useState([])
        const [name,setName] = React.useState([])
        props.getSemua(image,harga,jumlah,name);

    return(
        <React.Fragment>
           <h1 className="font-bold mt-20 text-2xl">Category</h1>
            <div className="mt-10">
          <ul className="flex items-center justify-between w-full flex-wrap overflow-auto">
            {category.map((dt, index) => (
                <li key={index} className="w-1/5 h-44 m-5">
                <Popup trigger={
                    <div className="rounded-full relative p-1">
                        <p className="absolute bg-yellow-50 font-bold rounded-full mt-24 p-1 ml-3">{dt.waktu}</p>
                        <img src={dt.image} alt={dt.image} className="rounded-2xl w-full h-36"/>
                        <p className="font-extrabold text-lg">{dt.name}</p>
                    </div>
                } modal>
                {close => (
                    <div style={{width:'500px', height:'600px'}}className="bg-white p-4 shadow-lg w-full rounded-2xl font-poppins">
                        <img src={dt.image} className="rounded-xl w-full h-60" alt={dt.image} />
                        <div className="flex justify-between mt-5 p-3">
                            <p className="font-extrabold text-2xl">{dt.name}</p>
                            <p className="font-extrabold text-2xl">Rp. {dt.harga}</p>
                        </div>
                        <div className="flex">
                            <div className="rounded-full ml-3 border-black">
                                <p>{dt.waktu}</p>
                            </div>
                            <div className="rounded-full ml-5 flex border-black">
                                <img src={Bintang} alt={Bintang} className="h-5 font-bold mr-2"/>
                                <p className="font-extrabold">{dt.rating}</p>
                            </div>
                        </div>
                        <div className="flex justify-between mt-3 p-3">
                            <p className="text-md font-bold text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                                Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                                delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                            </p>
                        </div>
                        <div className="ml-5 flex mb-2">
                                        <div className="text-sm font-extrabold">Stok : </div>
                                        <div className="text-sm font-extrabold">{dt.jumlah}</div>
                                    </div>
                        <div className="flex justify-between mb-0">
                        <div className="custom-number-input h-10 w-32">
                                        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                        <button disable={dt.pesan === 0} onClick={()=>{dt.jumlah++; setCounter(dt.pesan--)}} className=" bg-white border text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                            <span className="m-auto text-2xl font-thin">−</span>
                                        </button>
                                        <input type="number" className="outline-none  text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={dt.pesan}/>
                                        <button disable={dt.jumlah === 0}onClick={()=>{dt.jumlah--; setCounter(dt.pesan++)}} className="bg-white border text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                            <span className="m-auto text-2xl font-thin">+</span>
                                        </button>
                                        </div>
                                    </div>
                            <button onClick={()=>{
                                            setHarga(dt.harga)
                                            setJumlah(dt.pesan)
                                            setName(dt.name)
                                            setImage(dt.image)
                                        }}className="btn bg-yellow-300 cursor-pointer pl-5 pr-5 pt-2 pb-2 rounded-full text-black font-bold ml-auto">Tambah Pesanan</button>
                        </div>
                    </div>
                    )}
                </Popup>
            <div className="flex">
                <img src={Bintang} alt={Bintang} className="h-5 font-bold mr-3"/>
                <p className="font-bold">{dt.rating}</p>
                <p className="ml-20 font-bold">Rp. {dt.harga}</p>
            </div>
            </li>
            ))}
          </ul>
        </div>
        </React.Fragment>
    )
}
export default Category;