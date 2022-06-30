import { useState, useEffect } from "react"
import DatePicker from "react-datepicker";
import axios from "axios"
import "react-datepicker/dist/react-datepicker.css";
import "../assets/date.css"
import moment from "moment"



import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


export default function OrderHistory() {
    const today = new Date();
    const [startDate, setStartDate] = useState(moment(parseInt(today.getMonth()) + "/" + today.getDate() + "/" + today.getFullYear()).format('L'));
    // const oneMonthAfter = new Date();
    const [endDate, setEndDate] = useState(moment(parseInt(today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear()).format('L'));
    console.log(startDate)



    // const endDate = moment(parseInt(today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear()).format('L');
    // const startDate = moment(parseInt(today.getMonth() - 2) + "/" + today.getDate() + "/" + today.getFullYear()).format('L');

    // console.log(endDate)
    // console.log(startDate)

    useEffect(() => {
        axios.get(`http://144.91.97.115:9090/api/v1/customer/Order/GetOrderHistory?BeginDate=${startDate}&EndDate=${endDate}`, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
            .then(res => {

                console.log(res)
            })
    }, [startDate]);


    const handleChange = (newValue) => {
        setStartDate(moment(newValue).format('L'));
    };

    return (
        <div className="pl-72 pr-2 ">
            <div className="flex justify-center">


                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                        <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="MM/dd/yyyy"
                            value={startDate}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>

            </div>
        </div>
    )
}
