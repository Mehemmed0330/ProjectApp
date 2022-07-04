import React from 'react'
import axios from "axios"
import { useState } from "react"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"


export default function ChangePassword() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const navigate = useNavigate()
    const [confirmPassword, setConfirmPassword] = useState("");

    const isChangePassword = () => {
        if (localStorage.getItem('num') === "1") {
            const data = {
                "oldPassword": oldPassword,
                "newPassword": newPassword,
            }
            if (newPassword === confirmPassword) {
                axios.post("http://144.91.97.115:9090/api/v1/customer/Manage/ChangePassword", data, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                    .then(res => {
                        console.log(res)
                        window.location.reload()
                        Swal.fire(
                            'Başarılı!',
                            'Parolanız deyiştirildi!',
                            'success'
                        )
                    }).catch(err => {
                        Swal.fire({
                            title: 'Error',
                            text: err.response.data.result,
                            icon: 'error',
                            confirmButtonText: 'OK'
                        })
                    })
            } else {
                Swal.fire({
                    title: 'Error',
                    text: 'Parolalar eşleşmiyor!',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            }


        }
        else if (localStorage.getItem('num') === "2") {
            const data = {
                "oldPassword": oldPassword,
                "newPassword": newPassword,
            }
            if (newPassword === confirmPassword) {
                axios.post("http://144.91.97.115:9090/api/v1/driver/Manage/ChangePassword", data, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                    .then(res => {
                        console.log(res)
                        window.location.reload()
                        Swal.fire(
                            'Başarılı!',
                            'Parolanız deyiştirildi!',
                            'success'
                        )
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
                Swal.fire({
                    title: 'Error',
                    text: 'Parolalar eşleşmiyor!',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            }

        }



    }

    return (
        <div className="pl-72 pr-2 pt-16">
            <form className="w-full max-w-lg py-16 mx-auto">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                            Old password
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={(e) => setOldPassword(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                            New password
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={(e) => setNewPassword(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                            Confirm Password
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={(e) => setConfirmPassword(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button onClick={isChangePassword} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
