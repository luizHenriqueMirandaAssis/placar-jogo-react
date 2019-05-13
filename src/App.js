import React from 'react';
import './App.css';
import Placar from './Placar'

const dados = {

  partida: {
      campeonato: "Brasileirão Série A",
      dataHora: "28/04/2019 - 16:00"
  },
  casa:{
      nome: "Bahia",
      image: "https://logodownload.org/wp-content/uploads/2017/02/e-c-bahia-logo-escudo-11.png"
  },
  visitante:{
      nome:"Corinthians",
      image:"https://cdn.freebiesupply.com/logos/large/2x/esporte-clube-corinthians-de-laguna-sc-logo-png-transparent.png"
  },
  ImageGol:{
    image: "https://www.nicepng.com/png/full/417-4176561_nome-gol-de-futebol-png.png"
  }

}

function App() {
  return ( 
    <Placar
      partida={dados.partida}
      casa={dados.casa}
      visitante={dados.visitante}
      imageGol ={dados.ImageGol.image}
    />
  ); 
}

export default App;
