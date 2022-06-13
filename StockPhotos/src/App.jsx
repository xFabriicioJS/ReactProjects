import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {

  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    setLoading(true);
    let url;
    url = `${mainUrl}${clientID}`

    const response = await fetch(url);
    const data = await response.json();

    setLoading(false);
    setPhotos(data);
  }



  //   setLoading(true);
  //   let url;
  //   url = `${mainUrl}${clientID}`

  //   try {
  //     const response = await fetch(url)
  //     const data = response.json()
      
  //     setPhotos(data);
  //     setLoading(false);
  //   }
  //    catch (error) {
  //     setLoading(false)
  //     console.log(error)
  //   }
  // }

  useEffect(()=>{
    fetchImages()
  },[])

  useEffect(()=>{

    const event = window.addEventListener('scroll', ()=>{


      
      if(!loading && (2 + window.innerHeight + window.scrollY) >= document.body.scrollHeight){
        console.log('it worked!')
      }
    })
    return ()=> window.removeEventListener('scroll', event)
  },[])

const handleSubmit = (e) => {
 e.preventDefault();
 console.log('hellow')
}

  return (
    <main>
      <section className='search'>
        <form action="text" className='search-form'>
          <input type="text" className="form-input" placeholder='search'/>
          <button type='submit' className='submit-btn' onClick={handleSubmit}>
            {<FaSearch/>}
          </button>
        </form>
      </section>
      <section className='photos'>
          <div className="photos-center">
            {photos.map((photo, id ) => {
              return(
                <Photo key={photo.id} {...photo}/>
              )
            })}
          </div>
          {/* lógica abaixo: se loading for true, retornar um h2 com loading... */}
          {loading && <h2 className='loading'>Loading...</h2>}
      </section>
    </main>
  )
}

export default App
