import { useState, useEffect } from 'react';

const Geolocation = () => {

    const [location, setLocation] = useState({
        coordinates: { lat: -1, long: -1 }
    });

    useEffect(() => {
        const success = location => {
            setLocation({
                loaded: true,
                coordinates: {
                    lat: location.coords.latitude,
                    long: location.coords.longitude,
                }
            });
        }

        const error = err => {
            setLocation({
                loaded: true,
                err,
            })
            console.log('location unavailable');
        }
        navigator.geolocation.getCurrentPosition(success, error);
        console.log(location);


    }, [])
    return location;
}

export default Geolocation;


