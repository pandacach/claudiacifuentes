import React from "react";
import '../hojasestilo/Testimonios.css';
/*import '../hojasestilo/PaginaInicio.css';*/

function Testimonio(){
    return(
        <div className='contenedor-testimonio'>
                  <h3 className='tit-cont-test'>Testimonios de nuestros clientes: </h3>
            <img className='imagentestimonio' src={require('../imagenes/imagen-testimonio.jpg')}
                alt='Foto Testimonio' />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>Miguel Angel Correa Cifuentes</p>
                <p className='cargo-testimonio'>Estudiante de Bachillerato</p>
                <p className='texto-testimonio'>Me prestaron un excelente servicio los puedo recomendar sin ningún problema</p>
                
                <p className='nombre-testimonio'>Gonzalo Morales Echeverri</p>
                <p className='cargo-testimonio'>Ingeniero de Sistemas</p>
                <p className='texto-testimonio'>Excelente servicio los recomiento sin ningún problema</p>
            </div>
        </div>
        
    );
}

export default Testimonio;