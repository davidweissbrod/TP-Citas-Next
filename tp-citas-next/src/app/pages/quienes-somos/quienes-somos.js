import React from 'react'
import IanDavid from '../../img/david-ian.jpg'

const Nosotros = () =>{
    return(
    <>
        <h1>¿Quienes somos?</h1>
        <br/>
        <h2>Ian y David</h2>
        <img src={IanDavid}/>
        <p>
            Somos dos personas que aman a los animalitos y buscamos ayudarlos de las maneras que podemos, por eso es que creamos esta pagina para nuestra 
            guardia, haciendo que sea mas facil organizar los turnos logrando asi mucho mas dinamismo y el poder ayudar a muchas mas mascotas.
            ¡Muchas gracias por elegirnos!
        </p>
    </>
    );
}
export default Nosotros;