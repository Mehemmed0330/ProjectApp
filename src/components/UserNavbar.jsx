import { useLocation } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { Button } from '@material-tailwind/react';
// import Icon from '@material-tailwind/react/Icon';
import { Input } from '@material-tailwind/react';
import { useState } from "react"


import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
    const location = useLocation().pathname;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className=" md:ml-64 py-6 px-3 relative">
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                <div className="md:hidden flex">
                    {/* <Button

                        size="lg"

                        onClick={() => setShowSidebar('left-0')}
                        style={{ backgroundColor: "white" }}

                    > */}
                    {/* <Icon name="menu" size="2xl" color="white" /> */}
                    <AiOutlineMenu style={{ fontSize: "26px", color: "black" }} onClick={() => setShowSidebar('left-0')} />
                    {/* </Button> */}
                    <div
                        className={`absolute top-2 md:hidden ${showSidebar === 'left-0' ? 'left-56' : '-left-64'
                            } z-50 transition-all duration-300`}
                    >
                        {/* <Button
                            color="red"
                            buttonType="link"
                            size="lg"
                            iconOnly
                            rounded
                            ripple="light"
                            onClick={() => setShowSidebar('-left-64')}
                        > */}
                        {/* <Icon name="close" size="2xl" color="white" /> */}
                        <AiOutlineClose onClick={() => setShowSidebar('-left-64')} />

                        {/* </Button> */}
                    </div>
                </div>

                {/* <div className="flex justify-between items-center w-full">
                    <h4 className="uppercase text-black text-sm tracking-wider mt-1">
                        {location.toUpperCase().replace('/', '')}
                    </h4>

                    <div className="flex items-center">
                        <Input placeholder="Search" />
                        <span>Aliev Muhammad</span>

                        <div className="-mr-4 ml-6">
                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                                </IconButton>
                            </Tooltip><Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem>
                                    <Avatar /> Profile
                                </MenuItem>
                                <MenuItem>
                                    <Avatar /> My account
                                </MenuItem>
                                <Divider />
                                <MenuItem>
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    Add another account
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <Settings fontSize="small" />
                                    </ListItemIcon>
                                    Settings
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div> */}
            </div>
        </nav>
    );
}