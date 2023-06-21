import React from "react";
import '../hojasestilo/FooterCopR.css';

function FooterPagina(){
    return(
        <div className='cont-footer'>
                   <footer>
          <div class="copy-rights">
            &copy; <em>Claudia Andrea Cifuentes Hincapie</em>
          </div>
          <div>
          <img src=".../imagenes/imagen_pc4.png" width="100" height="95"></img>

          </div>
          <div>
          <a href="https://www.github.com">Enlace GitHub</a>
          </div>
        </footer>
        </div>
    );
}
export default FooterPagina;