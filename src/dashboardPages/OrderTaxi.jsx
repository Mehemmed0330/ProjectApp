import React from 'react';

import { FaLocationArrow, FaTimes } from 'react-icons/fa'

import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState } from 'react'

const center = { lat: 48.8584, lng: 2.2945 }

const OrderTaxi = () => {
    // const { isLoaded } = useJsApiLoader({
    //     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    //     libraries: ['places'],
    // })

    const [map, setMap] = useState(null)
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    const originRef = useRef()
    const destiantionRef = useRef()

    // if (!isLoaded) {
    //     return <p>Loading</p>
    // }
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
        setDistance('')
        setDuration('')
        originRef.current.value = ''
        destiantionRef.current.value = ''
    }

    return (
        <div className="pl-72 pr-2 pt-16">
            <div style={{
                position: 'relative',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100vh',
                width: '100vw'
            }}

            >
                <div style={{ position: 'absolute', left: "0", top: "0", height: '100vh', width: '100%' }}>
                    {/* Google Map Box */}
                    <GoogleMap
                        center={center}
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
                        <Marker position={center} />
                        {directionsResponse && (
                            <DirectionsRenderer directions={directionsResponse} />
                        )}
                    </GoogleMap>
                </div>
                <div style={{
                    padding: "10px",
                    borderRadius: '10px',
                    margin: "10px",
                    backgroundColor: 'white',
                    zIndex: '1'
                }}

                >
                    <div style={{ display: "flex", margin: "20px", justifyContent: "space-between" }}>
                        <div>
                            <Autocomplete>
                                <input type='text' placeholder='Origin' ref={originRef} />
                            </Autocomplete>
                        </div>
                        <div>
                            <Autocomplete>
                                <input
                                    type='text'
                                    placeholder='Destination'
                                    ref={destiantionRef}
                                />
                            </Autocomplete>
                        </div>

                        <div>
                            <button colorScheme='pink' type='submit' onClick={calculateRoute}>
                                Calculate Route
                            </button>
                            <button
                                aria-label='center back'
                                icon={<FaTimes />}
                                onClick={clearRoute}
                            />
                        </div>
                    </div>
                    <div style={{ display: "flex", margin: "10px", justifyContent: "space-between" }} spacing={4} mt={4} justifyContent='space-between'>
                        <p>Distance: {distance} </p>
                        <p>Duration: {duration} </p>
                        <button
                            aria-label='center back'
                            icon={<FaLocationArrow />}
                            isRound
                            onClick={() => {
                                map.panTo(center)
                                map.setZoom(15)
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderTaxi;
