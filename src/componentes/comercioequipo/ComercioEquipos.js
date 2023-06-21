import React from "react";
import '../src/componentes/ComercioEquipos.css';

function ComercioEquipos(){
    return(
        <div className='cont-equipos'>
            <ul>
                <p>
                    - Comercializacion de equipos de Computo
                    <a href="https://www.hp.com/">
                        <button class="boton"> Equipos Hewlett-Packard </button>
                    </a>
                </p>
            </ul>
        </div>
    );
}
export default ComercioEquipos;