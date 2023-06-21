
import './App.css';
import Testimonio from './componentes/Testimonios.js';
import Encabezados from './componentes/PaginaInicio.js';
import ServiciosHardware from './componentes/ServHardware.js';
import ServiciosSoftware from './componentes/ServSoftware.js';
import ComercioEquipos from './componentes/ComerEquipos.js';
import FormNuevoCliente from './componentes/FormNuevClient.js';
import FooterPagina from './componentes/FooterCopR.js';

function App() {
  return (
    <div className="App">
      <div className='titulo-pagina'>
         <Encabezados />
      </div>
      <div className='servicios-hardware'>
          <ServiciosHardware />
      </div>
      <div className='servicios-software'>
        <ServiciosSoftware />
      </div>
      <div className='comercia-equipos'>
         <ComercioEquipos />
      </div>
      <div className='cotenedor-testimonios'>
        <Testimonio />
      </div>
      <div className='contenedor-formulario'>
        <FormNuevoCliente />
      </div>
      <dic className='contenedpr-footer'>
        <FooterPagina />
      </dic>
    </div>
  );
}

export default App;
