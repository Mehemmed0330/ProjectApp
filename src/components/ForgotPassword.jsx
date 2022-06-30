import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios";
import Swal from 'sweetalert2'


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ResetPassword from './ResetPassword'

export default function ForgotPassword() {
    const [type, setType] = useState('1');
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [phone, setPhone] = useState('');
    const [resetPhone, setResetPhone] = useState('')
    // const [pass, setPass] = useState('');
    const [index, setIndex] = useState(0);
    const [open, setOpen] = React.useState(false);
    const [resetSms, setResetSms] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const sendPassword = (e) => {
        e.preventDefault()

        setLoadingSubmit(true);

        if (type === '1') {
            const data = {
                "phoneNumber": phone,
                "smsSignature": resetSms
            };
            // data.smsSignature = resetSms;
            axios.post('http://144.91.97.115:9090/api/v1/customer/Account/SendPasswordReset', data)
                .then(res => {
                    // localStorage.setItem('token', res.data.result.jwtToken);
                    console.log(res.data)
                    handleClickOpen()
                })
                .catch(err => {
                    if (err) {
                        Swal.fire({
                            title: 'Error',
                            text: err.response.data.result,
                            icon: 'error',
                            confirmButtonText: 'OK'
                        })
                        console.error(err)
                    }
                    else if (phone && !err) {
                        handleClickOpen()
                    }



                })
                .finally(() => setLoadingSubmit(false))



        } else if (type === '0') {
            const data = {
                "phoneNumber": phone,
                "smsSignature": resetSms
            }

            axios.post('http://144.91.97.115:9090/api/v1/driver/Account/SendresetSmswordReset', data)
                .then(res => {
                    localStorage.setItem('token', res.data.result.jwtToken);

                })
                .catch(err => {
                    Swal.fire({
                        title: 'Error',
                        text: err.response.data.result,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                })
                .finally(() => setLoadingSubmit(false))

        }

    }


    useEffect(() => {
        if (resetSms.length === 6) {
            handleClose()
            setIndex(1)
        }
    }, [resetSms]);

    const resetPassword = (e) => {
        e.preventDefault()
        const data = {
            "phoneNumber": phone,
            "newPassword": newPassword,
            "resetCode": resetSms
        }
        if (type === '1') {
            axios.post("http://144.91.97.115:9090/api/v1/customer/Account/ResetPassword", data)
                .then(res =>
                    console.log(res.data)
                ).catch(err => {
                    Swal.fire({
                        title: 'Error',
                        text: err.response.data.result,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                })
        }
        else if (type === '0') {
            axios.post("http://144.91.97.115:9090/api/v1/driver/Account/ResetPassword", data)
                .then(res =>
                    console.log(res.data)
                ).catch(err => {
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
        <div className="py-10" style={{ height: "26rem" }}>
            <form className="w-full max-w-sm py-16 mx-auto" hidden={index !== 0}>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="0">Bisofor</option>
                    <option value="1">Musteri</option>
                </select>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            Numaranız
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={(e) => setPhone(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="+994" />
                    </div>
                </div>

                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button onClick={sendPassword} className="shadow bg-yellow-300 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Submit
                        </button>
                    </div>
                </div>

                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Gonder</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Numaraniza gelen  kodu giriniz.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Kodunuz"
                            type="email"
                            fullWidth
                            variant="standard"
                            value={resetSms}
                            onChange={(e) => setResetSms(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        {/* <Button onClick={handleClose}>Cancel</Button> */}
                        {/* <Button >Subscribe</Button> */}
                    </DialogActions>
                </Dialog>

            </form>
            <div hidden={index !== 1}>
                <div className="py-10" style={{ height: "26rem" }}>
                    <form className="w-full max-w-lg py-16 mx-auto">
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                                    Password
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
                                <input onChange={(e) => setNewPassword(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
                            </div>
                        </div>

                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3"></div>
                            <div className="md:w-2/3">
                                <button onClick={resetPassword} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
