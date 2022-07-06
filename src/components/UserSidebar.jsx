import { useState } from 'react';
// import { NavLink, Link } from 'react-router-dom';
import { useSelector } from "react-redux"
import { selectUser } from "../redux/userSlice"
// import UserNavbar from './UserNavbar';
import AccountInfo from "../dashboardPages/AccountInfo";
import ActiveOrders from '../dashboardPages/ActiveOrders';
import OrderHistory from '../dashboardPages/OrderHistory';
import SavedAddresses from '../dashboardPages/SavedAddresses';
import ChangePassword from '../dashboardPages/ChangePassword';
import OrderTaxi from "../dashboardPages/OrderTaxi";
import { useNavigate } from "react-router-dom"



// import Icon from '@material-tailwind/react/Icon';
// import h1 from '@material-tailwind/react/Heading6';

export default function Sidebar() {
    const user = useSelector(selectUser)

    const [showSidebar, setShowSidebar] = useState('-left-64');
    const [indexPage, setIndex] = useState(0);
    const link = [
        { name: "Account info", to: 0 },
        { name: "Active orders", to: 1 },
        { name: "Order history", to: 2 },
        // { name: localStorage.getItem('num') === "1" ? "Saved addresses" : null, to: localStorage.getItem('num') === "1" ? 3 : null },
        { name: "Change password", to: 4 },
    ]

    if (localStorage.getItem('num') === "1") {
        link.push({ name: "Saved addresses", to: 3 })
        link.push({ name: "Order Taxi", to: 5 })
    }

    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear(`${user.token}`)
        localStorage.clear(`${user.fullName}`)
        navigate('/')
        window.location.reload()

    }
    return (
        <div>
            {/* <UserNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            /> */}
            <div
                className={`absolute top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`} style={{ minHeight: "80vh", position: 'absolute', top: '118px' }}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <div
                        className="mt-2 text-center w-full inline-block"
                    >
                        <h1 color="gray">{user.firstName} {user.lastName}</h1>
                    </div>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            {link.map((page, index) =>
                                <li
                                    onClick={() => setIndex(page.to)}
                                    style={{
                                        backgroundColor: indexPage === page.to ? "black" : "white",
                                        color: indexPage === page.to ? "rgb(253,224,71)" : "black"
                                    }}
                                    key={index}
                                    className="flex items-center justify-center gap-4 text-sm text-gray-700 font-semibold px-4 py-3  rounded-lg mb-4 hover:bg-yellow-300 cursor-pointer"
                                >
                                    {/* <Icon name="dashboard" size="2xl" /> */}
                                    {page.name}
                                </li>
                            )}

                            <button onClick={logout} className="flex items-center justify-center gap-4 text-sm text-gray-700 font-semibold px-4 py-3  rounded-lg mb-4 hover:bg-yellow-300 cursor-pointer">
                                Logout
                            </button>



                        </ul>

                        {/* <ul className="flex-col min-w-full flex list-none absolute bottom-0">
                            <li className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 px-4 rounded-lg text-white mb-2">
                                <a
                                    href="https://material-tailwind.com/documentation/quick-start"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-light py-3"
                                >
                                    <Icon name="description" size="2xl" />
                                    Documentation
                                </a>
                            </li>
                            <li className="bg-gradient-to-tr from-purple-500 to-purple-700 px-4 rounded-lg text-white">
                                <a
                                    href="https://www.creative-tim.com/product/material-tailwind-dashboard-react"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-4 text-sm font-light py-3"
                                >
                                    Free Download
                                </a>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </div>
            <div hidden={indexPage !== 0}>
                <AccountInfo />
            </div>
            <div hidden={indexPage !== 1}>
                <ActiveOrders />
            </div>
            <div hidden={indexPage !== 2}>
                <OrderHistory />
            </div>

            {localStorage.getItem('num') === "1" && <div hidden={indexPage !== 3}>
                <SavedAddresses />
            </div>}


            <div hidden={indexPage !== 4}>
                <ChangePassword />
            </div>
            <div hidden={indexPage !== 5}>
                <OrderTaxi />
            </div>
        </div>
    );
}