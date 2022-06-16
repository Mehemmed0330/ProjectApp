import React from 'react';
import { AiFillDelete } from "react-icons/ai"
import axios from "axios"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectAddress } from "../redux/addressSlice"
import { setAddress } from "../redux/addressSlice"

const SavedAddresses = () => {
    const [address, setAddressData] = useState([]);
    const addressData = useSelector(selectAddress)
    const dispatch = useDispatch();

    useEffect(() => {

        if (localStorage.getItem('num') === "1") {
            axios.get("http://144.91.97.115:9090/api/v1/customer/Manage/Addresses", { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    console.log(res.data.result)
                    setAddressData(res.data.result)
                    dispatch(setAddress({
                        addressId: res.data.result.map((id) =>
                            id.id
                        )
                    }))

                })
        }
    }, [dispatch]);


    const deleteAddress = (id) => {



        const data = {
            "addressId": id
        }
        // console.log(address.filter(item => item.addressId !== addressData.addressId))
        // console.log(addressData.addressId[id])
        axios.post("http://144.91.97.115:9090/api/v1/customer/Manage/DeleteAddress", data, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data)
                    console.log(addressData.addressId)
                    axios.get("http://144.91.97.115:9090/api/v1/customer/Manage/Addresses", { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                        .then(res => {
                            console.log(res.data.result)
                            setAddressData(res.data.result)
                            dispatch(setAddress({
                                addressId: res.data.result.map((id) =>
                                    id.id
                                )
                            }))
                            console.log(addressData.addressId)

                        })
                }

            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className="pl-72 pr-7 ">
            {address.map((addresses, index) =>
                <div key={index} className="p-6 mb-5  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{addresses.shortName}</h5>

                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{addresses.addressText}</p>
                    <button onClick={() => deleteAddress(addresses.id)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-black bg-yellow-300 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-500 ">
                        Delete
                        <AiFillDelete className="ml-2 -mr-1 w-4 h-4" />
                    </button>
                </div>
            )}


        </div>
    );
}

export default SavedAddresses;
