import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(false); //Componente de carregamento
  const [tours, setTours] = useState([])  //State que armazenará os Tours

  const fetchTours = async () => {  //Função assíncrona responsável por pegar os dados da API
    setLoading(true);

    try{
      const resposta = await fetch(url);
      const tours = await resposta.json() //Método irá transformar a resposta em um JSON comum
      setLoading(false);
      setTours(tours);
      
    }
    catch (error){
      setLoading(false);
      console.log(error)
    }
     
    
  }

  useEffect(()=>{fetchTours()},[]) //O useEffect se segurará que a função fetchTours seja executada apenas uma única vez, ao renderizar o componente na página

  if(loading){
    return <Loading/>
  } //Se a state "loading" for igual a true, o componente "Loading" será renderizado

  else{ //Caso contrário, (loading == false), o componente Tours será renderizado
    return(
      <main>
        <Tours tours={tours}/>
      </main>
    )
  }
  
}

export default App
