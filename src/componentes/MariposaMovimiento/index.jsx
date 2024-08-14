import React from 'react';

// Importa la imagen directamente si está en la carpeta 'src'
import mariposa from "../../images/mariposa.webp";

const MariposaMovimiento = () => {
  return (
    <div className='mariposa'>
      <img 
        src={mariposa} 
        alt="Moving Example" 
        className="moving-image" 
      />
    </div>
  );
}

export default MariposaMovimiento;
