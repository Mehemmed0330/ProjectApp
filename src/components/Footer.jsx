import React from 'react'
import Logo from "../assets/Logo.svg"

export default function Footer() {
    return (
        <div className="bg-black mt-auto">
            <div className="md:flex md:justify-between md:px-0 md:pr-8 px-5">
                <div>
                    <img src={Logo} alt="" className="w-48 mx-auto" />
                </div>
                <div className="w-1/2 md:mx-0 ">
                    <div>
                        <div className="text-3xl font-medium text-yellow-300">Ofis ünvanı</div>
                        <div className="text-lg text-yellow-300 my-5 ">Gül Proje Express Residence Mahmutbey Taşocağı Yolu No:33/1, A Blok D143 / 34218 Mahmutbey, Istanbul Province, Turkey</div>
                    </div>

                </div>

                <div className="leading-8 md:my-0 my-5">
                    <div className="text-yellow-300">info@bisofor.com.tr</div>
                    <div className="text-yellow-300">www.elman.com</div>
                    <div className="text-yellow-300">www.bisofor.com</div>
                    {/* <div className="text-white">Lorem ipsum dolar</div>
                    <div className="text-white">Lorem ipsum dolar</div> */}
                </div>
                <div>
                    <div className="text-yellow-300 md:py-0 py-5">+994513320202</div>
                </div>
            </div>
        </div>
    )
}
