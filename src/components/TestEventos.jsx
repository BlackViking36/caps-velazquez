import React from 'react'

export default function TestEventos() {
    function handleClick(e, id) {
        console.log(e); //(e)evento automatico (id) evento manual
        e.stopPropagation();
        alert('click en :' + id);
    };

    function handleKeyDown(e) {
        console.log(e);
        let vocales = 'aeiouAEIOU';
        if (vocales.indexOf(e.key) >= 0) {
            e.preventDefault();
        }
    }

    return (
        <>
            <div onClick={(e) => handleClick(e, 1)} style={{ border: '1px solid red'}}> Producto 1 </div>
            <p onClick={(e) => handleClick(e, 2)} style={{ border: '1px solid red'}}> Producto 2 </p>
            <input type="text" onKeyDown={handleKeyDown} />
        </>
    )
}
