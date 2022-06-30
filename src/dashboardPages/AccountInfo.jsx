import React from 'react'
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { login } from "../redux/userSlice"
import { AiFillEdit } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import FileBase64 from 'react-file-base64';




export default function AccountInfo() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    const navigate = useNavigate()
    const [updateImage, setUpdateImage] = useState("");


    useEffect(() => {
        if (localStorage.getItem('num') === "1") {
            const getData = async () => {
                axios.get("http://144.91.97.115:9090/api/v1/customer/Manage/AccountInfo", { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                    .then(res => {

                        dispatch(login({
                            firstName: res.data.result.firstname,
                            lastName: res.data.result.lastname,
                            phoneNumber: res.data.result.phoneNumber,
                            email: res.data.result.email,
                            point: res.data.result.points
                        }))
                    })
            }
            getData();

        }
        if (localStorage.getItem('num') === "2") {
            axios.get("http://144.91.97.115:9090/api/v1/driver/Manage/GetAccountInfo", {
                headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` },
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',


            })
                .then(res => {
                    console.log(res.data.result)


                    dispatch(login({
                        firstName: res.data.result.firstname,
                        lastName: res.data.result.lastname,
                        phoneNumber: res.data.result.phoneNumber,
                        email: res.data.result.email,
                        raiting: res.data.result.raiting,
                        balance: res.data.result.balance,
                        pic: res.data.result.driverPhoto

                    }))
                })
        }
    }, [dispatch]);
    const isUpdateImage = () => {
        // e.preventDefault();
        // const formData = new FormData();
        // formData.append('file', updateImage);

        // try {
        //         axios({
        //         method: "post",
        //         url: "http://144.91.97.115:9090/api/v1/driver/Manage/UpdateDriverPhoto",
        //         data: formData,
        //         headers: {
        //             "Authorization": `Bearer ${localStorage.getItem('token')}`,
        //             'Content-Type': 'application/json',
        //             'Accept': 'application/json',
        //         },
        //     });
        // } catch (error) {
        //     console.log(error)
        // }


        console.log("updateImage", updateImage)
        const update = updateImage.split(',')[1]
        console.log("update", update)

        if (localStorage.getItem('num') === "2") {
            const data = {
                "base64": update
            }
            axios.post("http://144.91.97.115:9090/api/v1/driver/Manage/UpdateDriverPhoto", data, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    // 'Content-Type': 'application/json',
                    // 'Accept': 'application/json',
                    // 'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => {
                    console.log(res)
                    alert("Deyisdirildi")
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
        <div className="pl-72 pr-2 ">
            <div className="text-center">
                {localStorage.getItem('num') === '2' ? <img
                    src={!updateImage ? `data:image/jpeg;base64,${user.pic}` : updateImage}
                    className="rounded-full w-32 h-32 mb-2 mx-auto"
                    alt="Avatar"
                /> :
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                        className="rounded-full w-32 mb-4 mx-auto"
                        alt="Avatar"
                    />}
                {/* <div className="mb-4"> */}
                {localStorage.getItem('num') === '2' ? <>
                    <label className="cursor-pointer" onClick={isUpdateImage}>
                        Fotoğrafı değiştir
                    </label>
                    <br />
                    <div>
                        <FileBase64
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) => setUpdateImage(base64)} />
                    </div>
                </> : null}
                {/* </div> */}
                <div className="flex justify-center mb-2">
                    <span className="text-xl font-medium ">Ad:</span><h5 className="text-xl font-bold   ml-2">{user.firstName} {user.lastName}</h5>

                </div>
                <div className="flex justify-center items-center mb-2">
                    <span className="text-xl font-medium  ">Email:</span><p className="text-gray-500 text-xl ml-2">{user.email}</p>
                </div>
                <div className="flex justify-center mb-2">
                    <span className="text-xl font-medium  ">Phone:</span><p className="text-gray-500 text-lg ml-2 flex items-center">{user.phoneNumber} </p>
                    <div onClick={() => navigate("/editPhone")} className="p-2 bg-black ml-2 cursor-pointer"><AiFillEdit className="text-yellow-300 " /></div>

                </div>
                {localStorage.getItem('num') === "1" ? <div className="flex justify-center mb-2">
                    <span className="text-xl font-medium  ">Points:</span><p className="text-gray-500 text-lg ml-2">{user.point}</p>
                </div> : null}
                {localStorage.getItem('num') === "1" ? null : <div className="flex justify-center mb-2">
                    <span className="text-xl font-medium  ">Raiting:</span><p className="text-gray-500 text-lg ml-2">{user.raiting}</p>
                </div>}
                {localStorage.getItem('num') === "1" ? null : <div className="flex justify-center mb-2">
                    <span className="text-xl font-medium  ">Balance:</span><p className="text-gray-500 text-lg ml-2">{user.balance}</p>
                </div>}

            </div>

            <div className="flex justify-center">
                <button onClick={() => navigate("/editAccount")} className="flex items-center bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded">
                    Kişisel bilgileri düzenle <AiFillEdit className="ml-2" />
                </button>
            </div>
            {user.img}
        </div>
    )
}
