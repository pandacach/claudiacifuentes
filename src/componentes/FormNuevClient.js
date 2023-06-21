import React from "react";
import '../hojasestilo/FormNuevClient.css';

function FormNuevoCliente(){
    return(
        <div className='form-cliente-nuevo'>
            <form action="" class="form" id="form" autocomplete="off">
                <p class="form-titulo">Regístro Nuevos Clientes</p>
                <div class="form-input clientname">
                    <input type="text" id="clientname"></input>
                    <label for="clientname">Nombre: </label>
                    <p class="mensajeError"></p>
                </div>
                <div class="form-input lastname">
                    <input type="text" id="lastname"></input>
                    <label for="lastname">Apellido(s):</label>
                    <p class="mensajeError"></p>
                </div>
                <div class="form-input idclient">
                    <input type="text" id="idclient" onkeypress='return event.charCode >= 48 && event.charCode <= 57'></input>
                    <label for="idclient">Documento:</label>
                    <p class="mensajeError"></p>
                </div>
                <div class="form-input email">
                    <input type="email" id="email"></input>
                    <label for="email">e-mail:</label>
                    <p class="mensajeError"></p>
                </div>
                <div class="form-input mobile">
                    <input type="text" id="mobile" onkeypress='return event.charCode >= 48 && event.charCode <= 57'></input>
                    <label for="mobile">Celular:</label>
                    <p class="mensajeError"></p>
                </div>
                <div class="form-input password">
                    <input type="password" id="password"></input>
                    <label for="password">Contraseña:</label>
                    <p class="mensajeError"></p>
                </div>
                <div class="form-input confirmPassword">
                    <input type="password" id="confirmPassword"></input>
                    <label for="confirmPassword">Confirmar Contraseña:</label>
                    <p class="mensajeError"></p>
                </div>
                <div class="form-termsAndConditions termsAndConditions">
                    <input type="checkbox" id="termsAndConditions"></input>
                    <label for="termsAndConditions">He leído y acepto los</label>
                    <p class="mensajeError"></p>
                </div>
                <div class="form-boton" >
                    <input type="submit" value="Registrar Datos"></input>
                </div>
                <p class="mensajeCorrecto"></p>
            </form>
        </div>
    );
}
export default FormNuevoCliente;