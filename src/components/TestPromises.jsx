import React, { useEffect, useState } from "react";

export default function TestPromises() {
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [resultado, setResultado] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        setResultado([]);

        const pagara = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
            { id: 23, nombre: "Perfume", precio: 20 },
            { id: 24, nombre: "Agua", precio: 10 },
            ]);
            //reject('No pago, incobrable!')
        }, 3000);
        });

        pagara
        .then((result) => {
            setLoading(false);
            setResultado(result);
        })
        .catch((error) => {
            setLoading(false);
            setError(true);
        });
    }, []);

    return (
        <>
        <div>{loading && " Loading... "}</div>
        <div>{error && " Error en el pago! "}</div>
        <div>
            {resultado &&
            resultado.map((item) => (
                <>
                <p>id: {item.id}</p>
                <p>nombre: {item.nombre}</p>
                <p>precio: {item.precio}</p>
                </>
            ))}
        </div>
        </>
    );
}
