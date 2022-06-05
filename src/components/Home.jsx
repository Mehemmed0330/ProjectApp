import React from 'react'
import Feedback from "./Feedback"
import { FaGooglePlay } from "react-icons/fa"
import { BsApple } from "react-icons/bs"

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import "../assets/style.css"


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Home() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <div className="xl:flex  xl:justify-around xl:items-center bg-homeImage md:flex bg-cover bg-center bg-no-repeat md:h-screen" style={{ minHeight: 'calc(100vh - 136px)' }}>
                <Box style={{ backgroundColor: "rgba(3, 18, 16, 0.4)", minHeight: "65vh" }} class="xl:w-5/12 md:w-3/4 w-full">
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Yeni sifariş" {...a11yProps(0)} />
                            <Tab label="Sifarişim" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0} >
                        <form class="w-full min-w-sm ">
                            <div class="xl:flex xl:justify-between  -mx-3 mb-6">
                                <div class="w-full xl:w-7/12 px-3 mb-6 xl:mb-0">
                                    <label class="block uppercase tracking-wide text-yellow-300 text-xs font-bold mb-2 " for="grid-first-name">
                                        Numara
                                    </label>
                                    <input class="placeholder:text-black appearance-none block w-full bg-yellow-300 text-black border  rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-yellow-300" id="grid-first-name" type="number" placeholder="+90" />
                                    <p class="text-red-500 text-xs italic">Lütfen bu alanı doldurun.</p>
                                </div>
                                <div class="flex items-center justify-between  py-2 xl:w-5/12 w-11/12 mx-auto ">
                                    <input class="text-sm appearance-none bg-yellow-300 border-none w-1/2 text-black mr-1 py-2 px-2 leading-tight focus:outline-none placeholder:text-black " type="number" placeholder="Kod ekle" aria-label="Adınız" />
                                    <button class="flex-shrink-0 bg-yellow-300 hover:bg-yellow-400 border-yellow-400 hover:border-yellow-400 text-sm border-4 text-black py-1 px-2 rounded" type="button">
                                        Kodu gönder
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label for="small-input" class="block mb-2 text-sm font-medium text-yellow-300 dark:text-gray-300">Nerden?</label>
                                <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-xl bg-yellow-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div class="mt-5">
                                <label for="small-input" class="block mb-2 text-sm font-medium text-yellow-300 dark:text-gray-300">Nereye?</label>
                                <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-xl bg-yellow-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>

                            <button type="submit" className="my-5 text-black bg-yellow-300 hover:bg-yellow-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Göndermek</button>

                        </form>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className="text-yellow-300">
                            Sifariş yok
                        </div>
                    </TabPanel>

                </Box>
                <div class="mt-32 xl:mt-0"  >
                    <div className="text-center text-custom1 text-white font-bold text-3xl leading-relaxed	">
                        Programı kur <br /> <span className="font-light	">ve Bi Şöför sipariş et</span>
                    </div>
                    <div className="flex py-4 justify-center">
                        <button className="flex items-center border-2 rounded-xl mx-2	 border-white px-3.5 py-4 text-white"><FaGooglePlay className="text-2xl" /> <span className="pl-2 font-semibold xl:text-2xl">Google Play</span></button>
                        <button className="flex items-center border-2 rounded-xl mx-2	 border-white px-3.5 py-4 text-white"><BsApple className="text-2xl" /> <span className="pl-2 font-semibold xl:text-2xl">App Store</span></button>
                    </div>
                </div >
            </div>
            <div>
                <Feedback />
            </div>
        </div>
    )
}
