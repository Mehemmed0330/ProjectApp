import React from 'react'
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import { useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { login } from "../redux/userSlice"
import { AiFillEdit } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";


export default function AccountInfo() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('num') === "1") {
            const getData = async () => {
                axios.get("http://144.91.97.115:9090/api/v1/customer/Manage/AccountInfo", { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                    .then(res => {

                        dispatch(login({
                            firstName: res.data.result.firstname,
                            lastName: res.data.result.lastname,
                            phoneNumber: res.data.result.phoneNumber,
                            email: res.data.result.email,
                            point: res.data.result.points
                        }))
                    })
            }
            getData();

        }
        else {
            axios.get("http://144.91.97.115:9090/api/v1/driver/Manage/GetAccountInfo", { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    console.log(res.data.result)
                    dispatch(login({
                        firstName: res.data.result.firstname,
                        lastName: res.data.result.lastname,
                        phoneNumber: res.data.result.phoneNumber,
                        email: res.data.result.email,
                        raiting: res.data.result.raiting,
                        balance: res.data.result.balance,
                        img: res.data.result.driverPhoto


                    }))
                })
        }



    }, []);


    return (
        <div className="pl-72 pr-2 ">
            <div class="text-center">
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                    class="rounded-full w-32 mb-4 mx-auto"
                    alt="Avatar"
                />
                <div className="flex justify-center mb-2">
                    <span className="text-xl font-medium ">Ad:</span><h5 class="text-xl font-bold   ml-2">{user.firstName} {user.lastName}</h5>

                </div>
                <div className="flex justify-center items-center mb-2">
                    <span className="text-xl font-medium  ">Email:</span><p class="text-gray-500 text-xl ml-2">{user.email}</p>
                </div>
                <div className="flex justify-center mb-2">
                    <span className="text-xl font-medium  ">Phone:</span><p class="text-gray-500 text-lg ml-2 flex items-center">{user.phoneNumber} </p>
                    <div onClick={() => navigate("/editPhone")} className="p-2 bg-black ml-2 cursor-pointer"><AiFillEdit className="text-yellow-300 " /></div>

                </div>
                {localStorage.getItem('num') === "1" ? <div className="flex justify-center mb-2">
                    <span className="text-xl font-medium  ">Points:</span><p class="text-gray-500 text-lg ml-2">{user.point}</p>
                </div> : null}
                {localStorage.getItem('num') === "1" ? null : <div className="flex justify-center mb-2">
                    <span className="text-xl font-medium  ">Raiting:</span><p class="text-gray-500 text-lg ml-2">{user.raiting}</p>
                </div>}
                {localStorage.getItem('num') === "1" ? null : <div className="flex justify-center mb-2">
                    <span className="text-xl font-medium  ">Balance:</span><p class="text-gray-500 text-lg ml-2">{user.balance}</p>
                </div>}

            </div>

            <div className="flex justify-center">
                <button onClick={() => navigate("/editAccount")} className="flex items-center bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded">
                    Kişisel bilgileri düzenle <AiFillEdit className="ml-2" />
                </button>
            </div>
        </div>
    )
}
