import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  const [loading,setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState('name')
  const [value, setValue] = useState('random person')

  const handleValue = (e) => {
    console.log(e.target)
  }

  return <main>
    <div className="block bcg-black">

    </div>
    <div className="block">
      <div className="container">
        {/* lógica da sintaxe abaixo: se o state person for verdadeiro, retornará .image, se o state for null, retornará uma imagem padrão */}
        <img src={(person && person.image) || defaultImage } alt="usuário random" className='user-img'  />
      </div>
    </div>
  </main>
}

export default App