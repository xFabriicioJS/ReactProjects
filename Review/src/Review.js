import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0); //State para armazenar o index do array People
  const { name, job, image, text} = people[index];

 
  


  function checkIndex(number){
    if(number > people.length - 1){
      return 0;
    }
    if(number < 0){
      return people.length - 1;
    }
    return number
  }

    function nextPerson(){
      setIndex((index) => {
        let newIndex = index + 1;
        return checkIndex(newIndex)
      })
    }

    function prevPerson(){
      setIndex((index) =>{
        let newIndex = index - 1;
        return checkIndex(newIndex)
      })
    }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn'>
        surprise me
      </button>
    </article>
  );
};

export default Review;
