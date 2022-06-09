/* import React, { useEffect } from "react";

export default function TestApi() {

    useEffect(() => {
        fetch('http://api.tvmaze.com/search/shows?q=golden%20girls', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log('algo salio mal...', error);
            })
            .finally(() => {
                console.log('fin');
            });
    },[]);

    return (<div>
        <button> {TestApi} </button>
    </div>)
};
 */