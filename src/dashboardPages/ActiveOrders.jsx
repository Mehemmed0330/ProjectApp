import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import { CgArrowLongRight } from "react-icons/cg"
import { GiCardboardBox } from "react-icons/gi"


export default function ActiveOrders() {
    const [orderActiveData, setOrderActiveData] = useState([]);
    useEffect(() => {
        if (localStorage.getItem('num') === "1") {
            axios.get("http://144.91.97.115:9090/api/v1/customer/Order/GetActiveOrders", { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    setOrderActiveData(res.data.result)
                    console.log(res)

                })
                .catch(err => {
                    console.log(err)
                })
        }
        else if (localStorage.getItem('num') === "2") {
            axios.get("http://144.91.97.115:9090/api/v1/driver/Order/GetActiveOrders", { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    setOrderActiveData(res.data.result)
                })
                .catch(err => {
                    console.log(err)
                })
        }

    }, []);
    return (
        <div className="pl-72 pr-2 pt-16">
            {orderActiveData != null && orderActiveData.length > 0 ? orderActiveData?.map((item, index) =>
                <ul key={item.id} role="list" class="divide-y mb-5 divide-gray-200 dark:divide-gray-700  rounded-lg border border-gray-200 shadow-md ">
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4 justify-center">
                            <div class="flex-shrink-0">
                                <img class="w-12 h-12 rounded-full" src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" alt="Neil image" />
                            </div>
                            <div class="w-9/12">
                                {localStorage.getItem('num') === "1" ?
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        {item.driverFirstname} {item.driverLastname}
                                    </p> :
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        {item.customerFirstname}  {item.customerLastname}
                                    </p>
                                }
                                {localStorage.getItem('num') === "1" ?
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                        {item.driverPhoneNumber}
                                    </p> :
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                        {item.customerPhoneNumber}
                                    </p>
                                }
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $320
                            </div>
                        </div>
                        <p className="mx-auto my-2 w-[56rem] text-sm font-medium text-gray-900 truncate">
                            {item.receiptTime}
                        </p>
                        <p className="mx-auto my-2 w-[56rem] text-sm font-medium text-gray-900 truncate">
                            Status: {item.status}
                        </p>
                        {localStorage.getItem('num') === "1" ?
                            <p className="mx-auto my-2 w-[56rem] text-sm font-medium text-gray-900 truncate">
                                Sipariş türü: {item.orderType}
                            </p> : null}
                        <p className="mx-auto my-2 w-[56rem] text-sm font-medium text-gray-900 truncate">
                            Ödeme şekli: {item.paymentMethod}
                        </p>
                        <p className=" mx-auto my-2 w-[50rem] text-sm font-medium text-gray-900 truncate">Nereden nereye:</p>
                        <div className="flex items-center mx-28">
                            <p className="text-sm font-medium text-gray-900">
                                {item.addresses[0].addressText}
                            </p>
                            <CgArrowLongRight className="mx-2" />
                            <p className="text-sm font-medium text-gray-900">
                                {item.addresses[1].addressText}
                            </p>
                            {/* {item.addresses.map((address, index) =>
                                <p className="w-[15rem] text-sm font-medium text-gray-900 truncate">
                                    {address.addressText}
                                </p>
                            )} */}
                        </div>
                    </li>
                </ul>
            ) : <GiCardboardBox className="text-9xl mx-auto h-96" />}
        </div>
    )
}
