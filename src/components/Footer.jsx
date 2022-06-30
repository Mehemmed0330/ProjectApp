import React from 'react'
import Logo from "../assets/Logo.svg"
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsFillTelephoneFill } from "react-icons/bs"



export default function Footer() {
    return (
        <div className="bg-black mt-auto py-2">
            <div className="md:flex md:justify-between md:px-0 md:pr-8 px-5 ">
                <div>
                    <img src={Logo} alt="" className="w-48 mx-auto" />
                </div>
                <div className="xl:w-1/5 xl:mx-0 mx-auto ">
                    <div className="text-center">
                        <div className="text-3xl font-medium text-yellow-300 text-center">Adres</div>
                        <div className="text-lg text-yellow-300 my-5 text-center">Trump Towers <br />
                            İstanbul / Şişli <br />
                            Mecidiyeköy Yolu Caddesi No:12</div>
                    </div>

                </div>

                <div className="leading-8 md:my-0 my-5 mr-5">
                    <div className="text-center">
                        <h2 className="text-3xl font-medium text-yellow-300">Yardım Merkezi</h2>
                        <ul className="text-gray-300">
                            <li className="mb-1 mt-5">
                                <a href="https://www.instagram.com/bisofortr/" className="text-lg text-yellow-300 my-5 flex items-center justify-center"><BsInstagram className="mr-2" />İnstagram</a>
                            </li>
                            {/* <li className="mb-1">
                                <a href="#" className="text-lg text-yellow-300 my-5 ">Twitter</a>
                            </li> */}
                            <li className="mb-1">
                                <a href="https://www.facebook.com/bisofor" className="text-lg text-yellow-300 my-5 flex items-center justify-center"><BsFacebook className="mr-2" />Facebook</a>
                            </li>
                            {/* <li className="mb-2">
                                <a href="#" className="hover:underline">Contact Us</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-medium text-yellow-300 text-center">Bize Ulaşın</h2>
                    <div className="text-yellow-300 md:py-0 py-5 my-5"><a href="tel:0850 3083888" className="flex items-center justify-center"><BsFillTelephoneFill className="mr-2" />0850 3083888</a> </div>
                </div>
            </div>
            <hr className="my-6 border-yellow-300 sm:mx-auto  lg:my-8" />
            <span className="block text-sm text-yellow-300 sm:text-center text-center ">© 2022 <a href="" className="hover:underline">BiŞoför™</a>.Tüm hakları Saklıdır.
            </span>
        </div>
    )
}
