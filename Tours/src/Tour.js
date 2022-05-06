import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour}) => {
  

  const [readMore, setReadMore] = useState(false); //State armazenará um estado para ser setado ao clicar em "Read More"

  return(
    <article className='single-tour'>
      <img src={image} alt={name}></img>
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>{readMore?info:`${info.substring(0, 200)}`}...
        <button id="botao" onClick={()=> {
          setReadMore(!readMore);
        }}>{readMore?'show less':'read more'}</button>
        </p> {/*Renderização condicional, se readMore = true, irá renderizar "info" inteira, se readMore for false, irá renderizar info até o caracter 200*/}
        <button onClick={()=>removeTour(id)} className='delete-btn'>Not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
