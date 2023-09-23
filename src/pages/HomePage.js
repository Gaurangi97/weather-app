import React, { Component, useState,useEffect } from 'react';

export default function HomePage() {

    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://forecast9.p.rapidapi.com/rapidapi/station/nearBy/46.97433/10.19575/';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
                    'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.text();

                setData(result);
                console.log(result);
            } catch (error) {
                console.error(error);
            }

        };
        fetchData();
    },[]);
        return (
        <div>HomePage</div>
    )
}
