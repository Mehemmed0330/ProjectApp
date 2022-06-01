import React from 'react'
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";

export default function AccountInfo() {
    const user = useSelector(selectUser)
    return (
        <div className="pl-72 pr-2 ">
            <div class="text-center">
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                    class="rounded-full w-32 mb-4 mx-auto"
                    alt="Avatar"
                />
                <div className="flex justify-center mb-2">
                    <span className="text-xl font-medium leading-tight ">Ad:</span><h5 class="text-xl font-bold leading-tight  ml-2"></h5>

                </div>
                <div className="flex justify-center items-center mb-2">
                    <span className="text-xl font-medium leading-tight ">Email:</span><p class="text-gray-500 text-xl ml-2">mehemmedeliyevn0330@gmail.com</p>
                </div>
                <div className="flex justify-center mb-2">
                    <span className="text-xl font-medium leading-tight ">Phone:</span><p class="text-gray-500 text-lg ml-2">994505188255</p>
                </div>
                <div className="flex justify-center mb-2">
                    <span className="text-xl font-medium leading-tight ">Point:</span><p class="text-gray-500 text-lg ml-2">0</p>
                </div>
            </div>
        </div>
    )
}
