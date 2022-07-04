import React from 'react';
import { AiFillDelete } from "react-icons/ai"
import axios from "axios"
import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectAddress } from "../redux/addressSlice"
import { setAddress } from "../redux/addressSlice"
import { AiOutlinePlus } from "react-icons/ai"
import { GiCardboardBox } from "react-icons/gi"




import "../assets/address.css"

import AddressMap from "../components/AddressMap"


import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';





const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const SavedAddresses = () => {
    const dispatch = useDispatch();
    const [address, setAddressData] = useState([]);
    const addressData = useSelector(selectAddress)
    const [openDelete, setOpenDelete] = React.useState(false);

    const [deletingId, setDeletingId] = React.useState("");

    // const [inputLocationLat, setInputLocationLat] = useState(null)
    // const [inputLocationLng, setInputLocationLng] = useState(null)

    // const geolocation = useGeolocation();




    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        if (localStorage.getItem('num') === "1") {
            axios.get("http://144.91.97.115:9090/api/v1/customer/Manage/Addresses", { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    setAddressData(res.data.result)
                    dispatch(setAddress(res.data.result))
                })
        }
    }, [dispatch]);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpenDelete = (id) => {
        setOpenDelete(true);
        setDeletingId(id);
    };

    const handleCloseDelete = () => {
        setOpenDelete(false);
    };
    const deleteAddress = () => {
        console.log("deletingId", deletingId)
        if (deletingId) {
            const data = {
                "addressId": deletingId
            }
            axios.post("http://144.91.97.115:9090/api/v1/customer/Manage/DeleteAddress", data, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    if (res.status === 200) {
                        console.log(res.data)
                        axios.get("http://144.91.97.115:9090/api/v1/customer/Manage/Addresses", { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                            .then(res => {
                                console.log(res.data.result)
                                setAddressData(res.data.result)
                                dispatch(setAddress(res.data.result))
                                console.log(addressData.addressId)
                            })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
            handleCloseDelete()
        }

    }

    // AutoComplate search input


    console.log(addressData != null && addressData.length > 1 ? "hello" : "bye")











    return (
        <div className="pl-72 pr-7 pt-16 ">
            <Dialog
                open={openDelete}
                onClose={handleCloseDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Kaydettiğiniz bilgiler silinecek."}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Silmek istediğine emin misin?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDelete}>Kabul etmiyorum</Button>
                    <Button onClick={deleteAddress} autoFocus>
                        Kabul ediyorum
                    </Button>
                </DialogActions>
            </Dialog>
            {addressData != null && addressData.length > 0 ? addressData?.map((address, index) =>
                <div key={address.id} className="p-6 mb-5  bg-white rounded-lg border border-gray-200 shadow-md">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{address.shortName}</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{address.addressText}</p>
                    <button onClick={() => handleClickOpenDelete(address.id)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-black bg-yellow-300 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-500 ">
                        Sil
                        <AiFillDelete className="ml-2 -mr-1 w-4 h-4" />
                    </button>
                </div>
            ) : <GiCardboardBox className="text-9xl mx-auto h-96" />}

            <button onClick={handleClickOpen} className="absolute bottom-20 right-20 bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-5 px-5 rounded-full">
                <AiOutlinePlus className="text-xl font-semibold	" />
            </button>
            {open && <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar >
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon className="text-black" />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div" className="text-black">
                            Konum ekle
                        </Typography>


                    </Toolbar>
                </AppBar>
                <AddressMap handleClose={handleClose} />


            </Dialog>}


        </div>
    );
}

export default SavedAddresses;
