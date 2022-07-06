import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useEffect, useState, useRef, useMemo, useCallback } from "react"
import { useDispatch } from "react-redux"
import { selectAddress } from "../redux/addressSlice"
import { useSelector } from "react-redux"
import { setAddress } from "../redux/addressSlice"
import axios from "axios"
import useGeolocation from 'react-hook-geolocation'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';

import Geocode from "react-geocode";



const containerStyle = {
    width: '100%',
    height: '95vh'
};



function AddressMap({ handleClose }) {
    const dispatch = useDispatch();
    // const onGeolocationUpdate = geolocation => {
    //     console.log('Here’s some new data from the Geolocation API: ', geolocation)
    // }
    const geolocation = useGeolocation();
    console.log(geolocation);


    const addressData = useSelector(selectAddress)
    const [addressDataTest, setAddressDataTest] = useState();
    const [map, setMap] = React.useState(null)
    const [addressComplate, setAddressComplate] = useState("")
    const [cardAddress, setCardAddress] = useState("");
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    })
    const [shortName, setShortName] = useState("");
    const center = { lat: +geolocation.latitude, lng: +geolocation.longitude }

    const [draggable, setDraggable] = useState(true)
    const [position, setPosition] = useState(center)
    const markerRef = useRef(null)





    Geocode.setApiKey("AIzaSyCJyopg1dehOqR9LpxtLEaZ5p4JdwkwL0g");
    Geocode.setLanguage("az");
    Geocode.setRegion("az");
    Geocode.setLocationType("ROOFTOP");
    Geocode.enableDebug();
    Geocode.fromLatLng(+geolocation.latitude, +geolocation.longitude).then(
        (response) => {
            const address = response.results[1].formatted_address || response.results[0].formatted_address;
            setCardAddress(address);
        },
        (error) => {
            console.error(error);
        }
    );
    console.log(cardAddress)

    // Geocode.fromLatLng(geolocation.latitude, geolocation.longitude).then(
    //     (response) => {
    //         const address = response.results[0].formatted_address;
    //         let city, state, country;
    //         for (let i = 0; i < response.results[0].address_components.length; i++) {
    //             for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
    //                 switch (response.results[0].address_components[i].types[j]) {
    //                     case "locality":
    //                         city = response.results[0].address_components[i].long_name;
    //                         break;
    //                     case "administrative_area_level_1":
    //                         state = response.results[0].address_components[i].long_name;
    //                         break;
    //                     case "country":
    //                         country = response.results[0].address_components[i].long_name;
    //                         break;
    //                 }
    //             }
    //         }
    //         console.log(city, state, country);
    //         console.log(address);
    //     },
    //     (error) => {
    //         console.error(error);
    //     }
    // );



    // const onLoad = React.useCallback(function callback(map) {
    //     const bounds = new window.google.maps.LatLngBounds(center);
    //     map.fitBounds(bounds);
    //     setMap(map)
    // }, [])


    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };


    // const handleClose = () => {
    //     setOpen(false);
    // };


    // const { isLoaded } = useJsApiLoader({
    //     googleMapsApiKey: "AIzaSyCJyopg1dehOqR9LpxtLEaZ5p4JdwkwL0g",
    //     // libraries: ['places'],
    // })

    // useEffect(() => {
    //     dispatch(setAddress({
    //         locationLatitude: +geolocation.latitude,
    //         locationLongitude: +geolocation.longitude
    //     }))
    // }, [dispatch, geolocation]);


    const handleSelect = async value => {
        const results = await geocodeByAddress(value)
        const li = await getLatLng(results[0])
        setAddressComplate(value)
        setCoordinates(li)
    }

    const searchOptions = {
        location: new window.google.maps.LatLng(geolocation.latitude, geolocation.longitude),
        radius: 500,
        types: ['address']
    }
    useEffect(() => {
        if (localStorage.getItem('num') === "1") {
            axios.get("http://144.91.97.115:9090/api/v1/customer/Manage/Addresses", { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    console.log(res.data.result)


                })
        }
    }, []);
    const isSaveAddress = () => {
        if (localStorage.getItem('num') === "1") {
            const data = {
                "id": 0,
                "shortName": shortName,
                "addressText": !addressComplate ? cardAddress : addressComplate,
                "latitude": !coordinates.lat ? +geolocation.latitude : +coordinates.lat,
                "longitude": !coordinates.lng ? +geolocation.longitude : +coordinates.lng,
            }
            axios.post("http://144.91.97.115:9090/api/v1/customer/Manage/SaveAddress", data, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    if (res.status === 200) {
                        console.log(res.data)
                        axios.get("http://144.91.97.115:9090/api/v1/customer/Manage/Addresses", { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
                            .then(res => {
                                console.log(res.data.result)
                                dispatch(setAddress(res.data.result))
                                handleClose()
                            })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }

    }
    // if (!isLoaded) {
    //     return <p>Loading</p>
    // }



    return <>
        <div className="absolute top-2 flex  right-5" style={{ zIndex: "2000", }}>
            <PlacesAutocomplete
                value={addressComplate}
                onChange={setAddressComplate}
                onSelect={handleSelect}
                searchOptions={{
                    componentRestrictions: { country: 'az' }
                }}
                className="absolute"
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Arama Yeri',
                                className: 'location-search-input',
                            })}
                            className="text-black py-2 px-4 "
                        />
                        <div className="autocomplete-dropdown-container" style={{ position: "absolute" }}>
                            {loading && <div className="absolute bg-white text-black">Yükleniyor...</div>}
                            {suggestions.map((suggestion, index) => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: 'black', cursor: 'pointer', color: "white" }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer', color: "black" };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                        key={index}
                                        className=" p-2"
                                    >
                                        <span key={index} >{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
            <button onClick={handleClickOpen} className="bg-black  text-yellow-300 font-bold py-2 px-4 rounded-full ml-5">
                Kaydetmek
            </button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Onaylamak</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Seçtiğiniz adresin ismini girin.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Adresin ismi"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setShortName(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>İptal</Button>
                    <Button onClick={isSaveAddress}>Kaydet</Button>
                </DialogActions>
            </Dialog>
        </div>

        <GoogleMap

            mapContainerStyle={containerStyle}
            center={{ lat: !coordinates.lat ? +geolocation.latitude : coordinates.lat, lng: !coordinates.lng ? +geolocation.longitude : coordinates.lng }}
            zoom={15}
        // onUnmount={onUnmount}
        >
            {coordinates.lat ? <Marker
                // draggable={true}
                // onGeolocationUpdate={onGeolocationUpdate}
                position={{ lat: coordinates.lat, lng: coordinates.lng }} /> : geolocation.latitude ? <Marker
                    draggable={true}
                    // onGeolocationUpdate={onGeolocationUpdate}
                    position={{ lat: geolocation.latitude, lng: geolocation.longitude }} /> : null}



            { /* Child components, such as markers, info windows, etc. */}

        </GoogleMap>
    </>

}

export default React.memo(AddressMap)