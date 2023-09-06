import React, { useState } from 'react';
import './altaEmpleado.css';

function AltaEmpleado() {

  const [nombre, setNombre] = useState ('');
  const [apellido, setApellido] = useState ('');
  const [email, setEmail] = useState ('');
  const [sector, setSector] = useState ('');
  const [cargo, setCargo] = useState ('');
  const [usuario, setUsuario] = useState ('');
  const [clave, setClave] = useState ('');


  const sectores = ["Administracion", "Docente", "Mantenimiento"];
  const cargos = ["Jefe de Administracion", "Titular", "Suplente", "Encargado"];

  const handleSubmit = (event) => {
    // CONFIGUARACIÓN DE CONEXION A LA BASE MySQL

    //CONEXION A BASE DE DATOS
    

    //NUEVO EMPLEADO
    const empleado = {
      nombre,
      apellido,
      email,
      sector,
      cargo,
      usuario,
      clave
    };


    //IMPRIMIR DATOS EN LA CONSOLA
     console.log('Empleado', empleado);
    
    //LIMPIAR CAMPOS DEL FORMULARIO
     {
      setNombre('');
      setApellido('');
      setEmail('');
      setSector('');
      setCargo('');
      setUsuario('');
      setClave('');
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
          <input placeholder='Email' type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
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
}

export default AltaEmpleado
