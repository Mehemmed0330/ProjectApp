import React from 'react';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { selectUser } from "../redux/userSlice";
import Swal from 'sweetalert2'




export default function EditAccount() {

    const user = useSelector(selectUser)
    const navigate = useNavigate()
    const [updateName, setUpdateName] = useState(`${user.firstName}`);
    const [updateLastName, setUpdateLastName] = useState(`${user.lastName}`);
    const [updateEmail, setUpdateEmail] = useState(`${user.email}`);

    const isUpdateAccount = () => {

        if (localStorage.getItem('num') === "1") {
            const data = {
                "firstname": updateName,
                "lastname": updateLastName,
                "email": updateEmail
            }
            axios.post("http://144.91.97.115:9090/api/v1/customer/Manage/EditAccount", data, {
                headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
            })
                .then(res => {
                    console.log(res.data)
                    navigate("/dashboard")

                }).catch(err => {
                    Swal.fire({
                        title: 'Error',
                        text: err.response.data.result,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                })

        }
        else {
            const data = {
                "firstname": updateName,
                "lastname": updateLastName,
                "email": updateEmail
            }
            axios.post("http://144.91.97.115:9090/api/v1/driver/Manage/UpdateInfo", data, {
                headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
            })
                .then(res => {
                    console.log(res.data)
                    navigate("/dashboard")

                }).catch(err => {
                    Swal.fire({
                        title: 'Error',
                        text: err.response.data.result,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                })
        }

    }




    return (
        <div className="bg-yellow-300">
            <form className="w-full max-w-lg py-16 mx-auto ">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Ad
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={(e) => setUpdateName(e.target.value)} className="bg-yellow-200 font-semibold appearance-none border-2 border-yellow-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-yellow-400 focus:border-black" id="inline-password" type="text" placeholder="" defaultValue={updateName} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Soyad
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={(e) => setUpdateLastName(e.target.value)} className="bg-yellow-200 font-semibold appearance-none border-2 border-yellow-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-yellow-400 focus:border-black" id="inline-password" type="text" placeholder="" defaultValue={updateLastName} />
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Email
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={(e) => setUpdateEmail(e.target.value)} className="bg-yellow-200 font-semibold appearance-none border-2 border-yellow-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-yellow-400 focus:border-black" id="inline-password" type="text" placeholder="" defaultValue={updateEmail} />
                    </div>
                </div>

                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button onClick={isUpdateAccount} className="shadow bg-black  focus:shadow-outline focus:outline-none text-yellow-300 font-bold py-2 px-4 rounded" type="button">
                            Gönder
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
