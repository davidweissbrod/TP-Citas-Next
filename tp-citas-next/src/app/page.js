import React from 'react'
import Animales from '../../img/animales.jpg'

export default function Home() {
  return (
    <>
      <div class = "container">
        <h1>Guardia de Mascotas</h1>
        <p>Aca tenes un espacio para poder sacar turnos para tener citas en la guardia</p>
        <img src={Animales}/>
      </div>
    </>
  );
}
