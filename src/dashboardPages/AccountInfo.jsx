import React from 'react'
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import { useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { login } from "../redux/userSlice"


export default function AccountInfo() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    useEffect(() => {
        const token = window.localStorage.getItem('token')
        axios.get("http://144.91.97.115:9090/api/v1/customer/Manage/AccountInfo", { headers: { "Authorization": `Bearer ${user.token}` } })
            .then(res => {
                console.log(res.data.result)
                console.log(res)
                dispatch(login({
                    firstName: res.data.result.firstname,
                    lastName: res.data.result.lastname,
                    phoneNumber: res.data.result.phoneNumber,
                    email: res.data.result.email,
                    point: res.data.result.points
                }))
            })


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
                    <span className="text-xl font-medium leading-tight ">Ad:</span><h5 class="text-xl font-bold leading-tight  ml-2">{user.firstName} {user.lastName}</h5>

                </div>
                <div className="flex justify-center items-center mb-2">
                    <span className="text-xl font-medium leading-tight ">Email:</span><p class="text-gray-500 text-xl ml-2">{user.email}</p>
                </div>
                <div className="flex justify-center mb-2">
                    <span className="text-xl font-medium leading-tight ">Phone:</span><p class="text-gray-500 text-lg ml-2">{user.phoneNumber}</p>
                </div>
                {user.point === 0 ? <p>Hi</p> : <p>Buy</p>}
            </div>
        </div>
    )
}
