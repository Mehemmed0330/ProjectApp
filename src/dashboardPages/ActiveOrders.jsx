import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'

export default function ActiveOrders() {
    useEffect(() => {
        if (localStorage.getItem('num') === "1") {
            axios.get("http://144.91.97.115:9090/api/v1/customer/Order/GetActiveOrders", { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    console.log(res)
                })
        }
        else if (localStorage.getItem('num') === "2") {
            axios.get("http://144.91.97.115:9090/api/v1/driver/Order/GetActiveOrders", { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    console.log(res)
                })
        }

    }, []);
    return (
        <div className="pl-72 pr-2 pt-16">
            Active orders
        </div>
    )
}
