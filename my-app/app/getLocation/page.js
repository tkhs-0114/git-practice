"use client"
import { useEffect } from "react"

export default function Getlocation() {
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                alert(`Latitude: ${position.coords.latitude}\nLongitude: ${position.coords.longitude}`);
            }, (error) => {
                alert(`ERROR(${error.code}): ${error.message}`);
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }, []);
    return (
        <>
            <h1>Hello World</h1>
        </>
    )
}