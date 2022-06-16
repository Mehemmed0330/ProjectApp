import React from 'react'
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/Logo.svg"
import { useState } from "react"

import { useSelector } from "react-redux"
import { selectUser } from "../redux/userSlice"
import { useNavigate } from "react-router-dom"


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";




const options = [
    'Azerbaycan',
    'Türkiye',

];

export default function Header() {
    const navigate = useNavigate()
    const link = [
        { name: "Ana Sayfa", to: "/" },
        { name: "Hakkımızda", to: "/about" },
        { name: "Hizmetlerimiz", to: "/services" },
        { name: "Ücretlendirme", to: "/cash" },



    ]

    const links = [
        { name: "Kampanyalar", to: "/campaign" },
        { name: "Blog", to: "/blog" },
        { name: "İletişim", to: "/contact" },
        { name: "S.S.S.", to: "/faq" },

    ]
    const afterLink = [
        { name: "Giriş yap veya Kayıt ol", to: "/customer" },
        // { name: "Login", to: "/login" },
    ]


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [openMenu, setOpenMenu] = useState(false);
    const user = useSelector(selectUser)




    return (
        <div>
            <div className="xl:pr-10 bg-black">
                <div className="xl:flex items-center xl:justify-between">
                    <div >
                        <Link to="/">
                            <img src={Logo} alt="" className="w-48 " />

                        </Link>
                    </div>
                    <div onClick={() => setOpenMenu(!openMenu)} className="text-3xl text-yellow-300 absolute right-8 top-12 cursor-pointer xl:hidden">
                        {openMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </div>
                    <div class="w-2/5 xl:w-full mx-auto transition duration-150 ease-out">
                        <ul className={`sm:block xl:flex  xl:items-center xl:justify-between absolute xl:static bg-black xl:z-auto z-[1] left-0 w-full xl:w-auto transition duration-150 ease-in ${openMenu ? '' : 'top-[-1000px]'}`}>
                            {link.map((page, index) =>
                                <NavLink onClick={() => setOpenMenu(false)} to={`${page.to}`}
                                    style={({ isActive }) =>
                                        isActive ? { backgroundColor: "rgb(253,224,71)", color: "black" } : undefined
                                    } key={index} className="block text-yellow-300 xl:px-1 xl:py-4 xl:mx-1 font-semibold hover:bg-yellow-300 transition ease-in hover:text-black p-1 text-center">{page.name}</NavLink>
                            )}
                            {localStorage.getItem('token') ? null :
                                <NavLink onClick={() => setOpenMenu(false)} to={"/driver"}
                                    style={({ isActive }) =>
                                        isActive ? { backgroundColor: "rgb(253,224,71)", color: "black" } : undefined
                                    } className="block text-yellow-300 xl:px-1 xl:py-4 xl:mx-1 font-semibold hover:bg-yellow-300 transition ease-in hover:text-black p-1 text-center">Bi Şoför Ol</NavLink>
                            }
                            {links.map((page, index) =>
                                <NavLink onClick={() => setOpenMenu(false)} to={`${page.to}`}
                                    style={({ isActive }) =>
                                        isActive ? { backgroundColor: "rgb(253,224,71)", color: "black" } : undefined
                                    } key={index} className="block text-yellow-300 xl:px-1 xl:py-4 xl:mx-1 font-semibold hover:bg-yellow-300 transition ease-in hover:text-black p-1 text-center">{page.name}</NavLink>
                            )}
                            <div>
                                <List
                                    component="nav"
                                    aria-label="Device settings"
                                    sx={{ bgcolor: 'background.paper' }}
                                    style={{
                                        padding: '0px',
                                        border: "1px solid black",
                                        backgroundColor: "rgb(253,224,71)"
                                    }}
                                    class="xl:w-full w-1/3 mx-auto xl:z-auto z-[10000]"
                                >
                                    <ListItem
                                        button
                                        id="lock-button"
                                        aria-haspopup="listbox"
                                        aria-controls="lock-menu"

                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClickListItem}
                                        className="font-bold text-base bg-yellow-300 p-2 text-center sm:text-left"
                                    // style={{ backgroundColor: 'rgb(253, 224, 71)' }}
                                    >
                                        <ListItemText
                                            secondary={options[selectedIndex]}
                                            className="font-bold text-center"
                                            style={{
                                                fontWeight: '700',
                                                textAlign: 'center'
                                            }}
                                        />
                                    </ListItem>
                                </List>
                                <Menu
                                    id="lock-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'lock-button',
                                        role: 'listbox',
                                    }}
                                >
                                    {options.map((option, index) => (
                                        <MenuItem
                                            key={option}
                                            // disabled={index === 0}
                                            selected={index === selectedIndex}
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                        >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </div>
                            {localStorage.getItem('token') ? <NavLink onClick={() => setOpenMenu(false)} to={`/dashboard`}
                                style={({ isActive }) =>
                                    isActive ? { backgroundColor: "rgb(253,224,71)", color: "black" } : undefined
                                } className="block text-yellow-300 xl:px-3 xl:py-4 xl:mx-1 font-semibold hover:bg-yellow-300 transition ease-in hover:text-black p-1 text-center">Profil</NavLink> :
                                afterLink.map((page, index) =>

                                    <NavLink onClick={() => setOpenMenu(false)} to={`${page.to}`}
                                        style={({ isActive }) =>
                                            isActive ? { backgroundColor: "rgb(253,224,71)", color: "black" } : undefined
                                        } key={index} className="block text-yellow-300 xl:px-1 xl:py-4 xl:mx-1 font-semibold hover:bg-yellow-300 transition ease-in hover:text-black p-1 text-center">{page.name}</NavLink>
                                )}
                        </ul>
                    </div>


                </div>
            </div>
        </div >
    )
}