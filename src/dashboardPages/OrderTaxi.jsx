import React from 'react';
import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState, useEffect } from 'react'
import useGeolocation from 'react-hook-geolocation'
import Geocode from "react-geocode";
import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';


import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';

const icon = (
    <Paper sx={{ m: 1, width: '100%', height: 100 }} elevation={4}>
        <Box sx={{ width: '100%', height: 100 }}>
            <h1>Hi</h1>
        </Box>
    </Paper>
);

const OrderTaxi = () => {
    const [map, setMap] = useState(null)
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const [addressComplateFirst, setAddressComplateFirst] = useState("")
    const [liveLocation, setLiveLocation] = useState("");
    const [addressComplate, setAddressComplate] = useState("")
    const [checked, setChecked] = React.useState(false);
    const containerRef = React.useRef(null);

    const [firstPlace, setFirstPlace] = useState({
        lat: null,
        lng: null
    })
    const [secondPlace, setSecondPlace] = useState({
        lat: null,
        lng: null
    })
    const originRef = useRef()
    const destiantionRef = useRef()
    const geolocation = useGeolocation();
    Geocode.setApiKey("AIzaSyCJyopg1dehOqR9LpxtLEaZ5p4JdwkwL0g");
    Geocode.setLanguage("az");
    Geocode.setRegion("az");
    Geocode.setLocationType("ROOFTOP");
    Geocode.fromLatLng(+geolocation.latitude, +geolocation.longitude).then(
        (response) => {
            const address = response.results[0].formatted_address;
            const addressSecond = response.results[0].formatted_address;
            setLiveLocation(address);
        },
        (error) => {
            console.error(error);
        }
    );

    const options = {
        // types: ['(cities)'],
        componentRestrictions: { country: "az" }
    };
    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    useEffect(() => {
        if (!originRef || !destiantionRef) {
            setDirectionsResponse(null)
            originRef.current.value = ''
            destiantionRef.current.value = ''

        }
    }, [originRef, destiantionRef]);
    useEffect(() => {
        if (secondPlace !== null && firstPlace !== null) {
            setChecked(true)
        }

    }, [secondPlace, firstPlace]);
    async function calculateRoute() {


        if (originRef.current.value === '' || destiantionRef.current.value === '') {
            return
        }

        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: originRef.current.value,
            destination: destiantionRef.current.value,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING,
        })

        setDirectionsResponse(results)

        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)

    }

    function clearRoute() {
        setDirectionsResponse(null)

        // setChecked(false)

        setDistance('')
        setDuration('')
        originRef.current.value = ''
        destiantionRef.current.value = ''
        setAddressComplate("")
        setAddressComplateFirst("")
        setFirstPlace({ lat: null, lng: null })
        setSecondPlace({ lat: null, lng: null })



    }


    const handleSelect = async value => {
        const results = await geocodeByAddress(value)
        const li = await getLatLng(results[0])
        setAddressComplate(value)
        setSecondPlace(li)
    }
    const handleSelectFirst = async value => {
        const results = await geocodeByAddress(value)
        const li = await getLatLng(results[0])
        setAddressComplateFirst(value)
        setFirstPlace(li)
    }

    console.log("secondPlace lat", secondPlace.lat, "secondPlace lng", secondPlace.lng)
    console.log("firstPlace lat", firstPlace.lat, "firstPlace lng", firstPlace.lng)
    console.log(liveLocation)


    return (
        <div className="pl-64  ">
            <div style={{
                position: 'relative',
                flexDirection: 'column',
                alignItems: 'center',
                height: '80vh',
                width: '80vw'
            }}
            >
                <div style={{ position: 'absolute', left: "0", top: "0", height: '80vh', width: '100%' }}>
                    {/* Google Map Box */}
                    <GoogleMap
                        center={{ lat: +geolocation.latitude, lng: +geolocation.longitude }}
                        zoom={15}
                        mapContainerStyle={{ width: '100%', height: '100%' }}
                        options={{
                            zoomControl: false,
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: false,
                        }}
                        onLoad={map => setMap(map)}
                    >
                        {+geolocation.latitude ? <Marker
                            draggable={true}
                            // onGeolocationUpdate={onGeolocationUpdate}
                            position={{ lat: +geolocation.latitude, lng: +geolocation.longitude }} /> : null}
                        {directionsResponse && (
                            <DirectionsRenderer directions={directionsResponse} />
                        )}
                    </GoogleMap>
                </div>
                <div style={{
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    paddingTop: "10px",
                    paddingBottom: "5px",
                    borderRadius: '10px',
                    marginTop: "10px",
                    backgroundColor: 'black',
                    zIndex: '1',
                    position: "absolute",
                    left: "25%",
                }}
                    className="text-yellow-300 bg-black"

                >
                    <div className="flex">
                        <div className="mr-5">
                            <PlacesAutocomplete
                                value={addressComplateFirst}
                                onChange={setAddressComplateFirst}
                                onSelect={handleSelectFirst}
                                searchOptions={{
                                    componentRestrictions: { country: 'az' }
                                }}
                                className="absolute"
                            >
                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                    <div>
                                        <input
                                            ref={originRef}
                                            {...getInputProps({
                                                placeholder: 'Nereden',
                                                // defaultValue: { liveLocation },

                                                className: 'location-search-input',
                                            })}
                                            className="text-black py-2 px-4 "
                                            defaultValue={liveLocation}

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
                            {/* <Autocomplete options={options}>
                                <input type='text' placeholder='Origin' ref={originRef} />
                            </Autocomplete> */}
                        </div>
                        <div className="mr-5">
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
                                            ref={destiantionRef}
                                            {...getInputProps({
                                                placeholder: 'Nereye',
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
                        </div>

                        <div className="flex items-center">
                            <button colorScheme='pink' type='submit' onClick={calculateRoute}>
                                Yolu hesabla
                            </button>
                            <FaTimes
                                aria-label='center back'
                                onClick={clearRoute}
                                className="cursor-pointer ml-2"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between my-1 mx-">
                        <p>Distance: {distance} </p>
                        <p>Duration: {duration} </p>
                        <FaLocationArrow
                            onClick={() => {
                                map.panTo({ lat: geolocation.latitude, lng: geolocation.longitude })
                                map.setZoom(20)
                            }}
                            className="cursor-pointer"
                        />
                    </div>
                </div>
                {/* <Box
                    sx={{
                        height: 180,
                        width: '100%',
                        display: 'flex',
                        padding: 0,
                        borderRadius: 1,
                        overflow: 'hidden',
                        position: 'absolute',
                        bottom: '0'
                    }}
                    ref={containerRef}
                > */}
                {/* <Box sx={{
                    width: '98%', width: '100%',
                    // display: 'flex',
                    // padding: 0,
                    // borderRadius: 1,
                    overflow: 'hidden',
                    position: 'absolute',
                    // bottom: '0'
                }}> */}
                {/* <FormControlLabel
                    control={<Switch checked={checked} onChange={handleChange} />}
                    label="Show from target"
                /> */}
                <Slide direction="up" in={checked} container={containerRef.current} sx={{
                    height: 140,
                    width: '80%',
                    display: 'flex',
                    padding: 0,
                    borderRadius: 1,
                    overflow: 'hidden',
                    position: 'absolute',
                    left: '10%',
                    bottom: '0'
                }}>
                    {icon}
                </Slide>
                {/* </Box> */}
                {/* </Box> */}
            </div>
        </div>
    );
}

export default OrderTaxi;
