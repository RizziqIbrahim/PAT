import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Semua from "../../images/navbar/semua.jpg"


export default function Nav() {
    const [category, setCategory] = React.useState([]); 
    const getCategory = async() => {
      try {
        const url = `https://belajar-react.smkmadinatulquran.sch.id/api/category/all`;
        const response = await axios.get(url);
        console.log(response.data.data);
        setCategory(response.data.data);
      } catch (error) {
        console.log(error)
      }
    };

    React.useEffect(()=>{
      getCategory();
    });

  return (
    <React.Fragment>
      <div className="mt-10 pr-5">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">Kategori</h1>
          <button
            style={{ background: "#FB6D3A " }}
            className="text-xs rounded-2xl text-white font-bold px-4 py-2"
          >
            Lebih Lengkap
          </button>
        </div>
        <div className="mt-3">
          <ul className="flex items-center justify-between w-full flex-nowrap overflow-auto">
               
          <li className={`flex-none w-2/10 h-24 relative m-5 `}>
                <img className="rounded-xl w-full h-24" src={Semua} alt={Semua} />
                <NavLink to="/">
                  <p style={{background:'rgba(1,1,1,0.5)'}} className="absolute z-10 rounded-xl h-full flex items-center justify-center top-0 botton-0 left-0 right-0  text-white font-black">
                    Semua
                  </p>
                </NavLink>
              </li>
            {category.map((dt, index) => (
                
                <li key={index} className={`flex-none ${category.length === 3 ? "w-1/4" : "w-2/10"} h-24 relative m-5 `}>
                <img className="rounded-xl w-full h-24" src={dt.img} alt={dt.img} />
                <NavLink to={`/category/${dt.id}`}>
                  <p style={{background:'rgba(1,1,1,0.5)'}} className="absolute z-10 rounded-xl h-full flex items-center justify-center top-0 botton-0 left-0 right-0  text-white font-black">
                    {dt.name}
                  </p>
                </NavLink>
              </li>
            ))}
            
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}