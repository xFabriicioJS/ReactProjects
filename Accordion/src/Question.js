import React, { useState } from 'react';
import data from './data'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {


  const  [showMore, setShowMore] = useState(false);


  function switchBtn(){
    setShowMore(!showMore);
    
  }

  return (
     <article className='question'>
       <header>
         <h4>{title}</h4>
         <button className='btn' onClick={()=>switchBtn()}>{showMore?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
       </header>
       <p>{showMore?info:info.substring(0,0)}</p>
     </article>
      
  );
};

export default Question;
