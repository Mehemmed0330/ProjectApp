import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { login } from "../redux/userSlice"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [phone, setPhone] = useState('');
    const [pass, setPass] = useState('');
    const [type, setType] = useState('1');
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()

        setLoadingSubmit(true);

        if (type === '1') {
            const data = {
                "phoneNumber": phone,
                "password": pass
            }

            axios.post('http://144.91.97.115:9090/api/v1/customer/Account/Authenticate', data)
                .then(res => {
                    localStorage.setItem('token', res.data.result.jwtToken);
                    localStorage.setItem('fullName', JSON.stringify(res.data.result.fullname));
                    console.log(res)
                    const fullName = window.localStorage.getItem('fullName')
                    const token = window.localStorage.getItem('token')
                    console.log(fullName)
                    dispatch(login({
                        fullName: JSON.parse(fullName),
                        token: (token)
                    }));
                    navigate('/')

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
        } else if (type === '0') {
            const data = {
                "phoneNumber": phone,
                "password": pass
            }

            axios.post('http://144.91.97.115:9090/api/v1/driver/Account/Authenticate', data)
                .then(res => {
                    localStorage.setItem('token', res.data.result.jwtToken);
                    localStorage.setItem('fullName', JSON.stringify(res.data.result.fullname));
                    console.log(res)
                    const fullName = window.localStorage.getItem('fullName')
                    const token = window.localStorage.getItem('token')
                    console.log(fullName)
                    dispatch(login({
                        fullName: JSON.parse(fullName),
                        token: (token)
                    }));
                    // navigate('/dashboard')

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
        // navigate("/dashboard")
    }


    return (
        <div class="w-full max-w-30 bg-yellow-300 pb-5  ">

            <form onSubmit={handleSubmit} class="bg-yellow-300 shadow-md rounded px-4 pt-6 pb-20 mx-auto md:w-1/2 w-11/12 ">
                <select className="bg-yellow-200" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="0">Bisofor</option>
                    <option value="1">Müşteri</option>
                </select>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Numara
                    </label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-yellow-200" id="username" type="text" placeholder="Username" />
                </div>
                <div class="mb-6 mt-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Kod
                    </label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-yellow-200" id="password" type="password" placeholder="******************" />
                    <p class="text-red-500 text-xs italic">Lütfen bir şifre seçin.</p>
                </div>
                <div class="flex items-center justify-between ">
                    <button disabled={loadingSubmit} class="bg-black  text-yellow-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        {loadingSubmit ? 'bekleyin...' : 'Kayıt ol'}
                    </button>
                    <Link to="/forgotPassword" class=" align-baseline font-bold text-sm text-black  md:mt-0 " href="#">
                        Parolanızı mı unuttunuz?
                    </Link>

                </div>

            </form>
            {/* <p class="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
            </p> */}
        </div>
    )
}
