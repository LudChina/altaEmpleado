import React, { useState } from 'react';
import './altaEmpleado.css';

function AltaEmpleado() {

  const [nombre, setNombre] = useState ('');
  const [apellido, setApellido] = useState ('');
  const [domicilio, setDomicilio] = useState ('');
  const [sector, setSector] = useState ('');
  const [cargo, setCargo] = useState ('');
  const [usuario, setUsuario] = useState ('');
  const [clave, setClave] = useState ('');
  const [mensaje, setMensaje] = useState ('');


  const sectores = ["Administracion", "Docente", "Mantenimiento"];
  const cargos = ["Jefe de Administracion", "Titular", "Suplente", "Encargado"];

  const handleSubmit = async (event) => {
    event.preventDefault(); //prevenir la recarga de la página
    
   
    //NUEVO EMPLEADO
    const empleado = {
      nombre,
      apellido,
      domicilio,
      sector,
      cargo,
      usuario,
      clave
    };

    try {
      const response = await fetch('http://www.aulait.com.ar:3000/personal/nuevo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(empleado),
      });

      if (response.ok) {
        const data = await response.json();
        setMensaje(data.mensaje);


    //IMPRIMIR DATOS EN LA CONSOLA
     console.log('Empleado', empleado);
    
    //LIMPIAR CAMPOS DEL FORMULARIO
     {
      setNombre('');
      setApellido('');
      setDomicilio('');
      setSector('');
      setCargo('');
      setUsuario('');
      setClave('');
    }
    } else {
      throw new Error('Error al enviar datos al servidor.');
    }
  } catch (error) {
  console.error('Error al enviar la solicitud POST:', error);
  setMensaje('Error al enviar datos al servidor.');
  }
   };
     

  //FORMULARIO REGISTRO 
  return (
    <div className='form_container'>
      <h1>#Alta Empleado</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label>
          <input placeholder='Nombre' type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
        </label>
        </div>
        <div>
        <label>
          <input placeholder='Apellido' type="text" value={apellido} onChange={(event) => setApellido(event.target.value)} />
        </label>
        </div>
        <div>
        <label>
          <input placeholder='Domicilio' type="text" value={domicilio} onChange={(event) => setDomicilio(event.target.value)} />
        </label>
        </div>
        <div>
        <label>
        </label>
          <select value={sector} onChange={(event) => setSector(event.target.value)}>
            <option value="">Seleccionar Sector</option> {sectores.map((s, index) => ( <option key={index} value={s}>{s} </option>))}
          </select>
        </div>
        <div>
        <label>
        </label>
         <select value={cargo} onChange={(event) => setCargo(event.target.value)}>
            <option value="">Seleccionar Cargo</option> {cargos.map((c, index) => ( <option key={index} value={c}>{c} </option>))}
          </select>
        </div>
        <div>
        <label>
          <input placeholder='Usuario' type="text" value={usuario} onChange={(event) => setUsuario(event.target.value)} />
        </label>
        </div>
        <div>
        <label>
          <input placeholder='Clave' type="password" value={clave} onChange={(event) => setClave(event.target.value)} />
        </label>
        </div>
        <button className='button_guardar' type='submit' onClick={handleSubmit}>GUARDAR</button>
      </form>
    </div>
  )

};

export default AltaEmpleado
