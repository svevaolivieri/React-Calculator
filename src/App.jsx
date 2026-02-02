import { useState } from 'react'
import SelettoreForma from './components/SelettoreForma';
import Contenitore from './components/Contenitore';
import Calcolatore from './components/Calcolatore';
import '../src/style/Footer.css'

function App() {

  //Indico che lo stato di default è impostato su quadrato
  //Riga 9 e 10 ci servono a livello globale per poi passarli agli altri componenti, come Calcolatore e Contenitore, pertanto le indicherò nel file App
  const [forma, setForma] = useState("quadrato");
  const handleChangeForma = (e) => {
    setForma(e.target.value);
  };

  console.log(forma)
  return (

    <Contenitore forma={forma}>
      <div className='contenitorePrincipale'>
        <h2>Calcolatore di Area e Perimetro</h2>
        <SelettoreForma forma={forma}
          setForma={handleChangeForma}
        />


      </div>
      <div className='contenitoreCalcolatore'>
        <Calcolatore forma={forma} />


      </div>

      <footer>Calcola l'area e il perimetro della forma scelta</footer>

    </Contenitore>

  )
}

export default App
