import React from 'react';
import Header from '../header/header';
import Content from '../content';
import {Switch, Route} from 'react-router-dom';
import Sidebar from '../content/sidebar'
function Layout(props) {
    const [image,setImage] = React.useState([])
        const [jumlah,setJumlah] = React.useState([])
        const [harga,setHarga] = React.useState([])
        const [name,setName] = React.useState([])    
        const getSemua = (images,jumlahs,hargas,names)=>{
            setImage(images)
            setJumlah(jumlahs)
            setHarga(hargas)
            setName(names)
        }  

    return (
        <React.Fragment>
            <div className="h-screen w-screen pl-8 font-poppins">
                <header className="h-1/10 w-full flex items-center">
                    <Header/>
                </header>
                <main className="h-9/10 w-full flex">
                    <section className="w-5/6 h-full">
                        <Content getSemua={getSemua}/>
                    </section>
                    <section className="w-1/5 h-full" style={{background: 'white'}}>
                        <Sidebar image={image} jumlah={jumlah} harga={harga} name={name}/>
                    </section>
                </main>
            </div>
        </React.Fragment>
    )
}
export default Layout;