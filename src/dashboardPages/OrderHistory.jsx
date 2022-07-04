/* eslint-disable array-callback-return */
import { useState, useEffect } from "react"
import DatePicker from "react-datepicker";
import axios from "axios"
import "react-datepicker/dist/react-datepicker.css";
import "../assets/date.css"
import moment from "moment"
import { GiCardboardBox } from "react-icons/gi"




import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { CgArrowLongRight } from "react-icons/cg"


export default function OrderHistory() {
    const today = new Date();
    const [startDate, setStartDate] = useState(moment(parseInt(today.getMonth()) + "/" + today.getDate() + "/" + today.getFullYear()).format('L'));
    // const oneMonthAfter = new Date();
    const [endDate, setEndDate] = useState(moment(parseInt(today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear()).format('L'));
    const [orderHistoryData, setOrderHistoryData] = useState([]);
    console.log(startDate)
    const handleChange = (newValue) => {
        setStartDate(moment(newValue).format('L'));
    };

    const handleChangeEnd = (newValue) => {
        setEndDate(moment(newValue).format('L'));
    }


    // const endDate = moment(parseInt(today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear()).format('L');
    // const startDate = moment(parseInt(today.getMonth() - 2) + "/" + today.getDate() + "/" + today.getFullYear()).format('L');

    // console.log(endDate)
    // console.log(startDate)

    useEffect(() => {
        if (localStorage.getItem('num') === "1") {
            axios.get(`http://144.91.97.115:9090/api/v1/customer/Order/GetOrderHistory?BeginDate=${startDate}&EndDate=${endDate}`, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    setOrderHistoryData(res.data.result)
                    console.log(res)
                })
        }
        else if (localStorage.getItem('num') === "2") {
            axios.get(`http://144.91.97.115:9090/api/v1/driver/Order/GetOrderHistory?BeginDate=${startDate}&EndDate=${endDate}`, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    setOrderHistoryData(res.data.result)
                    console.log(res)
                })
        }
    }, [startDate, endDate]);

    console.log(orderHistoryData.map((item) => {
        return item.addresses[0].addressText
    }))

    return (
        <div className="pl-72 pr-2 pt-10" style={{ overflowY: "scroll", height: "80vh" }}>
            <div className="flex justify-center mb-2 mt-5">
                <LocalizationProvider dateAdapter={AdapterDateFns} >
                    <Stack spacing={3} className="mx-2">
                        <DesktopDatePicker
                            label="Başlangıç ​​tarihi"
                            inputFormat="MM/dd/yyyy"
                            value={startDate}
                            onChange={handleChange}
                            // minDate={startDate}
                            // maxDate={endDate}
                            renderInput={(params) => <TextField {...params} />}

                        />
                    </Stack>
                    <Stack spacing={3} className="mx-5">
                        <DesktopDatePicker
                            label="Bitiş tarihi"
                            inputFormat="MM/dd/yyyy"
                            value={endDate}
                            onChange={handleChangeEnd}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
            </div>
            {orderHistoryData != null && orderHistoryData.length > 0 ? orderHistoryData?.map((item, index) =>
                <ul key={item.id} role="list" class="divide-y mb-5 divide-gray-200 dark:divide-gray-700  rounded-lg border border-gray-200 shadow-md ">
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4 justify-center">
                            <div class="flex-shrink-0">
                                <img class="w-12 h-12 rounded-full" src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" alt="Neil image" />
                            </div>
                            <div class="w-9/12">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    {item.driverFirstname} {item.driverLastname}
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {item.driverPhoneNumber}
                                </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $320
                            </div>
                        </div>
                        <p className="mx-auto my-5 w-[56rem] text-sm font-medium text-gray-900 truncate">
                            {item.receiptTime}
                        </p>
                        <p className="mx-auto my-5 w-[56rem] text-sm font-medium text-gray-900 truncate">
                            Status: {item.status}
                        </p>
                        <p className="mx-auto my-5 w-[56rem] text-sm font-medium text-gray-900 truncate">
                            Sipariş türü: {item.orderType}
                        </p>
                        <p className="mx-auto my-5 w-[56rem] text-sm font-medium text-gray-900 truncate">
                            Ödeme şekli: {item.paymentMethod}
                        </p>
                        <p className=" mx-auto my-5 w-[50rem] text-sm font-medium text-gray-900 truncate">Nereden nereye:</p>
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
