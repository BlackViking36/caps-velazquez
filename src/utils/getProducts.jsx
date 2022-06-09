import Productos from "../mock/data";

const getProductos = () => {
    return new Promise((resolve, reject) => {
        const ok = true;
            setTimeout(() => {
                if (ok) {
                    resolve(Productos);
                } else {
                    reject('error');
                }
            }, 4000);
    })
}

export default getProductos;