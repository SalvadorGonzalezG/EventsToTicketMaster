import { useState } from "react";

const Navbar = () => {

    // generamos un estado
    const [value, SetValue] = useState(0);

    // geenramos una funcion que sume el valor inicial del estado
    setTimeout(()=>{
        SetValue(value + 1)
    },2000)
    if(value<3){
        return <div>Cargando...{value}</div>
    }

    return (
        <>
        
            {value < 2 ? (<div> Cargando...</div>) : 
            (
                <div>
            <p>Eventos {value}</p>
            <input type="text" placeholder="Busca tu evento favorito" />
            </div>
            )}
        
        </>
    )
}
export default Navbar;