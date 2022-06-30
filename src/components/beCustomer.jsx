/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState } from "react"
import axios from "axios"
import Swal from 'sweetalert2'
import Login from './Login'
import "../assets/customer.css"


export default function beCustomer() {
    const [index, setIndex] = useState(1)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [sms, setSms] = useState('');
    const [smsShow, setSmsShow] = useState(false);

    const [loadingSubmit, setLoadingSubmit] = useState(false);




    const postRegisterCustomer = (e) => {
        e.preventDefault();
        const data = {
            "firstname": firstName,
            "lastname": lastName,
            "phoneNumber": phone,
            "password": null,
            "email": email,


        }

        setLoadingSubmit(true);

        if (password === passwordConfirm) {
            data.password = password;
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'parolalar uyusmuyor',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            setLoadingSubmit(false);
            return;
        }

        if (smsShow) {
            data.confirmationCode = sms;

            alert('sms show')

            axios.post('http://144.91.97.115:9090/api/v1/customer/Account/Register', data)
                .then(res => {
                    Swal.fire({
                        title: 'Success',
                        text: 'kaydolma basarili',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    console.log(res.data)
                })
                .catch(err => {
                    Swal.fire({
                        title: 'Error',
                        text: err.response.data.result,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                })
                .finally(() => {
                    setLoadingSubmit(false);
                })
        } else {
            axios.post('http://144.91.97.115:9090/api/v1/customer/Account/RegisterConfirm', data)
                .then(res => {
                    // Swal.fire({
                    //     title: 'Success',
                    //     text: 'sms gonderildi',
                    //     icon: 'success',
                    //     confirmButtonText: 'OK'
                    // })
                    console.log(res)
                    setSmsShow(true);
                })
                .catch(err => {
                    Swal.fire({
                        title: 'Error',
                        text: err.response.data.result,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                })
                .finally(() => {
                    setLoadingSubmit(false);
                })
        }

    }




    return (
        <div>
            <div className="md:px-24 px-2 py-10 flex justify-center bg-yellow-300 ">
                <div className="text-center bg-yellow-300 xl:px-24 xl:py-2 md:px-5 md:py-2 px-5 py-2 font-bold text-lg mx-5 cursor-pointer" onClick={() => setIndex(0)} style={{
                    backgroundColor: index === 0 ? "black" : "rgb(253,224,71)",
                    border: index === 0 ? "" : " 1px solid black",
                    color: index === 0 ? "rgb(253,224,71)" : "black"
                }}>
                    Müşteri ol
                </div>
                <div className="text-center bg-yellow-300 xl:px-24 xl:py-2 md:px-5 md:py-2 px-5 py-2 font-bold text-lg mx-5 cursor-pointer" onClick={() => setIndex(1)} style={{
                    backgroundColor: index === 1 ? "black" : "rgb(253,224,71)",
                    border: index === 1 ? "" : " 1px solid black",
                    color: index === 1 ? "rgb(253,224,71)" : "black"
                }}>
                    Giriş yap
                </div>
            </div>
            <div className="md:px-24 px-2 py-10 bg-yellow-300 " hidden={index !== 0}>
                <form>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none  dark:border-gray-600 dark:focus:border-yellow-300 focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none  dark:border-gray-600 dark:focus:border-yellow-300 focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Şifre</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none  dark:border-gray-600 dark:focus:border-yellow-300 focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required onChange={(e) => setPasswordConfirm(e.target.value)} />
                        <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Şifreyi Onayla</label>
                    </div>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none  dark:border-gray-600 dark:focus:border-yellow-300 focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required onChange={(e) => setFirstName(e.target.value)} />
                            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ad</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none  dark:border-gray-600 dark:focus:border-yellow-300 focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required onChange={(e) => setLastName(e.target.value)} />
                            <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Soyad</label>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none  dark:border-gray-600 dark:focus:border-yellow-300 focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required onChange={(e) => setPhone(e.target.value)} />
                            <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numara (+90)</label>
                        </div>

                    </div>
                    {
                        smsShow && (
                            <div className="mb-6 w-1/6">
                                <label htmlFor="code" className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sms Code</label>
                                <input value={sms} onChange={(e) => setSms(e.target.value)} type="number" id="code" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123456" required />
                            </div>
                        )
                    }
                    <button disabled={loadingSubmit} type="submit" className="text-yellow-300 bg-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={postRegisterCustomer}>
                        {loadingSubmit ? 'Bekleyin...' : 'Sunmak'}

                    </button>
                </form>

            </div>
            <div hidden={index !== 1}>
                <Login />
            </div>

        </div>
    )
}
