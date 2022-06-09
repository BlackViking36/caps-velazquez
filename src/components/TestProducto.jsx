/* import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function TestProducto() {

    const { id } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        if(id == 100) {
            setProducto({ id: 100, name: 'Nico', price: 'gold' });
        } else if(id == 101) {
            setProducto({ id: 101, name: 'Rodri', price: 'tin' });
        };
    }, [id]);

    return <div>{producto && <div>{JSON.stringify(producto)}</div>}</div>;

}; */