import React from 'react'
import { useState } from "react"
import axios from "axios";
import Swal from 'sweetalert2'



import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export default function EditPhone() {
    const [editPhone, setEditPhone] = useState("");
    const [editSms, setEditSms] = useState("");

    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const isSendSms = () => {
        if (localStorage.getItem('num') === "1") {
            if (editPhone.length === 12) {
                const data = {
                    "newPhoneNumber": editPhone,
                    "smsSignature": editSms
                }
                axios.post("http://144.91.97.115:9090/api/v1/customer/Manage/ChangePhoneConfirmation", data, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                    .then(res => {
                        console.log(res)
                        handleClickOpen()
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
                    text: "Numaranız 12 haneli olmalıdır!",
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            }




        }
        else if (localStorage.getItem('num') === "2") {
            const data = {
                "newPhoneNumber": editPhone,
                "smsSignature": editSms
            }
            if (editPhone.length === 12) {
                axios.post("http://144.91.97.115:9090/api/v1/driver/Manage/ChangePhoneConfirmation", data, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                    .then(res => {
                        console.log(res)
                        handleClickOpen()
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
                    text: "Numaranız 12 haneli olmalıdır!",
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            }
        }
    }
    const isChangePhone = () => {
        if (localStorage.getItem('num') === "1") {
            const data = {
                "newPhoneNumber": editPhone,
                "code": editSms
            }
            axios.post("http://144.91.97.115:9090/api/v1/customer/Manage/ChangePhone", data, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    console.log(res)
                    handleClose()
                    Swal.fire(
                        'Başarılı!',
                        'Numaranız deyiştirildi!',
                        'success'
                    )
                    navigate("/dashboard")

                }).catch(err => {
                    Swal.fire({
                        title: 'Error',
                        text: err.response.data.result,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                })
        }
        else if (localStorage.getItem('num') === "2") {
            const data = {
                "newPhoneNumber": editPhone,
                "code": editSms
            }
            axios.post("http://144.91.97.115:9090/api/v1/driver/Manage/ChangePhone", data, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    console.log(res)
                    handleClose()
                    Swal.fire(
                        'Başarılı!',
                        'Numaranız deyiştirildi!',
                        'success'
                    )
                    navigate("/dashboard")

                }).catch(err => {
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
        <div className="py-28 bg-yellow-300 ">
            <form className="w-full max-w-sm mx-auto">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Numara
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={(e) => setEditPhone(e.target.value)} className="bg-yellow-200 appearance-none border-2 border-yellow-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="inline-full-name" type="text" defaultValue="994" />
                    </div>
                </div>


                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button onClick={isSendSms} className="shadow bg-black  focus:shadow-outline focus:outline-none text-yellow-300 font-bold py-2 px-4 rounded" type="button">
                            Doğrulayın
                        </button>
                    </div>
                </div>
                <Dialog open={open} onClose={handleClose}>
                    <DialogContent>
                        <DialogContentText>
                            Kodu giriniz
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Kod"
                            type="number"
                            fullWidth
                            variant="standard"
                            onChange={(e) => setEditSms(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={isChangePhone}>Onayla</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </div>

    )
}
